import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Financial Professionals (NI) Ltd | Financial Advisers in Belfast & Lisburn",
    template: "%s | Financial Professionals (NI) Ltd",
  },
  description:
    "Trusted financial advisers in Belfast and Lisburn, Northern Ireland. Personal pensions, auto enrolment, savings & investments, and corporate financial services. As seen on Belfast Telegraph and Downtown Radio.",
  keywords: [
    "financial adviser Belfast",
    "financial adviser Lisburn",
    "financial adviser Northern Ireland",
    "personal pensions Belfast",
    "auto enrolment Northern Ireland",
    "savings and investments Belfast",
    "corporate financial services NI",
    "pension advice Belfast",
    "financial planning Northern Ireland",
    "IFA Belfast",
    "independent financial adviser Lisburn",
    "retirement planning Northern Ireland",
  ],
  authors: [{ name: "Financial Professionals (NI) Ltd" }],
  creator: "Financial Professionals (NI) Ltd",
  publisher: "Financial Professionals (NI) Ltd",
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
    url: "https://financialadvisernorthernireland.com",
    siteName: "Financial Professionals (NI) Ltd",
    title: "Financial Professionals (NI) Ltd | Trusted Financial Advisers in Belfast & Lisburn",
    description:
      "Expert financial advisers providing personal pensions, auto enrolment, savings & investments, and corporate services from our offices in Belfast and Lisburn. Media-trusted experts featured on Belfast Telegraph and Downtown Radio.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Financial Professionals (NI) Ltd - Trusted Financial Advisers in Belfast & Lisburn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Professionals (NI) Ltd | Financial Advisers Belfast & Lisburn",
    description:
      "Trusted financial advisers in Belfast and Lisburn, Northern Ireland. Personal pensions, auto enrolment, savings & investments.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://financialadvisernorthernireland.com",
  },
  other: {
    "geo.region": "GB-NIR",
    "geo.placename": "Belfast",
    "geo.position": "54.5973;-5.9301",
    ICBM: "54.5973, -5.9301",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://financialadvisernorthernireland.com/#organization",
  name: "Financial Professionals (NI) Ltd",
  alternateName: "Financial Professionals NI",
  description:
    "Trusted financial advisers in Belfast and Lisburn providing personal pensions, auto enrolment, savings & investments, and corporate financial services. Media experts featured on Belfast Telegraph and Downtown Radio.",
  url: "https://financialadvisernorthernireland.com",
  telephone: "+442890364477",
  email: "info@fpni.co.uk",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Belfast",
    },
    {
      "@type": "City",
      name: "Lisburn",
    },
    {
      "@type": "AdministrativeArea",
      name: "Northern Ireland",
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
          name: "Personal Pensions",
          description: "Expert pension advice including workplace pensions, SIPPs, and retirement income planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Auto Enrolment",
          description: "Complete workplace pension auto enrolment solutions for Northern Ireland businesses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Savings & Investments",
          description: "Bespoke savings and investment strategies tailored to your financial goals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Financial Services",
          description: "Comprehensive financial services for businesses including group pensions and employee benefits.",
        },
      },
    ],
  },
  location: [
    {
      "@type": "Place",
      name: "Financial Professionals NI Belfast Office",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Belfast",
        addressRegion: "Northern Ireland",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 54.5973,
        longitude: -5.9301,
      },
      telephone: "+442890364477",
    },
    {
      "@type": "Place",
      name: "Financial Professionals NI Lisburn Office",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lisburn",
        addressRegion: "Northern Ireland",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 54.5162,
        longitude: -6.058,
      },
      telephone: "+442892610536",
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://financialadvisernorthernireland.com/#localbusiness",
  name: "Financial Professionals (NI) Ltd",
  telephone: "+442890364477",
  email: "info@fpni.co.uk",
  url: "https://financialadvisernorthernireland.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belfast",
    addressRegion: "Northern Ireland",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 54.5973,
    longitude: -5.9301,
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
  "@id": "https://financialadvisernorthernireland.com/#website",
  url: "https://financialadvisernorthernireland.com",
  name: "Financial Professionals (NI) Ltd",
  description: "Trusted financial advisers in Belfast and Lisburn, Northern Ireland",
  publisher: {
    "@id": "https://financialadvisernorthernireland.com/#organization",
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
