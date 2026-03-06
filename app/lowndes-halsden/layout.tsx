import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Lowndes Halsden | Independent Financial Advisers in Cardiff, Wales",
    template: "%s | Lowndes Halsden",
  },
  description:
    "Independent financial advisers in Cardiff, Wales. Expert advice on pensions, investments, mortgages, protection, wealth management and corporate financial planning. Named in Top 50 fastest growing companies in Wales.",
  keywords: [
    "financial adviser Cardiff",
    "independent financial adviser Wales",
    "pension advice Cardiff",
    "investment planning Wales",
    "mortgage adviser Cardiff",
    "wealth management Cardiff",
    "corporate financial planning Wales",
    "protection advice Cardiff",
    "financial planning Cardiff",
    "IFA Cardiff",
    "Lowndes Halsden",
    "financial adviser Wales",
  ],
  authors: [{ name: "Lowndes Halsden" }],
  creator: "Lowndes Halsden",
  publisher: "Lowndes Halsden",
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
    url: "https://lowndesonline.co.uk",
    siteName: "Lowndes Halsden",
    title: "Lowndes Halsden | Independent Financial Advisers in Cardiff",
    description:
      "Expert independent financial advice from Cardiff, Wales. Pensions, investments, mortgages, protection, wealth management and corporate financial planning. Top 50 fastest growing company in Wales.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lowndes Halsden - Independent Financial Advisers Cardiff",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lowndes Halsden | Independent Financial Advisers Cardiff",
    description:
      "Expert independent financial advice from Cardiff, Wales. Pensions, investments, mortgages, protection and wealth management.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://lowndesonline.co.uk",
  },
  other: {
    "geo.region": "GB-WLS",
    "geo.placename": "Cardiff",
    "geo.position": "51.4816;-3.1791",
    ICBM: "51.4816, -3.1791",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://lowndesonline.co.uk/#organization",
  name: "Lowndes Halsden",
  description:
    "Independent financial advisers in Cardiff, Wales providing expert advice on pensions, investments, mortgages, protection, wealth management and corporate financial planning.",
  url: "https://lowndesonline.co.uk",
  telephone: "+442920694242",
  email: "justask@lowndesonline.co.uk",
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
          name: "Financial Planning",
          description: "Comprehensive independent financial planning tailored to your goals and circumstances.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Advice",
          description: "Expert pension planning including workplace pensions, SIPPs and retirement income strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning",
          description: "Bespoke investment strategies designed to grow your wealth in line with your risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgage Advice",
          description: "Whole-of-market mortgage advice for residential, buy-to-let and remortgage clients.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protection",
          description: "Life assurance, critical illness cover, income protection and family protection planning.",
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
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Financial Planning",
          description: "Workplace pension schemes, employee benefits and corporate financial planning for Welsh businesses.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Lowndes Halsden Cardiff Office",
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
    telephone: "+442920694242",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://lowndesonline.co.uk/#localbusiness",
  name: "Lowndes Halsden",
  image: "https://lowndesonline.co.uk/logo.png",
  telephone: "+442920694242",
  email: "justask@lowndesonline.co.uk",
  url: "https://lowndesonline.co.uk",
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
  "@id": "https://lowndesonline.co.uk/#website",
  url: "https://lowndesonline.co.uk",
  name: "Lowndes Halsden",
  description: "Independent financial advisers in Cardiff, Wales",
  publisher: {
    "@id": "https://lowndesonline.co.uk/#organization",
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
