import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Pembrokeshire Financial Services | Independent Financial Advisers in Wales",
    template: "%s | Pembrokeshire Financial Services",
  },
  description:
    "Pembrokeshire Financial Services - Independent financial advisers providing expert mortgage advice and financial planning across Wales. Serving Cardiff, Newport, Swansea, Bridgend, Haverfordwest, Port Talbot, and Tenby.",
  keywords: [
    "financial adviser Wales",
    "mortgage adviser Pembrokeshire",
    "independent financial advice Wales",
    "mortgage broker Cardiff",
    "financial planning Swansea",
    "pension advice Newport",
    "IFA Haverfordwest",
    "financial adviser Bridgend",
    "mortgage advice Port Talbot",
    "financial services Tenby",
  ],
  authors: [{ name: "Pembrokeshire Financial Services" }],
  creator: "Pembrokeshire Financial Services",
  publisher: "Pembrokeshire Financial Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kolider.co.uk/pembrokeshire-fs"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pembrokeshire Financial Services | Independent Financial Advisers in Wales",
    description:
      "Expert independent financial advice and mortgage services across Wales. Serving Cardiff, Swansea, Newport, Bridgend, Haverfordwest, Port Talbot, and Tenby.",
    url: "https://kolider.co.uk/pembrokeshire-fs",
    siteName: "Pembrokeshire Financial Services",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pembrokeshire Financial Services | Independent Financial Advisers",
    description:
      "Expert independent financial advice and mortgage services across Wales. FCA regulated.",
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
  name: "Pembrokeshire Financial Services",
  description:
    "Independent financial advisers providing expert mortgage advice and financial planning across Wales, serving Cardiff, Newport, Swansea, Bridgend, Haverfordwest, Port Talbot, and Tenby.",
  url: "https://kolider.co.uk/pembrokeshire-fs",
  telephone: "01646 687767",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pembroke",
    addressRegion: "Pembrokeshire",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.674,
    longitude: -4.912,
  },
  areaServed: [
    { "@type": "City", name: "Cardiff" },
    { "@type": "City", name: "Newport" },
    { "@type": "City", name: "Swansea" },
    { "@type": "City", name: "Bridgend" },
    { "@type": "City", name: "Haverfordwest" },
    { "@type": "City", name: "Port Talbot" },
    { "@type": "City", name: "Tenby" },
    { "@type": "AdministrativeArea", name: "Wales" },
  ],
  serviceType: [
    "Independent Financial Advice",
    "Mortgage Advice",
    "Pension Planning",
    "Investment Planning",
    "Protection Insurance",
    "Retirement Planning",
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
  "@id": "https://kolider.co.uk/pembrokeshire-fs/#business",
  name: "Pembrokeshire Financial Services",
  image: "https://kolider.co.uk/pembrokeshire-fs/logo.png",
  telephone: "01646 687767",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pembroke",
    addressRegion: "Pembrokeshire",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.674,
    longitude: -4.912,
  },
  url: "https://kolider.co.uk/pembrokeshire-fs",
  priceRange: "$$",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pembrokeshire Financial Services",
  legalName: "Pembrokeshire Financial Services",
  url: "https://kolider.co.uk/pembrokeshire-fs",
  logo: "https://kolider.co.uk/pembrokeshire-fs/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "01646 687767",
    contactType: "customer service",
    areaServed: "GB",
    availableLanguage: ["English", "Welsh"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pembroke",
    addressRegion: "Pembrokeshire",
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
