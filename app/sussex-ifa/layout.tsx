import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Sussex IFA | Independent Financial Advisers in Hailsham, East Sussex",
    template: "%s | Sussex IFA",
  },
  description:
    "Independent financial advice from Sussex Independent Financial Advisers Ltd in Hailsham, East Sussex. Pension planning, life assurance, income protection, investments, regular savings and mortgages. SIFA Pro Trusted Adviser, ISO 27001 certified.",
  keywords: [
    "financial adviser Hailsham",
    "independent financial adviser East Sussex",
    "IFA Hailsham",
    "pension planning East Sussex",
    "life assurance adviser Sussex",
    "income protection East Sussex",
    "investment adviser Hailsham",
    "mortgage adviser East Sussex",
    "financial planning Eastbourne",
    "Sussex IFA",
    "SIFA Pro Trusted Adviser",
    "ISO 27001 financial adviser",
  ],
  authors: [{ name: "Sussex Independent Financial Advisers Ltd" }],
  creator: "Sussex Independent Financial Advisers Ltd",
  publisher: "Sussex Independent Financial Advisers Ltd",
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
    url: "https://sussexifa.com",
    siteName: "Sussex IFA",
    title: "Sussex IFA | Independent Financial Advisers in Hailsham, East Sussex",
    description:
      "Independent financial advice from a trusted, accredited firm in Hailsham, East Sussex. Pension planning, life assurance, income protection, investments and mortgages. ISO 27001 certified.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sussex IFA - Independent Financial Advisers in Hailsham, East Sussex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sussex IFA | Independent Financial Advisers",
    description:
      "Independent financial advice in Hailsham, East Sussex. Pension planning, life assurance, income protection, investments and mortgages.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://sussexifa.com",
  },
  other: {
    "geo.region": "GB-ESX",
    "geo.placename": "Hailsham",
    "geo.position": "50.8621;0.2540",
    ICBM: "50.8621, 0.2540",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://sussexifa.com/#organization",
  name: "Sussex Independent Financial Advisers Ltd",
  alternateName: "Sussex IFA",
  description:
    "Independent financial advice including pension planning, life assurance, income protection, investments, regular savings and mortgages. SIFA Pro Trusted Adviser and ISO 27001 certified, serving Hailsham and East Sussex.",
  url: "https://sussexifa.com",
  telephone: "+441323441788",
  email: "reception@sussexifa.com",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Hailsham",
    },
    {
      "@type": "AdministrativeArea",
      name: "East Sussex",
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
          description: "Comprehensive pension planning including workplace pensions, SIPPs, and retirement income strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Life Assurance",
          description: "Life assurance advice to protect your family and dependants against the unexpected.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Income Protection",
          description: "Income protection insurance to safeguard your earnings if you are unable to work.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investments & Regular Savings",
          description: "Whole-of-market investment and regular savings advice tailored to your financial goals.",
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
    ],
  },
  location: {
    "@type": "Place",
    name: "Sussex IFA Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Downford House, 16 George Street",
      addressLocality: "Hailsham",
      addressRegion: "East Sussex",
      postalCode: "BN27 1AE",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.8621,
      longitude: 0.2540,
    },
    telephone: "+441323441788",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sussexifa.com/#localbusiness",
  name: "Sussex IFA",
  image: "https://sussexifa.com/logo.png",
  telephone: "+441323441788",
  email: "reception@sussexifa.com",
  url: "https://sussexifa.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Downford House, 16 George Street",
    addressLocality: "Hailsham",
    addressRegion: "East Sussex",
    postalCode: "BN27 1AE",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.8621,
    longitude: 0.2540,
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
  "@id": "https://sussexifa.com/#website",
  url: "https://sussexifa.com",
  name: "Sussex IFA",
  description: "Independent financial advice in Hailsham, East Sussex. SIFA Pro Trusted Adviser, ISO 27001 certified.",
  publisher: {
    "@id": "https://sussexifa.com/#organization",
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
