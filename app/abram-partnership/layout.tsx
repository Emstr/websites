import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Abram Partnership | Tax Planning Specialists & Independent Financial Advisers in Cardiff",
    template: "%s | The Abram Partnership",
  },
  description:
    "Established 1992. Independent financial advisers and tax planning specialists in Cardiff, Wales. Expert advice on pensions, investments, mortgages, protection, estate planning and wealth management.",
  keywords: [
    "financial adviser Cardiff",
    "tax planning specialists Cardiff",
    "independent financial adviser Wales",
    "pension advice Cardiff",
    "investment planning Cardiff",
    "mortgage adviser Cardiff",
    "estate planning Cardiff",
    "wealth management Wales",
    "IFA Cardiff",
    "financial planning Cardiff",
    "tax efficient investing",
    "retirement planning Wales",
  ],
  authors: [{ name: "The Abram Partnership" }],
  creator: "The Abram Partnership",
  publisher: "The Abram Partnership",
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
    url: "https://abrampartnership.co.uk",
    siteName: "The Abram Partnership",
    title: "The Abram Partnership | Tax Planning Specialists & Financial Advisers in Cardiff",
    description:
      "Established 1992. Independent financial advisers and tax planning specialists serving Cardiff and Wales. 30+ years of trusted, independent financial advice.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Abram Partnership - Tax Planning Specialists & Independent Financial Advisers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Abram Partnership | Tax Planning Specialists in Cardiff",
    description:
      "Established 1992. Independent financial advisers and tax planning specialists in Cardiff, Wales.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://abrampartnership.co.uk",
  },
  other: {
    "geo.region": "GB-CRF",
    "geo.placename": "Cardiff",
    "geo.position": "51.4816;-3.1791",
    ICBM: "51.4816, -3.1791",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://abrampartnership.co.uk/#organization",
  name: "The Abram Partnership",
  alternateName: "Abram Partnership",
  description:
    "Established 1992. Independent financial advisers and tax planning specialists in Cardiff, Wales. Expert advice on pensions, investments, mortgages, protection, estate planning and wealth management.",
  url: "https://abrampartnership.co.uk",
  telephone: "+442920693700",
  email: "info@abrampartnership.co.uk",
  foundingDate: "1992",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Cardiff",
    },
    {
      "@type": "AdministrativeArea",
      name: "Wales",
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
          name: "Tax Planning",
          description: "Specialist tax planning strategies to optimise your wealth and minimise tax liability.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Planning",
          description: "Comprehensive pension advice including workplace pensions and retirement planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning",
          description: "Bespoke investment strategies tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgage Advice",
          description: "Independent mortgage advice for residential and buy-to-let properties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protection Planning",
          description: "Life assurance, critical illness cover, and income protection planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estate Planning",
          description: "Inheritance tax planning and estate management to protect your legacy.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wealth Management",
          description: "Holistic wealth management services for individuals and families.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "The Abram Partnership - Cardiff Office",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cardiff",
      addressRegion: "Wales",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.4816,
      longitude: -3.1791,
    },
    telephone: "+442920693700",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://abrampartnership.co.uk/#localbusiness",
  name: "The Abram Partnership",
  image: "https://abrampartnership.co.uk/logo.png",
  telephone: "+442920693700",
  email: "info@abrampartnership.co.uk",
  url: "https://abrampartnership.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cardiff",
    addressRegion: "Wales",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4816,
    longitude: -3.1791,
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
  "@id": "https://abrampartnership.co.uk/#website",
  url: "https://abrampartnership.co.uk",
  name: "The Abram Partnership",
  description: "Tax planning specialists and independent financial advisers in Cardiff, Wales. Established 1992.",
  publisher: {
    "@id": "https://abrampartnership.co.uk/#organization",
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
