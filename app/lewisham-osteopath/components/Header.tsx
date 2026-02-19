'use client';

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/lewisham-osteopath' },
  { name: 'Conditions', href: '/lewisham-osteopath/services' },
  { name: 'Fees', href: '/lewisham-osteopath/fees' },
  { name: 'About', href: '/lewisham-osteopath/about' },
  { name: 'FAQ', href: '/lewisham-osteopath/faq' },
  { name: 'Contact', href: '/lewisham-osteopath/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--primary)] text-white sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/lewisham-osteopath" className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">Lewisham Osteopathic</span>
              <span className="text-sm text-gray-300">Richard Lewey BSc (Hons) Ost</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-200 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:02088525577"
              className="bg-[var(--accent)] hover:opacity-90 px-4 py-2 rounded-md text-sm font-medium transition-opacity text-white"
            >
              Book: 020 8852 5577
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-white hover:bg-[var(--secondary)] rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:02088525577"
                className="block px-3 py-2 mt-2 text-base font-medium bg-[var(--accent)] rounded-md text-center text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book: 020 8852 5577
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
