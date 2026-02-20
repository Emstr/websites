import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-accent font-bold text-xl font-serif">M</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight font-serif">
                  Mayfair Fine Art
                </p>
                <p className="text-xs text-gray-400 tracking-wider">
                  CORK STREET GALLERY
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Contemporary art gallery on Cork Street since 2010. Championing
              emerging talent alongside established names in the heart of
              London&apos;s gallery district.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Est. 2010 — Cork Street</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/art-gallery-mayfair/services" className="footer-link">
                  Contemporary Exhibitions
                </Link>
              </li>
              <li>
                <Link href="/art-gallery-mayfair/services" className="footer-link">
                  Art Consultancy
                </Link>
              </li>
              <li>
                <Link href="/art-gallery-mayfair/services" className="footer-link">
                  Corporate Art
                </Link>
              </li>
              <li>
                <Link href="/art-gallery-mayfair/services" className="footer-link">
                  Private Viewings
                </Link>
              </li>
              <li>
                <Link href="/art-gallery-mayfair/services" className="footer-link">
                  Art Investment Advisory
                </Link>
              </li>
              <li>
                <Link href="/art-gallery-mayfair/services" className="footer-link">
                  Framing &amp; Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/art-gallery-mayfair/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/art-gallery-mayfair/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/art-gallery-mayfair/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/art-gallery-mayfair/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/art-gallery-mayfair/terms" className="footer-link">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Visit Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-accent font-semibold mb-1">Gallery</p>
                <address className="not-italic text-gray-300 text-sm">
                  15 Cork Street
                  <br />
                  Mayfair, London W1S 3LW
                </address>
              </div>
              <div>
                <p className="text-accent font-semibold mb-1">Opening Hours</p>
                <p className="text-gray-300 text-sm">
                  Mon-Fri: 10am - 6pm
                  <br />
                  Sat: 11am - 5pm
                  <br />
                  Sun: Closed
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="tel:02079462200"
                  className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  020 7946 2200
                </a>
                <a
                  href="mailto:gallery@mayfairfineart.co.uk"
                  className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors mt-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  gallery@mayfairfineart.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container-width py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} Mayfair Fine Art. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/art-gallery-mayfair/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/art-gallery-mayfair/terms" className="hover:text-accent transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
