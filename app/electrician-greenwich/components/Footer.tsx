import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--secondary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--primary)] rounded-sm flex items-center justify-center">
                <span className="text-[var(--accent)] font-bold text-xl">G</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">Greenwich Electrical</p>
                <p className="text-xs text-gray-400 tracking-wider uppercase">Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              NICEIC approved and Part P certified electricians serving Greenwich
              and South East London. Professional electrical services with a
              5-year guarantee on all work.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>NICEIC Approved Contractor</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/electrician-greenwich/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Rewiring</Link></li>
              <li><Link href="/electrician-greenwich/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Fuse Board Upgrades</Link></li>
              <li><Link href="/electrician-greenwich/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Electrical Testing (EICR)</Link></li>
              <li><Link href="/electrician-greenwich/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Lighting Installation</Link></li>
              <li><Link href="/electrician-greenwich/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">EV Charger Installation</Link></li>
              <li><Link href="/electrician-greenwich/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Smart Home Wiring</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/electrician-greenwich/about" className="text-gray-300 hover:text-[var(--accent)] transition-colors">About Us</Link></li>
              <li><Link href="/electrician-greenwich/contact" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Contact Us</Link></li>
              <li><Link href="/electrician-greenwich/faq" className="text-gray-300 hover:text-[var(--accent)] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <address className="not-italic text-gray-300 text-sm">
                12 Nelson Road<br />Greenwich, London SE10 9JB
              </address>
              <div className="pt-2">
                <a href="tel:02079460456" className="flex items-center gap-2 text-gray-300 hover:text-[var(--accent)] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  020 7946 0456
                </a>
                <a href="mailto:info@greenwichelectrical.co.uk" className="flex items-center gap-2 text-gray-300 hover:text-[var(--accent)] transition-colors mt-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info@greenwichelectrical.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-[var(--primary)]/50 rounded-sm p-4 text-sm text-gray-300">
            <p>
              <strong className="text-white">NICEIC Approved:</strong> Greenwich
              Electrical Solutions is a NICEIC Approved Contractor and Part P certified.
              All electrical work is carried out to BS 7671 (18th Edition) standards and
              comes with a 5-year guarantee. Electrical installation certificates
              provided with all notifiable work.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Greenwich Electrical Solutions. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span>NICEIC Approved</span>
              <span>Part P Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
