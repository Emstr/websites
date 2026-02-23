import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AFS Limited | Chartered Financial Planners in Chesterfield, Derbyshire",
    template: "%s | AFS Limited",
  },
  description:
    "Chartered financial planning from AFS Limited, established 2001. Savings, investments, retirement planning, mortgages, protection and equity release in Chesterfield, Derbyshire. FCA 196880.",
  keywords: [
    "financial adviser Chesterfield",
    "chartered financial planner Derbyshire",
    "IFA Chesterfield",
    "pension advice Chesterfield",
    "investment advice Derbyshire",
    "mortgage adviser Chesterfield",
    "equity release Chesterfield",
    "retirement planning Sheffield",
    "financial planning Derbyshire",
    "AFS Limited",
    "Chris Dey financial planner",
    "independent financial advice Yorkshire",
  ],
  authors: [{ name: "AFS Limited" }],
  creator: "AFS Limited",
  publisher: "AFS Limited",
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
    url: "https://www.koliderdigital.com/afs-chesterfield",
    siteName: "AFS Limited",
    title: "AFS Limited | Chartered Financial Planners Since 2001",
    description:
      "Chartered financial planning from AFS Limited in Chesterfield. Savings, investments, retirement planning, mortgages, protection, equity release and estate planning. Serving Derbyshire, Sheffield and Yorkshire since 2001.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AFS Limited - Chartered Financial Planners in Chesterfield Since 2001",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AFS Limited | Chartered Financial Planners in Chesterfield",
    description:
      "Chartered financial planning in Chesterfield and Derbyshire since 2001. FCA regulated, Equity Release Council member.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.koliderdigital.com/afs-chesterfield",
  },
  other: {
    "geo.region": "GB-DBY",
    "geo.placename": "Chesterfield",
    "geo.position": "53.2380;-1.4279",
    ICBM: "53.2380, -1.4279",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://www.koliderdigital.com/afs-chesterfield/#organization",
  name: "AFS Limited",
  description:
    "Chartered financial planning including savings, investments, retirement planning, mortgages, protection, equity release and estate planning. Established 2001, serving Chesterfield, Sheffield, Derbyshire and Yorkshire. Equity Release Council member.",
  url: "https://www.koliderdigital.com/afs-chesterfield",
  telephone: "+441246293858",
  email: "info@afs.ltd.uk",
  foundingDate: "2001",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Chesterfield",
    },
    {
      "@type": "City",
      name: "Sheffield",
    },
    {
      "@type": "AdministrativeArea",
      name: "Derbyshire",
    },
    {
      "@type": "AdministrativeArea",
      name: "Yorkshire",
    },
    {
      "@type": "AdministrativeArea",
      name: "Nottinghamshire",
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
          name: "Savings & Investments",
          description: "Comprehensive savings and investment planning tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Planning",
          description: "Chartered retirement planning including pension consolidation, drawdown strategies and income planning.",
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
          name: "Family & Income Protection",
          description: "Life assurance, critical illness cover, and income protection to safeguard your family.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Equity Release",
          description: "Specialist equity release advice from an Equity Release Council member firm.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estate Planning & Wealth Transfer",
          description: "Inheritance tax planning and wealth transfer strategies for your family's future.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "AFS Limited Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Brookdale, 41 Clarence Road",
      addressLocality: "Chesterfield",
      addressRegion: "Derbyshire",
      postalCode: "S40 1LH",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.2380,
      longitude: -1.4279,
    },
    telephone: "+441246293858",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.koliderdigital.com/afs-chesterfield/#localbusiness",
  name: "AFS Limited",
  telephone: "+441246293858",
  email: "info@afs.ltd.uk",
  url: "https://www.koliderdigital.com/afs-chesterfield",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Brookdale, 41 Clarence Road",
    addressLocality: "Chesterfield",
    addressRegion: "Derbyshire",
    postalCode: "S40 1LH",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.2380,
    longitude: -1.4279,
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
  "@id": "https://www.koliderdigital.com/afs-chesterfield/#website",
  url: "https://www.koliderdigital.com/afs-chesterfield",
  name: "AFS Limited",
  description: "Chartered financial planning in Chesterfield and Derbyshire since 2001. FCA 196880.",
  publisher: {
    "@id": "https://www.koliderdigital.com/afs-chesterfield/#organization",
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
