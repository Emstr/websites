import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Accounting Consultation",
  description: "Contact City Accounting Partners for expert accounting advice. Book a free consultation or call 020 7946 3456. ACCA certified accountants in the City of London.",
  openGraph: { title: "Contact Us | City Accounting Partners", description: "Book a free accounting consultation. Call 020 7946 3456." },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width"><div className="max-w-3xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 leading-relaxed">Ready to get your finances in order? Book a free consultation or get in touch to discuss how we can help your business.</p>
        </div></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Book Your Free Consultation</h2>
              <p className="text-gray-600 mb-8">Complete the form below and one of our qualified accountants will be in touch to arrange a convenient time to discuss your needs.</p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label htmlFor="firstName" className="form-label">First Name *</label><input type="text" id="firstName" name="firstName" required className="form-input" placeholder="John" /></div>
                  <div><label htmlFor="lastName" className="form-label">Last Name *</label><input type="text" id="lastName" name="lastName" required className="form-input" placeholder="Smith" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label htmlFor="email" className="form-label">Email Address *</label><input type="email" id="email" name="email" required className="form-input" placeholder="john@example.com" /></div>
                  <div><label htmlFor="phone" className="form-label">Phone Number *</label><input type="tel" id="phone" name="phone" required className="form-input" placeholder="07123 456789" /></div>
                </div>
                <div>
                  <label htmlFor="businessType" className="form-label">Business Type</label>
                  <select id="businessType" name="businessType" className="form-input">
                    <option value="">Select your business type</option>
                    <option value="sole-trader">Sole Trader</option>
                    <option value="limited">Limited Company</option>
                    <option value="partnership">Partnership / LLP</option>
                    <option value="contractor">Contractor / Freelancer</option>
                    <option value="startup">Startup / Pre-Revenue</option>
                    <option value="personal">Personal Tax Only</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="service" className="form-label">Service Required</label>
                  <select id="service" name="service" className="form-input">
                    <option value="">Select a service</option>
                    <option value="accounts">Business Accounting</option>
                    <option value="tax">Tax Returns &amp; Planning</option>
                    <option value="payroll">Payroll Services</option>
                    <option value="formation">Company Formation</option>
                    <option value="vat">VAT Services</option>
                    <option value="bookkeeping">Bookkeeping</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="turnover" className="form-label">Annual Turnover (Approximate)</label>
                  <select id="turnover" name="turnover" className="form-input">
                    <option value="">Prefer not to say</option>
                    <option value="under25k">Under 25,000</option>
                    <option value="25k-85k">25,000 - 85,000</option>
                    <option value="85k-250k">85,000 - 250,000</option>
                    <option value="250k-1m">250,000 - 1,000,000</option>
                    <option value="over1m">Over 1,000,000</option>
                  </select>
                </div>
                <div><label htmlFor="message" className="form-label">Tell Us About Your Business</label><textarea id="message" name="message" rows={5} className="form-textarea" placeholder="Please briefly describe your business and what accounting support you need..."></textarea></div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
                  <label htmlFor="consent" className="text-sm text-gray-600">I consent to City Accounting Partners contacting me regarding my enquiry. I understand my data will be processed in accordance with the <a href="/accountant-city/privacy" className="text-accent hover:underline">Privacy Policy</a>. *</label>
                </div>
                <button type="submit" className="btn-accent w-full sm:w-auto">Request Consultation</button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Our Office</h2>
              <div className="location-card mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                  <div><span className="text-sm text-primary font-semibold">Moorgate</span><h3 className="text-xl font-bold text-primary">City of London, EC2</h3></div>
                </div>
                <address className="not-italic text-gray-700 mb-4"><strong>City Accounting Partners</strong><br />45 Moorgate<br />City of London<br />EC2R 6EL</address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p><strong>Opening Hours:</strong><br />Monday &ndash; Friday: 8:30am &ndash; 6:00pm<br />Saturday &amp; Sunday: Closed</p>
                </div>
                <p className="text-sm text-gray-500">2-minute walk from Moorgate station. Liverpool Street and Bank stations also nearby.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-primary mb-4">Prefer to Call or Email?</h3>
                <div className="space-y-4">
                  <a href="tel:02079463456" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                    <div><p className="font-semibold">020 7946 3456</p><p className="text-sm text-gray-500">Call us during office hours</p></div>
                  </a>
                  <a href="mailto:info@cityaccountingpartners.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                    <div><p className="font-semibold">info@cityaccountingpartners.co.uk</p><p className="text-sm text-gray-500">Email us anytime</p></div>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0!2d-0.0922!3d51.5155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzU2LjAiTiAwwrAwNScwMi4wIlc!5e0!3m2!1sen!2suk!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="City Accounting Partners Office Location"></iframe>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="container-width"><div className="fca-notice"><p><strong>Professional Standards:</strong> City Accounting Partners is an ACCA certified practice. Initial consultations are provided free of charge and without obligation. We will always explain our fees clearly before any work begins.</p></div></div>
      </section>
    </>
  );
}
