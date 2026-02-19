"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/yoga-fulham" },
  { name: "Classes", href: "/yoga-fulham/services" },
  { name: "About", href: "/yoga-fulham/about" },
  { name: "FAQ", href: "/yoga-fulham/faq" },
  { name: "Contact", href: "/yoga-fulham/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-[var(--primary)] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:02079461456" className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              020 7946 1456
            </a>
            <a href="mailto:namaste@fulhamyoga.co.uk" className="hidden sm:flex items-center gap-1 hover:text-[var(--accent)] transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              namaste@fulhamyoga.co.uk
            </a>
          </div>
          <p className="hidden md:block text-gray-300">Yoga Alliance Registered | All Levels Welcome</p>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/yoga-fulham" className="text-2xl font-bold text-[var(--primary)]">
            Fulham<span className="text-[var(--accent)]">Yoga</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-700 hover:text-[var(--accent)] font-medium transition-colors">{item.name}</Link>
            ))}
            <Link href="/yoga-fulham/contact" className="bg-[var(--accent)] text-white px-6 py-3 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Book a Class</Link>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
            <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="block py-3 text-gray-700 hover:text-[var(--accent)] font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
            ))}
            <Link href="/yoga-fulham/contact" className="block mt-4 bg-[var(--accent)] text-white px-6 py-3 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors text-center" onClick={() => setMobileMenuOpen(false)}>Book a Class</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
