# Análisis ético del prototipo

## Mapa de impacto y exclusión (B1)

| Actor | Tarea que deja de hacer | Cómo se redefine su rol | Riesgo |
|---|---|---|---|
| Ejecuta: Coordinador/a de despachos | Llamar uno por uno a jefe y conductor | Registra el imprevisto y el sistema avisa por él | Si no registra a tiempo, nadie se entera |
| Decide/supervisa: Jefe/a de Operaciones | Monitorear cada despacho por radio | Revisa alertas por correo y decide si interviene | Si no revisa el correo, no interviene a tiempo |
| Excluido: Conductor/a sin cobertura en ruta, o con teléfono básico/antiguo sin apps de correo cómodas | Enterarse por radio en tiempo real | Depende de un correo que puede no llegarle o que no puede revisar bien desde su teléfono | Sigue una ruta desactualizada sin saberlo |

## Ficha de tratamiento de datos personales (B2)

| Campo | Dato personal | Finalidad (historia) | Quién accede | Conservación |
|---|---|---|---|---|
| Planta o patente (P1) | No | HU-02: ubicar el despacho | Coordinador/a | Mientras el despacho esté activo |
| Tipo de imprevisto (P2) | No | HU-01: clasificar el imprevisto | Coordinador/a, Jefe/a | Igual que el caso (historial) |
| Descripción breve (P2) | No (texto libre) | HU-01: detallar qué pasó | Coordinador/a, Jefe/a, Conductor/a | Igual que el caso (historial) |
| Nombre y correo del destinatario (P2, P4) | Sí | HU-03/HU-04: enviar el aviso a la persona correcta | Sistema (envío), Coordinador/a (ver estado) | Mientras la persona esté activa en el sistema |

## Sesgo, accesibilidad y transparencia (B3)

- Contraste texto/fondo: cumple (texto oscuro sobre fondo claro en todas las pantallas).
- Elementos interactivos ≥ 24×24 px: cumple (botones de ancho completo).
- Estados expresados con texto, no solo color: cumple ("Enviado"/"Fallido" siempre llevan texto).
- Etiquetas visibles: cumple (cada campo tiene su etiqueta fija arriba).
- Priorización: no aplica, P1 no ordena los despachos por ningún criterio.
- Inteligencia artificial: no aplica, ninguna pantalla usa sugerencias de IA.

## Sostenibilidad y riesgos (B4)

Prácticas: comprimir las imágenes antes de subirlas al repositorio · consultar
solo los despachos en curso en P1, no el historial completo · desactivar el
enlace de Figma/Vercel de versiones anteriores.

| Riesgo | Tratamiento | Responsable | Cuándo se revisa |
|---|---|---|---|
| El correo de aviso no llega | Mitigar: mostrar "Fallido" y permitir reintentar | Marcelo | Al implementar el envío real |
| El conductor no tiene cobertura y no recibe el aviso | Aceptar por ahora, documentado como limitación | Diego | Al definir un canal alternativo |
| La descripción libre incluye datos de terceros | Mitigar: agregar texto de ayuda en el campo | Macarena | Al definir validaciones del formulario |
| Datos de ejemplo quedan públicos en Figma/Vercel | Evitar: usar siempre datos ficticios | Alberto | Antes de cada entrega |

## Integración

La modificación es la pantalla **P4b (envío fallido)**: nace del hallazgo B1
(el conductor sin cobertura queda excluido si el aviso falla y nadie lo
nota), y le da una alternativa visible (estado "Fallido" + reintentar) en
vez de asumir que el aviso siempre llega.

- Antes: ![P4 antes](wireframes/wireframe%2004.png)
- Después: *(pendiente: capturar P4b una vez creada en Figma)*
