import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Music Lesson in Brixton",
  description:
    "Contact Brixton School of Music to book a trial lesson or enquire about our music tuition. Call 020 7946 4420 or visit us on Coldharbour Lane, Brixton.",
  openGraph: {
    title: "Contact Us | Brixton School of Music",
    description:
      "Book a trial lesson at Brixton School of Music. Call 020 7946 4420 or visit us on Coldharbour Lane.",
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ready to start your musical journey? Book a trial lesson, ask a
              question, or pop in for a chat. We are always happy to help.
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
                Book a Trial Lesson
              </h2>
              <p className="text-gray-600 mb-8">
                Fill in the form below and we will get back to you within 24 hours to
                arrange your trial lesson.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none"
                      placeholder="07123 456789"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Instrument / Lesson Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none"
                    >
                      <option value="">Select a lesson</option>
                      <option value="guitar">Guitar Lessons</option>
                      <option value="piano">Piano &amp; Keyboard</option>
                      <option value="vocals">Vocal Training</option>
                      <option value="drums">Drum Lessons</option>
                      <option value="theory">Music Theory</option>
                      <option value="band">Band Workshops</option>
                      <option value="other">Not Sure / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredDay" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Day(s)
                  </label>
                  <input
                    type="text"
                    id="preferredDay"
                    name="preferredDay"
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none"
                    placeholder="e.g. Tuesdays after 4pm, or Saturdays"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell Us About Yourself
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none"
                    placeholder="Your age/child's age, experience level, what you'd like to achieve..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors w-full sm:w-auto"
                >
                  Send Enquiry
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-8">
                Visit Our Studios
              </h2>

              {/* Address */}
              <div className="bg-gray-50 p-6 rounded-sm mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--primary)]">Our Address</h3>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>Brixton School of Music</strong><br />
                  29 Coldharbour Lane<br />
                  Brixton<br />
                  London SW9 8PS
                </address>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Opening Hours:</strong></p>
                  <p>Monday - Friday: 10am - 9pm</p>
                  <p>Saturday: 9am - 6pm</p>
                  <p>Sunday: 10am - 4pm</p>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="bg-gray-50 p-6 rounded-sm mb-8">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:02079464420"
                    className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">020 7946 4420</p>
                      <p className="text-sm text-gray-500">Call during opening hours</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@brixtonmusic.co.uk"
                    className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">info@brixtonmusic.co.uk</p>
                      <p className="text-sm text-gray-500">We reply within 24 hours</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Getting Here */}
              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-4">
                  Getting Here
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Brixton Underground (Victoria Line) - 4 min walk
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Oval Underground (Northern Line) - 10 min walk
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Multiple bus routes stop on Coldharbour Lane
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
            Find Us
          </h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.5!2d-0.1156!3d51.4613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI3JzQwLjciTiAwwrAwNic1Ni4yIlc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brixton School of Music Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
