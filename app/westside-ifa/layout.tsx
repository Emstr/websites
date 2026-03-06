import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Westside Independent Financial Services LLP | Financial Advisers in Sheffield",
    template: "%s | Westside Independent Financial Services LLP",
  },
  description:
    "Independent financial advisers in Sheffield, South Yorkshire. Expert advice on pensions, investments, estate planning, wealth protection, and mortgages. Whole-of-market advice since 2004.",
  keywords: [
    "financial adviser Sheffield",
    "independent financial adviser",
    "pension advice Sheffield",
    "investment planning",
    "estate planning",
    "wealth protection",
    "mortgage advice Sheffield",
    "IFA Sheffield",
    "financial planning South Yorkshire",
    "retirement planning Sheffield",
    "whole of market advice",
    "Westside IFS",
  ],
  authors: [{ name: "Westside Independent Financial Services LLP" }],
  creator: "Westside Independent Financial Services LLP",
  publisher: "Westside Independent Financial Services LLP",
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
    url: "https://westsidellp.com",
    siteName: "Westside Independent Financial Services LLP",
    title: "Westside Independent Financial Services LLP | Independent Financial Advisers",
    description:
      "Expert independent financial advisers providing whole-of-market advice on pensions, investments, estate planning, and mortgages from our Sheffield office. Established 2004.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Westside Independent Financial Services LLP - Independent Financial Advisers in Sheffield",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Westside Independent Financial Services LLP | Financial Advisers Sheffield",
    description:
      "Independent financial advisers in Sheffield. Whole-of-market advice on pensions, investments, estate planning, and mortgages since 2004.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://westsidellp.com",
  },
  other: {
    "geo.region": "GB-SYK",
    "geo.placename": "Sheffield",
    "geo.position": "53.3934;-1.4990",
    ICBM: "53.3934, -1.4990",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://westsidellp.com/#organization",
  name: "Westside Independent Financial Services LLP",
  alternateName: "Westside IFS",
  description:
    "Independent financial advisers providing whole-of-market advice on pensions, investments, estate planning, wealth protection, and mortgages. Among the UK's leading firms, satisfying rigorous criteria.",
  url: "https://westsidellp.com",
  telephone: "+441142336000",
  foundingDate: "2004",
  priceRange: "$$$",
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
          name: "Pensions",
          description: "Comprehensive pension advice including workplace pensions, SIPPs, and retirement income planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investments",
          description: "Bespoke investment strategies tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estate Planning",
          description: "Strategic estate planning to protect your wealth and provide for future generations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wealth Protection",
          description: "Life assurance, critical illness cover, and income protection to safeguard your family.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgages",
          description: "Whole-of-market mortgage advice for home purchases, remortgages, and buy-to-let.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Westside Independent Financial Services LLP",
    address: {
      "@type": "PostalAddress",
      streetAddress: "302 South Road, Walkley",
      addressLocality: "Sheffield",
      addressRegion: "South Yorkshire",
      postalCode: "S6 3TE",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.3934,
      longitude: -1.499,
    },
    telephone: "+441142336000",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://westsidellp.com/#localbusiness",
  name: "Westside Independent Financial Services LLP",
  image: "https://westsidellp.com/logo.png",
  telephone: "+441142336000",
  url: "https://westsidellp.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "302 South Road, Walkley",
    addressLocality: "Sheffield",
    addressRegion: "South Yorkshire",
    postalCode: "S6 3TE",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.3934,
    longitude: -1.499,
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
  "@id": "https://westsidellp.com/#website",
  url: "https://westsidellp.com",
  name: "Westside Independent Financial Services LLP",
  description: "Independent financial advisers in Sheffield, South Yorkshire",
  publisher: {
    "@id": "https://westsidellp.com/#organization",
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
