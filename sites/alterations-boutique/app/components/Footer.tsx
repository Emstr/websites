import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-burgundy rounded-lg">
                <svg className="w-6 h-6 text-silver-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                </svg>
              </div>
              <span className="text-lg font-bold">Alterations Boutique</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              London's premier alterations service since 1983. Expert tailoring, seamstress services, and alterations for men, women, and bridal wear.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-silver-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-silver-light transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/express-service" className="text-gray-400 hover:text-silver-light transition-colors">
                  Express Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-silver-light transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Locations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/locations/marylebone" className="text-gray-400 hover:text-silver-light transition-colors">
                  Marylebone
                </Link>
              </li>
              <li>
                <Link href="/locations/chelsea" className="text-gray-400 hover:text-silver-light transition-colors">
                  Chelsea
                </Link>
              </li>
              <li>
                <Link href="/locations/wimbledon" className="text-gray-400 hover:text-silver-light transition-colors">
                  Wimbledon Village
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-silver-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:02077244147" className="hover:text-silver-light transition-colors">
                  0207 724 4147
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-silver-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@alterationsboutique.co.uk" className="hover:text-silver-light transition-colors break-all">
                  info@alterationsboutique.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-silver-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  Mon 9am-7pm<br />
                  Tue-Fri 9am-9pm<br />
                  Sat 9am-6pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Alterations Boutique. All rights reserved. Est. 1983.
          </p>
        </div>
      </div>
    </footer>
  );
}
