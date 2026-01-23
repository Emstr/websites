import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://notarypublicstamfordhill.co.uk"),
  title: {
    default: "Notary Public Stamford Hill | London N16",
    template: "%s | Notary Public Stamford Hill",
  },
  description:
    "Professional notary public services in Stamford Hill, London. Document authentication, legalisation, apostille services for businesses and individuals. Convenient location in North London N16.",
  keywords: [
    "notary public",
    "Stamford Hill",
    "London",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
    "notary London N16",
    "Stoke Newington notary",
    "Hackney notary",
  ],
  authors: [{ name: "Notary Public Stamford Hill" }],
  creator: "Notary Public Stamford Hill",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarypublicstamfordhill.co.uk",
    siteName: "Notary Public Stamford Hill",
    title: "Notary Public Stamford Hill | London N16",
    description:
      "Professional notary public services in Stamford Hill, London. Document authentication, legalisation, apostille services for businesses and individuals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notary Public Stamford Hill",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notary Public Stamford Hill | London N16",
    description:
      "Professional notary public services in Stamford Hill, London. Document authentication, legalisation, apostille services.",
  },
  alternates: {
    canonical: "https://notarypublicstamfordhill.co.uk",
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
  name: "Notary Public Stamford Hill",
  description:
    "Professional notary public services in Stamford Hill, London. Document authentication, legalisation, apostille services for businesses and individuals.",
  url: "https://notarypublicstamfordhill.co.uk",
  telephone: "+44 20 8800 5000",
  email: "info@notarypublicstamfordhill.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Stamford Hill",
    addressLocality: "Stamford Hill",
    addressRegion: "London",
    postalCode: "N16",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5705,
    longitude: -0.0742,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  priceRange: "££",
  areaServed: [
    "Stamford Hill",
    "Stoke Newington",
    "Tottenham",
    "Haringey",
    "Hackney",
    "Seven Sisters",
    "Finsbury Park",
  ],
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
