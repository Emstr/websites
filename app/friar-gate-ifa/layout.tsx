import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Friar Gate Independent Financial Services | Financial Advisers in Derby",
    template: "%s | Friar Gate Independent Financial Services",
  },
  description:
    "Independent financial advisers in Derby offering whole-of-market investment advice, retirement planning, inheritance tax planning, and cost reduction. Based at Pride Park, Derby.",
  keywords: [
    "independent financial adviser Derby",
    "financial adviser Pride Park",
    "IFA Derby",
    "whole of market financial advice",
    "investment advice Derby",
    "retirement planning Derby",
    "inheritance tax planning Derby",
    "pension advice Derbyshire",
    "cost reduction financial adviser",
    "independent financial services Derby",
    "financial planning Pride Park",
    "IFA Derbyshire",
  ],
  authors: [{ name: "Friar Gate Independent Financial Services Ltd" }],
  creator: "Friar Gate Independent Financial Services Ltd",
  publisher: "Friar Gate Independent Financial Services Ltd",
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
    url: "https://friargate.net",
    siteName: "Friar Gate Independent Financial Services",
    title: "Friar Gate Independent Financial Services | Independent Financial Advisers in Derby",
    description:
      "Whole-of-market independent financial advice from Pride Park, Derby. Investment advice, retirement planning, IHT planning, and cost reduction since 2004.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Friar Gate Independent Financial Services - Independent Financial Advisers in Derby",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Friar Gate Independent Financial Services | Financial Advisers Derby",
    description:
      "Whole-of-market independent financial advice from Pride Park, Derby. Over 20 years of trusted expertise.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://friargate.net",
  },
  other: {
    "geo.region": "GB-DBY",
    "geo.placename": "Derby",
    "geo.position": "52.9110;-1.4450",
    ICBM: "52.9110, -1.4450",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://friargate.net/#organization",
  name: "Friar Gate Independent Financial Services Ltd",
  alternateName: "Friar Gate IFS",
  description:
    "Independent whole-of-market financial advisers in Derby offering investment advice, retirement planning, inheritance tax planning, and cost reduction services. Established 2004.",
  url: "https://friargate.net",
  telephone: "+441332438361",
  email: "info@friargate.net",
  foundingDate: "2004",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Derby",
    },
    {
      "@type": "AdministrativeArea",
      name: "Derbyshire",
    },
    {
      "@type": "AdministrativeArea",
      name: "East Midlands",
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
          name: "Investment Advice",
          description: "Whole-of-market investment advice tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Planning",
          description: "Comprehensive retirement planning including pension consolidation, drawdown strategies, and income planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inheritance Tax Planning",
          description: "Specialist inheritance tax planning to protect your wealth for future generations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cost Reduction",
          description: "Review and reduction of existing financial product charges without compromising quality.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Independent Financial Reviews",
          description: "Comprehensive whole-of-market reviews of your existing financial arrangements.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Friar Gate IFS - Pride Park Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 Prospect Place, Millennium Way",
      addressLocality: "Pride Park, Derby",
      addressRegion: "Derbyshire",
      postalCode: "DE24 8HG",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.911,
      longitude: -1.445,
    },
    telephone: "+441332438361",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://friargate.net/#localbusiness",
  name: "Friar Gate Independent Financial Services Ltd",
  image: "https://friargate.net/logo.png",
  telephone: "+441332438361",
  email: "info@friargate.net",
  url: "https://friargate.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 Prospect Place, Millennium Way",
    addressLocality: "Pride Park, Derby",
    addressRegion: "Derbyshire",
    postalCode: "DE24 8HG",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.911,
    longitude: -1.445,
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
  "@id": "https://friargate.net/#website",
  url: "https://friargate.net",
  name: "Friar Gate Independent Financial Services",
  description: "Independent whole-of-market financial advice from Pride Park, Derby",
  publisher: {
    "@id": "https://friargate.net/#organization",
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
