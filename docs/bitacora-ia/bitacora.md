# Bitacora IA
## Uso 1
* **Objetivo:** [Crear la carpeta src/ (con un readme para que no este vacia la carpeta de momento)]
* **Instrucción (Prompt):** [" Trabajo en un repositorio en github en la construcción del armado de carpetas inicial. Necesito crear una carpeta llamada src, que contenga una archivo readme.md en su interior con el siguiente texto: "Grupo_4
Aplicación para registrar imprevistos en despachos y notificar automáticamente a los Stakeholders / Proveedores / Otros, y así mejorar la gestión logística" . No puedes cambiar ningún otro archivo ni carpeta del repositorio." ]
* **Respuesta obtenida:** [Listo. Creé la carpeta src y dentro el archivo readme.md con el siguiente contenido:

Grupo_4
Aplicación para registrar imprevistos en despachos y notificar automáticamente a los Stakeholders / Proveedores / Otros, y así mejorar la gestión logística

Verifiqué con git status que el único cambio en el repositorio es el nuevo archivo src/readme.md; no modifiqué ningún otro archivo ni carpeta.

No hice commit ni push. Si quieres, puedo hacerlo con el mensaje que prefieras.]
* **Qué se aceptó o corrigió:** [La respuesta utilizada fue tal cual la obtenida, no se tuvo que modificar]
* **Cómo se verificó:** [Se reviso en el explorador que la carpeta y el archivo existiera, junto con el contenido]


---

## Uso 2
* **Objetivo:** [Crear la carpeta docs. (con un documento al interior para que no este vacía)]
* **Instrucción (Prompt):** [" Trabajo en un repositorio en github en la construcción del armado de carpetas inicial. Necesito crear una carpeta llamada docs, que contenga una archivo llamado Prueba1.md en su interior con el siguiente texto: "Equipo 4

Aqui van las sub carpetas: Bitacora_IA , Unidad_1 y Datos.". No puedes cambiar ningún otro archivo ni carpeta del repositorio."]
* **Respuesta obtenida:** [He creado la carpeta docs/ en la raíz del proyecto junto con el archivo solicitado:

docs/Prueba1.md
Contenido de Prueba1.md:
markdown
# Equipo 4
Aqui van las sub carpetas: Bitacora_IA , Unidad_1 y Datos.]
* **Qué se aceptó o corrigió:** [Se acepto completamente]
* **Cómo se verificó:** [Se reviso que existiera la carpeta y el documento en su interior. El documento fue posteriormente borrado ya que solo fue requerido para la creacion de la carpeta y orientacion para la ubicacion de las subcarpetas]

---

