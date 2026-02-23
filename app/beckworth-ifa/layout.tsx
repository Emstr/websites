import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Beckworth Financial Services | Independent Financial Advisers in Exeter, Devon",
    template: "%s | Beckworth Financial Services",
  },
  description:
    "Independent financial advice from Beckworth Financial Services Limited, established 2001. Investment management, pensions, inheritance tax planning, care home fees planning and life insurance in Exeter, Devon. FCA 430007.",
  keywords: [
    "financial adviser Exeter",
    "independent financial adviser Devon",
    "IFA Exeter",
    "pension advice Exeter",
    "investment management Exeter",
    "care home fees planning Devon",
    "inheritance tax planning Exeter",
    "life insurance Exeter",
    "Beckworth Financial Services",
    "financial planning Devon",
    "retirement planning Exeter",
    "portfolio management Devon",
  ],
  authors: [{ name: "Beckworth Financial Services Limited" }],
  creator: "Beckworth Financial Services Limited",
  publisher: "Beckworth Financial Services Limited",
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
    url: "https://beckworthifa.co.uk",
    siteName: "Beckworth Financial Services",
    title: "Beckworth Financial Services | Independent Financial Advisers Since 2001",
    description:
      "Independent financial advice from an established firm serving Exeter and Devon since 2001. Specialists in investment management, pensions, inheritance tax planning and care home fees planning.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Beckworth Financial Services - Independent Financial Advisers Since 2001",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beckworth Financial Services | Independent Financial Advisers",
    description:
      "Independent financial advice in Exeter and Devon since 2001. Specialists in care home fees planning.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://beckworthifa.co.uk",
  },
  other: {
    "geo.region": "GB-DEV",
    "geo.placename": "Exeter",
    "geo.position": "50.7231;-3.5268",
    ICBM: "50.7231, -3.5268",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://beckworthifa.co.uk/#organization",
  name: "Beckworth Financial Services Limited",
  alternateName: "Beckworth IFA",
  description:
    "Independent financial advice including investment management, pensions, inheritance tax planning, care home fees planning and life insurance. Established 2001, serving Exeter and Devon.",
  url: "https://beckworthifa.co.uk",
  telephone: "+441392678555",
  email: "enquiries@ifahelpline.com",
  foundingDate: "2001",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Exeter",
    },
    {
      "@type": "AdministrativeArea",
      name: "Devon",
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
          name: "Investment Management",
          description: "Comprehensive portfolio management and investment advice tailored to your financial goals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Advice",
          description: "Expert pension planning including workplace pensions, SIPPs, and retirement income strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inheritance Tax Mitigation",
          description: "Strategic planning to minimise inheritance tax and protect your estate for future generations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Care Home Fees Planning",
          description: "Specialist advice on protecting capital and managing finances for care home fees.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Life Insurance",
          description: "Life assurance and protection planning to safeguard your family's financial future.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Beckworth Financial Services Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "30 Southernhay East",
      addressLocality: "Exeter",
      addressRegion: "Devon",
      postalCode: "EX1 1NS",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.7231,
      longitude: -3.5268,
    },
    telephone: "+441392678555",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://beckworthifa.co.uk/#localbusiness",
  name: "Beckworth Financial Services",
  image: "https://beckworthifa.co.uk/logo.png",
  telephone: "+441392678555",
  email: "enquiries@ifahelpline.com",
  url: "https://beckworthifa.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 Southernhay East",
    addressLocality: "Exeter",
    addressRegion: "Devon",
    postalCode: "EX1 1NS",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.7231,
    longitude: -3.5268,
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
  "@id": "https://beckworthifa.co.uk/#website",
  url: "https://beckworthifa.co.uk",
  name: "Beckworth Financial Services",
  description: "Independent financial advice in Exeter and Devon since 2001. Specialists in care home fees planning.",
  publisher: {
    "@id": "https://beckworthifa.co.uk/#organization",
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
