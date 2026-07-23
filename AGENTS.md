# NeverBlank — Project Brief

> Documento de contexto para Claude Code. Pégalo entero al iniciar el proyecto en Visual Studio Code (o guárdalo como `CLAUDE.md` en la raíz del repo para que Claude Code lo lea automáticamente en cada sesión).

## 1. Qué es NeverBlank

NeverBlank es una plataforma para **agencias y freelances de marketing** que gestionan redes sociales de varios clientes. Sustituye el proceso manual actual (reunión → estrategia en Word → prompts sueltos a una IA → Excel → diseño manual → Metricool) por un flujo integrado:

1. Reunión con el cliente
2. Se crea un perfil de cliente en NeverBlank
3. Se introduce la estrategia (manual o guiada con formulario asistido por IA)
4. La IA genera/resume la estrategia (editable in-app)
5. Se pide un calendario de contenido (mensual, o el rango que se quiera)
6. Se edita visualmente el calendario generado
7. Cada entrada del calendario incluye: título del post, copy, texto para dentro del diseño (por diapositiva/slide si es carrusel), hashtags e idea de diseño

**Objetivo de negocio:** quitar el "puto coñazo" (cita textual del pitch) de currar redes sociales a mano, para agencias que hoy gestionan todo en hojas de cálculo y WhatsApp.

## 1bis. ⚠️ Nota de seguridad (no relacionada con Astro, pero urgente)

Un informe interno detectó que un `.env` del backend real de la app circuló con secretos en claro: `SUPABASE_SECRET_KEY` (service-role, acceso total saltándose RLS), `GEMINI_API_KEY` y `RESEND_API_KEY`. Si ese archivo salió del equipo por cualquier canal, **rotar esas claves** y verificar que `.env` está en `.gitignore` del backend. Esto no afecta a la web en Astro, pero es prioritario para el proyecto en general.

## 1ter. La app real (contexto, no forma parte de este repo Astro)

La app de producto (no la landing) ya existe y está construida en **Angular 21 + TypeScript + PrimeNG + Supabase + ngx-translate**, con backend en Express que llama a **Google Gemini** para generar el contenido. Esto confirma y afina lo descrito en la sección 6 de este brief:

- Calendario con **drag & drop** nativo (HTML5), filtros por plataforma/tipo/estado, panel lateral de detalle con edición, regeneración por IA y borrado
- Publicación con 3 estados: **pendiente → aprobado → publicado**
- Roles de agencia: **owner / member**
- Planes confirmados: **lite / pro / agency** (coincide con la tabla de precios de la sección 5)
- Interfaz en **ES/EN** (i18n con ngx-translate)

Esta info es para que la landing en Astro describa funcionalidades reales y no inventadas — el detalle interno de componentes Angular (código, estructura de carpetas, etc.) pertenece al repo de la app, no al de la landing, y no hace falta metérselo a Claude Code aquí.

## 2. Stack técnico

- **Framework de la web pública/marketing**: Astro
- La app en sí (dashboard, login, calendario) ya existe como producto funcionando — las capturas de este brief son de la app real, no mockups. La web en Astro es la landing/marketing site, no la app.
- Idioma principal: español (con toggle EN visible en el login)

## 3. Identidad de marca

### Logo
"NEVERBLANC" (nombre de marca real, aunque el naming del proyecto interno es "NeverBlank") — logotipo en mayúsculas, tipografía geométrica bold, con un icono cuadrado a la izquierda: fondo naranja con una "X" y un cuadrado blanco/hueco estilo "sin señal / pantalla en blanco" (referencia visual a "nunca en blanco").

### Colores (extraídos por muestreo de píxel real de las capturas, no aproximados)

| Uso | Hex |
|---|---|
| Naranja primario (CTA, acentos, marca) — **oficial, confirmado en el código de la app** | `#F69420` |
| Azul marino oscuro (fondo login/sidebar app) | `#14283C` |
| Negro puro (fondo slides de presentación/marketing) | `#000000` |
| Blanco / fondo de la app | `#FAFAFA` |
| Naranja claro (fondo de tarjetas seleccionadas, hover) | `#FADCC8` |

> El código Angular de la app real define el tema de PrimeNG con una escala completa de naranja de `#fff8ed` a `#3c1f05`, con `#F69420` como color primario. Si se necesita la escala completa (10 tonos) para componentes con estados hover/active, generarla a partir de ese primario.

**Degradado decorativo** (el "swirl" en forma de bucle que aparece en portada y slides, usado como elemento gráfico de marca, no como fondo de UI):
- Azul `#5A9EED` → Turquesa `#39C7DF` → Púrpura `#CD97E3` → Rosa `#F589DF` → Naranja `#FDA270`

Este degradado en forma de cinta/bucle (parece una "Q" o un lazo) es el elemento gráfico distintivo de las diapositivas y portada — vale la pena replicarlo como SVG en el hero de la landing.

### Tipografía
- Titulares: sans-serif redondeada y gruesa (estilo Baloo 2 / Fredoka / Poppins ExtraBold) — se ve en "NeverBlank", "Así se hace ahora", "Y así será"
- Cuerpo/UI: sans-serif estándar limpia (estilo Inter/Helvetica) para inputs, tablas, texto de la app

### Tono de copy
Directo, informal, con humor ("Un puto coñazo" / "Una puta maravilla"). Para la landing pública probablemente se suaviza ese tono (ver Image 5, que ya usa un tono más neutro/profesional: "Gestiona tu contenido. Sin excusas.").

