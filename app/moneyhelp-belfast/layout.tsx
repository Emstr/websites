import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "MoneyHelp | Independent Financial Advisers in Belfast",
    template: "%s | MoneyHelp Belfast",
  },
  description:
    "Independent financial advice from Buchanan Johnston Flynn Limited trading as MoneyHelp, established 1995. Financial planning, investments, mortgages, equity release, retirement planning and tax advice in Belfast, Northern Ireland.",
  keywords: [
    "financial adviser Belfast",
    "independent financial adviser",
    "IFA Belfast",
    "pension advice Belfast",
    "investment advice Belfast",
    "mortgage adviser Belfast",
    "equity release Northern Ireland",
    "retirement planning Belfast",
    "tax advice Belfast",
    "MoneyHelp",
    "Buchanan Johnston Flynn",
    "financial planning Belfast",
    "financial adviser Northern Ireland",
  ],
  authors: [{ name: "Buchanan Johnston Flynn Limited trading as MoneyHelp" }],
  creator: "Buchanan Johnston Flynn Limited trading as MoneyHelp",
  publisher: "Buchanan Johnston Flynn Limited trading as MoneyHelp",
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
    url: "https://koliderdigital.com/moneyhelp-belfast",
    siteName: "MoneyHelp",
    title: "MoneyHelp | Independent Financial Advisers Since 1995",
    description:
      "Nearly 30 years of independent financial advice from Buchanan Johnston Flynn Limited trading as MoneyHelp. Financial planning, investments, mortgages, equity release, retirement planning and tax advice in Belfast.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MoneyHelp - Independent Financial Advisers Since 1995",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MoneyHelp | Independent Financial Advisers Belfast",
    description:
      "Nearly 30 years of independent financial advice in Belfast, Northern Ireland.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://koliderdigital.com/moneyhelp-belfast",
  },
  other: {
    "geo.region": "GB-NIR",
    "geo.placename": "Belfast",
    "geo.position": "54.5973;-5.9301",
    ICBM: "54.5973, -5.9301",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://koliderdigital.com/moneyhelp-belfast/#organization",
  name: "Buchanan Johnston Flynn Limited trading as MoneyHelp",
  alternateName: "MoneyHelp",
  description:
    "Independent financial advice including financial planning, investments, mortgages, equity release, retirement planning and tax advice. Established 1995, serving Belfast and Northern Ireland.",
  url: "https://koliderdigital.com/moneyhelp-belfast",
  telephone: "+442890656999",
  email: "info@moneyhelp.co.uk",
  foundingDate: "1995",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Belfast",
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
          description: "Comprehensive financial planning tailored to your goals, covering all aspects of your financial life.",
        },
      },
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
          name: "Mortgage Advice",
          description: "Independent mortgage advice with access to the whole of the market for the best rates.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Equity Release",
          description: "Specialist equity release advice for homeowners looking to access the value in their property.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Planning",
          description: "Comprehensive retirement planning including pension advice, drawdown strategies and income planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tax Advice",
          description: "Tax-efficient financial planning including ISAs, pension tax relief and inheritance tax mitigation.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "MoneyHelp Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "66-68 Holywood Road",
      addressLocality: "Belfast",
      addressRegion: "Northern Ireland",
      postalCode: "BT4 1NT",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 54.5973,
      longitude: -5.9301,
    },
    telephone: "+442890656999",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://koliderdigital.com/moneyhelp-belfast/#localbusiness",
  name: "MoneyHelp",
  image: "https://koliderdigital.com/logo.png",
  telephone: "+442890656999",
  email: "info@moneyhelp.co.uk",
  url: "https://koliderdigital.com/moneyhelp-belfast",
  address: {
    "@type": "PostalAddress",
    streetAddress: "66-68 Holywood Road",
    addressLocality: "Belfast",
    addressRegion: "Northern Ireland",
    postalCode: "BT4 1NT",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 54.5973,
    longitude: -5.9301,
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
  "@id": "https://koliderdigital.com/moneyhelp-belfast/#website",
  url: "https://koliderdigital.com/moneyhelp-belfast",
  name: "MoneyHelp",
  description: "Independent financial advice in Belfast and Northern Ireland since 1995",
  publisher: {
    "@id": "https://koliderdigital.com/moneyhelp-belfast/#organization",
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
