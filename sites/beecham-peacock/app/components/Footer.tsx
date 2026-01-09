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
              <div className="flex items-center justify-center w-10 h-10 bg-purple rounded-lg">
                <svg className="w-6 h-6 text-rose-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <span className="text-lg font-bold">Beecham Peacock</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Compassionate family law solicitors in Newcastle. Legal aid available. Supporting families through difficult times with expert legal guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/divorce" className="text-gray-400 hover:text-rose-light transition-colors">
                  Divorce
                </Link>
              </li>
              <li>
                <Link href="/family-law" className="text-gray-400 hover:text-rose-light transition-colors">
                  Family Law
                </Link>
              </li>
              <li>
                <Link href="/child-care" className="text-gray-400 hover:text-rose-light transition-colors">
                  Child Care
                </Link>
              </li>
              <li>
                <Link href="/domestic-violence" className="text-gray-400 hover:text-rose-light transition-colors">
                  Domestic Violence
                </Link>
              </li>
              <li>
                <Link href="/prenuptial" className="text-gray-400 hover:text-rose-light transition-colors">
                  Prenuptial Agreements
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-rose-light transition-colors">
                  About Beecham Peacock
                </Link>
              </li>
              <li>
                <Link href="/legal-aid" className="text-gray-400 hover:text-rose-light transition-colors">
                  Legal Aid
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-rose-light transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-rose-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Newcastle<br />
                  North East England
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-rose-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:01912325300" className="hover:text-rose-light transition-colors">
                  0191 232 5300
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-rose-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@beechampeacock.co.uk" className="hover:text-rose-light transition-colors break-all">
                  info@beechampeacock.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-rose-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Legal Aid Available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Beecham Peacock Solicitors. All rights reserved. Authorised and regulated by the Solicitors Regulation Authority.
          </p>
        </div>
      </div>
    </footer>
  );
}
