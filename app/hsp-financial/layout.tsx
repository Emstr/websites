import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "HSP Financial Planning | Independent Financial Advisers in Whetstone, Leicestershire",
    template: "%s | HSP Financial Planning",
  },
  description:
    "Independent financial advice from HSP Financial Planning Ltd, established 1977. Pension planning, investment advice, inheritance tax planning, family protection and corporate advice in Whetstone, Leicestershire.",
  keywords: [
    "financial adviser Leicestershire",
    "independent financial adviser",
    "IFA Whetstone",
    "IFA Leicester",
    "pension advice Leicestershire",
    "investment advice Leicestershire",
    "inheritance tax planning",
    "family protection",
    "corporate financial advice",
    "HSP Financial Planning",
    "financial planning Leicester",
    "retirement planning Leicestershire",
  ],
  authors: [{ name: "HSP Financial Planning Ltd" }],
  creator: "HSP Financial Planning Ltd",
  publisher: "HSP Financial Planning Ltd",
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
    url: "https://hsp-financial.com",
    siteName: "HSP Financial Planning",
    title: "HSP Financial Planning | Independent Financial Advisers Since 1977",
    description:
      "Nearly 50 years of independent financial advice from HSP Financial Planning Ltd in Whetstone, Leicestershire. Pension planning, investments, inheritance tax planning, family protection and corporate advice.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HSP Financial Planning - Independent Financial Advisers Since 1977",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HSP Financial Planning | Independent Financial Advisers",
    description:
      "Nearly 50 years of independent financial advice in Whetstone, Leicestershire since 1977.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://hsp-financial.com",
  },
  other: {
    "geo.region": "GB-LEC",
    "geo.placename": "Whetstone",
    "geo.position": "52.5555;-1.1753",
    ICBM: "52.5555, -1.1753",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://hsp-financial.com/#organization",
  name: "HSP Financial Planning Ltd",
  alternateName: "HSP Financial",
  description:
    "Nearly 50 years of independent financial advice including pension planning, investment advice, inheritance tax planning, family protection and corporate advice. Established 1977, serving Leicestershire and the East Midlands.",
  url: "https://hsp-financial.com",
  telephone: "+441162750225",
  email: "services@hsp-ifa.com",
  foundingDate: "1977",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Leicester",
    },
    {
      "@type": "AdministrativeArea",
      name: "Leicestershire",
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
          name: "Pension Planning",
          description: "Comprehensive pension planning including workplace pensions, SIPPs, and retirement income strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Advice",
          description: "Expert investment advice tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inheritance Tax Planning",
          description: "Strategic inheritance tax planning to protect your wealth for future generations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Family Protection",
          description: "Life assurance, critical illness cover, and income protection to safeguard your family.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Advice",
          description: "Specialist financial advice for businesses including group pensions and key person protection.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "HSP Financial Planning Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Whiteacres, Cambridge Road",
      addressLocality: "Whetstone",
      addressRegion: "Leicestershire",
      postalCode: "LE8 6ZG",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.5555,
      longitude: -1.1753,
    },
    telephone: "+441162750225",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://hsp-financial.com/#localbusiness",
  name: "HSP Financial Planning",
  image: "https://hsp-financial.com/logo.png",
  telephone: "+441162750225",
  email: "services@hsp-ifa.com",
  url: "https://hsp-financial.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Whiteacres, Cambridge Road",
    addressLocality: "Whetstone",
    addressRegion: "Leicestershire",
    postalCode: "LE8 6ZG",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.5555,
    longitude: -1.1753,
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
  "@id": "https://hsp-financial.com/#website",
  url: "https://hsp-financial.com",
  name: "HSP Financial Planning",
  description: "Nearly 50 years of independent financial advice in Whetstone, Leicestershire since 1977",
  publisher: {
    "@id": "https://hsp-financial.com/#organization",
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
