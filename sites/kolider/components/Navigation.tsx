'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="section-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-purple-blue rounded-lg"></div>
            <span className="text-2xl font-bold bg-gradient-purple-blue bg-clip-text text-transparent">
              Kolider
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-purple-600 transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-purple-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
            <Link href="/refresh" className="px-6 py-2 bg-gradient-purple-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              Refresh My Website
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-purple-600"
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
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-purple-600">
              Home
            </Link>
            <Link href="/services" className="block py-2 text-gray-700 hover:text-purple-600">
              Services
            </Link>
            <Link href="/portfolio" className="block py-2 text-gray-700 hover:text-purple-600">
              Portfolio
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-purple-600">
              About
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-purple-600">
              Contact
            </Link>
            <Link href="/refresh" className="block py-2 text-purple-600 font-semibold">
              Refresh My Website
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
