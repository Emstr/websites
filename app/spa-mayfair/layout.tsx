import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Mayfair Wellness Spa | Luxury Day Spa in Mayfair, London", template: "%s | Mayfair Wellness Spa" },
  description: "Luxury day spa in Mayfair, London. Deep tissue massage, facial treatments, body wraps, aromatherapy, and couples treatments. Book your escape today.",
  keywords: ["day spa Mayfair", "luxury spa London", "deep tissue massage", "facial treatments Mayfair", "body wraps London", "aromatherapy spa", "couples spa London", "spa near Bond Street", "wellness spa Mayfair", "best spa London", "spa treatments", "massage Mayfair"],
  authors: [{ name: "Mayfair Wellness Spa" }],
  creator: "Mayfair Wellness Spa",
  publisher: "Mayfair Wellness Spa",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://mayfairwellness.co.uk", siteName: "Mayfair Wellness Spa", title: "Mayfair Wellness Spa | Luxury Day Spa in Mayfair", description: "Luxury day spa offering massage, facial, and body treatments in the heart of Mayfair. Twelve expert therapists, bespoke treatments.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mayfair Wellness Spa" }] },
  twitter: { card: "summary_large_image", title: "Mayfair Wellness Spa | Luxury Day Spa", description: "Luxury day spa in Mayfair offering massage, facials, body wraps, and couples treatments.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://mayfairwellness.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Mayfair, London", "geo.position": "51.5130;-0.1478", ICBM: "51.5130, -0.1478" },
};

const daySpaSchema = {
  "@context": "https://schema.org", "@type": "DaySpa", "@id": "https://mayfairwellness.co.uk/#organization",
  name: "Mayfair Wellness Spa", description: "Luxury day spa offering deep tissue massage, facial treatments, body wraps, aromatherapy, and couples treatments in Mayfair, London.",
  url: "https://mayfairwellness.co.uk", telephone: "+442079468800", email: "reservations@mayfairwellness.co.uk",
  foundingDate: "2012", priceRange: "$$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "Greater London" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Spa Treatments", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Tissue Massage", description: "Therapeutic deep tissue massage to relieve tension and chronic pain." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facial Treatments", description: "Luxury facial treatments using premium skincare products." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Body Wraps", description: "Detoxifying and hydrating body wrap treatments." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aromatherapy", description: "Aromatherapy massage using essential oils for relaxation and healing." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Couples Treatments", description: "Side-by-side treatments for couples in our dual treatment suite." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Membership Packages", description: "Monthly spa memberships with exclusive benefits and discounts." } },
  ]},
  address: { "@type": "PostalAddress", streetAddress: "24 Brook Street", addressLocality: "Mayfair", addressRegion: "London", postalCode: "W1K 5DG", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5130, longitude: -0.1478 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "10:00", closes: "19:00" },
  ],
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://mayfairwellness.co.uk/#localbusiness",
  name: "Mayfair Wellness Spa", image: "https://mayfairwellness.co.uk/logo.png",
  telephone: "+442079468800", email: "reservations@mayfairwellness.co.uk", url: "https://mayfairwellness.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "24 Brook Street", addressLocality: "Mayfair", addressRegion: "London", postalCode: "W1K 5DG", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5130, longitude: -0.1478 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "10:00", closes: "19:00" },
  ],
  priceRange: "$$$",
};

const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite", "@id": "https://mayfairwellness.co.uk/#website",
  url: "https://mayfairwellness.co.uk", name: "Mayfair Wellness Spa", description: "Luxury day spa in Mayfair, London",
  publisher: { "@id": "https://mayfairwellness.co.uk/#organization" },
};

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="day-spa-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(daySpaSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
