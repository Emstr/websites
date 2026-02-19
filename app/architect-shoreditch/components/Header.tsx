"use client";
import { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/architect-shoreditch" },
  { name: "Services", href: "/architect-shoreditch/services" },
  { name: "About", href: "/architect-shoreditch/about" },
  { name: "FAQ", href: "/architect-shoreditch/faq" },
  { name: "Contact", href: "/architect-shoreditch/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-[var(--primary)] text-white text-sm">
        <div className="container-width flex justify-between items-center py-2">
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:02079466901" className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              020 7946 6901
            </a>
            <a href="mailto:studio@shoreditcharchitecture.co.uk" className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              studio@shoreditcharchitecture.co.uk
            </a>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <span className="flex items-center gap-1"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>RIBA Chartered</span>
            <span className="hidden sm:flex items-center gap-1"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>ARB Registered</span>
            <span className="hidden lg:flex items-center gap-1"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Award-Winning</span>
          </div>
        </div>
      </div>

      <nav className="container-width flex items-center justify-between py-4">
        <Link href="/architect-shoreditch" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[var(--primary)] rounded-sm flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 21V10l9-7 9 7v11M9 21V13h6v8" /></svg>
          </div>
          <div>
            <span className="text-xl font-bold text-[var(--primary)] leading-none block">Shoreditch</span>
            <span className="text-xs text-[var(--accent)] font-semibold tracking-widest uppercase">Architecture</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-700 hover:text-[var(--accent)] transition-colors font-medium text-sm tracking-wide">
              {item.name}
            </Link>
          ))}
          <Link href="/architect-shoreditch/contact" className="btn-accent text-sm">Book a Consultation</Link>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
          <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container-width py-4 space-y-3">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-[var(--accent)] transition-colors font-medium py-2">
                {item.name}
              </Link>
            ))}
            <Link href="/architect-shoreditch/contact" onClick={() => setMobileMenuOpen(false)} className="btn-accent w-full text-center mt-4">Book a Consultation</Link>
          </div>
        </div>
      )}
    </header>
  );
}
