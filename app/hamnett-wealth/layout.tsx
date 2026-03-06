import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Hamnett Wealth Management | Chartered Financial Planners in Sheffield",
    template: "%s | Hamnett Wealth Management - Chartered Financial Planners",
  },
  description:
    "Chartered Financial Planners providing expert wealth management, financial planning, pensions, investments, and tax planning in Sheffield, South Yorkshire. Established 1989, FCA regulated.",
  keywords: [
    "chartered financial planner Sheffield",
    "wealth management Sheffield",
    "financial adviser Sheffield",
    "pension advice Sheffield",
    "investment planning South Yorkshire",
    "tax planning Sheffield",
    "estate planning Sheffield",
    "chartered financial planners",
    "independent financial adviser",
    "retirement planning Sheffield",
    "financial planning UK",
    "FCA regulated financial adviser",
  ],
  authors: [{ name: "Hamnett Wealth Management" }],
  creator: "Hamnett Wealth Management",
  publisher: "Hamnett Wealth Management",
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
    url: "https://hamnettwealth.com",
    siteName: "Hamnett Wealth Management",
    title: "Hamnett Wealth Management | Chartered Financial Planners in Sheffield",
    description:
      "Chartered Financial Planners providing expert wealth management, pensions, investments, and tax planning from Sheffield. Established 1989, 35+ years of trusted advice.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hamnett Wealth Management - Chartered Financial Planners in Sheffield",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamnett Wealth Management | Chartered Financial Planners",
    description:
      "Chartered Financial Planners in Sheffield. Expert wealth management, pensions, and investment advice since 1989.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://hamnettwealth.com",
  },
  other: {
    "geo.region": "GB-SYK",
    "geo.placename": "Sheffield",
    "geo.position": "53.3811;-1.4701",
    ICBM: "53.3811, -1.4701",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://hamnettwealth.com/#organization",
  name: "Hamnett Wealth Management",
  alternateName: "Hamnett Wealth",
  description:
    "Chartered Financial Planners providing expert wealth management, financial planning, pensions, investments, tax planning, estate planning, and protection services in Sheffield, South Yorkshire. Established 1989.",
  url: "https://hamnettwealth.com",
  telephone: "+441142353500",
  email: "advice@hamnettwealth.com",
  foundingDate: "1989",
  priceRange: "$$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Sheffield",
    },
    {
      "@type": "AdministrativeArea",
      name: "South Yorkshire",
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
          name: "Wealth Management",
          description: "Holistic wealth management strategies tailored to your financial goals and aspirations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Financial Planning",
          description: "Comprehensive financial planning from Chartered Financial Planners.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Planning",
          description: "Expert pension advice including workplace pensions, SIPPs, and retirement planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning",
          description: "Bespoke investment strategies designed to grow your wealth in line with your risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tax Planning",
          description: "Strategic tax planning to optimise your wealth and minimise tax liability.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estate Planning",
          description: "Comprehensive estate planning and inheritance tax mitigation strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protection",
          description: "Life assurance, critical illness cover, and income protection planning.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Hamnett Wealth Management - Sheffield Office",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sheffield",
      addressRegion: "South Yorkshire",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.3811,
      longitude: -1.4701,
    },
    telephone: "+441142353500",
  },
  sameAs: [
    "https://hamnettwealth.com",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://hamnettwealth.com/#localbusiness",
  name: "Hamnett Wealth Management",
  image: "https://hamnettwealth.com/logo.png",
  telephone: "+441142353500",
  email: "advice@hamnettwealth.com",
  url: "https://hamnettwealth.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sheffield",
    addressRegion: "South Yorkshire",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.3811,
    longitude: -1.4701,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
  priceRange: "$$$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://hamnettwealth.com/#website",
  url: "https://hamnettwealth.com",
  name: "Hamnett Wealth Management",
  description: "Chartered Financial Planners providing expert wealth management and financial planning in Sheffield",
  publisher: {
    "@id": "https://hamnettwealth.com/#organization",
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
