import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Independent Advice Bureau | Free Financial Consultation in Manchester",
    template: "%s | The Independent Advice Bureau",
  },
  description:
    "Independent financial advice in South Manchester with a FREE 45-minute initial consultation. Expert guidance on pensions, investments, protection and retirement planning. FCA regulated.",
  keywords: [
    "independent financial adviser Manchester",
    "free financial consultation Manchester",
    "financial adviser South Manchester",
    "pension advice Manchester",
    "investment advice Manchester",
    "retirement planning Manchester",
    "financial planning Burnage",
    "independent financial advice",
    "IFA Manchester",
    "free financial advice consultation",
    "protection advice Manchester",
    "financial planner Manchester",
  ],
  authors: [{ name: "The Independent Advice Bureau Limited" }],
  creator: "The Independent Advice Bureau Limited",
  publisher: "The Independent Advice Bureau Limited",
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
    url: "https://iabltd.co.uk",
    siteName: "The Independent Advice Bureau",
    title: "The Independent Advice Bureau | Free 45-Minute Financial Consultation in Manchester",
    description:
      "Independent financial advisers in South Manchester offering a FREE 45-minute initial consultation. Expert advice on pensions, investments, protection and retirement planning.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Independent Advice Bureau - Free Financial Consultation in Manchester",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Independent Advice Bureau | Free Financial Consultation Manchester",
    description:
      "Independent financial advice in South Manchester with a FREE 45-minute initial consultation. FCA regulated.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://iabltd.co.uk",
  },
  other: {
    "geo.region": "GB-MAN",
    "geo.placename": "Manchester",
    "geo.position": "53.4350;-2.1938",
    ICBM: "53.4350, -2.1938",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://iabltd.co.uk/#organization",
  name: "The Independent Advice Bureau Limited",
  alternateName: "IAB",
  description:
    "Independent financial advice in South Manchester with a free 45-minute initial consultation. Expert guidance on financial planning, pensions, investments, protection and retirement planning.",
  url: "https://iabltd.co.uk",
  telephone: "+441612489746",
  email: "info@iabltd.co.uk",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Manchester",
    },
    {
      "@type": "AdministrativeArea",
      name: "Greater Manchester",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Financial Planning",
          description: "Comprehensive financial planning tailored to your goals and circumstances.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Advice",
          description: "Expert pension advice including workplace pensions, SIPPs and retirement income strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Advice",
          description: "Independent investment advice from across the whole of the market.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protection",
          description: "Life assurance, critical illness cover and income protection planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Planning",
          description: "Comprehensive retirement planning and income strategies.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "The Independent Advice Bureau",
    address: {
      "@type": "PostalAddress",
      streetAddress: "109 Burnage Lane",
      addressLocality: "Manchester",
      addressRegion: "Greater Manchester",
      postalCode: "M19 2WH",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.435,
      longitude: -2.1938,
    },
    telephone: "+441612489746",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://iabltd.co.uk/#localbusiness",
  name: "The Independent Advice Bureau Limited",
  image: "https://iabltd.co.uk/logo.png",
  telephone: "+441612489746",
  email: "info@iabltd.co.uk",
  url: "https://iabltd.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "109 Burnage Lane",
    addressLocality: "Manchester",
    addressRegion: "Greater Manchester",
    postalCode: "M19 2WH",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.435,
    longitude: -2.1938,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://iabltd.co.uk/#website",
  url: "https://iabltd.co.uk",
  name: "The Independent Advice Bureau",
  description: "Independent financial advice in South Manchester with a free 45-minute initial consultation",
  publisher: {
    "@id": "https://iabltd.co.uk/#organization",
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
        id="financial-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(financialServiceSchema),
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
