import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Shepherd Independent Financial Advisers | Financial Advice in Sheffield",
    template: "%s | Shepherd Independent Financial Advisers",
  },
  description:
    "Independent financial advisers in Sheffield, South Yorkshire. Family-run firm offering personal financial advice on pensions, investments, mortgages, and protection since 2005.",
  keywords: [
    "financial adviser Sheffield",
    "independent financial adviser",
    "pension advice Sheffield",
    "investment advice Sheffield",
    "mortgage adviser Sheffield",
    "protection insurance Sheffield",
    "financial planning South Yorkshire",
    "Shepherd IFA",
    "family financial adviser",
    "retirement planning Sheffield",
    "financial advice South Yorkshire",
    "IFA Sheffield",
  ],
  authors: [{ name: "Shepherd Independent Financial Advisers Limited" }],
  creator: "Shepherd Independent Financial Advisers Limited",
  publisher: "Shepherd Independent Financial Advisers Limited",
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
    url: "https://shepherd4advice.co.uk",
    siteName: "Shepherd Independent Financial Advisers",
    title: "Shepherd Independent Financial Advisers | Personal Financial Advice in Sheffield",
    description:
      "Family-run independent financial advisers in Sheffield. Jane and Paul Shepherd offer personal, dedicated financial advice on pensions, investments, mortgages, and protection.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shepherd Independent Financial Advisers - Personal Financial Advice in Sheffield",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shepherd Independent Financial Advisers | Sheffield",
    description:
      "Family-run independent financial advisers providing personal, dedicated service in Sheffield since 2005.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://shepherd4advice.co.uk",
  },
  other: {
    "geo.region": "GB-SYK",
    "geo.placename": "Sheffield",
    "geo.position": "53.3498;-1.5550",
    ICBM: "53.3498, -1.5550",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://shepherd4advice.co.uk/#organization",
  name: "Shepherd Independent Financial Advisers Limited",
  alternateName: "Shepherd IFA",
  description:
    "Family-run independent financial advisers in Sheffield offering personal financial advice on pensions, investments, mortgages, and protection since 2005.",
  url: "https://shepherd4advice.co.uk",
  telephone: "+441142505260",
  foundingDate: "2005",
  priceRange: "$$",
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
          name: "Financial Planning",
          description: "Comprehensive financial planning tailored to your personal circumstances and goals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Advice",
          description: "Expert pension advice including workplace pensions, SIPPs, and retirement planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Advice",
          description: "Independent investment advice to help you grow and protect your wealth.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgage Advice",
          description: "Whole-of-market mortgage advice for home buyers and remortgages.",
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
    name: "Shepherd IFA Sheffield Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hill Top House, 302 Ringinglow Road",
      addressLocality: "Sheffield",
      addressRegion: "South Yorkshire",
      postalCode: "S11 7PX",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.3498,
      longitude: -1.555,
    },
    telephone: "+441142505260",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://shepherd4advice.co.uk/#localbusiness",
  name: "Shepherd Independent Financial Advisers Limited",
  image: "https://shepherd4advice.co.uk/logo.png",
  telephone: "+441142505260",
  url: "https://shepherd4advice.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hill Top House, 302 Ringinglow Road",
    addressLocality: "Sheffield",
    addressRegion: "South Yorkshire",
    postalCode: "S11 7PX",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.3498,
    longitude: -1.555,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://shepherd4advice.co.uk/#website",
  url: "https://shepherd4advice.co.uk",
  name: "Shepherd Independent Financial Advisers",
  description: "Family-run independent financial advisers in Sheffield, South Yorkshire",
  publisher: {
    "@id": "https://shepherd4advice.co.uk/#organization",
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
