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
    "Sussex Independent Financial Advisers Ltd - Trusted independent financial advisers in Hailsham, East Sussex. Expert advice on investments, pensions, mortgages, life cover, insurance, and will writing. Over 20 years experience. FCA regulated.",
  keywords: [
    "financial adviser Hailsham",
    "independent financial adviser East Sussex",
    "pension adviser Sussex",
    "mortgage broker Hailsham",
    "investment advice East Sussex",
    "life cover Sussex",
    "will writing Hailsham",
    "FCA regulated financial adviser",
    "Sussex IFA",
    "financial planning East Sussex",
  ],
  authors: [{ name: "Sussex Independent Financial Advisers Ltd" }],
  creator: "Sussex Independent Financial Advisers Ltd",
  publisher: "Sussex Independent Financial Advisers Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.sussexifa.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sussex IFA | Independent Financial Advisers in Hailsham",
    description:
      "Expert financial advice on investments, pensions, mortgages, life cover, and insurance from FCA regulated advisers with over 20 years experience serving East Sussex.",
    url: "https://www.sussexifa.com",
    siteName: "Sussex IFA",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sussex IFA | Independent Financial Advisers",
    description:
      "Expert financial advice on investments, pensions, mortgages, and life cover. FCA regulated advisers in Hailsham, East Sussex.",
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
  name: "Sussex Independent Financial Advisers Ltd",
  description:
    "Independent financial advisers providing expert advice on investments, pensions, mortgages, life cover, insurance, and will writing across East Sussex.",
  url: "https://www.sussexifa.com",
  telephone: "01323 441788",
  email: "reception@sussexifa.com",
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
    latitude: 50.8622,
    longitude: 0.2536,
  },
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
  serviceType: [
    "Investment Advice",
    "Pension Planning",
    "Mortgage Advice",
    "Life Cover",
    "Insurance",
    "Will Writing",
    "Financial Planning",
  ],
  priceRange: "Free Initial Consultation",
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
  "@id": "https://www.sussexifa.com/#business",
  name: "Sussex Independent Financial Advisers Ltd",
  image: "https://www.sussexifa.com/logo.png",
  telephone: "01323 441788",
  email: "reception@sussexifa.com",
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
    latitude: 50.8622,
    longitude: 0.2536,
  },
  url: "https://www.sussexifa.com",
  priceRange: "$$",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sussex Independent Financial Advisers Ltd",
  legalName: "Sussex Independent Financial Advisers Ltd",
  url: "https://www.sussexifa.com",
  logo: "https://www.sussexifa.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "01323 441788",
    contactType: "customer service",
    email: "reception@sussexifa.com",
    areaServed: "GB",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Downford House, 16 George Street",
    addressLocality: "Hailsham",
    addressRegion: "East Sussex",
    postalCode: "BN27 1AE",
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
