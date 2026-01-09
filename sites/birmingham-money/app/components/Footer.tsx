import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#7c1d1d] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Birmingham Money</h3>
            <p className="text-red-100 mb-4 text-sm leading-relaxed">
              Face-to-face mortgage advice with many years of experience. Specialists in helping
              self-employed clients secure the mortgages they need across Birmingham and the West Midlands.
            </p>
            <div className="text-sm text-red-100">
              <p className="font-medium text-[#d97706]">FCA Regulated</p>
              <p>Professional mortgage advisers</p>
              <p className="mt-1">Serving Birmingham since 2010</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-red-50 text-sm">
              <div>
                <h4 className="font-semibold text-[#d97706] mb-1">Office Locations</h4>
                <p>Birmingham</p>
                <p>West Bromwich</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#d97706] mb-1">Get in Touch</h4>
                <p className="hover:text-white transition-colors cursor-pointer">
                  Email: advice@birmingham-money.co.uk
                </p>
                <p className="hover:text-white transition-colors cursor-pointer">
                  Web: www.birmingham-money.co.uk
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-red-50 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#d97706]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Residential Mortgages
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#d97706]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                First-Time Buyers
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#d97706]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Self-Employed Mortgages
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#d97706]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Buy-to-Let Investors
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#d97706]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Remortgage Advice
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-900 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-red-100 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Birmingham Money. All rights reserved.
            </p>
            <p className="text-xs text-red-200 max-w-2xl text-center md:text-right">
              Birmingham Money is authorised and regulated by the Financial Conduct Authority.
              Your home may be repossessed if you do not keep up repayments on your mortgage.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
