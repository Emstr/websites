import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Hopkins Solicitors | Conveyancing & Property Law | Nottinghamshire & Derbyshire',
    template: '%s | Hopkins Solicitors',
  },
  description:
    'Hopkins Solicitors - Longstanding local firm with 6 offices across Nottinghamshire and Derbyshire. Expert conveyancing and property law services in Nottingham, Mansfield, Ashfield, and South Derbyshire. Excellent reputation for residential and commercial property transactions.',
  keywords: [
    'Hopkins Solicitors',
    'conveyancing Nottingham',
    'conveyancing Mansfield',
    'property solicitors Nottinghamshire',
    'property solicitors Derbyshire',
    'residential conveyancing',
    'commercial conveyancing',
    'property law Nottingham',
    'solicitors Ashfield',
    'solicitors South Derbyshire',
    'conveyancing solicitors near me',
    'remortgage solicitors',
  ],
  authors: [{ name: 'Hopkins Solicitors' }],
  creator: 'Hopkins Solicitors',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://hopkins-solicitors.co.uk',
    siteName: 'Hopkins Solicitors',
    title: 'Hopkins Solicitors | Regional Conveyancing Experts',
    description:
      'Expert conveyancing and property law across Nottinghamshire & Derbyshire. 6 convenient offices, excellent reputation, competitive fees.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hopkins Solicitors - Regional Conveyancing Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hopkins Solicitors | Conveyancing & Property Law',
    description:
      'Expert conveyancing across Nottinghamshire & Derbyshire. 6 offices serving the region.',
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
              name: 'Hopkins Solicitors',
              description:
                'Longstanding local conveyancing and property law firm serving Nottinghamshire and Derbyshire with 6 offices across the region. Excellent reputation for residential and commercial property transactions.',
              url: 'https://hopkins-solicitors.co.uk',
              telephone: '+44 115 837 1116',
              email: 'enquiries@hopkins-solicitors.co.uk',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Nottinghamshire',
                addressCountry: 'GB',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Nottingham',
                },
                {
                  '@type': 'City',
                  name: 'Mansfield',
                },
                {
                  '@type': 'City',
                  name: 'Ashfield',
                },
                {
                  '@type': 'AdministrativeArea',
                  name: 'South Derbyshire',
                },
                {
                  '@type': 'AdministrativeArea',
                  name: 'Nottinghamshire',
                },
                {
                  '@type': 'AdministrativeArea',
                  name: 'Derbyshire',
                },
              ],
              priceRange: 'Competitive fees',
              knowsAbout: [
                'Residential Conveyancing',
                'Commercial Conveyancing',
                'Property Law',
                'Remortgaging',
                'Leasehold Extensions',
                'Right to Buy',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Legal Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Residential Conveyancing',
                      description: 'Expert handling of residential property purchases and sales',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Commercial Conveyancing',
                      description: 'Professional commercial property transaction services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Property Law',
                      description: 'Comprehensive property legal services including leasehold and freehold matters',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Remortgaging',
                      description: 'Efficient remortgage conveyancing services',
                    },
                  },
                ],
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '284',
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
