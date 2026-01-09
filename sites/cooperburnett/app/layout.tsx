import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'CooperBurnett LLP | Wills, Probate & Trusts | Tunbridge Wells',
    template: '%s | CooperBurnett LLP',
  },
  description:
    'CooperBurnett LLP - Specialist solicitors in Wills, Probate, and Trusts. Conveniently located in central Tunbridge Wells with parking onsite, just 5 minutes from the station. Expert legal advice across Kent. Contact us on 01892 515022.',
  keywords: [
    'wills Tunbridge Wells',
    'probate solicitors Kent',
    'trusts solicitors',
    'wills Kent',
    'probate Tunbridge Wells',
    'lasting powers of attorney Kent',
    'CooperBurnett LLP',
    'estate planning Kent',
    'will writing Tunbridge Wells',
    'solicitors Tunbridge Wells',
    'legal services Kent',
  ],
  authors: [{ name: 'CooperBurnett LLP' }],
  creator: 'CooperBurnett LLP',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://cooperburnett.com',
    siteName: 'CooperBurnett LLP',
    title: 'CooperBurnett LLP | Wills, Probate & Trusts | Tunbridge Wells',
    description:
      'Specialist solicitors in Wills, Probate, and Trusts. Central Tunbridge Wells location with parking onsite. Expert legal advice across Kent.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CooperBurnett LLP - Wills, Probate & Trusts Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CooperBurnett LLP | Wills, Probate & Trusts',
    description:
      'Specialist solicitors in Wills, Probate, and Trusts. Central Tunbridge Wells with parking onsite.',
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
              name: 'CooperBurnett LLP',
              description:
                'Specialist solicitors providing expert legal advice on Wills, Probate, and Trusts. Conveniently located in central Tunbridge Wells with parking onsite, just 5 minutes from the train station.',
              url: 'https://cooperburnett.com',
              telephone: '+44 1892 515022',
              email: 'enquiries@cooperburnett.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Napier House, 14-16 Mount Ephraim Road',
                addressLocality: 'Tunbridge Wells',
                addressRegion: 'Kent',
                postalCode: 'TN1 1EE',
                addressCountry: 'GB',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 51.1321,
                longitude: 0.2633,
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Tunbridge Wells',
                },
                {
                  '@type': 'City',
                  name: 'Tonbridge',
                },
                {
                  '@type': 'City',
                  name: 'Sevenoaks',
                },
                {
                  '@type': 'City',
                  name: 'Maidstone',
                },
                {
                  '@type': 'AdministrativeArea',
                  name: 'Kent',
                },
              ],
              priceRange: 'Competitive rates',
              knowsAbout: [
                'Wills',
                'Probate',
                'Trusts',
                'Lasting Powers of Attorney',
                'Estate Administration',
                'Estate Planning',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Legal Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Wills',
                      description: 'Expert will writing services to protect your loved ones and ensure your wishes are carried out',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Probate',
                      description: 'Complete probate administration services with compassionate, professional support',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Trusts',
                      description: 'Setting up trusts to protect your assets and provide for your beneficiaries',
                    },
                  },
                ],
              },
              amenityFeature: [
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Parking',
                  value: true,
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Near Train Station',
                  value: '5 minutes walk',
                },
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '17:30',
                },
              ],
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
