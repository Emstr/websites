import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Face2Face Advice | Chartered Financial Planners in Glasgow & Lanarkshire",
    template: "%s | Face2Face Advice",
  },
  description:
    "Chartered Financial Planners offering home visits throughout Glasgow, Lanarkshire and Central Scotland. Pension drawdown, annuities, investments and life cover from DM Pension & Investment Solutions Ltd. FCA 758771.",
  keywords: [
    "financial adviser Glasgow",
    "chartered financial planner Glasgow",
    "IFA Lanarkshire",
    "pension advice Glasgow",
    "pension drawdown advice",
    "investment advice Scotland",
    "financial planner Uddingston",
    "pension consolidation Glasgow",
    "pension transfer advice",
    "home visit financial adviser",
    "Face2Face Advice",
    "DM Pension & Investment Solutions",
    "retirement planning Scotland",
    "annuity advice Glasgow",
    "life cover Lanarkshire",
  ],
  authors: [{ name: "DM Pension & Investment Solutions Ltd trading as Face2Face Advice" }],
  creator: "DM Pension & Investment Solutions Ltd trading as Face2Face Advice",
  publisher: "DM Pension & Investment Solutions Ltd trading as Face2Face Advice",
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
    url: "https://face2faceadvice.co.uk",
    siteName: "Face2Face Advice",
    title: "Face2Face Advice | Chartered Financial Planners - Glasgow & Lanarkshire",
    description:
      "Father and son Chartered Financial Planners with 40+ years combined experience. Home visits throughout Glasgow, Lanarkshire and Central Scotland. Pensions, investments and life cover.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Face2Face Advice - Chartered Financial Planners, Glasgow & Lanarkshire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Face2Face Advice | Chartered Financial Planners",
    description:
      "Home visit financial advice throughout Glasgow, Lanarkshire and Central Scotland. 40+ years combined experience.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://face2faceadvice.co.uk",
  },
  other: {
    "geo.region": "GB-GLG",
    "geo.placename": "Glasgow",
    "geo.position": "55.8188;-4.0860",
    ICBM: "55.8188, -4.0860",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://face2faceadvice.co.uk/#organization",
  name: "DM Pension & Investment Solutions Ltd trading as Face2Face Advice",
  alternateName: "Face2Face Advice",
  description:
    "Chartered Financial Planners offering home visits throughout Glasgow, Lanarkshire and Central Scotland. Specialist pension drawdown, annuities, pension consolidation, pension transfers, investment advice and life cover.",
  url: "https://face2faceadvice.co.uk",
  telephone: ["+441698815006", "+441412866687"],
  email: "info@face2faceadvice.co.uk",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Glasgow",
    },
    {
      "@type": "AdministrativeArea",
      name: "Lanarkshire",
    },
    {
      "@type": "AdministrativeArea",
      name: "Central Scotland",
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
          name: "Pension Drawdown",
          description: "Expert advice on accessing your pension flexibly through drawdown, tailored to your retirement income needs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Annuities",
          description: "Guidance on securing a guaranteed retirement income through annuity options from across the market.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Consolidation",
          description: "Consolidate multiple pension pots into one manageable plan for greater clarity and potential savings.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Advice",
          description: "Personalised investment planning tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Life Cover",
          description: "Protection planning to safeguard your family with life assurance and critical illness cover.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Face2Face Advice Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 Leesland",
      addressLocality: "Uddingston, Glasgow",
      addressRegion: "Scotland",
      postalCode: "G71 6TW",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.8188,
      longitude: -4.0860,
    },
    telephone: "+441698815006",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://face2faceadvice.co.uk/#localbusiness",
  name: "Face2Face Advice",
  image: "https://face2faceadvice.co.uk/logo.png",
  telephone: "+441698815006",
  email: "info@face2faceadvice.co.uk",
  url: "https://face2faceadvice.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 Leesland",
    addressLocality: "Uddingston, Glasgow",
    addressRegion: "Scotland",
    postalCode: "G71 6TW",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.8188,
    longitude: -4.0860,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://face2faceadvice.co.uk/#website",
  url: "https://face2faceadvice.co.uk",
  name: "Face2Face Advice",
  description: "Chartered Financial Planners offering home visits throughout Glasgow, Lanarkshire and Central Scotland",
  publisher: {
    "@id": "https://face2faceadvice.co.uk/#organization",
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
