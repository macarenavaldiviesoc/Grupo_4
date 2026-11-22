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

Industria objetivo: minería en Chile — retiro de residuos peligrosos y
movimiento de materias primas entre faenas mineras y las empresas de
transporte que les prestan servicio (ej. Enaex S.A.).

**Usuarios directos:**
- Coordinador/a de despachos de planta: hoy coordina la salida y
  llegada de camiones por radio y planillas; es quien registra los
  imprevistos.
- Conductores de flota: registran o consultan el estado de sus rutas
  y entregas.

**Beneficiarios (sin usar el sistema directamente):**
- Jefe/a de Operaciones: recibe reportes de despacho más confiables y
  oportunos.
- Plantas mineras (origen del retiro): obtienen trazabilidad del
  proceso sin necesidad de interactuar con el sistema.

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

**Etapa actual:** Avance 7, diagrama de arquitectura y prueba de concepto (PoC) del flujo principal (en curso).

**Completado:**
- **Avance 1:** definición del problema y del usuario.
- **Avance 2:** propuesta de solución, caso de uso principal, maqueta digital preliminar y roadmap inicial.
- **Avance 3:** repositorio del equipo con su estructura de carpetas (`src/`, `docs/`), `.gitignore`, `.env.example` con los nombres de las variables de Supabase (sin valores), bitácora de uso de IA ([docs/bitacora-ia/bitacora.md](docs/bitacora-ia/bitacora.md)) y modelo de datos ([docs/datos/estructura_datos.md](docs/datos/estructura_datos.md)).
- **Avance 4:** historias de usuario y criterios de aceptación, estructura de datos adaptada al caso minero y wireframes de las 5 pantallas.
- **Avance 5:** prototipo navegable y análisis ético del prototipo.
- **Avance 6:** diseño de la prueba de usuarios y guion de la sesión de validación.
- **Correcciones según la retroalimentación** (ver sección 9).

**En curso:**
- Avance 7: diagrama de arquitectura (`docs/arquitectura.md`), camino delgado y PoC publicada.

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
      https://www.figma.com/design/bEA6Z4q13xJlCxUTl2BNZg/Entrega-4?node-id=41-339&p=f 

---

## 8. DISEÑO DE PRUEBA DE USUARIOS (AVANCE 6)

- [docs/prueba-usuarios.md](docs/prueba-usuarios.md) — hipótesis, tareas, perfiles y plan de levantamiento.
- [docs/pauta-validacion.md](docs/pauta-validacion.md) — guion de la sesión de validación.

---

## 9. RETROALIMENTACIÓN Y CORRECCIONES

| Observación recibida | Qué se corrigió | Archivo |
|---|---|---|
| El envío fallido (extensión 2 del caso de uso) no tenía dónde guardarse | `estado_envio` con valor «pendiente», más los campos `intentos` y `motivo_fallo` | [docs/datos/estructura_datos.md](docs/datos/estructura_datos.md) |
| Al cambiar de camión se perdía el original | `id_vehiculo_original` e `id_vehiculo_nuevo` en IMPREVISTOS | [docs/datos/estructura_datos.md](docs/datos/estructura_datos.md) |
| No se sabía qué jefe de operaciones notificar | `id_jefe_operaciones` en DESPACHOS | [docs/datos/estructura_datos.md](docs/datos/estructura_datos.md) |
| Detalles menores del modelo (relación conductor-vehículo, claves foráneas con texto, destino que repetía el cliente) | Texto de la relación corregido, solo números en las claves foráneas, `destino` como punto de entrega | [docs/datos/estructura_datos.md](docs/datos/estructura_datos.md) |
| La verificación del `.gitignore` no tenía fuente | Comparación con la plantilla oficial de GitHub y prueba con `git check-ignore`; se agregaron `.next/` y `.vercel/` | [docs/bitacora-ia/bitacora.md](docs/bitacora-ia/bitacora.md) (Uso 3), [.gitignore](.gitignore) |
| El Uso 6 describía la corrección en forma general y solo verificaba que el diagrama se viera bien | Detalle de lo corregido y contraste del modelo con cada paso del caso de uso | [docs/bitacora-ia/bitacora.md](docs/bitacora-ia/bitacora.md) (Uso 6) |
| El README seguía en el Avance 2 y no mencionaba el Avance 3 | Estado actualizado por avance; se eliminó la copia antigua del manual en `src/Readme.md` | Este archivo, [src/Readme.md](src/Readme.md) |
| Avance 5: faltaban estados vacío y de carga; el mapa decía «Cancelar» en P2, pero la pantalla tiene «Volver» | Se agregaron al mapa P1 vacío y P2 carga; el mapa se corrigió a «Volver». **Pendiente en Figma:** crear esos cuadros | [docs/prototipo.md](docs/prototipo.md) |
| Avance 5: la ficha de datos no daba plazos de conservación | Plazo de 12 meses desde el cierre del caso, con su justificación | [docs/etica.md](docs/etica.md) (B2) |
| Avance 5: la accesibilidad decía «cumple» sin medir | Contraste medido: #333333 sobre blanco = 12,6:1. El rojo de alerta y el tamaño de los botones quedan pendientes de medir en Figma | [docs/etica.md](docs/etica.md) (B3) |
| Avance 5: P4b (envío fallido) no existe en el prototipo y falta la captura del «después» | Se declaró como pendiente. **Pendiente en Figma:** crear P4b con «Fallido» y «Reintentar», y agregar la captura | [docs/etica.md](docs/etica.md) (Integración), [docs/prototipo.md](docs/prototipo.md) |
| Avance 5: los botones del prototipo no avanzaban al hacer clic | **Pendiente en Figma:** revisar las conexiones y probar en una ventana de incógnito | Prototipo en Figma |
| Recomendación: incluir en la prueba a un conductor que haya quedado sin señal en ruta | Ya estaba en el perfil P2; se eliminó la línea de «Fuera de alcance» que lo contradecía | [docs/prueba-usuarios.md](docs/prueba-usuarios.md) |

---

## 10. QUIÉNES LA DESARROLLAN

**Equipo 4**

| Integrante | Correo |
|---|---|
| Diego Catalán | diego.catalan.e@usach.cl |
| Marcelo Lineros | marcelo.lineros@usach.cl |
| Macarena Valdivieso | macarena.valdivieso@usach.cl |
| Alberto Vera | alberto.vera@usach.cl |
