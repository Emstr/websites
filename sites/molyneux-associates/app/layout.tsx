import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Molyneux Associates | Independent Financial Advisers | Plymouth, Devon & Cornwall',
    template: '%s | Molyneux Associates',
  },
  description:
    'Molyneux Associates - Independent Financial Advisers serving Plymouth, Devon and Cornwall since 2003. FCA authorised (624563). Expert advice on investments, pensions, and protection. Over 20 years of regional expertise.',
  keywords: [
    'IFA Plymouth',
    'financial adviser Devon',
    'financial adviser Cornwall',
    'independent financial adviser Plymouth',
    'pension advice Plymouth',
    'investment advice Devon',
    'financial planning Cornwall',
    'Molyneux Associates',
    'FCA regulated IFA',
    'retirement planning Plymouth',
    'wealth management Devon',
    'financial protection Cornwall',
  ],
  authors: [{ name: 'Molyneux Associates' }],
  creator: 'Molyneux Associates',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://molyneux-associates.co.uk',
    siteName: 'Molyneux Associates',
    title: 'Molyneux Associates | Independent Financial Advisers | Plymouth, Devon & Cornwall',
    description:
      'Independent Financial Advisers serving Plymouth, Devon and Cornwall since 2003. FCA authorised. Expert advice on investments, pensions, and protection.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Molyneux Associates - Independent Financial Advisers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Molyneux Associates | IFA Plymouth, Devon & Cornwall',
    description:
      'Independent Financial Advisers since 2003. FCA authorised. Expert advice on investments, pensions, and protection.',
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
              '@type': 'FinancialService',
              name: 'Molyneux Associates',
              description:
                'Independent Financial Advisers serving Plymouth, Devon and Cornwall since 2003. FCA authorised and regulated (624563). Providing expert advice on investments, pensions, and financial protection with over 20 years of regional expertise.',
              url: 'https://molyneux-associates.co.uk',
              foundingDate: '2003',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Envoy House',
                addressLocality: 'Plympton',
                addressRegion: 'Plymouth',
                addressCountry: 'GB',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 50.3891,
                longitude: -4.0595,
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Plymouth',
                },
                {
                  '@type': 'AdministrativeArea',
                  name: 'Devon',
                },
                {
                  '@type': 'AdministrativeArea',
                  name: 'Cornwall',
                },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Financial Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Investment Planning',
                      description: 'Expert investment advice and portfolio management',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Pension Planning',
                      description: 'Comprehensive pension and retirement planning services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Protection & Insurance',
                      description: 'Life insurance and protection planning',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Financial Planning',
                      description: 'Holistic financial planning and wealth management',
                    },
                  },
                ],
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '127',
              },
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-cream text-gray-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
