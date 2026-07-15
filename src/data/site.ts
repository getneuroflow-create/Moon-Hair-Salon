export const siteConfig = {
  name: "Moon Hair Studio",
  legalName: "Moon Hair Studio",
  tagline: {
    en: "Beautiful hair in a welcoming space.",
    es: "Cabello hermoso en un espacio acogedor.",
  },
  phone: "+1 732 442 0082",
  phoneHref: "tel:+17324420082",
  address: {
    street: "257 Central Ave",
    city: "Metuchen",
    state: "NJ",
    zip: "08840",
    country: "United States",
    full: "257 Central Ave, Metuchen, NJ 08840, United States",
  },
  geo: {
    lat: 40.5465036,
    lng: -74.3706874,
  },
  social: {
    instagram:
      "https://www.instagram.com/moonhairstudio_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    facebook: "https://www.facebook.com/MoonHairStudio.nj/",
  },
  maps: {
    listing:
      "https://www.google.com/maps/place/Moon+Hair+Studio/@40.5465036,-74.3706874,17z/data=!4m6!3m5!1s0x89c3ca78303565ef:0xf548112cceded1f7!8m2!3d40.5465036!4d-74.3706874!16s%2Fg%2F11dxkq7v9m",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.7775458494552!2d-74.3706874!3d40.5465036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ca78303565ef%3A0xf548112cceded1f7!2sMoon%20Hair%20Studio!5e0!3m2!1sen!2s!4v1784072173532!5m2!1sen!2s",
    review:
      "https://www.google.com/maps/place/Moon+Hair+Studio/@40.5464631,-74.3709065,16z/data=!4m9!3m8!1s0x89c3ca78303565ef:0xf548112cceded1f7!8m2!3d40.5465036!4d-74.3706874!9m1!1b1!10e5!16s%2Fg%2F11dxkq7v9m?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D",
  },
  rating: {
    value: 4.4,
    count: 89,
  },
  hours: {
    en: [
      { day: "Monday", time: "9:00 AM to 7:00 PM" },
      { day: "Tuesday", time: "10:00 AM to 7:00 PM" },
      { day: "Wednesday", time: "10:00 AM to 7:00 PM" },
      { day: "Thursday", time: "10:00 AM to 7:00 PM" },
      { day: "Friday", time: "9:00 AM to 7:00 PM" },
      { day: "Saturday", time: "9:00 AM to 7:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    es: [
      { day: "Lunes", time: "9:00 AM a 7:00 PM" },
      { day: "Martes", time: "10:00 AM a 7:00 PM" },
      { day: "Miércoles", time: "10:00 AM a 7:00 PM" },
      { day: "Jueves", time: "10:00 AM a 7:00 PM" },
      { day: "Viernes", time: "9:00 AM a 7:00 PM" },
      { day: "Sábado", time: "9:00 AM a 7:00 PM" },
      { day: "Domingo", time: "Cerrado" },
    ],
  },
  /** Editable. add email when available */
  email: null as string | null,
  media: {
    logo: "/brand/logo.png",
    logoDark: "/brand/logo-dark.png",
    introVideo: "/media/intro.mp4",
  },
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://moonhairstudio.com",
} as const;

export type Locale = "en" | "es";
