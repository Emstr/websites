import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "IFA Centre | Chartered Financial Planners in Glasgow & Paisley",
    template: "%s | IFA Centre — Chartered Financial Planners",
  },
  description:
    "Chartered Financial Planners providing independent financial advice in Glasgow and Paisley. Expert guidance on pensions, investments, mortgages, protection and wealth management across Central Scotland.",
  keywords: [
    "chartered financial planners Glasgow",
    "independent financial adviser Glasgow",
    "IFA Glasgow",
    "financial adviser Paisley",
    "pension advice Glasgow",
    "investment advice Scotland",
    "mortgage adviser Glasgow",
    "wealth management Glasgow",
    "retirement planning Scotland",
    "financial planning Paisley",
    "chartered financial planners Scotland",
    "independent financial advice Paisley",
  ],
  authors: [{ name: "IFA Centre" }],
  creator: "IFA Centre",
  publisher: "IFA Centre",
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
    url: "https://ifacentre.net",
    siteName: "IFA Centre",
    title: "IFA Centre | Chartered Financial Planners in Glasgow & Paisley",
    description:
      "Chartered Financial Planners providing independent financial advice from our offices in Glasgow and Paisley. Pensions, investments, mortgages, protection and wealth management.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IFA Centre — Chartered Financial Planners in Glasgow & Paisley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IFA Centre | Chartered Financial Planners Glasgow & Paisley",
    description:
      "Chartered Financial Planners providing independent financial advice across Central Scotland from our Glasgow and Paisley offices.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ifacentre.net",
  },
  other: {
    "geo.region": "GB-SCT",
    "geo.placename": "Glasgow",
    "geo.position": "55.8642;-4.2518",
    ICBM: "55.8642, -4.2518",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://ifacentre.net/#organization",
  name: "IFA Centre",
  alternateName: "IFA Centre Glasgow",
  description:
    "Chartered Financial Planners providing independent financial advice including pensions, investments, mortgages, protection and wealth management across Glasgow, Paisley and Central Scotland.",
  url: "https://ifacentre.net",
  telephone: "+441418485454",
  email: "hello@ifacentre.net",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Glasgow",
    },
    {
      "@type": "City",
      name: "Paisley",
    },
    {
      "@type": "AdministrativeArea",
      name: "Central Scotland",
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
          description: "Comprehensive chartered financial planning tailored to your goals and circumstances.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Advice",
          description: "Expert pension advice including workplace pensions, SIPPs, and retirement income planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Management",
          description: "Independent investment advice with access to the whole of the market.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgage Advice",
          description: "Independent mortgage advice for purchases, remortgages and buy-to-let.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protection Planning",
          description: "Life assurance, critical illness cover and income protection planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wealth Management",
          description: "Holistic wealth management for individuals and families across Scotland.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Planning",
          description: "Comprehensive retirement planning and pension drawdown strategies.",
        },
      },
    ],
  },
  location: [
    {
      "@type": "Place",
      name: "IFA Centre Glasgow Office",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Glasgow",
        addressRegion: "Scotland",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 55.8642,
        longitude: -4.2518,
      },
      telephone: "+441418485454",
    },
    {
      "@type": "Place",
      name: "IFA Centre Paisley Office",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paisley",
        addressRegion: "Renfrewshire",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 55.8456,
        longitude: -4.4240,
      },
      telephone: "+441418485454",
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ifacentre.net/#localbusiness",
  name: "IFA Centre",
  telephone: "+441418485454",
  email: "hello@ifacentre.net",
  url: "https://ifacentre.net",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Glasgow",
    addressRegion: "Scotland",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.8642,
    longitude: -4.2518,
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
  "@id": "https://ifacentre.net/#website",
  url: "https://ifacentre.net",
  name: "IFA Centre",
  description: "Chartered Financial Planners providing independent financial advice in Glasgow and Paisley",
  publisher: {
    "@id": "https://ifacentre.net/#organization",
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
