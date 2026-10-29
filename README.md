# Portafolio de Samuel Arandia

Sitio personal de Samuel Arandia, desarrollador full stack en Santiago de Chile: proyectos, experiencia, stack y contacto, en español e inglés y con modo claro y oscuro.

Publicado en [samuelarandia.com](https://samuelarandia.com).

## Stack

- Next.js 13 (app router) exportado como sitio estático (`output: 'export'`)
- React 18, Tailwind CSS 3, framer-motion y Lenis
- Inter y JetBrains Mono vía `next/font`

## Desarrollo local

Requiere Node.js 20.

```bash
npm install
cp .env.local.example .env.local   # completa la URL del webhook del formulario
npm run dev
```

`npm run build` genera el sitio estático en `out/`.

### Variables de entorno

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_CONTACT_WEBHOOK_URL` | URL del Logic App de Azure que recibe el formulario de contacto. Sin ella, el formulario muestra un mensaje de error con el correo de contacto. |

## Estructura

- `src/app/` — rutas (`/`, `/about`, `/portfolio`, `/skills`, `/contact`), layout, metadatos y estilos globales (tokens de color en `globals.css`)
- `src/components/` — secciones de la landing y el armazón compartido (`SiteShell`)
- `src/constants/index.js` — proyectos, redes sociales y enlaces
- `src/i18n/translations.js` — todos los textos en español e inglés
- `src/pages/404.js` — página 404 del export estático

## Despliegue

`wrangler.toml` publica la carpeta `out/` como assets en Cloudflare y sirve `out/404.html` para rutas inexistentes.

## Contacto

- Correo: samuelarandia@gmail.com
- LinkedIn: [/in/samuel-arandia](https://www.linkedin.com/in/samuel-arandia/)
- GitHub: [@samuelArandia](https://github.com/samuelArandia)
