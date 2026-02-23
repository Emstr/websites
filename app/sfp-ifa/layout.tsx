import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Structured Financial Planning | Independent Financial Advisers in Banff & North East Scotland",
    template: "%s | Structured Financial Planning",
  },
  description:
    "Independent financial advice from Structured Financial Planning Limited. Protection, pensions, savings and investments across North East Scotland. FCA 440742. Offices in Banff, Banchory and Fraserburgh.",
  keywords: [
    "financial adviser Banff",
    "independent financial adviser",
    "IFA North East Scotland",
    "pension advice Aberdeenshire",
    "investment advice Scotland",
    "protection advice Banff",
    "savings and investments",
    "Structured Financial Planning",
    "financial planning Banchory",
    "financial planning Fraserburgh",
    "IFA Aberdeenshire",
    "retirement planning Scotland",
  ],
  authors: [{ name: "Structured Financial Planning Limited" }],
  creator: "Structured Financial Planning Limited",
  publisher: "Structured Financial Planning Limited",
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
    url: "https://sfp-ifa.co.uk",
    siteName: "Structured Financial Planning",
    title: "Structured Financial Planning | Independent Financial Advisers in North East Scotland",
    description:
      "Independent financial advice from Structured Financial Planning Limited. Protection, pensions, savings and investments with offices across North East Scotland. 25+ years experience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Structured Financial Planning - Independent Financial Advisers in North East Scotland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Structured Financial Planning | Independent Financial Advisers",
    description:
      "Independent financial advice across North East Scotland. Protection, pensions, savings and investments.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://sfp-ifa.co.uk",
  },
  other: {
    "geo.region": "GB-ABD",
    "geo.placename": "Banff",
    "geo.position": "57.6647;-2.5295",
    ICBM: "57.6647, -2.5295",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://sfp-ifa.co.uk/#organization",
  name: "Structured Financial Planning Limited",
  alternateName: "SFP",
  description:
    "Independent financial advice including protection, pensions, savings and investments. Serving North East Scotland with offices in Banff, Banchory and Fraserburgh. Director with 25+ years experience.",
  url: "https://sfp-ifa.co.uk",
  telephone: "+441261818597",
  email: "info@sfp-ifa.co.uk",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Aberdeenshire",
    },
    {
      "@type": "AdministrativeArea",
      name: "North East Scotland",
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
          name: "Protection",
          description: "Life assurance, critical illness cover, income protection and family income benefit to safeguard your family.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pensions",
          description: "Comprehensive pension planning including workplace pensions, SIPPs, and retirement income strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Savings & Investments",
          description: "Independent savings and investment advice tailored to your financial goals and risk profile.",
        },
      },
    ],
  },
  location: [
    {
      "@type": "Place",
      name: "SFP Banff Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3 Lyon's Den, 28 Low Street",
        addressLocality: "Banff",
        postalCode: "AB45 1AS",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 57.6647,
        longitude: -2.5295,
      },
      telephone: "+441261818597",
    },
    {
      "@type": "Place",
      name: "SFP Banchory Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 2, 77 High Street",
        addressLocality: "Banchory",
        postalCode: "AB31 5TJ",
        addressCountry: "GB",
      },
    },
    {
      "@type": "Place",
      name: "SFP Fraserburgh Office (Registered)",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4 Charlotte Street",
        addressLocality: "Fraserburgh",
        postalCode: "AB43 9JE",
        addressCountry: "GB",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sfp-ifa.co.uk/#localbusiness",
  name: "Structured Financial Planning",
  telephone: "+441261818597",
  email: "info@sfp-ifa.co.uk",
  url: "https://sfp-ifa.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3 Lyon's Den, 28 Low Street",
    addressLocality: "Banff",
    addressRegion: "Aberdeenshire",
    postalCode: "AB45 1AS",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 57.6647,
    longitude: -2.5295,
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
  "@id": "https://sfp-ifa.co.uk/#website",
  url: "https://sfp-ifa.co.uk",
  name: "Structured Financial Planning",
  description: "Independent financial advice across North East Scotland - Protection, Pensions, Savings & Investments",
  publisher: {
    "@id": "https://sfp-ifa.co.uk/#organization",
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
