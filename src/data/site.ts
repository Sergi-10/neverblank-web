// Destinos únicos de la app y de la página de contacto.
// Todos los enlaces del sitio deben salir de aquí para no duplicar URLs.
export const APP_LOGIN_URL = "https://app.neverblanc.com/login";
export const APP_REGISTER_URL = "https://app.neverblanc.com/register";
export const CONTACT_ROUTE = "/contacto";
export const PRICING_ROUTE = "/precios";

// Atributos comunes de los enlaces que salen a la app (pestaña nueva y segura).
export const EXTERNAL_LINK_ATTRS = { target: "_blank", rel: "noopener" } as const;

export interface ShowcaseStep {
  /** Clase del icono Tabler */
  icon: string;
  title: string;
  subtitle: string;
}

// Fuente única de los 4 pasos: la consumen ProcessSteps.astro (proceso superior
// de la home) y ProductShowcase.astro (tarjeta animada). No duplicar.
export const showcaseSteps: ShowcaseStep[] = [
  {
    icon: "ti-clipboard-text",
    title: "Define la estrategia",
    subtitle:
      "Perfil de cliente, tono de marca, competencia y hashtags, generado con IA y siempre editable.",
  },
  {
    icon: "ti-calendar",
    title: "Genera el calendario",
    subtitle: "Un mes completo de contenido en minutos: carrusel, reel, story e hilo.",
  },
  {
    icon: "ti-checks",
    title: "Revisa y aprueba",
    subtitle: "Cada publicación pasa por revisión antes de salir. Tu criterio siempre manda.",
  },
  {
    icon: "ti-rocket",
    title: "Publica con control",
    subtitle: "Cada publicación sale aprobada, a tiempo y sin sorpresas.",
  },
];

// Narrativa "cómo trabaja una agencia SIN NeverBlanc" (proceso superior de la
// home). Es contenido distinto al de showcaseSteps, que describe el producto.
export const agencyPainSteps: ShowcaseStep[] = [
  {
    icon: "ti-users",
    title: "La reunión",
    subtitle: "Se define la estrategia a mano, en un documento que nadie vuelve a abrir.",
  },
  {
    icon: "ti-layout-grid",
    title: "El caos de herramientas",
    subtitle:
      "Un Word para la estrategia, un Excel para las fechas, un chat de WhatsApp para las ideas sueltas.",
  },
  {
    icon: "ti-message-2",
    title: "Los prompts sueltos",
    subtitle:
      "Copiar y pegar en una IA cada vez que hace falta un texto, sin contexto ni memoria del cliente.",
  },
  {
    icon: "ti-mood-sad",
    title: "El resultado",
    subtitle:
      "Publicaciones tarde, sin coherencia entre cliente y cliente, y un equipo quemado. Así no hay crecimiento posible.",
  },
];

// Único email de contacto real: usarlo siempre desde aquí (Footer.astro y
// contacto.astro lo importaban antes de forma inconsistente).
export const CONTACT_EMAIL = "hello@neverblanc.com";

export const CONTACT_PHONE = "+34 696874885";

// Cabecera de la página de contacto. La posición encuadra el móvil de la foto
// en la franja visible por encima del recuadro blanco.
export const CONTACT_HERO_IMAGE = "/contactar_header.png";
export const CONTACT_HERO_POSITION = "55% 40%";

export interface Service {
  slug: string;
  route: string;
  number: string;
  /** Título del hero y de la tarjeta en /servicios */
  title: string;
  /** Frase corta bajo el título en la tarjeta de /servicios */
  tagline: string;
  /** Clase del icono Tabler para la tarjeta de /servicios */
  icon: string;
  heroImage: string;
  /** background-position ajustado a cada imagen para no cortar el foco visual */
  heroPosition: string;
  /** Palabras que rota el efecto de escritura, en naranja */
  words: string[];
  /** Parte final fija del subtítulo, en blanco */
  suffix: string;
  paragraphs: string[];
  description: string;
}

