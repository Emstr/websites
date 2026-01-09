import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E8 Dental Care - Private Dental Practice in Hackney | Mare Street',
  description: 'Friendly private dental practice on Mare Street, Hackney. Expert care from Dr Mohamed Helmy. Open Monday-Saturday. Book your appointment today! Call 020 8985 4547',
  keywords: 'dentist Hackney, E8 dental, Mare Street dentist, private dentist London, teeth whitening Hackney, dental checkup, emergency dentist',
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
