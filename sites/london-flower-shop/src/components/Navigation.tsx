'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/weddings', label: 'Weddings' },
    { href: '/corporate', label: 'Corporate' },
    { href: '/about', label: 'About Us' },
    { href: '/delivery', label: 'Delivery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-florist-rose to-florist-rose-dark rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold text-florist-rose-dark">The London Flower Shop</div>
              <div className="text-xs text-gray-600">Family-Run Since 2009</div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  pathname === link.href
                    ? 'bg-florist-rose text-white'
                    : 'text-gray-700 hover:bg-florist-rose-light hover:text-florist-rose-dark'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Call Button */}
          <a
            href="tel:02074071666"
            className="hidden md:flex items-center space-x-2 bg-florist-sage text-white px-6 py-3 rounded-full hover:bg-florist-sage-dark transition-all shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-semibold">020 7407 1666</span>
          </a>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-florist-rose-dark">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
