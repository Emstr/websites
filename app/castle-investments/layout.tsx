import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Castle Investment Consultants | Independent Financial Advisers in Southampton",
    template: "%s | Castle Investment Consultants",
  },
  description:
    "Whole-of-market independent financial advice from Castle Investment Consultants, established 1994. Pensions, investments, mortgages, protection and estate planning in Southampton, Hampshire.",
  keywords: [
    "financial adviser Southampton",
    "independent financial adviser",
    "IFA Southampton",
    "pension advice Southampton",
    "investment advice Southampton",
    "mortgage adviser Southampton",
    "estate planning Hampshire",
    "protection advice",
    "whole of market financial advice",
    "Castle Investment Consultants",
    "financial planning Southampton",
    "retirement planning Hampshire",
  ],
  authors: [{ name: "Widelist Investments Ltd trading as Castle Investment Consultants" }],
  creator: "Widelist Investments Ltd trading as Castle Investment Consultants",
  publisher: "Widelist Investments Ltd trading as Castle Investment Consultants",
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
    url: "https://castle-investments.com",
    siteName: "Castle Investment Consultants",
    title: "Castle Investment Consultants | Independent Financial Advisers Since 1994",
    description:
      "Whole-of-market independent financial advice from a family-run firm serving Southampton and Hampshire since 1994. Pensions, investments, mortgages, protection and long-term care planning.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Castle Investment Consultants - Independent Financial Advisers Since 1994",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Castle Investment Consultants | Independent Financial Advisers",
    description:
      "Whole-of-market independent financial advice in Southampton and Hampshire since 1994.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://castle-investments.com",
  },
  other: {
    "geo.region": "GB-HAM",
    "geo.placename": "Southampton",
    "geo.position": "50.9080;-1.4040",
    ICBM: "50.9080, -1.4040",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://castle-investments.com/#organization",
  name: "Widelist Investments Ltd trading as Castle Investment Consultants",
  alternateName: "Castle Investment Consultants",
  description:
    "Whole-of-market independent financial advice including pensions, investments, mortgages, protection and long-term care planning. Established 1994, serving Southampton and Hampshire.",
  url: "https://castle-investments.com",
  telephone: "+442380333265",
  email: "mail@castleinvestments.co.uk",
  foundingDate: "1994",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Southampton",
    },
    {
      "@type": "AdministrativeArea",
      name: "Hampshire",
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
          name: "Pension Advice",
          description: "Comprehensive pension planning including workplace pensions, SIPPs, and retirement income strategies.",
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
          name: "Mortgage Advice",
          description: "Independent mortgage advice with access to the whole of the market for the best rates.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protection Planning",
          description: "Life assurance, critical illness cover, and income protection to safeguard your family.",
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
    name: "Castle Investment Consultants Office",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Southampton",
      addressRegion: "Hampshire",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.9080,
      longitude: -1.4040,
    },
    telephone: "+442380333265",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://castle-investments.com/#localbusiness",
  name: "Castle Investment Consultants",
  image: "https://castle-investments.com/logo.png",
  telephone: "+442380333265",
  email: "mail@castleinvestments.co.uk",
  url: "https://castle-investments.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Southampton",
    addressRegion: "Hampshire",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.9080,
    longitude: -1.4040,
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
  "@id": "https://castle-investments.com/#website",
  url: "https://castle-investments.com",
  name: "Castle Investment Consultants",
  description: "Whole-of-market independent financial advice in Southampton and Hampshire since 1994",
  publisher: {
    "@id": "https://castle-investments.com/#organization",
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
