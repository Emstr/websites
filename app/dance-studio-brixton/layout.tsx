import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Brixton Dance Academy | Dance Classes for All Levels in South London", template: "%s | Brixton Dance Academy" },
  description: "Dance studio in Brixton, South London. Street dance, contemporary, ballet, Latin & salsa, kids dance, and private choreography. All levels welcome. 10 professional instructors.",
  keywords: ["dance classes Brixton", "dance studio South London", "street dance London", "contemporary dance classes", "ballet classes Brixton", "salsa classes London", "kids dance classes", "private choreography", "dance lessons", "Brixton dance academy", "adult dance classes", "beginner dance London"],
  authors: [{ name: "Brixton Dance Academy" }],
  creator: "Brixton Dance Academy",
  publisher: "Brixton Dance Academy",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://brixtondance.co.uk", siteName: "Brixton Dance Academy", title: "Brixton Dance Academy | Dance Classes for All Levels", description: "Dance studio in Brixton offering street dance, contemporary, ballet, Latin, kids classes and private choreography. All levels welcome.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Brixton Dance Academy - Dance Classes in South London" }] },
  twitter: { card: "summary_large_image", title: "Brixton Dance Academy | South London", description: "Dance classes for all ages and levels in Brixton. Street, contemporary, ballet, Latin and more.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://brixtondance.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Brixton, London", "geo.position": "51.4613;-0.1156", ICBM: "51.4613, -0.1156" },
};

const sportsActivitySchema = {
  "@context": "https://schema.org", "@type": "SportsActivityLocation", "@id": "https://brixtondance.co.uk/#organization",
  name: "Brixton Dance Academy", description: "Professional dance studio offering classes in street dance, contemporary, ballet, Latin & salsa, kids dance, and private choreography for all levels.",
  url: "https://brixtondance.co.uk", telephone: "+442079463360", email: "info@brixtondance.co.uk", foundingDate: "2017", priceRange: "$$",
  currenciesAccepted: "GBP", paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "Greater London" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Dance Classes", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Street Dance", description: "High-energy street dance classes covering hip hop, breaking, locking and popping." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contemporary Dance", description: "Expressive contemporary dance blending modern techniques with creative movement." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ballet", description: "Classical ballet classes for beginners through to advanced students." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Latin & Salsa", description: "Vibrant Latin and salsa dance classes for individuals and couples." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kids Dance", description: "Fun, age-appropriate dance classes for children aged 4 to 16." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Private Choreography", description: "One-to-one choreography sessions for events, performances, and personal goals." } },
  ]},
  address: { "@type": "PostalAddress", streetAddress: "3rd Floor, 6 Acre Lane", addressLocality: "Brixton", addressRegion: "London", postalCode: "SW2 5SG", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.4613, longitude: -0.1156 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "17:00" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://brixtondance.co.uk/#localbusiness",
  name: "Brixton Dance Academy", image: "https://brixtondance.co.uk/logo.png", telephone: "+442079463360", email: "info@brixtondance.co.uk", url: "https://brixtondance.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "3rd Floor, 6 Acre Lane", addressLocality: "Brixton", addressRegion: "London", postalCode: "SW2 5SG", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.4613, longitude: -0.1156 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "17:00" },
  ],
  priceRange: "$$",
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://brixtondance.co.uk/#website", url: "https://brixtondance.co.uk", name: "Brixton Dance Academy", description: "Dance classes for all levels in Brixton, South London", publisher: { "@id": "https://brixtondance.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="sports-activity-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsActivitySchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
