import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Whitchurch IFA | Independent Financial Adviser in Cardiff",
    template: "%s | Whitchurch IFA",
  },
  description:
    "Independent financial advice in Cardiff. Expert guidance on investments, pensions, tax planning and retirement strategies from Whitchurch IFA.",
  keywords: [
    "financial adviser Cardiff",
    "independent financial adviser",
    "IFA Cardiff",
    "pension advice Cardiff",
    "investment planning",
    "tax planning",
    "retirement planning",
    "life assurance",
    "financial planning Cardiff",
  ],
  authors: [{ name: "Whitchurch IFA" }],
  creator: "Whitchurch IFA",
  publisher: "Whitchurch IFA",
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
    url: "https://whitchurchifa.co.uk",
    siteName: "Whitchurch IFA",
    title: "Whitchurch IFA | Independent Financial Adviser in Cardiff",
    description:
      "Independent financial advice in Cardiff. Expert investment, pension and tax planning guidance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Whitchurch IFA - Independent Financial Adviser Cardiff",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whitchurch IFA | IFA Cardiff",
    description:
      "Independent financial advice in Cardiff. Investments, pensions, tax planning and retirement strategies.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://whitchurchifa.co.uk",
  },
  other: {
    "geo.region": "GB-CRF",
    "geo.placename": "Cardiff",
    "geo.position": "51.5204;-3.2220",
    ICBM: "51.5204, -3.2220",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://whitchurchifa.co.uk/#organization",
  name: "Whitchurch IFA",
  description:
    "Independent financial advice including investment planning, pension advice, tax planning, and retirement strategies in Cardiff.",
  url: "https://whitchurchifa.co.uk",
  telephone: "+442920009479",
  email: "info@whitchurchifa.co.uk",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    { "@type": "City", name: "Cardiff" },
    { "@type": "AdministrativeArea", name: "South Wales" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cardiff",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5204,
    longitude: -3.2220,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://whitchurchifa.co.uk/#localbusiness",
  name: "Whitchurch IFA",
  telephone: "+442920009479",
  email: "info@whitchurchifa.co.uk",
  url: "https://whitchurchifa.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cardiff",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5204,
    longitude: -3.2220,
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
  "@id": "https://whitchurchifa.co.uk/#website",
  url: "https://whitchurchifa.co.uk",
  name: "Whitchurch IFA",
  description: "Independent financial advice in Cardiff",
  publisher: {
    "@id": "https://whitchurchifa.co.uk/#organization",
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
