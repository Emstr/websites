import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Prospect Websites | Demo Portfolio',
  description: 'A collection of professionally designed websites for notaries and financial advisers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
