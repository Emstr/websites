import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Croydon Carpet & Flooring | Expert Flooring Installation in Croydon", template: "%s | Croydon Carpet & Flooring" },
  description: "Expert carpet fitting and flooring installation in Croydon, South London. Carpets, luxury vinyl tiles, laminate, hardwood and commercial flooring. Free home estimates and showroom open 6 days.",
  keywords: ["carpet fitter Croydon", "flooring Croydon", "luxury vinyl tiles", "laminate flooring", "hardwood floors", "commercial flooring", "carpet installation", "flooring showroom Croydon", "free estimates", "South London flooring"],
  authors: [{ name: "Croydon Carpet & Flooring" }],
  creator: "Croydon Carpet & Flooring",
  publisher: "Croydon Carpet & Flooring",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://croydoncarpets.co.uk", siteName: "Croydon Carpet & Flooring", title: "Croydon Carpet & Flooring | Expert Flooring in South London", description: "Expert carpet fitting and flooring installation in Croydon. Carpets, LVT, laminate, hardwood. Free measuring and estimates.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Croydon Carpet & Flooring" }] },
  twitter: { card: "summary_large_image", title: "Croydon Carpet & Flooring | Expert Flooring Installation", description: "Carpet fitting and flooring specialists in Croydon, South London.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://croydoncarpets.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Croydon", "geo.position": "51.3762;-0.0982", ICBM: "51.3762, -0.0982" },
};

const flooringServiceSchema = {
  "@context": "https://schema.org", "@type": "HomeAndConstructionBusiness", "@id": "https://croydoncarpets.co.uk/#organization",
  name: "Croydon Carpet & Flooring", description: "Expert carpet fitting and flooring installation services in Croydon, South London. Carpets, luxury vinyl tiles, laminate, hardwood and commercial flooring.",
  url: "https://croydoncarpets.co.uk", telephone: "+442079461170", email: "info@croydoncarpets.co.uk", foundingDate: "2009", priceRange: "$$", currenciesAccepted: "GBP", paymentAccepted: "Cash, Card, Bank Transfer",
  areaServed: [{ "@type": "City", name: "Croydon" }, { "@type": "AdministrativeArea", name: "South London" }, { "@type": "AdministrativeArea", name: "Greater London" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Flooring Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpet Fitting", description: "Professional carpet supply and fitting for homes and businesses." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Vinyl Tiles", description: "Premium LVT supply and installation including Karndean and Amtico." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laminate Flooring", description: "Quality laminate flooring supply and fitting." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hardwood Floors", description: "Solid and engineered hardwood floor installation and restoration." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Flooring", description: "Commercial flooring solutions for offices, shops and public spaces." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free Home Estimates", description: "Complimentary home visits with measuring and written quotations." } },
  ] },
  location: { "@type": "Place", name: "Croydon Carpet & Flooring", address: { "@type": "PostalAddress", streetAddress: "146 London Road", addressLocality: "Croydon", addressRegion: "London", postalCode: "CR0 2TD", addressCountry: "GB" }, geo: { "@type": "GeoCoordinates", latitude: 51.3762, longitude: -0.0982 }, telephone: "+442079461170" },
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://croydoncarpets.co.uk/#localbusiness",
  name: "Croydon Carpet & Flooring", image: "https://croydoncarpets.co.uk/logo.png", telephone: "+442079461170", email: "info@croydoncarpets.co.uk", url: "https://croydoncarpets.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "146 London Road", addressLocality: "Croydon", addressRegion: "London", postalCode: "CR0 2TD", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.3762, longitude: -0.0982 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
  ], priceRange: "$$",
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://croydoncarpets.co.uk/#website", url: "https://croydoncarpets.co.uk", name: "Croydon Carpet & Flooring", description: "Expert carpet fitting and flooring installation in Croydon", publisher: { "@id": "https://croydoncarpets.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="flooring-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(flooringServiceSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
