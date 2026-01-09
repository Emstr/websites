import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0d9488] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Primavera Financial Partners LLP</h3>
            <p className="text-teal-100 mb-4">
              Chartered Financial Planners serving Wanstead and East London.
            </p>
            <div className="space-y-2 text-teal-100">
              <p>87a High Street</p>
              <p>Wanstead, London E11 2AE</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#investments" className="text-teal-100 hover:text-white transition-colors">
                  Investments
                </Link>
              </li>
              <li>
                <Link href="/services#pensions" className="text-teal-100 hover:text-white transition-colors">
                  Pensions
                </Link>
              </li>
              <li>
                <Link href="/services#mortgages" className="text-teal-100 hover:text-white transition-colors">
                  Mortgages
                </Link>
              </li>
              <li>
                <Link href="/services#protection" className="text-teal-100 hover:text-white transition-colors">
                  Protection
                </Link>
              </li>
              <li>
                <Link href="/services#retirement" className="text-teal-100 hover:text-white transition-colors">
                  Retirement Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-teal-100">
              <li>
                <a href="tel:02085329652" className="hover:text-white transition-colors">
                  020 8532 9652
                </a>
              </li>
              <li>
                <a href="mailto:admin@primaverafp.com" className="hover:text-white transition-colors">
                  admin@primaverafp.com
                </a>
              </li>
              <li className="pt-2">
                <a href="https://primaverafp.com" className="hover:text-white transition-colors">
                  www.primaverafp.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-teal-100 text-sm">
              &copy; {new Date().getFullYear()} Primavera Financial Partners LLP. All rights reserved. Authorised and regulated by the Financial Conduct Authority.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-teal-100">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Business
              </Link>
              <Link href="/complaints" className="hover:text-white transition-colors">
                Complaints Procedure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
