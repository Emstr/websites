import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Heaton Financial | Independent Financial Advisers in Exeter, Devon",
    template: "%s | Heaton Financial",
  },
  description:
    "Completely unbiased and professional independent financial advice from Heaton Financial in Exeter, Devon. Specialist financial adviser for doctors and medical professionals. Pensions, investments, ISAs, life assurance, income protection and inheritance tax planning.",
  keywords: [
    "financial adviser Exeter",
    "independent financial adviser Devon",
    "IFA Exeter",
    "financial adviser for doctors",
    "financial adviser for medical professionals",
    "NHS pension advice",
    "doctor financial planning",
    "medical professional financial adviser",
    "pension advice Exeter",
    "investment advice Devon",
    "inheritance tax planning Exeter",
    "income protection doctors",
    "life assurance Exeter",
    "ISA advice Devon",
    "Heaton Financial",
    "financial planning Exeter",
    "retirement planning Devon",
    "locum financial advice",
    "GP financial planning",
    "NHS consultant financial advice",
  ],
  authors: [{ name: "Heaton Financial Independent Financial Advisers Ltd" }],
  creator: "Heaton Financial Independent Financial Advisers Ltd",
  publisher: "Heaton Financial Independent Financial Advisers Ltd",
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
    url: "https://heatonfinancial.co.uk",
    siteName: "Heaton Financial",
    title: "Heaton Financial | Independent Financial Advisers for Medical Professionals & Individuals",
    description:
      "Completely unbiased and professional independent financial advice in Exeter, Devon. Specialist financial adviser for doctors, GPs, NHS consultants and medical professionals. Pensions, investments, ISAs, life assurance, income protection and inheritance tax planning.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heaton Financial - Independent Financial Advisers in Exeter, Devon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heaton Financial | Independent Financial Advisers for Doctors & Medical Professionals",
    description:
      "Specialist independent financial advice for medical professionals and individuals in Exeter, Devon.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://heatonfinancial.co.uk",
  },
  other: {
    "geo.region": "GB-DEV",
    "geo.placename": "Exeter",
    "geo.position": "50.7175;-3.5088",
    ICBM: "50.7175, -3.5088",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://heatonfinancial.co.uk/#organization",
  name: "Heaton Financial Independent Financial Advisers Ltd",
  alternateName: "Heaton Financial",
  description:
    "Completely unbiased and professional independent financial advice including investments, ISAs, pensions, life assurance, income protection and inheritance tax planning. Specialist financial adviser for doctors and medical professionals in Exeter, Devon.",
  url: "https://heatonfinancial.co.uk",
  telephone: "+441392258252",
  email: "info@heatonfinancial.co.uk",
  priceRange: "$$$",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Direct Debit",
  areaServed: [
    {
      "@type": "City",
      name: "Exeter",
    },
    {
      "@type": "AdministrativeArea",
      name: "Devon",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Financial Advice for Medical Professionals",
          description: "Specialist financial planning for doctors, GPs, NHS consultants and medical professionals including NHS pension advice and locum income planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investments & ISAs",
          description: "Whole-of-market investment advice and ISA planning tailored to your financial goals and risk profile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pensions & Annuities",
          description: "Comprehensive pension planning including NHS pensions, SIPPs, annuities and retirement income strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Life Assurance & Income Protection",
          description: "Life assurance and income protection to safeguard your family and income.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inheritance Tax Planning",
          description: "Inheritance tax planning and wealth transfer strategies for your family's future.",
        },
      },
    ],
  },
  location: {
    "@type": "Place",
    name: "Heaton Financial Office",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 Waring Bowen Court, Mill Road",
      addressLocality: "Exeter",
      addressRegion: "Devon",
      postalCode: "EX2 6LY",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.7175,
      longitude: -3.5088,
    },
    telephone: "+441392258252",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://heatonfinancial.co.uk/#localbusiness",
  name: "Heaton Financial",
  image: "https://heatonfinancial.co.uk/logo.png",
  telephone: "+441392258252",
  email: "info@heatonfinancial.co.uk",
  url: "https://heatonfinancial.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 Waring Bowen Court, Mill Road",
    addressLocality: "Exeter",
    addressRegion: "Devon",
    postalCode: "EX2 6LY",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.7175,
    longitude: -3.5088,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
  priceRange: "$$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://heatonfinancial.co.uk/#website",
  url: "https://heatonfinancial.co.uk",
  name: "Heaton Financial",
  description: "Completely unbiased and professional independent financial advice in Exeter, Devon. Specialist financial adviser for doctors and medical professionals.",
  publisher: {
    "@id": "https://heatonfinancial.co.uk/#organization",
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
        id="financial-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(financialServiceSchema),
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
