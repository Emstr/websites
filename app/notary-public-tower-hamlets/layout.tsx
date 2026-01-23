import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://notarypublictowerhamlets.co.uk"),
  title: {
    default: "Notary Public Tower Hamlets | Kuddus Solicitors | London E1",
    template: "%s | Notary Public Tower Hamlets",
  },
  description:
    "Professional notary public services in Tower Hamlets, London. Document authentication, legalisation, apostille services for businesses and individuals. Convenient location in East London.",
  keywords: [
    "notary public",
    "Tower Hamlets",
    "London",
    "notarisation",
    "apostille",
    "legalisation",
    "document authentication",
    "certified copies",
    "power of attorney",
    "notary London E1",
    "Kuddus Solicitors",
    "Whitechapel",
    "Canary Wharf",
  ],
  authors: [{ name: "Kuddus Solicitors" }],
  creator: "Kuddus Solicitors",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://notarypublictowerhamlets.co.uk",
    siteName: "Notary Public Tower Hamlets",
    title: "Notary Public Tower Hamlets | Kuddus Solicitors | London E1",
    description:
      "Professional notary public services in Tower Hamlets, London. Document authentication, legalisation, apostille services for businesses and individuals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notary Public Tower Hamlets - Kuddus Solicitors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notary Public Tower Hamlets | Kuddus Solicitors | London E1",
    description:
      "Professional notary public services in Tower Hamlets, London. Document authentication, legalisation, apostille services.",
  },
  alternates: {
    canonical: "https://notarypublictowerhamlets.co.uk",
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
  name: "Notary Public Tower Hamlets",
  description:
    "Professional notary public services in Tower Hamlets, London. Document authentication, legalisation, apostille services for businesses and individuals.",
  url: "https://notarypublictowerhamlets.co.uk",
  telephone: "+44 20 7247 5476",
  email: "reception@kuddussolicitors.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tower Hamlets",
    addressLocality: "Tower Hamlets",
    addressRegion: "London",
    postalCode: "E1",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.515,
    longitude: -0.034,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  priceRange: "££",
  areaServed: [
    "Tower Hamlets",
    "Whitechapel",
    "Bethnal Green",
    "Stepney",
    "Mile End",
    "Bow",
    "Canary Wharf",
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
