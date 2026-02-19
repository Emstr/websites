import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--secondary)] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--primary)] rounded-sm flex items-center justify-center">
                <span className="text-[var(--accent)] font-bold text-xl">B</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">
                  Brixton Plumbing
                </p>
                <p className="text-xs text-gray-400 tracking-wider uppercase">
                  Services
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Reliable, Gas Safe registered plumbers serving Brixton and South
              London. From emergency callouts to full bathroom installations,
              we&apos;ve got you covered.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Gas Safe Registered</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/plumber-brixton/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">
                  Emergency Plumbing
                </Link>
              </li>
              <li>
                <Link href="/plumber-brixton/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">
                  Boiler Installation &amp; Repair
                </Link>
              </li>
              <li>
                <Link href="/plumber-brixton/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">
                  Bathroom Installation
                </Link>
              </li>
              <li>
                <Link href="/plumber-brixton/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">
                  Central Heating
                </Link>
              </li>
              <li>
                <Link href="/plumber-brixton/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">
                  Leak Detection &amp; Repair
                </Link>
              </li>
              <li>
                <Link href="/plumber-brixton/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">
                  Drain Unblocking
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/plumber-brixton/about" className="text-gray-300 hover:text-[var(--accent)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/plumber-brixton/contact" className="text-gray-300 hover:text-[var(--accent)] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/plumber-brixton/faq" className="text-gray-300 hover:text-[var(--accent)] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <address className="not-italic text-gray-300 text-sm">
                  45 Atlantic Road
                  <br />
                  Brixton, London SW2 1DR
                </address>
              </div>
              <div className="pt-2">
                <a
                  href="tel:02079460123"
                  className="flex items-center gap-2 text-gray-300 hover:text-[var(--accent)] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  020 7946 0123
                </a>
                <a
                  href="mailto:info@brixtonplumbing.co.uk"
                  className="flex items-center gap-2 text-gray-300 hover:text-[var(--accent)] transition-colors mt-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@brixtonplumbing.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Notice */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-[var(--primary)]/50 rounded-sm p-4 text-sm text-gray-300">
            <p>
              <strong className="text-white">Gas Safe Registered:</strong> Brixton
              Plumbing Services is fully Gas Safe registered. All gas work is carried
              out by qualified Gas Safe engineers. We are fully insured and provide
              warranties on all work completed.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} Brixton Plumbing Services. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span>Gas Safe Registered</span>
              <span>Fully Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
