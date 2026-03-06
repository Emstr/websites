import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Prosperity Financial Solutions | Independent Financial Advisers in Glasgow",
    template: "%s | Prosperity Financial Solutions",
  },
  description:
    "Independent financial advisers in West End, Glasgow. Expert advice on pensions, investments, mortgages, protection, and wealth management. FCA regulated, whole-of-market advice.",
  keywords: [
    "financial adviser Glasgow",
    "independent financial adviser",
    "wealth management Glasgow",
    "pension advice Glasgow",
    "investment planning",
    "mortgage adviser Glasgow",
    "protection insurance",
    "retirement planning",
    "West End Glasgow financial adviser",
    "financial planning Scotland",
    "whole-of-market advice",
    "FCA regulated adviser",
  ],
  authors: [{ name: "Prosperity Financial Solutions" }],
  creator: "Prosperity Financial Solutions",
  publisher: "Prosperity Financial Solutions",
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
    url: "https://prosperityfinancial.co.uk",
    siteName: "Prosperity Financial Solutions",
    title: "Prosperity Financial Solutions | Independent Financial Advisers in Glasgow",
    description:
      "Expert independent financial advisers providing whole-of-market advice on pensions, investments, mortgages, protection, and wealth management from West End, Glasgow.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prosperity Financial Solutions - Independent Financial Advisers in Glasgow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosperity Financial Solutions | Financial Advisers Glasgow",
    description:
      "Independent financial advisers providing whole-of-market advice from West End, Glasgow. Pensions, investments, mortgages, and wealth management.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://prosperityfinancial.co.uk",
  },
  other: {
    "geo.region": "GB-GLG",
    "geo.placename": "Glasgow",
    "geo.position": "55.8724;-4.2900",
    ICBM: "55.8724, -4.2900",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://prosperityfinancial.co.uk/#organization",
  name: "Prosperity Financial Solutions",
  alternateName: "Prosperity Financial",
  description:
    "Independent financial advisers providing whole-of-market advice on pensions, investments, mortgages, protection, and wealth management from West End, Glasgow.",
  url: "https://prosperityfinancial.co.uk",
  telephone: "+441413371346",
  email: "info@prosperityfinancial.co.uk",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Glasgow",
    },
    {
      "@type": "AdministrativeArea",
      name: "Central Scotland",
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
          name: "Independent Financial Advice",
          description: "Whole-of-market financial advice tailored to your individual circumstances and goals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Planning",
          description: "Comprehensive pension advice including workplace pensions, SIPPs, and retirement income strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning",
          description: "Bespoke investment strategies designed to grow your wealth in line with your goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgage Advice",
          description: "Expert mortgage advice for purchases, remortgages, and buy-to-let properties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protection Planning",
          description: "Life assurance, critical illness cover, income protection, and family protection planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wealth Management",
          description: "Holistic wealth management services combining investment, tax, and estate planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Planning",
          description: "Comprehensive retirement planning to help you achieve the retirement you deserve.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Prosperity Financial Solutions - West End Glasgow Office",
    address: {
      "@type": "PostalAddress",
      addressLocality: "West End, Glasgow",
      addressRegion: "Glasgow",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.8724,
      longitude: -4.29,
    },
    telephone: "+441413371346",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://prosperityfinancial.co.uk/#localbusiness",
  name: "Prosperity Financial Solutions",
  image: "https://prosperityfinancial.co.uk/logo.png",
  telephone: "+441413371346",
  email: "info@prosperityfinancial.co.uk",
  url: "https://prosperityfinancial.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "West End, Glasgow",
    addressRegion: "Glasgow",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.8724,
    longitude: -4.29,
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
  "@id": "https://prosperityfinancial.co.uk/#website",
  url: "https://prosperityfinancial.co.uk",
  name: "Prosperity Financial Solutions",
  description: "Independent financial advisers in West End, Glasgow. Whole-of-market advice for Glasgow and Central Scotland.",
  publisher: {
    "@id": "https://prosperityfinancial.co.uk/#organization",
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
