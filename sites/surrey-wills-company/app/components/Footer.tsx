import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-bold">The Surrey Wills Company</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Independent estate planning specialists providing expert advice on Wills, Trusts, LPAs, and Probate since 2010.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <svg className="w-4 h-4 text-cream" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <span>Wendy Amos, ACILEx</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-cream transition-colors">
                  Wills
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-cream transition-colors">
                  Trusts
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-cream transition-colors">
                  Lasting Powers of Attorney
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-cream transition-colors">
                  Probate Services
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-cream transition-colors">
                  Funeral Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Areas Served</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Cranleigh</li>
              <li>Guildford</li>
              <li>Godalming</li>
              <li>Horsham</li>
              <li>Dorking</li>
              <li>Throughout Surrey</li>
            </ul>
            <p className="text-xs text-gray-400 mt-4">
              Home visits available across Surrey and surrounding areas
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-cream mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  111 High Street<br />
                  Cranleigh, Surrey<br />
                  GU6 8AU
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-cream mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-gray-300">
                  <a href="tel:01483383500" className="hover:text-cream transition-colors block">
                    01483 383500
                  </a>
                  <a href="tel:07515287256" className="hover:text-cream transition-colors block">
                    Mobile: 07515 287256
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-cream mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:wendy@surrey-wills.co.uk" className="text-gray-300 hover:text-cream transition-colors">
                  wendy@surrey-wills.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Surrey Wills Company. All rights reserved.</p>
          <p className="mt-2">
            Wendy Amos, ACILEx | Independent Estate Planning Specialist
          </p>
        </div>
      </div>
    </footer>
  );
}
