import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Security Quote",
  description: "Contact Stratford Security Solutions for a free security assessment and quote. Visit us in Stratford or call 020 7946 9920. 24/7 operations centre.",
  openGraph: {
    title: "Contact Us | Stratford Security Solutions",
    description: "Get a free security quote. Call 020 7946 9920 or visit our Stratford office.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Request a free security assessment, get a quote or speak to one of our team about your requirements. Our operations centre is staffed 24/7.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Request a Free Quote</h2>
              <p className="text-gray-600 mb-8">Complete the form and one of our security consultants will contact you within 24 hours.</p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required className="form-input" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required className="form-input" placeholder="Smith" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input type="email" id="email" name="email" required className="form-input" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required className="form-input" placeholder="07123 456789" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="form-label">Service Required</label>
                  <select id="service" name="service" className="form-input">
                    <option value="">Select a service</option>
                    <option value="guarding">Manned Guarding</option>
                    <option value="cctv">CCTV Installation</option>
                    <option value="events">Event Security</option>
                    <option value="patrols">Mobile Patrols</option>
                    <option value="keyholding">Key Holding</option>
                    <option value="risk">Risk Assessment</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="preferredDate" className="form-label">Preferred Contact Date</label>
                  <input type="text" id="preferredDate" name="preferredDate" className="form-input" placeholder="e.g. As soon as possible" />
                </div>
                <div>
                  <label htmlFor="message" className="form-label">Tell Us About Your Security Needs</label>
                  <textarea id="message" name="message" rows={5} className="form-textarea" placeholder="Please describe your site, the type of security you need, and any urgency..."></textarea>
                </div>
                <button type="submit" className="btn-accent w-full sm:w-auto">Request Quote</button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Our Office</h2>
              <div className="location-card mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-primary font-semibold">Stratford</span>
                    <h3 className="text-xl font-bold text-primary">Head Office & Control Room</h3>
                  </div>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>Stratford Security Solutions</strong><br />
                  Unit 12, 80 High Street<br />
                  Stratford<br />
                  London E15 2QS
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p><strong>Office Hours:</strong><br />Monday - Friday: 8:00am - 6:00pm</p>
                  <p><strong>Operations Centre:</strong><br />24 hours, 7 days a week</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm mb-8">
                <h3 className="text-lg font-bold text-primary mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <a href="tel:02079469920" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div><p className="font-semibold">020 7946 9920</p><p className="text-sm text-gray-500">Call us anytime</p></div>
                  </a>
                  <a href="mailto:info@stratfordsecurity.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div><p className="font-semibold">info@stratfordsecurity.co.uk</p><p className="text-sm text-gray-500">Email us anytime</p></div>
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-primary mb-4">Getting Here</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <p><strong>Stratford:</strong> 3-minute walk</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <p><strong>Stratford International:</strong> 5-minute walk</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <p><strong>Maryland:</strong> 8-minute walk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
