import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Removals Quote",
  description: "Contact Ealing Moving Company for a free removals quote. Call 020 7946 9234 or fill in our online form for home and office moves in Ealing.",
  openGraph: { title: "Contact Us | Ealing Moving Company", description: "Get a free, no-obligation quote for your home or office move in Ealing and West London." },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width"><div className="max-w-3xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 leading-relaxed">Request a free home survey and fixed-price quote, or call us to discuss your move.</p>
        </div></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Request a Free Quote</h2>
              <p className="text-gray-600 mb-8">Fill in the form and we&apos;ll arrange a free home or office survey to provide an accurate, fixed-price quote.</p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label htmlFor="firstName" className="form-label">First Name *</label><input type="text" id="firstName" name="firstName" required className="form-input" placeholder="John" /></div>
                  <div><label htmlFor="lastName" className="form-label">Last Name *</label><input type="text" id="lastName" name="lastName" required className="form-input" placeholder="Smith" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label htmlFor="email" className="form-label">Email Address *</label><input type="email" id="email" name="email" required className="form-input" placeholder="john@example.com" /></div>
                  <div><label htmlFor="phone" className="form-label">Phone Number *</label><input type="tel" id="phone" name="phone" required className="form-input" placeholder="07123 456789" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label htmlFor="moveFrom" className="form-label">Moving From (Postcode)</label><input type="text" id="moveFrom" name="moveFrom" className="form-input" placeholder="W5 2TL" /></div>
                  <div><label htmlFor="moveTo" className="form-label">Moving To (Postcode)</label><input type="text" id="moveTo" name="moveTo" className="form-input" placeholder="W4 1AB" /></div>
                </div>
                <div><label htmlFor="moveType" className="form-label">Type of Move</label>
                  <select id="moveType" name="moveType" className="form-input">
                    <option value="">Select move type</option><option value="home">Home Removal</option><option value="office">Office Relocation</option><option value="packing">Packing Only</option><option value="storage">Storage</option><option value="man-van">Man &amp; Van</option><option value="international">International Move</option>
                  </select>
                </div>
                <div><label htmlFor="moveDate" className="form-label">Preferred Move Date</label><input type="date" id="moveDate" name="moveDate" className="form-input" /></div>
                <div><label htmlFor="bedrooms" className="form-label">Number of Bedrooms (if home move)</label>
                  <select id="bedrooms" name="bedrooms" className="form-input">
                    <option value="">Select</option><option value="studio">Studio</option><option value="1">1 Bedroom</option><option value="2">2 Bedrooms</option><option value="3">3 Bedrooms</option><option value="4">4 Bedrooms</option><option value="5+">5+ Bedrooms</option>
                  </select>
                </div>
                <div><label htmlFor="message" className="form-label">Additional Details</label><textarea id="message" name="message" rows={4} className="form-textarea" placeholder="Any special requirements, access issues, or items needing special care..."></textarea></div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
                  <label htmlFor="consent" className="text-sm text-gray-600">I consent to Ealing Moving Company contacting me regarding my enquiry. *</label>
                </div>
                <button type="submit" className="btn-accent w-full sm:w-auto">Request Free Quote</button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Our Office</h2>
              <div className="location-card mb-8">
                <address className="not-italic text-gray-700 mb-4"><strong>Ealing Moving Company</strong><br />112 Uxbridge Road<br />Ealing<br />London W5 2TL</address>
                <div className="space-y-2 text-gray-600 mb-4"><p><strong>Office Hours:</strong><br />Monday - Friday: 7:00am - 7:00pm<br />Saturday: 8:00am - 5:00pm<br />Sunday: By appointment</p></div>
              </div>
              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-primary mb-4">Call Us</h3>
                <div className="space-y-4">
                  <a href="tel:02079469234" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                    <div><p className="font-semibold">020 7946 9234</p><p className="text-sm text-gray-500">Speak to our team</p></div>
                  </a>
                  <a href="mailto:moves@ealingmoving.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                    <div><p className="font-semibold">moves@ealingmoving.co.uk</p><p className="text-sm text-gray-500">Email us anytime</p></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container-width py-8">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Find Our Office</h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.5!2d-0.3089!3d51.513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzQ2LjgiTiAwwrAxOCczMi4wIlc!5e0!3m2!1sen!2suk!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ealing Moving Company Office Location"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
