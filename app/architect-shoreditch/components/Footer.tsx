import Link from "next/link";

const services = [
  { name: "Residential Architecture", href: "/architect-shoreditch/services" },
  { name: "Commercial Design", href: "/architect-shoreditch/services" },
  { name: "Planning Applications", href: "/architect-shoreditch/services" },
  { name: "Interior Design", href: "/architect-shoreditch/services" },
  { name: "Loft Conversions", href: "/architect-shoreditch/services" },
  { name: "Heritage & Conservation", href: "/architect-shoreditch/services" },
];

const quickLinks = [
  { name: "About Us", href: "/architect-shoreditch/about" },
  { name: "Our Services", href: "/architect-shoreditch/services" },
  { name: "FAQ", href: "/architect-shoreditch/faq" },
  { name: "Contact", href: "/architect-shoreditch/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 21V10l9-7 9 7v11M9 21V13h6v8" /></svg>
              </div>
              <div>
                <span className="text-lg font-bold leading-none block">Shoreditch</span>
                <span className="text-xs text-[var(--accent)] font-semibold tracking-widest uppercase">Architecture</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">RIBA Chartered and ARB Registered architects creating thoughtful, contemporary design from our studio in the heart of Shoreditch.</p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              RIBA Chartered Practice
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.name}><Link href={s.href} className="text-gray-300 hover:text-[var(--accent)] transition-colors text-sm">{s.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.name}><Link href={l.href} className="text-gray-300 hover:text-[var(--accent)] transition-colors text-sm">{l.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Contact</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Studio</p>
                <p className="text-gray-300">58 Rivington Street<br />Shoreditch, London E2 7QN</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Phone</p>
                <a href="tel:02079466901" className="text-gray-300 hover:text-[var(--accent)] transition-colors">020 7946 6901</a>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <a href="mailto:studio@shoreditcharchitecture.co.uk" className="text-gray-300 hover:text-[var(--accent)] transition-colors">studio@shoreditcharchitecture.co.uk</a>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Hours</p>
                <p className="text-gray-300">Mon - Fri: 9:00am - 6:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-width py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Shoreditch Architecture Studio. All rights reserved.</p>
          <p className="text-gray-500 text-xs">RIBA Chartered Practice | ARB Registered | Professional Indemnity Insured</p>
        </div>
      </div>
    </footer>
  );
}
