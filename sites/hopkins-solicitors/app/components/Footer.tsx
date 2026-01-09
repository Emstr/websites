import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-cream" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
              </svg>
              <h3 className="text-lg font-bold">Hopkins Solicitors</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              A longstanding local firm with an excellent reputation. Serving Nottinghamshire and Derbyshire with expert conveyancing and property law services.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <svg className="w-4 h-4 text-cream" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>SRA Regulated Law Firm</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/conveyancing" className="text-gray-300 hover:text-cream transition-colors">
                  Residential Conveyancing
                </Link>
              </li>
              <li>
                <Link href="/conveyancing" className="text-gray-300 hover:text-cream transition-colors">
                  Commercial Conveyancing
                </Link>
              </li>
              <li>
                <Link href="/property-law" className="text-gray-300 hover:text-cream transition-colors">
                  Property Law
                </Link>
              </li>
              <li>
                <Link href="/property-law" className="text-gray-300 hover:text-cream transition-colors">
                  Leasehold Extensions
                </Link>
              </li>
              <li>
                <Link href="/property-law" className="text-gray-300 hover:text-cream transition-colors">
                  Right to Buy
                </Link>
              </li>
              <li>
                <Link href="/property-law" className="text-gray-300 hover:text-cream transition-colors">
                  Remortgaging
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Offices */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our 6 Offices</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/offices#nottingham" className="text-gray-300 hover:text-cream transition-colors">
                  Nottingham Office
                </Link>
              </li>
              <li>
                <Link href="/offices#mansfield" className="text-gray-300 hover:text-cream transition-colors">
                  Mansfield Office
                </Link>
              </li>
              <li>
                <Link href="/offices#ashfield" className="text-gray-300 hover:text-cream transition-colors">
                  Ashfield Office
                </Link>
              </li>
              <li>
                <Link href="/offices#south-derbyshire" className="text-gray-300 hover:text-cream transition-colors">
                  South Derbyshire Offices
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-cream transition-colors">
                  Find Your Local Office
                </Link>
              </li>
            </ul>
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
                  6 Offices Across<br />
                  Nottinghamshire & Derbyshire
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-cream mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-gray-300">
                  <a href="tel:01158371116" className="hover:text-cream transition-colors block">
                    0115 837 1116
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-cream mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:enquiries@hopkins-solicitors.co.uk" className="text-gray-300 hover:text-cream transition-colors">
                  enquiries@hopkins-solicitors.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-cream mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a href="https://hopkins-solicitors.co.uk" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cream transition-colors">
                  hopkins-solicitors.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hopkins Solicitors. All rights reserved.</p>
          <p className="mt-2">
            Authorised and regulated by the Solicitors Regulation Authority (SRA)
          </p>
        </div>
      </div>
    </footer>
  );
}
