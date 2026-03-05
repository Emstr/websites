import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bartlett Wealth Management | Independent Financial Advisers in Leeds",
    template: "%s | Bartlett Wealth Management",
  },
  description:
    "Independent wealth management and financial planning from a third-generation family business. Over 80 years of heritage. FT Top 100 UK Advisors 2024. Offices in Leeds, London and Manchester.",
  keywords: [
    "financial adviser Leeds",
    "wealth management",
    "independent financial adviser",
    "retirement planning",
    "pension consolidation",
    "investment advice",
    "inheritance tax planning",
    "corporate financial planning",
    "employee benefits",
    "workplace pensions",
    "Horsforth financial adviser",
    "Leeds wealth management",
    "FT Top 100 adviser",
  ],
  authors: [{ name: "Bartlett Wealth Management Limited" }],
  creator: "Bartlett Wealth Management Limited",
  publisher: "Bartlett Wealth Management Limited",
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
    url: "https://bartlettgroup.com",
    siteName: "Bartlett Wealth Management",
    title: "Bartlett Wealth Management | Over 80 Years of Heritage",
    description:
      "Third-generation family business providing independent wealth management, retirement planning and investment advice from Leeds, London and Manchester.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bartlett Wealth Management - Over 80 Years of Heritage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bartlett Wealth Management | Independent Financial Advisers",
    description:
      "Over 80 years of heritage. Independent wealth management from a third-generation family business in Leeds.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://bartlettgroup.com",
  },
  other: {
    "geo.region": "GB-WYK",
    "geo.placename": "Leeds",
    "geo.position": "53.8640;-1.6410",
    ICBM: "53.8640, -1.6410",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://bartlettgroup.com/#organization",
  name: "Bartlett Wealth Management Limited",
  alternateName: "Bartlett Wealth Management",
  description:
    "Independent wealth management and financial planning services. Over 80 years of heritage as a third-generation family business. Retirement planning, investment advice, protection and corporate financial planning.",
  url: "https://bartlettgroup.com",
  telephone: "+441132585711",
  email: "mail@bartlettgroup.com",
  foundingDate: "1940",
  priceRange: "$$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Leeds",
    },
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "City",
      name: "Manchester",
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
          description: "Comprehensive retirement planning and pension consolidation advice to secure your future.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Advice",
          description: "Whole of market investment advice tailored to your goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inheritance Tax Planning",
          description: "Strategic inheritance tax planning to protect and preserve your family wealth.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protection",
          description: "Life insurance, critical illness cover and income protection planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Financial Planning",
          description: "Employee benefits, workplace pensions and corporate financial planning solutions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private Medical Insurance",
          description: "Comprehensive private medical insurance solutions for individuals and businesses.",
        },
      },
    ],
  },
  location: [
    {
      "@type": "Place",
      name: "Bartlett Wealth Management Head Office - Leeds",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Broadway Hall, Horsforth",
        addressLocality: "Leeds",
        addressRegion: "West Yorkshire",
        postalCode: "LS18 4RS",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 53.864,
        longitude: -1.641,
      },
      telephone: "+441132585711",
    },
  ],
  sameAs: [
    "https://www.bartlettgroup.com",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bartlettgroup.com/#localbusiness",
  name: "Bartlett Wealth Management Limited",
  image: "https://bartlettgroup.com/logo.png",
  telephone: "+441132585711",
  email: "mail@bartlettgroup.com",
  url: "https://bartlettgroup.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Broadway Hall, Horsforth",
    addressLocality: "Leeds",
    addressRegion: "West Yorkshire",
    postalCode: "LS18 4RS",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.864,
    longitude: -1.641,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
  priceRange: "$$$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://bartlettgroup.com/#website",
  url: "https://bartlettgroup.com",
  name: "Bartlett Wealth Management",
  description: "Independent wealth management and financial planning from a third-generation family business with over 80 years of heritage",
  publisher: {
    "@id": "https://bartlettgroup.com/#organization",
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
