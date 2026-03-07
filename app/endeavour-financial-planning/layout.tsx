import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Endeavour Financial Planning | Independent Financial Adviser in Wirral",
    template: "%s | Endeavour Financial Planning",
  },
  description:
    "Independent financial advice in Wirral. Expert guidance on investments, pensions, tax planning and retirement strategies from Endeavour Financial Planning.",
  keywords: [
    "financial adviser Wirral",
    "independent financial adviser",
    "IFA Wirral",
    "pension advice Wirral",
    "investment planning",
    "tax planning",
    "retirement planning",
    "life assurance",
    "financial planning Wirral",
  ],
  authors: [{ name: "Endeavour Financial Planning" }],
  creator: "Endeavour Financial Planning",
  publisher: "Endeavour Financial Planning",
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
    url: "https://endeavourfp.co.uk",
    siteName: "Endeavour Financial Planning",
    title: "Endeavour Financial Planning | Independent Financial Adviser in Wirral",
    description:
      "Independent financial advice in Wirral. Expert investment, pension and tax planning guidance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Endeavour Financial Planning - Independent Financial Adviser Wirral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Endeavour Financial Planning | IFA Wirral",
    description:
      "Independent financial advice in Wirral. Investments, pensions, tax planning and retirement strategies.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://endeavourfp.co.uk",
  },
  other: {
    "geo.region": "GB-CHW",
    "geo.placename": "Wirral",
    "geo.position": "53.3727;-3.0738",
    ICBM: "53.3727, -3.0738",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://endeavourfp.co.uk/#organization",
  name: "Endeavour Financial Planning",
  description:
    "Independent financial advice including investment planning, pension advice, tax planning, and retirement strategies in Wirral.",
  url: "https://endeavourfp.co.uk",
  telephone: "+441513462218",
  email: "info@endeavourfp.co.uk",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    { "@type": "City", name: "Wirral" },
    { "@type": "AdministrativeArea", name: "Merseyside" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wirral",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.3727,
    longitude: -3.0738,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://endeavourfp.co.uk/#localbusiness",
  name: "Endeavour Financial Planning",
  telephone: "+441513462218",
  email: "info@endeavourfp.co.uk",
  url: "https://endeavourfp.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wirral",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.3727,
    longitude: -3.0738,
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
  "@id": "https://endeavourfp.co.uk/#website",
  url: "https://endeavourfp.co.uk",
  name: "Endeavour Financial Planning",
  description: "Independent financial advice in Wirral",
  publisher: {
    "@id": "https://endeavourfp.co.uk/#organization",
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
