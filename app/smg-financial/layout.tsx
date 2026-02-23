import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SMG Financial | Independent Financial Advisers in Leeds, West Yorkshire",
    template: "%s | SMG Financial",
  },
  description:
    "The Independent Specialists since 1982. SMG F.S Limited provides corporate and individual financial advice including pensions, employee benefits, mortgages and investments in Leeds, West Yorkshire.",
  keywords: [
    "financial adviser Leeds",
    "independent financial adviser Leeds",
    "IFA Leeds",
    "corporate pensions Leeds",
    "employee benefits Leeds",
    "pension advice Leeds",
    "mortgage adviser Leeds",
    "retirement planning Leeds",
    "corporate finance Leeds",
    "SMG Financial",
    "SMG F.S Limited",
    "financial planning West Yorkshire",
  ],
  authors: [{ name: "SMG F.S Limited" }],
  creator: "SMG F.S Limited",
  publisher: "SMG F.S Limited",
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
    url: "https://smg-financial.com",
    siteName: "SMG Financial",
    title: "SMG Financial | The Independent Specialists Since 1982",
    description:
      "Over 40 years of independent financial advice for corporate and individual clients. Pensions, employee benefits, mortgages, investments and protection from Leeds, West Yorkshire.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SMG Financial - The Independent Specialists Since 1982",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMG Financial | The Independent Specialists Since 1982",
    description:
      "Over 40 years of independent financial advice for corporate and individual clients in Leeds, West Yorkshire.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://smg-financial.com",
  },
  other: {
    "geo.region": "GB-WYK",
    "geo.placename": "Leeds",
    "geo.position": "53.8968;-1.5358",
    ICBM: "53.8968, -1.5358",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://smg-financial.com/#organization",
  name: "SMG F.S Limited",
  alternateName: "SMG Financial",
  description:
    "The Independent Specialists since 1982. Corporate and individual financial advice including pensions, employee benefits, mortgages, investments and protection. Over 40 years serving clients from Leeds, West Yorkshire.",
  url: "https://smg-financial.com",
  telephone: "+441133873470",
  email: "info@smgfs.com",
  foundingDate: "1982",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Leeds",
    },
    {
      "@type": "AdministrativeArea",
      name: "West Yorkshire",
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
          name: "Corporate Pensions",
          description: "Workplace pension schemes, auto-enrolment solutions and corporate pension planning for businesses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Employee Benefits",
          description: "Comprehensive employee benefits packages including group life, group income protection and private medical insurance.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retirement Planning",
          description: "Personal retirement planning including pension consolidation, drawdown strategies and retirement income planning.",
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
          name: "Lump Sum Investment",
          description: "Expert advice on investing lump sums including ISAs, investment bonds and portfolio management.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "SMG Financial Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6A Harewood Yard",
      addressLocality: "Harewood, Leeds",
      addressRegion: "West Yorkshire",
      postalCode: "LS17 9LF",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.8968,
      longitude: -1.5358,
    },
    telephone: "+441133873470",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://smg-financial.com/#localbusiness",
  name: "SMG Financial",
  image: "https://smg-financial.com/logo.png",
  telephone: "+441133873470",
  email: "info@smgfs.com",
  url: "https://smg-financial.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6A Harewood Yard",
    addressLocality: "Harewood, Leeds",
    addressRegion: "West Yorkshire",
    postalCode: "LS17 9LF",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.8968,
    longitude: -1.5358,
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
  "@id": "https://smg-financial.com/#website",
  url: "https://smg-financial.com",
  name: "SMG Financial",
  description: "The Independent Specialists since 1982. Corporate and individual financial advice in Leeds, West Yorkshire.",
  publisher: {
    "@id": "https://smg-financial.com/#organization",
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
