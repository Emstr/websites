import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#334155] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">CarterDawes</h3>
            <p className="text-gray-300 mb-4">
              Bespoke financial planning spanning the width of England. Fair, impartial,
              and truly independent advice from Devon to Suffolk.
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-[#ea580c] mb-2">Devon Office</h4>
                <div className="space-y-1 text-gray-300 text-sm">
                  <p>West Country Coverage</p>
                  <p>Serving Devon & Southwest</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[#ea580c] mb-2">Suffolk Office</h4>
                <div className="space-y-1 text-gray-300 text-sm">
                  <p>East Anglia Coverage</p>
                  <p>Serving Suffolk & East</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <p className="text-sm text-gray-300 mb-2">
                <strong className="text-white">Coast to Coast:</strong>
              </p>
              <p className="text-xs text-gray-400">
                The only financial planning firm spanning Devon to Suffolk - truly unique dual-location coverage
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#financial-planning" className="text-gray-300 hover:text-white transition-colors">
                  Financial Planning
                </Link>
              </li>
              <li>
                <Link href="/services#investment" className="text-gray-300 hover:text-white transition-colors">
                  Investment Management
                </Link>
              </li>
              <li>
                <Link href="/services#retirement" className="text-gray-300 hover:text-white transition-colors">
                  Retirement Planning
                </Link>
              </li>
              <li>
                <Link href="/services#pensions" className="text-gray-300 hover:text-white transition-colors">
                  Pension Advice
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-300 hover:text-white transition-colors">
                  Our Locations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:info@carterdawes.com" className="hover:text-white transition-colors">
                  info@carterdawes.com
                </a>
              </li>
              <li className="pt-2">
                <a href="https://carterdawes.com" className="hover:text-white transition-colors text-sm">
                  www.carterdawes.com
                </a>
              </li>
              <li className="pt-4 text-sm">
                <div className="inline-flex items-center gap-2 bg-slate-700/50 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4 text-[#ea580c]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span className="text-white font-medium">FCA Regulated</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} CarterDawes. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Notice
              </Link>
              <Link href="/data-protection" className="hover:text-white transition-colors">
                Data Protection
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Business
              </Link>
              <Link href="/terms#complaints" className="hover:text-white transition-colors">
                Complaints
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              CarterDawes is authorized and regulated by the Financial Conduct Authority. Your eligible deposits are protected by the FSCS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
