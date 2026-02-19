import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Dental Appointment",
  description:
    "Contact Clapham Dental Practice to book your appointment. NHS and private patients welcome. Call 020 7946 1234 or book online. Evening appointments available Monday to Thursday.",
  openGraph: {
    title: "Contact Us | Clapham Dental Practice",
    description:
      "Book your dental appointment at Clapham Dental Practice. NHS and private patients welcome. Evening appointments available. Call 020 7946 1234.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 font-serif">Contact Us</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Ready to book your appointment? Get in touch online, by phone, or simply pop in. New patients are always welcome at Clapham Dental Practice.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2 font-serif">Book Your Appointment</h2>
              <p className="text-gray-600 mb-8">Fill in the form below and our reception team will contact you to confirm your appointment. For urgent issues, please call us directly.</p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all" placeholder="Jane" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all" placeholder="Smith" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all" placeholder="07123 456789" />
                  </div>
                </div>

                <div>
                  <label htmlFor="patientType" className="block text-sm font-semibold text-gray-700 mb-2">Patient Type</label>
                  <select id="patientType" name="patientType" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all">
                    <option value="">Please select</option>
                    <option value="new-nhs">New Patient — NHS</option>
                    <option value="new-private">New Patient — Private</option>
                    <option value="existing">Existing Patient</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Required</label>
                  <select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all">
                    <option value="">Select a service</option>
                    <option value="check-up">Check-up &amp; Examination</option>
                    <option value="hygiene">Hygiene Appointment</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="implants">Dental Implants</option>
                    <option value="invisalign">Invisalign Consultation</option>
                    <option value="emergency">Emergency Appointment</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">Preferred Appointment Time</label>
                  <select id="preferredTime" name="preferredTime" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all">
                    <option value="">No preference</option>
                    <option value="morning">Morning (8am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="evening">Evening (5pm - 8pm, Mon-Thu)</option>
                    <option value="saturday">Saturday Morning</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Additional Information</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all" placeholder="Please tell us about any dental concerns, medical conditions, or special requirements..."></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-[var(--accent)] border-gray-300 rounded focus:ring-[var(--accent)]" />
                  <label htmlFor="consent" className="text-sm text-gray-600">I consent to Clapham Dental Practice contacting me regarding my enquiry. My data will be processed in accordance with data protection regulations. *</label>
                </div>

                <button type="submit" className="bg-[var(--accent)] text-white px-8 py-3 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors w-full sm:w-auto">Request Appointment</button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-8 font-serif">Practice Information</h2>

              <div className="bg-gray-50 p-6 rounded-sm border-t-4 border-[var(--primary)] mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <span className="text-sm text-[var(--primary)] font-semibold">Our Practice</span>
                    <h3 className="text-xl font-bold text-[var(--primary)] font-serif">Clapham Dental Practice</h3>
                  </div>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>Clapham Dental Practice</strong><br />
                  87 Clapham High Street<br />
                  Clapham<br />
                  London SW4 7TB
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>
                    <strong>Opening Hours:</strong><br />
                    Monday — Thursday: 8:00am — 8:00pm<br />
                    Friday: 8:00am — 6:00pm<br />
                    Saturday: 9:00am — 2:00pm<br />
                    Sunday: Closed
                  </p>
                </div>
                <p className="text-sm text-gray-500">Near Clapham High Street Overground, Clapham Common and Clapham North tube stations. Street parking available on surrounding roads.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm mb-8">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-4 font-serif">Prefer to Call or Email?</h3>
                <div className="space-y-4">
                  <a href="tel:02079461234" className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors">
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold">020 7946 1234</p>
                      <p className="text-sm text-gray-500">Call us during opening hours</p>
                    </div>
                  </a>
                  <a href="mailto:reception@claphamdental.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors">
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold">reception@claphamdental.co.uk</p>
                      <p className="text-sm text-gray-500">Email us anytime</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-[var(--primary)] p-6 rounded-sm text-white">
                <h3 className="text-lg font-bold mb-3 font-serif">Dental Emergency?</h3>
                <p className="text-gray-200 mb-4 text-sm">If you&apos;re experiencing severe pain, a knocked-out tooth, or uncontrolled bleeding, call us immediately for a same-day emergency appointment.</p>
                <a href="tel:02079461234" className="bg-[var(--accent)] text-white px-6 py-3 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block text-sm">Call Now: 020 7946 1234</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center font-serif">Find Us in Clapham</h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.5!2d-0.1380!3d51.4620!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI3JzQzLjIiTiAwwrAwOCcxNi44Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clapham Dental Practice Location"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-600">
            <p><strong>GDC Registered:</strong> All dentists at Clapham Dental Practice are registered with the General Dental Council. We are regulated by the Care Quality Commission (CQC). NHS treatments are provided subject to eligibility. Private treatment fees will be explained before any treatment begins.</p>
          </div>
        </div>
      </section>
    </>
  );
}
