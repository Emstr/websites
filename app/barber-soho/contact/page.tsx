import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book Your Chair",
  description:
    "Book an appointment at Soho Barber Co or walk in any time. Located at 42 Berwick Street, Soho, London W1. Call 020 7946 7890.",
  openGraph: {
    title: "Contact Us | Soho Barber Co",
    description:
      "Book your chair at Soho Barber Co. Walk-ins welcome or book ahead. 42 Berwick Street, Soho W1.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Book Your Chair
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Walk in any time or book ahead to guarantee your spot. We&apos;re open
              seven days a week right in the heart of Soho.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">
                Book an Appointment
              </h2>
              <p className="text-gray-600 mb-8">
                Fill in the form below and we&apos;ll confirm your booking. Or just
                walk in &mdash; we always welcome drop-ins.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                      placeholder="07123 456789"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent">
                    <option value="">Select a service</option>
                    <option value="classic-cut">Classic Cut</option>
                    <option value="beard-trim">Beard Trim &amp; Shaping</option>
                    <option value="hot-towel-shave">Hot Towel Shave</option>
                    <option value="cut-and-shave">Cut &amp; Shave Combo</option>
                    <option value="hair-styling">Hair Styling</option>
                    <option value="colour">Colour &amp; Grey Blending</option>
                    <option value="wedding">Wedding &amp; Event Grooming</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date &amp; Time
                  </label>
                  <input
                    type="text"
                    id="preferredDate"
                    name="preferredDate"
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                    placeholder="e.g. Saturday morning, or any weekday lunchtime"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Anything Else?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                    placeholder="Let us know if you have any specific requests or questions..."
                  ></textarea>
                </div>

                <button type="submit" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors w-full sm:w-auto">
                  Book My Chair
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-8">
                Visit the Shop
              </h2>

              {/* Shop Details */}
              <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-[var(--accent)] mb-8">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4">Soho Barber Co</h3>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>42 Berwick Street</strong>
                  <br />
                  Soho, London W1F 8SE
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>
                    <strong>Opening Hours:</strong>
                    <br />
                    Monday &ndash; Friday: 9:00am &ndash; 7:00pm
                    <br />
                    Saturday: 9:00am &ndash; 6:00pm
                    <br />
                    Sunday: 10:00am &ndash; 4:00pm
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Walk-ins welcome all day, every day. No appointment needed &mdash;
                  just pop in.
                </p>
              </div>

              {/* Direct Contact */}
              <div className="bg-gray-50 p-6 rounded-sm mb-8">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-4">
                  Get in Touch Directly
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:02079467890"
                    className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">020 7946 7890</p>
                      <p className="text-sm text-gray-500">Call during opening hours</p>
                    </div>
                  </a>
                  <a
                    href="mailto:hello@sohobarber.co.uk"
                    className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">hello@sohobarber.co.uk</p>
                      <p className="text-sm text-gray-500">Email us anytime</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Getting Here */}
              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-4">Getting Here</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Oxford Circus</strong> &mdash; 2 min walk (Central, Victoria, Bakerloo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Tottenham Court Road</strong> &mdash; 5 min walk (Central, Northern, Elizabeth)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Piccadilly Circus</strong> &mdash; 6 min walk (Piccadilly, Bakerloo)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">
            Find Us on Berwick Street
          </h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0!2d-0.1365!3d51.5133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzQ4LjAiTiAwwrAwOCcxMS40Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Soho Barber Co Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
