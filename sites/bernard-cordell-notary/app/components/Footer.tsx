import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#7f1d1d] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Bernard Cordell - Notary Public</h3>
            <p className="text-gray-200 mb-4">
              Professional notarial services in Belsize Park and across North London.
            </p>
            <div className="space-y-2 text-gray-200">
              <p>Belsize Park, North London</p>
              <p>Serving Hampstead, Primrose Hill, Swiss Cottage, St John's Wood, and Camden</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/businesses" className="text-gray-200 hover:text-white transition-colors">
                  Business Services
                </Link>
              </li>
              <li>
                <Link href="/individuals" className="text-gray-200 hover:text-white transition-colors">
                  Individual Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-white transition-colors">
                  About Bernard Cordell
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
            <p className="text-gray-200 mb-3">
              Contact us for professional notary services
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#fbbf24] hover:bg-[#f59e0b] text-[#7f1d1d] px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact Form
            </Link>
          </div>
        </div>

        <div className="border-t border-[#991b1b] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Bernard Cordell - Notary Public. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
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
