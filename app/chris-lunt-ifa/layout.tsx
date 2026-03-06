import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Chris Lunt Independent Financial Adviser | Personal Financial Advice in Liverpool & Merseyside",
    template: "%s | Chris Lunt IFA",
  },
  description:
    "Independent financial adviser in Lydiate, Liverpool. Personal financial advice on pensions, investments, protection, retirement planning and wealth management. FCA regulated with £65 million under advice.",
  keywords: [
    "independent financial adviser",
    "IFA Liverpool",
    "financial adviser Lydiate",
    "pension advice Merseyside",
    "investment planning Liverpool",
    "retirement planning",
    "wealth management",
    "protection advice",
    "financial planning Merseyside",
    "personal financial adviser",
    "Chris Lunt IFA",
    "independent financial advice",
  ],
  authors: [{ name: "Chris Lunt Independent Financial Adviser" }],
  creator: "Chris Lunt Independent Financial Adviser",
  publisher: "Chris Lunt Independent Financial Adviser",
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
    url: "https://chrisluntifa.co.uk",
    siteName: "Chris Lunt Independent Financial Adviser",
    title: "Chris Lunt IFA | Personal Financial Advice in Liverpool & Merseyside",
    description:
      "Independent financial adviser providing personal, dedicated service from Lydiate, Liverpool. Pensions, investments, protection and wealth management with £65 million under advice.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chris Lunt Independent Financial Adviser - Personal Financial Advice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Lunt IFA | Personal Financial Advice in Liverpool",
    description:
      "Independent financial adviser in Lydiate, Liverpool. Personal service with £65 million under advice.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://chrisluntifa.co.uk",
  },
  other: {
    "geo.region": "GB-MSY",
    "geo.placename": "Lydiate, Liverpool",
    "geo.position": "53.5200;-2.9600",
    ICBM: "53.5200, -2.9600",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://chrisluntifa.co.uk/#organization",
  name: "Chris Lunt Independent Financial Adviser",
  alternateName: "Chris Lunt IFA",
  description:
    "Independent financial adviser providing personal financial advice on pensions, investments, protection, retirement planning and wealth management from Lydiate, Liverpool.",
  url: "https://chrisluntifa.co.uk",
  telephone: "+441519236173",
  email: "enquiries@chrisluntifa.co.uk",
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
          name: "Independent Financial Advice",
          description: "Whole-of-market independent financial advice tailored to your personal circumstances.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Planning",
          description: "Comprehensive pension advice including workplace pensions, SIPPs and retirement income planning.",
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
          name: "Protection",
          description: "Life assurance, critical illness cover and income protection planning.",
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
    name: "Chris Lunt IFA Office",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lydiate",
      addressRegion: "Merseyside",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.52,
      longitude: -2.96,
    },
    telephone: "+441519236173",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://chrisluntifa.co.uk/#localbusiness",
  name: "Chris Lunt Independent Financial Adviser",
  image: "https://chrisluntifa.co.uk/logo.png",
  telephone: "+441519236173",
  email: "enquiries@chrisluntifa.co.uk",
  url: "https://chrisluntifa.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lydiate",
    addressRegion: "Merseyside",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.52,
    longitude: -2.96,
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
  "@id": "https://chrisluntifa.co.uk/#website",
  url: "https://chrisluntifa.co.uk",
  name: "Chris Lunt Independent Financial Adviser",
  description: "Personal independent financial advice in Lydiate, Liverpool and Merseyside",
  publisher: {
    "@id": "https://chrisluntifa.co.uk/#organization",
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
