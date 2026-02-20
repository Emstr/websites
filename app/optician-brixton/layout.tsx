import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Brixton Eye Care | Opticians in Brixton, London", template: "%s | Brixton Eye Care" },
  description: "Independent opticians in Brixton, London. Eye examinations, contact lenses, designer frames, children's eye care, emergency eye care, and DVLA screening. Book your appointment today.",
  keywords: ["opticians Brixton", "eye test Brixton", "eye examination London", "contact lenses Brixton", "designer frames", "children eye care", "emergency eye care London", "DVLA eye test", "optometrist Brixton", "glasses Brixton", "independent opticians London", "eye care near Brixton station"],
  authors: [{ name: "Brixton Eye Care" }], creator: "Brixton Eye Care", publisher: "Brixton Eye Care",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://brixtoneyecare.co.uk", siteName: "Brixton Eye Care", title: "Brixton Eye Care | Independent Opticians in Brixton", description: "Independent opticians providing comprehensive eye care in Brixton. Four experienced optometrists, designer frames, and advanced diagnostic technology.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Brixton Eye Care" }] },
  twitter: { card: "summary_large_image", title: "Brixton Eye Care | Opticians in Brixton", description: "Independent opticians in Brixton. Eye exams, contact lenses, designer frames, and emergency eye care.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://brixtoneyecare.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Brixton, London", "geo.position": "51.4613;-0.1156", ICBM: "51.4613, -0.1156" },
};

const opticianSchema = { "@context": "https://schema.org", "@type": "Optician", "@id": "https://brixtoneyecare.co.uk/#organization", name: "Brixton Eye Care", description: "Independent opticians providing eye examinations, contact lens fitting, designer frames, children's eye care, emergency eye care, and DVLA screening in Brixton, London.", url: "https://brixtoneyecare.co.uk", telephone: "+442079465520", email: "appointments@brixtoneyecare.co.uk", foundingDate: "2010", priceRange: "$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "Greater London" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Eye Care Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Eye Examinations", description: "Comprehensive eye examinations using advanced diagnostic equipment." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contact Lens Fitting", description: "Expert contact lens fitting and aftercare for all lens types." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Designer Frames", description: "Extensive range of designer frames from leading brands." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Children's Eye Care", description: "Specialist eye care for children from age 3 upwards." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Eye Care", description: "Same-day emergency appointments for urgent eye concerns." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "DVLA Screening", description: "DVLA-standard vision screening for driving licence requirements." } },
  ]},
  address: { "@type": "PostalAddress", streetAddress: "45 Brixton Road", addressLocality: "Brixton", addressRegion: "London", postalCode: "SW9 6DE", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.4613, longitude: -0.1156 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "17:00" },
  ], sameAs: [] };

const localBusinessSchema = { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://brixtoneyecare.co.uk/#localbusiness", name: "Brixton Eye Care", image: "https://brixtoneyecare.co.uk/logo.png", telephone: "+442079465520", email: "appointments@brixtoneyecare.co.uk", url: "https://brixtoneyecare.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "45 Brixton Road", addressLocality: "Brixton", addressRegion: "London", postalCode: "SW9 6DE", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.4613, longitude: -0.1156 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "17:00" },
  ], priceRange: "$$" };

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://brixtoneyecare.co.uk/#website", url: "https://brixtoneyecare.co.uk", name: "Brixton Eye Care", description: "Independent opticians in Brixton, London", publisher: { "@id": "https://brixtoneyecare.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="optician-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(opticianSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header /><main>{children}</main><Footer />
    </>
  );
}
