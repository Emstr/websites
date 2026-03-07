import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Integral Financial Planning | Independent Financial Adviser in Nottingham",
    template: "%s | Integral Financial Planning",
  },
  description:
    "Independent financial advice in Nottingham. Expert guidance on investments, pensions, tax planning and retirement strategies from Integral Financial Planning.",
  keywords: [
    "financial adviser Nottingham",
    "independent financial adviser",
    "IFA Nottingham",
    "pension advice Nottingham",
    "investment planning",
    "tax planning",
    "retirement planning",
    "life assurance",
    "financial planning Nottingham",
  ],
  authors: [{ name: "Integral Financial Planning" }],
  creator: "Integral Financial Planning",
  publisher: "Integral Financial Planning",
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
    url: "https://integral-ifa.co.uk",
    siteName: "Integral Financial Planning",
    title: "Integral Financial Planning | Independent Financial Adviser in Nottingham",
    description:
      "Independent financial advice in Nottingham. Expert investment, pension and tax planning guidance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Integral Financial Planning - Independent Financial Adviser Nottingham",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integral Financial Planning | IFA Nottingham",
    description:
      "Independent financial advice in Nottingham. Investments, pensions, tax planning and retirement strategies.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://integral-ifa.co.uk",
  },
  other: {
    "geo.region": "GB-NTT",
    "geo.placename": "Nottingham",
    "geo.position": "52.9548;-1.1581",
    ICBM: "52.9548, -1.1581",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://integral-ifa.co.uk/#organization",
  name: "Integral Financial Planning",
  description:
    "Independent financial advice including investment planning, pension advice, tax planning, and retirement strategies in Nottingham.",
  url: "https://integral-ifa.co.uk",
  telephone: "+441159532359",
  email: "info@integral-ifa.co.uk",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    { "@type": "City", name: "Nottingham" },
    { "@type": "AdministrativeArea", name: "Nottinghamshire" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nottingham",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.9548,
    longitude: -1.1581,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://integral-ifa.co.uk/#localbusiness",
  name: "Integral Financial Planning",
  telephone: "+441159532359",
  email: "info@integral-ifa.co.uk",
  url: "https://integral-ifa.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nottingham",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.9548,
    longitude: -1.1581,
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
  "@id": "https://integral-ifa.co.uk/#website",
  url: "https://integral-ifa.co.uk",
  name: "Integral Financial Planning",
  description: "Independent financial advice in Nottingham",
  publisher: {
    "@id": "https://integral-ifa.co.uk/#organization",
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
