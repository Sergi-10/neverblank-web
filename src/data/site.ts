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
    title: "NeverBlanc",
    subtitle:
      "Para agencias y freelances que gestionan varias cuentas sin mirar un calendario vacío.",
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

// Datos de contacto ya presentes en el proyecto (no se inventan nuevos).
export const CONTACT_EMAIL = "info@neverblanc.com";
export const CONTACT_PHONE = "+34 600 000 000";

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
      "Cada cliente necesita una estrategia adaptada a su negocio. En NeverBlanc puedes reunir en un único lugar toda la información necesaria para definirla: público objetivo, propuesta de valor, servicios, competencia, tono de comunicación, palabras clave, hashtags y plataformas recomendadas.",
      "Completa un cuestionario y utiliza la inteligencia artificial para generar o resumir la estrategia del cliente. Después podrás revisarla, modificarla y mantenerla actualizada directamente desde la plataforma.",
      "Así, cada publicación parte de una dirección clara y coherente con la identidad, los objetivos y el público de la marca.",
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
      "Convierte la estrategia de cada cliente en un calendario de contenido completo. NeverBlanc genera mediante inteligencia artificial publicaciones adaptadas a la marca, las plataformas seleccionadas y el periodo que necesites.",
      "Cada publicación puede incluir el título, el copy final, el texto que aparecerá dentro del diseño o de cada diapositiva, la estrategia de hashtags y una idea visual para crear la pieza.",
      "Revisa el contenido desde el calendario, edítalo directamente, reorganiza las publicaciones y trabaja con formatos como posts, carruseles, reels, stories, vídeos, hilos o artículos.",
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
      "Centraliza el trabajo de tu agencia y evita que la información quede repartida entre hojas de cálculo, documentos y conversaciones de WhatsApp.",
      "NeverBlanc permite que varios miembros trabajen sobre los mismos clientes, estrategias y calendarios. Todo el equipo puede consultar la planificación, revisar publicaciones y mantener un flujo de trabajo compartido.",
      "Controla el estado de cada contenido mediante las fases Pendiente, Aprobado y Publicado, para que todos sepan qué está preparado, qué necesita revisión y qué trabajo ya se ha completado.",
    ],
  },
];
