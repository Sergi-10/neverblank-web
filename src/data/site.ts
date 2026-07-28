// Destinos únicos de la app y de la página de contacto.
// Todos los enlaces del sitio deben salir de aquí para no duplicar URLs.
export const APP_LOGIN_URL = "/app/login";
export const APP_REGISTER_URL = "/app/registro";
export const CONTACT_ROUTE = "/contacto";

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
  icon: "clipboard" | "calendar" | "users" | "gear";
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
    icon: "clipboard",
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
    tagline: "Un calendario que se rellena solo.",
    icon: "calendar",
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
    tagline: "Todo el equipo, un mismo calendario.",
    icon: "users",
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
