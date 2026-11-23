"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  TIPOS_IMPREVISTO,
  type DespachoItem,
  type ImprevistoCreadoResponse,
} from "@/lib/imprevistos";

type Screen = "P1" | "P2" | "P4";

export default function ImprevistosFlow() {
  const [screen, setScreen] = useState<Screen>("P1");

  // Estado P1 · Buscar despacho
  const [despachos, setDespachos] = useState<DespachoItem[]>([]);
  const [loadingDespachos, setLoadingDespachos] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDespachoId, setSelectedDespachoId] = useState<number | null>(
    null
  );
  const [p1Error, setP1Error] = useState<string | null>(null);

  // Estado P2 / P3 · Registrar imprevisto
  const [tipo, setTipo] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [errorField, setErrorField] = useState<string | null>(null);

  // Estado P4 · Folio y avisos
  const [resultado, setResultado] = useState<ImprevistoCreadoResponse | null>(
    null
  );

  const cargarDespachos = useCallback(async () => {
    setLoadingDespachos(true);
    setLoadError(null);
    try {
      const response = await fetch("/api/despachos", { cache: "no-store" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "No se pudieron cargar los despachos en curso."
        );
      }

      const lista: DespachoItem[] = Array.isArray(data.despachos)
        ? data.despachos
        : [];
      setDespachos(lista);
    } catch (err) {
      setLoadError(
        err instanceof Error
          ? err.message
          : "No fue posible conectar con el servidor."
      );
    } finally {
      setLoadingDespachos(false);
    }
  }, []);

  useEffect(() => {
    void cargarDespachos();
  }, [cargarDespachos]);

  const despachosFiltrados = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return despachos;
    return despachos.filter(
      (item) =>
        item.planta.toLowerCase().includes(q) ||
        item.patente.toLowerCase().includes(q) ||
        item.detalle.toLowerCase().includes(q)
    );
  }, [despachos, searchQuery]);

  const selectedDespacho = useMemo(
    () => despachos.find((d) => d.id_despacho === selectedDespachoId) ?? null,
    [despachos, selectedDespachoId]
  );

  const handleSeleccionarDespacho = () => {
    if (!selectedDespacho) {
      setP1Error("Selecciona un despacho en curso antes de continuar.");
      return;
    }
    setP1Error(null);
    setFormError(null);
    setErrorField(null);
    setScreen("P2");
  };

  const handleConfirmar = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedDespacho || submitting) return;

    setSubmitting(true);
    setFormError(null);
    setErrorField(null);

    try {
      // Se envía al backend sin bloquear en HTML5 para que la validación ocurra realmente en el servidor.
      const response = await fetch("/api/imprevistos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_despacho: selectedDespacho.id_despacho,
          tipo,
          descripcion,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // P3 · Falta un dato o error de validación: se muestra el aviso conservando lo escrito.
        setFormError(
          data?.error || "No se pudo registrar el imprevisto. Intenta nuevamente."
        );
        setErrorField(typeof data?.field === "string" ? data.field : null);
        return;
      }

      setResultado(data as ImprevistoCreadoResponse);
      setScreen("P4");
    } catch {
      setFormError(
        "No fue posible conectar con el servidor. Tus datos siguen guardados en pantalla para reintentar."
      );
      setErrorField(null);
    } finally {
      setSubmitting(false);
    }
  };

  const handleVolverADespachos = () => {
    setTipo("");
    setDescripcion("");
    setFormError(null);
    setErrorField(null);
    setResultado(null);
    setSelectedDespachoId(null);
    setScreen("P1");
    void cargarDespachos();
  };

  return (
    <main className="page-shell">
      <div className="app-card">
        <header className="app-header">
          <div className="app-header-title">Despachos / Imprevistos</div>
          <div className="app-header-logo">Logo</div>
        </header>

        {/* P1 · Buscar despacho */}
        {screen === "P1" && (
          <section className="app-body" aria-label="Buscar despacho">
            <div>
              <p className="step-label">PASO 1 DE 3</p>
              <h1 className="screen-title">Buscar despacho</h1>
              <p className="screen-subtitle">Encuentra el retiro afectado</p>
            </div>

            <div className="field-group">
              <label htmlFor="busqueda-despacho" className="field-label">
                Planta o patente
              </label>
              <input
                id="busqueda-despacho"
                type="text"
                className="text-input"
                placeholder="Ej. Planta Norte o JK-LP-82"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setP1Error(null);
                }}
              />
            </div>

            <div className="field-group">
              <span className="field-label">Despachos en curso</span>

              {loadingDespachos && (
                <p className="loading-text">Cargando despachos en curso…</p>
              )}

              {!loadingDespachos && loadError && (
                <div className="empty-box" role="alert">
                  <div className="alert-box">{loadError}</div>
                  <button
                    type="button"
                    className="btn btn-secondary btn-full"
                    onClick={() => void cargarDespachos()}
                  >
                    Reintentar
                  </button>
                </div>
              )}

              {!loadingDespachos &&
                !loadError &&
                despachosFiltrados.length === 0 && (
                  <div className="empty-box" role="status">
                    <p>No hay despachos en curso en esta planta</p>
                    {searchQuery.trim() !== "" && (
                      <button
                        type="button"
                        className="btn btn-secondary btn-full"
                        onClick={() => setSearchQuery("")}
                      >
                        Buscar de nuevo
                      </button>
                    )}
                  </div>
                )}

              {!loadingDespachos &&
                !loadError &&
                despachosFiltrados.length > 0 && (
                  <div className="dispatch-list" role="listbox">
                    {despachosFiltrados.map((item) => {
                      const isSelected =
                        item.id_despacho === selectedDespachoId;
                      return (
                        <button
                          key={item.id_despacho}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          className={`dispatch-item ${
                            isSelected ? "dispatch-item-selected" : ""
                          }`}
                          onClick={() => {
                            setSelectedDespachoId(item.id_despacho);
                            setP1Error(null);
                          }}
                        >
                          <span className="dispatch-plant">{item.planta}</span>
                          <span className="dispatch-meta">
                            {item.patente} · {item.detalle}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
            </div>

            {p1Error && (
              <div className="alert-box" role="alert">
                {p1Error}
              </div>
            )}

            <button
              type="button"
              className="btn btn-primary btn-full"
              onClick={handleSeleccionarDespacho}
              disabled={loadingDespachos || despachosFiltrados.length === 0}
            >
              Seleccionar despacho
            </button>
          </section>
        )}

        {/* P2 / P3 · Registrar imprevisto */}
        {screen === "P2" && selectedDespacho && (
          <form
            className="app-body"
            onSubmit={handleConfirmar}
            noValidate
            aria-label="Registrar imprevisto"
          >
            <div>
              <p className="step-label">PASO 2 DE 3</p>
              <h1 className="screen-title">Registrar imprevisto</h1>
              <p className="screen-subtitle">
                Despacho: {selectedDespacho.planta} · {selectedDespacho.patente}
              </p>
            </div>

            <div className="field-group">
              <label htmlFor="tipo-imprevisto" className="field-label">
                Tipo de imprevisto *
              </label>
              <select
                id="tipo-imprevisto"
                name="tipo"
                className={`select-input ${
                  errorField === "tipo" ? "input-error" : ""
                }`}
                value={tipo}
                disabled={submitting}
                onChange={(e) => {
                  setTipo(e.target.value);
                  if (errorField === "tipo") {
                    setFormError(null);
                    setErrorField(null);
                  }
                }}
              >
                <option value="">Selecciona el tipo de imprevisto.</option>
                {TIPOS_IMPREVISTO.map((opcion) => (
                  <option key={opcion.value} value={opcion.value}>
                    {opcion.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field-group">
              <label htmlFor="descripcion-imprevisto" className="field-label">
                Descripción breve *
              </label>
              <textarea
                id="descripcion-imprevisto"
                name="descripcion"
                className={`textarea-input ${
                  errorField === "descripcion" ? "input-error" : ""
                }`}
                placeholder="Ej. La carga aún no está disponible. Se estima una espera de 2 horas."
                value={descripcion}
                disabled={submitting}
                onChange={(e) => {
                  setDescripcion(e.target.value);
                  if (errorField === "descripcion") {
                    setFormError(null);
                    setErrorField(null);
                  }
                }}
              />
            </div>

            {!formError && (
              <div className="recipients-section">
                <span className="field-label">Se avisará por correo a:</span>
                <ul className="recipients-list">
                  <li>Jefe/a de operaciones</li>
                  <li>Conductor/a del despacho</li>
                </ul>
              </div>
            )}

            {formError && (
              <div className="alert-box" role="alert">
                {formError}
              </div>
            )}

            <div className="actions-row">
              <button
                type="button"
                className="btn btn-secondary"
                disabled={submitting}
                onClick={() => {
                  setFormError(null);
                  setErrorField(null);
                  setScreen("P1");
                }}
              >
                ← Volver
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
              >
                {submitting ? "Enviando avisos…" : "Confirmar"}
              </button>
            </div>
          </form>
        )}

        {/* P4 · Imprevisto registrado (Folio y avisos) */}
        {screen === "P4" && resultado && (
          <section className="app-body" aria-label="Imprevisto registrado">
            <div>
              <p className="step-label">PASO 3 DE 3</p>
              <h1 className="screen-title">Imprevisto registrado</h1>
              <p className="screen-subtitle">
                Despacho: {resultado.despacho.planta} ·{" "}
                {resultado.despacho.patente}
              </p>
            </div>

            <div className="folio-box">
              <span className="folio-label">Folio</span>
              <span className="folio-value">{resultado.folio}</span>
            </div>

            <div className="summary-block">
              <p className="summary-type">{resultado.tipo_label}</p>
              <p>{resultado.descripcion}</p>
            </div>

            <div className="field-group">
              <span className="field-label">Estado de avisos</span>
              <div className="notice-list">
                {resultado.avisos.map((aviso, index) => (
                  <div key={`${aviso.rol}-${index}`} className="notice-row">
                    <div>
                      <div className="notice-role">{aviso.rol}</div>
                      <div className="notice-name">{aviso.nombre}</div>
                    </div>
                    <span
                      className={`notice-status ${
                        aviso.estado === "Fallido" ? "notice-status-failed" : ""
                      }`}
                    >
                      {aviso.estado}
                    </span>
                  </div>
                ))}
              </div>
              <p className="poc-note">
                PoC (camino delgado): imprevisto y avisos guardados en Supabase.
                El envío real de correos externos se integra en la siguiente
                iteración.
              </p>
            </div>

            <div className="actions-row">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setFormError(null);
                  setErrorField(null);
                  setScreen("P2");
                }}
              >
                ← Volver
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleVolverADespachos}
              >
                Volver a despachos
              </button>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
