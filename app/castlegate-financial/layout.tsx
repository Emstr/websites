import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Castlegate Financial Management | Chartered Financial Planners in Grantham & East Midlands",
    template: "%s | Castlegate Financial Management",
  },
  description:
    "Chartered financial planners with over 30 years experience. Independent financial advice across 7 East Midlands offices in Grantham, Nottingham, Leicester, Lincoln, Skegness, Stamford and Newark. Part of Duncan & Toplis Group.",
  keywords: [
    "chartered financial planner",
    "financial adviser Grantham",
    "independent financial advice",
    "pension planning",
    "investment planning",
    "wealth management",
    "inheritance tax planning",
    "estate planning",
    "East Midlands financial adviser",
    "Nottingham financial adviser",
    "Leicester financial adviser",
    "Lincoln financial adviser",
    "Duncan Toplis",
  ],
  authors: [{ name: "Castlegate Financial Management Ltd" }],
  creator: "Castlegate Financial Management Ltd",
  publisher: "Castlegate Financial Management Ltd",
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
    url: "https://casfin.co.uk",
    siteName: "Castlegate Financial Management",
    title: "Castlegate Financial Management | Chartered Financial Planners",
    description:
      "Chartered financial planners with over 30 years experience. Independent whole-of-market advice from 7 offices across the East Midlands. Part of Duncan & Toplis Group.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Castlegate Financial Management - Chartered Financial Planners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Castlegate Financial Management | Chartered Financial Planners",
    description:
      "Over 30 years of independent financial advice across the East Midlands. Chartered financial planners, part of Duncan & Toplis Group.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://casfin.co.uk",
  },
  other: {
    "geo.region": "GB-LIN",
    "geo.placename": "Grantham",
    "geo.position": "52.9116;-0.6433",
    ICBM: "52.9116, -0.6433",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://casfin.co.uk/#organization",
  name: "Castlegate Financial Management Ltd",
  alternateName: "Castlegate Financial",
  description:
    "Chartered financial planners providing independent whole-of-market financial advice including pension planning, investment management, inheritance tax planning, and estate planning across the East Midlands.",
  url: "https://casfin.co.uk",
  telephone: "+441476855585",
  email: "info@casfin.co.uk",
  foundingDate: "1994",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "East Midlands",
    },
    {
      "@type": "City",
      name: "Grantham",
    },
    {
      "@type": "City",
      name: "Nottingham",
    },
    {
      "@type": "City",
      name: "Leicester",
    },
    {
      "@type": "City",
      name: "Lincoln",
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
          name: "Pension Planning & Retirement Advice",
          description: "Comprehensive pension advice including workplace pensions, SIPPs, and retirement income strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning & Wealth Management",
          description: "Bespoke investment strategies tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inheritance Tax Planning",
          description: "Strategic inheritance tax planning to protect and preserve your wealth for future generations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estate Planning",
          description: "Comprehensive estate planning to ensure your assets are distributed according to your wishes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protection Planning",
          description: "Life assurance, critical illness cover, and income protection to safeguard your family.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Financial Planning",
          description: "Financial planning solutions for businesses including key person cover and shareholder protection.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Castlegate Financial Management - Head Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 Castlegate",
      addressLocality: "Grantham",
      addressRegion: "Lincolnshire",
      postalCode: "NG31 6SE",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.9116,
      longitude: -0.6433,
    },
    telephone: "+441476855585",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Duncan & Toplis Group",
  },
  sameAs: [
    "https://www.linkedin.com/company/castlegate-financial-management",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://casfin.co.uk/#localbusiness",
  name: "Castlegate Financial Management Ltd",
  image: "https://casfin.co.uk/logo.png",
  telephone: "+441476855585",
  email: "info@casfin.co.uk",
  url: "https://casfin.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8 Castlegate",
    addressLocality: "Grantham",
    addressRegion: "Lincolnshire",
    postalCode: "NG31 6SE",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.9116,
    longitude: -0.6433,
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
  "@id": "https://casfin.co.uk/#website",
  url: "https://casfin.co.uk",
  name: "Castlegate Financial Management",
  description: "Chartered financial planners providing independent advice across the East Midlands",
  publisher: {
    "@id": "https://casfin.co.uk/#organization",
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
