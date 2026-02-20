import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book Your MOT, Service or Repair",
  description:
    "Contact Bermondsey Motors to book your MOT, service or repair. Unit 7, 38 Tanner Street, Bermondsey SE1 3LD. Call 020 7946 8810 or book online.",
  openGraph: {
    title: "Contact Us | Bermondsey Motors",
    description:
      "Book your MOT, service or repair at Bermondsey Motors. Call 020 7946 8810 or use our online booking form.",
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Book Your Vehicle In</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Whether you need an MOT, a service, or a repair, book online or give us a call. We aim to get back to you within the hour during working hours.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">Book Online</h2>
              <p className="text-gray-600 mb-8">Fill in the form below and we will get back to you to confirm your booking. For urgent enquiries, please call us directly.</p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-[var(--primary)] mb-2">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-[var(--primary)] mb-2">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="Smith" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[var(--primary)] mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[var(--primary)] mb-2">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="07123 456789" />
                  </div>
                </div>

                <div>
                  <label htmlFor="registration" className="block text-sm font-semibold text-[var(--primary)] mb-2">Vehicle Registration</label>
                  <input type="text" id="registration" name="registration" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="AB12 CDE" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-[var(--primary)] mb-2">Service Required</label>
                  <select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent">
                    <option value="">Select a service</option>
                    <option value="mot">MOT Testing</option>
                    <option value="full-service">Full Service</option>
                    <option value="interim-service">Interim Service</option>
                    <option value="brakes">Brake Repairs</option>
                    <option value="diagnostics">Diagnostics</option>
                    <option value="tyres">Tyre Fitting</option>
                    <option value="air-con">Air Conditioning</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-semibold text-[var(--primary)] mb-2">Preferred Date</label>
                  <input type="date" id="preferredDate" name="preferredDate" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[var(--primary)] mb-2">Tell Us More About the Issue</label>
                  <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="Describe the problem or what you need done. The more detail you give us, the better prepared we will be..."></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-[var(--accent)] border-gray-300 rounded focus:ring-[var(--accent)]" />
                  <label htmlFor="consent" className="text-sm text-gray-600">I consent to Bermondsey Motors contacting me regarding my booking enquiry. *</label>
                </div>

                <button type="submit" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors w-full sm:w-auto">Submit Booking Request</button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-8">Visit or Call Us</h2>

              <div className="bg-gray-50 p-6 rounded-sm border-t-4 border-[var(--accent)] mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--primary)]">Our Workshop</h3>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>Bermondsey Motors</strong><br />Unit 7, 38 Tanner Street<br />Bermondsey, London<br />SE1 3LD
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p><strong>Opening Hours:</strong><br />Monday &ndash; Friday: 8am &ndash; 6pm<br />Saturday: 8am &ndash; 1pm<br />Sunday: Closed</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm mb-8">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-4">Getting Here</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Bermondsey station &mdash; 5 minute walk (Jubilee line)</li>
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>London Bridge station &mdash; 8 minute walk (Northern, Jubilee)</li>
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Borough station &mdash; 10 minute walk (Northern line)</li>
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Street parking available on Tanner Street and nearby roads</li>
                </ul>
              </div>

              {/* Direct Contact */}
              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-4">Prefer to Call or Email?</h3>
                <div className="space-y-4">
                  <a href="tel:02079468810" className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors">
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold">020 7946 8810</p>
                      <p className="text-sm text-gray-500">Call us during opening hours</p>
                    </div>
                  </a>
                  <a href="mailto:bookings@bermondseymotors.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors">
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold">bookings@bermondseymotors.co.uk</p>
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
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">Find Us on the Map</h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5!2d-0.0778!3d51.4975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI5JzUxLjAiTiAwwrAwNCc0MC4xIlc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bermondsey Motors Workshop Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
