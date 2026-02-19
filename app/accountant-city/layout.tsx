import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "City Accounting Partners | Accountants in the City of London, EC2",
    template: "%s | City Accounting Partners",
  },
  description:
    "ACCA certified accountants in the City of London, EC2. Business accounting, tax returns, payroll, company formation, VAT services and bookkeeping for SMEs and contractors.",
  keywords: [
    "accountant city of london",
    "chartered accountants EC2",
    "tax returns city of london",
    "payroll services london",
    "company formation",
    "VAT services",
    "bookkeeping london",
    "ACCA accountant london",
    "small business accountant",
    "contractor accountant london",
    "MTD ready accountant",
    "city accounting partners",
  ],
  authors: [{ name: "City Accounting Partners" }],
  creator: "City Accounting Partners",
  publisher: "City Accounting Partners",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://cityaccountingpartners.co.uk",
    siteName: "City Accounting Partners",
    title: "City Accounting Partners | Accountants in the City of London",
    description: "ACCA certified accountants in the City of London. Business accounting, tax returns, payroll and company formation for SMEs and contractors.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "City Accounting Partners - Accountants in the City of London" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "City Accounting Partners | City of London Accountants",
    description: "ACCA certified accountants in EC2. Business accounting, tax returns, payroll and company formation.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "https://cityaccountingpartners.co.uk" },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "City of London",
    "geo.position": "51.5155;-0.0922",
    ICBM: "51.5155, -0.0922",
  },
};

const accountingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://cityaccountingpartners.co.uk/#organization",
  name: "City Accounting Partners",
  description: "ACCA certified accountants providing business accounting, tax returns, payroll, company formation, VAT services and bookkeeping in the City of London.",
  url: "https://cityaccountingpartners.co.uk",
  telephone: "+442079463456",
  email: "info@cityaccountingpartners.co.uk",
  foundingDate: "2012",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit, Credit Card",
  areaServed: [
    { "@type": "City", name: "London" },
    { "@type": "AdministrativeArea", name: "City of London" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Accounting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Accounting", description: "Comprehensive accounting services for SMEs, sole traders and partnerships." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tax Returns & Planning", description: "Personal and corporate tax returns with proactive tax planning advice." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Payroll Services", description: "Full payroll management including RTI submissions and auto-enrolment." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Company Formation", description: "Quick and compliant company formation with Companies House." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "VAT Services", description: "VAT registration, returns and planning including MTD compliance." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bookkeeping", description: "Accurate bookkeeping services using cloud-based accounting software." } },
    ],
  },
  location: {
    "@type": "Place",
    name: "City Accounting Partners Office",
    address: { "@type": "PostalAddress", streetAddress: "45 Moorgate", addressLocality: "City of London", addressRegion: "London", postalCode: "EC2R 6EL", addressCountry: "GB" },
    geo: { "@type": "GeoCoordinates", latitude: 51.5155, longitude: -0.0922 },
    telephone: "+442079463456",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://cityaccountingpartners.co.uk/#localbusiness",
  name: "City Accounting Partners",
  image: "https://cityaccountingpartners.co.uk/logo.png",
  telephone: "+442079463456",
  email: "info@cityaccountingpartners.co.uk",
  url: "https://cityaccountingpartners.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "45 Moorgate", addressLocality: "City of London", addressRegion: "London", postalCode: "EC2R 6EL", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5155, longitude: -0.0922 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "18:00" },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://cityaccountingpartners.co.uk/#website",
  url: "https://cityaccountingpartners.co.uk",
  name: "City Accounting Partners",
  description: "ACCA certified accountants in the City of London, EC2",
  publisher: { "@id": "https://cityaccountingpartners.co.uk/#organization" },
};

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="accounting-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(accountingServiceSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
