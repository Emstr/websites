'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar with FCA info */}
      <div className="bg-[#1e3a5f] text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <strong>FCA Authorised:</strong> 610180
            </span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">Company No: 8716410</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:01132300449" className="hover:text-[#c9a227] transition-colors">0113 2300449</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo and brand */}
            <Link href="/" className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#15293f] rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[#1e3a5f] leading-tight">Paul Dodd</h1>
                  <p className="text-sm text-[#c9a227] font-semibold">Asset Management Limited</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-1 ml-15">Trusted Since 1992</p>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-[#1e3a5f] hover:text-[#c9a227] font-medium transition-colors">Home</Link>
              <Link href="/services" className="text-[#1e3a5f] hover:text-[#c9a227] font-medium transition-colors">Services</Link>
              <Link href="/about" className="text-[#1e3a5f] hover:text-[#c9a227] font-medium transition-colors">About</Link>
              <Link href="/contact" className="text-[#1e3a5f] hover:text-[#c9a227] font-medium transition-colors">Contact</Link>
              <a href="tel:01132300449" className="bg-[#c9a227] text-white px-6 py-2 rounded-md hover:bg-[#b08f1f] transition-colors font-semibold">
                Call Us Today
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-[#1e3a5f] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col gap-3">
                <Link href="/" className="text-[#1e3a5f] hover:text-[#c9a227] font-medium py-2">Home</Link>
                <Link href="/services" className="text-[#1e3a5f] hover:text-[#c9a227] font-medium py-2">Services</Link>
                <Link href="/about" className="text-[#1e3a5f] hover:text-[#c9a227] font-medium py-2">About</Link>
                <Link href="/contact" className="text-[#1e3a5f] hover:text-[#c9a227] font-medium py-2">Contact</Link>
                <a href="tel:01132300449" className="bg-[#c9a227] text-white px-6 py-2 rounded-md hover:bg-[#b08f1f] transition-colors font-semibold text-center mt-2">
                  Call Us Today
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
