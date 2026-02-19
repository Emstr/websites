import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[var(--secondary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center"><svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg></div>
              <div><p className="text-white font-bold text-lg leading-tight">Chelsea Blooms</p><p className="text-xs text-gray-400 tracking-wider uppercase">Luxury Florist</p></div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">Luxury flowers for every occasion. Bespoke bouquets, wedding floristry and same day delivery across London from our Chelsea studio.</p>
            <div className="flex items-center gap-2 text-sm text-gray-400"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>British Florist Association</span></div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/florist-chelsea/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Wedding Flowers</Link></li>
              <li><Link href="/florist-chelsea/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Funeral Tributes</Link></li>
              <li><Link href="/florist-chelsea/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Luxury Bouquets</Link></li>
              <li><Link href="/florist-chelsea/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Corporate Flowers</Link></li>
              <li><Link href="/florist-chelsea/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Event Styling</Link></li>
              <li><Link href="/florist-chelsea/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Flower Subscriptions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/florist-chelsea/about" className="text-gray-300 hover:text-[var(--accent)] transition-colors">About Us</Link></li>
              <li><Link href="/florist-chelsea/contact" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Contact Us</Link></li>
              <li><Link href="/florist-chelsea/faq" className="text-gray-300 hover:text-[var(--accent)] transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Visit Our Studio</h3>
            <div className="space-y-4">
              <address className="not-italic text-gray-300 text-sm">156 King&apos;s Road<br />Chelsea, London SW3 4UT</address>
              <div className="pt-2">
                <a href="tel:02079469012" className="flex items-center gap-2 text-gray-300 hover:text-[var(--accent)] transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>020 7946 9012</a>
                <a href="mailto:orders@chelseablooms.co.uk" className="flex items-center gap-2 text-gray-300 hover:text-[var(--accent)] transition-colors mt-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>orders@chelseablooms.co.uk</a>
              </div>
              <div className="pt-2 text-sm text-gray-400"><p>Mon&ndash;Sat: 8am &ndash; 6pm</p><p>Sun: 10am &ndash; 4pm</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Chelsea Blooms. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/florist-chelsea/contact" className="hover:text-[var(--accent)] transition-colors">Order Flowers</Link>
              <Link href="/florist-chelsea/services" className="hover:text-[var(--accent)] transition-colors">Services</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
