import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Riverpark IFA | Independent Financial Advisers in Glasgow",
    template: "%s | Riverpark IFA",
  },
  description:
    "Independent financial advisers in Glasgow with 30+ years experience. Pensions, investments, life assurance, mortgages and estate management. FCA regulated. Freephone 0800 7836 783.",
  keywords: [
    "financial adviser Glasgow",
    "independent financial adviser",
    "IFA Glasgow",
    "pension advice Glasgow",
    "investment advice Scotland",
    "life assurance Glasgow",
    "mortgage adviser Glasgow",
    "estate management Glasgow",
    "corporate financial advice",
    "financial planning Scotland",
    "retirement planning Glasgow",
    "Riverpark IFA",
  ],
  authors: [{ name: "Riverpark Investment & Financial Consultants Limited" }],
  creator: "Riverpark Investment & Financial Consultants Limited",
  publisher: "Riverpark Investment & Financial Consultants Limited",
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
    url: "https://riverparkifa.com",
    siteName: "Riverpark IFA",
    title: "Riverpark IFA | Independent Financial Advisers in Glasgow",
    description:
      "Experienced independent financial advisers serving Glasgow and wider Scotland. Pensions, investments, life assurance, mortgages, and estate management. FCA Ref 455480.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Riverpark IFA - Independent Financial Advisers in Glasgow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riverpark IFA | Independent Financial Advisers in Glasgow",
    description:
      "Experienced independent financial advisers serving Glasgow and wider Scotland. Freephone 0800 7836 783.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://riverparkifa.com",
  },
  other: {
    "geo.region": "GB-GLG",
    "geo.placename": "Glasgow",
    "geo.position": "55.8440;-4.2310",
    ICBM: "55.8440, -4.2310",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://riverparkifa.com/#organization",
  name: "Riverpark Investment & Financial Consultants Limited",
  alternateName: "Riverpark IFA",
  description:
    "Independent financial advisers in Glasgow providing pensions, investments, life assurance, mortgages, estate management, and corporate financial advice. Advisers with 30+ years experience each.",
  url: "https://riverparkifa.com",
  telephone: "+441415543881",
  email: "enquiries@riverparkifa.com",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Glasgow",
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
    name: "Financial Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pensions",
          description: "Comprehensive pension advice including workplace pensions, SIPPs, and retirement planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investments & Savings",
          description: "Expert investment advice and savings strategies tailored to your financial goals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Life Assurance",
          description: "Protection planning including life assurance and critical illness cover.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgages",
          description: "Mortgage advice for residential and buy-to-let properties across Scotland.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estate Management",
          description: "Estate planning and management to protect and pass on your wealth.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Advice",
          description: "Financial advice for businesses including workplace pensions and corporate planning.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Riverpark IFA Glasgow Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 3 (1-6), 4 Rogart Street",
      addressLocality: "Glasgow",
      addressRegion: "Scotland",
      postalCode: "G40 2AA",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.844,
      longitude: -4.231,
    },
    telephone: "+441415543881",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://riverparkifa.com/#localbusiness",
  name: "Riverpark Investment & Financial Consultants Limited",
  image: "https://riverparkifa.com/logo.png",
  telephone: "+441415543881",
  email: "enquiries@riverparkifa.com",
  url: "https://riverparkifa.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Suite 3 (1-6), 4 Rogart Street",
    addressLocality: "Glasgow",
    addressRegion: "Scotland",
    postalCode: "G40 2AA",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.844,
    longitude: -4.231,
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
  "@id": "https://riverparkifa.com/#website",
  url: "https://riverparkifa.com",
  name: "Riverpark IFA",
  description: "Independent financial advisers in Glasgow, serving Scotland",
  publisher: {
    "@id": "https://riverparkifa.com/#organization",
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
