import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-white">
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center"><svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg></div>
              <div><p className="text-white font-bold text-lg leading-tight">Mayfair Cleaning</p><p className="text-xs text-gray-400 tracking-wider">SERVICES</p></div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">Premium cleaning in Mayfair and Central London. DBS checked staff, fully insured, eco-friendly products.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/cleaning-mayfair/services" className="footer-link">Regular Domestic Cleaning</Link></li>
              <li><Link href="/cleaning-mayfair/services" className="footer-link">Deep Cleaning</Link></li>
              <li><Link href="/cleaning-mayfair/services" className="footer-link">End of Tenancy</Link></li>
              <li><Link href="/cleaning-mayfair/services" className="footer-link">Office Cleaning</Link></li>
              <li><Link href="/cleaning-mayfair/services" className="footer-link">After-Party Cleaning</Link></li>
              <li><Link href="/cleaning-mayfair/services" className="footer-link">Carpet &amp; Upholstery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/cleaning-mayfair/about" className="footer-link">About Us</Link></li>
              <li><Link href="/cleaning-mayfair/contact" className="footer-link">Contact Us</Link></li>
              <li><Link href="/cleaning-mayfair/faq" className="footer-link">FAQ</Link></li>
              <li><Link href="/cleaning-mayfair/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link href="/cleaning-mayfair/terms" className="footer-link">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <address className="not-italic text-gray-300 text-sm">22 Brook Street<br />Mayfair, London W1K 5DF</address>
              <a href="tel:02079460345" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>020 7946 0345</a>
              <a href="mailto:bookings@mayfaircleaning.co.uk" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>bookings@mayfaircleaning.co.uk</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700"><div className="container-width py-6"><div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"><p>&copy; {currentYear} Mayfair Cleaning Services. All rights reserved.</p><div className="flex items-center gap-6"><Link href="/cleaning-mayfair/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link><Link href="/cleaning-mayfair/terms" className="hover:text-accent transition-colors">Terms &amp; Conditions</Link></div></div></div></div>
    </footer>
  );
}
