import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Independent Financial Solutions | Independent Financial Advisers in Preston, Lancashire",
    template: "%s | Independent Financial Solutions",
  },
  description:
    "Professional independent financial advice from Independent Financial Solutions (IFS), established 2001. Pension transfers, retirement planning, mortgages, life assurance, wealth management and corporate pensions in Preston, Lancashire.",
  keywords: [
    "financial adviser Preston",
    "independent financial adviser Lancashire",
    "IFA Preston",
    "pension advice Preston",
    "pension transfer advice",
    "retirement planning Lancashire",
    "mortgage adviser Preston",
    "life assurance Preston",
    "wealth management Lancashire",
    "corporate pensions Preston",
    "employee benefits Lancashire",
    "Independent Financial Solutions",
    "financial planning Preston",
  ],
  authors: [{ name: "Independent Financial Solutions" }],
  creator: "Independent Financial Solutions",
  publisher: "Independent Financial Solutions",
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
    url: "https://ifs-sp.com",
    siteName: "Independent Financial Solutions",
    title: "Independent Financial Solutions | Independent Financial Advisers Since 2001",
    description:
      "Professional independent financial advice from a trusted firm serving Preston and Lancashire since 2001. Pension transfers, retirement planning, mortgages, life assurance, wealth management and corporate pensions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Independent Financial Solutions - Independent Financial Advisers Since 2001",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Independent Financial Solutions | Independent Financial Advisers",
    description:
      "Professional independent financial advice in Preston and Lancashire since 2001.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ifs-sp.com",
  },
  other: {
    "geo.region": "GB-LAN",
    "geo.placename": "Preston",
    "geo.position": "53.8025;-2.7143",
    ICBM: "53.8025, -2.7143",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://ifs-sp.com/#organization",
  name: "Independent Financial Solutions",
  alternateName: "IFS",
  description:
    "Professional independent financial advice including pension transfers, retirement planning, mortgages, life assurance, health insurance, wealth management, corporate pensions and employee benefits. Established 2001, serving Preston and Lancashire.",
  url: "https://ifs-sp.com",
  telephone: "+441772860760",
  email: "info@ifs-sp.com",
  foundingDate: "2001",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Preston",
    },
    {
      "@type": "AdministrativeArea",
      name: "Lancashire",
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
          name: "Pension Transfers & Retirement Planning",
          description: "Expert pension transfer analysis and comprehensive retirement planning strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgages",
          description: "Independent mortgage advice with access to the whole of the market for the best rates.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Life Assurance & Health Insurance",
          description: "Protection planning including life assurance, health insurance and income protection.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wealth Management & Investments",
          description: "Whole-of-market investment advice and wealth management tailored to your financial goals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Workplace Pensions & Employee Benefits",
          description: "Comprehensive workplace pension schemes and employee benefit packages for businesses.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Independent Financial Solutions Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "115b Whittingham Lane, Broughton",
      addressLocality: "Preston",
      addressRegion: "Lancashire",
      postalCode: "PR3 5DD",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.8025,
      longitude: -2.7143,
    },
    telephone: "+441772860760",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ifs-sp.com/#localbusiness",
  name: "Independent Financial Solutions",
  image: "https://ifs-sp.com/logo.png",
  telephone: "+441772860760",
  email: "info@ifs-sp.com",
  url: "https://ifs-sp.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "115b Whittingham Lane, Broughton",
    addressLocality: "Preston",
    addressRegion: "Lancashire",
    postalCode: "PR3 5DD",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.8025,
    longitude: -2.7143,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ifs-sp.com/#website",
  url: "https://ifs-sp.com",
  name: "Independent Financial Solutions",
  description: "Professional independent financial advice in Preston and Lancashire since 2001",
  publisher: {
    "@id": "https://ifs-sp.com/#organization",
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
