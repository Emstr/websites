import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Hampstead Veterinary Clinic | Vets in Hampstead, NW3", template: "%s | Hampstead Veterinary Clinic" },
  description: "RCVS registered veterinary clinic in Hampstead, NW3. Consultations, vaccinations, surgery, dental care, microchipping and pet health plans. 24/7 emergency care available.",
  keywords: ["vet hampstead", "veterinary clinic NW3", "animal hospital hampstead", "pet vaccinations hampstead", "dog vet london", "cat vet hampstead", "emergency vet NW3", "RCVS registered vet", "pet health plans", "microchipping hampstead", "hampstead veterinary clinic", "north london vet"],
  authors: [{ name: "Hampstead Veterinary Clinic" }],
  creator: "Hampstead Veterinary Clinic",
  publisher: "Hampstead Veterinary Clinic",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://hampsteadvet.co.uk", siteName: "Hampstead Veterinary Clinic", title: "Hampstead Veterinary Clinic | Vets in Hampstead, NW3", description: "RCVS registered veterinary clinic in Hampstead. Consultations, vaccinations, surgery, dental care and 24/7 emergency care.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hampstead Veterinary Clinic" }] },
  twitter: { card: "summary_large_image", title: "Hampstead Veterinary Clinic | Vets in Hampstead", description: "RCVS registered vets in NW3. Consultations, surgery, dental care and 24/7 emergencies.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://hampsteadvet.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Hampstead", "geo.position": "51.5565;-0.1781", ICBM: "51.5565, -0.1781" },
};

const vetServiceSchema = {
  "@context": "https://schema.org", "@type": "VeterinaryCare", "@id": "https://hampsteadvet.co.uk/#organization",
  name: "Hampstead Veterinary Clinic", description: "RCVS registered veterinary clinic providing consultations, vaccinations, surgery, dental care, microchipping and pet health plans in Hampstead, NW3.",
  url: "https://hampsteadvet.co.uk", telephone: "+442079465670", email: "info@hampsteadvet.co.uk", foundingDate: "2015",
  priceRange: "$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Debit Card, Credit Card",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "Hampstead" }, { "@type": "AdministrativeArea", name: "North West London" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Veterinary Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consultations & Check-ups", description: "Comprehensive veterinary consultations and wellness examinations." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vaccinations", description: "Core and non-core vaccinations for dogs, cats and rabbits." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Surgery", description: "Routine and complex surgical procedures in our modern theatre." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dental Care", description: "Professional dental scaling, polishing, extractions and oral health assessments." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Microchipping", description: "Permanent identification microchipping for dogs, cats and rabbits." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pet Health Plans", description: "Affordable monthly plans covering preventive care essentials." } },
  ]},
  location: { "@type": "Place", name: "Hampstead Veterinary Clinic", address: { "@type": "PostalAddress", streetAddress: "52 Heath Street", addressLocality: "Hampstead", addressRegion: "London", postalCode: "NW3 1DN", addressCountry: "GB" }, geo: { "@type": "GeoCoordinates", latitude: 51.5565, longitude: -0.1781 }, telephone: "+442079465670" },
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://hampsteadvet.co.uk/#localbusiness",
  name: "Hampstead Veterinary Clinic", image: "https://hampsteadvet.co.uk/logo.png", telephone: "+442079465670", email: "info@hampsteadvet.co.uk", url: "https://hampsteadvet.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "52 Heath Street", addressLocality: "Hampstead", addressRegion: "London", postalCode: "NW3 1DN", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5565, longitude: -0.1781 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "14:00" },
  ],
  priceRange: "$$",
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://hampsteadvet.co.uk/#website", url: "https://hampsteadvet.co.uk", name: "Hampstead Veterinary Clinic", description: "RCVS registered veterinary clinic in Hampstead, NW3", publisher: { "@id": "https://hampsteadvet.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="vet-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vetServiceSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
