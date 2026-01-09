import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Prism Family Law | Newcastle Family Law Specialists',
    template: '%s | Prism Family Law',
  },
  description:
    'Prism Family Law - Specialist family law solicitors in Newcastle. Expert advice on divorce, child arrangements, domestic violence, and financial settlements. Free 30-minute consultation. Legal Aid available. Established 2016.',
  keywords: [
    'family law solicitors Newcastle',
    'divorce lawyers Newcastle',
    'child custody solicitors',
    'domestic violence lawyers Newcastle',
    'financial settlements',
    'family law Newcastle',
    'legal aid solicitors',
    'Prism Family Law',
    'Newcastle solicitors',
    'family solicitors NE1',
  ],
  authors: [{ name: 'Prism Family Law' }],
  creator: 'Prism Family Law',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://prismfamilylaw.co.uk',
    siteName: 'Prism Family Law',
    title: 'Prism Family Law | Newcastle Family Law Specialists',
    description:
      'Specialist family law solicitors in Newcastle. Divorce, child arrangements, domestic violence, financial settlements. Free 30-min consultation. Legal Aid available.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prism Family Law - Newcastle Family Law Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prism Family Law | Newcastle Family Law Specialists',
    description:
      'Specialist family law solicitors in Newcastle. Free 30-min consultation. Legal Aid available.',
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
              name: 'Prism Family Law',
              description:
                'Specialist family law solicitors in Newcastle providing expert advice on divorce, child arrangements, domestic violence, and financial settlements since 2016.',
              url: 'https://prismfamilylaw.co.uk',
              telephone: '+44 191 269 6871',
              email: 'info@prismfamilylaw.co.uk',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Collingwood Buildings, 38 Collingwood Street',
                addressLocality: 'Newcastle',
                postalCode: 'NE1 1JF',
                addressCountry: 'GB',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 54.9726,
                longitude: -1.6125,
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Newcastle',
                },
                {
                  '@type': 'City',
                  name: 'Gateshead',
                },
                {
                  '@type': 'City',
                  name: 'North Shields',
                },
                {
                  '@type': 'City',
                  name: 'Durham',
                },
                {
                  '@type': 'AdministrativeArea',
                  name: 'Northumberland',
                },
                {
                  '@type': 'AdministrativeArea',
                  name: 'Tyne and Wear',
                },
              ],
              priceRange: 'Free initial consultation',
              knowsAbout: [
                'Family Law',
                'Divorce',
                'Child Arrangements',
                'Domestic Violence',
                'Financial Settlements',
                'Legal Aid',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Family Law Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Divorce & Separation',
                      description: 'Expert guidance through divorce and separation proceedings',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Child Arrangements',
                      description: 'Advice on custody, contact, and parental responsibility',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Domestic Violence',
                      description: 'Protection orders and legal support for domestic abuse',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Financial Settlements',
                      description: 'Division of assets, maintenance, and financial orders',
                    },
                  },
                ],
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '68',
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
