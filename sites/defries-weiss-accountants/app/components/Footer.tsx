import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-bold font-serif mb-4">
              Defries Weiss
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Chartered Accountants
            </p>
            <p className="text-sm text-gray-400 mb-2">
              Established 1976
            </p>
            <p className="text-sm text-gray-400">
              Member of Simmons Gainsford
              <br />
              network
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-[#34785a] transition-colors">
                  Audit & Assurance
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#34785a] transition-colors">
                  Accounts Production
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#34785a] transition-colors">
                  Tax Planning
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#34785a] transition-colors">
                  Payroll Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#34785a] transition-colors">
                  Business Advice
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#34785a] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#34785a] transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#34785a] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#34785a] transition-colors">
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#34785a] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>
                  311 Ballards Lane<br />
                  North Finchley<br />
                  London, N12 8LY
                </span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-[#34785a] mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:02084462999" className="hover:text-[#34785a] transition-colors">
                  020 8446 2999
                </a>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-500">
                Monday - Friday: 9am - 5:30pm
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Defries Weiss (Accountants) Limited. All rights reserved.
          </p>
          <p className="mt-2">
            Registered in England and Wales. Chartered Accountants.
          </p>
        </div>
      </div>
    </footer>
  );
}
