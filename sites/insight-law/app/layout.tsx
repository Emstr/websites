import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Insight Law | Specialist Conveyancing Solicitors | Cardiff & Bristol',
    template: '%s | Insight Law',
  },
  description:
    'Insight Law - A new type of law firm. Small, specialist conveyancing solicitors serving Cardiff, Bristol, Wales and England. Residential, commercial, and buy-to-let conveyancing. SRA regulated.',
  keywords: [
    'conveyancing solicitors Cardiff',
    'conveyancing solicitors Bristol',
    'property solicitors Wales',
    'residential conveyancing',
    'commercial conveyancing',
    'buy-to-let solicitors',
    'remortgage solicitors',
    'specialist conveyancing',
    'Insight Law',
    'Cardiff solicitors',
    'Bristol solicitors',
    'Welsh solicitors',
  ],
  authors: [{ name: 'Insight Law' }],
  creator: 'Insight Law',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://insightlaw.co.uk',
    siteName: 'Insight Law',
    title: 'Insight Law | Specialist Conveyancing Solicitors',
    description:
      'A new type of law firm. Small, specialist conveyancing solicitors in Cardiff & Bristol. Residential, commercial, and buy-to-let conveyancing.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Insight Law - Specialist Conveyancing Solicitors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insight Law | Specialist Conveyancing Solicitors',
    description:
      'A new type of law firm. Small, specialist conveyancing in Cardiff & Bristol.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'Insight Law',
              description:
                'A new type of law firm. Small and specialist, focused exclusively on conveyancing. Serving Cardiff, Bristol, Wales and England with residential, commercial, and buy-to-let conveyancing services.',
              url: 'https://insightlaw.co.uk',
              telephone: ['+44 29 2009 3600', '+44 117 925 6257'],
              email: 'info@insightlaw.co.uk',
              address: [
                {
                  '@type': 'PostalAddress',
                  addressLocality: 'Cardiff',
                  addressRegion: 'Wales',
                  addressCountry: 'GB',
                },
                {
                  '@type': 'PostalAddress',
                  addressLocality: 'Bristol',
                  addressRegion: 'England',
                  addressCountry: 'GB',
                },
              ],
              areaServed: [
                {
                  '@type': 'Country',
                  name: 'Wales',
                },
                {
                  '@type': 'Country',
                  name: 'England',
                },
                {
                  '@type': 'City',
                  name: 'Cardiff',
                },
                {
                  '@type': 'City',
                  name: 'Bristol',
                },
              ],
              priceRange: 'Competitive fixed fees',
              knowsAbout: [
                'Residential Conveyancing',
                'Commercial Conveyancing',
                'Buy-to-let Conveyancing',
                'Remortgaging',
                'Transfer of Equity',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Conveyancing Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Residential Conveyancing',
                      description: 'Expert residential property buying and selling',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Commercial Conveyancing',
                      description: 'Commercial property transactions and leases',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Buy-to-let Conveyancing',
                      description: 'Investment property purchase and sale',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-gray-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
