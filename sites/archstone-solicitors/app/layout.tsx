import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Archstone Solicitors | East London Law Firm | Stratford',
    template: '%s | Archstone Solicitors',
  },
  description:
    'Archstone Solicitors - Expert legal services in East London for over 20 years. Immigration, Conveyancing, Family Law, Litigation, Personal Injury, and Commercial Law. Located in Stratford near Westfield. SRA regulated.',
  keywords: [
    'solicitors East London',
    'solicitors Stratford',
    'immigration lawyers London',
    'conveyancing solicitors East London',
    'family law solicitors',
    'personal injury lawyers London',
    'commercial solicitors',
    'Canary Wharf solicitors',
    'Hackney solicitors',
    'Archstone Solicitors',
    'East Ham solicitors',
    'Romford solicitors',
  ],
  authors: [{ name: 'Archstone Solicitors' }],
  creator: 'Archstone Solicitors',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://archstone-solicitors.co.uk',
    siteName: 'Archstone Solicitors',
    title: 'Archstone Solicitors | East London Law Firm',
    description:
      'Expert legal services in East London. Immigration, Conveyancing, Family Law, Litigation, Personal Injury & Commercial Law. 20+ years experience.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Archstone Solicitors - East London Law Firm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Archstone Solicitors | East London Law Firm',
    description:
      'Expert legal services in East London. Immigration, Conveyancing, Family Law, and more.',
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
              name: 'Archstone Solicitors',
              description:
                'Expert solicitors serving East London for over 20 years. Specializing in Immigration, Conveyancing, Family Law, Litigation, Personal Injury, and Commercial Law.',
              url: 'https://archstone-solicitors.co.uk',
              telephone: '+44 20 8534 8008',
              faxNumber: '+44 20 8534 7007',
              email: 'info@archstone.org.uk',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Stratford',
                addressRegion: 'East London',
                addressCountry: 'GB',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 51.5448,
                longitude: -0.0037,
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Stratford',
                },
                {
                  '@type': 'City',
                  name: 'Canary Wharf',
                },
                {
                  '@type': 'City',
                  name: 'Whitechapel',
                },
                {
                  '@type': 'City',
                  name: 'Hackney',
                },
                {
                  '@type': 'City',
                  name: 'East Ham',
                },
                {
                  '@type': 'City',
                  name: 'Romford',
                },
                {
                  '@type': 'AdministrativeArea',
                  name: 'Essex',
                },
              ],
              priceRange: 'Reasonable rates',
              knowsAbout: [
                'Immigration Law',
                'Conveyancing',
                'Family Law',
                'Litigation',
                'Personal Injury',
                'Company Law',
                'Commercial Law',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Legal Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Immigration Law',
                      description: 'Visa applications, citizenship, asylum cases',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Conveyancing',
                      description: 'Property buying and selling, remortgaging',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Family Law',
                      description: 'Divorce, child custody, financial settlements',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Litigation',
                      description: 'Civil litigation and dispute resolution',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Personal Injury',
                      description: 'Accident claims and compensation',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Company & Commercial Law',
                      description: 'Business formation, contracts, commercial disputes',
                    },
                  },
                ],
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '127',
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
