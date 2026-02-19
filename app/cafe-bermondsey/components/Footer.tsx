import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--secondary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">Bermondsey Coffee House</p>
                <p className="text-xs text-gray-400 tracking-wider uppercase">Speciality Coffee</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Speciality coffee, artisan pastries and brunch in the heart of
              Bermondsey. Locally roasted, lovingly brewed.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>5-Star Hygiene Rating</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">What We Offer</h3>
            <ul className="space-y-3">
              <li><Link href="/cafe-bermondsey/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Speciality Coffee</Link></li>
              <li><Link href="/cafe-bermondsey/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Artisan Pastries &amp; Cakes</Link></li>
              <li><Link href="/cafe-bermondsey/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Brunch Menu</Link></li>
              <li><Link href="/cafe-bermondsey/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Private Hire</Link></li>
              <li><Link href="/cafe-bermondsey/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Coffee Subscriptions</Link></li>
              <li><Link href="/cafe-bermondsey/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Catering</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/cafe-bermondsey/about" className="text-gray-300 hover:text-[var(--accent)] transition-colors">About Us</Link></li>
              <li><Link href="/cafe-bermondsey/contact" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Contact Us</Link></li>
              <li><Link href="/cafe-bermondsey/faq" className="text-gray-300 hover:text-[var(--accent)] transition-colors">FAQ</Link></li>
              <li><Link href="/cafe-bermondsey/services" className="text-gray-300 hover:text-[var(--accent)] transition-colors">Full Menu</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Visit Us</h3>
            <div className="space-y-4">
              <address className="not-italic text-gray-300 text-sm">78 Bermondsey Street<br />Bermondsey, London SE1 3UD</address>
              <div className="pt-2">
                <a href="tel:02079468901" className="flex items-center gap-2 text-gray-300 hover:text-[var(--accent)] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  020 7946 8901
                </a>
                <a href="mailto:hello@bermondsycoffee.co.uk" className="flex items-center gap-2 text-gray-300 hover:text-[var(--accent)] transition-colors mt-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  hello@bermondsycoffee.co.uk
                </a>
              </div>
              <div className="pt-2 text-sm text-gray-400">
                <p>Mon&ndash;Fri: 7am &ndash; 6pm</p>
                <p>Sat&ndash;Sun: 8am &ndash; 5pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Bermondsey Coffee House. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/cafe-bermondsey/contact" className="hover:text-[var(--accent)] transition-colors">Find Us</Link>
              <Link href="/cafe-bermondsey/services" className="hover:text-[var(--accent)] transition-colors">Menu</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
