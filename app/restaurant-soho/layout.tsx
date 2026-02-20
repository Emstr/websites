import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Soho Kitchen & Bar | Modern British Restaurant in Soho, London",
    template: "%s | Soho Kitchen & Bar",
  },
  description:
    "Modern British restaurant in the heart of Soho, London. Seasonal menus, private dining, pre-theatre menus, Sunday roasts and cocktail bar. Book your table today.",
  keywords: [
    "restaurant Soho",
    "modern British restaurant",
    "Soho dining",
    "private dining London",
    "pre-theatre menu Soho",
    "Sunday roast Soho",
    "cocktail bar Soho",
    "best restaurant Dean Street",
    "corporate dining London",
    "London restaurant",
  ],
  authors: [{ name: "Soho Kitchen & Bar" }],
  creator: "Soho Kitchen & Bar",
  publisher: "Soho Kitchen & Bar",
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
    url: "https://sohokitchenbar.co.uk",
    siteName: "Soho Kitchen & Bar",
    title: "Soho Kitchen & Bar | Modern British Restaurant",
    description:
      "Experience modern British cuisine in the heart of Soho. Seasonal menus, private dining, cocktail bar and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soho Kitchen & Bar - Modern British Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soho Kitchen & Bar | Modern British, Soho Soul",
    description:
      "Modern British restaurant in Soho, London. Seasonal menus, private dining and cocktail bar.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://sohokitchenbar.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Soho, London",
    "geo.position": "51.5138;-0.1317",
    ICBM: "51.5138, -0.1317",
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://sohokitchenbar.co.uk/#organization",
  name: "Soho Kitchen & Bar",
  description:
    "Modern British restaurant in the heart of Soho, London. Seasonal menus crafted with locally sourced ingredients, private dining, cocktail bar and corporate event hosting.",
  url: "https://sohokitchenbar.co.uk",
  telephone: "+442079466640",
  email: "reservations@sohokitchenbar.co.uk",
  foundingDate: "2019",
  priceRange: "$$-$$$",
  servesCuisine: "Modern British",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: {
    "@type": "City",
    name: "London",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dining Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "A La Carte Dining",
          description: "Seasonal modern British dishes crafted from locally sourced ingredients.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private Dining",
          description: "Exclusive private dining room for up to 24 guests with bespoke menus.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sunday Roast",
          description: "Traditional Sunday roast with all the trimmings, served every Sunday.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pre-Theatre Menu",
          description: "Two and three course set menus perfect for theatre-goers in the West End.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cocktail Bar",
          description: "Handcrafted cocktails, fine wines and craft beers in our stylish bar area.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Events",
          description: "Bespoke corporate dining and event packages for businesses.",
        },
      },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "34 Dean Street",
    addressLocality: "Soho",
    addressRegion: "London",
    postalCode: "W1D 4PR",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5138,
    longitude: -0.1317,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sohokitchenbar.co.uk/#localbusiness",
  name: "Soho Kitchen & Bar",
  image: "https://sohokitchenbar.co.uk/logo.png",
  telephone: "+442079466640",
  email: "reservations@sohokitchenbar.co.uk",
  url: "https://sohokitchenbar.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "34 Dean Street",
    addressLocality: "Soho",
    addressRegion: "London",
    postalCode: "W1D 4PR",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5138,
    longitude: -0.1317,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "12:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "12:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "22:00",
    },
  ],
  priceRange: "$$-$$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sohokitchenbar.co.uk/#website",
  url: "https://sohokitchenbar.co.uk",
  name: "Soho Kitchen & Bar",
  description: "Modern British restaurant in Soho, London",
  publisher: {
    "@id": "https://sohokitchenbar.co.uk/#organization",
  },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        id="restaurant-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
