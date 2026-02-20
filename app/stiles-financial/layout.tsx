import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Stiles & Company Financial Services | Financial Advisers in Hove & Maidenhead",
    template: "%s | Stiles & Company Financial Services",
  },
  description:
    "Established financial advisers providing life assurance, pensions, investments, and financial planning. FCA regulated offices in Hove (Brighton & Hove) and Maidenhead.",
  keywords: [
    "financial adviser",
    "financial planning",
    "life assurance",
    "pensions",
    "investments",
    "Hove financial adviser",
    "Brighton financial adviser",
    "Maidenhead financial adviser",
    "FCA regulated",
    "retirement planning",
    "financial planning UK",
    "independent financial advice",
  ],
  authors: [{ name: "Stiles & Company Financial Services Ltd" }],
  creator: "Stiles & Company Financial Services Ltd",
  publisher: "Stiles & Company Financial Services Ltd",
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
    url: "https://stilesfinancial.co.uk",
    siteName: "Stiles & Company Financial Services",
    title: "Stiles & Company Financial Services | Life Assurance, Pensions & Investments",
    description:
      "Established financial advisers providing life assurance, pensions, investments, and financial planning from our offices in Hove and Maidenhead.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stiles & Company Financial Services - Established Financial Advisers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stiles & Company Financial Services | Financial Advisers",
    description:
      "Life assurance, pensions, investments and financial planning from our offices in Hove and Maidenhead.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://stilesfinancial.co.uk",
  },
  other: {
    "geo.region": "GB-BNH",
    "geo.placename": "Hove",
    "geo.position": "50.8352;-0.1766",
    ICBM: "50.8352, -0.1766",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://stilesfinancial.co.uk/#organization",
  name: "Stiles & Company Financial Services Ltd",
  alternateName: "Stiles & Company",
  description:
    "Established financial advisers providing life assurance, pensions, investments, and financial planning from offices in Hove and Maidenhead.",
  url: "https://stilesfinancial.co.uk",
  telephone: "+441273736713",
  email: "advice@stilesfinancial.co.uk",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Brighton and Hove",
    },
    {
      "@type": "City",
      name: "Maidenhead",
    },
    {
      "@type": "AdministrativeArea",
      name: "East Sussex",
    },
    {
      "@type": "AdministrativeArea",
      name: "Berkshire",
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
          name: "Life Assurance",
          description: "Comprehensive life assurance and protection planning to secure your family's future.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pensions",
          description: "Expert pension advice including workplace pensions, SIPPs, and retirement income planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investments",
          description: "Bespoke investment strategies tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Financial Planning",
          description: "Holistic financial planning services to help you achieve your long-term objectives.",
        },
      },
    ],
  },
  location: [
    {
      "@type": "Place",
      name: "Stiles & Company Hove Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2 Amber House, St John's Road",
        addressLocality: "Hove",
        addressRegion: "East Sussex",
        postalCode: "BN3 2EZ",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.8352,
        longitude: -0.1766,
      },
      telephone: "+441273736713",
    },
    {
      "@type": "Place",
      name: "Stiles & Company Maidenhead Office",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Taplow",
        addressRegion: "Maidenhead",
        addressCountry: "GB",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://stilesfinancial.co.uk/#localbusiness",
  name: "Stiles & Company Financial Services Ltd",
  image: "https://stilesfinancial.co.uk/logo.png",
  telephone: "+441273736713",
  email: "advice@stilesfinancial.co.uk",
  url: "https://stilesfinancial.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 Amber House, St John's Road",
    addressLocality: "Hove",
    addressRegion: "East Sussex",
    postalCode: "BN3 2EZ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.8352,
    longitude: -0.1766,
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
  "@id": "https://stilesfinancial.co.uk/#website",
  url: "https://stilesfinancial.co.uk",
  name: "Stiles & Company Financial Services",
  description: "Established financial advisers in Hove and Maidenhead providing life assurance, pensions, investments and financial planning",
  publisher: {
    "@id": "https://stilesfinancial.co.uk/#organization",
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
