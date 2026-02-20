import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <div>
                <span className="text-lg font-bold leading-none">Hampstead Speech Therapy</span>
                <span className="text-xs text-accent block">Finding Your Voice</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">Expert speech and language therapy for children and adults. HCPC registered therapists and RCSLT members providing compassionate, evidence-based care from our Hampstead clinic since 2014.</p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              HCPC Registered &amp; RCSLT Members
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                { label: "Children's Speech Therapy", href: "/speech-therapist-hampstead/services" },
                { label: "Adult Speech Therapy", href: "/speech-therapist-hampstead/services" },
                { label: "Stammering Support", href: "/speech-therapist-hampstead/services" },
                { label: "Voice Therapy", href: "/speech-therapist-hampstead/services" },
                { label: "Swallowing Assessment", href: "/speech-therapist-hampstead/services" },
                { label: "School-Based Therapy", href: "/speech-therapist-hampstead/services" },
              ].map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-gray-300 hover:text-accent transition-colors text-sm flex items-center gap-2">
                    <svg className="w-3 h-3 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/speech-therapist-hampstead/about" },
                { label: "FAQ", href: "/speech-therapist-hampstead/faq" },
                { label: "Contact Us", href: "/speech-therapist-hampstead/contact" },
                { label: "Book Consultation", href: "/speech-therapist-hampstead/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-gray-300 hover:text-accent transition-colors text-sm flex items-center gap-2">
                    <svg className="w-3 h-3 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Contact &amp; Visit</h3>
            <address className="not-italic text-gray-300 text-sm space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>8 Flask Walk<br />Hampstead<br />London NW3 1HE</span>
              </div>
              <a href="tel:02079464450" className="flex items-center gap-3 hover:text-accent transition-colors">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                020 7946 4450
              </a>
              <a href="mailto:clinic@hampsteadspeech.co.uk" className="flex items-center gap-3 hover:text-accent transition-colors">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                clinic@hampsteadspeech.co.uk
              </a>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Mon - Fri: 8:30am - 6:30pm<br />Sat: 9:00am - 1:00pm<br />Sun: Closed</span>
              </div>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-width py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hampstead Speech Therapy. All rights reserved.</p>
          <p>8 Flask Walk, Hampstead, London NW3 1HE</p>
        </div>
      </div>
    </footer>
  );
}
