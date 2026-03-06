import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Digney Grant Financial Planning | Independent Financial Advisers in Newry",
    template: "%s | Digney Grant Financial Planning",
  },
  description:
    "Independent financial planning, mortgage advice, and insurance services in Newry, Northern Ireland. Over 40 years of trusted, whole-of-market advice. FCA Number 702579.",
  keywords: [
    "financial adviser Newry",
    "mortgage broker Newry",
    "insurance Newry",
    "financial planning Northern Ireland",
    "independent financial adviser",
    "mortgage advice Newry",
    "personal insurance",
    "commercial insurance",
    "whole-of-market advice",
    "Digney Grant",
    "financial planning Newry",
    "life insurance Northern Ireland",
  ],
  authors: [{ name: "Digney Grant Financial Planning Ltd" }],
  creator: "Digney Grant Financial Planning Ltd",
  publisher: "Digney Grant Financial Planning Ltd",
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
    url: "https://digneygrantfp.com",
    siteName: "Digney Grant Financial Planning",
    title: "Digney Grant Financial Planning | Independent Advisers in Newry",
    description:
      "Over 40 years of trusted financial planning, mortgage advice, and insurance services in Newry, Northern Ireland. Your one-stop shop for financial peace of mind.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digney Grant Financial Planning - Independent Advisers in Newry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digney Grant Financial Planning | Newry, Northern Ireland",
    description:
      "Independent financial planning, mortgage advice, and insurance services. Over 40 years serving Newry and Northern Ireland.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://digneygrantfp.com",
  },
  other: {
    "geo.region": "GB-NIR",
    "geo.placename": "Newry",
    "geo.position": "54.1751;-6.3402",
    ICBM: "54.1751, -6.3402",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://digneygrantfp.com/#organization",
  name: "Digney Grant Financial Planning Ltd",
  alternateName: "Digney Grant",
  description:
    "Independent financial planning, mortgage advice, and insurance services with over 40 years of experience in Newry, Northern Ireland.",
  url: "https://digneygrantfp.com",
  telephone: "+442830828880",
  email: "info@digneygrant.co.uk",
  foundingDate: "1985",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Newry",
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
          name: "Financial Planning",
          description: "Comprehensive financial planning tailored to your goals and circumstances.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgage Advice",
          description: "Whole-of-market mortgage advice from dedicated mortgage brokers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personal Insurance",
          description: "Life assurance, critical illness cover, income protection and home insurance.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Insurance",
          description: "Tailored business insurance solutions for companies of all sizes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Independent Financial Advice",
          description: "Whole-of-market independent financial advice from qualified advisers.",
        },
      },
    ],
  },
  location: [
    {
      "@type": "Place",
      name: "Digney Grant Financial Planning Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "41-43 Downshire Court",
        addressLocality: "Newry",
        addressRegion: "Northern Ireland",
        postalCode: "BT34 1FD",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 54.1751,
        longitude: -6.3402,
      },
      telephone: "+442830828880",
    },
  ],
  sameAs: [
    "https://digneygrantfp.com",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://digneygrantfp.com/#localbusiness",
  name: "Digney Grant Financial Planning Ltd",
  image: "https://digneygrantfp.com/logo.png",
  telephone: "+442830828880",
  email: "info@digneygrant.co.uk",
  url: "https://digneygrantfp.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "41-43 Downshire Court",
    addressLocality: "Newry",
    addressRegion: "Northern Ireland",
    postalCode: "BT34 1FD",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 54.1751,
    longitude: -6.3402,
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
  "@id": "https://digneygrantfp.com/#website",
  url: "https://digneygrantfp.com",
  name: "Digney Grant Financial Planning",
  description: "Independent financial planning, mortgage advice, and insurance services in Newry, Northern Ireland",
  publisher: {
    "@id": "https://digneygrantfp.com/#organization",
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
