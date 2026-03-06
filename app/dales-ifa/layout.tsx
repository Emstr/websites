import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "DALES IFA | Independent Financial Advisers in Nottingham & Newark",
    template: "%s | DALES IFA",
  },
  description:
    "Independent financial advisers in Nottingham and Newark. Expert mortgage, pension, equity release, investment and protection advice from Philip Dales. Whole-of-market, FCA regulated. Equity Release Council member.",
  keywords: [
    "independent financial adviser Nottingham",
    "IFA Newark",
    "financial adviser West Bridgford",
    "mortgage adviser Nottingham",
    "pension advice Newark",
    "equity release Nottingham",
    "equity release adviser Newark",
    "investment advice Nottinghamshire",
    "protection insurance Nottingham",
    "whole of market financial advice",
    "Equity Release Council member",
    "FCA regulated financial adviser",
  ],
  authors: [{ name: "P N Dales Ltd" }],
  creator: "P N Dales Ltd",
  publisher: "P N Dales Ltd",
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
    url: "https://pndales.co.uk",
    siteName: "DALES IFA",
    title: "DALES IFA | Independent Financial Advisers in Nottingham & Newark",
    description:
      "Expert independent financial advice from offices in Nottingham and Newark. Mortgages, pensions, equity release, investments and protection. Equity Release Council member.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DALES IFA - Independent Financial Advisers in Nottingham & Newark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DALES IFA | Independent Financial Advisers Nottingham & Newark",
    description:
      "Independent financial advice in Nottingham and Newark. Mortgages, pensions, equity release, investments and protection.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://pndales.co.uk",
  },
  other: {
    "geo.region": "GB-NTT",
    "geo.placename": "Nottingham",
    "geo.position": "52.9388;-1.1307",
    ICBM: "52.9388, -1.1307",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://pndales.co.uk/#organization",
  name: "P N Dales Ltd",
  alternateName: "DALES IFA",
  description:
    "Independent financial advisers providing mortgage, pension, equity release, investment and protection advice from offices in Nottingham and Newark. Equity Release Council member.",
  url: "https://pndales.co.uk",
  telephone: "+443337729607",
  email: "advice@pndales.co.uk",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Nottingham",
    },
    {
      "@type": "City",
      name: "Newark-on-Trent",
    },
    {
      "@type": "AdministrativeArea",
      name: "Nottinghamshire",
    },
    {
      "@type": "AdministrativeArea",
      name: "East Midlands",
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
          description: "Whole-of-market mortgage advice for purchases, remortgages, buy-to-let and first-time buyers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Planning",
          description: "Comprehensive pension advice including workplace pensions, SIPPs and retirement planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Equity Release",
          description: "Specialist equity release advice from an Equity Release Council member.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning",
          description: "Independent investment advice tailored to your goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protection",
          description: "Life assurance, critical illness cover, income protection and family protection planning.",
        },
      },
    ],
  },
  location: [
    {
      "@type": "Place",
      name: "DALES IFA Nottingham Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bridgford Business Centre, 29 Bridgford Road, West Bridgford",
        addressLocality: "Nottingham",
        addressRegion: "Nottinghamshire",
        postalCode: "NG2 6AU",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.9388,
        longitude: -1.1307,
      },
      telephone: "+441158320265",
    },
    {
      "@type": "Place",
      name: "DALES IFA Newark Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Central Buildings, Middle Gate",
        addressLocality: "Newark",
        addressRegion: "Nottinghamshire",
        postalCode: "NG24 1AG",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 53.0763,
        longitude: -0.8094,
      },
      telephone: "+441636870069",
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://pndales.co.uk/#localbusiness",
  name: "P N Dales Ltd (DALES IFA)",
  image: "https://pndales.co.uk/logo.png",
  telephone: "+443337729607",
  email: "advice@pndales.co.uk",
  url: "https://pndales.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bridgford Business Centre, 29 Bridgford Road, West Bridgford",
    addressLocality: "Nottingham",
    addressRegion: "Nottinghamshire",
    postalCode: "NG2 6AU",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.9388,
    longitude: -1.1307,
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
  "@id": "https://pndales.co.uk/#website",
  url: "https://pndales.co.uk",
  name: "DALES IFA - Independent Financial Advisers",
  description: "Independent financial advice in Nottingham and Newark. FCA Ref: 496107.",
  publisher: {
    "@id": "https://pndales.co.uk/#organization",
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
