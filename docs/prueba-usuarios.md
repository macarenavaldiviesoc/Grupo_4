# Diseño de prueba de usuarios · Gestión de imprevistos en despachos mineros

## 1. Objetivo, hipótesis y alcance

**Pregunta que responde la prueba:** una persona que cumple el rol de
coordinador/a de despachos, ¿entiende y logra completar sola el flujo
principal (encontrar el despacho afectado, registrar el imprevisto y saber
si los avisos llegaron) usando el prototipo?

**Hipótesis (retoma la del Avance 2):**
Creemos que un/a coordinador/a de despachos, sin que nadie le explique qué
hacer, podrá registrar un imprevisto y confirmar a quién se avisó usando el
prototipo. Lo sabremos cuando observemos que completa el registro del
imprevisto y lee el estado de los avisos sin pedir ayuda ni perderse en el
camino.

**Fuera de alcance:**
- El prototipo es una simulación visual (Figma); esta prueba no permite
  comprobar si el sistema funcionaría técnicamente (envío real de correos,
  validaciones de backend, base de datos real, desempeño, seguridad).
- El camino alternativo de envío fallido y la cancelación del registro no se
  incluyen en esta ronda (son caminos alternativos, no el flujo principal).
- No se prueba la resolución ni el cierre del imprevisto (no está en el
  prototipo actual).
- No se prueba con un conductor en terreno sin cobertura; la prueba se hace
  en un entorno controlado, con el prototipo en una pantalla.

Participantes de referencia para los umbrales de esta sección: **5
personas** que cumplan el perfil de coordinador/a de despachos o un rol
similar de logística.

## 2. Tareas, métricas y umbral

| Tarea | HU | Escenario | Objetivo | Éxito | No revelar | Umbral |
|---|---|---|---|---|---|---|
| 1. Encontrar el despacho afectado | HU-02 | "Te avisan que el camión de Planta Norte, patente JK-LP-82, que retira residuos peligrosos, va a tener un problema." | Ubicar el despacho de Planta Norte (JK-LP-82) entre los que están en curso. | Queda posicionado/a en el despacho correcto sin pedir ayuda. | El campo de búsqueda, la lista de despachos y el botón para seleccionarlo. | Eficacia: 4/5 lo logran sin ayuda · Eficiencia: en menos de 1 minuto |
| 2. Dejar registrado el imprevisto | HU-01 | "La carga de ese despacho todavía no está lista; se estima una espera de 2 horas." | Dejar constancia de que la carga no está lista y cuánto tomará, para que jefe y conductor se enteren. | Confirma el registro y ve que el sistema generó un folio y avisará a jefe y conductor. | El selector de tipo de imprevisto, sus opciones, el campo de descripción y el botón de confirmar. | Eficacia: 4/5 completan sin ayuda · Eficiencia: en menos de 3 minutos, con máximo 1 ayuda |
| 3. Saber si los avisos llegaron | HU-05 | "Ya registraste el imprevisto. Necesitas saber si el jefe y el conductor efectivamente se enteraron, para decidir si los llamas tú mismo/a." | Confirmar si el jefe de operaciones y el conductor recibieron el aviso. | Dice correctamente, para cada destinatario, si el aviso llegó o no. | La lista de destinatarios y las palabras usadas para marcar cada estado. | Eficacia: 5/5 lo identifican bien · Eficiencia: en menos de 30 segundos, sin ayuda |

**Eficacia y eficiencia:** los umbrales de cada tarea (arriba) combinan
ambas métricas — porcentaje que completa sin ayuda, tiempo, número de
ayudas pedidas y desvíos del camino esperado (se cuentan aunque no tengan
umbral propio, ej. si intenta confirmar sin elegir el tipo de imprevisto).

**Satisfacción:** una pregunta de facilidad por tarea (escala 1-5, de muy
difícil a muy fácil), hecha justo después de completarla. No se usa el
cuestionario SUS porque dos de sus ítems son de opinión o de futuro
("¿usaría…?", predicciones sobre otras personas), lo que esta prueba busca
evitar. Umbral: promedio ≥ 4/5 por tarea entre los 5 participantes.

## 3. Perfiles y reclutamiento

**Usuarios** son quienes ejecutan tareas en el celular (sección 2).
**Stakeholders** son a quienes se consulta por restricciones y condiciones
de adopción, sin que ejecuten tareas del prototipo.

La persona entrevistada en `docs/historias.md` tiene el cargo de Ingeniera
de Proyectos y, dentro de ese cargo, cumple el rol de **Coordinadora de
despachos**. Ese rol —no el cargo— es quien ejecuta directamente HU-01,
HU-02 y HU-05 en el prototipo (buscar despacho, registrar el imprevisto,
ver el estado de los avisos). Por eso se recluta como **usuario (P1)**: es
quien de verdad usará la app para hacer el trabajo, y no solo alguien que
opina sobre si conviene adoptarla.

