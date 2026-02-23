import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Gillinghams Independent Financial Advisers | Trusted Since 1908 in Bridport, Dorset",
    template: "%s | Gillinghams Independent Financial Advisers",
  },
  description:
    "Independent financial advice from Gillinghams Independent Financial Advisers Ltd, a family firm established in 1908. Wealth management, pensions, investments, ethical investing, equity release and later life advice in Bridport, Dorset.",
  keywords: [
    "financial adviser Bridport",
    "independent financial adviser Dorset",
    "IFA Bridport",
    "pension advice Bridport",
    "investment advice Dorset",
    "wealth management Dorset",
    "ethical investing Bridport",
    "equity release Dorset",
    "later life advice",
    "Gillinghams IFA",
    "Gillinghams Independent Financial Advisers",
    "financial planning Bridport",
    "retirement planning Dorset",
    "family protection Dorset",
    "ISA advice Bridport",
    "tax planning Dorset",
    "estate planning Dorset",
    "long term care advice",
  ],
  authors: [{ name: "Gillinghams Independent Financial Advisers Ltd" }],
  creator: "Gillinghams Independent Financial Advisers Ltd",
  publisher: "Gillinghams Independent Financial Advisers Ltd",
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
    url: "https://gillinghamsifa.co.uk",
    siteName: "Gillinghams Independent Financial Advisers",
    title: "Gillinghams Independent Financial Advisers | Trusted Since 1908",
    description:
      "Independent financial advice from a family firm serving Bridport and Dorset since 1908. Over 115 years of trusted guidance. Wealth management, pensions, investments, ethical investing, equity release and later life advice.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gillinghams Independent Financial Advisers - Trusted Since 1908",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gillinghams Independent Financial Advisers | Trusted Since 1908",
    description:
      "Independent financial advice in Bridport and Dorset since 1908. Over 115 years of trusted guidance.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://gillinghamsifa.co.uk",
  },
  other: {
    "geo.region": "GB-DOR",
    "geo.placename": "Bridport",
    "geo.position": "50.7333;-2.7594",
    ICBM: "50.7333, -2.7594",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://gillinghamsifa.co.uk/#organization",
  name: "Gillinghams Independent Financial Advisers Ltd",
  alternateName: "Gillinghams IFA",
  description:
    "Independent financial advice including wealth management, pensions, investments, ethical investing, equity release and later life advice. Family firm established 1908, serving Bridport and Dorset.",
  url: "https://gillinghamsifa.co.uk",
  telephone: "+441308425962",
  email: "info@gillinghamsifa.co.uk",
  foundingDate: "1908",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    { "@type": "City", name: "Bridport" },
    { "@type": "AdministrativeArea", name: "Dorset" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wealth Management", description: "Comprehensive wealth management tailored to your financial goals and circumstances." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pensions & Retirement Planning", description: "Expert pension advice including workplace pensions, SIPPs, and retirement income strategies." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Investment Planning", description: "Independent investment advice including ISAs, ethical investing and tax-efficient strategies." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Equity Release & Later Life Advice", description: "Specialist equity release and later life financial planning for homeowners." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tax & Estate Planning", description: "Inheritance tax planning and wealth transfer strategies for your family's future." } },
    ],
  },
  location: {
    "@type": "Place",
    name: "Gillinghams IFA Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2 Victoria Grove",
      addressLocality: "Bridport",
      addressRegion: "Dorset",
      postalCode: "DT6 3AA",
      addressCountry: "GB",
    },
    geo: { "@type": "GeoCoordinates", latitude: 50.7333, longitude: -2.7594 },
    telephone: "+441308425962",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://gillinghamsifa.co.uk/#localbusiness",
  name: "Gillinghams Independent Financial Advisers",
  image: "https://gillinghamsifa.co.uk/logo.png",
  telephone: "+441308425962",
  email: "info@gillinghamsifa.co.uk",
  url: "https://gillinghamsifa.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 Victoria Grove",
    addressLocality: "Bridport",
    addressRegion: "Dorset",
    postalCode: "DT6 3AA",
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: 50.7333, longitude: -2.7594 },
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
  "@id": "https://gillinghamsifa.co.uk/#website",
  url: "https://gillinghamsifa.co.uk",
  name: "Gillinghams Independent Financial Advisers",
  description: "Independent financial advice in Bridport and Dorset since 1908",
  publisher: { "@id": "https://gillinghamsifa.co.uk/#organization" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
