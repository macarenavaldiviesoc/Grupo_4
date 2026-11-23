import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";
import type { DespachoItem } from "@/lib/imprevistos";

export const dynamic = "force-dynamic";

function firstOf<T>(value: T | T[] | null | undefined): T | null {
  if (!value) return null;
  return Array.isArray(value) ? (value[0] ?? null) : value;
}

export async function GET(request: NextRequest) {
  try {
    const supabase = getSupabaseServerClient();
    const query = (request.nextUrl.searchParams.get("q") ?? "").trim().toLowerCase();

    const { data, error } = await supabase
      .from("despachos")
      .select(
        `
        id_despacho,
        origen,
        destino,
        estado,
        fecha_programada,
        plantas ( id_planta, nombre_planta ),
        vehiculos ( id_vehiculo, patente, tipo_camion )
      `
      )
      .in("estado", ["en_curso", "con_imprevisto"])
      .order("id_despacho", { ascending: true });

    if (error) {
      return NextResponse.json(
        {
          error: "No se pudieron cargar los despachos desde la base de datos.",
        },
        { status: 500 }
      );
    }

    const despachos: DespachoItem[] = (data ?? []).map((row) => {
      const plantaObj = firstOf(
        row.plantas as
          | { id_planta: number; nombre_planta: string }
          | { id_planta: number; nombre_planta: string }[]
          | null
      );
      const vehiculoObj = firstOf(
        row.vehiculos as
          | { id_vehiculo: number; patente: string; tipo_camion: string | null }
          | { id_vehiculo: number; patente: string; tipo_camion: string | null }[]
          | null
      );

      return {
        id_despacho: Number(row.id_despacho),
        planta: plantaObj?.nombre_planta ?? row.origen,
        patente: vehiculoObj?.patente ?? "Sin patente",
        detalle: row.destino || vehiculoObj?.tipo_camion || "Despacho en curso",
        estado: String(row.estado),
        fecha_programada: String(row.fecha_programada),
      };
    });

    const filtered = query
      ? despachos.filter(
          (item) =>
            item.planta.toLowerCase().includes(query) ||
            item.patente.toLowerCase().includes(query) ||
            item.detalle.toLowerCase().includes(query)
        )
      : despachos;

    return NextResponse.json({ despachos: filtered }, { status: 200 });
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : "Error interno al consultar despachos.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
