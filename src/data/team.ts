export type TeamMember = {
  id: string;
  placeholder: boolean;
  name: { en: string; es: string };
  role: { en: string; es: string };
  specialty: { en: string; es: string };
  bio: { en: string; es: string };
  image: string;
};

/**
 * Team roster placeholders. replace with real staff details when available.
 * Do not treat placeholder names as confirmed public roster.
 */
export const teamMembers: TeamMember[] = [
  {
    id: "stylist-1",
    placeholder: true,
    name: {
      en: "Lead Stylist",
      es: "Estilista Principal",
    },
    role: {
      en: "Color & Cut Specialist",
      es: "Especialista en Color y Corte",
    },
    specialty: {
      en: "Balayage & dimensional color",
      es: "Balayage y color dimensional",
    },
    bio: {
      en: "Placeholder profile. add name, photo, and bio when ready. Known for thoughtful color and a welcoming chair side experience.",
      es: "Perfil editable. agrega nombre, foto y biografía cuando esté listo. Enfoque en color cuidadoso y una experiencia cálida.",
    },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: "stylist-2",
    placeholder: true,
    name: {
      en: "Senior Stylist",
      es: "Estilista Senior",
    },
    role: {
      en: "Styling & Blowouts",
      es: "Peinado y Blowouts",
    },
    specialty: {
      en: "Finish work & event styling",
      es: "Acabados y peinados para eventos",
    },
    bio: {
      en: "Placeholder profile. swap in real details anytime. Focused on polished blowouts and wearable everyday style.",
      es: "Perfil editable. reemplaza con datos reales cuando quieras. Enfoque en blowouts pulidos y estilo diario.",
    },
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: "stylist-3",
    placeholder: true,
    name: {
      en: "Beauty Specialist",
      es: "Especialista en Belleza",
    },
    role: {
      en: "Nail Care & Finishing Touches",
      es: "Cuidado de Uñas y Toques Finales",
    },
    specialty: {
      en: "Manicure & pedicure",
      es: "Manicura y pedicura",
    },
    bio: {
      en: "Placeholder profile. update with confirmed specialist info. Soft, refined enhancement for a polished finish.",
      es: "Perfil editable. actualiza con información confirmada. Realce suave y refinado para un acabado pulido.",
    },
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=90",
  },
];
