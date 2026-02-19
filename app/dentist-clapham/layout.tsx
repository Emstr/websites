import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Clapham Dental Practice | NHS & Private Dentist in Clapham, SW4", template: "%s | Clapham Dental Practice" },
  description: "Friendly dental practice in Clapham, SW4. NHS & private dentistry, cosmetic treatments, teeth whitening, dental implants, Invisalign, and emergency care. GDC registered. Evening appointments available.",
  keywords: ["dentist Clapham", "dental practice SW4", "NHS dentist Clapham", "private dentist Clapham", "teeth whitening Clapham", "dental implants Clapham", "Invisalign Clapham", "cosmetic dentistry Clapham", "emergency dentist Clapham", "evening dentist South London"],
  authors: [{ name: "Clapham Dental Practice" }], creator: "Clapham Dental Practice", publisher: "Clapham Dental Practice",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://claphamdental.co.uk", siteName: "Clapham Dental Practice", title: "Clapham Dental Practice | NHS & Private Dentist in SW4", description: "GDC registered dental practice in Clapham. General, cosmetic, and emergency dentistry. NHS & private patients welcome. Evening appointments.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Clapham Dental Practice" }] },
  twitter: { card: "summary_large_image", title: "Clapham Dental Practice | Dentist in Clapham, SW4", description: "GDC registered dentist in Clapham. NHS & private. Evening appointments available.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://claphamdental.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Clapham, London", "geo.position": "51.4620;-0.1380", ICBM: "51.4620, -0.1380" },
};

const dentistSchema = {
  "@context": "https://schema.org", "@type": "Dentist", "@id": "https://claphamdental.co.uk/#organization",
  name: "Clapham Dental Practice", description: "GDC registered dental practice in Clapham, SW4. General dentistry, cosmetic treatments, teeth whitening, dental implants, Invisalign, and emergency dental care. NHS and private patients welcome.",
  url: "https://claphamdental.co.uk", telephone: "+442079461234", email: "reception@claphamdental.co.uk",
  priceRange: "$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Bank Transfer, Card, Finance",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "Clapham" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Dental Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Dentistry", description: "Check-ups, fillings, root canals, and preventive dental care." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cosmetic Dentistry", description: "Veneers, bonding, and smile makeovers." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Teeth Whitening", description: "Professional teeth whitening for a brighter smile." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dental Implants", description: "Permanent tooth replacement with dental implants." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Invisalign", description: "Clear aligner orthodontic treatment." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Dental Care", description: "Same-day emergency dental appointments." } },
  ]},
  location: { "@type": "Place", name: "Clapham Dental Practice", address: { "@type": "PostalAddress", streetAddress: "87 Clapham High Street", addressLocality: "Clapham", addressRegion: "London", postalCode: "SW4 7TB", addressCountry: "GB" }, geo: { "@type": "GeoCoordinates", latitude: 51.4620, longitude: -0.1380 } },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "08:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
  ],
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://claphamdental.co.uk/#website", url: "https://claphamdental.co.uk", name: "Clapham Dental Practice", description: "NHS & Private dental practice in Clapham, South London", publisher: { "@id": "https://claphamdental.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="dentist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header /><main>{children}</main><Footer />
    </>
  );
}
