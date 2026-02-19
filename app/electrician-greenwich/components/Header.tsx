"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/electrician-greenwich" },
    { name: "Services", href: "/electrician-greenwich/services" },
    { name: "About", href: "/electrician-greenwich/about" },
    { name: "FAQ", href: "/electrician-greenwich/faq" },
    { name: "Contact", href: "/electrician-greenwich/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-[var(--primary)] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
            <div className="flex items-center gap-6">
              <a href="tel:02079460456" className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                020 7946 0456
              </a>
              <a href="mailto:info@greenwichelectrical.co.uk" className="hidden sm:flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@greenwichelectrical.co.uk
              </a>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                NICEIC Approved
              </span>
              <span className="hidden sm:block">|</span>
              <span className="hidden sm:flex items-center gap-1">
                <svg className="w-3 h-3 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Part P Certified
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/electrician-greenwich" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[var(--primary)] rounded-sm flex items-center justify-center">
              <span className="text-[var(--accent)] font-bold text-xl">G</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-[var(--primary)] font-bold text-lg leading-tight">Greenwich Electrical</p>
              <p className="text-xs text-gray-500 tracking-wider uppercase">Solutions</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="/electrician-greenwich/contact" className="bg-[var(--accent)] text-white px-6 py-3 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors shadow-md">
              Free Quote
            </Link>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-[var(--primary)]" aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-700 hover:text-[var(--primary)] font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <Link href="/electrician-greenwich/contact" className="bg-[var(--accent)] text-white px-6 py-3 font-semibold rounded-sm text-center mt-2" onClick={() => setIsMobileMenuOpen(false)}>
                Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
