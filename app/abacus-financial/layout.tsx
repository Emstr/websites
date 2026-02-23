import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Abacus Financial Options | Independent Financial Advisers in Dorset",
    template: "%s | Abacus Financial Options",
  },
  description:
    "Independent financial advice from Abacus Financial Options Ltd, established 2011. Mortgages, investments, pensions, life assurance, income protection and business protection across Dorset, Wiltshire, Somerset, Hampshire, London and Cornwall.",
  keywords: [
    "financial adviser Dorset",
    "independent financial adviser Wimborne",
    "IFA Dorset",
    "mortgage adviser Wimborne",
    "pension advice Dorset",
    "investment advice Dorset",
    "business protection Dorset",
    "income protection",
    "life assurance Dorset",
    "retirement planning Dorset",
    "Abacus Financial Options",
    "financial planning Wimborne",
  ],
  authors: [{ name: "Abacus Financial Options Ltd" }],
  creator: "Abacus Financial Options Ltd",
  publisher: "Abacus Financial Options Ltd",
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
    url: "https://abacusfinancialoptions.co.uk",
    siteName: "Abacus Financial Options",
    title: "Abacus Financial Options | Independent Financial Advisers Since 2011",
    description:
      "Independent financial advice serving 6 counties across the South of England. Mortgages, investments, pensions, life assurance, income protection and business protection from our Dorset office.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abacus Financial Options - Independent Financial Advisers Since 2011",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abacus Financial Options | Independent Financial Advisers",
    description:
      "Independent financial advice across Dorset and the South of England since 2011. FCA Regulated.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://abacusfinancialoptions.co.uk",
  },
  other: {
    "geo.region": "GB-DOR",
    "geo.placename": "Wimborne",
    "geo.position": "50.8006;-1.9862",
    ICBM: "50.8006, -1.9862",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://abacusfinancialoptions.co.uk/#organization",
  name: "Abacus Financial Options Ltd",
  alternateName: "Abacus Financial",
  description:
    "Independent financial advice including mortgages, investments, pensions, life assurance, income protection and business protection. Established 2011, serving Dorset, Wiltshire, Somerset, Hampshire, London and Cornwall.",
  url: "https://abacusfinancialoptions.co.uk",
  telephone: "+441202646960",
  email: "enquiries@abacusfinancialoptions.co.uk",
  foundingDate: "2011",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Dorset",
    },
    {
      "@type": "AdministrativeArea",
      name: "Wiltshire",
    },
    {
      "@type": "AdministrativeArea",
      name: "Somerset",
    },
    {
      "@type": "AdministrativeArea",
      name: "Hampshire",
    },
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "Cornwall",
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
          name: "Mortgage Advice",
          description: "Independent mortgage advice with access to the whole of the market for the best rates.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning",
          description: "Whole-of-market investment advice tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Advice",
          description: "Comprehensive pension planning including workplace pensions, SIPPs, and retirement income strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Life Assurance",
          description: "Life assurance and protection planning to safeguard your family and their future.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Protection",
          description: "Key person cover, shareholder protection and business continuity planning.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Abacus Financial Options Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9 Nimrod Way",
      addressLocality: "Wimborne",
      addressRegion: "Dorset",
      postalCode: "BH21 7WH",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.8006,
      longitude: -1.9862,
    },
    telephone: "+441202646960",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://abacusfinancialoptions.co.uk/#localbusiness",
  name: "Abacus Financial Options",
  image: "https://abacusfinancialoptions.co.uk/logo.png",
  telephone: "+441202646960",
  email: "enquiries@abacusfinancialoptions.co.uk",
  url: "https://abacusfinancialoptions.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9 Nimrod Way",
    addressLocality: "Wimborne",
    addressRegion: "Dorset",
    postalCode: "BH21 7WH",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.8006,
    longitude: -1.9862,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
  priceRange: "$$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://abacusfinancialoptions.co.uk/#website",
  url: "https://abacusfinancialoptions.co.uk",
  name: "Abacus Financial Options",
  description: "Independent financial advice across Dorset and the South of England since 2011",
  publisher: {
    "@id": "https://abacusfinancialoptions.co.uk/#organization",
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
