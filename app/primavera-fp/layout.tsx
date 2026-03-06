import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Primavera Financial Partners | Chartered Financial Planners in Wanstead, London",
    template: "%s | Primavera Financial Partners LLP",
  },
  description:
    "Chartered Financial Planners in Wanstead, East London. Expert independent advice on investments, pensions, mortgages, protection and retirement planning. Chartered Status — the gold standard in financial planning.",
  keywords: [
    "chartered financial planner",
    "chartered financial adviser",
    "financial planner Wanstead",
    "financial adviser East London",
    "investment advice Wanstead",
    "pension advice London",
    "mortgage adviser Wanstead",
    "retirement planning East London",
    "protection insurance",
    "independent financial adviser",
    "IFA Wanstead",
    "chartered status financial planner",
  ],
  authors: [{ name: "Primavera Financial Partners LLP" }],
  creator: "Primavera Financial Partners LLP",
  publisher: "Primavera Financial Partners LLP",
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
    url: "https://primaverafp.com",
    siteName: "Primavera Financial Partners",
    title: "Primavera Financial Partners | Chartered Financial Planners in Wanstead",
    description:
      "Chartered Financial Planners providing expert independent advice on investments, pensions, mortgages, protection and retirement planning from our Wanstead office.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Primavera Financial Partners - Chartered Financial Planners in Wanstead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Primavera Financial Partners | Chartered Financial Planners",
    description:
      "Chartered Financial Planners in Wanstead, East London. Expert independent advice on investments, pensions, mortgages and more.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://primaverafp.com",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Wanstead, London",
    "geo.position": "51.5757;0.0286",
    ICBM: "51.5757, 0.0286",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://primaverafp.com/#organization",
  name: "Primavera Financial Partners LLP",
  alternateName: "Primavera Financial Partners",
  description:
    "Chartered Financial Planners providing expert independent advice on investments, pensions, mortgages, protection and retirement planning in Wanstead, East London.",
  url: "https://primaverafp.com",
  telephone: "+442085329652",
  email: "admin@primaverafp.com",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "East London",
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
          description: "Comprehensive pension advice including workplace pensions, SIPPs, and retirement income strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgage Advice",
          description: "Expert mortgage advice for purchases, remortgages, and buy-to-let properties.",
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
          name: "Retirement Planning",
          description: "Comprehensive retirement planning to ensure a comfortable and secure future.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Primavera Financial Partners Wanstead Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "87a High Street",
      addressLocality: "Wanstead",
      addressRegion: "London",
      postalCode: "E11 2AE",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5757,
      longitude: 0.0286,
    },
    telephone: "+442085329652",
  },
  sameAs: [
    "https://primaverafp.com",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Chartered Financial Planner",
    recognizedBy: {
      "@type": "Organization",
      name: "Chartered Insurance Institute",
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://primaverafp.com/#localbusiness",
  name: "Primavera Financial Partners LLP",
  image: "https://primaverafp.com/logo.png",
  telephone: "+442085329652",
  email: "admin@primaverafp.com",
  url: "https://primaverafp.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "87a High Street",
    addressLocality: "Wanstead",
    addressRegion: "London",
    postalCode: "E11 2AE",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5757,
    longitude: 0.0286,
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
  "@id": "https://primaverafp.com/#website",
  url: "https://primaverafp.com",
  name: "Primavera Financial Partners",
  description: "Chartered Financial Planners in Wanstead, East London",
  publisher: {
    "@id": "https://primaverafp.com/#organization",
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
