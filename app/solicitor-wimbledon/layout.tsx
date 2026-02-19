import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Wimbledon Legal Services | Solicitors in Wimbledon, SW19", template: "%s | Wimbledon Legal Services" },
  description: "SRA regulated solicitors in Wimbledon, SW19. Expert conveyancing, family law, wills & probate, employment law, commercial law and immigration services.",
  keywords: ["solicitors wimbledon", "conveyancing wimbledon", "family law solicitor SW19", "wills and probate wimbledon", "employment lawyer wimbledon", "immigration solicitor london", "commercial solicitor wimbledon", "SRA regulated solicitor", "legal aid wimbledon", "wimbledon legal services", "law society accredited", "south london solicitors"],
  authors: [{ name: "Wimbledon Legal Services" }],
  creator: "Wimbledon Legal Services",
  publisher: "Wimbledon Legal Services",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://wimbledonlegal.co.uk", siteName: "Wimbledon Legal Services", title: "Wimbledon Legal Services | Solicitors in Wimbledon, SW19", description: "SRA regulated solicitors in Wimbledon. Conveyancing, family law, wills & probate, employment law, commercial law and immigration.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Wimbledon Legal Services - Solicitors in Wimbledon" }] },
  twitter: { card: "summary_large_image", title: "Wimbledon Legal Services | Solicitors in Wimbledon", description: "SRA regulated solicitors in SW19. Conveyancing, family law, wills & probate and more.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://wimbledonlegal.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Wimbledon", "geo.position": "51.4214;-0.2064", ICBM: "51.4214, -0.2064" },
};

const legalServiceSchema = {
  "@context": "https://schema.org", "@type": "LegalService", "@id": "https://wimbledonlegal.co.uk/#organization",
  name: "Wimbledon Legal Services", description: "SRA regulated solicitors providing conveyancing, family law, wills & probate, employment law, commercial law and immigration services in Wimbledon, SW19.",
  url: "https://wimbledonlegal.co.uk", telephone: "+442079464567", email: "info@wimbledonlegal.co.uk", foundingDate: "2008",
  priceRange: "$$", currenciesAccepted: "GBP", paymentAccepted: "Bank Transfer, Debit Card, Credit Card",
  areaServed: [{ "@type": "City", name: "London" }, { "@type": "AdministrativeArea", name: "Wimbledon" }, { "@type": "AdministrativeArea", name: "South West London" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Legal Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conveyancing", description: "Residential and commercial property conveyancing in Wimbledon and South West London." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Family Law", description: "Divorce, child arrangements, financial settlements and mediation services." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wills & Probate", description: "Will drafting, estate administration and lasting powers of attorney." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Employment Law", description: "Employment contracts, disputes, tribunals and settlement agreements." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Law", description: "Business contracts, partnerships, shareholder agreements and commercial disputes." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Immigration", description: "Visa applications, settlement, citizenship and immigration appeals." } },
  ]},
  location: { "@type": "Place", name: "Wimbledon Legal Services Office", address: { "@type": "PostalAddress", streetAddress: "26 The Broadway", addressLocality: "Wimbledon", addressRegion: "London", postalCode: "SW19 1RE", addressCountry: "GB" }, geo: { "@type": "GeoCoordinates", latitude: 51.4214, longitude: -0.2064 }, telephone: "+442079464567" },
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://wimbledonlegal.co.uk/#localbusiness",
  name: "Wimbledon Legal Services", image: "https://wimbledonlegal.co.uk/logo.png", telephone: "+442079464567", email: "info@wimbledonlegal.co.uk", url: "https://wimbledonlegal.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "26 The Broadway", addressLocality: "Wimbledon", addressRegion: "London", postalCode: "SW19 1RE", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.4214, longitude: -0.2064 },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:30" }],
  priceRange: "$$",
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://wimbledonlegal.co.uk/#website", url: "https://wimbledonlegal.co.uk", name: "Wimbledon Legal Services", description: "SRA regulated solicitors in Wimbledon, SW19", publisher: { "@id": "https://wimbledonlegal.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="legal-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
