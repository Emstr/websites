import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "DWJ Wealth Management | Tailored Financial Advice in Swansea",
    template: "%s | DWJ Wealth Management",
  },
  description:
    "Tailored wealth management for private and corporate clients in Swansea and South Wales. Expert financial advice, equity release, and pension planning from FCA regulated advisers.",
  keywords: [
    "wealth management Swansea",
    "financial adviser Swansea",
    "equity release Swansea",
    "corporate financial advice Wales",
    "private client wealth management",
    "pension advice Swansea",
    "IFA Swansea",
    "financial planning Wales",
    "DWJ Wealth Management",
    "Gorseinon financial adviser",
    "investment advice South Wales",
    "retirement planning Swansea",
  ],
  authors: [{ name: "DWJ Wealth Management Ltd" }],
  creator: "DWJ Wealth Management Ltd",
  publisher: "DWJ Wealth Management Ltd",
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
    url: "https://dwjwealth.co.uk",
    siteName: "DWJ Wealth Management",
    title: "DWJ Wealth Management | Tailored Financial Advice in Swansea",
    description:
      "Expert wealth management for private and corporate clients in Swansea and South Wales. Equity release, pension planning, and tailored financial advice.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DWJ Wealth Management - Tailored Financial Advice in Swansea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DWJ Wealth Management | Wealth Management in Swansea",
    description:
      "Tailored wealth management for private and corporate clients in Swansea and South Wales.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://dwjwealth.co.uk",
  },
  other: {
    "geo.region": "GB-WLS",
    "geo.placename": "Swansea",
    "geo.position": "51.6710;-4.0665",
    ICBM: "51.6710, -4.0665",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://dwjwealth.co.uk/#organization",
  name: "DWJ Wealth Management Ltd",
  alternateName: "DWJ Wealth Management",
  description:
    "Tailored wealth management for private and corporate clients. Expert financial advice including equity release, pension planning, and investment management in Swansea and South Wales.",
  url: "https://dwjwealth.co.uk",
  telephone: "+441639825066",
  email: "info@dwjwealth.co.uk",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Swansea",
    },
    {
      "@type": "AdministrativeArea",
      name: "South Wales",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wealth Management Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wealth Management",
          description: "Tailored wealth management strategies for private and corporate clients.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private Client Advice",
          description: "Personalised financial planning for individuals and families.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Client Advice",
          description: "Comprehensive financial solutions for businesses and their employees.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Equity Release",
          description: "Expert equity release advice to help you access the value in your home.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "DWJ Wealth Management Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Argyle House, 10 West Street",
      addressLocality: "Gorseinon",
      addressRegion: "Swansea",
      postalCode: "SA4 4AA",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.671,
      longitude: -4.0665,
    },
    telephone: "+441639825066",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://dwjwealth.co.uk/#localbusiness",
  name: "DWJ Wealth Management Ltd",
  image: "https://dwjwealth.co.uk/logo.png",
  telephone: "+441639825066",
  email: "info@dwjwealth.co.uk",
  url: "https://dwjwealth.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Argyle House, 10 West Street",
    addressLocality: "Gorseinon",
    addressRegion: "Swansea",
    postalCode: "SA4 4AA",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.671,
    longitude: -4.0665,
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
  "@id": "https://dwjwealth.co.uk/#website",
  url: "https://dwjwealth.co.uk",
  name: "DWJ Wealth Management",
  description: "Tailored wealth management for private and corporate clients in Swansea and South Wales",
  publisher: {
    "@id": "https://dwjwealth.co.uk/#organization",
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
