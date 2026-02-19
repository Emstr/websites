import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Notting Hill Nail & Beauty Bar | Nail Salon in Notting Hill, London W11",
    template: "%s | Notting Hill Nail & Beauty Bar",
  },
  description:
    "Premium nail salon in Notting Hill, London W11. VTCT qualified technicians offering gel manicures, pedicures, nail art, acrylic extensions, BIAB and luxury spa treatments. Hygiene certified, vegan-friendly products.",
  keywords: [
    "nail salon Notting Hill",
    "gel manicure W11",
    "nail art London",
    "acrylic nails Notting Hill",
    "BIAB nails London",
    "pedicure Notting Hill",
    "beauty bar W11",
    "nail extensions London",
    "vegan nail salon",
    "luxury nail salon London",
    "nail technician Notting Hill",
    "spa treatments W11",
  ],
  authors: [{ name: "Notting Hill Nail & Beauty Bar" }],
  creator: "Notting Hill Nail & Beauty Bar",
  publisher: "Notting Hill Nail & Beauty Bar",
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
    url: "https://nottinghillnails.co.uk",
    siteName: "Notting Hill Nail & Beauty Bar",
    title: "Notting Hill Nail & Beauty Bar | Premium Nail Salon in London W11",
    description:
      "VTCT qualified nail technicians offering gel manicures, nail art, acrylic extensions and luxury spa treatments in Notting Hill.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notting Hill Nail & Beauty Bar - Premium Nail Salon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notting Hill Nail & Beauty Bar | Nail Salon W11",
    description:
      "Premium nail salon in Notting Hill. Gel manicures, nail art, acrylics, BIAB and spa treatments.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://nottinghillnails.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Notting Hill, London",
    "geo.position": "51.5115;-0.2058",
    ICBM: "51.5115, -0.2058",
  },
};

const beautySalonSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": "https://nottinghillnails.co.uk/#organization",
  name: "Notting Hill Nail & Beauty Bar",
  description:
    "Premium nail salon in Notting Hill offering gel manicures, pedicures, nail art, acrylic extensions, BIAB and luxury spa treatments. VTCT qualified, hygiene certified.",
  url: "https://nottinghillnails.co.uk",
  telephone: "+442079463678",
  email: "bookings@nottinghillnails.co.uk",
  foundingDate: "2019",
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
      name: "Royal Borough of Kensington and Chelsea",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nail & Beauty Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gel Manicure",
          description: "Long-lasting gel polish manicure with chip-free finish for up to 3 weeks.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gel Pedicure",
          description: "Luxurious gel pedicure including foot soak, exfoliation and gel polish.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nail Art",
          description: "Bespoke hand-painted nail art designs from delicate florals to bold statement nails.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Acrylic Extensions",
          description: "Professional acrylic nail extensions in any length and shape.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BIAB (Builder in a Bottle)",
          description: "Strengthening BIAB overlay for natural nail growth and protection.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury Spa Treatments",
          description: "Pampering spa treatments including hand and foot massages and paraffin dips.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Notting Hill Nail & Beauty Bar",
    address: {
      "@type": "PostalAddress",
      streetAddress: "18 Pembridge Road",
      addressLocality: "Notting Hill",
      addressRegion: "London",
      postalCode: "W11 3HL",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5115,
      longitude: -0.2058,
    },
    telephone: "+442079463678",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://nottinghillnails.co.uk/#localbusiness",
  name: "Notting Hill Nail & Beauty Bar",
  image: "https://nottinghillnails.co.uk/logo.png",
  telephone: "+442079463678",
  email: "bookings@nottinghillnails.co.uk",
  url: "https://nottinghillnails.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Pembridge Road",
    addressLocality: "Notting Hill",
    addressRegion: "London",
    postalCode: "W11 3HL",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5115,
    longitude: -0.2058,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
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
      opens: "11:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nottinghillnails.co.uk/#website",
  url: "https://nottinghillnails.co.uk",
  name: "Notting Hill Nail & Beauty Bar",
  description: "Premium nail salon and beauty bar in Notting Hill, London",
  publisher: {
    "@id": "https://nottinghillnails.co.uk/#organization",
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
        id="beauty-salon-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(beautySalonSchema),
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
