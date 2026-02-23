import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ABS Financial Planning Ltd | Independent Financial Advisers in Southampton",
    template: "%s | ABS Financial Planning Ltd",
  },
  description:
    "Independent financial advice from ABS Financial Planning Ltd, established 1991. Investments, retirement planning, inheritance tax planning, protection and corporate benefits in Southampton, Hampshire.",
  keywords: [
    "financial adviser Southampton",
    "independent financial adviser",
    "IFA Southampton",
    "retirement planning Southampton",
    "investment advice Southampton",
    "inheritance tax planning Southampton",
    "protection insurance Hampshire",
    "corporate benefits adviser",
    "employee benefits Southampton",
    "ABS Financial Planning",
    "financial planning Southampton",
    "IFA Portswood",
  ],
  authors: [{ name: "ABS Financial Planning Ltd" }],
  creator: "ABS Financial Planning Ltd",
  publisher: "ABS Financial Planning Ltd",
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
    url: "https://absfinancial.co.uk",
    siteName: "ABS Financial Planning Ltd",
    title: "ABS Financial Planning Ltd | Independent Financial Advisers Since 1991",
    description:
      "Independent financial advice from an established firm serving Southampton and Hampshire since 1991. Investments, retirement planning, inheritance tax planning, protection and corporate benefits.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ABS Financial Planning Ltd - Independent Financial Advisers Since 1991",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ABS Financial Planning Ltd | Independent Financial Advisers",
    description:
      "Independent financial advice in Southampton and Hampshire since 1991.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://absfinancial.co.uk",
  },
  other: {
    "geo.region": "GB-HAM",
    "geo.placename": "Southampton",
    "geo.position": "50.9265;-1.3870",
    ICBM: "50.9265, -1.3870",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://absfinancial.co.uk/#organization",
  name: "ABS Financial Planning Ltd",
  alternateName: "ABS Financial Planning",
  description:
    "Independent financial advice including investments, retirement planning, inheritance tax planning, protection insurance and corporate benefits. Established 1991, serving Southampton and Hampshire.",
  url: "https://absfinancial.co.uk",
  telephone: "+442380333099",
  email: "advice@absfinancial.co.uk",
  foundingDate: "1991",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Southampton",
    },
    {
      "@type": "AdministrativeArea",
      name: "Hampshire",
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
          name: "Investment Planning",
          description: "Expert investment advice tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Planning",
          description: "Comprehensive retirement planning including pensions, drawdown strategies and income planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inheritance Tax Planning",
          description: "Strategic IHT planning to protect your wealth for future generations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protection Insurance",
          description: "Life assurance, critical illness cover, and income protection to safeguard your family.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate & Employee Benefits",
          description: "Workplace pensions, group protection and employee benefit schemes for businesses.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "ABS Financial Planning Ltd Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "184 Portswood Road",
      addressLocality: "Southampton",
      addressRegion: "Hampshire",
      postalCode: "SO17 2NJ",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.9265,
      longitude: -1.3870,
    },
    telephone: "+442380333099",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://absfinancial.co.uk/#localbusiness",
  name: "ABS Financial Planning Ltd",
  image: "https://absfinancial.co.uk/logo.png",
  telephone: "+442380333099",
  email: "advice@absfinancial.co.uk",
  url: "https://absfinancial.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "184 Portswood Road",
    addressLocality: "Southampton",
    addressRegion: "Hampshire",
    postalCode: "SO17 2NJ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.9265,
    longitude: -1.3870,
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
  "@id": "https://absfinancial.co.uk/#website",
  url: "https://absfinancial.co.uk",
  name: "ABS Financial Planning Ltd",
  description: "Independent financial advice in Southampton and Hampshire since 1991",
  publisher: {
    "@id": "https://absfinancial.co.uk/#organization",
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
