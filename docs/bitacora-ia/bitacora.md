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