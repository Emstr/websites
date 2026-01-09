import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1f2937] text-white border-t border-[#d97706]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-[#d97706]">Holder & Combes</h3>
            <p className="text-gray-300 mb-4">
              Chartered Financial Planners based in the City of London, serving clients across the UK.
            </p>
            <div className="space-y-2 text-gray-300">
              <p className="font-medium">City of London Office:</p>
              <p>20 Little Britain, St. Paul's</p>
              <p>London EC1A 7DH</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#wealth" className="text-gray-300 hover:text-[#d97706] transition-colors">
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link href="/services#retirement" className="text-gray-300 hover:text-[#d97706] transition-colors">
                  Retirement Planning
                </Link>
              </li>
              <li>
                <Link href="/services#pensions" className="text-gray-300 hover:text-[#d97706] transition-colors">
                  Pensions
                </Link>
              </li>
              <li>
                <Link href="/services#estate" className="text-gray-300 hover:text-[#d97706] transition-colors">
                  Estate Planning
                </Link>
              </li>
              <li>
                <Link href="/chartered" className="text-gray-300 hover:text-[#d97706] transition-colors">
                  Why Chartered
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="tel:+442071012817" className="hover:text-[#d97706] transition-colors">
                  +44 (0)207 101 2817
                </a>
              </li>
              <li>
                <a href="mailto:enquiries@holderandcombes.co.uk" className="hover:text-[#d97706] transition-colors">
                  enquiries@holderandcombes.co.uk
                </a>
              </li>
              <li className="pt-2">
                <span className="text-sm text-gray-400">
                  Authorised and regulated by the<br />Financial Conduct Authority<br />
                  FCA Reference: 574786
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Holder & Combes. All rights reserved. Chartered Financial Planners.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-[#d97706] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#d97706] transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/complaints" className="hover:text-[#d97706] transition-colors">
                Complaints Procedure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
