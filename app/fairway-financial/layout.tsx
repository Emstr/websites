import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Fairway Financial Planning | Independent Financial Advisers in Birmingham",
    template: "%s | Fairway Financial Planning",
  },
  description:
    "Bespoke independent financial advice and wealth management from Fairway Financial Planning Limited, based at Edgbaston Hall, Birmingham. Pensions, investments, mortgages, protection and estate planning. FCA 998733.",
  keywords: [
    "financial adviser Birmingham",
    "independent financial adviser",
    "IFA Birmingham",
    "pension advice Birmingham",
    "investment advice Birmingham",
    "mortgage adviser Birmingham",
    "estate planning West Midlands",
    "wealth management Birmingham",
    "Fairway Financial Planning",
    "financial planning Edgbaston",
    "retirement planning Birmingham",
    "KPMG trained financial adviser",
    "tax planning Birmingham",
    "business owner financial advice",
  ],
  authors: [{ name: "Fairway Financial Planning Limited" }],
  creator: "Fairway Financial Planning Limited",
  publisher: "Fairway Financial Planning Limited",
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
    url: "https://fairwayfinancial.co.uk",
    siteName: "Fairway Financial Planning",
    title: "Fairway Financial Planning | Independent Financial Advisers in Birmingham",
    description:
      "Bespoke independent financial advice and wealth management from KPMG-trained advisers. Based at Edgbaston Hall, Birmingham. Pensions, investments, mortgages, protection and estate planning.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fairway Financial Planning - Independent Financial Advisers in Birmingham",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairway Financial Planning | Independent Financial Advisers",
    description:
      "Bespoke independent financial advice and wealth management in Birmingham. KPMG-trained advisers. FCA 998733.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://fairwayfinancial.co.uk",
  },
  other: {
    "geo.region": "GB-WMD",
    "geo.placename": "Birmingham",
    "geo.position": "52.4647;-1.9108",
    ICBM: "52.4647, -1.9108",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://fairwayfinancial.co.uk/#organization",
  name: "Fairway Financial Planning Limited",
  alternateName: "Fairway Financial",
  description:
    "Bespoke independent financial advice and wealth management including pensions, investments, mortgages, protection, tax planning and estate planning. KPMG-trained founder, based at Edgbaston Hall, Birmingham.",
  url: "https://fairwayfinancial.co.uk",
  telephone: "+447946540727",
  email: "chris@fairwayfinancial.co.uk",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Birmingham",
    },
    {
      "@type": "AdministrativeArea",
      name: "West Midlands",
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
          name: "Wealth Management",
          description: "Bespoke wealth management strategies tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Planning",
          description: "Comprehensive retirement and pension planning including SIPPs, drawdown and consolidation.",
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
          name: "Family Protection",
          description: "Life assurance, critical illness cover, and income protection to safeguard your family.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tax & Estate Planning",
          description: "Tax-efficient strategies and inheritance tax planning to protect your wealth for future generations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Owner Advisory",
          description: "Specialist financial planning for business owners including succession planning and corporate benefits.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Fairway Financial Planning - Edgbaston Hall",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Edgbaston Hall",
      addressLocality: "Edgbaston, Birmingham",
      addressRegion: "West Midlands",
      postalCode: "B15 3TB",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.4647,
      longitude: -1.9108,
    },
    telephone: "+447946540727",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://fairwayfinancial.co.uk/#localbusiness",
  name: "Fairway Financial Planning",
  telephone: "+447946540727",
  email: "chris@fairwayfinancial.co.uk",
  url: "https://fairwayfinancial.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Edgbaston Hall",
    addressLocality: "Edgbaston, Birmingham",
    addressRegion: "West Midlands",
    postalCode: "B15 3TB",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.4647,
    longitude: -1.9108,
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
  "@id": "https://fairwayfinancial.co.uk/#website",
  url: "https://fairwayfinancial.co.uk",
  name: "Fairway Financial Planning",
  description: "Bespoke independent financial advice and wealth management in Birmingham, West Midlands",
  publisher: {
    "@id": "https://fairwayfinancial.co.uk/#organization",
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
