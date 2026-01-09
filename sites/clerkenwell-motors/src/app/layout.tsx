import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clerkenwell Motors - Independent Garage in Central London | MOT, Servicing & Repairs',
  description: '30+ years family-owned garage in Central London. MOT, servicing, repairs for cars, vans & motorcycles. RAC/AA Approved, Which? Trusted Trader. Open Mon-Sat. Call 020 7278 6375',
  keywords: 'garage Central London, MOT Clerkenwell, car service Islington, vehicle repairs London, independent garage, RAC approved garage, AA approved garage, electric car service, classic car repairs',
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
