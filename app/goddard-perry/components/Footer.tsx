import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0f2b46] text-white">
      {/* FCA Banner */}
      <div className="bg-[#c4952b]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-white">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span>Authorised and Regulated by the Financial Conduct Authority (125376)</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Goddard Perry</h3>
            <p className="text-gray-300 text-sm">
              Independent financial advisers providing impartial financial planning to individuals and businesses in Croydon and South London.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/goddard-perry/services#pensions" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Pension Planning
                </Link>
              </li>
              <li>
                <Link href="/goddard-perry/services#investments" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Investments
                </Link>
              </li>
              <li>
                <Link href="/goddard-perry/services#retirement" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Retirement Planning
                </Link>
              </li>
              <li>
                <Link href="/goddard-perry/services#corporate" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Corporate Benefits
                </Link>
              </li>
              <li>
                <Link href="/goddard-perry/services#protection" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/goddard-perry/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/goddard-perry/faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/goddard-perry/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="tel:02086033700" className="hover:text-white transition-colors">
                  020 8603 3700
                </a>
              </li>
              <li>
                <a href="mailto:contact@goddardperry.com" className="hover:text-white transition-colors">
                  contact@goddardperry.com
                </a>
              </li>
              <li>
                <address className="not-italic">
                  Corinthian House<br />
                  17 Lansdowne Road<br />
                  Croydon CR0 2BX
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            Goddard Perry Consulting Limited is authorised and regulated by the Financial Conduct Authority (FCA number 125376).
            Registered in England no. 1635689. Registered office: Corinthian House, 17 Lansdowne Road, Croydon CR0 2BX.
            The guidance and advice contained within this website is subject to the UK regulatory regime and is therefore targeted primarily at consumers based in the UK.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Goddard Perry Consulting. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
              <Link href="/goddard-perry/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/goddard-perry/terms" className="hover:text-white transition-colors">
                Terms of Business
              </Link>
              <Link href="/goddard-perry/terms#complaints" className="hover:text-white transition-colors">
                Complaints
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
