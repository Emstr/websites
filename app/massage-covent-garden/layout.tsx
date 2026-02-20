import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Covent Garden Massage Therapy | Professional Massage in Central London",
    template: "%s | Covent Garden Massage Therapy",
  },
  description:
    "Professional massage therapy clinic in Covent Garden, Central London. Swedish, deep tissue, sports massage, hot stone therapy, pregnancy massage and reflexology. ITEC & VTCT qualified therapists.",
  keywords: [
    "massage therapy Covent Garden",
    "massage London",
    "Swedish massage",
    "deep tissue massage",
    "sports massage London",
    "hot stone therapy",
    "pregnancy massage",
    "reflexology Covent Garden",
    "ITEC qualified massage",
    "Central London massage",
    "relaxation massage",
    "therapeutic massage",
  ],
  authors: [{ name: "Covent Garden Massage Therapy" }],
  creator: "Covent Garden Massage Therapy",
  publisher: "Covent Garden Massage Therapy",
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
    url: "https://cgmassage.co.uk",
    siteName: "Covent Garden Massage Therapy",
    title: "Covent Garden Massage Therapy | Professional Massage in Central London",
    description:
      "Professional massage therapy in the heart of Covent Garden. 8 qualified therapists, 25,000+ treatments delivered. Book your session today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Covent Garden Massage Therapy - Professional Massage in Central London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Covent Garden Massage Therapy | Central London",
    description:
      "Professional massage therapy in Covent Garden. Swedish, deep tissue, sports massage and more. ITEC & VTCT qualified.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cgmassage.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Covent Garden, London",
    "geo.position": "51.5117;-0.1223",
    ICBM: "51.5117, -0.1223",
  },
};

const healthBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": "https://cgmassage.co.uk/#organization",
  name: "Covent Garden Massage Therapy",
  description:
    "Professional massage therapy clinic offering Swedish, deep tissue, sports, hot stone, pregnancy massage and reflexology in the heart of Covent Garden.",
  url: "https://cgmassage.co.uk",
  telephone: "+442079467740",
  email: "bookings@cgmassage.co.uk",
  foundingDate: "2013",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: [
    { "@type": "City", name: "London" },
    { "@type": "AdministrativeArea", name: "Greater London" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Massage Therapy Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Swedish Massage", description: "Classic relaxation massage using flowing strokes to ease tension and promote wellbeing." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Tissue Massage", description: "Targeted pressure on deeper muscle layers to release chronic tension and knots." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sports Massage", description: "Specialist massage for athletes and active individuals to improve performance and recovery." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hot Stone Therapy", description: "Heated basalt stones combined with massage techniques for deep relaxation." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pregnancy Massage", description: "Safe, nurturing massage adapted for expectant mothers." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reflexology", description: "Pressure-point therapy applied to the feet to promote healing throughout the body." } },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "16 Floral Street",
    addressLocality: "Covent Garden",
    addressRegion: "London",
    postalCode: "WC2E 9DH",
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: 51.5117, longitude: -0.1223 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "18:00" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://cgmassage.co.uk/#localbusiness",
  name: "Covent Garden Massage Therapy",
  image: "https://cgmassage.co.uk/logo.png",
  telephone: "+442079467740",
  email: "bookings@cgmassage.co.uk",
  url: "https://cgmassage.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "16 Floral Street", addressLocality: "Covent Garden", addressRegion: "London", postalCode: "WC2E 9DH", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5117, longitude: -0.1223 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "18:00" },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://cgmassage.co.uk/#website",
  url: "https://cgmassage.co.uk",
  name: "Covent Garden Massage Therapy",
  description: "Professional massage therapy in the heart of Covent Garden, Central London",
  publisher: { "@id": "https://cgmassage.co.uk/#organization" },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script id="health-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(healthBusinessSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
