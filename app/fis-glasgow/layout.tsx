import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Financial Independent Solutions | Independent Financial Advice in Bothwell, Glasgow",
    template: "%s | Financial Independent Solutions",
  },
  description:
    "Independent financial advice for individuals and small businesses in Bothwell, Glasgow. Pensions, investments, and whole-of-market advice from Mark McLair, PFS and CII member with 23+ years experience.",
  keywords: [
    "independent financial adviser",
    "financial advice Glasgow",
    "financial adviser Bothwell",
    "pension advice Glasgow",
    "investment advice Scotland",
    "whole of market financial advice",
    "IFA Glasgow",
    "financial planning Bothwell",
    "retirement planning Glasgow",
    "business financial advice Scotland",
    "PFS financial adviser",
    "CII member Glasgow",
  ],
  authors: [{ name: "Financial Independent Solutions Ltd" }],
  creator: "Financial Independent Solutions Ltd",
  publisher: "Financial Independent Solutions Ltd",
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
    url: "https://financialindependentsolutions.co.uk",
    siteName: "Financial Independent Solutions",
    title: "Financial Independent Solutions | Independent Financial Advice in Bothwell, Glasgow",
    description:
      "Expert independent financial advice from Mark McLair, PFS and CII qualified with over 23 years experience. Pensions, investments, and whole-of-market advice from Castle Chambers, Bothwell.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Financial Independent Solutions - Independent Financial Advice in Bothwell, Glasgow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Independent Solutions | Independent Financial Advice",
    description:
      "Independent financial advice for individuals and small businesses in Bothwell, Glasgow. 23+ years experience.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://financialindependentsolutions.co.uk",
  },
  other: {
    "geo.region": "GB-SCT",
    "geo.placename": "Bothwell, Glasgow",
    "geo.position": "55.8050;-4.0710",
    ICBM: "55.8050, -4.0710",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://financialindependentsolutions.co.uk/#organization",
  name: "Financial Independent Solutions Ltd",
  alternateName: "FIS",
  description:
    "Independent financial advice for individuals and small businesses. Pensions, investments, and whole-of-market advice from a PFS and CII qualified adviser with over 23 years experience.",
  url: "https://financialindependentsolutions.co.uk",
  telephone: "+441698854422",
  email: "mmclair@financialindependentsolutions.co.uk",
  foundingDate: "2001",
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
      name: "South Lanarkshire",
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
          name: "Personal Financial Planning",
          description: "Tailored financial plans for individuals, covering all aspects of your financial life.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Advice",
          description: "Comprehensive pension planning including workplace pensions, SIPPs, and retirement income strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Advice",
          description: "Whole-of-market investment advice tailored to your goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Financial Advice",
          description: "Financial planning and advice for small business owners, including workplace pensions and key person protection.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Financial Independent Solutions - Castle Chambers",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Castle Chambers, 67 Main Street",
      addressLocality: "Bothwell",
      addressRegion: "Glasgow",
      postalCode: "G71 8ER",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.805,
      longitude: -4.071,
    },
    telephone: "+441698854422",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://financialindependentsolutions.co.uk/#localbusiness",
  name: "Financial Independent Solutions Ltd",
  image: "https://financialindependentsolutions.co.uk/logo.png",
  telephone: "+441698854422",
  email: "mmclair@financialindependentsolutions.co.uk",
  url: "https://financialindependentsolutions.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Castle Chambers, 67 Main Street",
    addressLocality: "Bothwell",
    addressRegion: "Glasgow",
    postalCode: "G71 8ER",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.805,
    longitude: -4.071,
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
  founder: {
    "@type": "Person",
    name: "Mark McLair",
    jobTitle: "Principal Financial Adviser",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://financialindependentsolutions.co.uk/#website",
  url: "https://financialindependentsolutions.co.uk",
  name: "Financial Independent Solutions",
  description: "Independent financial advice for individuals and small businesses in Bothwell, Glasgow",
  publisher: {
    "@id": "https://financialindependentsolutions.co.uk/#organization",
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
