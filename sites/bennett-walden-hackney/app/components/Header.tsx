'use client';

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Sales', href: '/sales' },
  { name: 'Lettings', href: '/lettings' },
  { name: 'Property Management', href: '/property-management' },
  { name: 'Area Guide', href: '/area-guide' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0f766e] text-white sticky top-0 z-50 shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight">Bennett Walden</span>
              <span className="text-sm text-teal-100">BW of Hackney - Est. 1994</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-teal-50 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/valuation"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-lg"
            >
              Free Valuation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-teal-100 hover:text-white"
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
          <div className="lg:hidden pb-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-teal-50 hover:text-white hover:bg-[#0d9488] rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/valuation"
                className="block px-3 py-2 mt-2 text-base font-semibold bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Valuation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