export const services: Service[] = [
  {
    slug: "estrategia",
    route: "/servicios/estrategia",
    number: "01",
    title: "Estrategia",
    tagline: "El punto de partida de cada cliente.",
    icon: "ti-target",
    heroImage: "/estrategia_header.png",
    heroPosition: "38% 48%",
    words: ["definir", "transformar", "dar forma a"],
    suffix: "tu estrategia",
    description:
      "Reúne público objetivo, propuesta de valor, competencia y tono de marca en un solo lugar y genera la estrategia de cada cliente con IA.",
    paragraphs: [
      "Antes, la estrategia de cada cliente se quedaba en un documento que nadie volvía a abrir. NeverBlanc la convierte en un perfil vivo: público objetivo, propuesta de valor, competencia, tono de comunicación, palabras clave y plataformas recomendadas, todo en un mismo lugar y siempre a mano.",
      "El proceso es simple: completas un cuestionario guiado, la IA genera o resume la estrategia a partir de esas respuestas y tú la revisas y ajustas hasta que refleje al cliente. Queda guardada y editable, sin volver a empezar de cero en cada reunión.",
      "El resultado: cada publicación que generes después parte de esa misma dirección, sin perder tiempo explicando otra vez quién es el cliente o qué quiere transmitir.",
    ],
  },
  {
    slug: "contenido",
    route: "/servicios/contenido",
    number: "02",
    title: "Contenido",
    tagline: "Un mes completo en minutos.",
    icon: "ti-calendar",
    heroImage: "/contenido_header.png",
    heroPosition: "50% 46%",
    words: ["potenciar", "dar vida a", "elevar"],
    suffix: "tu contenido",
    description:
      "Convierte la estrategia de cada cliente en un calendario de contenido completo generado con inteligencia artificial.",
    paragraphs: [
      "Antes, cada publicación salía de un prompt suelto copiado y pegado en una IA sin memoria del cliente. NeverBlanc parte de la estrategia que ya tienes guardada y genera un calendario de contenido completo, coherente con la marca y las plataformas de cada cliente.",
      "El proceso: eliges el periodo que necesitas, pulsas generar y la IA crea las publicaciones con título, copy, texto para el diseño (por diapositiva si es carrusel), hashtags e idea visual. Tú revisas, editas o regeneras lo que no encaje, directamente desde el calendario.",
      "Trabajas con posts, carruseles, reels, stories, vídeos, hilos o artículos según la plataforma, y pasas de una página en blanco a un mes de contenido en minutos, no en días.",
    ],
  },
  {
    slug: "gestion-equipo",
    route: "/servicios/gestion-equipo",
    number: "03",
    title: "Gestión de equipo",
    tagline: "Un solo sitio para todo el equipo.",
    icon: "ti-users",
    heroImage: "/gestion_equipo_header.png",
    heroPosition: "50% 38%",
    words: ["coordinar", "alinear", "optimizar"],
    suffix: "tu equipo",
    description:
      "Centraliza clientes, estrategias y calendarios para que todo el equipo trabaje sobre la misma planificación.",
    paragraphs: [
      "Antes, la información de cada cliente se repartía entre hojas de cálculo, documentos y chats de WhatsApp, y cada persona tenía su propia versión. NeverBlanc centraliza clientes, estrategias y calendarios en un único sitio, con roles de agencia para cada miembro del equipo.",
      "El proceso: cualquier persona del equipo entra, ve los mismos clientes y el mismo calendario, y trabaja sobre publicaciones que pasan por tres fases (pendiente, aprobado y publicado) antes de salir.",
      "Así siempre queda claro qué está listo, qué necesita revisión y qué ya se ha publicado, sin depender de quién se acuerde de avisar al resto.",
    ],
  },
];

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  suffix: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

// Fuente única de los planes: la consumen /precios y la sección #precios de
// la home a través de PricingPlans.astro. No duplicar en ningún otro sitio.
export const plans: PricingPlan[] = [
  {
    name: "Starter",
    description: "Para quien empieza en solitario",
    price: "19€",
    suffix: "/mes",
    features: ["1 usuario", "3 marcas", "3 generaciones por marca", "30 posts al mes"],
    cta: "Empezar con Starter",
    highlighted: false,
  },
  {
    name: "Profesional",
    description: "Para equipos que ya gestionan varias marcas",
    price: "49€",
    suffix: "/mes",
    features: ["3 usuarios", "10 marcas", "6 generaciones por marca", "60 posts al mes"],
    cta: "Empezar con Profesional",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Para agencias con operación grande",
    price: "98€",
    suffix: "/mes",
    features: ["6 usuarios", "20 marcas", "12 generaciones por marca", "120 posts al mes"],
    cta: "Empezar con Enterprise",
    highlighted: false,
  },
];
