import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[var(--secondary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--primary)] rounded-sm flex items-center justify-center"><span className="text-[var(--accent)] font-bold text-xl">C</span></div>
              <div><p className="text-white font-bold text-lg leading-tight">Camden Lock &amp; Key</p><p className="text-xs text-gray-400 tracking-wider uppercase">Locksmith</p></div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">24/7 emergency locksmith serving Camden and North London. DBS checked, no call-out fee, 30-minute response time.</p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span>DBS Checked</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/locksmith-camden/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Emergency Lockout Service</Link></li>
              <li><Link href="/locksmith-camden/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Lock Replacement</Link></li>
              <li><Link href="/locksmith-camden/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">UPVC &amp; Multipoint Lock Repair</Link></li>
              <li><Link href="/locksmith-camden/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Key Cutting</Link></li>
              <li><Link href="/locksmith-camden/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Security Upgrades</Link></li>
              <li><Link href="/locksmith-camden/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Safe Opening</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/locksmith-camden/about" className="text-gray-300 hover:text-[var(--accent)] transition-colors">About Us</Link></li>
              <li><Link href="/locksmith-camden/contact" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Contact Us</Link></li>
              <li><Link href="/locksmith-camden/faq" className="text-gray-300 hover:text-[var(--accent)] transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <address className="not-italic text-gray-300 text-sm">28 Parkway<br />Camden, London NW1 7AH</address>
              <div className="pt-2">
                <a href="tel:02079460789" className="flex items-center gap-2 text-gray-300 hover:text-[var(--accent)] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>020 7946 0789
                </a>
                <a href="mailto:info@camdenlockandkey.co.uk" className="flex items-center gap-2 text-gray-300 hover:text-[var(--accent)] transition-colors mt-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>info@camdenlockandkey.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-[var(--primary)]/50 rounded-sm p-4 text-sm text-gray-300">
            <p><strong className="text-white">DBS Checked & Fully Insured:</strong> All Camden Lock &amp; Key locksmiths are DBS (formerly CRB) checked and carry full public liability insurance. We never damage your property unnecessarily and use non-destructive entry methods wherever possible.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Camden Lock &amp; Key. All rights reserved.</p>
            <div className="flex items-center gap-6"><span>DBS Checked</span><span>Fully Insured</span></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
