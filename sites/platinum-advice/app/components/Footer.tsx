import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-deepblue text-white border-t border-gold/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gold">Platinum Advice</h3>
            <p className="text-blue-100 mb-4">
              Independent Financial Advisers based in Wetherby, North Yorkshire.
              Small, friendly, reliable - providing boutique financial advice across
              pensions, mortgages, protection, and investments.
            </p>
            <div className="space-y-2 text-blue-100">
              <p className="font-medium text-gold">Serving:</p>
              <p>Wetherby • York • Harrogate • Leeds • Ripon • Thirsk</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#pensions" className="text-blue-100 hover:text-gold transition-colors">
                  Pensions
                </Link>
              </li>
              <li>
                <Link href="/services#mortgages" className="text-blue-100 hover:text-gold transition-colors">
                  Mortgages
                </Link>
              </li>
              <li>
                <Link href="/services#protection" className="text-blue-100 hover:text-gold transition-colors">
                  Protection
                </Link>
              </li>
              <li>
                <Link href="/services#investments" className="text-blue-100 hover:text-gold transition-colors">
                  Investments
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Wetherby, North Yorkshire</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@platinum-advice.com" className="hover:text-gold transition-colors">
                  info@platinum-advice.com
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block bg-gold hover:bg-yellow-400 text-deepblue px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  Arrange Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Platinum Advice. All rights reserved.
              <br className="md:hidden" />
              <span className="md:ml-1">Authorised and regulated by the Financial Conduct Authority.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-200">
              <Link href="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gold transition-colors">
                Terms
              </Link>
              <Link href="/complaints" className="hover:text-gold transition-colors">
                Complaints
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
