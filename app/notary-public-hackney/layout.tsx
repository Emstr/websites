import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://notarypublichackney.com"),
  title: {
    default: "Notary Public Hackney | Kuddus Solicitors | London E8",
    template: "%s | Notary Public Hackney",
  },
  description:
    "Professional notary public services in Hackney, London. Document authentication, legalisation, apostille services for businesses and individuals. Convenient location in East London.",
  keywords: [
    "notary public",
    "Hackney",
    "London",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
    "notary London E8",
    "Kuddus Solicitors",
  ],
  authors: [{ name: "Kuddus Solicitors" }],
  creator: "Kuddus Solicitors",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarypublichackney.com",
    siteName: "Notary Public Hackney",
    title: "Notary Public Hackney | Kuddus Solicitors | London E8",
    description:
      "Professional notary public services in Hackney, London. Document authentication, legalisation, apostille services for businesses and individuals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notary Public Hackney - Kuddus Solicitors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notary Public Hackney | Kuddus Solicitors | London E8",
    description:
      "Professional notary public services in Hackney, London. Document authentication, legalisation, apostille services.",
  },
  alternates: {
    canonical: "https://notarypublichackney.com",
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
  "@type": "NotaryService",
  name: "Notary Public Hackney",
  description:
    "Professional notary public services in Hackney, London. Document authentication, legalisation, apostille services for businesses and individuals.",
  url: "https://notarypublichackney.com",
  telephone: "+44 20 7247 5476",
  email: "reception@kuddussolicitors.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hackney",
    addressLocality: "Hackney",
    addressRegion: "London",
    postalCode: "E8",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.545,
    longitude: -0.0553,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  priceRange: "££",
  areaServed: [
    "Hackney",
    "Dalston",
    "Stoke Newington",
    "Clapton",
    "Shoreditch",
    "Islington",
    "Tower Hamlets",
  ],
  founder: {
    "@type": "Organization",
    name: "Kuddus Solicitors",
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
