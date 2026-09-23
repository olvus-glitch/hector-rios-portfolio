# Héctor Ríos · Cloud & Software

Portafolio en español, inglés y portugués: proyectos, experiencia práctica, habilidades, formación y documentos públicos censurados.

## Desarrollo

Requiere Node.js 22 o superior. No utiliza dependencias npm.

```sh
npm run dev
npm run build
```

Abre http://127.0.0.1:4173. El build verifica los assets enlazados y genera `dist/`. En Vercel importa este repositorio; `vercel.json` configura el build y la carpeta de salida.

## Idiomas

Detección automática por los idiomas preferidos del navegador (ES/EN/PT), con español como respaldo. El selector recuerda la elección en este dispositivo. Se pueden compartir enlaces con `?lang=es`, `?lang=en` o `?lang=pt`; `?lang=auto` restaura la detección. Las traducciones son locales, sin servicios externos ni envío del contenido. Los documentos conservan su idioma original.

## Contenido

- Fix-ISO: frontend React/Vite con MSW.
- Gym Tracker / FORJA: aplicación full stack Next.js.
- Fix-ISO API: backend público complementario Express/Prisma.
- Formación y experiencia basadas en el CV y certificados suministrados; no se atribuye empleo o experiencia productiva no documentada.

## Privacidad

Solo se publican copias censuradas en `documents/`. Se eliminaron permanentemente de los píxeles teléfonos, correos privados, identificación, firmas, códigos verificadores y folios. Los nuevos PDFs contienen un raster por página, sin texto original, anotaciones, adjuntos ni metadatos originales. Se mantienen el nombre profesional, instituciones, cursos, fechas y GitHub profesional.

Los originales y archivos ZIP no pertenecen al repositorio. No se copió el código de proyectos adjuntos que contenía credenciales de prueba. Los enlaces apuntan a repositorios públicos existentes; sus archivos se administran por separado. No se publica contenido de repositorios privados. No hay formularios ni analítica. Google Fonts sirve las tipografías y recibe la solicitud normal del navegador.

## Mantenimiento

El contenido español está en `index.html`; inglés y portugués, en `app.js`. Al añadir contenido traducible, incluye `data-i` y las dos traducciones correspondientes. Los datos curriculares reflejan los documentos suministrados y deben revisarse cuando cambien.
