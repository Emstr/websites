import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Canary Wharf IT Solutions | Managed IT Support & Cybersecurity in Canary Wharf",
    template: "%s | Canary Wharf IT Solutions",
  },
  description:
    "Professional managed IT support, cybersecurity, and cloud solutions for businesses in Canary Wharf and East London. Microsoft Partner. Cyber Essentials Certified. ISO 27001.",
  keywords: [
    "IT support Canary Wharf",
    "managed IT services",
    "cybersecurity London",
    "cloud solutions",
    "network infrastructure",
    "VoIP Canary Wharf",
    "data backup recovery",
    "IT support East London",
    "business IT services",
    "Microsoft Partner London",
    "Cyber Essentials",
    "IT company Canary Wharf",
  ],
  authors: [{ name: "Canary Wharf IT Solutions" }],
  creator: "Canary Wharf IT Solutions",
  publisher: "Canary Wharf IT Solutions",
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
    url: "https://canaryit.co.uk",
    siteName: "Canary Wharf IT Solutions",
    title: "Canary Wharf IT Solutions | Managed IT Support & Cybersecurity",
    description:
      "Professional managed IT support, cybersecurity, and cloud solutions for businesses in Canary Wharf. Microsoft Partner. Cyber Essentials Certified.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Canary Wharf IT Solutions - Managed IT Support & Cybersecurity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canary Wharf IT Solutions | Managed IT Support",
    description:
      "Professional managed IT support and cybersecurity for businesses in Canary Wharf and East London.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://canaryit.co.uk",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Canary Wharf, London",
    "geo.position": "51.5054;-0.0235",
    ICBM: "51.5054, -0.0235",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://canaryit.co.uk/#organization",
  name: "Canary Wharf IT Solutions",
  description:
    "Professional managed IT support, cybersecurity, cloud solutions, and network infrastructure services for businesses in Canary Wharf and East London.",
  url: "https://canaryit.co.uk",
  telephone: "+442079467012",
  email: "support@canaryit.co.uk",
  foundingDate: "2015",
  priceRange: "$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit, Credit Card",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "East London",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Managed IT Support",
          description: "Proactive monitoring, helpdesk support, and infrastructure management for your business.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cybersecurity",
          description: "Comprehensive cybersecurity solutions including threat detection, firewalls, and security audits.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Solutions",
          description: "Cloud migration, Microsoft 365 deployment, and hybrid cloud infrastructure.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Network Infrastructure",
          description: "Design, installation, and management of robust business network infrastructure.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "VoIP & Communications",
          description: "Modern business phone systems and unified communications solutions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Backup & Recovery",
          description: "Automated backup solutions and disaster recovery planning for business continuity.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Canary Wharf IT Solutions Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "30 Churchill Place",
      addressLocality: "Canary Wharf",
      addressRegion: "London",
      postalCode: "E14 5RE",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5054,
      longitude: -0.0235,
    },
    telephone: "+442079467012",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://canaryit.co.uk/#localbusiness",
  name: "Canary Wharf IT Solutions",
  image: "https://canaryit.co.uk/logo.png",
  telephone: "+442079467012",
  email: "support@canaryit.co.uk",
  url: "https://canaryit.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 Churchill Place",
    addressLocality: "Canary Wharf",
    addressRegion: "London",
    postalCode: "E14 5RE",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5054,
    longitude: -0.0235,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://canaryit.co.uk/#website",
  url: "https://canaryit.co.uk",
  name: "Canary Wharf IT Solutions",
  description: "Professional managed IT support, cybersecurity, and cloud solutions in Canary Wharf",
  publisher: {
    "@id": "https://canaryit.co.uk/#organization",
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
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
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
