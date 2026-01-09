import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Aspire Independent Financial Planners LLP</h3>
            <p className="text-gray-300 mb-4">
              Independent financial advice for Finchley and North London. Expert wealth management, pensions, and financial planning.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>17 Station Road</p>
              <p>Finchley, London N3 2SB</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/wealth-management" className="text-gray-300 hover:text-white transition-colors">
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link href="/pensions" className="text-gray-300 hover:text-white transition-colors">
                  Pensions
                </Link>
              </li>
              <li>
                <Link href="/mortgages" className="text-gray-300 hover:text-white transition-colors">
                  Mortgages
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="text-gray-300 hover:text-white transition-colors">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/equity-release" className="text-gray-300 hover:text-white transition-colors">
                  Equity Release
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="tel:02083714411" className="hover:text-white transition-colors">
                  020 8371 4411
                </a>
              </li>
              <li>
                <a href="mailto:enquiries@aspireonline.co.uk" className="hover:text-white transition-colors">
                  enquiries@aspireonline.co.uk
                </a>
              </li>
              <li className="pt-2">
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Aspire Independent Financial Planners LLP. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/complaints" className="hover:text-white transition-colors">
                Complaints Procedure
              </Link>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-4 text-center md:text-left">
            Aspire Independent Financial Planners LLP is authorised and regulated by the Financial Conduct Authority.
          </p>
        </div>
      </div>
    </footer>
  );
}
