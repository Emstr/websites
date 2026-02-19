import type { Metadata } from "next";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const siteUrl = "https://shoreditcharchitecture.co.uk";

export const metadata: Metadata = {
  title: { default: "Shoreditch Architecture Studio | RIBA Chartered Architects in Shoreditch, E2", template: "%s | Shoreditch Architecture Studio" },
  description: "RIBA Chartered and ARB Registered architects in Shoreditch, East London. Award-winning residential and commercial architecture, planning applications, loft conversions and interior design. Studio in Shoreditch, E2.",
  keywords: ["architect shoreditch", "RIBA architect east london", "residential architect shoreditch", "commercial architect E2", "planning applications hackney", "loft conversion architect", "interior design shoreditch", "heritage architecture east london", "ARB registered architect", "shoreditch architecture studio"],
  robots: { index: true, follow: true },
  openGraph: { title: "Shoreditch Architecture Studio | RIBA Chartered Architects", description: "Award-winning RIBA Chartered architects in Shoreditch. Residential, commercial and heritage architecture with a contemporary design philosophy.", url: siteUrl, siteName: "Shoreditch Architecture Studio", locale: "en_GB", type: "website" },
  twitter: { card: "summary_large_image", title: "Shoreditch Architecture Studio | RIBA Chartered Architects", description: "Award-winning RIBA Chartered architects in Shoreditch, E2." },
  alternates: { canonical: siteUrl },
  other: { "geo.region": "GB-LND", "geo.placename": "Shoreditch", "geo.position": "51.5263;-0.0769" },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Shoreditch Architecture Studio",
  description: "RIBA Chartered and ARB Registered architects in Shoreditch providing residential and commercial architecture, planning applications, loft conversions and interior design.",
  url: siteUrl,
  telephone: "020 7946 6901",
  email: "studio@shoreditcharchitecture.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "58 Rivington Street", addressLocality: "Shoreditch", addressRegion: "London", postalCode: "E2 7QN", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5263, longitude: -0.0769 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
  ],
  priceRange: "££-£££",
  areaServed: { "@type": "City", name: "London" },
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Architecture Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Architecture" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Design" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Planning Applications" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Design" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loft Conversions & Extensions" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heritage & Conservation" } },
  ] },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Shoreditch Architecture Studio",
  image: siteUrl,
  address: { "@type": "PostalAddress", streetAddress: "58 Rivington Street", addressLocality: "Shoreditch", addressRegion: "London", postalCode: "E2 7QN", addressCountry: "GB" },
  telephone: "020 7946 6901",
  url: siteUrl,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Shoreditch Architecture Studio",
  url: siteUrl,
};

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([schemaOrg, localBusinessSchema, websiteSchema]) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
