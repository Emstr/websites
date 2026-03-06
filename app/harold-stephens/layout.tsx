import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Harold Stephens Financial Planning | Later Life Planning Specialists in Bristol",
    template: "%s | Harold Stephens Financial Planning",
  },
  description:
    "Later life planning specialists in Bristol and the South West. Expert advice on retirement planning, equity release, care fee planning, pensions, investments, and inheritance tax planning.",
  keywords: [
    "later life planning",
    "retirement planning Bristol",
    "equity release advice",
    "care fee planning",
    "pension advice Bristol",
    "inheritance tax planning",
    "estate planning",
    "financial adviser Bristol",
    "retirement income",
    "South West financial planning",
    "later life financial advice",
    "equity release Bristol",
  ],
  authors: [{ name: "Harold Stephens Financial Planning" }],
  creator: "Harold Stephens Financial Planning",
  publisher: "Harold Stephens Financial Planning",
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
    url: "https://haroldstephens.co.uk",
    siteName: "Harold Stephens Financial Planning",
    title: "Harold Stephens Financial Planning | Later Life Planning Specialists",
    description:
      "Expert later life planning from Bristol. Retirement planning, equity release, care fee planning, pensions, investments, and inheritance tax advice for the South West.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harold Stephens Financial Planning - Later Life Planning Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harold Stephens Financial Planning | Later Life Specialists",
    description:
      "Later life planning specialists in Bristol. Retirement, equity release, care fees, and inheritance tax planning.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://haroldstephens.co.uk",
  },
  other: {
    "geo.region": "GB-BST",
    "geo.placename": "Bristol",
    "geo.position": "51.4545;-2.5879",
    ICBM: "51.4545, -2.5879",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://haroldstephens.co.uk/#organization",
  name: "Harold Stephens Financial Planning",
  alternateName: "Harold Stephens",
  description:
    "Later life planning specialists providing expert advice on retirement planning, equity release, care fee planning, pensions, investments, and inheritance tax planning in Bristol and the South West.",
  url: "https://haroldstephens.co.uk",
  telephone: "+441173636212",
  email: "info@haroldstephens.co.uk",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Bristol",
    },
    {
      "@type": "AdministrativeArea",
      name: "South West England",
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
          name: "Later Life Planning",
          description: "Comprehensive financial planning for those in or approaching retirement.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Income Planning",
          description: "Expert advice on generating sustainable income throughout retirement.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Equity Release",
          description: "Specialist equity release advice to help you access the value in your home.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Care Fee Planning",
          description: "Strategies to fund long-term care whilst protecting your assets.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inheritance Tax Planning",
          description: "Tax-efficient estate planning to protect your legacy for future generations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Planning",
          description: "Comprehensive pension advice including drawdown, annuities, and consolidation.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Harold Stephens Financial Planning - Bristol Office",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bristol",
      addressRegion: "South West England",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.4545,
      longitude: -2.5879,
    },
    telephone: "+441173636212",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://haroldstephens.co.uk/#localbusiness",
  name: "Harold Stephens Financial Planning",
  image: "https://haroldstephens.co.uk/logo.png",
  telephone: "+441173636212",
  email: "info@haroldstephens.co.uk",
  url: "https://haroldstephens.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bristol",
    addressRegion: "South West England",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4545,
    longitude: -2.5879,
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
  "@id": "https://haroldstephens.co.uk/#website",
  url: "https://haroldstephens.co.uk",
  name: "Harold Stephens Financial Planning",
  description: "Later life planning specialists in Bristol and the South West",
  publisher: {
    "@id": "https://haroldstephens.co.uk/#organization",
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
