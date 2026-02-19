import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>
                <a href="tel:07985405640" className="hover:text-white">
                  Mobile: 07985 405640
                </a>
              </p>
              <p>
                <a href="tel:02079530333" className="hover:text-white">
                  Office: 020 7953 0333
                </a>
              </p>
              <p>
                <a href="mailto:linda@camdennotary.co.uk" className="hover:text-white">
                  linda@camdennotary.co.uk
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/447985405640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp Available
                </a>
              </p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <address className="text-gray-300 text-sm not-italic">
              Hamilton House, 4th Floor
              <br />
              Mabledon Place
              <br />
              London WC1H 9BB
              <br />
              <span className="text-xs mt-2 block">
                4 min from Kings Cross/St Pancras
                <br />
                3 min from Euston
              </span>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/camden-notary/services" className="hover:text-white">
                  Notary Services
                </Link>
              </li>
              <li>
                <Link href="/camden-notary/legalisation" className="hover:text-white">
                  Apostille & Legalisation
                </Link>
              </li>
              <li>
                <Link href="/camden-notary/fees" className="hover:text-white">
                  Fees
                </Link>
              </li>
              <li>
                <Link href="/camden-notary/quote" className="hover:text-white">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/camden-notary/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/camden-notary/terms" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/camden-notary/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Linda Okagbue. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Regulated by the Faculty Office of the Archbishop of Canterbury
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
