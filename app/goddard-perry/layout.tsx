import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://goddardperry.com"),
  title: {
    default: "Goddard Perry Consulting | Independent Financial Advisers | Croydon",
    template: "%s | Goddard Perry Consulting",
  },
  description:
    "Independent financial advisers in Croydon, South London. Expert advice on pensions, investments, retirement planning, wealth management, and corporate employee benefits. FCA regulated.",
  keywords: [
    "independent financial adviser",
    "IFA Croydon",
    "financial planner Croydon",
    "pension advice Croydon",
    "investment advice South London",
    "retirement planning",
    "wealth management",
    "corporate employee benefits",
    "financial planning Croydon",
    "FCA regulated adviser",
  ],
  authors: [{ name: "Goddard Perry Consulting" }],
  creator: "Goddard Perry Consulting",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://goddardperry.com",
    siteName: "Goddard Perry Consulting",
    title: "Goddard Perry Consulting | Independent Financial Advisers | Croydon",
    description:
      "Independent financial advisers in Croydon, South London. Expert advice on pensions, investments, retirement planning, and corporate employee benefits.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Goddard Perry Consulting - Independent Financial Advisers in Croydon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goddard Perry Consulting | Independent Financial Advisers | Croydon",
    description:
      "Independent financial advisers in Croydon, South London. Expert advice on pensions, investments, retirement planning, and corporate employee benefits.",
  },
  alternates: {
    canonical: "https://goddardperry.com",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Goddard Perry Consulting",
  description:
    "Independent financial advisers in Croydon, South London. Expert advice on pensions, investments, retirement planning, wealth management, and corporate employee benefits.",
  url: "https://goddardperry.com",
  telephone: "+44 20 8603 3700",
  email: "contact@goddardperry.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Corinthian House, 17 Lansdowne Road",
    addressLocality: "Croydon",
    addressRegion: "London",
    postalCode: "CR0 2BX",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.3762,
    longitude: -0.0982,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  priceRange: "££",
  areaServed: [
    "Croydon",
    "South Croydon",
    "Purley",
    "Coulsdon",
    "Sanderstead",
    "Selsdon",
    "Bromley",
    "Sutton",
    "South London",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Advisory Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pension Planning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Investment Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Retirement Planning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wealth Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Employee Benefits" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Protection & Insurance" } },
    ],
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
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
