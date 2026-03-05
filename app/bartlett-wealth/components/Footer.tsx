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
                <span className="text-accent font-bold text-xl font-serif">B</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight font-serif">
                  Bartlett
                </p>
                <p className="text-xs text-gray-400 tracking-wider">
                  WEALTH MANAGEMENT
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Independent wealth management and financial planning from a
              third-generation family business. Over 80 years of heritage,
              trusted advice.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>FCA Regulated (No. 114800)</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/bartlett-wealth/services" className="footer-link">
                  Retirement Planning
                </Link>
              </li>
              <li>
                <Link href="/bartlett-wealth/services" className="footer-link">
                  Investment Advice
                </Link>
              </li>
              <li>
                <Link href="/bartlett-wealth/services" className="footer-link">
                  Inheritance Tax Planning
                </Link>
              </li>
              <li>
                <Link href="/bartlett-wealth/services" className="footer-link">
                  Protection
                </Link>
              </li>
              <li>
                <Link href="/bartlett-wealth/services" className="footer-link">
                  Corporate Financial Planning
                </Link>
              </li>
              <li>
                <Link href="/bartlett-wealth/services" className="footer-link">
                  Employee Benefits
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/bartlett-wealth/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/bartlett-wealth/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/bartlett-wealth/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/bartlett-wealth/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/bartlett-wealth/terms" className="footer-link">
                  Terms of Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-accent font-semibold mb-1">Head Office - Leeds</p>
                <address className="not-italic text-gray-300 text-sm">
                  Broadway Hall, Horsforth
                  <br />
                  Leeds LS18 4RS
                </address>
              </div>
              <div>
                <p className="text-accent font-semibold mb-1">Also in</p>
                <p className="text-gray-300 text-sm">
                  London &bull; Manchester
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="tel:01132585711"
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
                  0113 258 5711
                </a>
                <a
                  href="mailto:mail@bartlettgroup.com"
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
                  mail@bartlettgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FCA Notice */}
      <div className="border-t border-gray-700">
        <div className="container-width py-6">
          <div className="bg-primary/50 rounded-sm p-4 text-sm text-gray-300">
            <p className="mb-2">
              <strong className="text-white">Important Information:</strong> Bartlett
              Wealth Management Limited is authorised and regulated by the
              Financial Conduct Authority (FCA No. 114800). Part of the Bartlett Group, established 1940.
            </p>
            <p>
              The value of investments and the income from them can go down as well as
              up, and you may not get back the amount originally invested. Past
              performance is not a reliable indicator of future results. Tax treatment
              depends on individual circumstances and may be subject to change in the
              future. The guidance and/or advice contained in this website is subject
              to UK regulatory regime and is therefore restricted to consumers based in
              the UK.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container-width py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} Bartlett Wealth Management Limited. All
              rights reserved. Part of the Bartlett Group.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/bartlett-wealth/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/bartlett-wealth/terms" className="hover:text-accent transition-colors">
                Terms of Business
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
