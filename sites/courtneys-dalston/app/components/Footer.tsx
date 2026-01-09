import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#4f46e5] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Courtneys Estate Agents</h3>
            <p className="text-indigo-200 mb-4">
              Family owned and operated since 2003, serving Hackney, East & North London with honest,
              transparent, and efficient estate agency services.
            </p>
            <div className="space-y-2 text-indigo-200">
              <p>544 Kingsland Rd</p>
              <p>London E8 4AH</p>
              <div className="flex items-center gap-2 mt-3">
                <svg className="w-5 h-5 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium text-white">5-Star Google Reviews</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sales" className="text-indigo-200 hover:text-white transition-colors">
                  Residential Sales
                </Link>
              </li>
              <li>
                <Link href="/lettings" className="text-indigo-200 hover:text-white transition-colors">
                  Lettings & Management
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="text-indigo-200 hover:text-white transition-colors">
                  Commercial Property
                </Link>
              </li>
              <li>
                <Link href="/about#mortgages" className="text-indigo-200 hover:text-white transition-colors">
                  Mortgages
                </Link>
              </li>
              <li>
                <Link href="/about#development" className="text-indigo-200 hover:text-white transition-colors">
                  Land & Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-indigo-200">
              <li>
                <a href="tel:02072758000" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  0207 275 8000
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Form
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/reviews" className="hover:text-white transition-colors font-medium">
                  Read Our Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-400 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-indigo-200 text-sm">
              &copy; {new Date().getFullYear()} Courtneys Estate Agents. All rights reserved. Family owned since 2003.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-indigo-200">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
