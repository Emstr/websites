import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Electrical Quote in Greenwich",
  description: "Contact Greenwich Electrical Solutions for a free quote. Call 020 7946 0456 or fill in our form. NICEIC approved electricians in SE10.",
  openGraph: { title: "Contact Us | Greenwich Electrical Solutions", description: "Get a free electrical quote in Greenwich. NICEIC approved, Part P certified." },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Need an electrician? Get a free quote or call us to discuss your electrical requirements. We respond to all enquiries within 24 hours.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">Request a Free Quote</h2>
              <p className="text-gray-600 mb-8">Describe your electrical needs and we&apos;ll get back to you with a free, no-obligation quote.</p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="Smith" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="07123 456789" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Required</label>
                  <select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent">
                    <option value="">Select a service</option>
                    <option value="rewiring">Rewiring</option>
                    <option value="fuseboard">Fuse Board Upgrade</option>
                    <option value="eicr">Electrical Testing (EICR)</option>
                    <option value="lighting">Lighting Installation</option>
                    <option value="ev-charger">EV Charger Installation</option>
                    <option value="smart-home">Smart Home Wiring</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Describe Your Requirements</label>
                  <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="Please describe the work you need, including your postcode and any relevant details..."></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-[var(--accent)] border-gray-300 rounded focus:ring-[var(--accent)]" />
                  <label htmlFor="consent" className="text-sm text-gray-600">I consent to Greenwich Electrical Solutions contacting me regarding my enquiry. *</label>
                </div>
                <button type="submit" className="bg-[var(--accent)] text-white px-8 py-3 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors w-full sm:w-auto">Send Enquiry</button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-8">Our Details</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 mb-8">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4">Greenwich, SE10</h3>
                <address className="not-italic text-gray-700 mb-4"><strong>Greenwich Electrical Solutions</strong><br />12 Nelson Road<br />Greenwich<br />London SE10 9JB</address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p><strong>Office Hours:</strong><br />Monday - Friday: 8:00am - 6:00pm<br />Saturday: 9:00am - 2:00pm<br />Sunday: Closed</p>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-6">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-4">Call or Email Us</h3>
                <div className="space-y-4">
                  <a href="tel:02079460456" className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors">
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div><p className="font-semibold">020 7946 0456</p><p className="text-sm text-gray-500">Mon-Sat during office hours</p></div>
                  </a>
                  <a href="mailto:info@greenwichelectrical.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors">
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div><p className="font-semibold">info@greenwichelectrical.co.uk</p><p className="text-sm text-gray-500">We reply within 24 hours</p></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">Find Us in Greenwich</h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.2!2d-0.0005!3d51.4769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI4JzM2LjgiTiAwwrAwMCcwMS44Ilc!5e0!3m2!1sen!2suk!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Greenwich Electrical Solutions Location"></iframe>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-600">
            <p><strong>NICEIC Approved:</strong> Greenwich Electrical Solutions is NICEIC approved and Part P certified. Free quotes provided without obligation. 5-year guarantee on all work.</p>
          </div>
        </div>
      </section>
    </>
  );
}
