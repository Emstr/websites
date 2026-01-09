import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#134e4a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Wembley Solicitors</h3>
            <p className="text-gray-200 mb-4">
              Transparent fixed-fee legal services in North West London. Specializing in Immigration,
              Family Law, and Commercial Leases.
            </p>
            <div className="space-y-2 text-gray-200">
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                4 minute walk from Wembley Central Station
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                North West London
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/immigration" className="text-gray-200 hover:text-[#f59e0b] transition-colors">
                  Immigration Law
                </Link>
              </li>
              <li>
                <Link href="/family-law" className="text-gray-200 hover:text-[#f59e0b] transition-colors">
                  Family Law
                </Link>
              </li>
              <li>
                <Link href="/commercial-leases" className="text-gray-200 hover:text-[#f59e0b] transition-colors">
                  Commercial Leases
                </Link>
              </li>
              <li>
                <Link href="/fees" className="text-gray-200 hover:text-[#f59e0b] transition-colors">
                  Our Fees
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a href="tel:02034173700" className="hover:text-[#f59e0b] transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  020 3417 3700
                </a>
              </li>
              <li>
                <a href="mailto:info@wembleysolicitors.com" className="hover:text-[#f59e0b] transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  info@wembleysolicitors.com
                </a>
              </li>
              <li className="pt-2">
                <div className="bg-[#f59e0b] text-[#134e4a] px-3 py-2 rounded-md text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    Open Saturdays 10am-2pm
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Wembley Solicitors. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
              <Link href="/privacy" className="hover:text-[#f59e0b] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#f59e0b] transition-colors">
                Terms of Service
              </Link>
              <Link href="/complaints" className="hover:text-[#f59e0b] transition-colors">
                Complaints Procedure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
