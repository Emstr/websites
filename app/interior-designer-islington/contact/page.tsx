import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Design Consultation",
  description:
    "Contact Islington Interiors to book a free design consultation. Visit our studio at 67 Upper Street, Islington N1 0NY. Call 020 7946 6670.",
  openGraph: {
    title: "Contact Us | Islington Interiors",
    description:
      "Book a free interior design consultation at our Islington studio. Call 020 7946 6670 or use our online enquiry form.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Start Your Project</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Whether you have a clear vision or just a vague feeling that your space could be better, we would love to hear from you. Book a complimentary consultation and let us explore the possibilities together.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">Tell Us About Your Project</h2>
              <p className="text-gray-600 mb-8">Fill in the form below with as much detail as you can. We will get back to you within one working day to arrange your consultation.</p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-[var(--primary)] mb-2">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="Sophie" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-[var(--primary)] mb-2">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="Hamilton" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[var(--primary)] mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="sophie@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[var(--primary)] mb-2">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="07123 456789" />
                  </div>
                </div>

                <div>
                  <label htmlFor="propertyType" className="block text-sm font-semibold text-[var(--primary)] mb-2">Property Type</label>
                  <select id="propertyType" name="propertyType" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent">
                    <option value="">Select your property type</option>
                    <option value="flat">Flat / Apartment</option>
                    <option value="terraced">Terraced House</option>
                    <option value="semi">Semi-Detached House</option>
                    <option value="detached">Detached House</option>
                    <option value="new-build">New Build</option>
                    <option value="commercial">Commercial Property</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-[var(--primary)] mb-2">Service of Interest</label>
                  <select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent">
                    <option value="">Select a service</option>
                    <option value="full-home">Full Home Design</option>
                    <option value="kitchen-bathroom">Kitchen &amp; Bathroom Design</option>
                    <option value="colour">Colour Consultation</option>
                    <option value="space-planning">Space Planning</option>
                    <option value="styling">Styling &amp; Staging</option>
                    <option value="commercial">Commercial Interiors</option>
                    <option value="not-sure">Not Sure / Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-[var(--primary)] mb-2">Approximate Budget</label>
                  <select id="budget" name="budget" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent">
                    <option value="">Prefer not to say</option>
                    <option value="under5k">Under &pound;5,000</option>
                    <option value="5k-15k">&pound;5,000 &ndash; &pound;15,000</option>
                    <option value="15k-30k">&pound;15,000 &ndash; &pound;30,000</option>
                    <option value="30k-50k">&pound;30,000 &ndash; &pound;50,000</option>
                    <option value="50k-100k">&pound;50,000 &ndash; &pound;100,000</option>
                    <option value="over100k">Over &pound;100,000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[var(--primary)] mb-2">Tell Us About Your Project</label>
                  <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="Tell us about your space, what you would like to change, any styles or looks you are drawn to, and any practical requirements..."></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-[var(--accent)] border-gray-300 rounded focus:ring-[var(--accent)]" />
                  <label htmlFor="consent" className="text-sm text-gray-600">I consent to Islington Interiors contacting me regarding my design enquiry. *</label>
                </div>

                <button type="submit" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors w-full sm:w-auto">Send Enquiry</button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-8">Visit Our Studio</h2>

              <div className="bg-gray-50 p-6 rounded-sm border-t-4 border-[var(--accent)] mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--primary)]">Islington Interiors Studio</h3>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>Islington Interiors</strong><br />67 Upper Street<br />Islington, London<br />N1 0NY
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p><strong>Opening Hours:</strong><br />Monday &ndash; Friday: 9am &ndash; 6pm<br />Saturday: By appointment<br />Sunday: Closed</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm mb-8">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-4">Getting Here</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Angel station &mdash; 3 minute walk (Northern line)</li>
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Highbury &amp; Islington station &mdash; 6 minute walk (Victoria, Overground)</li>
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>King&apos;s Cross station &mdash; 10 minute walk (multiple lines)</li>
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>On-street parking and nearby car parks available</li>
                </ul>
              </div>

              {/* Direct Contact */}
              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-4">Prefer to Call or Email?</h3>
                <div className="space-y-4">
                  <a href="tel:02079466670" className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors">
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold">020 7946 6670</p>
                      <p className="text-sm text-gray-500">Call us during studio hours</p>
                    </div>
                  </a>
                  <a href="mailto:studio@islingtoninteriors.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors">
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold">studio@islingtoninteriors.co.uk</p>
                      <p className="text-sm text-gray-500">Email us anytime</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">Find Our Studio</h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.5!2d-0.1031!3d51.5362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMyJzEwLjMiTiAwwrAwNicxMS4yIlc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Islington Interiors Studio Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
