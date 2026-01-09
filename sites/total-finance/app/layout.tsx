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
  metadataBase: new URL("https://total-finance.org.uk"),
  title: {
    default: "Total Finance (UK) Ltd | Independent Financial Advisers | Bromley",
    template: "%s | Total Finance (UK) Ltd",
  },
  description:
    "Independent financial advisers in Bromley, Greater London. Expert advice on mortgages, secured loans, life assurance, critical illness cover, and income protection. Professional financial planning services.",
  keywords: [
    "financial adviser",
    "IFA",
    "Bromley",
    "Greater London",
    "mortgages",
    "secured loans",
    "life assurance",
    "critical illness cover",
    "income protection",
    "financial planning",
    "mortgage broker",
    "independent financial adviser",
  ],
  authors: [{ name: "Total Finance (UK) Ltd" }],
  creator: "Total Finance (UK) Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://total-finance.org.uk",
    siteName: "Total Finance (UK) Ltd",
    title: "Total Finance (UK) Ltd | Independent Financial Advisers | Bromley",
    description:
      "Independent financial advisers in Bromley, Greater London. Expert advice on mortgages, secured loans, life assurance, critical illness cover, and income protection.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Total Finance (UK) Ltd - Independent Financial Advisers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Total Finance (UK) Ltd | Independent Financial Advisers | Bromley",
    description:
      "Independent financial advisers in Bromley. Expert advice on mortgages, life assurance, critical illness cover, and income protection.",
  },
  alternates: {
    canonical: "https://total-finance.org.uk",
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
  name: "Total Finance (UK) Ltd",
  description:
    "Independent financial advisers in Bromley, Greater London. Expert advice on mortgages, secured loans, life assurance, critical illness cover, and income protection.",
  url: "https://total-finance.org.uk",
  telephone: "+44 20 8695 7548",
  email: "info@total-finance.org.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "184-190 Farnaby Road",
    addressLocality: "Bromley",
    addressRegion: "Greater London",
    postalCode: "BR2 0BB",
    addressCountry: "GB",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  priceRange: "££",
  areaServed: [
    "Bromley",
    "Greater London",
    "South East London",
    "Kent",
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
