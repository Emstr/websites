import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "RMI Independent Financial Advisers | Financial Planning in Market Harborough",
    template: "%s | RMI Independent Financial Advisers",
  },
  description:
    "Independent financial advisers in Market Harborough, Leicestershire. Over 50 years of expert financial planning, pensions, investments and tax-efficient solutions. FCA regulated.",
  keywords: [
    "financial adviser Market Harborough",
    "independent financial adviser Leicestershire",
    "pension advice Market Harborough",
    "investment planning Leicestershire",
    "tax-efficient solutions",
    "financial planning East Midlands",
    "IFA Market Harborough",
    "retirement planning Leicestershire",
    "wealth management Market Harborough",
    "whole-of-market financial advice",
    "RMI IFA",
    "Readymoney Investments",
  ],
  authors: [{ name: "Readymoney Investments Limited" }],
  creator: "Readymoney Investments Limited",
  publisher: "Readymoney Investments Limited",
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
    url: "https://rmi-ifa.co.uk",
    siteName: "RMI Independent Financial Advisers",
    title: "RMI Independent Financial Advisers | Expert Financial Planning",
    description:
      "Over 50 years of independent financial advice in Market Harborough. Pensions, investments, tax planning and whole-of-market solutions from FCA regulated advisers.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RMI Independent Financial Advisers - Market Harborough",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RMI Independent Financial Advisers | Market Harborough",
    description:
      "Over 50 years of independent financial planning in Market Harborough, Leicestershire. FCA regulated.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://rmi-ifa.co.uk",
  },
  other: {
    "geo.region": "GB-LCE",
    "geo.placename": "Market Harborough",
    "geo.position": "52.4776;-0.9209",
    ICBM: "52.4776, -0.9209",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://rmi-ifa.co.uk/#organization",
  name: "Readymoney Investments Limited",
  alternateName: "RMI Independent Financial Advisers",
  description:
    "Independent financial advisers providing whole-of-market financial planning, pensions, investments and tax-efficient solutions in Market Harborough, Leicestershire. Over 50 years of expertise.",
  url: "https://rmi-ifa.co.uk",
  telephone: "+441858322101",
  email: "info@rmi-ifa.co.uk",
  foundingDate: "1975",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Market Harborough",
    },
    {
      "@type": "AdministrativeArea",
      name: "Leicestershire",
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
          name: "Financial Planning",
          description: "Comprehensive financial planning tailored to your goals and circumstances.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Planning",
          description: "Expert pension advice including workplace pensions, SIPPs, and retirement planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning",
          description: "Bespoke investment strategies from across the whole of the market.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tax-Efficient Solutions",
          description: "Strategic tax planning using ISAs, VCTs, and other tax-efficient vehicles.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Independent Advice",
          description: "Whole-of-market independent financial advice with no ties to any provider.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "RMI Independent Financial Advisers",
    address: {
      "@type": "PostalAddress",
      streetAddress: "71 Burnmill Road",
      addressLocality: "Market Harborough",
      addressRegion: "Leicestershire",
      postalCode: "LE16 7JG",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.4776,
      longitude: -0.9209,
    },
    telephone: "+441858322101",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://rmi-ifa.co.uk/#localbusiness",
  name: "Readymoney Investments Limited (trading as RMI Independent Financial Advisers)",
  image: "https://rmi-ifa.co.uk/logo.png",
  telephone: "+441858322101",
  email: "info@rmi-ifa.co.uk",
  url: "https://rmi-ifa.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "71 Burnmill Road",
    addressLocality: "Market Harborough",
    addressRegion: "Leicestershire",
    postalCode: "LE16 7JG",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.4776,
    longitude: -0.9209,
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
  "@id": "https://rmi-ifa.co.uk/#website",
  url: "https://rmi-ifa.co.uk",
  name: "RMI Independent Financial Advisers",
  description: "Independent financial planning and advice in Market Harborough, Leicestershire",
  publisher: {
    "@id": "https://rmi-ifa.co.uk/#organization",
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
