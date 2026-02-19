import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Wandsworth Pest Solutions | Professional Pest Control in Wandsworth, SW18",
    template: "%s | Wandsworth Pest Solutions",
  },
  description:
    "Professional pest control services in Wandsworth and South West London. BPCA member, RSPH qualified. Rodent control, wasp nests, bed bugs, cockroaches. Discreet, same-day service.",
  keywords: [
    "pest control Wandsworth",
    "rodent control SW18",
    "wasp nest removal Wandsworth",
    "bed bug treatment London",
    "cockroach control",
    "fox deterrent",
    "commercial pest management",
    "BPCA pest control",
    "pest control South West London",
    "rat control Wandsworth",
    "mouse control London",
    "pest exterminator Wandsworth",
  ],
  authors: [{ name: "Wandsworth Pest Solutions" }],
  creator: "Wandsworth Pest Solutions",
  publisher: "Wandsworth Pest Solutions",
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
    url: "https://wandsworthpest.co.uk",
    siteName: "Wandsworth Pest Solutions",
    title: "Wandsworth Pest Solutions | Professional Pest Control",
    description:
      "BPCA member pest control in Wandsworth. Same-day service for rodents, wasps, bed bugs, cockroaches. Discreet and effective.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wandsworth Pest Solutions - Professional Pest Control",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wandsworth Pest Solutions | Pest Control SW18",
    description:
      "Professional pest control in Wandsworth and South West London. BPCA member. Same-day service available.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://wandsworthpest.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Wandsworth, London",
    "geo.position": "51.4550;-0.1910",
    ICBM: "51.4550, -0.1910",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://wandsworthpest.co.uk/#organization",
  name: "Wandsworth Pest Solutions",
  description:
    "Professional pest control services in Wandsworth and South West London. BPCA member, RSPH qualified technicians providing discreet, effective pest management.",
  url: "https://wandsworthpest.co.uk",
  telephone: "+442079468123",
  email: "info@wandsworthpest.co.uk",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Bank Transfer, Credit Card, Debit Card",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "South West London",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pest Control Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rodent Control",
          description: "Professional rat and mouse control using safe, effective methods.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wasp Nest Removal",
          description: "Safe wasp nest removal by trained, insured technicians.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bed Bug Treatment",
          description: "Comprehensive bed bug eradication using heat and chemical treatments.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cockroach Control",
          description: "Thorough cockroach treatment and prevention for homes and businesses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fox Deterrent",
          description: "Humane fox deterrent solutions for gardens and commercial properties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Pest Management",
          description: "Ongoing pest management contracts for restaurants, offices, and retail premises.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Wandsworth Pest Solutions",
    address: {
      "@type": "PostalAddress",
      streetAddress: "45 Garratt Lane",
      addressLocality: "Wandsworth",
      addressRegion: "London",
      postalCode: "SW18 4DQ",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.455,
      longitude: -0.191,
    },
    telephone: "+442079468123",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://wandsworthpest.co.uk/#website",
  url: "https://wandsworthpest.co.uk",
  name: "Wandsworth Pest Solutions",
  description: "Professional pest control services in Wandsworth and South West London",
  publisher: {
    "@id": "https://wandsworthpest.co.uk/#organization",
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
