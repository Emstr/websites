import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wembleysolicitors.com"),
  title: {
    default: "Wembley Solicitors | Immigration, Family & Commercial Law | Fixed Fees",
    template: "%s | Wembley Solicitors",
  },
  description:
    "North West London law firm specializing in Immigration Law, Family Law, and Commercial Leases. Fixed fees from £1000-£1500. £60 consultations. Open Saturdays 10am-2pm. 4 mins from Wembley Central Station.",
  keywords: [
    "wembley solicitors",
    "immigration law wembley",
    "family law wembley",
    "divorce solicitor wembley",
    "commercial lease wembley",
    "north west london solicitors",
    "fixed fee solicitors",
    "saturday solicitors",
    "wembley central solicitors",
  ],
  authors: [{ name: "Wembley Solicitors" }],
  creator: "Wembley Solicitors",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://wembleysolicitors.com",
    siteName: "Wembley Solicitors",
    title: "Wembley Solicitors | Immigration, Family & Commercial Law",
    description:
      "North West London law firm with transparent fixed fees. Immigration Law, Family Law, Commercial Leases. Open Saturdays. 4 mins from Wembley Central.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wembley Solicitors - Transparent Legal Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wembley Solicitors | Fixed Fee Legal Services",
    description:
      "Immigration, Family & Commercial Law. Fixed fees. Open Saturdays. 4 mins from Wembley Central Station.",
  },
  alternates: {
    canonical: "https://wembleysolicitors.com",
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
  "@type": "LegalService",
  name: "Wembley Solicitors",
  description:
    "North West London law firm specializing in Immigration Law, Family Law, and Commercial Leases with transparent fixed-fee pricing.",
  url: "https://wembleysolicitors.com",
  telephone: "+44 20 3417 3700",
  email: "info@wembleysolicitors.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wembley",
    addressRegion: "North West London",
    addressCountry: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  priceRange: "£60 - £1500",
  areaServed: [
    {
      "@type": "Place",
      name: "Wembley",
    },
    {
      "@type": "Place",
      name: "North West London",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Legal Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Immigration Law",
          description: "Visa applications, appeals, asylum claims, citizenship applications",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Family Law",
          description: "Divorce proceedings, child custody arrangements, financial settlements",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Leases",
          description: "Commercial lease agreements and negotiations",
          offers: {
            "@type": "Offer",
            price: "1000-1500",
            priceCurrency: "GBP",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Initial Consultation",
          offers: {
            "@type": "Offer",
            price: "60",
            priceCurrency: "GBP",
          },
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
