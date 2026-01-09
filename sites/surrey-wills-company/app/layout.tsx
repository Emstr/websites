import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'The Surrey Wills Company | Wills, Trusts & LPAs | Cranleigh, Surrey',
    template: '%s | The Surrey Wills Company',
  },
  description:
    'The Surrey Wills Company - Independent estate planning specialists in Cranleigh, Surrey. Expert advice on Wills, Trusts, Lasting Powers of Attorney, Probate, and Funeral Planning. Home visits available 7 days a week. Contact Wendy Amos, ACILEx on 01483 383500.',
  keywords: [
    'wills Surrey',
    'wills Cranleigh',
    'lasting powers of attorney Surrey',
    'LPA Cranleigh',
    'probate Surrey',
    'estate planning Surrey',
    'trusts Surrey',
    'funeral planning',
    'The Surrey Wills Company',
    'Wendy Amos',
    'will writing Guildford',
    'wills Godalming',
    'home visits wills',
  ],
  authors: [{ name: 'The Surrey Wills Company' }],
  creator: 'The Surrey Wills Company',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://surrey-wills.co.uk',
    siteName: 'The Surrey Wills Company',
    title: 'The Surrey Wills Company | Wills, Trusts & LPAs | Cranleigh',
    description:
      'Independent estate planning specialists in Cranleigh, Surrey. Expert advice on Wills, Trusts, LPAs, Probate, and Funeral Planning. Home visits available 7 days a week.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Surrey Wills Company - Estate Planning Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Surrey Wills Company | Wills, Trusts & LPAs',
    description:
      'Independent estate planning specialists in Cranleigh, Surrey. Home visits available 7 days a week.',
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
              '@type': 'ProfessionalService',
              name: 'The Surrey Wills Company',
              description:
                'Independent estate planning specialists providing expert advice on Wills, Trusts, Lasting Powers of Attorney, Probate, and Funeral Planning. Serving Cranleigh and throughout Surrey since 2010.',
              url: 'https://surrey-wills.co.uk',
              telephone: '+44 1483 383500',
              email: 'wendy@surrey-wills.co.uk',
              founder: {
                '@type': 'Person',
                name: 'Wendy Amos',
                jobTitle: 'ACILEx',
              },
              foundingDate: '2010',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '111 High Street',
                addressLocality: 'Cranleigh',
                addressRegion: 'Surrey',
                postalCode: 'GU6 8AU',
                addressCountry: 'GB',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 51.1358,
                longitude: -0.4847,
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Cranleigh',
                },
                {
                  '@type': 'City',
                  name: 'Guildford',
                },
                {
                  '@type': 'City',
                  name: 'Godalming',
                },
                {
                  '@type': 'City',
                  name: 'Horsham',
                },
                {
                  '@type': 'City',
                  name: 'Dorking',
                },
                {
                  '@type': 'AdministrativeArea',
                  name: 'Surrey',
                },
              ],
              priceRange: 'Competitive rates',
              knowsAbout: [
                'Wills',
                'Trusts',
                'Lasting Powers of Attorney',
                'Probate',
                'Funeral Planning',
                'Estate Planning',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Estate Planning Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Will Writing',
                      description: 'Professional will writing services tailored to your needs',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Trusts',
                      description: 'Setting up trusts to protect your assets and beneficiaries',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Lasting Powers of Attorney',
                      description: 'LPAs for property, financial affairs, and health & welfare',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Probate Services',
                      description: 'Complete probate administration and support',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Funeral Planning',
                      description: 'Pre-paid funeral plans to ease the burden on loved ones',
                    },
                  },
                ],
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '09:00',
                  closes: '18:00',
                  description: 'Home visits available 7 days a week by appointment',
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
