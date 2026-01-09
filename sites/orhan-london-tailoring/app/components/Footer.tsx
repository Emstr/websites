import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-cream border-t-4 border-gold">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gold rounded-lg">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6h12M6 10h12M6 14h12M6 18h12M3 6h1M3 10h1M3 14h1M3 18h1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gold">Orhan London</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Master bespoke tailor in Shoreditch since 2007. Previously worked for Vivienne Westwood and dressed Princess Diana. Hand-crafted excellence for all genders.
            </p>
            <div className="flex items-center gap-2 text-xs text-gold font-semibold">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free Consultations</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/bespoke-suits" className="text-gray-300 hover:text-gold transition-colors">
                  Bespoke Suits
                </Link>
              </li>
              <li>
                <Link href="/occasionwear" className="text-gray-300 hover:text-gold transition-colors">
                  Occasionwear
                </Link>
              </li>
              <li>
                <Link href="/occasionwear#wedding" className="text-gray-300 hover:text-gold transition-colors">
                  Weddingwear
                </Link>
              </li>
              <li>
                <Link href="/alterations" className="text-gray-300 hover:text-gold transition-colors">
                  Alterations & Repairs
                </Link>
              </li>
              <li>
                <Link href="/occasionwear#dressmaking" className="text-gray-300 hover:text-gold transition-colors">
                  Dressmaking
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About Orhan
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact#directions" className="text-gray-300 hover:text-gold transition-colors">
                  Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Visit Our Studio</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  25a Pitfield Street<br />
                  Shoreditch, London N1 6HB<br />
                  <span className="text-xs text-gold">(Near Old Street Station)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-gray-300">
                  <a href="tel:02072503569" className="hover:text-gold transition-colors block">
                    020 7250 3569
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">
                  Mon-Fri: 9am-6pm<br />
                  Sat: 10:30am-3pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/30 mt-8 pt-8 text-center text-sm text-gray-400">
          <p className="text-gold">&copy; {new Date().getFullYear()} Orhan London Tailoring. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Bespoke Tailoring & Alterations | Est. 2007 | Hand-Crafted in London
          </p>
        </div>
      </div>
    </footer>
  );
}
