import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <h3 className="text-lg font-bold">CooperBurnett LLP</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Specialist solicitors in Wills, Probate, and Trusts. Serving Tunbridge Wells and Kent with expert legal advice.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Central Tunbridge Wells Location</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-gold transition-colors">
                  Wills
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-gold transition-colors">
                  Probate
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-gold transition-colors">
                  Trusts
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-gold transition-colors">
                  Lasting Powers of Attorney
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-gold transition-colors">
                  Estate Administration
                </Link>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Why Choose Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Central Tunbridge Wells</li>
              <li>Parking Onsite</li>
              <li>5 Minutes from Station</li>
              <li>Kent Specialists</li>
              <li>Expert Legal Team</li>
              <li>Personal Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  Napier House<br />
                  14-16 Mount Ephraim Road<br />
                  Tunbridge Wells<br />
                  TN1 1EE
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-gray-300">
                  <a href="tel:01892515022" className="hover:text-gold transition-colors block">
                    01892 515022
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:enquiries@cooperburnett.com" className="text-gray-300 hover:text-gold transition-colors">
                  enquiries@cooperburnett.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} CooperBurnett LLP. All rights reserved.</p>
          <p className="mt-2">
            Authorised and regulated by the Solicitors Regulation Authority
          </p>
        </div>
      </div>
    </footer>
  );
}
