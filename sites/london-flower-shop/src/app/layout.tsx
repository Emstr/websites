import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The London Flower Shop - Family Florist in Southwark | Since 2009',
  description: 'Family-run florist on Long Lane, Southwark. Beautiful bouquets, weddings, corporate events. Same-day delivery to Southwark, Elephant & Castle, Waterloo. Call 020 7407 1666',
  keywords: 'florist Southwark, London flowers, wedding flowers, bouquets SE1, same-day delivery, corporate flowers, funeral flowers, Long Lane florist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
