import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Reservations | Book Your Table",
  description:
    "Book a table at Soho Kitchen & Bar, 34 Dean Street, Soho. Call 020 7946 6640 or book online. Private dining and corporate event enquiries welcome.",
  openGraph: {
    title: "Contact & Reservations | Soho Kitchen & Bar",
    description:
      "Reserve your table at Soho Kitchen & Bar. Call 020 7946 6640 or book online.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Contact & Reservations
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Book your table, enquire about private dining or get in touch about
              corporate events. We would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Make a Reservation
              </h2>
              <p className="text-gray-600 mb-8">
                Complete the form below and our team will confirm your booking
                within 24 hours. For same-day reservations, please call us directly.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="form-label">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="form-input"
                      placeholder="James"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="form-label">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="form-input"
                      placeholder="Wilson"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-input"
                      placeholder="james@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="form-input"
                      placeholder="07123 456789"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="form-label">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="form-label">
                      Preferred Time *
                    </label>
                    <select id="time" name="time" required className="form-input">
                      <option value="">Select a time</option>
                      <option value="12:00">12:00 pm</option>
                      <option value="12:30">12:30 pm</option>
                      <option value="13:00">1:00 pm</option>
                      <option value="13:30">1:30 pm</option>
                      <option value="14:00">2:00 pm</option>
                      <option value="17:00">5:00 pm</option>
                      <option value="17:30">5:30 pm</option>
                      <option value="18:00">6:00 pm</option>
                      <option value="18:30">6:30 pm</option>
                      <option value="19:00">7:00 pm</option>
                      <option value="19:30">7:30 pm</option>
                      <option value="20:00">8:00 pm</option>
                      <option value="20:30">8:30 pm</option>
                      <option value="21:00">9:00 pm</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="guests" className="form-label">
                      Number of Guests *
                    </label>
                    <select id="guests" name="guests" required className="form-input">
                      <option value="">Select</option>
                      <option value="1">1 guest</option>
                      <option value="2">2 guests</option>
                      <option value="3">3 guests</option>
                      <option value="4">4 guests</option>
                      <option value="5">5 guests</option>
                      <option value="6">6 guests</option>
                      <option value="7-10">7-10 guests</option>
                      <option value="11-20">11-20 guests (private dining)</option>
                      <option value="20+">20+ guests (private dining)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="occasion" className="form-label">
                      Occasion
                    </label>
                    <select id="occasion" name="occasion" className="form-input">
                      <option value="">Select (optional)</option>
                      <option value="casual">Casual Dining</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business Dinner</option>
                      <option value="pre-theatre">Pre-Theatre</option>
                      <option value="celebration">Celebration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Special Requests or Dietary Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-textarea"
                    placeholder="Please let us know about any allergies, dietary requirements or special requests..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-accent w-full sm:w-auto">
                  Request Reservation
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                Visit Us
              </h2>

              {/* Address */}
              <div className="location-card mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-accent font-semibold">Our Address</span>
                    <h3 className="text-xl font-bold text-primary">Dean Street, Soho</h3>
                  </div>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>Soho Kitchen & Bar</strong>
                  <br />
                  34 Dean Street
                  <br />
                  Soho
                  <br />
                  London W1D 4PR
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>
                    <strong>Opening Hours:</strong>
                    <br />
                    Monday - Thursday: 12pm - 11pm
                    <br />
                    Friday - Saturday: 12pm - 12am
                    <br />
                    Sunday: 12pm - 10pm
                  </p>
                </div>
              </div>

              {/* Getting Here */}
              <div className="location-card mb-8">
                <h3 className="text-lg font-bold text-primary mb-4">Getting Here</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Tottenham Court Road — 3 minute walk
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Leicester Square — 4 minute walk
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Piccadilly Circus — 5 minute walk
                  </li>
                </ul>
              </div>

              {/* Direct Contact */}
              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-primary mb-4">
                  Prefer to Call or Email?
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:02079466640"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">020 7946 6640</p>
                      <p className="text-sm text-gray-500">Call during opening hours</p>
                    </div>
                  </a>
                  <a
                    href="mailto:reservations@sohokitchenbar.co.uk"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">reservations@sohokitchenbar.co.uk</p>
                      <p className="text-sm text-gray-500">Email us anytime</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-100">
        <div className="container-width py-8">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            Find Us on Dean Street
          </h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0!2d-0.1317!3d51.5138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzQ5LjciTiAwwrAwNyc1NC4xIlc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Soho Kitchen & Bar Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
