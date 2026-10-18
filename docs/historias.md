# Historias de usuario – Gestión de imprevistos en despachos

## 1. Conversación con un usuario

- **Con quién:** Ingeniera de Proyectos quien cumple el rol de "Coordinadora de despachos", gestiona la logística de retiro y manejo de residuos peligrosos y movimiento de materias primas para minería.
- **Cuándo:** 15 de octubre de 2026.
- **Problemas que nos contó:**
  1. Los imprevistos son frecuentes y se retira desde varias plantas al mismo tiempo: la carga «no está lista», hay «retrasos», la «ruta del camión puede estar en espera», el «camión llega tarde al lugar de destino  y debe esperar al siguiente día».
  2. Las demoras cuestan dinero: «sobreestadía = multa».
  3.  El seguimiento falla: los camiones tienen GPS (de diferentes proveedores, con diferente precisión), por lo que «no reportan bien».

## 2. Historias del flujo principal

Todas las historias pertenecen al flujo principal: registrar un imprevisto y avisar a los afectados. La historia principal es **HU-01**.

### HU-01 · Registrar un imprevisto de un despacho en curso (historia principal)

| | |
|---|---|
| **Rol** | Como Coordinador/a de despachos de planta, |
| **Acción** | quiero registrar un imprevisto de un despacho en curso, indicando la planta, el tipo de imprevisto (carga no lista, retraso o camión en espera) y una breve descripción, |
| **Beneficio** | para que el aviso quede con folio y el jefe de operaciones y el conductor se enteren sin tener que llamarlos uno a uno. |

### HU-02 · Buscar el despacho afectado

| | |
|---|---|
| **Rol** | Como Coordinador/a de despachos de planta, |
| **Acción** | quiero buscar el despacho afectado por planta o por patente del camión, |
| **Beneficio** | para encontrarlo rápido aunque haya retiros en varias plantas al mismo tiempo. |

### HU-03 · Recibir el aviso del imprevisto

| | |
|---|---|
| **Rol** | Como jefe/a de operaciones, |
| **Acción** | quiero recibir por correo el aviso del imprevisto, con el folio, la planta, el despacho y el tipo de cambio, |
| **Beneficio** | para decidir si debo intervenir en el hacer antes de que la demora termine en sobreestadía. |

### HU-04 · Recibir el cambio que afecta a mi despacho

| | |
|---|---|
| **Rol** | Como conductor/a, |
| **Acción** | quiero recibir por correo el cambio que afecta a mi despacho, con el folio y lo que cambió (retraso, carga no lista o espera en ruta), |
| **Beneficio** | para saber qué hacer sin depender del GPS ni de que alguien me ubique por teléfono o radio. |

### HU-05 · Ver el estado de los avisos

| | |
|---|---|
| **Rol** | Como Coordinador/a de despachos de planta, |
| **Acción** | quiero ver, junto al folio del imprevisto, si cada aviso fue enviado o falló, |
| **Beneficio** | para saber a quién tengo que contactar directamente. |

> Las historias describen la necesidad, no cómo se construye. Los detalles (campos obligatorios, formato del correo, etc.) se acuerdan en la conversación con el usuario.

## 3. Criterios de aceptación de la historia principal (HU-01)

**Escenario principal: el imprevisto se registra y se avisa**

| | |
|---|---|
| **Dado** | que seleccioné un despacho en curso, elegí el tipo de imprevisto «Carga no lista» y escribí una descripción, |
| **Cuando** | presiono «Confirmar», |
| **Entonces** | veo el folio del imprevisto y la lista de avisados (jefe de operaciones y conductor), cada uno con estado «Enviado». |

**Escenario alternativo: falta un dato obligatorio**

| | |
|---|---|
| **Dado** | que seleccioné un despacho en curso y dejé vacío el tipo de imprevisto, |
| **Cuando** | presiono «Confirmar», |
| **Entonces** | veo un mensaje que indica qué campo falta, sigo en la pantalla de registro y los datos que ya ingresé se mantienen. |
