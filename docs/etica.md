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
| Planta o patente (P1) | No | HU-02: ubicar el despacho | Coordinador/a | 12 meses desde el cierre del caso |
| Tipo de imprevisto (P2) | No | HU-01: clasificar el imprevisto | Coordinador/a, Jefe/a | 12 meses desde el cierre del caso |
| Descripción breve (P2) | No (texto libre) | HU-01: detallar qué pasó | Coordinador/a, Jefe/a, Conductor/a | 12 meses desde el cierre del caso |
| Nombre y correo del destinatario (P2, P4) | Sí | HU-03/HU-04: enviar el aviso a la persona correcta | Sistema (envío), Coordinador/a (ver estado) | En el aviso: 12 meses desde el cierre del caso. En la ficha del usuario: se eliminan 12 meses después de que la persona queda inactiva |

**Plazo propuesto por el equipo:** 12 meses permite comparar los imprevistos de un año
completo (temporadas, plantas y rutas que se repiten) sin guardar datos personales
indefinidamente. Cumplido el plazo, los datos personales del caso se eliminan; el
registro del imprevisto puede conservarse sin nombre ni correo (anonimizado) para
estadísticas. El plazo debe revisarse si la empresa usuaria tiene obligaciones de
auditoría más largas (por ejemplo, en el transporte de explosivos).

## Sesgo, accesibilidad y transparencia (B3)

- Contraste texto/fondo, **medido** con la fórmula de contraste de WCAG 2.2 (mínimo AA: 4,5:1 para texto normal; AAA: 7:1):

  | Combinación | Razón de contraste | Resultado |
  |---|---|---|
  | Texto y botones #333333 sobre fondo blanco #FFFFFF | 12,6 : 1 | Cumple AA y AAA |
  | Texto de alerta rojo sobre fondo rosado #FADBD8 | Pendiente de medir | El código del rojo no está documentado; se obtendrá de Figma y se calculará igual |

- Elementos interactivos ≥ 24×24 px: pendiente de medir en Figma (los botones son de ancho completo, pero falta registrar su alto en px).
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

**Estado según la retroalimentación (22-11-2026):** P4b todavía no existe en el
prototipo de Figma, por lo que hoy la modificación y el segundo camino
alternativo (P2 → P4b) solo están descritos en el mapa de navegación. Queda
pendiente crear P4b en Figma con el estado "Fallido" junto al destinatario y la
opción "Reintentar", y agregar aquí su captura como "Después".
