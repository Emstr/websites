import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Greenwich Electrical Solutions | NICEIC Approved Electrician in Greenwich, SE10",
    template: "%s | Greenwich Electrical Solutions",
  },
  description:
    "NICEIC approved electrician in Greenwich, SE10. Rewiring, fuse board upgrades, EICR testing, lighting installation, EV charger fitting, and smart home wiring. Part P certified. Call 020 7946 0456.",
  keywords: [
    "electrician Greenwich",
    "NICEIC electrician SE10",
    "rewiring Greenwich",
    "fuse board upgrade Greenwich",
    "EICR testing Greenwich",
    "EV charger installation Greenwich",
    "lighting installation Greenwich",
    "smart home wiring Greenwich",
    "Part P electrician London",
    "electrical testing SE10",
    "local electrician Greenwich",
    "electrical services South East London",
  ],
  authors: [{ name: "Greenwich Electrical Solutions" }],
  creator: "Greenwich Electrical Solutions",
  publisher: "Greenwich Electrical Solutions",
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
    url: "https://greenwichelectrical.co.uk",
    siteName: "Greenwich Electrical Solutions",
    title: "Greenwich Electrical Solutions | NICEIC Approved Electrician in SE10",
    description:
      "NICEIC approved, Part P certified electrician in Greenwich. Rewiring, fuse boards, EV chargers, smart home wiring, and all electrical services. 5-year guarantee.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Greenwich Electrical Solutions - NICEIC Approved Electrician",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenwich Electrical Solutions | Electrician in Greenwich, SE10",
    description:
      "NICEIC approved electrician in Greenwich. Rewiring, fuse boards, EICR testing, EV chargers. Part P certified with 5-year guarantee.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://greenwichelectrical.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Greenwich, London",
    "geo.position": "51.4769;-0.0005",
    ICBM: "51.4769, -0.0005",
  },
};

const electricianSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": "https://greenwichelectrical.co.uk/#organization",
  name: "Greenwich Electrical Solutions",
  description:
    "NICEIC approved, Part P certified electrician in Greenwich, SE10. Full range of domestic and commercial electrical services including rewiring, fuse board upgrades, EICR testing, EV charger installation, and smart home wiring.",
  url: "https://greenwichelectrical.co.uk",
  telephone: "+442079460456",
  email: "info@greenwichelectrical.co.uk",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Bank Transfer, Card",
  areaServed: [
    { "@type": "City", name: "London" },
    { "@type": "AdministrativeArea", name: "Greenwich" },
    { "@type": "AdministrativeArea", name: "South East London" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rewiring", description: "Full and partial house rewiring to current regulations." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fuse Board Upgrades", description: "Consumer unit replacement and upgrades for improved safety." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Testing (EICR)", description: "Electrical Installation Condition Reports for homeowners and landlords." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lighting Installation", description: "Indoor and outdoor lighting design and installation." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "EV Charger Installation", description: "Electric vehicle charging point installation for homes and businesses." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smart Home Wiring", description: "Smart home electrical systems and automation wiring." } },
    ],
  },
  location: {
    "@type": "Place",
    name: "Greenwich Electrical Solutions",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Nelson Road",
      addressLocality: "Greenwich",
      addressRegion: "London",
      postalCode: "SE10 9JB",
      addressCountry: "GB",
    },
    geo: { "@type": "GeoCoordinates", latitude: 51.4769, longitude: -0.0005 },
    telephone: "+442079460456",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://greenwichelectrical.co.uk/#localbusiness",
  name: "Greenwich Electrical Solutions",
  image: "https://greenwichelectrical.co.uk/logo.png",
  telephone: "+442079460456",
  email: "info@greenwichelectrical.co.uk",
  url: "https://greenwichelectrical.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Nelson Road",
    addressLocality: "Greenwich",
    addressRegion: "London",
    postalCode: "SE10 9JB",
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: 51.4769, longitude: -0.0005 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://greenwichelectrical.co.uk/#website",
  url: "https://greenwichelectrical.co.uk",
  name: "Greenwich Electrical Solutions",
  description: "NICEIC approved electrician in Greenwich and South East London",
  publisher: { "@id": "https://greenwichelectrical.co.uk/#organization" },
};

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="electrician-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(electricianSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
