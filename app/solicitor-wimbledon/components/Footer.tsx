import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-white">
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center"><span className="text-accent font-bold text-xl">W</span></div>
              <div><p className="text-white font-bold text-lg leading-tight">Wimbledon Legal</p><p className="text-xs text-gray-400 tracking-wider">SERVICES</p></div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">SRA regulated solicitors in Wimbledon, SW19. Expert legal advice across conveyancing, family law, wills & probate, employment and immigration.</p>
            <div className="flex items-center gap-2 text-sm text-gray-400"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>SRA Regulated Practice</span></div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/solicitor-wimbledon/services" className="footer-link">Conveyancing</Link></li>
              <li><Link href="/solicitor-wimbledon/services" className="footer-link">Family Law</Link></li>
              <li><Link href="/solicitor-wimbledon/services" className="footer-link">Wills &amp; Probate</Link></li>
              <li><Link href="/solicitor-wimbledon/services" className="footer-link">Employment Law</Link></li>
              <li><Link href="/solicitor-wimbledon/services" className="footer-link">Commercial Law</Link></li>
              <li><Link href="/solicitor-wimbledon/services" className="footer-link">Immigration</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/solicitor-wimbledon/about" className="footer-link">About Us</Link></li>
              <li><Link href="/solicitor-wimbledon/contact" className="footer-link">Contact Us</Link></li>
              <li><Link href="/solicitor-wimbledon/faq" className="footer-link">FAQ</Link></li>
              <li><Link href="/solicitor-wimbledon/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link href="/solicitor-wimbledon/terms" className="footer-link">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div><p className="text-accent font-semibold mb-1">Our Office</p><address className="not-italic text-gray-300 text-sm">26 The Broadway<br />Wimbledon, London SW19 1RE</address></div>
              <div className="pt-2">
                <a href="tel:02079464567" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>020 7946 4567</a>
                <a href="mailto:info@wimbledonlegal.co.uk" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors mt-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>info@wimbledonlegal.co.uk</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700"><div className="container-width py-6"><div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"><p>&copy; {currentYear} Wimbledon Legal Services. All rights reserved.</p><div className="flex items-center gap-6"><Link href="/solicitor-wimbledon/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link><Link href="/solicitor-wimbledon/terms" className="hover:text-accent transition-colors">Terms of Service</Link></div></div></div></div>
    </footer>
  );
}
