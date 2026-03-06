import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Aveton Gifford Associates | Chartered Financial Planners in Edinburgh & Central Scotland",
    template: "%s | Aveton Gifford Associates",
  },
  description:
    "Chartered Financial Planners providing independent financial advice across Scotland. Investment planning, pensions, tax mitigation and retirement planning from Edinburgh and Coatbridge.",
  keywords: [
    "chartered financial planner",
    "chartered financial planners Edinburgh",
    "independent financial adviser Scotland",
    "investment planning Edinburgh",
    "pension advice Scotland",
    "tax mitigation",
    "retirement planning",
    "whole of market financial advice",
    "financial adviser Coatbridge",
    "financial planner Edinburgh",
    "IFA Scotland",
    "chartered financial planner Scotland",
  ],
  authors: [{ name: "Aveton Gifford Associates Limited" }],
  creator: "Aveton Gifford Associates Limited",
  publisher: "Aveton Gifford Associates Limited",
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
    url: "https://avetongiffordassociates.co.uk",
    siteName: "Aveton Gifford Associates",
    title: "Aveton Gifford Associates | Chartered Financial Planners in Edinburgh & Central Scotland",
    description:
      "Chartered Financial Planners with over 40 years combined experience. Independent, whole-of-market financial advice from Edinburgh and Coatbridge.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aveton Gifford Associates - Chartered Financial Planners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aveton Gifford Associates | Chartered Financial Planners",
    description:
      "Chartered Financial Planners providing independent advice across Scotland. Edinburgh & Coatbridge offices.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://avetongiffordassociates.co.uk",
  },
  other: {
    "geo.region": "GB-SCT",
    "geo.placename": "Edinburgh",
    "geo.position": "55.9533;-3.1883",
    ICBM: "55.9533, -3.1883",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://avetongiffordassociates.co.uk/#organization",
  name: "Aveton Gifford Associates Limited",
  alternateName: "Aveton Gifford Associates",
  description:
    "Chartered Financial Planners providing independent, whole-of-market financial advice including investment planning, pensions, tax mitigation and retirement planning across Scotland.",
  url: "https://avetongiffordassociates.co.uk",
  telephone: "+441313396508",
  email: "enquiries@avetongiffordassociates.co.uk",
  foundingDate: "2004",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Chartered Financial Planner",
    credentialCategory: "Professional Certification",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Edinburgh",
    },
    {
      "@type": "City",
      name: "Coatbridge",
    },
    {
      "@type": "AdministrativeArea",
      name: "Scotland",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Planning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning",
          description: "Bespoke investment strategies tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Planning",
          description: "Comprehensive pension advice including workplace pensions and retirement planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tax Mitigation",
          description: "Strategic tax planning to optimise your wealth and minimise tax liability.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Planning",
          description: "Complete retirement planning to secure your financial future.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Whole-of-Market Reviews",
          description: "Independent reviews across the entire financial product market.",
        },
      },
    ],
  },
  location: [
    {
      "@type": "Place",
      name: "Aveton Gifford Associates Edinburgh Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "36 Cammo Road",
        addressLocality: "Edinburgh",
        addressRegion: "Scotland",
        postalCode: "EH4 8AP",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 55.9533,
        longitude: -3.1883,
      },
      telephone: "+441313396508",
    },
    {
      "@type": "Place",
      name: "Aveton Gifford Associates Coatbridge Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gartcolt Cottages, Gartgill Road",
        addressLocality: "Coatbridge",
        addressRegion: "Scotland",
        postalCode: "ML5 2EQ",
        addressCountry: "GB",
      },
      telephone: "+441236872751",
    },
  ],
  identifier: {
    "@type": "PropertyValue",
    name: "Companies House Registration",
    value: "SC268741",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://avetongiffordassociates.co.uk/#localbusiness",
  name: "Aveton Gifford Associates Limited",
  telephone: "+441313396508",
  email: "enquiries@avetongiffordassociates.co.uk",
  url: "https://avetongiffordassociates.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "36 Cammo Road",
    addressLocality: "Edinburgh",
    addressRegion: "Scotland",
    postalCode: "EH4 8AP",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.9533,
    longitude: -3.1883,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://avetongiffordassociates.co.uk/#website",
  url: "https://avetongiffordassociates.co.uk",
  name: "Aveton Gifford Associates",
  description: "Chartered Financial Planners in Edinburgh & Central Scotland",
  publisher: {
    "@id": "https://avetongiffordassociates.co.uk/#organization",
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
