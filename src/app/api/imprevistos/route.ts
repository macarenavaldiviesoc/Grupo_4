import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";
import {
  formatFolio,
  getTipoLabel,
  validarImprevistoInput,
  type AvisoResultado,
  type ImprevistoCreadoResponse,
} from "@/lib/imprevistos";

export const dynamic = "force-dynamic";

const DEFAULT_COORDINATOR_ID = 1;

function firstOf<T>(value: T | T[] | null | undefined): T | null {
  if (!value) return null;
  return Array.isArray(value) ? (value[0] ?? null) : value;
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        error: "El cuerpo de la solicitud no es un JSON válido.",
        field: "tipo",
      },
      { status: 400 }
    );
  }

  // 1. Validación estricta en backend (rechaza y no guarda aunque el frontend no valide)
  const validation = validarImprevistoInput(body);
  if (!validation.ok) {
    return NextResponse.json(
      {
        error: validation.error,
        field: validation.field,
        errors: validation.errors,
      },
      { status: 400 }
    );
  }

  const { id_despacho, tipo, descripcion } = validation.data;

  try {
    const supabase = getSupabaseServerClient();

    // 2. Verificar que el despacho exista en Supabase y esté activo
    const { data: despacho, error: despachoError } = await supabase
      .from("despachos")
      .select(
        `
        id_despacho,
        origen,
        estado,
        id_despachador,
        id_jefe_operaciones,
        plantas ( nombre_planta ),
        vehiculos ( patente, id_conductor )
      `
      )
      .eq("id_despacho", id_despacho)
      .in("estado", ["en_curso", "con_imprevisto"])
      .maybeSingle();

    if (despachoError) {
      return NextResponse.json(
        {
          error: "No se pudo verificar el despacho en la base de datos.",
        },
        { status: 500 }
      );
    }

    if (!despacho) {
      return NextResponse.json(
        {
          error: "El despacho indicado no existe o no se encuentra en curso.",
          field: "id_despacho",
        },
        { status: 404 }
      );
    }

    const plantaObj = firstOf(
      despacho.plantas as
        | { nombre_planta: string }
        | { nombre_planta: string }[]
        | null
    );
    const vehiculoObj = firstOf(
      despacho.vehiculos as
        | { patente: string; id_conductor: number | null }
        | { patente: string; id_conductor: number | null }[]
        | null
    );

    const idCoordinador =
      Number(despacho.id_despachador) || DEFAULT_COORDINATOR_ID;

    // 3. Guardar el imprevisto en Supabase
    const { data: imprevisto, error: insertError } = await supabase
      .from("imprevistos")
      .insert({
        id_despacho: Number(despacho.id_despacho),
        id_usuario_registra: idCoordinador,
        tipo,
        descripcion,
        estado: "abierto",
      })
      .select("id_imprevisto, id_despacho, tipo, descripcion, fecha_registro")
      .single();

    if (insertError || !imprevisto) {
      return NextResponse.json(
        {
          error: "No se pudo guardar el imprevisto en la base de datos.",
        },
        { status: 500 }
      );
    }

    // 4. Actualizar estado del despacho a con_imprevisto (sigue siendo seleccionable en P1)
    await supabase
      .from("despachos")
      .update({ estado: "con_imprevisto" })
      .eq("id_despacho", Number(despacho.id_despacho));

    // 5. Registrar avisos en NOTIFICACIONES (envío real por correo queda para iteración 2)
    const destinatarios: { id_usuario: number; rol: string }[] = [];
    if (despacho.id_jefe_operaciones) {
      destinatarios.push({
        id_usuario: Number(despacho.id_jefe_operaciones),
        rol: "Jefe/a de operaciones",
      });
    }
    if (vehiculoObj?.id_conductor) {
      destinatarios.push({
        id_usuario: Number(vehiculoObj.id_conductor),
        rol: "Conductor/a",
      });
    }

    const usuariosIds = destinatarios.map((d) => d.id_usuario);
    const nombresPorId = new Map<number, string>();

    if (usuariosIds.length > 0) {
      const { data: usuarios } = await supabase
        .from("usuarios")
        .select("id_usuario, nombre")
        .in("id_usuario", usuariosIds);

      for (const u of usuarios ?? []) {
        nombresPorId.set(Number(u.id_usuario), String(u.nombre));
      }

      const notifRows = destinatarios.map((d) => ({
        id_imprevisto: Number(imprevisto.id_imprevisto),
        id_usuario_destinatario: d.id_usuario,
        canal: "correo",
        estado_envio: "enviado",
        intentos: 1,
        leido: false,
      }));

      await supabase.from("notificaciones").insert(notifRows);
    }

    const avisos: AvisoResultado[] = destinatarios.map((d) => ({
      rol: d.rol,
      nombre: nombresPorId.get(d.id_usuario) ?? d.rol,
      estado: "Enviado",
    }));

    const response: ImprevistoCreadoResponse = {
      folio: formatFolio(
        Number(imprevisto.id_imprevisto),
        imprevisto.fecha_registro
      ),
      id_imprevisto: Number(imprevisto.id_imprevisto),
      despacho: {
        id_despacho: Number(despacho.id_despacho),
        planta: plantaObj?.nombre_planta ?? despacho.origen,
        patente: vehiculoObj?.patente ?? "Sin patente",
      },
      tipo,
      tipo_label: getTipoLabel(tipo),
      descripcion: String(imprevisto.descripcion),
      fecha_registro: String(imprevisto.fecha_registro),
      avisos,
    };

    return NextResponse.json(response, { status: 201 });
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : "Error interno al registrar el imprevisto.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