## Uso 3
* **Objetivo:** [Crear el .gitignore]
* **Instrucción (Prompt):** ["Trabajo en un repositorio en github en la construcción del armado de carpetas inicial. Necesito crear un .gitignore que excluya los archivos locales. No puedes cambiar ningún otro archivo ni carpeta del repositorio."]
* **Respuesta obtenida:** ["Created .gitignore

He creado el archivo [`.gitignore`](file:///c:/Users/avera/Documents/IAG4/Grupo_4/.gitignore) en la raíz de tu repositorio. 

El archivo incluye reglas para excluir los archivos y carpetas locales más comunes, tales como:
*   Archivos generados por el sistema operativo (ej. `Thumbs.db`, `.DS_Store`).
*   Carpetas de configuración de editores de código y entornos de desarrollo (ej. `.vscode/`, `.idea/`).
*   Archivos de variables de entorno locales (ej. `.env`, `.env.local`).
*   Archivos de registro/logs (ej. `*.log`).
*   Carpetas comunes de dependencias y entornos virtuales (ej. `node_modules/`, `venv/`, `__pycache__/`).

No se ha modificado ningún otro archivo o carpeta del repositorio, tal como lo solicitaste. Si necesitas agregar exclusiones específicas para algún lenguaje de programación en particular, puedes editar este archivo y agregarlas al final."]
* **Qué se aceptó o corrigió:** [Se acepto toda la respuesta. ]
* **Cómo se verificó:** [El .gitignore creado se comparo con otros .gitignore encontrados en internet. A falta de conocimiento se encontro similar y aceptable]

---

## Uso 4
* **Objetivo:** [Crear la carpeta unidad1]
* **Instrucción (Prompt):** [Trabajo en un repositorio en github en la construcción del armado de carpetas inicial. Crea una carpeta llamada unidad1 dentro de la carpeta docs/ de este proyecto. Crea dentro de unidad1 un archivo llamado unidades.md que contenga un titulo: "Avance 1 y 2". No puedes cambiar ningún otro archivo ni carpeta del repositorio.]
* **Respuesta obtenida:** ["Creé la carpeta docs/unidad1 y el archivo [unidades.md](C:/Users/diego/OneDrive/Escritorio/USACH/ING. CIVIL INDUSTRIAL/S3/INGENIERIA IA/Grupo_4/docs/unidad1/unidades.md) con el título # Avance 1 y 2."]
* **Qué se aceptó o corrigió:** [se acepto la subcarpeta y su documento]
* **Cómo se verificó:** [Se verifico que la subcarpeta existiera en el explorador de documentos]

---

## Uso 5
* **Objetivo:** [Crear la carpeta datos]
* **Instrucción (Prompt):** [Trabajo en un repositorio en github en la construcción del armado de carpetas inicial. Crea una carpeta llamada datos dentro de la carpeta docs/ de este proyecto. Crea dentro de datos un archivo llamado datos.md que contenga un titulo: "Datos proyecto". No puedes cambiar ningún otro archivo ni carpeta del repositorio.]
* **Respuesta obtenida:** ["Creé [docs/datos/datos.md](C:/Users/diego/OneDrive/Escritorio/USACH/ING. CIVIL INDUSTRIAL/S3/INGENIERIA IA/Grupo_4/docs/datos/datos.md) con el título # Datos proyecto."]
* **Qué se aceptó o corrigió:** [se acepto la subcarpeta y su documento]
* **Cómo se verificó:** [Se verifico que la subcarpeta existiera en el explorador de documentos]

## Uso 6
* **Objetivo:** [Crear la base de datos]
* **Instrucción (Prompt):** [Trabajo en un repositorio en github en la construcción de la propuesta de la base de datos. Crea la base de datos en formato mermaid para que se vean en GitHub. Considera un archivo dentro de docs/datos/ llamado estructura_datos.md con dos partes. La
primera es el diagrama de la siguiente base de datos: 

CARGOS {
        numero id_cargo PK
        texto nombre_cargo
        texto descripcion
    }

    USUARIOS {
        numero id_usuario PK
        texto nombre
        texto correo
        texto telefono
        numero id_cargo FK "referencia a CARGOS"
        lista estado "activo, inactivo"
        fecha_hora fecha_creacion
    }

    CLIENTES {
        numero id_cliente PK
        texto nombre_razon_social
        texto rut
        texto direccion
        texto correo
        texto telefono
    }

    EMPRESAS_TRANSPORTE {
        numero id_empresa PK
        texto nombre
        lista tipo "interno, externo"
        texto contacto
    }

    VEHICULOS {
        numero id_vehiculo PK
        texto patente
        texto tipo_camion
        numero capacidad_kg
        numero id_empresa FK "referencia a EMPRESAS_TRANSPORTE"
        lista estado "disponible, no_disponible, en_ruta"
        numero id_conductor FK "referencia a USUARIOS, opcional"
    }

    DESPACHOS {
        numero id_despacho PK
        numero id_cliente FK "referencia a CLIENTES"
        numero id_vehiculo FK "referencia a VEHICULOS"
        numero id_despachador FK "referencia a USUARIOS"
        texto origen
        texto destino
        fecha_hora fecha_programada
        fecha_hora fecha_real_entrega
        lista estado "programado, en_curso, con_imprevisto, completado, cancelado"
    }

    IMPREVISTOS {
        numero id_imprevisto PK
        numero id_despacho FK "referencia a DESPACHOS"
        numero id_usuario_registra FK "referencia a USUARIOS"
        lista tipo "camion_no_disponible, retraso_carga_descarga, ruta_bloqueada"
        lista cambio_provocado "retraso, cambio_camion, cambio_ruta"
        texto descripcion
        fecha_hora fecha_registro
        lista estado "abierto, en_proceso, resuelto, cerrado"
        texto descripcion_resolucion
        fecha_hora fecha_resolucion
    }

    NOTIFICACIONES {
        numero id_notificacion PK
        numero id_imprevisto FK "referencia a IMPREVISTOS"
        numero id_usuario_destinatario FK "referencia a USUARIOS, opcional"
        numero id_cliente_destinatario FK "referencia a CLIENTES, opcional"
        lista canal "whatsapp, correo, app"
        fecha_hora fecha_envio
        si_no leido
        fecha_hora fecha_lectura
    }

    HISTORIAL {
        numero id_historial PK
        numero id_imprevisto FK "referencia a IMPREVISTOS"
        numero id_usuario FK "referencia a USUARIOS"
        texto accion
        texto descripcion
        fecha_hora fecha_accion
    }

    CARGOS con USUARIOS : "1:N tiene"
    USUARIOS con DESPACHOS : "1:N despacha"
    USUARIOS con VEHICULOS : "1:N conduce"
    EMPRESAS_TRANSPORTE con VEHICULOS : "1:N posee"
    CLIENTES con DESPACHOS : "1:N solicita"
    VEHICULOS con DESPACHOS : "1:N es_usado_en"
    DESPACHOS con IMPREVISTOS : "1:N genera"
    USUARIOS con IMPREVISTOS : "1:N registra"
    IMPREVISTOS con NOTIFICACIONES : "1:N envia"
    USUARIOS con NOTIFICACIONES : "1:N recibe"
    CLIENTES con NOTIFICACIONES : "1:N recibe"
    IMPREVISTOS con HISTORIAL : "1:N queda_en"
    USUARIOS con HISTORIAL : "1:N ejecuta" .
Todas las relaciones 1:N desde izquierda a derecha (Un Cargo lo pueden tener muchos Usuarios) 

La segunda parte, por cada tabla,
indica qué campos son obligatorios (los que no pueden quedar vacíos) y muestra dos ejemplos con
datos, como si fueran dos registros reales. 

No puedes cambiar ningún otro archivo ni carpeta del repositorio.]

* **Respuesta obtenida:** [He creado el archivo estructura_datos.md dentro de docs/datos/, cumpliendo con todos los requerimientos y sin modificar ningún otro archivo o carpeta del proyecto.

Resumen del contenido implementado:

Parte 1: Diagrama Entidad-Relación en Mermaid (erDiagram):

Contiene la definición completa de las 9 entidades (CARGOS, USUARIOS, CLIENTES, EMPRESAS_TRANSPORTE, VEHICULOS, DESPACHOS, IMPREVISTOS, NOTIFICACIONES y HISTORIAL) con sus tipos de datos, llaves primarias (PK), llaves foráneas (FK) y comentarios/listas de valores.
Modela las 13 relaciones en dirección 1:N de izquierda a derecha utilizando la notación estándar compatible con GitHub (||--o{).

Parte 2: Especificación de Campos y Ejemplos con Datos Reales:

Por cada una de las 9 tablas se explicitan los campos obligatorios (que no pueden quedar vacíos / NOT NULL). Se proporcionan dos ejemplos por tabla formateados en tablas Markdown con datos consistentes entre sí según el flujo de transporte, despacho e incidencias.]

* **Qué se aceptó o corrigió:** [Se aceptaron las tablas y conexiones. Pero se debió solicitar el "Resumen de relaciones" en la parte 1. Y para la parte 2 se modificaron titulos, se acomodó la presentación de las tablas y ajustaron ejemplos y parrafos]
* **Cómo se verificó:** [Se reviso la imagen de la base datos en la rama dev. Se pudo verificar que graficamente coincidió con las conexiones de las tablas esperadas]


## Uso 7
* **Objetivo:** [Crear el .env.example)]
* **Instrucción (Prompt):** [" Trabajo en un repositorio en github en la construcción del armado de carpetas inicial. En la raíz del repositorio, necesito crear un .env.example con los nombres de las variables sin valores. se va a utilizar Supabase mas adelante. No puedes cambiar ningún otro archivo ni carpeta del repositorio."
" ]
* **Respuesta obtenida:** ["He creado el archivo .env.example en la raíz del repositorio con las variables requeridas para la integración con Supabase, sin asignarles valores. Verificación:
Se comprobó mediante git status que únicamente se ha creado el archivo .env.example en la raíz del proyecto.
No se modificó ningún otro archivo ni carpeta del repositorio."]

* **Qué se aceptó o corrigió:** [La respuesta utilizada fue tal cual la obtenida, no se tuvo que modificar]
* **Cómo se verificó:** [Se comprobo que la respuesta fuera parecida a casos similares obtenidos en google]


---

## Uso 8
* **Objetivo:** [Diseñar la prueba de usuarios del Avance 6 (hipótesis, tareas, perfiles, plan de levantamiento) y el guion de la sesión, documentados en docs/prueba-usuarios.md y docs/pauta-validacion.md]

* **Instrucción y respuesta (en orden):**

1. **Prompt:** ["Crea docs/prueba-usuarios.md con el título '# Diseño de prueba de usuarios · [nombre del proyecto]' y dos secciones: '1. Objetivo, hipótesis y alcance' (pregunta que responde la prueba, una hipótesis falseable con la plantilla 'Creemos que… Lo sabremos cuando observemos…' retomando la del Avance 2, y qué queda fuera de alcance) y '2. Tareas, métricas y umbral' (2-3 tareas del flujo principal en una tabla Tarea | HU | Escenario | Objetivo | Éxito | No revelar | Umbral, sin nombrar botones ni pantallas en escenario/objetivo, con datos que existan en el prototipo, y umbrales numéricos concretos). Restricción: todo debe salir del repositorio, lo que falte queda como [POR COMPLETAR]."]
   **Respuesta:** [Se creó docs/prueba-usuarios.md con ambas secciones, usando la hipótesis del Avance 2 (docs/unidad1/Avance2_Equipo_4.docx.pdf) y datos reales de los wireframes (Planta Norte, JK-LP-82, "Carga no lista"). Se verificó que ningún escenario/objetivo nombrara botones o pantallas, que los criterios de éxito fueran observables en una grabación, y se avisó que los umbrales numéricos no salían del repositorio (no había ninguno previo) sino que eran una propuesta a validar por el equipo.]

2. **Prompt:** ["Agrega '## 3. Perfiles y reclutamiento' con una tabla Perfil | Usuario o stakeholder | N.º | Cómo se contacta | Por qué, distinguiendo usuarios (ejecutan tareas en el celular) de stakeholders (se consultan por restricciones y adopción), considerando el rol de Coordinadora de despachos de docs/historias.md, e incluyendo al menos un perfil del grupo excluido según el mapa de impacto del Avance 5. Avisar si el Avance 5 describe la exclusión de otra forma antes de escribirla."]
   **Respuesta:** [Antes de escribir la tabla, se avisó que docs/etica.md (B1) solo describía al excluido como "sin cobertura en ruta", sin la parte de teléfonos antiguos/no inteligentes que pedía el mensaje. Se preguntó cómo seguir; se eligió actualizar primero esa fila de docs/etica.md, y luego se escribió la sección 3 ya consistente con ese cambio.]

3. **Prompt:** ["Agrega '## 5. Plan de levantamiento': número de sesiones coherente con los perfiles, duración máxima 20 min por sesión, quién facilita/registra/resguarda la evidencia (usando 'Integrante 1, 2, 3'), qué es la evidencia (grabación sin audio ni rostro, más transcripción en vivo), qué pasa si el participante no tiene celular compatible, dónde se guarda (Drive del curso, fuera del repositorio, sin links), una planilla vacía Participante | Tarea | Minuto | Observado | Interpretado | Severidad, y la regla de decisión bloquea/entorpece/estético."]
   **Respuesta:** [Se agregó la sección 5, cubriendo las 10 sesiones de los perfiles usuario (P1 y P2), con los tres roles, el protocolo de evidencia sin audio/rostro, el caso del perfil excluido (se mantienen sus condiciones reales en vez de reemplazarlas por el celular de prueba) y la planilla vacía con su regla de decisión al final.]

4. **Prompt:** ["Crea docs/pauta-validacion.md con el guion que lee quien facilita, en orden y con minutos por etapa: bienvenida y consentimiento, 2-3 preguntas de contexto sobre hechos pasados, instrucción de pensar en voz alta, las tareas de la sección 2 copiadas textualmente, el cuestionario SUS de 10 ítems, y 2 preguntas de cierre. Máximo dos planas, y que la suma de consentimiento+contexto+tareas+cuestionario no pase de 20 minutos. Ninguna pregunta debe sugerir la respuesta, pedir opinión sobre el futuro o promover la idea del equipo."]
   **Respuesta:** [Se creó docs/pauta-validacion.md con el guion completo. Se sumaron los minutos (15 min el bloque pedido, 18 min el guion completo) y se comparó cada tarea contra docs/prueba-usuarios.md, confirmando que el texto del escenario era idéntico. Se avisó explícitamente que 2 ítems del cuestionario SUS ("¿usaría…?", predicciones sobre otras personas) sí calzan con el tipo de pregunta de opinión/futuro que la restricción pide evitar, por ser parte de un instrumento estándar y no una pregunta propia.]

5. **Prompt:** ["Pauta de errores frecuentes del Avance 6 (demostración disfrazada de prueba, preguntas de opinión, umbral elástico, perfiles genéricos, sesiones extensas, datos personales en el repositorio): revisar ambos documentos contra esa lista."]
   **Respuesta:** [Se revisaron los dos archivos contra la lista. Se confirmó que 4 de los 6 errores no aplicaban (no hay instrucciones de qué tocar, los umbrales son concretos, no hay datos personales ni links a grabaciones). Se encontraron 2 reales: el cuestionario SUS (preguntas de opinión/futuro) y 3 perfiles sin vía de contacto definida. Se preguntó cómo resolver cada uno; se decidió reemplazar el SUS por una pregunta de facilidad (1-5) después de cada tarea, y proponer vías de contacto para esos 3 perfiles, marcadas explícitamente como propuesta no confirmada por el equipo. Se aplicaron ambos cambios en docs/pauta-validacion.md y docs/prueba-usuarios.md.]

* **Qué se aceptó o corrigió:** [Se aceptó la estructura y el contenido de cada paso. Los ajustes relevantes fueron dos: la corrección de docs/etica.md antes de escribir la sección 3 (en vez de inventar el dato del excluido), y el reemplazo del cuestionario SUS por la pregunta de facilidad por tarea, detectado en la revisión de errores frecuentes.]
* **Cómo se verificó:** [Se releyeron docs/historias.md, docs/etica.md, docs/prueba-usuarios.md y las imágenes de docs/wireframes/ antes de escribir cada sección, para no usar datos fuera del repositorio. Se hizo una revisión de sesgo explícita sobre escenarios/objetivos (sin botones ni pantallas), preguntas de contexto y cierre (hechos pasados, no opinión ni futuro), y se repasó la lista de errores frecuentes del Avance 6 completa al final.]

---

## Uso 9
* **Objetivo:** [Definir el camino delgado (acción punta a punta) y documentar la arquitectura de componentes junto con el alcance inicial en `docs/arquitectura.md`.]
* **Contexto:** [Se inicia la fase de desarrollo de la PoC del proyecto de gestión de imprevistos en despachos, partiendo de los artefactos ya existentes en el repositorio (`docs/historias.md`, `docs/prototipo.md` y `docs/datos/estructura_datos.md`) y de las láminas del curso sobre *Camino completo y límite explícito* (Figura 7) y *La PoC es un camino delgado completo*.]
* **Intención:** [Primero alinear mediante preguntas el alcance exacto del camino delgado (acción mínima, manejo de despachos, validaciones, límites explícitos y stack) contrastándolo con lo documentado en GitHub; luego crear `docs/arquitectura.md` con el diagrama de componentes en Mermaid, la tabla por pieza, el plan de falla de servicios externos y la definición formal del camino delgado.]
* **Restricciones:** [En el primer turno, no crear ni modificar ningún archivo del repositorio y solo hacer preguntas para definir el camino delgado. En el segundo turno, crear únicamente `docs/arquitectura.md` y registrar esta conversación en `docs/bitacora-ia/bitacora.md` sin modificar ningún otro documento; usar los 3 tipos actuales de imprevisto (`Carga no lista`, `Retraso`, `Camión en espera`), dejar explícito el envío real por correo para la siguiente iteración y explicar que el inicio de sesión se resuelve temporalmente con un coordinador fijo de prueba (seed) en Supabase.]
* **Instrucción y respuesta (en orden):**

1. **Prompt:** ["No modifiques ni crees nada. Necesito definir el 'Camino delgado' (acción de punta a punta) para comenzar a desarrollar. Hazme las preguntas necesarias para que definamos este camino. No crees ni modifiques ningún documento." (adjuntando Figura 7: Camino completo y límite explícito).]
   **Respuesta:** [Se revisó `docs/prototipo.md` sin modificar archivos y se formularon 5 preguntas estructuradas sobre la acción mínima punta a punta, manejo de despachos en Supabase, validaciones del backend, límite explícito y stack/despliegue. Tras responder las preguntas (y consultar si el flujo propuesto por el usuario coincidía con GitHub), se contrastó contra `docs/historias.md`, `docs/prototipo.md` y `docs/datos/estructura_datos.md`, recomendando tres ajustes: (1) sacar el login del camino delgado usando un coordinador fijo seed en Supabase, (2) dejar el envío real de correos para la siguiente iteración guardando por ahora los avisos en Supabase, y (3) usar los 3 tipos actuales de imprevisto de `docs/historias.md` (`Carga no lista`, `Retraso`, `Camión en espera`).]

2. **Prompt:** ["Crea un documento en `docs/arquitectura.md`, dentro de este muestra el diagrama a nivel de componentes (Mermaid) con el frontend, el backend, los datos, el servicio externo si existe y la publicación, y una flecha por cada comunicación. Bajo el diagrama, una tabla con una fila por pieza que indique qué hace en esta solución (no la definición general), con qué está hecha y con quién se comunica. Si la solución depende de un servicio externo, se declara su plan de falla: qué ve la persona y qué hace mientras ese servicio no responde. 2. Camino delgado: la acción elegida (una sola), por qué corresponde al supuesto más frágil de la solución, qué queda fuera por ahora (declarado como decisión, no como olvido) y qué ve la persona si algo falla. Además ajusta los tipos de imprevistos, usa los 3 tipos actuales. Deja explícitos los límites para la siguiente iteración (envío por correo). Explica que el inicio de sesión es usando un coordinador fijo de prueba (seed) en Supabase. No modifiques ningún otro documento. Deja esta conversación como registro en `bitacora.md` siguiendo la estructura ya establecida (contexto, intención, restricciones y verificación)."]
   **Respuesta:** [Se creó `docs/arquitectura.md` con las dos secciones solicitadas: (1) diagrama de componentes en Mermaid con Frontend (Next.js/React), Backend API (Next.js Route Handlers), Datos (Supabase/PostgreSQL), Servicio externo de correo (siguiente iteración) y Publicación (Vercel), tabla específica por pieza y plan de falla ante caída del servicio externo o BD; y (2) definición del camino delgado (P1 → P2 → [P3] → P4) con los 3 tipos actuales de imprevisto, explicación del coordinador fijo seed en Supabase, justificación del supuesto más frágil, tabla de límites explícitos y manejo de errores visibles para la persona. Se agregó además este registro en `docs/bitacora-ia/bitacora.md`.]

* **Qué se aceptó o corrigió:** [Se aceptó la propuesta consolidada del camino delgado incluyendo los tres ajustes detectados en la revisión del repositorio (sin login usando coordinador seed, envío real por correo pospuesto a la siguiente iteración y uso de los 3 tipos actuales de imprevisto).]
* **Cómo se verificó:** [Se revisó `git status` para confirmar que únicamente se creó `docs/arquitectura.md` y se actualizó `docs/bitacora-ia/bitacora.md`, sin alterar ningún otro archivo del repositorio. Se contrastó el contenido contra `docs/historias.md`, `docs/prototipo.md` y los criterios de la Figura 7 y la lámina de PoC (acción única punta a punta, tipos de imprevisto vigentes, plan de falla, coordinador seed y límites explícitos).]

---
