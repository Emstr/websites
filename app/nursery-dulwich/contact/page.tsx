import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Nursery Visit in Dulwich",
  description: "Contact Dulwich Day Nursery to book a visit or enquire about a place. Call 020 7946 2290 or visit us at 14 Village Way, Dulwich.",
  openGraph: { title: "Contact Us | Dulwich Day Nursery", description: "Book a visit to our Ofsted Outstanding nursery in Dulwich Village. Call 020 7946 2290." },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 leading-relaxed">We would love to hear from you. Book a visit, enquire about availability, or ask us anything about our nursery.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">Book a Visit</h2>
              <p className="text-gray-600 mb-8">Fill in the form below and our admissions team will be in touch within one working day to arrange your visit.</p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Parent/Guardian Name *</label><input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none" placeholder="Your name" /></div>
                  <div><label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label><input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none" placeholder="you@example.com" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label><input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none" placeholder="07123 456789" /></div>
                  <div><label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Room / Programme</label><select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none"><option value="">Select a room</option><option value="baby">Baby Room (3-12 months)</option><option value="toddler">Toddler Room (1-2 years)</option><option value="preschool">Pre-School (2-4 years)</option><option value="afterschool">After-School Club</option><option value="holiday">Holiday Club</option><option value="forest">Forest School</option></select></div>
                </div>
                <div><label htmlFor="startDate" className="block text-sm font-semibold text-gray-700 mb-2">Preferred Start Date</label><input type="date" id="startDate" name="startDate" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none" /></div>
                <div><label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Tell Us About Your Child</label><textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none" placeholder="Child's name, age, any special requirements or questions you have..."></textarea></div>
                <button type="submit" className="bg-[var(--accent)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors w-full sm:w-auto">Send Enquiry</button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-8">Visit Our Nursery</h2>
              <div className="bg-gray-50 p-6 rounded-sm mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                  <h3 className="text-xl font-bold text-[var(--primary)]">Our Address</h3>
                </div>
                <address className="not-italic text-gray-700 mb-4"><strong>Dulwich Day Nursery</strong><br />14 Village Way<br />Dulwich<br />London SE21 7AW</address>
                <div className="space-y-2 text-gray-600"><p><strong>Opening Hours:</strong></p><p>Monday - Friday: 7:30am - 6:30pm</p><p>Weekends: Closed</p></div>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm mb-8">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <a href="tel:02079462290" className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors">
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                    <div><p className="font-semibold">020 7946 2290</p><p className="text-sm text-gray-500">Call during opening hours</p></div>
                  </a>
                  <a href="mailto:admissions@dulwichdaynursery.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors">
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                    <div><p className="font-semibold">admissions@dulwichdaynursery.co.uk</p><p className="text-sm text-gray-500">We reply within one working day</p></div>
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-4">Getting Here</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>West Dulwich rail station - 5 min walk</li>
                  <li className="flex items-center gap-2"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>North Dulwich rail station - 8 min walk</li>
                  <li className="flex items-center gap-2"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Free on-street parking on Village Way</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">Find Us</h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.0!2d-0.0834!3d51.4454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI2JzQzLjQiTiAwwrAwNScwMC4yIlc!5e0!3m2!1sen!2suk!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Dulwich Day Nursery Location"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
