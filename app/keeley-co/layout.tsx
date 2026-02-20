import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Keeley & Co | Chartered Financial Planners in Birmingham Since 1928",
    template: "%s | Keeley & Co",
  },
  description:
    "Keeley & Co - Chartered Financial Planners in Birmingham's Jewellery Quarter since 1928. Independent advice on wealth management, pensions, investments, life insurance, and financial planning. FCA regulated.",
  keywords: [
    "financial adviser Birmingham",
    "chartered financial planner",
    "independent financial advice Birmingham",
    "wealth management Jewellery Quarter",
    "pension planning Birmingham",
    "life insurance advice",
    "investment planning",
    "FCA regulated Birmingham",
    "Keeley and Co",
    "financial planning since 1928",
  ],
  authors: [{ name: "Keeley & Co" }],
  creator: "Keeley & Co",
  publisher: "Keeley & Co",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://keeleys.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Keeley & Co | Chartered Financial Planners in Birmingham Since 1928",
    description:
      "Nearly a century of trusted independent financial advice from Birmingham's Jewellery Quarter. Chartered Financial Planners offering wealth management, pensions, investments, and life planning.",
    url: "https://keeleys.co.uk",
    siteName: "Keeley & Co",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keeley & Co | Chartered Financial Planners Since 1928",
    description:
      "Nearly a century of trusted independent financial advice in Birmingham. Chartered Financial Planners. FCA regulated.",
  },
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
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Keeley & Co",
  description:
    "Chartered Financial Planners providing independent financial advice since 1928. Specialising in wealth management, life planning, pensions, investments, life insurance, and general insurance from Birmingham's Jewellery Quarter.",
  url: "https://keeleys.co.uk",
  telephone: "0121 236 1288",
  email: "contact@keeleys.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 St Pauls Terrace, Northwood St",
    addressLocality: "Birmingham",
    addressRegion: "West Midlands",
    postalCode: "B3 1TH",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.489,
    longitude: -1.907,
  },
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
  serviceType: [
    "Independent Financial Advice",
    "Life Planning",
    "Wealth Management",
    "Life Insurance",
    "Investment Planning",
    "Pension Planning",
    "General Insurance",
    "Chartered Financial Planning",
  ],
  priceRange: "Free Initial Consultation",
  foundingDate: "1928",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
  sameAs: [],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "FCA Regulation",
    description: "Authorised and Regulated by the Financial Conduct Authority",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://keeleys.co.uk/#business",
  name: "Keeley & Co",
  image: "https://keeleys.co.uk/logo.png",
  telephone: "0121 236 1288",
  email: "contact@keeleys.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 St Pauls Terrace, Northwood St",
    addressLocality: "Birmingham",
    addressRegion: "West Midlands",
    postalCode: "B3 1TH",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.489,
    longitude: -1.907,
  },
  url: "https://keeleys.co.uk",
  priceRange: "$$",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Keeley & Co",
  legalName: "Keeley & Co",
  url: "https://keeleys.co.uk",
  logo: "https://keeleys.co.uk/logo.png",
  foundingDate: "1928",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "0121 236 1288",
    contactType: "customer service",
    email: "contact@keeleys.co.uk",
    areaServed: "GB",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 St Pauls Terrace, Northwood St",
    addressLocality: "Birmingham",
    addressRegion: "West Midlands",
    postalCode: "B3 1TH",
    addressCountry: "GB",
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
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
