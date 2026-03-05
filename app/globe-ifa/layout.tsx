import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Globe Independent Financial Advisors | Financial Planning in Twickenham & South West London",
    template: "%s | Globe Independent Financial Advisors",
  },
  description:
    "Independent financial advisors with 30+ years experience serving South West London and the Home Counties. Investment planning, retirement, pensions, estate planning and US citizen tax compliance.",
  keywords: [
    "financial adviser",
    "independent financial advisor",
    "investment planning",
    "retirement planning",
    "pension advice",
    "estate planning",
    "inheritance tax",
    "US citizen tax compliance",
    "Twickenham financial adviser",
    "South West London financial planning",
    "corporate financial services",
    "mortgage advice",
    "protection insurance",
    "financial planning UK",
  ],
  authors: [{ name: "Globe Independent Financial Advisors" }],
  creator: "Globe Independent Financial Advisors",
  publisher: "Globe Independent Financial Advisors",
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
    url: "https://globeifa.co.uk",
    siteName: "Globe Independent Financial Advisors",
    title: "Globe Independent Financial Advisors | Trusted Financial Planning Since 1994",
    description:
      "Expert independent financial advisors providing investment planning, retirement advice, estate planning and specialist US citizen tax compliance from Twickenham, South West London.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Globe Independent Financial Advisors - Trusted Financial Planning Since 1994",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Globe Independent Financial Advisors | Financial Planning",
    description:
      "Independent financial advisors with 30+ years experience in Twickenham, South West London.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://globeifa.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Twickenham",
    "geo.position": "51.4452;-0.3262",
    ICBM: "51.4452, -0.3262",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://globeifa.co.uk/#organization",
  name: "Globe Independent Financial Advisors",
  alternateName: "Globe IFA",
  description:
    "Independent financial advisors with 30+ years experience providing investment planning, retirement advice, pension planning, estate planning, protection, mortgages, corporate services and specialist US citizen tax compliance.",
  url: "https://globeifa.co.uk",
  telephone: "+442088910711",
  email: "hello@globeifa.co.uk",
  foundingDate: "1994",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Twickenham",
    },
    {
      "@type": "AdministrativeArea",
      name: "South West London",
    },
    {
      "@type": "AdministrativeArea",
      name: "Home Counties",
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
          name: "Investment Planning",
          description: "Bespoke investment strategies tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Planning",
          description: "Comprehensive retirement planning covering pre-retirement, active retirement and later life stages.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Planning & Consolidation",
          description: "Expert pension advice including consolidation, transfers and drawdown strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estate Planning & Inheritance Tax",
          description: "Strategic estate planning to protect your wealth and minimise inheritance tax.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protection",
          description: "Life insurance, critical illness cover and income protection for individuals and families.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "US Citizen Tax Compliance",
          description: "Specialist financial advice for US citizens living in the UK, navigating complex cross-border tax obligations.",
        },
      },
    ],
  },
  location: [
    {
      "@type": "Place",
      name: "Globe IFA Twickenham Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Globe House, 1 Chertsey Road, St Margarets",
        addressLocality: "Twickenham",
        addressRegion: "Middlesex",
        postalCode: "TW1 1LR",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.4452,
        longitude: -0.3262,
      },
      telephone: "+442088910711",
    },
  ],
  sameAs: [
    "https://www.globeifa.co.uk",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://globeifa.co.uk/#localbusiness",
  name: "Globe Independent Financial Advisors",
  image: "https://globeifa.co.uk/logo.png",
  telephone: "+442088910711",
  email: "hello@globeifa.co.uk",
  url: "https://globeifa.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Globe House, 1 Chertsey Road, St Margarets",
    addressLocality: "Twickenham",
    addressRegion: "Middlesex",
    postalCode: "TW1 1LR",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4452,
    longitude: -0.3262,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:30",
    },
  ],
  priceRange: "$$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://globeifa.co.uk/#website",
  url: "https://globeifa.co.uk",
  name: "Globe Independent Financial Advisors",
  description: "Independent financial advisors with 30+ years experience in Twickenham, South West London",
  publisher: {
    "@id": "https://globeifa.co.uk/#organization",
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
