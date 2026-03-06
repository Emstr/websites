import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Spectrum IFS | Independent Financial Advisers in South Liverpool",
    template: "%s | Spectrum Independent Financial Services",
  },
  description:
    "Independent financial advisers serving South Liverpool and Merseyside since 2002. Expert advice on pensions, investments, mortgages, protection, and retirement planning.",
  keywords: [
    "financial adviser",
    "independent financial adviser",
    "financial planning",
    "pension advice",
    "investment planning",
    "mortgage advice",
    "protection",
    "retirement planning",
    "wealth management",
    "South Liverpool financial adviser",
    "Merseyside financial adviser",
    "Liverpool IFA",
    "whole of market advice",
    "FCA regulated",
  ],
  authors: [{ name: "Spectrum Independent Financial Services Ltd" }],
  creator: "Spectrum Independent Financial Services Ltd",
  publisher: "Spectrum Independent Financial Services Ltd",
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
    url: "https://spectrum-ifs.co.uk",
    siteName: "Spectrum Independent Financial Services",
    title: "Spectrum IFS | Independent Financial Advisers in South Liverpool",
    description:
      "Trusted independent financial advisers serving South Liverpool and Merseyside for over 20 years. Whole-of-market advice on pensions, investments, mortgages, and protection.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spectrum Independent Financial Services - Trusted Financial Advice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spectrum IFS | Independent Financial Advisers",
    description:
      "Independent financial advice for South Liverpool and Merseyside. Pensions, investments, mortgages, and protection.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://spectrum-ifs.co.uk",
  },
  other: {
    "geo.region": "GB-MER",
    "geo.placename": "Liverpool",
    "geo.position": "53.3616;-2.8908",
    ICBM: "53.3616, -2.8908",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://spectrum-ifs.co.uk/#organization",
  name: "Spectrum Independent Financial Services Ltd",
  alternateName: "Spectrum IFS",
  description:
    "Independent financial advisers providing whole-of-market advice on pensions, investments, mortgages, protection, retirement planning, and wealth management in South Liverpool and Merseyside.",
  url: "https://spectrum-ifs.co.uk",
  telephone: "+441514482777",
  email: "info@spectrumifs.co.uk",
  foundingDate: "2002",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Liverpool",
    },
    {
      "@type": "AdministrativeArea",
      name: "Merseyside",
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
          name: "Pension Planning",
          description: "Comprehensive pension advice including workplace pensions, SIPPs, and retirement income planning.",
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
          description: "Independent mortgage advice from the whole of the market for purchases, remortgages, and buy-to-let.",
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
          name: "Retirement Planning",
          description: "Expert retirement planning to help you achieve the retirement you deserve.",
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
    name: "Spectrum IFS Office",
    address: {
      "@type": "PostalAddress",
      addressLocality: "South Liverpool",
      addressRegion: "Merseyside",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.3616,
      longitude: -2.8908,
    },
    telephone: "+441514482777",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://spectrum-ifs.co.uk/#localbusiness",
  name: "Spectrum Independent Financial Services Ltd",
  image: "https://spectrum-ifs.co.uk/logo.png",
  telephone: "+441514482777",
  email: "info@spectrumifs.co.uk",
  url: "https://spectrum-ifs.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "South Liverpool",
    addressRegion: "Merseyside",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.3616,
    longitude: -2.8908,
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
  "@id": "https://spectrum-ifs.co.uk/#website",
  url: "https://spectrum-ifs.co.uk",
  name: "Spectrum Independent Financial Services",
  description: "Independent financial advisers in South Liverpool and Merseyside",
  publisher: {
    "@id": "https://spectrum-ifs.co.uk/#organization",
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