## 4. Estructura de la landing (basado en Image 5 / mockup ya maquetado)

1. **Header**: logo + nav (Características, Cómo funciona, Precios) + botones Iniciar sesión / Registrarse
2. **Hero**: "Gestiona tu contenido. Sin excusas." + subtítulo ("La plataforma para agencias y freelances que necesitan tener el control total de sus clientes, publicaciones y estrategia") + 2 CTAs (Registrarse / Ver la plataforma) + captura del dashboard + métricas sociales (500+ agencias, 50K+ publicaciones generadas, 4.9★ valoración media, 10h/semana ahorradas — cifras de ejemplo, confirmar reales)
3. **Problema**: "¿Gestionas clientes en hojas de cálculo y WhatsApp?" con 3-4 pain points
4. **Características** ("Todo lo que necesitas, nada que sobre"): Dashboard global, Calendario por cliente, Asistente IA integrado, Flujo de aprobación, Gestión de equipo, Multicliente, Branding por cliente
5. **Cómo funciona**: 5 pasos ("Crea tu agencia → Añade tus clientes → Genera con IA → Aprueba y publica → Escala sin caos"), "De cero a publicando en menos de 10 minutos"
6. **Video demo** ("Descubre cómo funciona en menos de 2 minutos")
7. **Precios** (3 planes, ver tabla abajo)
8. **CTA final**: "¿Listo para dejar el caos atrás?"
9. **Footer**: producto, legal, contacto, redes

## 5. Planes de precio

| Plan | Precio | Miembros | Clientes | Créditos IA/mes |
|---|---|---|---|---|
| Lite | 29€/mes | 1 | 3 | 20 |
| **Pro** (más popular) | 79€/mes | 3 | 15 | 200 |
| Agency | 199€/mes | 10 | ilimitados | 1000 |

Nota: en la app actual aparece un aviso "Cambio de plan temporal — integración con Stripe próximamente", indicando que el cobro real aún no está activo.

## 6. Funcionalidades clave de la app (para entender qué vende la landing)

- **Multi-cliente por agencia**: sidebar con lista de clientes (cada uno con su propio perfil de negocio, estrategia y calendario)
- **Ficha de estrategia por cliente**: público objetivo, propuesta de valor, plataformas recomendadas, tono de marca, servicios, valor diferencial, nivel de precios, tamaño de mercado, competencia, tono de comunicación, hashtags habituales, palabras clave a evitar, redes sociales conectadas — todo generado/resumido por IA a partir de un cuestionario, y editable
- **Calendario de contenido interactivo**: vista mensual, filtrable por red social (Instagram, LinkedIn...), tipo de contenido, estado (Pendiente/Aprobado/Publicado); click en un post abre panel lateral con texto por diapositiva (si es carrusel), copy, hashtags e idea de diseño
- **Generación por IA**: botón "Generar calendario" que crea automáticamente el planning del mes según la estrategia
- **Un usuario, varios perfiles/clientes** y también un perfil gestionable por varios usuarios (colaboración de equipo)
- **Todo editable desde la propia app** (doble click para editar texto generado, sin depender de Word/Excel externos)

### 6.1. Tipos de contenido soportados por red social

Útil para la sección de "Características" de la landing (mostrar cobertura real, no genérica):

| Red | Formatos |
|---|---|
| Instagram | Single post, Carrusel (hasta 10), Reels, Stories |
| Facebook | Texto/enlace, Post, Carrusel, Reels, Stories |
| TikTok | Vídeo, Carrusel de fotos, Single post, Stories |
| YouTube | Vídeo largo, Shorts |
| LinkedIn | Texto, Single post, Carrusel, Artículo (formato largo) |
| X (Twitter) | Tuit, Tuit con imagen/vídeo, Carrusel, Hilo |
| Threads | Texto, Imagen/vídeo, Carrusel, Hilo |
| Pinterest | Pin estático, Pin de vídeo, Pin de carrusel |

### 6.2. Campos de una publicación (modelo de datos interno — no son sinónimos)

Por si la landing necesita explicar con precisión "qué genera la IA" en vez de hablar en genérico:

- **Descripción**: resumen interno de trabajo (qué es y para qué), nunca se publica
- **Copy**: texto final que se publica junto al diseño, de cara al público
- **Texto interno**: el texto que va maquetado dentro de cada imagen/slide (desglosado slide a slide en carruseles), distinto del copy
- **Estrategia de hashtags**: grupos reutilizables por cliente/campaña (marca, nicho, alcance, campaña), no texto libre por post
- **Idea de diseño**: brief creativo/visual antes de que exista el diseño final

## 7. Preguntas abiertas / pendientes (del propio equipo, sin resolver aún)

- Seguridad de los datos del cliente (ciberseguridad)
- Coste real por generación de IA (para dimensionar los créditos de cada plan)
- Conectividad directa con RRSS para recomendar automáticamente hora y día óptimos de publicación
- Integración de cobro con Stripe (mencionada como "próximamente" en la UI)

## 8. Notas para Claude Code

- Replicar la paleta exacta de arriba como variables CSS / tokens de Tailwind, no inventar tonos nuevos.
- El degradado en forma de lazo es un asset gráfico de marca — si se recrea en SVG, mantener el orden de color azul→turquesa→púrpura→rosa→naranja.
- La landing es marketing puro (Astro, estático/SSG); la app (login, dashboard, calendario) es un producto aparte ya construido — no confundir ambos alcances al planificar tareas.
- Tono de la copy pública: directo y sin rodeos, pero sin las palabrotas del pitch interno.


## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
