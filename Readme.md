# Equipo 4

## MANUAL DE LA SOLUCIÓN

Equipo 4

---

## 1. QUÉ ES LA SOLUCIÓN

Es una aplicación para gestionar imprevistos en despachos de
camiones. Permite que el despachador de planta registre rápidamente un
imprevisto (camión no disponible, retraso en carga/descarga o ruta
bloqueada) y que ese cambio se notifique automáticamente (WhatsApp,
correo o app) a las personas afectadas, dejando un historial trazable
de cada cambio.

**Problema que aborda:**
¿Cómo lograr que las empresas gestionen y ajusten masivamente su
programación de despachos en tiempo real, manteniendo la trazabilidad
y comunicando automáticamente los cambios a todas las áreas
involucradas, frente a imprevistos como disponibilidad de camiones,
riesgos de ruta y cuellos de botella en carga/descarga?

La solución se compone de tres capas:
- **Registro:** historial trazable del imprevisto y su resolución.
- **Interacción:** tablero donde el despachador ingresa el cambio.
- **Automatización (capa dominante):** envío automático de la
  notificación a las áreas afectadas, sin que nadie tenga que
  "correr la voz" por llamadas o radio.

Funcionalidades previstas (según caso de uso y maqueta preliminar):
- Inicio de sesión y validación de usuario, con acceso según
  responsabilidades.
- Búsqueda o ingreso del despacho por cliente, patente o N° de
  despacho.
- Registro del imprevisto: tipo, descripción y cambio provocado
  (retraso, cambio de camión, cambio de ruta).
- Validación de datos y generación automática de un folio (número
  de caso).
- Identificación automática de los afectados (jefe de operaciones,
  conductor, cliente) y envío de la notificación.
- Control de notificación y confirmación de lectura por destinatario.
- Historial consultable: qué cambió, cuándo y por qué.
- Base de datos de camiones (internos o externos) para uso frente
  a emergencias.

**Fuera de alcance:**
- Geolocalización GPS en tiempo real de los camiones.
- Gestión directa o disponibilidad mecánica de los camiones.
- Facturación y contratos con transportistas.
- Optimización automática de rutas (algoritmos de ruteo).

---

## 2. PARA QUIÉN ES

Industrias objetivo: retail en Chile (Falabella, Cencosud, Walmart
Chile, SMU) y manufactura/producción (CCU, Watts, Carozzi, Nestlé
Chile, entre otros), incluyendo a sus proveedores.

**Usuarios directos:**
- Despachador/a o logística de planta: hoy coordina la salida y
  llegada de camiones por radio y planillas; es el actor principal
  que registra los imprevistos.
- Conductores de flota: registran o consultan el estado de sus rutas
  y entregas.

**Beneficiarios (sin usar el sistema directamente):**
- Jefe de operaciones/planta: recibe reportes de despacho más
  confiables y oportunos.
- Clientes (receptores de carga): reciben sus productos a tiempo y
  con trazabilidad.

**Quién autoriza/decide:**
- Jefe de logística o supervisor de operaciones.

---

## 3. CÓMO SE INSTALA

Aún no hay nada que instalar. A la fecha de este documento la
solución no cuenta con una versión instalable; existe solo una
maqueta digital preliminar.

---

## 4. CÓMO SE EJECUTA

Aún no hay nada que ejecutar. La solución se encuentra en etapa de
diseño.

---

## 5. EN QUÉ ESTADO ESTÁ

**Etapa actual:** diseño y definición (Avance 2).

**Completado:**
- Definición del problema y del usuario.
- Identificación de áreas involucradas.
- Caso de uso principal.
- Maqueta digital preliminar (pantallas: Login, Ingresar/buscar,
  Registrar imprevisto, Notificación y confirmación de lectura,
  Historial).
- Espacio del Roadmap.

**En curso:**
- Investigación de antecedentes de aplicaciones similares.
- Definición de requerimientos del prototipo.

**Por hacer:**
- Flujo de tareas/acciones de la aplicación.
- Diseño de lógica de reprogramación en tiempo real.

**Bloqueado:**
- Búsqueda de información necesaria.
- Obtención de la programación actual de camiones de una empresa o
  base de datos para analizar casos reales.
- Integración con API para base de datos y automatización.

**Roadmap:**
- **Ahora:**
  - El despachador identifica el despacho y el camión afectado.
  - El despachador registra el imprevisto y sus consecuencias.
  - Despachador, jefe y cliente obtienen el número de caso para
    consultas posteriores.
- **Próximo:**
  - El cliente puede confirmar recepción.
  - Los involucrados (jefe, cliente, transportista) reciben
    automáticamente los cambios de estado.
  - El despachador revisa estado e historial por número de caso.
- **Después:**
  - El despachador comunica la resolución del imprevisto.
  - El despachador puede cerrar un imprevisto resuelto,
    conservando los antecedentes.
  - Los involucrados reciben una actualización automática al
    cerrarse el caso.

**Espacio de trabajo del equipo (Notion):**
https://app.notion.com/p/Equipo-4-Proyecto-de-Log-stica-y-Transporte-3d8498f17d4780fb820cc64ae09ef488

---

## 6. HISTORIAS DE USUARIO Y WIREFRAMES (AVANCE 4)

A partir de una conversación con una Ingeniera de Proyectos que coordina
despachos mineros, se definieron 5 historias de usuario y sus criterios de
aceptación, la estructura de datos asociada y los wireframes de las 5
pantallas del flujo. Las tres piezas describen el mismo caso (folio 5003:
camión en espera en el acceso al polvorín de una faena minera):

- [docs/historias.md](docs/historias.md) — historias de usuario y criterios de aceptación.
- [docs/datos/estructura_datos.md](docs/datos/estructura_datos.md) — diagrama de base de datos y ejemplos de registros.
- [docs/wireframes/](docs/wireframes/) — bocetos de las 5 pantallas (Login, Buscar despacho, Registrar imprevisto, Notificación y estado de envío, Historial).

---

## 7. PROTOTIPO Y ÉTICA (AVANCE 5)

- [docs/prototipo.md](docs/prototipo.md) — enlace al prototipo navegable y su mapa de navegación.
- [docs/etica.md](docs/etica.md) — análisis ético del prototipo.
- Enlace a prototipo en figma: 
      https://www.figma.com/file/bEA6Z4q13xJlCxUTl2BNZg?node-id=41:339&locale=en&type=design 

---

## 8. QUIÉNES LA DESARROLLAN

**Equipo 4**

| Integrante | Correo |
|---|---|
| Diego Catalán | diego.catalan.e@usach.cl |
| Marcelo Lineros | marcelo.lineros@usach.cl |
| Macarena Valdivieso | macarena.valdivieso@usach.cl |
| Alberto Vera | alberto.vera@usach.cl |
