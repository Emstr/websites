import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#166534] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Total Finance (UK) Ltd</h3>
            <p className="text-gray-300 mb-4">
              Independent financial advisers providing expert advice on mortgages, life assurance, and financial protection.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>184-190 Farnaby Road</p>
              <p>Bromley, Greater London</p>
              <p>BR2 0BB</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#mortgages" className="text-gray-300 hover:text-white transition-colors">
                  Mortgages
                </Link>
              </li>
              <li>
                <Link href="/services#life-assurance" className="text-gray-300 hover:text-white transition-colors">
                  Life Assurance
                </Link>
              </li>
              <li>
                <Link href="/services#protection" className="text-gray-300 hover:text-white transition-colors">
                  Income Protection
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
                <a href="tel:02086957548" className="hover:text-white transition-colors">
                  020 8695 7548
                </a>
              </li>
              <li>
                <a href="mailto:info@total-finance.org.uk" className="hover:text-white transition-colors">
                  info@total-finance.org.uk
                </a>
              </li>
              <li>
                <a href="https://total-finance.org.uk" className="hover:text-white transition-colors">
                  total-finance.org.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Total Finance (UK) Ltd. All rights reserved.
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
