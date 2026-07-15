import type { Locale } from "@/data/site";

export type Dictionary = {
  nav: {
    home: string;
    services: string;
    team: string;
    reviews: string;
    contact: string;
    book: string;
    language: string;
  };
  common: {
    callNow: string;
    learnMore: string;
    viewServices: string;
    leaveReview: string;
    sendInquiry: string;
    getDirections: string;
    placeholder: string;
    ratingLabel: string;
    reviewsCount: string;
  };
  hero: {
    brand: string;
    headline: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
  };
  servicesPreview: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  why: {
    eyebrow: string;
    title: string;
    body: string;
    stats: { rating: string; reviews: string };
    items: { title: string; body: string }[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  reviewCta: {
    eyebrow: string;
    title: string;
    body: string;
    button: string;
  };
  inquiry: {
    eyebrow: string;
    title: string;
    body: string;
    formTitle: string;
    name: string;
    phone: string;
    email: string;
    service: string;
    message: string;
    serviceOptions: string[];
    submit: string;
    success: string;
    note: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    body: string;
    hoursNote: string;
    selectService: string;
    from: string;
    bookNow: string;
    selectDateTime: string;
    selectTime: string;
    available: string;
    partial: string;
    full: string;
    booked: string;
    selected: string;
    closed: string;
    yourDetails: string;
    name: string;
    phone: string;
    email: string;
    notes: string;
    submit: string;
    success: string;
    note: string;
    needService: string;
    needDate: string;
    needTime: string;
    stats: { clients: string; years: string; reviews: string };
  };
  faq: {
    eyebrow: string;
    title: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    visit: string;
    follow: string;
    rights: string;
  };
  servicesPage: {
    title: string;
    subtitle: string;
    pricingNote: string;
  };
  teamPage: {
    title: string;
    subtitle: string;
    note: string;
    cta: string;
  };
  contactPage: {
    title: string;
    hours: string;
    hoursNote: string;
    parking: string;
    mapTitle: string;
    subtitle: string;
  };
  reviewsPage: {
    title: string;
    subtitle: string;
    highlightsTitle: string;
    highlights: string[];
  };
  preloader: {
    label: string;
  };
};

export const en: Dictionary = {
  nav: {
    home: "Home",
    services: "Services",
    team: "Our Team",
    reviews: "Reviews",
    contact: "Contact",
    book: "Call to Book",
    language: "Language",
  },
  common: {
    callNow: "Call Now",
    learnMore: "Learn More",
    viewServices: "View Services",
    leaveReview: "Leave a Google Review",
    sendInquiry: "Send Inquiry",
    getDirections: "Get Directions",
    placeholder: "Editable placeholder",
    ratingLabel: "Google rating",
    reviewsCount: "Google reviews",
  },
  hero: {
    brand: "Moon Hair Studio",
    headline: "Beautiful hair in a welcoming space.",
    subhead:
      "Professional salon services in Metuchen, NJ. A friendly team, a relaxing atmosphere, and quality styling and color results.",
    ctaPrimary: "Call to Book",
    ctaSecondary: "Explore Services",
    trust: "4.4 ★ · 89 Google reviews · Metuchen, NJ",
  },
  about: {
    eyebrow: "The Studio",
    title: "A calm, welcoming salon experience",
    body: "Moon Hair Studio is a local hair salon on Central Avenue in Metuchen, known for friendly service, a clean and relaxing atmosphere, and thoughtful styling and color work. Whether you’re visiting for balayage, a blowdry, keratin, or a manicure, our goal is simple: make you feel cared for from the moment you arrive.",
    points: [
      "Friendly, welcoming team",
      "Clean, relaxing salon environment",
      "Quality results with careful service",
      "Trusted by local clients across Metuchen & nearby",
    ],
  },
  servicesPreview: {
    eyebrow: "Our Services",
    title: "Signature salon care",
    body: "Beyond haircuts, discover a comprehensive range of services, from coloring to extensions.",
    cta: "See Full Menu",
  },
  why: {
    eyebrow: "Why Moon",
    title: "Why choose us",
    body: "A welcoming Metuchen salon where friendly service, a calm space, and polished results come together.",
    stats: {
      rating: "Average Google rating",
      reviews: "Happy local reviews",
    },
    items: [
      {
        title: "Friendly team",
        body: "A warm, welcoming chair side experience that puts you at ease.",
      },
      {
        title: "Clean & relaxing",
        body: "A tidy, calming space designed for an unhurried visit.",
      },
      {
        title: "Quality results",
        body: "Careful styling, color, and finishing with polished outcomes.",
      },
      {
        title: "Local reputation",
        body: "A strong Metuchen reputation with 4.4 stars from 89 Google reviews.",
      },
    ],
  },
  reviews: {
    eyebrow: "Reviews",
    title: "Loved by local clients",
    body: "Guests often mention our friendly team, clean salon, relaxing atmosphere, and beautiful balayage and styling results.",
    cta: "Read More Reviews",
  },
  reviewCta: {
    eyebrow: "Share the love",
    title: "Loved your visit? Leave a Google review",
    body: "If you loved your visit, a quick Google review would mean so much to our team and help more local clients discover Moon Hair Studio.",
    button: "Leave a Google Review",
  },
  inquiry: {
    eyebrow: "Inquiry",
    title: "Ready for your next look?",
    body: "Ready for a transformative experience? Reach out and let us craft a style that defines you.",
    formTitle: "Send an inquiry",
    name: "Full name",
    phone: "Phone",
    email: "Email",
    service: "Service interest",
    message: "Message",
    serviceOptions: [
      "Balayage",
      "Hair Coloring",
      "Hair Highlighting",
      "Ombre Hair Style",
      "Blowdry",
      "Hair Styling",
      "Bangs Trim",
      "Hair Extensions",
      "Keratin Treatments",
      "Brazilian Hair Straightening",
      "Hair Hydration Treatment",
      "Hair Regrowth",
      "Manicure",
      "Pedicure",
      "Other / not sure",
    ],
    submit: "Book appointment",
    success: "Thank you. We’ll be in touch soon.",
    note: "This form prepares your inquiry locally. For fastest booking, please call +1 732 442 0082.",
  },
  booking: {
    eyebrow: "Book",
    title: "Book an appointment",
    body: "Choose your service, pick a date and time, and request your visit. We’ll confirm by phone or email.",
    hoursNote:
      "Available Monday–Saturday per salon hours. Sundays closed. Slots marked Full or Booked cannot be selected.",
    selectService: "Select a service",
    from: "From",
    bookNow: "Select",
    selectDateTime: "Select date & time",
    selectTime: "Select a time",
    available: "Available",
    partial: "Partial",
    full: "Full",
    booked: "Booked",
    selected: "Selected",
    closed: "Closed",
    yourDetails: "Your details",
    name: "Full name",
    phone: "Phone",
    email: "Email",
    notes: "Notes (optional)",
    submit: "Book appointment",
    success: "Request sent. We’ll confirm your appointment shortly.",
    note: "Online requests are reviewed by our team. Call +1 732 442 0082 for same day bookings.",
    needService: "Please select a service.",
    needDate: "Please select a date.",
    needTime: "Please select an available time.",
    stats: {
      clients: "Happy clients",
      years: "Years experience",
      reviews: "Google reviews",
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered",
  },
  footer: {
    tagline: "Hair salon in Metuchen, NJ. Welcoming, polished, and local.",
    quickLinks: "Quick links",
    visit: "Visit",
    follow: "Follow",
    rights: "All rights reserved.",
  },
  servicesPage: {
    title: "Services",
    subtitle:
      "Premium salon services in Metuchen. Balayage, color, blowdry, treatments, extensions, and nails.",
    pricingNote:
      "Starting prices are listed below. Final pricing may vary by hair length, density, and consultation.",
  },
  teamPage: {
    title: "Our Team",
    subtitle:
      "A friendly team dedicated to beautiful results and a relaxing salon experience.",
    note: "Team profiles below are editable placeholders. Replace with confirmed staff names, photos, and bios.",
    cta: "Book with Us",
  },
  contactPage: {
    title: "Contact Us",
    subtitle:
      "Visit us in Metuchen or reach out to book your next appointment.",
    hours: "Hours",
    hoursNote:
      "Walk ins and appointments are welcome during open hours. Call ahead if you’d like to reserve your preferred time.",
    parking:
      "Street and nearby parking options are typically available along Central Ave. Call ahead if you need guidance.",
    mapTitle: "Find us on the map",
  },
  reviewsPage: {
    title: "Reviews",
    subtitle:
      "4.4 stars from 89 Google reviews. Trusted for friendly service, a clean salon, and quality styling.",
    highlightsTitle: "What guests appreciate",
    highlights: [
      "Friendly and welcoming staff",
      "Clean, relaxing environment",
      "Strong balayage and color feedback",
      "Polished blowouts and styling",
      "Thoughtful hair transformations",
    ],
  },
  preloader: {
    label: "Preparing your experience",
  },
};

export const es: Dictionary = {
  nav: {
    home: "Inicio",
    services: "Servicios",
    team: "Nuestro Equipo",
    reviews: "Reseñas",
    contact: "Contacto",
    book: "Llamar para Reservar",
    language: "Idioma",
  },
  common: {
    callNow: "Llamar Ahora",
    learnMore: "Saber Más",
    viewServices: "Ver Servicios",
    leaveReview: "Dejar Reseña en Google",
    sendInquiry: "Enviar Consulta",
    getDirections: "Cómo Llegar",
    placeholder: "Marcador editable",
    ratingLabel: "Calificación de Google",
    reviewsCount: "reseñas de Google",
  },
  hero: {
    brand: "Moon Hair Studio",
    headline: "Cabello hermoso en un espacio acogedor.",
    subhead:
      "Servicios profesionales de salón en Metuchen, NJ. Un equipo amable, un ambiente relajante y resultados de calidad en peinado y color.",
    ctaPrimary: "Llamar para Reservar",
    ctaSecondary: "Explorar Servicios",
    trust: "4.4 ★ · 89 reseñas de Google · Metuchen, NJ",
  },
  about: {
    eyebrow: "El Estudio",
    title: "Una experiencia de salón calmada y acogedora",
    body: "Moon Hair Studio es un salón local en Central Avenue en Metuchen, conocido por su servicio amable, un ambiente limpio y relajante, y un trabajo cuidadoso de peinado y color. Ya sea que vengas por balayage, blowdry, keratina o manicura, nuestro objetivo es simple: que te sientas cuidada desde el primer momento.",
    points: [
      "Equipo amable y acogedor",
      "Ambiente limpio y relajante",
      "Resultados de calidad con atención cuidadosa",
      "Confianza de clientes locales en Metuchen y alrededores",
    ],
  },
  servicesPreview: {
    eyebrow: "Nuestros Servicios",
    title: "Cuidado de salón con firma",
    body: "Más allá de los cortes, descubre una gama completa de servicios, desde coloración hasta extensiones.",
    cta: "Ver Menú Completo",
  },
  why: {
    eyebrow: "Por qué Moon",
    title: "Por qué elegirnos",
    body: "Un salón acogedor en Metuchen donde el servicio amable, un espacio calmado y resultados pulidos se encuentran.",
    stats: {
      rating: "Valoración media en Google",
      reviews: "Reseñas locales felices",
    },
    items: [
      {
        title: "Equipo amable",
        body: "Una experiencia cálida y acogedora que te pone en confianza.",
      },
      {
        title: "Limpio y relajante",
        body: "Un espacio ordenado y calmado para una visita sin prisas.",
      },
      {
        title: "Resultados de calidad",
        body: "Peinado, color y acabados cuidadosos con resultados pulidos.",
      },
      {
        title: "Reputación local",
        body: "Una sólida reputación en Metuchen con 4.4 estrellas de 89 reseñas de Google.",
      },
    ],
  },
  reviews: {
    eyebrow: "Reseñas",
    title: "Querido por clientes locales",
    body: "Los clientes suelen mencionar nuestro equipo amable, el salón limpio, el ambiente relajante y hermosos resultados de balayage y peinado.",
    cta: "Ver Más Reseñas",
  },
  reviewCta: {
    eyebrow: "Comparte tu experiencia",
    title: "¿Te encantó tu visita? Déjanos una reseña en Google",
    body: "Si disfrutaste tu visita, una reseña rápida en Google significaría mucho para nuestro equipo y ayudaría a más clientes locales a descubrir Moon Hair Studio.",
    button: "Dejar Reseña en Google",
  },
  inquiry: {
    eyebrow: "Consulta",
    title: "¿Lista para tu próximo look?",
    body: "¿Lista para una experiencia transformadora? Contáctanos y creemos un estilo que te defina.",
    formTitle: "Envíanos tu consulta",
    name: "Nombre completo",
    phone: "Teléfono",
    email: "Correo",
    service: "Servicio de interés",
    message: "Mensaje",
    serviceOptions: [
      "Balayage",
      "Coloración",
      "Mechas / Highlighting",
      "Estilo Ombré",
      "Blowdry",
      "Peinado",
      "Recorte de Flequillo",
      "Extensiones",
      "Tratamientos de Keratina",
      "Alisado Brasileño",
      "Tratamiento de Hidratación",
      "Crecimiento Capilar",
      "Manicura",
      "Pedicura",
      "Otro / no estoy segura",
    ],
    submit: "Reservar cita",
    success: "Gracias. Pronto nos pondremos en contacto.",
    note: "Este formulario prepara tu consulta localmente. Para reservar más rápido, llama al +1 732 442 0082.",
  },
  booking: {
    eyebrow: "Reservar",
    title: "Reservar una cita",
    body: "Elige tu servicio, selecciona fecha y hora, y solicita tu visita. Confirmaremos por teléfono o correo.",
    hoursNote:
      "Disponible de lunes a sábado según el horario del salón. Domingos cerrado. Los horarios marcados como Lleno o Reservado no se pueden seleccionar.",
    selectService: "Selecciona un servicio",
    from: "Desde",
    bookNow: "Elegir",
    selectDateTime: "Selecciona fecha y hora",
    selectTime: "Selecciona una hora",
    available: "Disponible",
    partial: "Parcial",
    full: "Lleno",
    booked: "Reservado",
    selected: "Seleccionado",
    closed: "Cerrado",
    yourDetails: "Tus datos",
    name: "Nombre completo",
    phone: "Teléfono",
    email: "Correo",
    notes: "Notas (opcional)",
    submit: "Reservar cita",
    success: "Solicitud enviada. Confirmaremos tu cita pronto.",
    note: "Las solicitudes en línea las revisa nuestro equipo. Llama al +1 732 442 0082 para citas el mismo día.",
    needService: "Por favor selecciona un servicio.",
    needDate: "Por favor selecciona una fecha.",
    needTime: "Por favor selecciona una hora disponible.",
    stats: {
      clients: "Clientes felices",
      years: "Años de experiencia",
      reviews: "Reseñas de Google",
    },
  },
  faq: {
    eyebrow: "Preguntas",
    title: "Preguntas frecuentes",
  },
  footer: {
    tagline: "Salón de belleza en Metuchen, NJ. Acogedor, pulido y local.",
    quickLinks: "Enlaces rápidos",
    visit: "Visítanos",
    follow: "Síguenos",
    rights: "Todos los derechos reservados.",
  },
  servicesPage: {
    title: "Servicios",
    subtitle:
      "Servicios premium de salón en Metuchen. Balayage, color, blowdry, tratamientos, extensiones y uñas.",
    pricingNote:
      "Los precios iniciales se muestran abajo. El precio final puede variar según largo, densidad y consulta.",
  },
  teamPage: {
    title: "Nuestro Equipo",
    subtitle:
      "Un equipo amable dedicado a hermosos resultados y una experiencia relajante.",
    note: "Los perfiles siguientes son marcadores editables. Reemplázalos con nombres, fotos y biografías confirmadas.",
    cta: "Reservar con Nosotros",
  },
  contactPage: {
    title: "Contáctanos",
    subtitle:
      "Visítanos en Metuchen o escríbenos para tu próxima cita.",
    hours: "Horario",
    hoursNote:
      "Aceptamos visitas y citas durante el horario de atención. Llama con anticipación si deseas reservar tu horario preferido.",
    parking:
      "Suele haber estacionamiento en la calle y cerca de Central Ave. Llama si necesitas orientación.",
    mapTitle: "Encuéntranos en el mapa",
  },
  reviewsPage: {
    title: "Reseñas",
    subtitle:
      "4.4 estrellas de 89 reseñas de Google. Confianza por servicio amable, salón limpio y peinado de calidad.",
    highlightsTitle: "Lo que aprecian los clientes",
    highlights: [
      "Personal amable y acogedor",
      "Ambiente limpio y relajante",
      "Buenos comentarios de balayage y color",
      "Blowouts y peinados pulidos",
      "Transformaciones de cabello cuidadas",
    ],
  },
  preloader: {
    label: "Preparando tu experiencia",
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
