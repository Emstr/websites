import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Pest Control Quote",
  description:
    "Contact Wandsworth Pest Solutions for a free pest control quote. Same-day service available. Call 020 7946 8123 or fill in our online form.",
  openGraph: {
    title: "Contact Us | Wandsworth Pest Solutions",
    description: "Get a free pest control quote. Same-day callouts in Wandsworth and South West London.",
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
            <p className="text-xl text-gray-200 leading-relaxed">
              Got a pest problem? Call us now or fill in the form for a free,
              no-obligation quote. Same-day service available.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Request a Free Quote</h2>
              <p className="text-gray-600 mb-8">
                Tell us about your pest problem and we&apos;ll get back to you with
                a free quote, usually within the hour.
              </p>
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
                    <input type="email" id="email" name="email" required className="form-input" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required className="form-input" placeholder="07123 456789" />
                  </div>
                </div>
                <div>
                  <label htmlFor="postcode" className="form-label">Postcode *</label>
                  <input type="text" id="postcode" name="postcode" required className="form-input" placeholder="SW18" />
                </div>
                <div>
                  <label htmlFor="pestType" className="form-label">Type of Pest</label>
                  <select id="pestType" name="pestType" className="form-input">
                    <option value="">Select pest type</option>
                    <option value="rats">Rats</option>
                    <option value="mice">Mice</option>
                    <option value="wasps">Wasps</option>
                    <option value="bed-bugs">Bed Bugs</option>
                    <option value="cockroaches">Cockroaches</option>
                    <option value="foxes">Foxes</option>
                    <option value="ants">Ants</option>
                    <option value="fleas">Fleas</option>
                    <option value="moths">Moths</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="propertyType" className="form-label">Property Type</label>
                  <select id="propertyType" name="propertyType" className="form-input">
                    <option value="">Select property type</option>
                    <option value="house">House</option>
                    <option value="flat">Flat</option>
                    <option value="restaurant">Restaurant / Cafe</option>
                    <option value="office">Office</option>
                    <option value="shop">Shop / Retail</option>
                    <option value="warehouse">Warehouse</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="form-label">Describe the Problem</label>
                  <textarea id="message" name="message" rows={5} className="form-textarea" placeholder="Where have you seen the pest? How long has the problem been ongoing?"></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to Wandsworth Pest Solutions contacting me regarding my enquiry. *
                  </label>
                </div>
                <button type="submit" className="btn-accent w-full sm:w-auto">Request Free Quote</button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Our Details</h2>
              <div className="location-card mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-primary font-semibold">Office</span>
                    <h3 className="text-xl font-bold text-primary">Wandsworth, SW18</h3>
                  </div>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>Wandsworth Pest Solutions</strong><br />
                  45 Garratt Lane<br />Wandsworth<br />London SW18 4DQ
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p><strong>Opening Hours:</strong><br />Monday - Friday: 7:00am - 7:00pm<br />Saturday: 8:00am - 4:00pm<br />Sunday: Emergency callouts only</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-primary mb-4">Call Us Now</h3>
                <div className="space-y-4">
                  <a href="tel:02079468123" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold">020 7946 8123</p>
                      <p className="text-sm text-gray-500">Same-day callouts available</p>
                    </div>
                  </a>
                  <a href="mailto:info@wandsworthpest.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold">info@wandsworthpest.co.uk</p>
                      <p className="text-sm text-gray-500">We reply within the hour</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container-width py-8">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Find Us</h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.5!2d-0.191!3d51.455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI3JzE4LjAiTiAwwrAxMSczMi42Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Wandsworth Pest Solutions Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
