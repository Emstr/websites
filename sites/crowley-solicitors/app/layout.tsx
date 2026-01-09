import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Crowley & Co Solicitors | Cardiff Law Firm | 30 Years Experience',
    template: '%s | Crowley & Co Solicitors',
  },
  description:
    'Crowley & Co Solicitors - Expert legal services in Cardiff since 1994. Founded by Mark Crowley with 30+ years experience from London, Bristol, and CPS. Conveyancing, Family Law, Wills, Litigation, Employment & Commercial Law. SRA regulated.',
  keywords: [
    'solicitors Cardiff',
    'solicitors South Wales',
    'Cardiff law firm',
    'Mark Crowley solicitor',
    'conveyancing Cardiff',
    'family law solicitors Cardiff',
    'wills and probate Cardiff',
    'employment law Cardiff',
    'commercial solicitors Cardiff',
    'Welsh solicitors',
    'Crowley & Co',
    'Cardiff legal services',
  ],
  authors: [{ name: 'Crowley & Co Solicitors' }],
  creator: 'Crowley & Co Solicitors',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://crowleysolicitors.co.uk',
    siteName: 'Crowley & Co Solicitors',
    title: 'Crowley & Co Solicitors | Cardiff Law Firm | 30 Years Experience',
    description:
      'Expert legal services in Cardiff since 1994. Founded by Mark Crowley with experience from London, Bristol, and CPS. Full range of legal services for individuals and businesses.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Crowley & Co Solicitors - Cardiff Law Firm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crowley & Co Solicitors | Cardiff Law Firm',
    description:
      'Expert legal services in Cardiff since 1994. 30+ years experience.',
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
              name: 'Crowley & Co Solicitors',
              description:
                'Expert solicitors serving Cardiff and South Wales since 1994. Founded by Mark Crowley with extensive experience from London, Bristol, and the Crown Prosecution Service. Full range of legal services.',
              url: 'https://crowleysolicitors.co.uk',
              telephone: '+44 29 2045 8895',
              email: 'info@crowleysolicitors.co.uk',
              foundingDate: '1994',
              founder: {
                '@type': 'Person',
                name: 'Mark Crowley',
                jobTitle: 'Founding Partner & Senior Solicitor',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Cardiff',
                addressRegion: 'South Wales',
                addressCountry: 'GB',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 51.4816,
                longitude: -3.1791,
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Cardiff',
                },
                {
                  '@type': 'City',
                  name: 'Newport',
                },
                {
                  '@type': 'City',
                  name: 'Swansea',
                },
                {
                  '@type': 'AdministrativeArea',
                  name: 'South Wales',
                },
                {
                  '@type': 'AdministrativeArea',
                  name: 'Vale of Glamorgan',
                },
              ],
              priceRange: 'Competitive rates',
              knowsAbout: [
                'Conveyancing',
                'Family Law',
                'Wills and Probate',
                'Civil Litigation',
                'Employment Law',
                'Commercial Law',
                'Property Law',
                'Divorce',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Legal Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Conveyancing',
                      description: 'Property buying, selling, and remortgaging services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Family Law',
                      description: 'Divorce, separation, child custody, and financial settlements',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Wills & Probate',
                      description: 'Will writing, estate planning, and probate administration',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Civil Litigation',
                      description: 'Dispute resolution and court representation',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Employment Law',
                      description: 'Employment contracts, tribunals, and workplace disputes',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Commercial Law',
                      description: 'Business contracts, company law, and commercial disputes',
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
