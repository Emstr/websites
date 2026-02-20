"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Home", href: "/carpet-fitter-croydon" },
    { name: "Services", href: "/carpet-fitter-croydon/services" },
    { name: "About", href: "/carpet-fitter-croydon/about" },
    { name: "FAQ", href: "/carpet-fitter-croydon/faq" },
    { name: "Contact", href: "/carpet-fitter-croydon/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-primary text-white py-2">
        <div className="container-width">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
            <div className="flex items-center gap-6">
              <a href="tel:02079461170" className="flex items-center gap-2 hover:text-accent transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                020 7946 1170
              </a>
              <a href="mailto:info@croydoncarpets.co.uk" className="hidden sm:flex items-center gap-2 hover:text-accent transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@croydoncarpets.co.uk
              </a>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Free Estimates
              </span>
              <span className="hidden sm:block">|</span>
              <span className="hidden sm:block">Showroom Open 6 Days</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="container-width py-4">
        <div className="flex justify-between items-center">
          <Link href="/carpet-fitter-croydon" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center"><span className="text-accent font-bold text-xl font-serif">CC</span></div>
            <div className="hidden sm:block">
              <p className="text-primary font-bold text-lg leading-tight font-serif">Croydon Carpet</p>
              <p className="text-xs text-gray-500 tracking-wider">& FLOORING</p>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-8">{navigation.map((item) => (<Link key={item.name} href={item.href} className="nav-link font-medium">{item.name}</Link>))}</div>
          <div className="hidden lg:block"><Link href="/carpet-fitter-croydon/contact" className="bg-accent text-white px-6 py-3 font-semibold rounded-sm hover:bg-accent-600 transition-colors shadow-md">Free Estimate</Link></div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-primary" aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>) : (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>)}
          </button>
        </div>
        {isMobileMenuOpen && (<div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4"><div className="flex flex-col gap-4">{navigation.map((item) => (<Link key={item.name} href={item.href} className="text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>{item.name}</Link>))}<Link href="/carpet-fitter-croydon/contact" className="bg-accent text-white px-6 py-3 font-semibold rounded-sm text-center mt-2" onClick={() => setIsMobileMenuOpen(false)}>Free Estimate</Link></div></div>)}
      </nav>
    </header>
  );
}
