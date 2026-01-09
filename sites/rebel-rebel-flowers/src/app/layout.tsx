import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Rebel Rebel Flowers - Award-Winning Creative Florist in Hackney | Est. 2000',
  description: 'Wild, unstructured floristry with a flagrant disregard for the colour wheel. Trusted by BAFTAs, Vogue, Victoria Beckham, Gucci & Dior. Hackney florist since 2000. Call 020 3745 2605',
  keywords: 'creative florist London, wedding flowers Hackney, luxury flowers, wild floristry, Rebel Rebel Flowers, Mare Street florist, event flowers London, Tuscany flower farm',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
