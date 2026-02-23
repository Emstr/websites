import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Derbyshire Independent Financial Advisers | IFA in Derby, Derbyshire",
    template: "%s | Derbyshire Independent Financial Advisers",
  },
  description:
    "Independent financial advice from Derbyshire Independent Financial Advisers LLP. Over 100 years combined experience. Savings, investments, pensions, life assurance and mortgages in Derby, Derbyshire.",
  keywords: [
    "financial adviser Derby",
    "independent financial adviser Derbyshire",
    "IFA Derby",
    "pension advice Derby",
    "investment advice Derbyshire",
    "mortgage adviser Derby",
    "life assurance Derbyshire",
    "savings advice Derby",
    "Derbyshire Independent Financial Advisers",
    "financial planning Derby",
    "retirement planning Derbyshire",
    "Findern financial adviser",
  ],
  authors: [{ name: "Derbyshire Independent Financial Advisers LLP" }],
  creator: "Derbyshire Independent Financial Advisers LLP",
  publisher: "Derbyshire Independent Financial Advisers LLP",
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
    url: "https://derbyshireifa.co.uk",
    siteName: "Derbyshire Independent Financial Advisers",
    title: "Derbyshire Independent Financial Advisers | Over 100 Years Combined Experience",
    description:
      "Independent financial advice with over 100 years combined experience. Savings, investments, pensions, life assurance and mortgages from our Findern office, serving Derby and Derbyshire.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Derbyshire Independent Financial Advisers - Over 100 Years Combined Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Derbyshire Independent Financial Advisers | IFA Derby",
    description:
      "Independent financial advice with over 100 years combined experience in Derby and Derbyshire.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://derbyshireifa.co.uk",
  },
  other: {
    "geo.region": "GB-DBY",
    "geo.placename": "Derby",
    "geo.position": "52.8545;-1.5640",
    ICBM: "52.8545, -1.5640",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://derbyshireifa.co.uk/#organization",
  name: "Derbyshire Independent Financial Advisers LLP",
  alternateName: "Derbyshire IFA",
  description:
    "Independent financial advice with over 100 years combined experience. Savings, investments, pensions, life assurance and mortgages. Serving Derby and Derbyshire from our Findern office.",
  url: "https://derbyshireifa.co.uk",
  telephone: "+441283703007",
  email: "enquiries@derbyshireifa.co.uk",
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
          name: "Savings Advice",
          description: "Expert savings advice to help you make the most of your money with the right accounts and strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning",
          description: "Independent investment advice tailored to your financial goals and risk profile.",
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
          name: "Life Assurance",
          description: "Life assurance and protection planning to safeguard your family's financial future.",
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
    ],
  },
  location: {
    "@type": "Place",
    name: "Derbyshire Independent Financial Advisers LLP Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "24 The Green",
      addressLocality: "Findern",
      addressRegion: "Derbyshire",
      postalCode: "DE65 6AA",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.8545,
      longitude: -1.5640,
    },
    telephone: "+441283703007",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://derbyshireifa.co.uk/#localbusiness",
  name: "Derbyshire Independent Financial Advisers LLP",
  image: "https://derbyshireifa.co.uk/logo.png",
  telephone: "+441283703007",
  email: "enquiries@derbyshireifa.co.uk",
  url: "https://derbyshireifa.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "24 The Green",
    addressLocality: "Findern",
    addressRegion: "Derbyshire",
    postalCode: "DE65 6AA",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.8545,
    longitude: -1.5640,
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
  "@id": "https://derbyshireifa.co.uk/#website",
  url: "https://derbyshireifa.co.uk",
  name: "Derbyshire Independent Financial Advisers",
  description: "Independent financial advice with over 100 years combined experience in Derby and Derbyshire",
  publisher: {
    "@id": "https://derbyshireifa.co.uk/#organization",
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
