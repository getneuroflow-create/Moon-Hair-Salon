export type FaqItem = {
  id: string;
  question: { en: string; es: string };
  answer: { en: string; es: string };
};

export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: {
      en: "Where is Moon Hair Studio located?",
      es: "¿Dónde está Moon Hair Studio?",
    },
    answer: {
      en: "We’re at 257 Central Ave, Metuchen, NJ 08840. a convenient local salon for Metuchen and nearby Middlesex County clients.",
      es: "Estamos en 257 Central Ave, Metuchen, NJ 08840. un salón local conveniente para Metuchen y municipios cercanos del condado de Middlesex.",
    },
  },
  {
    id: "faq-2",
    question: {
      en: "What services do you offer?",
      es: "¿Qué servicios ofrecen?",
    },
    answer: {
      en: "We offer balayage, hair coloring, highlighting, ombre, blowdry, styling, bangs trim, extensions, keratin, Brazilian straightening, hydration and regrowth treatments, plus manicure and pedicure. Call us to confirm the right service for your goals.",
      es: "Ofrecemos balayage, coloración, mechas, ombré, blowdry, peinado, recorte de flequillo, extensiones, keratina, alisado brasileño, hidratación y crecimiento capilar, además de manicura y pedicura. Llámanos para confirmar el servicio ideal.",
    },
  },
  {
    id: "faq-3",
    question: {
      en: "How should I book an appointment?",
      es: "¿Cómo puedo reservar una cita?",
    },
    answer: {
      en: "The easiest way is to call us at +1 732 442 0082. You can also send an inquiry through our contact form and we’ll follow up.",
      es: "La forma más fácil es llamarnos al +1 732 442 0082. También puedes enviar una consulta por el formulario de contacto y te responderemos.",
    },
  },
  {
    id: "faq-4",
    question: {
      en: "Do you speak Spanish?",
      es: "¿Hablan español?",
    },
    answer: {
      en: "Our website is available in English and Spanish so you can explore services comfortably. Call the studio for language preferences during your visit.",
      es: "Nuestro sitio está disponible en inglés y español para que explores los servicios con comodidad. Llama al salón para preferencias de idioma durante tu visita.",
    },
  },
  {
    id: "faq-5",
    question: {
      en: "What are your hours?",
      es: "¿Cuál es el horario?",
    },
    answer: {
      en: "We’re open Monday 9 AM to 7 PM, Tuesday to Thursday 10 AM to 7 PM, Friday to Saturday 9 AM to 7 PM, and closed Sunday. Call +1 732 442 0082 to book your preferred time.",
      es: "Abrimos lunes 9 AM a 7 PM, martes a jueves 10 AM a 7 PM, viernes a sábado 9 AM a 7 PM, y cerramos los domingos. Llama al +1 732 442 0082 para reservar tu horario.",
    },
  },
];
