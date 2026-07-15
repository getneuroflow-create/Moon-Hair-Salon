import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const titleDefault = "Moon Hair Studio | Hair Salon in Metuchen, NJ";
const descriptionDefault =
  "Moon Hair Studio is a welcoming hair salon in Metuchen, NJ, known for friendly service, a clean atmosphere, and quality styling and color results.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: titleDefault,
    template: "%s | Moon Hair Studio",
  },
  description: descriptionDefault,
  keywords: [
    "Hair salon Metuchen NJ",
    "Moon Hair Studio Metuchen",
    "balayage Metuchen NJ",
    "blowout salon Metuchen",
    "hair styling Metuchen",
    "local hair salon near Edison NJ",
    "Middlesex County hair salon",
    "eyelash salon Metuchen",
  ],
  authors: [{ name: "Moon Hair Studio" }],
  creator: "Moon Hair Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_US"],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: titleDefault,
    description: descriptionDefault,
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Moon Hair Studio logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: descriptionDefault,
    images: ["/brand/logo.png"],
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: siteConfig.url,
      es: siteConfig.url,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function pageMetadata(
  title: string,
  description: string,
  path = "",
): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Moon Hair Studio`,
      description,
      url,
    },
    twitter: {
      title: `${title} | Moon Hair Studio`,
      description,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: siteConfig.name,
    image: `${siteConfig.url}/brand/logo.png`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    priceRange: "$$",
    areaServed: [
      "Metuchen, NJ",
      "Edison, NJ",
      "Middlesex County, NJ",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };
}
