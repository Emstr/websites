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
  metadataBase: new URL("https://aspireonline.co.uk"),
  title: {
    default: "Aspire Independent Financial Planners | Finchley, North London",
    template: "%s | Aspire Financial Planners",
  },
  description:
    "Independent financial advice in Finchley, North London. Expert wealth management, pensions, mortgages, insurance, equity release, and will writing. Personalised financial planning from qualified advisers.",
  keywords: [
    "financial adviser",
    "Finchley",
    "North London",
    "independent financial advice",
    "wealth management",
    "pensions",
    "mortgages",
    "insurance",
    "equity release",
    "will writing",
    "IFA",
    "retirement planning",
  ],
  authors: [{ name: "Aspire Independent Financial Planners LLP" }],
  creator: "Aspire Independent Financial Planners LLP",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://aspireonline.co.uk",
    siteName: "Aspire Independent Financial Planners",
    title: "Aspire Independent Financial Planners | Finchley, North London",
    description:
      "Independent financial advice in Finchley. Expert wealth management, pensions, mortgages, insurance, and retirement planning from qualified advisers.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aspire Independent Financial Planners - Finchley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspire Independent Financial Planners | Finchley, North London",
    description:
      "Independent financial advice in Finchley. Wealth management, pensions, mortgages, insurance, and retirement planning.",
  },
  alternates: {
    canonical: "https://aspireonline.co.uk",
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
  "@type": "FinancialService",
  name: "Aspire Independent Financial Planners LLP",
  description:
    "Independent financial advice in Finchley, North London. Expert wealth management, pensions, mortgages, insurance, equity release, and will writing services.",
  url: "https://aspireonline.co.uk",
  telephone: "+44 20 8371 4411",
  email: "enquiries@aspireonline.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "17 Station Road",
    addressLocality: "Finchley",
    addressRegion: "London",
    postalCode: "N3 2SB",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5977,
    longitude: -0.1759,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  priceRange: "£££",
  areaServed: [
    "Finchley",
    "Barnet",
    "North London",
    "Muswell Hill",
    "Hampstead",
    "Golders Green",
    "East Finchley",
  ],
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
