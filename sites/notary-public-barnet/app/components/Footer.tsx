import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Notary Public Barnet</h3>
            <p className="text-gray-300 mb-4">
              Professional notarial services in Barnet and surrounding London boroughs.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>Richardson Notary</p>
              <p>45 High Street</p>
              <p>Barnet, London EN5 5UJ</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/businesses" className="text-gray-300 hover:text-white transition-colors">
                  Business Services
                </Link>
              </li>
              <li>
                <Link href="/individuals" className="text-gray-300 hover:text-white transition-colors">
                  Individual Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Emma Richardson
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="tel:02084415200" className="hover:text-white transition-colors">
                  020 8441 5200
                </a>
              </li>
              <li>
                <a href="tel:07901234567" className="hover:text-white transition-colors">
                  07901 234567
                </a>
              </li>
              <li>
                <a href="mailto:emma@barnetnotary.co.uk" className="hover:text-white transition-colors">
                  emma@barnetnotary.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Notary Public Barnet. All rights reserved.
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
        </div>
      </div>
    </footer>
  );
}
