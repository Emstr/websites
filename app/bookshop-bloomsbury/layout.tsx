import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "Bloomsbury Books | Independent Bookshop in the Heart of London", template: "%s | Bloomsbury Books" },
  description: "Independent bookshop on Great Russell Street, Bloomsbury, London. 20,000+ titles, author events, book club, rare books, children's corner and gift wrapping. Independent since 2009.",
  keywords: ["independent bookshop London", "bookshop Bloomsbury", "book shop Central London", "author events London", "book club London", "rare books", "children's bookshop", "gift books London", "Great Russell Street", "Bloomsbury books", "literary events", "antiquarian books"],
  authors: [{ name: "Bloomsbury Books" }], creator: "Bloomsbury Books", publisher: "Bloomsbury Books",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "https://bloomsburybooks.co.uk", siteName: "Bloomsbury Books", title: "Bloomsbury Books | Independent Bookshop in London", description: "Independent bookshop in Bloomsbury. 20,000+ titles, author events, book club, rare books and more. Open since 2009.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Bloomsbury Books - Independent Bookshop in Bloomsbury, London" }] },
  twitter: { card: "summary_large_image", title: "Bloomsbury Books | Bloomsbury, London", description: "Independent bookshop in the heart of literary London. 20,000+ titles, events, and a proper book club.", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://bloomsburybooks.co.uk" },
  other: { "geo.region": "GB-LND", "geo.placename": "Bloomsbury, London", "geo.position": "51.5188;-0.1270", ICBM: "51.5188, -0.1270" },
};

const bookStoreSchema = {
  "@context": "https://schema.org", "@type": "BookStore", "@id": "https://bloomsburybooks.co.uk/#organization",
  name: "Bloomsbury Books", description: "Independent bookshop offering a curated selection of 20,000+ titles, author events, book club, children's corner, rare books and gift services.",
  url: "https://bloomsburybooks.co.uk", telephone: "+442079461190", email: "hello@bloomsburybooks.co.uk", foundingDate: "2009", priceRange: "$$",
  currenciesAccepted: "GBP", paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: [{ "@type": "City", name: "London" }],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Bookshop Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Curated Book Selection", description: "Over 20,000 titles hand-picked by our booksellers across fiction, non-fiction, and specialist subjects." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Author Events & Signings", description: "Regular author talks, book launches, and signing events in our upstairs events space." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Book Club", description: "Monthly book club meetings with curated reading lists and author Q&A sessions." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Children's Corner", description: "Dedicated children's section with weekly story time and school holiday activities." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rare & Antiquarian Books", description: "Curated selection of rare, first edition, and antiquarian books." } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gift Wrapping & Hampers", description: "Beautiful gift wrapping service and bespoke book hampers for any occasion." } },
  ]},
  address: { "@type": "PostalAddress", streetAddress: "38 Great Russell Street", addressLocality: "Bloomsbury", addressRegion: "London", postalCode: "WC1B 3QQ", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5188, longitude: -0.1270 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:30", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "17:00" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://bloomsburybooks.co.uk/#localbusiness",
  name: "Bloomsbury Books", image: "https://bloomsburybooks.co.uk/logo.png", telephone: "+442079461190", email: "hello@bloomsburybooks.co.uk", url: "https://bloomsburybooks.co.uk",
  address: { "@type": "PostalAddress", streetAddress: "38 Great Russell Street", addressLocality: "Bloomsbury", addressRegion: "London", postalCode: "WC1B 3QQ", addressCountry: "GB" },
  geo: { "@type": "GeoCoordinates", latitude: 51.5188, longitude: -0.1270 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:30", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "17:00" },
  ], priceRange: "$$",
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://bloomsburybooks.co.uk/#website", url: "https://bloomsburybooks.co.uk", name: "Bloomsbury Books", description: "Independent bookshop in Bloomsbury, London", publisher: { "@id": "https://bloomsburybooks.co.uk/#organization" } };

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script id="bookstore-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookStoreSchema) }} />
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header /><main>{children}</main><Footer />
    </>
  );
}
