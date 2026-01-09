import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Face2Face Advice - Chartered Financial Planners Glasgow | Father & Son Team',
  description: 'Face2Face Advice (DM Pension Solutions) - Father & son Chartered Financial Planners in Glasgow. 40+ years experience. Pensions, investments, retirement planning. Home visits across Central Scotland. Call 01698 815 006',
  keywords: 'financial adviser Glasgow, pension planning Scotland, Chartered financial planner Glasgow, retirement planning Lanarkshire, IHT planning Edinburgh, financial advice Central Scotland, home visit financial adviser',
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
