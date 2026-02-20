import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Keeley & Co | Independent Financial Advisers in Birmingham Since 1928",
    template: "%s | Keeley & Co",
  },
  description:
    "Independent financial advisers in Birmingham's Jewellery Quarter since 1928. Chartered Financial Planner on staff. Life planning, wealth management, pensions, investments and insurance.",
  keywords: [
    "financial adviser Birmingham",
    "independent financial adviser",
    "IFA Birmingham",
    "Keeley and Co",
    "chartered financial planner",
    "wealth management Birmingham",
    "pension advice Birmingham",
    "life planning",
    "investments Birmingham",
    "life insurance adviser",
    "Jewellery Quarter financial adviser",
    "financial planning Birmingham",
  ],
  authors: [{ name: "Keeley & Co" }],
  creator: "Keeley & Co",
  publisher: "Keeley & Co",
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
    url: "https://keeleys.co.uk",
    siteName: "Keeley & Co",
    title: "Keeley & Co | Independent Financial Advisers Since 1928",
    description:
      "Nearly a century of trusted financial advice from Birmingham's Jewellery Quarter. Chartered Financial Planner, independent advice, life planning and wealth management.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Keeley & Co - Independent Financial Advisers Since 1928",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keeley & Co | Independent Financial Advisers Since 1928",
    description:
      "Nearly a century of trusted financial advice from Birmingham's Jewellery Quarter. Chartered Financial Planner on staff.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://keeleys.co.uk",
  },
  other: {
    "geo.region": "GB-BIR",
    "geo.placename": "Birmingham",
    "geo.position": "52.4862;-1.9078",
    ICBM: "52.4862, -1.9078",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://keeleys.co.uk/#organization",
  name: "Keeley & Co",
  description:
    "Independent financial advisers in Birmingham since 1928. Chartered Financial Planner on staff providing life planning, wealth management, pensions, investments and insurance advice.",
  url: "https://keeleys.co.uk",
  telephone: "+441212361288",
  email: "contact@keeleys.co.uk",
  foundingDate: "1928",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Birmingham",
    },
    {
      "@type": "AdministrativeArea",
      name: "West Midlands",
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
          name: "Independent Financial Advice",
          description: "Whole-of-market independent financial advice tailored to your personal circumstances.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Life Planning",
          description: "Comprehensive life planning to help you achieve your personal and financial goals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wealth Management",
          description: "Holistic wealth management for individuals and families.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pensions",
          description: "Expert pension advice including workplace pensions, SIPPs and retirement planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investments",
          description: "Investment planning and portfolio management tailored to your goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Life Insurance",
          description: "Life insurance, critical illness cover and income protection advice.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "General Insurance",
          description: "General insurance advice for individuals and businesses.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Keeley & Co",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 St Pauls Terrace, Northwood St",
      addressLocality: "Birmingham",
      addressRegion: "West Midlands",
      postalCode: "B3 1TH",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.4862,
      longitude: -1.9078,
    },
    telephone: "+441212361288",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://keeleys.co.uk/#localbusiness",
  name: "Keeley & Co",
  image: "https://keeleys.co.uk/logo.png",
  telephone: "+441212361288",
  email: "contact@keeleys.co.uk",
  url: "https://keeleys.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 St Pauls Terrace, Northwood St",
    addressLocality: "Birmingham",
    addressRegion: "West Midlands",
    postalCode: "B3 1TH",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.4862,
    longitude: -1.9078,
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
  "@id": "https://keeleys.co.uk/#website",
  url: "https://keeleys.co.uk",
  name: "Keeley & Co",
  description: "Independent financial advisers in Birmingham since 1928",
  publisher: {
    "@id": "https://keeleys.co.uk/#organization",
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
