export type ServiceItem = {
  id: string;
  category: "color" | "styling" | "treatments" | "nails";
  featured?: boolean;
  image: string;
  imageAlt: { en: string; es: string };
  name: { en: string; es: string };
  description: { en: string; es: string };
  priceLabel: { en: string; es: string };
};

export const services: ServiceItem[] = [
  {
    id: "balayage",
    category: "color",
    featured: true,
    image: "/images/services/balayage.jpg",
    imageAlt: {
      en: "Balayage hair color at Moon Hair Studio",
      es: "Balayage en Moon Hair Studio",
    },
    name: { en: "Balayage", es: "Balayage" },
    description: {
      en: "Hand painted dimension for a soft, sun kissed finish tailored to your hair.",
      es: "Dimensión pintada a mano para un acabado suave y luminoso, adaptado a tu cabello.",
    },
    priceLabel: {
      en: "Consultation recommended",
      es: "Consulta recomendada",
    },
  },
  {
    id: "hair-coloring",
    category: "color",
    featured: true,
    image: "/images/services/hair-coloring.jpg",
    imageAlt: {
      en: "Professional hair coloring service",
      es: "Servicio profesional de coloración",
    },
    name: { en: "Hair Coloring", es: "Coloración" },
    description: {
      en: "Full color and refresh work designed for polished, healthy looking results.",
      es: "Color completo y retoques pensados para resultados pulidos y con aspecto saludable.",
    },
    priceLabel: {
      en: "Call for pricing",
      es: "Llamar para precios",
    },
  },
  {
    id: "hair-highlighting",
    category: "color",
    featured: true,
    image: "/images/services/hair-highlighting.jpg",
    imageAlt: {
      en: "Hair highlighting service",
      es: "Servicio de mechas / highlighting",
    },
    name: { en: "Hair Highlighting", es: "Mechas / Highlighting" },
    description: {
      en: "Bright, dimensional highlights to lift and frame your look with care.",
      es: "Mechas luminosas y dimensionales para realzar tu look con cuidado.",
    },
    priceLabel: {
      en: "Call for pricing",
      es: "Llamar para precios",
    },
  },
  {
    id: "ombre-hair-style",
    category: "color",
    image: "/images/services/ombre-hair-style.jpg",
    imageAlt: {
      en: "Ombre hair style color result",
      es: "Estilo ombré de color",
    },
    name: { en: "Ombre Hair Style", es: "Estilo Ombré" },
    description: {
      en: "A soft blended fade from deeper roots to lighter ends for a modern finish.",
      es: "Un degradado suave de raíces más profundas a puntas más claras para un acabado moderno.",
    },
    priceLabel: {
      en: "Consultation recommended",
      es: "Consulta recomendada",
    },
  },
  {
    id: "blowdry",
    category: "styling",
    featured: true,
    image: "/images/services/blowdry.jpg",
    imageAlt: {
      en: "Blow dry styling service",
      es: "Servicio de blow dry",
    },
    name: { en: "Blowdry", es: "Blowdry" },
    description: {
      en: "Smooth, polished blowouts for everyday wear or a special occasion.",
      es: "Blowouts suaves y pulidos para el día a día o una ocasión especial.",
    },
    priceLabel: {
      en: "Call for pricing",
      es: "Llamar para precios",
    },
  },
  {
    id: "hair-styling",
    category: "styling",
    featured: true,
    image: "/images/services/hair-styling.jpg",
    imageAlt: {
      en: "Hair styling at the salon",
      es: "Peinado en el salón",
    },
    name: { en: "Hair Styling", es: "Peinado" },
    description: {
      en: "Custom styling and finishing to complete your look with lasting polish.",
      es: "Peinado y acabado personalizado para completar tu look con un toque duradero.",
    },
    priceLabel: {
      en: "Call for pricing",
      es: "Llamar para precios",
    },
  },
  {
    id: "bangs-trim",
    category: "styling",
    image: "/images/services/bangs-trim.jpg",
    imageAlt: {
      en: "Bangs trim service",
      es: "Recorte de flequillo",
    },
    name: { en: "Bangs Trim", es: "Recorte de Flequillo" },
    description: {
      en: "A precise fringe refresh to keep your bangs shaped and flattering.",
      es: "Un retoque preciso del flequillo para mantenerlo definido y favorecedor.",
    },
    priceLabel: {
      en: "Call for pricing",
      es: "Llamar para precios",
    },
  },
  {
    id: "hair-extensions",
    category: "treatments",
    featured: true,
    image: "/images/services/hair-extensions.jpg",
    imageAlt: {
      en: "Hair extensions service",
      es: "Servicio de extensiones",
    },
    name: { en: "Hair Extensions", es: "Extensiones" },
    description: {
      en: "Added length and fullness applied with care for a natural looking finish.",
      es: "Largo y volumen añadidos con cuidado para un acabado de aspecto natural.",
    },
    priceLabel: {
      en: "Consultation recommended",
      es: "Consulta recomendada",
    },
  },
  {
    id: "keratin-treatments",
    category: "treatments",
    featured: true,
    image: "/images/services/keratin-treatments.jpg",
    imageAlt: {
      en: "Keratin treatment service",
      es: "Tratamiento de keratina",
    },
    name: { en: "Keratin Treatments", es: "Tratamientos de Keratina" },
    description: {
      en: "Smoothing keratin service to improve manageability and a silkier feel.",
      es: "Tratamiento alisador de keratina para mejorar el manejo y una sensación más sedosa.",
    },
    priceLabel: {
      en: "Call for pricing",
      es: "Llamar para precios",
    },
  },
  {
    id: "brazilian-hair-straightening",
    category: "treatments",
    image: "/images/services/brazilian-hair-straightening.jpg",
    imageAlt: {
      en: "Brazilian hair straightening treatment",
      es: "Alisado brasileño",
    },
    name: {
      en: "Brazilian Hair Straightening",
      es: "Alisado Brasileño",
    },
    description: {
      en: "A longer lasting straightening treatment for smoother, more manageable hair.",
      es: "Un alisado de mayor duración para un cabello más suave y manejable.",
    },
    priceLabel: {
      en: "Consultation recommended",
      es: "Consulta recomendada",
    },
  },
  {
    id: "hair-hydration-treatment",
    category: "treatments",
    image: "/images/services/hair-hydration-treatment.jpg",
    imageAlt: {
      en: "Hair hydration treatment",
      es: "Tratamiento de hidratación",
    },
    name: {
      en: "Hair Hydration Treatment",
      es: "Tratamiento de Hidratación",
    },
    description: {
      en: "Deep hydration to leave hair feeling softer, healthier, and more renewed.",
      es: "Hidratación profunda para un cabello más suave, saludable y renovado.",
    },
    priceLabel: {
      en: "Call for pricing",
      es: "Llamar para precios",
    },
  },
  {
    id: "hair-regrowth",
    category: "treatments",
    image: "/images/services/hair-regrowth.jpg",
    imageAlt: {
      en: "Hair regrowth treatment",
      es: "Tratamiento para el crecimiento del cabello",
    },
    name: { en: "Hair Regrowth", es: "Crecimiento Capilar" },
    description: {
      en: "Supportive care focused on scalp and hair vitality for healthier looking growth.",
      es: "Cuidado de apoyo enfocado en la vitalidad del cuero cabelludo y el cabello.",
    },
    priceLabel: {
      en: "Consultation recommended",
      es: "Consulta recomendada",
    },
  },
  {
    id: "manicure",
    category: "nails",
    featured: true,
    image: "/images/services/manicure.jpg",
    imageAlt: {
      en: "Manicure service",
      es: "Servicio de manicura",
    },
    name: { en: "Manicure", es: "Manicura" },
    description: {
      en: "Detailed nail care and polish for a clean, refined finish.",
      es: "Cuidado detallado de uñas y esmaltado para un acabado limpio y refinado.",
    },
    priceLabel: {
      en: "Call for pricing",
      es: "Llamar para precios",
    },
  },
  {
    id: "pedicure",
    category: "nails",
    image: "/images/services/pedicure.jpg",
    imageAlt: {
      en: "Pedicure service",
      es: "Servicio de pedicura",
    },
    name: { en: "Pedicure", es: "Pedicura" },
    description: {
      en: "Relaxing pedicure care for soft, polished results from tip to toe.",
      es: "Pedicura relajante para resultados suaves y pulidos de pies a cabeza.",
    },
    priceLabel: {
      en: "Call for pricing",
      es: "Llamar para precios",
    },
  },
];

export const serviceCategories = [
  { id: "all", en: "All", es: "Todos" },
  { id: "color", en: "Color", es: "Color" },
  { id: "styling", en: "Styling", es: "Peinado" },
  { id: "treatments", en: "Treatments", es: "Tratamientos" },
  { id: "nails", en: "Nails", es: "Uñas" },
] as const;
