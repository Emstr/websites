import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://notarypublicislington.co.uk"),
  title: {
    default: "Notary Public Islington | Esther Ogun | London EC1",
    template: "%s | Notary Public Islington",
  },
  description:
    "Professional notary public services in Islington, London. Document authentication, legalisation, apostille services for businesses and individuals. Evening and weekend appointments available.",
  keywords: [
    "notary public",
    "Islington",
    "London",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
    "notary London EC1",
  ],
  authors: [{ name: "Esther Ogun" }],
  creator: "Esther Ogun",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarypublicislington.co.uk",
    siteName: "Notary Public Islington",
    title: "Notary Public Islington | Esther Ogun | London EC1",
    description:
      "Professional notary public services in Islington, London. Document authentication, legalisation, apostille services for businesses and individuals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notary Public Islington - Esther Ogun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notary Public Islington | Esther Ogun | London EC1",
    description:
      "Professional notary public services in Islington, London. Document authentication, legalisation, apostille services.",
  },
  alternates: {
    canonical: "https://notarypublicislington.co.uk",
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
  verification: {
    // Add these when you have the verification codes
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NotaryService",
  name: "Notary Public Islington",
  description:
    "Professional notary public services in Islington, London. Document authentication, legalisation, apostille services for businesses and individuals.",
  url: "https://notarypublicislington.co.uk",
  telephone: "+44 20 7278 2800",
  email: "esther@akinpalmer.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Angel Gate, 326 City Road",
    addressLocality: "Islington",
    addressRegion: "London",
    postalCode: "EC1V 2PT",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.530445,
    longitude: -0.09739,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  priceRange: "££",
  areaServed: [
    "Islington",
    "City of London",
    "Hackney",
    "Camden",
    "Westminster",
    "Tower Hamlets",
    "Southwark",
  ],
  founder: {
    "@type": "Person",
    name: "Esther Ogun",
    jobTitle: "Notary Public",
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
