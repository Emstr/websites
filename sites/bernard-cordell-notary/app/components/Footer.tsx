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
              Notary Public & Company/Commercial Solicitor serving Belsize Park and North London.
            </p>
            <div className="space-y-2 text-gray-200">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:02072094138" className="hover:text-white transition-colors">020 7209 4138</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Belsize Park, NW3</span>
              </div>
              <p className="text-sm pt-2">Serving: Hampstead, Swiss Cottage, Camden, Kentish Town</p>
              <p className="text-sm text-[#fbbf24]">Evening/weekend appointments • Free parking permits</p>
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
