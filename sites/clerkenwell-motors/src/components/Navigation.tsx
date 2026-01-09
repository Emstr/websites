'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-garage-charcoal text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="flex items-center justify-center w-12 h-12 bg-garage-red rounded-lg">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight">CLERKENWELL MOTORS</div>
              <div className="text-xs text-gray-300">Est. 1993 - Family Owned</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 rounded-md hover:bg-garage-red transition-colors font-medium">
              Home
            </Link>
            <Link href="/services" className="px-4 py-2 rounded-md hover:bg-garage-red transition-colors font-medium">
              Services
            </Link>
            <Link href="/mot" className="px-4 py-2 rounded-md hover:bg-garage-red transition-colors font-medium">
              MOT
            </Link>
            <Link href="/about" className="px-4 py-2 rounded-md hover:bg-garage-red transition-colors font-medium">
              About
            </Link>
            <Link href="/reviews" className="px-4 py-2 rounded-md hover:bg-garage-red transition-colors font-medium">
              Reviews
            </Link>
            <Link href="/contact" className="px-4 py-2 ml-2 bg-garage-red hover:bg-red-700 rounded-md transition-colors font-semibold">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="px-4 py-2 rounded-md hover:bg-garage-red transition-colors font-medium">
                Home
              </Link>
              <Link href="/services" className="px-4 py-2 rounded-md hover:bg-garage-red transition-colors font-medium">
                Services
              </Link>
              <Link href="/mot" className="px-4 py-2 rounded-md hover:bg-garage-red transition-colors font-medium">
                MOT
              </Link>
              <Link href="/about" className="px-4 py-2 rounded-md hover:bg-garage-red transition-colors font-medium">
                About
              </Link>
              <Link href="/reviews" className="px-4 py-2 rounded-md hover:bg-garage-red transition-colors font-medium">
                Reviews
              </Link>
              <Link href="/contact" className="px-4 py-2 bg-garage-red hover:bg-red-700 rounded-md transition-colors font-semibold">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Top Bar with Quick Info */}
      <div className="bg-garage-red py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm space-y-1 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-semibold">020 7278 6375</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Mon-Fri 7:30-18:30 | Sat 9:00-14:00</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>14 Warner Street, EC1R 5HA</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
