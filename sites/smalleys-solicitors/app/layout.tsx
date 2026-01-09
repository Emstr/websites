import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Smalleys Solicitors | Nottingham Conveyancing Experts',
    template: '%s | Smalleys Solicitors',
  },
  description:
    'Smalleys Solicitors - Technology-led conveyancing and property law experts in Nottingham. Competitive prices, efficient service, and top-tier technology for seamless property transactions. SRA regulated.',
  keywords: [
    'conveyancing solicitors Nottingham',
    'property solicitors Nottingham',
    'conveyancing lawyers Nottingham',
    'house buying solicitors Nottingham',
    'remortgage solicitors Nottingham',
    'property law Nottingham',
    'Smalleys Solicitors',
    'Nottingham solicitors',
    'residential conveyancing Nottingham',
    'commercial property solicitors Nottingham',
  ],
  authors: [{ name: 'Smalleys Solicitors' }],
  creator: 'Smalleys Solicitors',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://smalleyssolicitors.co.uk',
    siteName: 'Smalleys Solicitors',
    title: 'Smalleys Solicitors | Nottingham Conveyancing Experts',
    description:
      'Technology-led conveyancing and property law experts in Nottingham. Competitive prices, efficient service, and top-tier technology for seamless property transactions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smalleys Solicitors - Nottingham Conveyancing Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smalleys Solicitors | Nottingham Conveyancing Experts',
    description:
      'Technology-led conveyancing in Nottingham. Competitive prices and efficient service.',
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
              name: 'Smalleys Solicitors',
              description:
                'Technology-led conveyancing and property law solicitors in Nottingham. Offering competitive prices, efficient service, and top-tier technology for seamless property transactions.',
              url: 'https://smalleyssolicitors.co.uk',
              telephone: '+44 115 955 6555',
              email: 'info@smalleyssolicitors.co.uk',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Nottingham',
                addressRegion: 'Nottinghamshire',
                addressCountry: 'GB',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 52.9548,
                longitude: -1.1581,
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Nottingham',
                },
                {
                  '@type': 'AdministrativeArea',
                  name: 'Nottinghamshire',
                },
                {
                  '@type': 'AdministrativeArea',
                  name: 'East Midlands',
                },
              ],
              priceRange: 'Competitive rates',
              knowsAbout: [
                'Conveyancing',
                'Property Law',
                'Residential Conveyancing',
                'Commercial Property',
                'Remortgaging',
                'Transfer of Equity',
                'Lease Extensions',
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
                      description: 'Expert property buying and selling services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Commercial Property',
                      description: 'Commercial property transactions and leases',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Remortgaging',
                      description: 'Fast and efficient remortgage services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Transfer of Equity',
                      description: 'Property ownership transfer services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Lease Extensions',
                      description: 'Leasehold extension and enfranchisement',
                    },
                  },
                ],
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '156',
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
