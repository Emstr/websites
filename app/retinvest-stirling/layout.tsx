import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Retinvest | Retirement & Investment Solutions in Stirling, Central Scotland",
    template: "%s | Retinvest - Retirement & Investment Solutions",
  },
  description:
    "Independent financial advisers specialising in divorce financial planning, pension transfers, and retirement planning. Serving Stirling, Falkirk, Dunblane, Fife and West Lothian.",
  keywords: [
    "financial adviser Stirling",
    "retirement planning Scotland",
    "divorce financial planning",
    "pension transfer Scotland",
    "investment advice Stirling",
    "pension adviser Central Scotland",
    "equity release Stirling",
    "wealth management Scotland",
    "tax planning Stirling",
    "trust planning Scotland",
    "independent financial adviser Falkirk",
    "pension transfer specialist",
    "divorce pension splitting",
  ],
  authors: [{ name: "Retirement & Investment Solutions Ltd" }],
  creator: "Retirement & Investment Solutions Ltd",
  publisher: "Retirement & Investment Solutions Ltd",
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
    url: "https://retinvest.co.uk",
    siteName: "Retinvest - Retirement & Investment Solutions",
    title: "Retinvest | Divorce & Pension Transfer Specialists in Central Scotland",
    description:
      "Expert financial advisers providing divorce financial planning, pension transfers, retirement planning and wealth management from Castle Business Park, Stirling.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Retinvest - Retirement & Investment Solutions in Stirling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retinvest | Retirement & Investment Solutions in Stirling",
    description:
      "Independent financial advisers specialising in divorce planning and pension transfers. Serving Central Scotland.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://retinvest.co.uk",
  },
  other: {
    "geo.region": "GB-STG",
    "geo.placename": "Stirling",
    "geo.position": "56.1165;-3.9369",
    ICBM: "56.1165, -3.9369",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://retinvest.co.uk/#organization",
  name: "Retirement & Investment Solutions Ltd",
  alternateName: "Retinvest",
  description:
    "Independent financial advisers specialising in divorce financial planning, pension transfers, retirement planning, investments, tax and trust planning, equity release and wealth management in Central Scotland.",
  url: "https://retinvest.co.uk",
  telephone: "+441786437008",
  email: "info@retinvest.co.uk",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Stirling",
    },
    {
      "@type": "City",
      name: "Falkirk",
    },
    {
      "@type": "City",
      name: "Dunblane",
    },
    {
      "@type": "AdministrativeArea",
      name: "Fife",
    },
    {
      "@type": "AdministrativeArea",
      name: "West Lothian",
    },
    {
      "@type": "AdministrativeArea",
      name: "Central Scotland",
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
          name: "Retirement Planning",
          description: "Comprehensive pension and retirement income planning for a secure future.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Divorce Financial Planning",
          description: "Specialist financial advice during divorce including pension sharing and asset division.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Transfers",
          description: "Expert pension transfer analysis and advice including defined benefit transfers.",
        },
      },
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
          name: "Tax & Trust Planning",
          description: "Strategic tax planning and trust structures to protect and grow your wealth.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Equity Release",
          description: "Access the wealth tied up in your home with expert equity release advice.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wealth Management",
          description: "Holistic wealth management services for individuals and families across Central Scotland.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Retinvest Stirling Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lomond Court, Castle Business Park",
      addressLocality: "Stirling",
      addressRegion: "Central Scotland",
      postalCode: "FK9 4TU",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 56.1165,
      longitude: -3.9369,
    },
    telephone: "+441786437008",
  },
  sameAs: [
    "https://retinvest.co.uk",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://retinvest.co.uk/#localbusiness",
  name: "Retirement & Investment Solutions Ltd",
  image: "https://retinvest.co.uk/logo.png",
  telephone: "+441786437008",
  email: "info@retinvest.co.uk",
  url: "https://retinvest.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lomond Court, Castle Business Park",
    addressLocality: "Stirling",
    addressRegion: "Central Scotland",
    postalCode: "FK9 4TU",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 56.1165,
    longitude: -3.9369,
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
  "@id": "https://retinvest.co.uk/#website",
  url: "https://retinvest.co.uk",
  name: "Retinvest - Retirement & Investment Solutions",
  description: "Independent financial advisers specialising in divorce planning and pension transfers in Central Scotland",
  publisher: {
    "@id": "https://retinvest.co.uk/#organization",
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
