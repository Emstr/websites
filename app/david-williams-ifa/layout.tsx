import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "David Williams IFA | Chartered Financial Planners in Northampton",
    template: "%s | David Williams IFA",
  },
  description:
    "Chartered Financial Planners with over 40 years of trusted advice. Independent financial planning, investments, pensions, tax and estate planning from Northampton, serving clients nationwide.",
  keywords: [
    "chartered financial planners",
    "independent financial adviser",
    "financial planning Northampton",
    "pension advice",
    "investment planning",
    "inheritance tax planning",
    "trust planning",
    "estate planning",
    "mortgage advice Northampton",
    "corporate financial services",
    "cashflow modelling",
    "protection planning",
  ],
  authors: [{ name: "David Williams IFA" }],
  creator: "David Williams IFA",
  publisher: "David Williams IFA",
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
    url: "https://dwifa.co.uk",
    siteName: "David Williams IFA",
    title: "David Williams IFA | Chartered Financial Planners",
    description:
      "Over 40 years of trusted independent financial advice. Chartered Financial Planners based in Northampton, serving clients across the UK.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "David Williams IFA - Chartered Financial Planners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Williams IFA | Chartered Financial Planners",
    description:
      "Over 40 years of trusted independent financial advice from Northampton, serving clients nationwide.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://dwifa.co.uk",
  },
  other: {
    "geo.region": "GB-NTH",
    "geo.placename": "Northampton",
    "geo.position": "52.2297;-0.8957",
    ICBM: "52.2297, -0.8957",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://dwifa.co.uk/#organization",
  name: "David Williams IFA",
  alternateName: "David Williams IFA - Chartered Financial Planners",
  description:
    "Chartered Financial Planners with over 40 years of trusted independent advice. Investment planning, pensions, tax and estate planning, trust administration, mortgages, and corporate services.",
  url: "https://dwifa.co.uk",
  telephone: "+441604621302",
  email: "info@dwifa.co.uk",
  foundingDate: "1983",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Northampton",
    },
    {
      "@type": "AdministrativeArea",
      name: "East Midlands",
    },
    {
      "@type": "AdministrativeArea",
      name: "Home Counties",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Planning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning & Portfolio Management",
          description: "Bespoke investment strategies tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Planning",
          description: "Comprehensive pension advice including workplace pensions, SIPPs, and consolidation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tax & Estate Planning",
          description: "Strategic tax and estate planning to protect and preserve your wealth for future generations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inheritance Tax Planning",
          description: "Expert IHT planning to minimise the tax burden on your estate.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Trust Planning & Administration",
          description: "Specialist trust planning and ongoing administration for effective wealth management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgage Services",
          description: "Residential and investment mortgage advice from whole-of-market brokers.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "David Williams IFA - Northampton Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 Waterside Way",
      addressLocality: "Northampton",
      addressRegion: "Northamptonshire",
      postalCode: "NN4 7XD",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.2297,
      longitude: -0.8957,
    },
    telephone: "+441604621302",
  },
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://dwifa.co.uk/#localbusiness",
  name: "David Williams IFA",
  image: "https://dwifa.co.uk/logo.png",
  telephone: "+441604621302",
  email: "info@dwifa.co.uk",
  url: "https://dwifa.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 Waterside Way",
    addressLocality: "Northampton",
    addressRegion: "Northamptonshire",
    postalCode: "NN4 7XD",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.2297,
    longitude: -0.8957,
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
  "@id": "https://dwifa.co.uk/#website",
  url: "https://dwifa.co.uk",
  name: "David Williams IFA - Chartered Financial Planners",
  description: "Chartered Financial Planners with over 40 years of trusted independent advice from Northampton",
  publisher: {
    "@id": "https://dwifa.co.uk/#organization",
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
