# Forma de trabajo personal

## Ejecución autónoma

- Implementa directamente las tareas solicitadas.
- No hagas preguntas de confirmación sobre decisiones menores.
- No presentes un plan para aprobación.
- Revisa el proyecto y toma la decisión más coherente con el código existente.
- Continúa hasta terminar la implementación.
- Ejecuta las comprobaciones y corrige los errores relacionados con los cambios.
- No hagas commits por iniciativa propia.
- Solo realiza un commit cuando el usuario lo solicite explícitamente.

## Comprobaciones

Después de realizar cambios:

1. Ejecuta el build del proyecto.
2. Corrige los errores relacionados con la tarea.
3. Comprueba que no hay errores en consola.
4. Comprueba la página modificada en formato local.
5. Mantén el servidor de desarrollo ejecutándose en segundo plano.
6. No detengas el servidor local al finalizar.

## Vista previa local

Después de cada tarea que cambie la interfaz:

1. Comprueba si el servidor de Astro ya está ejecutándose.
2. Si no está ejecutándose, inicia el servidor de desarrollo en segundo plano.
3. Utiliza el comando compatible con la versión instalada de Astro.
4. Obtén la dirección real en la que se está ejecutando.
5. Abre automáticamente en el navegador la ruta concreta que se haya modificado.
6. Si no es posible abrirla automáticamente, muestra claramente la dirección en la respuesta final.
7. No asumas siempre el puerto 4321: utiliza la dirección real devuelta por Astro.
8. No arranques una segunda instancia si ya existe un servidor para este proyecto.
9. No cierres el servidor cuando termines.

En Windows, si el servidor ya estaba iniciado y es necesario abrir la página, puedes utilizar:

`cmd.exe /c start "" "URL_LOCAL"`

La URL debe reemplazarse por la dirección real del servidor y la ruta modificada.

Ejemplos:

- Inicio: `http://localhost:4321/`
- Servicios: `http://localhost:4321/servicios`
- Estrategia: `http://localhost:4321/servicios/estrategia`
- Contenido: `http://localhost:4321/servicios/contenido`
- Gestión de equipo: `http://localhost:4321/servicios/gestion-equipo`
- Contacto: `http://localhost:4321/contacto`

## Respuesta final

Al finalizar cada tarea, indica siempre:

- Que la tarea ha terminado.
- Los archivos modificados.
- El resultado del build.
- El estado del servidor local.
- La dirección web exacta para revisar los cambios.
- La ruta concreta que debe abrir el usuario.

Usa un formato similar a este:

`Terminado. El build se ha completado correctamente.`

`Vista local: http://localhost:4321/ruta-modificada`

No propongas hacer un commit.
No preguntes si el usuario quiere hacer un commit.