import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Shoreditch Fitness Studio | Personal Training in Shoreditch, E1",
    template: "%s | Shoreditch Fitness Studio",
  },
  description:
    "REPS registered personal trainers in Shoreditch, East London. 1-to-1 personal training, group classes, nutrition coaching and body transformation programmes. Results-driven fitness in E1.",
  keywords: [
    "personal trainer Shoreditch",
    "personal training East London",
    "gym Shoreditch",
    "fitness studio E1",
    "group fitness classes Shoreditch",
    "nutrition coaching London",
    "body transformation",
    "online personal training",
    "corporate fitness London",
    "REPS registered trainer",
    "weight loss Shoreditch",
    "strength training East London",
  ],
  authors: [{ name: "Shoreditch Fitness Studio" }],
  creator: "Shoreditch Fitness Studio",
  publisher: "Shoreditch Fitness Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://shoreditchfitness.co.uk",
    siteName: "Shoreditch Fitness Studio",
    title: "Shoreditch Fitness Studio | Personal Training in Shoreditch, E1",
    description:
      "REPS registered personal trainers delivering results-driven fitness in Shoreditch, East London. 1-to-1 training, group classes and nutrition coaching.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shoreditch Fitness Studio - Personal Training in East London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoreditch Fitness Studio | Personal Training in Shoreditch",
    description:
      "REPS registered personal trainers in Shoreditch, E1. 1-to-1 training, group classes and nutrition coaching.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://shoreditchfitness.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Shoreditch, London",
    "geo.position": "51.5265;-0.0780",
    ICBM: "51.5265, -0.0780",
  },
};

const healthClubSchema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  "@id": "https://shoreditchfitness.co.uk/#organization",
  name: "Shoreditch Fitness Studio",
  description:
    "REPS registered personal training studio in Shoreditch offering 1-to-1 personal training, group fitness classes, nutrition coaching, online training and body transformation programmes.",
  url: "https://shoreditchfitness.co.uk",
  telephone: "+442079466789",
  email: "info@shoreditchfitness.co.uk",
  foundingDate: "2018",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "East London",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fitness Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "1-to-1 Personal Training",
          description: "Bespoke personal training sessions tailored to your goals, fitness level and schedule.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Group Classes",
          description: "High-energy small group fitness classes including HIIT, strength, boxing and yoga.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nutrition Coaching",
          description: "Evidence-based nutrition plans and ongoing coaching to complement your training.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Online Training",
          description: "Flexible online personal training programmes with video guidance and weekly check-ins.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Body Transformation",
          description: "Intensive 8 and 12-week body transformation programmes combining training, nutrition and accountability.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Fitness",
          description: "On-site and studio-based fitness programmes for businesses and their teams.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Shoreditch Fitness Studio",
    address: {
      "@type": "PostalAddress",
      streetAddress: "18 Rivington Street",
      addressLocality: "Shoreditch",
      addressRegion: "London",
      postalCode: "EC2A 3DU",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5265,
      longitude: -0.078,
    },
    telephone: "+442079466789",
  },
  sameAs: [
    "https://www.instagram.com/shoreditchfitnessstudio",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://shoreditchfitness.co.uk/#localbusiness",
  name: "Shoreditch Fitness Studio",
  image: "https://shoreditchfitness.co.uk/logo.png",
  telephone: "+442079466789",
  email: "info@shoreditchfitness.co.uk",
  url: "https://shoreditchfitness.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Rivington Street",
    addressLocality: "Shoreditch",
    addressRegion: "London",
    postalCode: "EC2A 3DU",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5265,
    longitude: -0.078,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://shoreditchfitness.co.uk/#website",
  url: "https://shoreditchfitness.co.uk",
  name: "Shoreditch Fitness Studio",
  description: "REPS registered personal training studio in Shoreditch, East London",
  publisher: {
    "@id": "https://shoreditchfitness.co.uk/#organization",
  },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        id="health-club-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(healthClubSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
