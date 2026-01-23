import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Total Finance | Independent Financial Advisers in Bromley, London",
    template: "%s | Total Finance",
  },
  description:
    "Total Finance (UK) Ltd - Your trusted independent financial advisers in Bromley. Expert advice on mortgages, secured loans, life assurance, pensions, and investment planning. FCA regulated.",
  keywords: [
    "financial adviser Bromley",
    "mortgage broker London",
    "independent financial advice",
    "pension planning",
    "life assurance",
    "income protection",
    "critical illness cover",
    "secured loans UK",
    "FCA regulated",
    "financial planning",
  ],
  authors: [{ name: "Total Finance (UK) Ltd" }],
  creator: "Total Finance (UK) Ltd",
  publisher: "Total Finance (UK) Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://total-finance.org.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Total Finance | Independent Financial Advisers in Bromley",
    description:
      "Expert financial advice on mortgages, pensions, life assurance, and investment planning. FCA regulated independent financial advisers serving Bromley and Greater London.",
    url: "https://total-finance.org.uk",
    siteName: "Total Finance",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Total Finance | Independent Financial Advisers",
    description:
      "Expert financial advice on mortgages, pensions, life assurance, and investment planning. FCA regulated.",
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
  name: "Total Finance (UK) Ltd",
  description:
    "Independent financial advisers providing expert advice on mortgages, secured loans, life assurance, critical illness cover, income protection, and pension planning.",
  url: "https://total-finance.org.uk",
  telephone: "020 8695 7548",
  email: "info@total-finance.org.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "184-190 Farnaby Road",
    addressLocality: "Bromley",
    addressRegion: "Greater London",
    postalCode: "BR2 0BB",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.408,
    longitude: -0.0315,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Bromley",
    },
    {
      "@type": "AdministrativeArea",
      name: "Greater London",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  serviceType: [
    "Mortgage Advice",
    "Secured Loans",
    "Life Assurance",
    "Critical Illness Cover",
    "Income Protection",
    "Pension Planning",
    "Financial Planning",
    "Investment Advice",
  ],
  priceRange: "Free Initial Consultation",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
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
  "@id": "https://total-finance.org.uk/#business",
  name: "Total Finance (UK) Ltd",
  image: "https://total-finance.org.uk/logo.png",
  telephone: "020 8695 7548",
  email: "info@total-finance.org.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "184-190 Farnaby Road",
    addressLocality: "Bromley",
    addressRegion: "Greater London",
    postalCode: "BR2 0BB",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.408,
    longitude: -0.0315,
  },
  url: "https://total-finance.org.uk",
  priceRange: "$$",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Total Finance (UK) Ltd",
  legalName: "Total Finance (UK) Ltd",
  url: "https://total-finance.org.uk",
  logo: "https://total-finance.org.uk/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "020 8695 7548",
    contactType: "customer service",
    email: "info@total-finance.org.uk",
    areaServed: "GB",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "184-190 Farnaby Road",
    addressLocality: "Bromley",
    addressRegion: "Greater London",
    postalCode: "BR2 0BB",
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
