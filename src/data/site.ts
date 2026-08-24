// Destinos únicos de la app. Todos los enlaces del sitio deben salir de
// aquí para no duplicar URLs.
export const APP_LOGIN_URL = "https://app.neverblanc.com/login";
export const APP_REGISTER_URL = "https://app.neverblanc.com/register";

// Atributos comunes de los enlaces que salen a la app (pestaña nueva y segura).
export const EXTERNAL_LINK_ATTRS = { target: "_blank", rel: "noopener" } as const;

export interface ShowcaseStep {
  /** Clase del icono Tabler */
  icon: string;
  title: string;
  subtitle: string;
}

// Flujo real de uso, verificado en app.neverblanc.com el 24/08/2026: de la
// reunión con el cliente a la publicación aprobada. Fuente única de los 7
// pasos: la consumen ProcessSteps.astro (pasos por defecto) y
// ProductShowcase.astro (carrusel animado de la sección "Cómo funciona"). No
// duplicar.
export const showcaseSteps: ShowcaseStep[] = [
  {
    icon: "ti-users",
    title: "Reunión con el cliente",
    subtitle: "El punto de partida: conoces el negocio, sus redes y sus objetivos.",
  },
  {
    icon: "ti-user-plus",
    title: "Das de alta su perfil",
    subtitle: "Creas la ficha del cliente en NeverBlanc en un par de minutos.",
  },
  {
    icon: "ti-clipboard-text",
    title: "Rellenas el asistente de estrategia",
    subtitle: "5 pasos: negocio, cliente, redes, estrategia y hashtags. Editable cuando quieras.",
  },
  {
    icon: "ti-sparkles",
    title: "La IA genera el resumen y las primeras ideas",
    subtitle: "Un resumen de negocio y hasta 8 ideas de publicación de referencia, listas para revisar.",
  },
  {
    icon: "ti-calendar",
    title: "Pides el calendario del mes",
    subtitle: "Eliges mes y año, y la IA lo rellena según la estrategia del cliente.",
  },
  {
    icon: "ti-edit",
    title: "Ajustas cada publicación",
    subtitle: "Copy, texto del diseño y guion si es vídeo, directamente en el calendario.",
  },
  {
    icon: "ti-checks",
    title: "Apruebas y publicas",
    subtitle: "Cada pieza, siempre a la vista: pendiente, aprobado, publicado.",
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

// Único email de contacto real: usarlo siempre desde aquí.
export const CONTACT_EMAIL = "hello@neverblanc.com";

export const CONTACT_PHONE = "+34 696874885";

export interface Service {
  /** Título de la tarjeta en la sección de características de la home */
  title: string;
  /** Clase del icono Tabler para la tarjeta */
  icon: string;
  /** Descripción corta, tono de landing, para la tarjeta de la home */
  description: string;
}

// 6 características reales del producto, verificadas en una sesión de uso
// real de app.neverblanc.com el 24/08/2026. Se muestran en una cuadrícula de
// tarjetas simples (icono + título + descripción) en Servicios.astro.
export const services: Service[] = [
  {
    title: "Asistente guiado en 5 pasos",
    icon: "ti-list-check",
    description:
      "Negocio, cliente, redes, estrategia y hashtags. Todo lo que la IA necesita saber de cada marca, en un único formulario.",
  },
  {
    title: "Estrategia generada por IA",
    icon: "ti-target",
    description:
      "Público objetivo, propuesta de valor, tono de marca y plataformas recomendadas, listos para revisar y ajustar en un clic.",
  },
  {
    title: "Calendario de contenido con un clic",
    icon: "ti-calendar",
    description: "Elige el mes y deja que la IA rellene el calendario según la estrategia de cada cliente.",
  },
  {
    title: "Publicaciones completas, no solo ideas",
    icon: "ti-file-text",
    description:
      "Copy, texto para el diseño, guion escena a escena si es Reel o Story, y estado Pendiente → Aprobado → Publicado.",
  },
  {
    title: "8 ideas de publicación desde el primer minuto",
    icon: "ti-bulb",
    description:
      "Nada más dar de alta un cliente, la IA propone contenido basado en su estrategia para elegir lo que mejor encaja.",
  },
  {
    title: "Multicliente y multiusuario",
    icon: "ti-users",
    description: "Gestiona tantas marcas y perfiles como necesite tu equipo, todo desde el mismo sitio.",
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
    features: [
      "1 usuario",
      "3 marcas",
      "Hasta 3 generaciones de calendario por marca",
      "Hasta 10 posts únicos por marca",
    ],
    cta: "Empezar con Starter",
    highlighted: false,
  },
  {
    name: "Profesional",
    description: "Para equipos que ya gestionan varias marcas",
    price: "79€",
    suffix: "/mes",
    features: [
      "3 usuarios",
      "10 marcas",
      "Hasta 6 generaciones de calendario por marca",
      "Hasta 20 posts únicos por marca",
      "Equipo multiusuario",
    ],
    cta: "Empezar con Profesional",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Para agencias con operación grande",
    price: "98€",
    suffix: "/mes",
    features: [
      "6 usuarios",
      "20 marcas",
      "Hasta 12 generaciones de calendario por marca",
      "Hasta 30 posts únicos por marca",
      "Equipo multiusuario",
      "Soporte prioritario",
    ],
    cta: "Empezar con Enterprise",
    highlighted: false,
  },
];