| Perfil | Usuario o stakeholder | N.º | Cómo se contacta | Por qué |
|---|---|---|---|---|
| P1 · Coordinador/a de despachos de planta (minería) | Usuario | 5 | A través de la coordinadora ya entrevistada (docs/historias.md), pidiendo que refiera a colegas con el mismo rol en otras faenas o empresas de transporte (bola de nieve) | Ejecuta HU-01, HU-02 y HU-05 directamente en el prototipo; representa a quien usará la app a diario |
| P2 · Conductor/a sin cobertura en ruta o con teléfono básico/antiguo | Usuario | 5 | *(propuesta, no confirmada por el equipo)* A través de las empresas de transporte ya usadas como ejemplo en docs/datos/estructura_datos.md (Flota Propia, Transportes Andina, Enaex S.A.), pidiendo al jefe de flota que refiera a conductores con estas condiciones | Es el perfil que docs/etica.md (B1) identifica como excluido; probarlo como usuario permite observar si realmente puede recibir y leer el aviso (HU-04) en sus condiciones reales, en vez de solo asumirlo |
| S1 · Jefe/a de Operaciones | Stakeholder | 5 | *(propuesta, no confirmada por el equipo)* A través de la coordinadora ya entrevistada (docs/historias.md), pidiendo que contacte a su jefe/a de operaciones directo | Según HU-03 solo recibe el aviso por correo y decide si interviene; no ejecuta pantallas, pero sus condiciones para confiar en el aviso afectan si la solución se adopta |
| S2 · Jefe de logística / supervisor de operaciones | Stakeholder | 5 | *(propuesta, no confirmada por el equipo)* A través de la coordinadora entrevistada o de las faenas ya usadas como ejemplo (Faena Minera Los Bronces, Faena Minera Centinela), pidiendo contacto con su jefe de logística o supervisor de operaciones | Según Readme.md ("Quién autoriza/decide") es quien aprueba cambios en el proceso de despacho; no usa la app, pero decide si el equipo puede adoptarla |

## 5. Plan de levantamiento

Este plan cubre las sesiones con **usuarios** (P1 y P2, sección 3), que son
quienes ejecutan tareas en el celular y por eso se pueden grabar en pantalla.
Los stakeholders (S1, S2) se consultan por otra vía, no cubierta aquí:
[POR COMPLETAR].

**Número de sesiones:** 10 en total — 5 con P1 (Coordinador/a de despachos)
y 5 con P2 (Conductor/a, perfil excluido), una sesión por participante.

**Duración:** máximo 20 minutos por sesión, incluyendo el tiempo de
preparar el celular.

**Roles (uno por sesión, no se repiten funciones):**
- **Integrante 1 — Facilita:** es la única persona que habla con el/la
  participante. Explica las tareas de la sección 2 sin mencionar lo que
  está en "No revelar", y hace las preguntas del cuestionario SUS al final.
- **Integrante 2 — Registra:** observa en silencio y transcribe en vivo,
  textual y entre comillas, lo que dice el/la participante mientras piensa
  en voz alta. Llena la planilla separando lo que observa de lo que
  interpreta.
- **Integrante 3 — Resguarda la evidencia:** al terminar la sesión, recibe
  el video, revisa que no se vean notificaciones ni datos personales en
  pantalla (si aparecen, los recorta antes de guardar) y lo sube a la
  carpeta del curso en Drive, con acceso restringido. Ninguna copia queda
  en este repositorio.

**Qué es la evidencia:**
- Grabación de la pantalla del celular, o video del celular y las manos de
  la persona usándolo — **sin audio**, y si es video, el encuadre muestra
  solo el celular y las manos (nunca el rostro).
- Transcripción escrita de lo que la persona dice mientras piensa en voz
  alta, tomada en vivo por Integrante 2 (es la única forma en que queda
  registrado lo que dice, porque la grabación no tiene audio).
- Antes de grabar, si se usa el celular de la persona participante, se le
  pide activar "No molestar" para que no aparezcan notificaciones ni datos
  personales en pantalla; si igual aparece algo, se recorta antes de
  guardar. De preferencia se usa un celular de prueba del equipo, con el
  prototipo ya cargado y sin cuentas personales, para evitar este problema
  desde el inicio.
- La grabación y la transcripción se guardan en la carpeta del curso en
  Drive, con acceso restringido, fuera de este repositorio.

**Si el/la participante no tiene un celular compatible:**
- Para P1: se usa el celular de prueba del equipo (ya preparado, sin
  cuentas personales).
- Para P2 (perfil excluido): la sesión se hace en las mismas condiciones
  en que esa persona trabaja (sin señal, o con su propio tipo de teléfono),
  así que no se reemplaza por el celular de prueba salvo que el prototipo
  literalmente no cargue; en ese caso se aproxima la condición con el
  celular de prueba (ej. en modo avión) y se anota en la planilla que fue
  una aproximación, no la condición real de la persona.

**Planilla (vacía):**

| Participante | Tarea | Minuto | Observado | Interpretado | Severidad |
|---|---|---|---|---|---|
| | | | | | |

*Observado:* cita textual entre comillas de lo que la persona dijo o hizo.
*Interpretado:* lectura de quien registra sobre qué significa eso.
*Severidad:* Bloquea / Entorpece / Estético (ver regla de decisión).

Para el perfil excluido (P2), la columna "Observado" también anota la
condición real de la sesión (ej. "sin señal" o el tipo de teléfono usado).

**Regla de decisión:**
- **Bloquea** (no completa la tarea sin ayuda): se corrige antes de
  construir.
- **Entorpece** (completa con dudas o errores): se prioriza según cuántas
  personas lo vivieron.
- **Estético** (completa y solo le incomoda): se registra y espera.
