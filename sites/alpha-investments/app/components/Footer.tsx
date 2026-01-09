import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#4c1d95] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Alpha Investments & Financial Planning Ltd</h3>
            <p className="text-gray-300 mb-6">
              Professional wealth management and financial planning services across London.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#fbbf24] mb-2">Harrow Office</h4>
                <div className="space-y-1 text-gray-300 text-sm">
                  <p>79 College Road</p>
                  <p>Harrow HA1 1BD</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[#fbbf24] mb-2">Mayfair Office</h4>
                <div className="space-y-1 text-gray-300 text-sm">
                  <p>17 Hanover Square</p>
                  <p>London W1S 1BN</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#investments" className="text-gray-300 hover:text-white transition-colors">
                  Investment Planning
                </Link>
              </li>
              <li>
                <Link href="/services#pensions" className="text-gray-300 hover:text-white transition-colors">
                  Pensions & Retirement
                </Link>
              </li>
              <li>
                <Link href="/services#assurance" className="text-gray-300 hover:text-white transition-colors">
                  Life Assurance
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
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
                <a href="tel:02033977730" className="hover:text-white transition-colors">
                  020 3397 7730
                </a>
              </li>
              <li>
                <a href="mailto:info@alpha4u.co.uk" className="hover:text-white transition-colors">
                  info@alpha4u.co.uk
                </a>
              </li>
              <li className="pt-2">
                <a href="https://alpha4u.co.uk" className="hover:text-white transition-colors text-sm">
                  www.alpha4u.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Alpha Investments & Financial Planning Ltd. All rights reserved.
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
