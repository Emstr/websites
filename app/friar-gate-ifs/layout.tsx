import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Friar Gate IFS | Independent Financial Advisers in Derby",
    template: "%s | Friar Gate IFS",
  },
  description:
    "Friar Gate Independent Financial Services Ltd - Trusted independent financial advisers in Derby since 2004. Expert advice on investments, retirement planning, inheritance tax, and whole-of-market independent financial guidance. FCA regulated.",
  keywords: [
    "financial adviser Derby",
    "independent financial advice Derby",
    "investment advice Pride Park",
    "retirement planning Derby",
    "inheritance tax planning",
    "pension advice Derbyshire",
    "whole of market IFA",
    "FCA regulated Derby",
    "cost reduction financial advice",
    "financial planning Derbyshire",
  ],
  authors: [{ name: "Friar Gate Independent Financial Services Ltd" }],
  creator: "Friar Gate Independent Financial Services Ltd",
  publisher: "Friar Gate Independent Financial Services Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.friargate.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Friar Gate IFS | Independent Financial Advisers in Derby",
    description:
      "Fully independent financial advisers providing whole-of-market advice on investments, retirement planning, and inheritance tax. Serving Derby and Derbyshire since 2004.",
    url: "https://www.friargate.net",
    siteName: "Friar Gate IFS",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Friar Gate IFS | Independent Financial Advisers in Derby",
    description:
      "Fully independent financial advisers in Derby. Investment advice, retirement planning, inheritance tax planning. FCA regulated.",
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
  name: "Friar Gate Independent Financial Services Ltd",
  description:
    "Fully independent financial advisers providing whole-of-market advice on investments, retirement planning, inheritance tax planning, and cost reduction strategies since 2004.",
  url: "https://www.friargate.net",
  telephone: "01332 438361",
  email: "info@friargate.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 Prospect Place, Millennium Way, Pride Park",
    addressLocality: "Derby",
    addressRegion: "Derbyshire",
    postalCode: "DE24 8HG",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.9117,
    longitude: -1.4497,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Derby",
    },
    {
      "@type": "AdministrativeArea",
      name: "Derbyshire",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  serviceType: [
    "Investment Advice",
    "Retirement Planning",
    "Inheritance Tax Planning",
    "Cost Reduction",
    "Whole-of-Market Independent Advice",
    "Financial Planning",
    "Pension Advice",
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
  foundingDate: "2004",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "FCA Regulation",
    description: "Authorised and Regulated by the Financial Conduct Authority",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.friargate.net/#business",
  name: "Friar Gate Independent Financial Services Ltd",
  image: "https://www.friargate.net/logo.png",
  telephone: "01332 438361",
  email: "info@friargate.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 Prospect Place, Millennium Way, Pride Park",
    addressLocality: "Derby",
    addressRegion: "Derbyshire",
    postalCode: "DE24 8HG",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.9117,
    longitude: -1.4497,
  },
  url: "https://www.friargate.net",
  priceRange: "$$",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Friar Gate Independent Financial Services Ltd",
  legalName: "Friar Gate Independent Financial Services Ltd",
  url: "https://www.friargate.net",
  logo: "https://www.friargate.net/logo.png",
  foundingDate: "2004",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "01332 438361",
    contactType: "customer service",
    email: "info@friargate.net",
    areaServed: "GB",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 Prospect Place, Millennium Way, Pride Park",
    addressLocality: "Derby",
    addressRegion: "Derbyshire",
    postalCode: "DE24 8HG",
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
