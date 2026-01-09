import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Robbie Ewing Photography - Commercial Portrait Photographer | South London',
  description: 'Professional commercial portrait photographer in Camberwell, South London. Specializing in corporate headshots, creative portraits, musicians/DJs, and model portfolios. Fully equipped studio. Call 07973 844035',
  keywords: 'commercial photographer London, portrait photographer South London, corporate headshots Camberwell, creative portraits, musician photography, model portfolio, photography studio London',
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
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
