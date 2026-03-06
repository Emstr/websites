import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Paul Dodd Asset Management | Wealth Management & Pension Specialists in Leeds",
    template: "%s | Paul Dodd Asset Management",
  },
  description:
    "Expert wealth management, pension advice and investment planning from Paul Dodd Asset Management Limited. Specialist pension and annuity advisers serving Leeds, West Yorkshire and London.",
  keywords: [
    "wealth management Leeds",
    "pension adviser Leeds",
    "investment advice Leeds",
    "financial adviser Leeds",
    "annuity specialist",
    "pension planning",
    "taxation planning",
    "wealth management Kensington",
    "retirement planning Leeds",
    "IFA Leeds",
    "Paul Dodd Asset Management",
    "independent financial adviser West Yorkshire",
  ],
  authors: [{ name: "Paul Dodd Asset Management Limited" }],
  creator: "Paul Dodd Asset Management Limited",
  publisher: "Paul Dodd Asset Management Limited",
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
    url: "https://pauldodd.co.uk",
    siteName: "Paul Dodd Asset Management",
    title: "Paul Dodd Asset Management | Wealth Management & Pension Specialists",
    description:
      "Expert pension advice, wealth management and investment planning from our Leeds office. Serving clients across West Yorkshire and London.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paul Dodd Asset Management - Wealth Management & Pension Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Dodd Asset Management | Pension & Wealth Specialists",
    description:
      "Expert pension advice and wealth management from Leeds. Serving clients across West Yorkshire and London.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://pauldodd.co.uk",
  },
  other: {
    "geo.region": "GB-WYK",
    "geo.placename": "Leeds",
    "geo.position": "53.8321;-1.6362",
    ICBM: "53.8321, -1.6362",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://pauldodd.co.uk/#organization",
  name: "Paul Dodd Asset Management Limited",
  alternateName: "Paul Dodd Asset Management",
  description:
    "Expert wealth management, pension advice, investment planning, taxation planning and annuity services. Specialist pension advisers serving Leeds, West Yorkshire and London.",
  url: "https://pauldodd.co.uk",
  telephone: "+441132300449",
  email: "info@pauldodd.co.uk",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Leeds",
    },
    {
      "@type": "AdministrativeArea",
      name: "West Yorkshire",
    },
    {
      "@type": "City",
      name: "London",
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
          description: "Specialist pension planning, consolidation, drawdown and retirement income strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wealth Management",
          description: "Holistic wealth management services tailored to your financial goals and aspirations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Advice",
          description: "Bespoke investment strategies designed to grow and protect your wealth.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Taxation Planning",
          description: "Strategic tax planning to optimise your wealth and minimise tax liability.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Annuities",
          description: "Expert annuity advice to secure guaranteed retirement income for life.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Paul Dodd Asset Management Leeds Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "18 Wynmore Avenue",
      addressLocality: "Leeds",
      addressRegion: "West Yorkshire",
      postalCode: "LS16 9DE",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.8321,
      longitude: -1.6362,
    },
    telephone: "+441132300449",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://pauldodd.co.uk/#localbusiness",
  name: "Paul Dodd Asset Management Limited",
  telephone: "+441132300449",
  email: "info@pauldodd.co.uk",
  url: "https://pauldodd.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Wynmore Avenue",
    addressLocality: "Leeds",
    addressRegion: "West Yorkshire",
    postalCode: "LS16 9DE",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.8321,
    longitude: -1.6362,
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
  "@id": "https://pauldodd.co.uk/#website",
  url: "https://pauldodd.co.uk",
  name: "Paul Dodd Asset Management",
  description: "Expert wealth management and pension advice in Leeds and London",
  publisher: {
    "@id": "https://pauldodd.co.uk/#organization",
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
