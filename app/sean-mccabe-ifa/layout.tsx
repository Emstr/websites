import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Sean McCabe Financial | Independent Financial Adviser in Alsager, Stoke-on-Trent",
    template: "%s | Sean McCabe Financial",
  },
  description:
    "Family-run independent financial advice from Sean McCabe (Financial Adviser) Limited, established 2006. Pensions, protection, mortgages, savings & investments in Alsager, Stoke-on-Trent.",
  keywords: [
    "financial adviser Alsager",
    "independent financial adviser Stoke-on-Trent",
    "IFA Alsager",
    "pension advice Alsager",
    "mortgage adviser Stoke-on-Trent",
    "protection advice Cheshire",
    "savings and investments Staffordshire",
    "Sean McCabe Financial",
    "financial planning Alsager",
    "retirement planning Stoke-on-Trent",
    "financial adviser Crewe",
    "IFA Cheshire",
  ],
  authors: [{ name: "Sean McCabe (Financial Adviser) Limited" }],
  creator: "Sean McCabe (Financial Adviser) Limited",
  publisher: "Sean McCabe (Financial Adviser) Limited",
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
    url: "https://seanmccabe.co.uk",
    siteName: "Sean McCabe Financial",
    title: "Sean McCabe Financial | Independent Financial Adviser Since 2006",
    description:
      "Family-run independent financial advice serving Alsager, Stoke-on-Trent and Cheshire since 2006. Pensions, protection, mortgages, savings & investments.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sean McCabe Financial - Independent Financial Adviser Since 2006",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sean McCabe Financial | Independent Financial Adviser",
    description:
      "Family-run independent financial advice in Alsager, Stoke-on-Trent since 2006.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://seanmccabe.co.uk",
  },
  other: {
    "geo.region": "GB-STS",
    "geo.placename": "Alsager",
    "geo.position": "53.0967;-2.3073",
    ICBM: "53.0967, -2.3073",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://seanmccabe.co.uk/#organization",
  name: "Sean McCabe (Financial Adviser) Limited",
  alternateName: "Sean McCabe Financial",
  description:
    "Family-run independent financial advice including pensions, protection, mortgages, savings & investments. Established 2006, serving Alsager, Stoke-on-Trent and Cheshire.",
  url: "https://seanmccabe.co.uk",
  telephone: "+441270878755",
  email: "paul@seanmccabe.co.uk",
  foundingDate: "2006",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Alsager",
    },
    {
      "@type": "City",
      name: "Stoke-on-Trent",
    },
    {
      "@type": "AdministrativeArea",
      name: "Cheshire",
    },
    {
      "@type": "AdministrativeArea",
      name: "Staffordshire",
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
          name: "Pension Advice",
          description: "Comprehensive pension planning including workplace pensions, SIPPs, and retirement income strategies.",
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
          name: "Mortgage Advice",
          description: "Independent mortgage advice with access to the whole of the market for the best rates.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Savings & Investments",
          description: "Tailored savings and investment advice to help you grow your wealth in line with your goals.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Sean McCabe Financial Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "19-21 Crewe Road",
      addressLocality: "Alsager",
      addressRegion: "Stoke-on-Trent",
      postalCode: "ST7 2EW",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.0967,
      longitude: -2.3073,
    },
    telephone: "+441270878755",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://seanmccabe.co.uk/#localbusiness",
  name: "Sean McCabe Financial",
  image: "https://seanmccabe.co.uk/logo.png",
  telephone: "+441270878755",
  email: "paul@seanmccabe.co.uk",
  url: "https://seanmccabe.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "19-21 Crewe Road",
    addressLocality: "Alsager",
    addressRegion: "Stoke-on-Trent",
    postalCode: "ST7 2EW",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.0967,
    longitude: -2.3073,
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
  "@id": "https://seanmccabe.co.uk/#website",
  url: "https://seanmccabe.co.uk",
  name: "Sean McCabe Financial",
  description: "Family-run independent financial advice in Alsager, Stoke-on-Trent since 2006",
  publisher: {
    "@id": "https://seanmccabe.co.uk/#organization",
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
