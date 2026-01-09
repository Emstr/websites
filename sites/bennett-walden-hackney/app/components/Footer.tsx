import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Bennett Walden - BW of Hackney</h3>
            <p className="text-sm mb-4 text-gray-400">
              Selling in Hackney since 1994. 30 years of local expertise in sales, lettings, and property management.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                121 Richmond Road, London, E8 3NJ
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:02072577177" className="hover:text-white">020 7257 7177</a>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hackney@bennettwalden.co.uk" className="hover:text-white">hackney@bennettwalden.co.uk</a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sales" className="hover:text-white transition-colors">Property Sales</Link></li>
              <li><Link href="/lettings" className="hover:text-white transition-colors">Lettings</Link></li>
              <li><Link href="/property-management" className="hover:text-white transition-colors">Property Management</Link></li>
              <li><Link href="/valuation" className="hover:text-white transition-colors">Free Valuation</Link></li>
              <li><Link href="/area-guide" className="hover:text-white transition-colors">Area Guide</Link></li>
            </ul>
          </div>

          {/* Areas Covered */}
          <div>
            <h4 className="text-white font-semibold mb-4">Areas Covered</h4>
            <ul className="space-y-1 text-sm">
              <li>Hackney (E8, E9)</li>
              <li>London Fields (E8)</li>
              <li>Clapton (E5)</li>
              <li>Dalston (E8, N16)</li>
              <li>Stoke Newington (N16)</li>
              <li>De Beauvoir Town (N1)</li>
              <li>Victoria Park (E2, E9)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Bennett Walden - BW of Hackney. All rights reserved. Established 1994.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
