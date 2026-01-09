import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0d9488] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Strategy Wealth</h3>
            <p className="text-teal-100 mb-4 text-sm leading-relaxed">
              Modern, technology-led independent financial advice. Founded in 2023 by David Ellicott DipPFS,
              we bring a fresh approach to pensions, investments, and protection planning.
            </p>
            <div className="text-sm text-teal-100">
              <p className="font-medium text-[#f97316]">FCA Regulated</p>
              <p>Via ValidPath (Ref: 197107)</p>
              <p className="mt-1">Company No: 14838686</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-teal-50 text-sm">
              <div>
                <h4 className="font-semibold text-[#f97316] mb-1">Address</h4>
                <p>45 Tanwood View</p>
                <p>Bodmin, Cornwall</p>
                <p>PL31 2PN</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#f97316] mb-1">Get in Touch</h4>
                <p className="hover:text-white transition-colors cursor-pointer">
                  Email: hello@strategy-wealth.co.uk
                </p>
                <p className="hover:text-white transition-colors cursor-pointer">
                  Web: www.strategy-wealth.co.uk
                </p>
              </div>
            </div>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Areas We Serve</h3>
            <ul className="space-y-2 text-teal-50 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#f97316]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Bodmin & Central Cornwall
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#f97316]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                St Austell & Surrounding Areas
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#f97316]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Across Cornwall & Devon
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#f97316]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Remote Consultations Available
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-teal-100 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Strategy Wealth. All rights reserved.
            </p>
            <p className="text-xs text-teal-200 max-w-2xl text-center md:text-right">
              Strategy Wealth is an appointed representative of ValidPath Ltd which is authorised and regulated by the Financial Conduct Authority.
              The value of investments can fall as well as rise. You may get back less than invested.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
