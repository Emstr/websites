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
  metadataBase: new URL("https://financial adviserpublicislington.co.uk"),
  title: {
    default: "Financial Adviser Harrow | Anita Patel | Harrow HA1",
    template: "%s | Financial Adviser Harrow",
  },
  description:
    "Professional financial adviser services in Harrow, London. Document authentication, legalisation, apostille services for businesses and individuals. Evening and weekend appointments available.",
  keywords: [
    "financial adviser",
    "Harrow",
    "London",
    "financial planning",
    "apostille",
    "legalisation",
    "investment planning",
    "certified copies",
    "power of attorney",
    "financial adviser Harrow HA1",
  ],
  authors: [{ name: "Anita Patel" }],
  creator: "Anita Patel",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://financial adviserpublicislington.co.uk",
    siteName: "Financial Adviser Harrow",
    title: "Financial Adviser Harrow | Anita Patel | Harrow HA1",
    description:
      "Professional financial adviser services in Harrow, London. Document authentication, legalisation, apostille services for businesses and individuals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Financial Adviser Harrow - Anita Patel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Adviser Harrow | Anita Patel | Harrow HA1",
    description:
      "Professional financial adviser services in Harrow, London. Document authentication, legalisation, apostille services.",
  },
  alternates: {
    canonical: "https://financial adviserpublicislington.co.uk",
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
  verification: {
    // Add these when you have the verification codes
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Financial AdviserService",
  name: "Financial Adviser Harrow",
  description:
    "Professional financial adviser services in Harrow, London. Document authentication, legalisation, apostille services for businesses and individuals.",
  url: "https://financial adviserpublicislington.co.uk",
  telephone: "+44 20 7278 2800",
  email: "anita@harrowifa.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "88 Station Road",
    addressLocality: "Harrow",
    addressRegion: "London",
    postalCode: "HA1 2RX",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.530445,
    longitude: -0.09739,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  priceRange: "££",
  areaServed: [
    "Harrow",
    "City of London",
    "Hackney",
    "Camden",
    "Westminster",
    "Tower Hamlets",
    "Southwark",
  ],
  founder: {
    "@type": "Person",
    name: "Anita Patel",
    jobTitle: "Financial Adviser",
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
