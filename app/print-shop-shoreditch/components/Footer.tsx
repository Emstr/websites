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
                <span className="text-accent font-bold text-xl font-serif">S</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight font-serif">
                  Shoreditch Print
                </p>
                <p className="text-xs text-gray-400 tracking-wider">
                  STUDIO
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium printing and graphic design studio in the heart of
              Shoreditch. Eco-friendly inks, quality stocks, and same-day
              turnaround available.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Eco-Friendly Printing</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/print-shop-shoreditch/services" className="footer-link">
                  Business Cards & Stationery
                </Link>
              </li>
              <li>
                <Link href="/print-shop-shoreditch/services" className="footer-link">
                  Large Format Printing
                </Link>
              </li>
              <li>
                <Link href="/print-shop-shoreditch/services" className="footer-link">
                  Art Prints & Giclée
                </Link>
              </li>
              <li>
                <Link href="/print-shop-shoreditch/services" className="footer-link">
                  Screen Printing
                </Link>
              </li>
              <li>
                <Link href="/print-shop-shoreditch/services" className="footer-link">
                  Branded Merchandise
                </Link>
              </li>
              <li>
                <Link href="/print-shop-shoreditch/services" className="footer-link">
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/print-shop-shoreditch/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/print-shop-shoreditch/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/print-shop-shoreditch/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Visit Us</h3>
            <div className="space-y-4">
              <div>
                <address className="not-italic text-gray-300 text-sm">
                  52 Curtain Road
                  <br />
                  Shoreditch, London EC2A 3PT
                </address>
              </div>
              <div className="pt-2">
                <a
                  href="tel:02079468830"
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
                  020 7946 8830
                </a>
                <a
                  href="mailto:hello@shoreditchprint.co.uk"
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
                  hello@shoreditchprint.co.uk
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>Mon-Fri: 9am - 7pm</p>
                <p>Sat: 10am - 5pm</p>
                <p>Sun: Closed</p>
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
              &copy; {currentYear} Shoreditch Print Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/print-shop-shoreditch/faq" className="hover:text-accent transition-colors">
                FAQ
              </Link>
              <Link href="/print-shop-shoreditch/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
