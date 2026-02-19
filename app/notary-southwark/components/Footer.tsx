import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#34495e] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Notary Southwark</h3>
            <p className="text-gray-300 mb-4">
              Professional notarial services in Southwark and surrounding South London boroughs.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>Southwark, London SE1</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/notary-southwark/services" className="text-gray-300 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/notary-southwark/services#business" className="text-gray-300 hover:text-white transition-colors">
                  Business Services
                </Link>
              </li>
              <li>
                <Link href="/notary-southwark/services#individual" className="text-gray-300 hover:text-white transition-colors">
                  Individual Services
                </Link>
              </li>
              <li>
                <Link href="/notary-southwark/contact" className="text-gray-300 hover:text-white transition-colors">
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
                <a href="tel:02079285000" className="hover:text-white transition-colors">
                  020 7928 5000
                </a>
              </li>
              <li>
                <a href="mailto:info@notarysouthwark.co.uk" className="hover:text-white transition-colors">
                  info@notarysouthwark.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Notary Southwark. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
              <Link href="/notary-southwark/privacy" className="hover:text-white transition-colors">
                Privacy Notice
              </Link>
              <Link href="/notary-southwark/terms" className="hover:text-white transition-colors">
                Terms of Business
              </Link>
              <Link href="/notary-southwark/terms#complaints" className="hover:text-white transition-colors">
                Complaints
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
