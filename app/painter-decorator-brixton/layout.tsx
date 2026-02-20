import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Brixton Decorating Services | Painters & Decorators in Brixton, London",
    template: "%s | Brixton Decorating Services",
  },
  description:
    "Professional painters and decorators in Brixton, South London. Dulux Select Decorator, fully insured, free estimates. Interior and exterior painting, wallpaper hanging and period property specialists since 2012.",
  keywords: [
    "painter decorator Brixton",
    "painting and decorating South London",
    "interior painter Brixton",
    "exterior painter Lambeth",
    "wallpaper hanging Brixton",
    "commercial decorating South London",
    "period property decorator London",
    "Dulux Select Decorator Brixton",
    "house painter Brixton",
    "colour consultation London",
    "decorating services Lambeth",
    "residential painter South London",
  ],
  authors: [{ name: "Brixton Decorating Services" }],
  creator: "Brixton Decorating Services",
  publisher: "Brixton Decorating Services",
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
    url: "https://brixtondecor.co.uk",
    siteName: "Brixton Decorating Services",
    title: "Brixton Decorating Services | Professional Painters & Decorators",
    description:
      "Professional painters and decorators on Atlantic Road, Brixton. Dulux Select Decorator, fully insured with free estimates. Interior, exterior and period property specialists.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brixton Decorating Services - Professional Painters & Decorators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brixton Decorating Services | Painters & Decorators",
    description:
      "Professional painting and decorating in Brixton, South London. Dulux Select Decorator since 2012.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://brixtondecor.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Brixton, London",
    "geo.position": "51.4613;-0.1156",
    ICBM: "51.4613, -0.1156",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://brixtondecor.co.uk/#organization",
  name: "Brixton Decorating Services",
  description:
    "Professional painters and decorators in Brixton, South London. Dulux Select Decorator providing interior and exterior painting, wallpaper hanging and period property specialist services.",
  url: "https://brixtondecor.co.uk",
  telephone: "+442079462270",
  email: "quotes@brixtondecor.co.uk",
  foundingDate: "2012",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "South London",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Painting & Decorating Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Painting",
          description: "Professional interior painting for homes and offices throughout South London.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Exterior Painting",
          description: "Weather-resistant exterior painting and masonry coating for all property types.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wallpaper Hanging",
          description: "Expert wallpaper hanging and removal for feature walls and full rooms.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Decorating",
          description: "Professional decorating for offices, shops, restaurants and commercial premises.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Colour Consultations",
          description: "Expert colour advice and consultations to help you choose the perfect palette.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Period Property Specialists",
          description: "Sympathetic decorating and restoration for Victorian, Edwardian and Georgian properties.",
        },
      },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "85 Atlantic Road",
    addressLocality: "Brixton",
    addressRegion: "London",
    postalCode: "SW9 8PU",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4613,
    longitude: -0.1156,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
  ],
};

const decoratingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://brixtondecor.co.uk/#localbusiness",
  name: "Brixton Decorating Services",
  image: "https://brixtondecor.co.uk/logo.png",
  telephone: "+442079462270",
  email: "quotes@brixtondecor.co.uk",
  url: "https://brixtondecor.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "85 Atlantic Road",
    addressLocality: "Brixton",
    addressRegion: "London",
    postalCode: "SW9 8PU",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4613,
    longitude: -0.1156,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://brixtondecor.co.uk/#website",
  url: "https://brixtondecor.co.uk",
  name: "Brixton Decorating Services",
  description: "Professional painters and decorators in Brixton, South London",
  publisher: {
    "@id": "https://brixtondecor.co.uk/#organization",
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
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="decorating-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(decoratingServiceSchema),
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
