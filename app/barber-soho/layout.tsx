import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Soho Barber Co | Master Barbers in Soho, London W1",
    template: "%s | Soho Barber Co",
  },
  description:
    "Premium barbershop in the heart of Soho, London. Classic cuts, hot towel shaves, beard trims and styling by master barbers. Walk-ins welcome. Est. 2015.",
  keywords: [
    "barber soho",
    "barbershop soho",
    "mens haircut soho",
    "hot towel shave london",
    "beard trim soho",
    "barber near me",
    "best barber soho",
    "mens grooming soho",
    "classic haircut london",
    "barber W1",
    "soho barber co",
    "wedding grooming london",
  ],
  authors: [{ name: "Soho Barber Co" }],
  creator: "Soho Barber Co",
  publisher: "Soho Barber Co",
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
    url: "https://sohobarber.co.uk",
    siteName: "Soho Barber Co",
    title: "Soho Barber Co | Master Barbers in Soho, London",
    description:
      "Premium barbershop in Soho. Classic cuts, hot towel shaves, beard trims and styling by master barbers. Walk-ins welcome.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soho Barber Co - Master Barbers in Soho, London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soho Barber Co | Master Barbers in Soho",
    description:
      "Premium barbershop in Soho, London. Classic cuts, hot towel shaves, beard trims and styling.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://sohobarber.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Soho, London",
    "geo.position": "51.5133;-0.1365",
    ICBM: "51.5133, -0.1365",
  },
};

const barberShopSchema = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  "@id": "https://sohobarber.co.uk/#organization",
  name: "Soho Barber Co",
  description:
    "Premium barbershop in the heart of Soho, London. Classic cuts, hot towel shaves, beard trims and styling by master barbers.",
  url: "https://sohobarber.co.uk",
  telephone: "+442079467890",
  email: "hello@sohobarber.co.uk",
  foundingDate: "2015",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card, Apple Pay",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "Soho",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Barber Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Classic Cuts",
          description: "Precision haircuts tailored to your style by experienced master barbers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Beard Trims & Shaping",
          description: "Expert beard grooming, trimming and shaping for a sharp, defined look.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hot Towel Shaves",
          description: "Traditional hot towel wet shaves using premium products and cut-throat razors.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hair Styling",
          description: "Modern styling and finishing for any occasion, from casual to formal.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Colour & Grey Blending",
          description: "Subtle colour work and grey blending to refresh your look naturally.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding & Event Grooming",
          description: "Complete grooming packages for grooms and groomsmen on the big day.",
        },
      },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "42 Berwick Street",
    addressLocality: "Soho",
    addressRegion: "London",
    postalCode: "W1F 8SE",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5133,
    longitude: -0.1365,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sohobarber.co.uk/#localbusiness",
  name: "Soho Barber Co",
  image: "https://sohobarber.co.uk/logo.png",
  telephone: "+442079467890",
  email: "hello@sohobarber.co.uk",
  url: "https://sohobarber.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "42 Berwick Street",
    addressLocality: "Soho",
    addressRegion: "London",
    postalCode: "W1F 8SE",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5133,
    longitude: -0.1365,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sohobarber.co.uk/#website",
  url: "https://sohobarber.co.uk",
  name: "Soho Barber Co",
  description: "Premium barbershop in the heart of Soho, London",
  publisher: {
    "@id": "https://sohobarber.co.uk/#organization",
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
        id="barber-shop-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(barberShopSchema),
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
