import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Holder & Combes | Chartered Financial Planners in the City of London",
    template: "%s | Holder & Combes — Chartered Financial Planners",
  },
  description:
    "Chartered Financial Planners in the City of London. Expert investment management, retirement planning, pensions, estate planning, wills and tax planning from our St Paul's office.",
  keywords: [
    "chartered financial planner",
    "chartered financial planners city of london",
    "financial adviser city of london",
    "wealth management london",
    "investment management",
    "retirement planning",
    "pensions advice",
    "estate planning",
    "wills",
    "tax planning",
    "St Paul's financial planner",
    "independent financial adviser london",
    "IFA city of london",
    "chartered financial planner near me",
  ],
  authors: [{ name: "Holder & Combes" }],
  creator: "Holder & Combes",
  publisher: "Holder & Combes",
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
    url: "https://holderandcombes.co.uk",
    siteName: "Holder & Combes — Chartered Financial Planners",
    title: "Holder & Combes | Chartered Financial Planners in the City of London",
    description:
      "Chartered Financial Planners providing expert investment management, retirement planning, estate planning, wills and tax planning from our prestigious St Paul's office in the City of London.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Holder & Combes — Chartered Financial Planners in the City of London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holder & Combes | Chartered Financial Planners, City of London",
    description:
      "Chartered Financial Planners in the City of London. Investment management, retirement planning, estate planning, wills and tax planning.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://holderandcombes.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "City of London",
    "geo.position": "51.5155;-0.0984",
    ICBM: "51.5155, -0.0984",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://holderandcombes.co.uk/#organization",
  name: "Holder & Combes",
  alternateName: "Holder and Combes",
  description:
    "Chartered Financial Planners providing expert investment management, retirement planning, pensions advice, estate planning, wills and tax planning from the City of London.",
  url: "https://holderandcombes.co.uk",
  telephone: "+442071012817",
  email: "info@holderandcombes.co.uk",
  priceRange: "$$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "City of London",
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
          name: "Investment & Wealth Management",
          description: "Bespoke investment strategies and comprehensive wealth management for discerning clients.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Planning",
          description: "Expert retirement planning to ensure a comfortable and secure future.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pensions",
          description: "Comprehensive pension advice including workplace pensions, SIPPs and drawdown strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estate Planning",
          description: "Strategic estate planning to protect and transfer your wealth efficiently.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wills",
          description: "Professional will writing and estate administration services.",
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
    ],
  },
  location: {
    "@type": "Place",
    name: "Holder & Combes — St Paul's Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "20 Little Britain",
      addressLocality: "St Paul's, City of London",
      addressRegion: "London",
      postalCode: "EC1A 7DH",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5155,
      longitude: -0.0984,
    },
    telephone: "+442071012817",
  },
  sameAs: [
    "https://holderandcombes.co.uk",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://holderandcombes.co.uk/#localbusiness",
  name: "Holder & Combes",
  image: "https://holderandcombes.co.uk/logo.png",
  telephone: "+442071012817",
  email: "info@holderandcombes.co.uk",
  url: "https://holderandcombes.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 Little Britain",
    addressLocality: "St Paul's, City of London",
    addressRegion: "London",
    postalCode: "EC1A 7DH",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5155,
    longitude: -0.0984,
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
  "@id": "https://holderandcombes.co.uk/#website",
  url: "https://holderandcombes.co.uk",
  name: "Holder & Combes — Chartered Financial Planners",
  description: "Chartered Financial Planners in the City of London providing expert financial planning and wealth management.",
  publisher: {
    "@id": "https://holderandcombes.co.uk/#organization",
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
