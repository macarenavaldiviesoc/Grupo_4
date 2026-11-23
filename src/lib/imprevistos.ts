export const TIPOS_IMPREVISTO = [
  { value: "carga_no_lista", label: "Carga no lista" },
  { value: "retraso", label: "Retraso" },
  { value: "camion_en_espera", label: "Camión en espera" },
] as const;

export type TipoImprevistoValue = (typeof TIPOS_IMPREVISTO)[number]["value"];

export interface DespachoItem {
  id_despacho: number;
  planta: string;
  patente: string;
  detalle: string;
  estado: string;
  fecha_programada: string;
}

export interface AvisoResultado {
  rol: string;
  nombre: string;
  estado: "Enviado" | "Fallido" | "Pendiente";
}

export interface ImprevistoCreadoResponse {
  folio: string;
  id_imprevisto: number;
  despacho: {
    id_despacho: number;
    planta: string;
    patente: string;
  };
  tipo: TipoImprevistoValue;
  tipo_label: string;
  descripcion: string;
  fecha_registro: string;
  avisos: AvisoResultado[];
}

export interface ValidationErrorDetail {
  field: "id_despacho" | "tipo" | "descripcion";
  message: string;
}

const VALID_TIPO_MAP = new Map<string, string>(
  TIPOS_IMPREVISTO.map((t) => [t.value, t.label])
);

export function getTipoLabel(tipo: string): string {
  return VALID_TIPO_MAP.get(tipo) ?? tipo;
}

export function formatFolio(
  idImprevisto: number,
  fechaRegistro?: string | null
): string {
  const year = fechaRegistro
    ? new Date(fechaRegistro).getUTCFullYear()
    : new Date().getUTCFullYear();
  const safeYear = Number.isNaN(year) ? new Date().getUTCFullYear() : year;
  return `IMP-${safeYear}-${String(idImprevisto).padStart(3, "0")}`;
}

export function validarImprevistoInput(body: unknown):
  | {
      ok: true;
      data: {
        id_despacho: number;
        tipo: TipoImprevistoValue;
        descripcion: string;
      };
    }
  | {
      ok: false;
      error: string;
      field: ValidationErrorDetail["field"];
      errors: ValidationErrorDetail[];
    } {
  const payload =
    body && typeof body === "object"
      ? (body as Record<string, unknown>)
      : {};

  const errors: ValidationErrorDetail[] = [];

  const rawId = payload.id_despacho;
  const parsedId =
    typeof rawId === "number"
      ? rawId
      : typeof rawId === "string" && rawId.trim() !== ""
        ? Number(rawId)
        : NaN;

  if (!Number.isInteger(parsedId) || parsedId <= 0) {
    errors.push({
      field: "id_despacho",
      message: "Debe seleccionar un despacho válido en curso.",
    });
  }

  const rawTipo = typeof payload.tipo === "string" ? payload.tipo.trim() : "";
  if (!rawTipo) {
    errors.push({
      field: "tipo",
      message: "Para continuar debe haber seleccionado un tipo de imprevisto.",
    });
  } else if (!VALID_TIPO_MAP.has(rawTipo)) {
    errors.push({
      field: "tipo",
      message:
        "Tipo de imprevisto inválido. Valores permitidos: Carga no lista, Retraso o Camión en espera.",
    });
  }

  const rawDescripcion =
    typeof payload.descripcion === "string" ? payload.descripcion.trim() : "";
  if (!rawDescripcion) {
    errors.push({
      field: "descripcion",
      message: "Para continuar debe ingresar una descripción breve del imprevisto.",
    });
  } else if (rawDescripcion.length < 3) {
    errors.push({
      field: "descripcion",
      message: "La descripción debe tener al menos 3 caracteres.",
    });
  } else if (rawDescripcion.length > 500) {
    errors.push({
      field: "descripcion",
      message: "La descripción no puede superar los 500 caracteres.",
    });
  }

  if (errors.length > 0) {
    return {
      ok: false,
      error: errors[0].message,
      field: errors[0].field,
      errors,
    };
  }

  return {
    ok: true,
    data: {
      id_despacho: parsedId,
      tipo: rawTipo as TipoImprevistoValue,
      descripcion: rawDescripcion,
    },
  };
}
