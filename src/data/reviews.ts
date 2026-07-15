export type ReviewItem = {
  id: string;
  rating: number;
  author: string;
  theme: { en: string; es: string };
  /** Authentic Google reviews shared by the client for site use */
  quote: { en: string; es: string };
};

export const reviews: ReviewItem[] = [
  {
    id: "r1",
    rating: 5,
    author: "Altagracia R. Diaz Hernandez",
    theme: { en: "Blow dry · Metuchen", es: "Blow dry · Metuchen" },
    quote: {
      en: "I had a nice experience at Moon Hair Studio. The staff was friendly, the salon felt clean and welcoming, and my blow dry came out really good. Street parking is available, although it can be a little difficult to find. Overall, I was happy with my service and would come back.",
      es: "Tuve una linda experiencia en Moon Hair Studio. El personal fue amable, el salón se sintió limpio y acogedor, y mi blow dry quedó muy bien. Hay estacionamiento en la calle, aunque a veces es un poco difícil de encontrar. En general, estoy contenta con el servicio y regresaría.",
    },
  },
  {
    id: "r2",
    rating: 5,
    author: "Creativelyan",
    theme: { en: "Balayage · Santy & Marie", es: "Balayage · Santy y Marie" },
    quote: {
      en: "Santy and Marie are amazing! They will transform your hair even when you think it’s impossible. They use great products, take their time and will only do what your hair can take. The ambiance is great! I got a beautiful balayage!!",
      es: "¡Santy y Marie son increíbles! Transforman tu cabello incluso cuando crees que es imposible. Usan excelentes productos, se toman su tiempo y solo hacen lo que tu cabello puede tolerar. ¡El ambiente es genial! ¡Me hicieron un balayage hermoso!",
    },
  },
  {
    id: "r3",
    rating: 5,
    author: "Brenda Gonzalez",
    theme: { en: "Color & care · Santi", es: "Color y cuidado · Santi" },
    quote: {
      en: "Santi is the best always gives great service and amazing work. She loves all her customers and treats them with care. I always come to her to get my hair done and it always comes out gorgeous.",
      es: "Santi es la mejor: siempre da un gran servicio y un trabajo increíble. Ama a sus clientas y las trata con cuidado. Siempre vengo con ella para hacerme el cabello y siempre queda hermoso.",
    },
  },
  {
    id: "r4",
    rating: 5,
    author: "Maria Sciascia",
    theme: { en: "Balayage · Pro stylist", es: "Balayage · Estilista pro" },
    quote: {
      en: "Santy is an amazing and so professional hair colorist. I had balayage colored with her and I am super happy. I drove from a long distance to this location. I’m a hairstylist myself. the work is done well.",
      es: "Santy es una colorista increíble y muy profesional. Me hice un balayage con ella y estoy súper feliz. Maneé desde lejos para llegar. Yo misma soy estilista. el trabajo está muy bien hecho.",
    },
  },
  {
    id: "r5",
    rating: 5,
    author: "Irlanda Stefany",
    theme: { en: "Color correction", es: "Corrección de color" },
    quote: {
      en: "Santy is the best! She did color correction plus balayage on my daughter’s hair and it came out beautiful. She truly is an artist! The salon’s friendly and welcoming atmosphere made my daughter and I feel comfortable throughout the entire visit.",
      es: "¡Santy es la mejor! Hizo corrección de color más balayage en el cabello de mi hija y quedó hermoso. ¡Realmente es una artista! El ambiente amable y acogedor del salón nos hizo sentir cómodas durante toda la visita.",
    },
  },
  {
    id: "r6",
    rating: 5,
    author: "Yessenia Lausell",
    theme: { en: "Color & cut", es: "Color y corte" },
    quote: {
      en: "FINALLY! I found a person that can give me the exact color I wanted. I love my color and cut. highly recommend this salon.",
      es: "¡POR FIN! Encontré a alguien que puede darme exactamente el color que quería. Me encanta mi color y corte. recomiendo mucho este salón.",
    },
  },
  {
    id: "r7",
    rating: 5,
    author: "Katherine Algarín Morales",
    theme: { en: "Loyal client · 12 years", es: "Clienta fiel · 12 años" },
    quote: {
      en: "Moon Hair Studio the BEST salon. The staff is amazing. they take their time to learn what the customer wants. Santi has cared for my hair for 12 years. I highly recommend her. She is not only an amazing hairdresser, she is an amazing human being!",
      es: "Moon Hair Studio es el MEJOR salón. El personal es increíble. se toman el tiempo para entender lo que la clienta quiere. Santi ha cuidado mi cabello por 12 años. La recomiendo muchísimo. ¡No solo es una excelente peluquera, es una persona maravillosa!",
    },
  },
  {
    id: "r8",
    rating: 5,
    author: "Ismelda Maria",
    theme: { en: "Full salon experience", es: "Experiencia completa" },
    quote: {
      en: "Moon Hair Studio is Amazing!! I went in, did my hair, nails, facial and I fell in love with the people who work there. They are all very professional and the vibes in the salon are so nice. Loved it. definitely one of the best salons in the area.",
      es: "¡Moon Hair Studio es increíble! Fui, me hice el cabello, las uñas y un facial, y me enamoré del equipo. Son muy profesionales y la vibra del salón es hermosa. Me encantó. definitivamente uno de los mejores salones de la zona.",
    },
  },
  {
    id: "r9",
    rating: 5,
    author: "Belen",
    theme: { en: "Hair health · Santi", es: "Salud del cabello · Santi" },
    quote: {
      en: "Great job. Santi is great and really cares about her clients’ hair health. She is truly a master haircolorist. Thank you!",
      es: "Excelente trabajo. Santi es genial y realmente cuida la salud del cabello de sus clientas. Es verdaderamente una maestra del color. ¡Gracias!",
    },
  },
  {
    id: "r10",
    rating: 5,
    author: "Taisha Caraballo",
    theme: { en: "Kind staff", es: "Personal amable" },
    quote: {
      en: "I have been coming to this salon for a couple of months now. I must say Santi is great. she knows exactly what she is doing. Super sweet and kind staff. I definitely recommend hands down.",
      es: "Llevo unos meses viniendo a este salón. Santi es excelente. sabe exactamente lo que hace. El personal es súper dulce y amable. La recomiendo sin duda.",
    },
  },
  {
    id: "r11",
    rating: 5,
    author: "Nicol Vasquez",
    theme: { en: "Healthy color", es: "Color saludable" },
    quote: {
      en: "I love Santy! She did an amazing job on my hair. I came in a little scared because of the color I wanted, but she reassured me that she would make it come out beautiful and healthy. and that she did! Definitely would recommend this salon.",
      es: "¡Amo a Santy! Hizo un trabajo increíble en mi cabello. Llegué un poco nerviosa por el color que quería, pero me tranquilizó diciendo que quedaría hermoso y saludable. ¡y así fue! Definitivamente recomiendo este salón.",
    },
  },
  {
    id: "r12",
    rating: 5,
    author: "Imad Rajab",
    theme: { en: "Nails · Metuchen", es: "Uñas · Metuchen" },
    quote: {
      en: "The atmosphere is so refreshing. everybody is so attentive. The perfect spot and it has parking, making everything convenient. I got my nails done by Dania. she is so sweet and detail oriented. I can’t tell you how long I’ve been looking for nail inspo that actually looks like the photo. I will be coming back for sure!",
      es: "El ambiente es tan refrescante. todos son muy atentos. El lugar perfecto y tiene estacionamiento, lo que lo hace muy conveniente. Me hice las uñas con Dania. es muy dulce y detallada. No te imaginas cuánto tiempo busqué una inspo de uñas que realmente se viera como la foto. ¡Sin duda regresaré!",
    },
  },
  {
    id: "r13",
    rating: 5,
    author: "Tatiana Borja",
    theme: { en: "Metuchen location", es: "Ubicación Metuchen" },
    quote: {
      en: "Tried their new location in Metuchen. Loved their service. Dania did an amazing job with my hard gel manicure. She is very detailed and makes my nails look so natural. Loved the pink chrome. The place was very spacious and clean.",
      es: "Probé su nueva ubicación en Metuchen. Me encantó el servicio. Dania hizo un trabajo increíble con mi manicura de gel duro. Es muy detallada y deja las uñas con un look natural. Me encantó el pink chrome. El lugar es amplio y limpio.",
    },
  },
  {
    id: "r14",
    rating: 5,
    author: "Ana Montalvo",
    theme: { en: "First visit", es: "Primera visita" },
    quote: {
      en: "A wonderful experience! Starting with Santy and her blessed hands, her entire team was fabulous. secretaries, assistants, everyone. excellent service. It was my first time, and I assure you it won’t be the last. Very grateful and pleased.",
      es: "¡Una experiencia maravillosa! Empezando por Santy y sus manos bendecidas, todo su equipo fue fabuloso. secretarias, asistentes, todos. excelente servicio. Fue mi primera vez y te aseguro que no será la última. Muy agradecida y contenta.",
    },
  },
  {
    id: "r15",
    rating: 5,
    author: "Isabel Liberato",
    theme: { en: "Curly hair specialist", es: "Especialista en rizos" },
    quote: {
      en: "It took me a while to find a place like this! Been to so many salons in the area. Moon is by far the BEST. Santy did such an amazing job on my long frizzy curly hair. Will definitely be coming again.",
      es: "¡Me tomó tiempo encontrar un lugar así! He ido a tantos salones en la zona. Moon es, de lejos, el MEJOR. Santy hizo un trabajo increíble en mi cabello largo, encrespado y rizado. Definitivamente regresaré.",
    },
  },
  {
    id: "r16",
    rating: 5,
    author: "Alys Onorato",
    theme: { en: "Loyal for over 10 years", es: "Fiel por mas de 10 años" },
    quote: {
      en: "If you are looking for a hairstylist that will bring the best out of your hair, this is the place to go! Santi has cared for my hair for over 10 years and I would not let anyone else touch it.",
      es: "Si buscas una estilista que saque lo mejor de tu cabello, ¡este es el lugar! Santi ha cuidado mi cabello por más de 10 años y no dejaría que nadie más lo toque.",
    },
  },
];
