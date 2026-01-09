import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0f766e] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">The Right Broker</h3>
            <p className="text-gray-200 mb-4">
              Family-owned, independent mortgage brokers based in Solihull. We put our customers at the heart of everything we do, with access to 90+ lenders to find you the perfect mortgage.
            </p>
            <div className="space-y-2 text-gray-200 text-sm mb-6">
              <p className="font-semibold text-[#f97316]">Solihull Office</p>
              <p>Solihull, Birmingham</p>
              <p className="text-xs text-gray-300 mt-4">Established June 2015</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mortgages#first-time-buyers" className="text-gray-200 hover:text-white transition-colors">
                  First Time Buyers
                </Link>
              </li>
              <li>
                <Link href="/mortgages#remortgage" className="text-gray-200 hover:text-white transition-colors">
                  Remortgage
                </Link>
              </li>
              <li>
                <Link href="/mortgages#buy-to-let" className="text-gray-200 hover:text-white transition-colors">
                  Buy to Let
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a href="https://therightbroker.co.uk" className="hover:text-white transition-colors">
                  therightbroker.co.uk
                </a>
              </li>
              <li className="pt-2 text-sm">
                <span className="text-gray-300">Access to 90+ lenders</span>
              </li>
              <li className="text-sm">
                <span className="text-gray-300">Independent advice</span>
              </li>
              <li className="text-sm">
                <span className="text-gray-300">Family-owned business</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} The Right Broker. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/complaints" className="hover:text-white transition-colors">
                Complaints
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
