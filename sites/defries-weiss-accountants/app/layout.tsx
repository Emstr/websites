import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://defries-weiss.co.uk"),
  title: {
    default: "Defries Weiss Accountants | Chartered Accountants | North Finchley, London",
    template: "%s | Defries Weiss Accountants",
  },
  description:
    "Established 1976. Chartered Accountants in North Finchley, London. Expert audit, accounts, tax planning, payroll, and business advice services. Part of Simmons Gainsford network. Free initial consultations.",
  keywords: [
    "chartered accountants",
    "accountants",
    "audit",
    "tax planning",
    "corporate tax",
    "personal tax",
    "payroll services",
    "VAT returns",
    "business advice",
    "financial planning",
    "North Finchley",
    "Finchley",
    "London",
    "N12",
    "Simmons Gainsford",
  ],
  authors: [{ name: "Defries Weiss (Accountants) Limited" }],
  creator: "Defries Weiss (Accountants) Limited",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://defries-weiss.co.uk",
    siteName: "Defries Weiss Accountants",
    title: "Defries Weiss Accountants | Chartered Accountants | North Finchley",
    description:
      "Established 1976. Chartered Accountants in North Finchley offering audit, accounts, tax planning, and business advice services. Part of Simmons Gainsford network.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Defries Weiss Accountants - Chartered Accountants since 1976",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Defries Weiss Accountants | Chartered Accountants",
    description:
      "Established 1976. Expert accounting, audit, and tax services in North Finchley, London. Part of Simmons Gainsford network.",
  },
  alternates: {
    canonical: "https://defries-weiss.co.uk",
  },
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Defries Weiss (Accountants) Limited",
  description:
    "Chartered Accountants providing audit, accounts, tax planning, payroll, VAT returns, and business advice services. Established 1976, member of Simmons Gainsford network.",
  url: "https://defries-weiss.co.uk",
  telephone: "+44 20 8446 2999",
  foundingDate: "1976",
  address: {
    "@type": "PostalAddress",
    streetAddress: "311 Ballards Lane",
    addressLocality: "North Finchley",
    addressRegion: "London",
    postalCode: "N12 8LY",
    addressCountry: "GB",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  areaServed: [
    "North Finchley",
    "Finchley",
    "Barnet",
    "North London",
    "Greater London",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Accounting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Audit & Assurance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Accounts Production",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tax Planning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Payroll Services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Advice",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
