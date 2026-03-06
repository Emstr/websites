import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "RSJ Financial Planning | Independent Financial Advisers in Liverpool",
    template: "%s | RSJ Financial Planning",
  },
  description:
    "Trusted independent financial advisers in Liverpool, established since 1986. Expert advice on financial planning, pensions, investments, mortgages, protection, and tax planning across Merseyside.",
  keywords: [
    "financial adviser Liverpool",
    "independent financial adviser",
    "financial planning Liverpool",
    "pension advice Liverpool",
    "investment advice Merseyside",
    "mortgage adviser Liverpool",
    "retirement planning",
    "tax planning",
    "protection insurance",
    "IFA Liverpool",
    "financial adviser Merseyside",
    "RSJ Financial Planning",
  ],
  authors: [{ name: "RSJ Financial Planning" }],
  creator: "RSJ Financial Planning",
  publisher: "RSJ Financial Planning",
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
    url: "https://rsjfinancialplanning.co.uk",
    siteName: "RSJ Financial Planning",
    title: "RSJ Financial Planning | Independent Financial Advisers in Liverpool",
    description:
      "Established since 1986, RSJ Financial Planning provides trusted independent financial advice from two offices in Liverpool. Pensions, investments, mortgages, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RSJ Financial Planning - Independent Financial Advisers in Liverpool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RSJ Financial Planning | Independent Financial Advisers Liverpool",
    description:
      "Nearly 40 years of trusted independent financial advice in Liverpool and Merseyside.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://rsjfinancialplanning.co.uk",
  },
  other: {
    "geo.region": "GB-LIV",
    "geo.placename": "Liverpool",
    "geo.position": "53.4084;-2.9916",
    ICBM: "53.4084, -2.9916",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://rsjfinancialplanning.co.uk/#organization",
  name: "RSJ Financial Planning",
  alternateName: "RSJ Financial",
  description:
    "Trusted independent financial advisers in Liverpool, established since 1986. Expert advice on financial planning, pensions, investments, mortgages, protection, and tax planning.",
  url: "https://rsjfinancialplanning.co.uk",
  telephone: "+441513632027",
  email: "enquiries@rsjfinancialplanning.co.uk",
  foundingDate: "1986",
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
          name: "Financial Planning",
          description: "Comprehensive financial planning tailored to your goals and circumstances.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pension Planning",
          description: "Expert pension advice including workplace pensions and retirement planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Planning",
          description: "Bespoke investment strategies aligned with your risk profile and objectives.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgage Advice",
          description: "Whole-of-market mortgage advice for purchases, remortgages, and buy-to-let.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protection Planning",
          description: "Life assurance, critical illness cover, and income protection solutions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tax Planning",
          description: "Strategic tax planning to optimise your wealth and minimise tax liability.",
        },
      },
    ],
  },
  location: [
    {
      "@type": "Place",
      name: "RSJ Financial Planning - Liverpool",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Liverpool",
        addressRegion: "Merseyside",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 53.4084,
        longitude: -2.9916,
      },
      telephone: "+441513632027",
    },
  ],
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://rsjfinancialplanning.co.uk/#localbusiness",
  name: "RSJ Financial Planning",
  image: "https://rsjfinancialplanning.co.uk/logo.png",
  telephone: "+441513632027",
  email: "enquiries@rsjfinancialplanning.co.uk",
  url: "https://rsjfinancialplanning.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Liverpool",
    addressRegion: "Merseyside",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.4084,
    longitude: -2.9916,
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
  "@id": "https://rsjfinancialplanning.co.uk/#website",
  url: "https://rsjfinancialplanning.co.uk",
  name: "RSJ Financial Planning",
  description: "Trusted independent financial advisers in Liverpool since 1986",
  publisher: {
    "@id": "https://rsjfinancialplanning.co.uk/#organization",
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
