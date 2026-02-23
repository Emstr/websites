import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "City Financial Planning | Independent Financial Advisers in Bath",
    template: "%s | City Financial Planning",
  },
  description:
    "Whole-of-market independent financial advice from City Financial Planning Limited, George Street, Bath. Insurance, pensions, mortgages, life cover, investments, equity release, health & long term care, corporate advice and estate planning. FCA 440633.",
  keywords: [
    "financial adviser Bath",
    "independent financial adviser Bath",
    "IFA Bath",
    "pension advice Bath",
    "investment advice Bath",
    "mortgage adviser Bath",
    "equity release Bath",
    "estate planning Bath",
    "whole of market financial advice",
    "City Financial Planning",
    "financial planning Bath",
    "retirement planning Somerset",
    "insurance advice Bath",
    "corporate financial advice Bath",
    "health and long term care Bath",
    "life cover Bath",
  ],
  authors: [{ name: "City Financial Planning Limited" }],
  creator: "City Financial Planning Limited",
  publisher: "City Financial Planning Limited",
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
    url: "https://koliderdigital.co.uk/city-financial-bath",
    siteName: "City Financial Planning",
    title: "City Financial Planning | Independent Financial Advisers in Bath",
    description:
      "Whole-of-market independent financial advice from a premium George Street location in Bath. Insurance, pensions, mortgages, life cover, investments, equity release, health & long term care, corporate advice and estate planning.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "City Financial Planning - Independent Financial Advisers in Bath",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "City Financial Planning | Independent Financial Advisers in Bath",
    description:
      "Whole-of-market independent financial advice in Bath. 9 specialist service areas. FCA regulated.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://koliderdigital.co.uk/city-financial-bath",
  },
  other: {
    "geo.region": "GB-BAS",
    "geo.placename": "Bath",
    "geo.position": "51.3833;-2.3597",
    ICBM: "51.3833, -2.3597",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://koliderdigital.co.uk/city-financial-bath/#organization",
  name: "City Financial Planning Limited",
  alternateName: "City Financial Planning",
  description:
    "Whole-of-market independent financial advice including insurance, pensions, mortgages, life cover, investments & savings, equity release, health & long term care, corporate financial advice and estate planning. Based on George Street, Bath.",
  url: "https://koliderdigital.co.uk/city-financial-bath",
  telephone: "+441225314999",
  email: "admin@cityfinancialplanning.co.uk",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Bath",
    },
    {
      "@type": "AdministrativeArea",
      name: "Bath and North East Somerset",
    },
    {
      "@type": "AdministrativeArea",
      name: "Somerset",
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
          name: "Insurance",
          description: "Comprehensive insurance advice to protect you, your family and your assets.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pensions",
          description: "Expert pension planning including workplace pensions, SIPPs, and retirement income strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgages",
          description: "Independent mortgage advice with access to the whole of the market for the best rates.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Life Cover",
          description: "Life assurance and protection planning to safeguard your family's future.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investments & Savings",
          description: "Whole-of-market investment advice tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Equity Release",
          description: "Specialist equity release advice for homeowners looking to access property wealth.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Health & Long Term Care",
          description: "Planning for health costs and long-term care needs to protect your assets and wellbeing.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Financial Advice",
          description: "Financial planning solutions for businesses including workplace pensions and key person cover.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estate Planning",
          description: "Inheritance tax planning and wealth transfer strategies for your family's future.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "City Financial Planning Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Princes Building, George Street",
      addressLocality: "Bath",
      addressRegion: "BANES",
      postalCode: "BA1 2ED",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.3833,
      longitude: -2.3597,
    },
    telephone: "+441225314999",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://koliderdigital.co.uk/city-financial-bath/#localbusiness",
  name: "City Financial Planning",
  telephone: "+441225314999",
  email: "admin@cityfinancialplanning.co.uk",
  url: "https://koliderdigital.co.uk/city-financial-bath",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3 Princes Building, George Street",
    addressLocality: "Bath",
    addressRegion: "BANES",
    postalCode: "BA1 2ED",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.3833,
    longitude: -2.3597,
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
  "@id": "https://koliderdigital.co.uk/city-financial-bath/#website",
  url: "https://koliderdigital.co.uk/city-financial-bath",
  name: "City Financial Planning",
  description: "Whole-of-market independent financial advice in Bath, BANES",
  publisher: {
    "@id": "https://koliderdigital.co.uk/city-financial-bath/#organization",
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
