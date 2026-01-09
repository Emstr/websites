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
  metadataBase: new URL("https://courtneys-dalston.com"),
  title: {
    default: "Courtneys Estate Agents | Family Owned Since 2003 | Dalston, Hackney",
    template: "%s | Courtneys Estate Agents",
  },
  description:
    "Family-run estate agency serving Hackney, East & North London since 2003. Residential sales, lettings & management, commercial property, mortgages, land & development. 5-star Google reviews. Honest, transparent, efficient service.",
  keywords: [
    "estate agents",
    "Dalston",
    "Hackney",
    "East London",
    "North London",
    "property sales",
    "lettings",
    "property management",
    "commercial property",
    "mortgages",
    "land development",
    "family estate agents",
    "Kingsland Road",
    "E8",
  ],
  authors: [{ name: "Courtneys Estate Agents" }],
  creator: "Courtneys Estate Agents",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://courtneys-dalston.com",
    siteName: "Courtneys Estate Agents",
    title: "Courtneys Estate Agents | Family Owned Since 2003 | Dalston, Hackney",
    description:
      "Family-run estate agency serving Hackney, East & North London since 2003. Residential sales, lettings, commercial property. 5-star Google reviews.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Courtneys Estate Agents - Family Owned Since 2003",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Courtneys Estate Agents | Family Owned Since 2003 | Dalston, Hackney",
    description:
      "Family-run estate agency serving Hackney, East & North London. Residential sales, lettings, commercial property. 5-star Google reviews.",
  },
  alternates: {
    canonical: "https://courtneys-dalston.com",
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
  "@type": "RealEstateAgent",
  name: "Courtneys Estate Agents",
  description:
    "Family-run estate agency serving Hackney, East & North London since 2003. Residential sales, lettings & management, commercial property, mortgages, land & development.",
  url: "https://courtneys-dalston.com",
  telephone: "+44 20 7275 8000",
  foundingDate: "2003",
  address: {
    "@type": "PostalAddress",
    streetAddress: "544 Kingsland Rd",
    addressLocality: "London",
    addressRegion: "Greater London",
    postalCode: "E8 4AH",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "51.5471",
    longitude: "-0.0754",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "££",
  areaServed: [
    "Hackney",
    "Dalston",
    "East London",
    "North London",
    "Greater London",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    ratingCount: "50",
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
