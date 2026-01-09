import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-[#c9a227] font-bold text-lg mb-4">Paul Dodd Asset Management</h3>
            <p className="text-sm mb-4 text-gray-300">
              Independent Financial Advisers serving clients since 1992 with expert advice on pensions, wealth management and investments.
            </p>
            <div className="flex items-start gap-2 text-sm text-gray-300">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span><strong>FCA Authorised</strong><br />Ref: 610180</span>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-[#c9a227] font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:01132300449" className="hover:text-[#c9a227] transition-colors">0113 2300449</a>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@pauldodd.co.uk" className="hover:text-[#c9a227] transition-colors">info@pauldodd.co.uk</a>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p>18 Wynmore Avenue</p>
                  <p>Leeds, West Yorkshire</p>
                  <p>LS16 9DE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#c9a227] font-bold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block text-gray-300 hover:text-[#c9a227] transition-colors">Home</Link>
              <Link href="/services" className="block text-gray-300 hover:text-[#c9a227] transition-colors">Our Services</Link>
              <Link href="/about" className="block text-gray-300 hover:text-[#c9a227] transition-colors">About Us</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-[#c9a227] transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#c9a227] font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Pensions & Retirement Planning</li>
              <li>Wealth Management</li>
              <li>Investment Advice</li>
              <li>ISAs & Tax Planning</li>
              <li>Portfolio Management</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Regulatory disclaimer */}
      <div className="bg-[#15293f] py-6">
        <div className="container mx-auto px-4">
          <div className="text-xs text-gray-400 space-y-3">
            <p>
              <strong>Paul Dodd Asset Management Limited</strong> is authorised and regulated by the Financial Conduct Authority (FCA).
              FCA Number: 610180. Company registered in England and Wales. Company Number: 8716410.
            </p>
            <p>
              Registered Office: 55 Great George Street, Leeds, LS1 3BB.
            </p>
            <p className="border-t border-gray-700 pt-3">
              The value of investments and any income from them can fall as well as rise and you may not get back the original amount invested.
              Past performance is not a reliable indicator of future performance. Tax rules are subject to change and their value to you will
              depend on your individual circumstances.
            </p>
            <div className="border-t border-gray-700 pt-3 flex flex-col md:flex-row justify-between items-center gap-4">
              <p>&copy; {currentYear} Paul Dodd Asset Management Limited. All rights reserved.</p>
              <p className="text-gray-500">Trusted advisers since 1992</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
