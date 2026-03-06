import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Chris Leach & Associates | Independent Financial Advisers in Cardiff, South Wales",
    template: "%s | Chris Leach & Associates",
  },
  description:
    "Independent financial advisers in Cardiff, South Wales with nearly 30 years of experience. Expert advice on retirement planning, investments, pensions, and tax planning. FCA Ref: 563997.",
  keywords: [
    "financial adviser Cardiff",
    "independent financial adviser South Wales",
    "retirement planning Cardiff",
    "pension advice Cardiff",
    "investment advice South Wales",
    "tax planning Cardiff",
    "IFA Cardiff",
    "financial planning Wales",
    "Chris Leach Associates",
    "whole of market financial advice",
    "financial reviews Cardiff",
    "pension transfer advice Wales",
  ],
  authors: [{ name: "Chris Leach and Associates Limited" }],
  creator: "Chris Leach and Associates Limited",
  publisher: "Chris Leach and Associates Limited",
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
    url: "https://chrisleachandassociates.com",
    siteName: "Chris Leach & Associates",
    title: "Chris Leach & Associates | Independent Financial Advisers in Cardiff",
    description:
      "Nearly 30 years of trusted independent financial advice in Cardiff and South Wales. Retirement planning, investments, pensions, and tax planning from FCA-regulated advisers.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chris Leach & Associates - Independent Financial Advisers in Cardiff",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Leach & Associates | Independent Financial Advisers Cardiff",
    description:
      "Nearly 30 years of independent financial advice in Cardiff and South Wales. Retirement planning, investments, pensions, and tax planning.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://chrisleachandassociates.com",
  },
  other: {
    "geo.region": "GB-WLS",
    "geo.placename": "Cardiff",
    "geo.position": "51.5225;-3.2113",
    ICBM: "51.5225, -3.2113",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://chrisleachandassociates.com/#organization",
  name: "Chris Leach and Associates Limited",
  alternateName: "Chris Leach & Associates",
  description:
    "Independent financial advisers in Cardiff, South Wales with nearly 30 years of experience. Specialising in retirement planning, investments, pensions, and tax planning.",
  url: "https://chrisleachandassociates.com",
  telephone: "+442920814070",
  email: "enq@cla-ifa.co.uk",
  foundingDate: "1997",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Cardiff",
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
    name: "Financial Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Planning",
          description: "Comprehensive retirement planning to help you achieve the lifestyle you deserve in later life.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Advice",
          description: "Independent, whole-of-market investment advice tailored to your goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Planning",
          description: "Expert pension advice including transfers, consolidation, and drawdown strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tax Planning",
          description: "Strategic tax planning to optimise your wealth and minimise your tax liability.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Financial Reviews",
          description: "Regular financial health checks to ensure your plans remain on track as life changes.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Chris Leach & Associates Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Telynfa, Main Road, Gwaelod-y-Garth",
      addressLocality: "Cardiff",
      addressRegion: "South Wales",
      postalCode: "CF15 9HJ",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5225,
      longitude: -3.2113,
    },
    telephone: "+442920814070",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://chrisleachandassociates.com/#localbusiness",
  name: "Chris Leach and Associates Limited",
  image: "https://chrisleachandassociates.com/logo.png",
  telephone: "+442920814070",
  email: "enq@cla-ifa.co.uk",
  url: "https://chrisleachandassociates.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Telynfa, Main Road, Gwaelod-y-Garth",
    addressLocality: "Cardiff",
    addressRegion: "South Wales",
    postalCode: "CF15 9HJ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5225,
    longitude: -3.2113,
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
  identifier: [
    {
      "@type": "PropertyValue",
      name: "FCA Reference Number",
      value: "563997",
    },
    {
      "@type": "PropertyValue",
      name: "Company Number",
      value: "1752622",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://chrisleachandassociates.com/#website",
  url: "https://chrisleachandassociates.com",
  name: "Chris Leach & Associates",
  description: "Independent financial advisers in Cardiff, South Wales with nearly 30 years of experience",
  publisher: {
    "@id": "https://chrisleachandassociates.com/#organization",
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
