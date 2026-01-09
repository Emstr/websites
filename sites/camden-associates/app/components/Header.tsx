"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar - Prominent Contact Information */}
      <div className="bg-charcoal border-b border-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 text-sm">
            <div className="flex items-center gap-6">
              <a
                href="mailto:contact@camdenassociates.co.uk"
                className="flex items-center gap-2 text-silver hover:text-electric-blue transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="hidden sm:inline">contact@camdenassociates.co.uk</span>
              </a>
              <a
                href="tel:+442071234567"
                className="flex items-center gap-2 text-silver hover:text-electric-blue transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="hidden sm:inline">+44 20 7123 4567</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-silver">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="hidden md:inline">London</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gray-dark">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-electric-blue rounded-lg flex items-center justify-center group-hover:bg-blue-light transition-colors">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-white">
                  Camden Associates
                </div>
                <div className="text-xs text-silver">Corporate Finance</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-silver hover:text-white transition-colors"
              >
                Home
              </Link>
              <div className="relative group">
                <button className="text-silver hover:text-white transition-colors flex items-center gap-1">
                  Sectors
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-charcoal border border-gray-dark rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="py-2">
                    <Link
                      href="/sectors/biotech"
                      className="block px-4 py-2 text-silver hover:text-white hover:bg-gray-dark transition-colors"
                    >
                      Biotech
                    </Link>
                    <Link
                      href="/sectors/technology"
                      className="block px-4 py-2 text-silver hover:text-white hover:bg-gray-dark transition-colors"
                    >
                      Technology
                    </Link>
                    <Link
                      href="/sectors/real-estate"
                      className="block px-4 py-2 text-silver hover:text-white hover:bg-gray-dark transition-colors"
                    >
                      Real Estate
                    </Link>
                    <Link
                      href="/sectors/mining"
                      className="block px-4 py-2 text-silver hover:text-white hover:bg-gray-dark transition-colors"
                    >
                      Mining & Exploration
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/track-record"
                className="text-silver hover:text-white transition-colors"
              >
                Track Record
              </Link>
              <Link
                href="/about"
                className="text-silver hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-electric-blue text-white rounded-lg hover:bg-blue-light transition-colors font-medium"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-silver hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-dark">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-silver hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <div className="text-white font-medium">Sectors</div>
                <Link
                  href="/sectors/biotech"
                  className="pl-4 text-silver hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Biotech
                </Link>
                <Link
                  href="/sectors/technology"
                  className="pl-4 text-silver hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Technology
                </Link>
                <Link
                  href="/sectors/real-estate"
                  className="pl-4 text-silver hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Real Estate
                </Link>
                <Link
                  href="/sectors/mining"
                  className="pl-4 text-silver hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Mining & Exploration
                </Link>
                <Link
                  href="/track-record"
                  className="text-silver hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Track Record
                </Link>
                <Link
                  href="/about"
                  className="text-silver hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-2.5 bg-electric-blue text-white rounded-lg hover:bg-blue-light transition-colors font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
