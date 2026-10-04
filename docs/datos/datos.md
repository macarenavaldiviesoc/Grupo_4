# Datos proyecto
Detalle de los datos mas relevantes

## 1. Para los usuarios es necesario:

*   **`nombre_completo`**: Nombre del usuario.
*   **`rut_usuario`** / **`username`**: Credencial de acceso
*   **`contrasena`**: Contraseña personal
*   **`rol`**: Perfil del usuario para gestionar permisos (como. *Despachador de planta*, *Jefe de Operaciones*, *Conductor*, *Cliente*).
*   **`correo_electronico`**: Email de contacto para notificaciones automáticas.

## 2. Para la Flota
*   **`patente`** : Placa patente del vehículo.
*   **`Disponibilidad`**: Para saber si el camión está apto para uso (como: *Disponible*, *No Disponible*, *En Ruta*).

## 3. Para los despachos

*   **`numero_despacho`** : Identificador único del despacho (N° de despacho).
*   **`patente_camion`** : Camión asignado originalmente al despacho.
*   **`estado_despacho`**: Estado actual del viaje (Como: *Programado*, *En Curso*, *Afectado por Imprevisto*, *Finalizado*).

## 4. Para los Imprevistos 

*   **`folio_imprevisto`** : Número de caso generado automáticamente por el sistema tras la validación.
*   **`numero_despacho`** : Despacho que sufre el incidente.
*   **`id_despachador`** : Usuario que registra el imprevisto.
*   **`tipo_imprevisto`**: Como: *Camión no disponible*, *Retraso en carga/descarga*, *Congestión en acceso*, *Ruta bloqueada*.
*   **`cambio_provocado`**: Consecuencia directa del incidente (Como: *Retraso de X horas*, *Cambio de camión*, *Cambio de ruta*).
*   **`estado_caso`**: Como: *Abierto*, *Cerrado/Resuelto*.


