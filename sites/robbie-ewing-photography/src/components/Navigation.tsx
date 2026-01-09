'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Book Session' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-photo-black/95 backdrop-blur-sm z-50 border-b border-photo-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-photo-red flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-light text-xl tracking-wide">Robbie Ewing</div>
              <div className="text-photo-gray-300 text-xs uppercase tracking-widest">Photography</div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-widest transition-colors relative py-2 ${
                  pathname === link.href
                    ? 'text-white'
                    : 'text-photo-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-photo-red"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="tel:07973844035"
            className="hidden lg:flex items-center space-x-2 bg-photo-red text-white px-6 py-3 hover:bg-red-600 transition-colors text-sm uppercase tracking-wider"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>07973 844035</span>
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
