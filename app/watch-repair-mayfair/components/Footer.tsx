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
                <span className="text-accent font-bold text-xl font-serif">MH</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight font-serif">
                  Mayfair Horologists
                </p>
                <p className="text-xs text-gray-400 tracking-wider">
                  TIME, PERFECTED
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Swiss-trained master horologist providing expert watch repair,
              restoration and servicing from the prestigious Burlington Arcade
              in Mayfair since 2006.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>10,000+ Watches Serviced</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/watch-repair-mayfair/services" className="footer-link">
                  Watch Servicing
                </Link>
              </li>
              <li>
                <Link href="/watch-repair-mayfair/services" className="footer-link">
                  Complete Restoration
                </Link>
              </li>
              <li>
                <Link href="/watch-repair-mayfair/services" className="footer-link">
                  Battery Replacement
                </Link>
              </li>
              <li>
                <Link href="/watch-repair-mayfair/services" className="footer-link">
                  Crystal Replacement
                </Link>
              </li>
              <li>
                <Link href="/watch-repair-mayfair/services" className="footer-link">
                  Strap &amp; Bracelet Fitting
                </Link>
              </li>
              <li>
                <Link href="/watch-repair-mayfair/services" className="footer-link">
                  Vintage Watch Specialist
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/watch-repair-mayfair/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/watch-repair-mayfair/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/watch-repair-mayfair/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/watch-repair-mayfair/services" className="footer-link">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-accent font-semibold mb-1">Our Workshop</p>
                <address className="not-italic text-gray-300 text-sm">
                  7 Burlington Arcade
                  <br />
                  Mayfair, London W1J 0QJ
                </address>
              </div>
              <div>
                <p className="text-accent font-semibold mb-1">Opening Hours</p>
                <p className="text-gray-300 text-sm">
                  Mon-Fri: 9:30am - 5:30pm
                  <br />
                  Sat: 10am - 3pm
                  <br />
                  Sun: Closed
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="tel:02079468850"
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
                  020 7946 8850
                </a>
                <a
                  href="mailto:service@mayfairhorologists.co.uk"
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
                  service@mayfairhorologists.co.uk
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
              &copy; {currentYear} Mayfair Horologists. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span>7 Burlington Arcade, Mayfair, London W1J 0QJ</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
