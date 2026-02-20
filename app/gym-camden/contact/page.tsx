import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Book Your Free Trial Session",
  description:
    "Book a free trial session at Camden Strength & Fitness. Unit 3, 56 Chalk Farm Road, Camden NW1 8AN. Call 020 7946 3350.",
  openGraph: {
    title: "Contact | Camden Strength & Fitness",
    description:
      "Book your free trial session at Camden Strength & Fitness in Camden.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Start Training Today
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Whether you want to book a free trial, ask about memberships or
              find out more about our coaching — we are here to help. Fill in
              the form or give us a call.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Book Your Free Trial
              </h2>
              <p className="text-gray-600 mb-8">
                Complete the form below and we will get back to you within 24
                hours to book your free session.
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
                      placeholder="Alex"
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
                      placeholder="Turner"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-input"
                      placeholder="alex@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">
                      Phone *
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

                <div>
                  <label htmlFor="interest" className="form-label">
                    What Are You Interested In? *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="form-input"
                  >
                    <option value="">Select</option>
                    <option value="trial">Free Trial Session</option>
                    <option value="membership">Membership Enquiry</option>
                    <option value="pt">Personal Training</option>
                    <option value="hiit">HIIT Classes</option>
                    <option value="olympic">Olympic Lifting</option>
                    <option value="boxing">Boxing Fitness</option>
                    <option value="nutrition">Nutritional Coaching</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="form-label">
                    Training Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    className="form-input"
                  >
                    <option value="">Select</option>
                    <option value="beginner">
                      Beginner (less than 6 months)
                    </option>
                    <option value="intermediate">
                      Intermediate (6 months - 2 years)
                    </option>
                    <option value="advanced">Advanced (2+ years)</option>
                    <option value="competitive">
                      Competitive / Athlete
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Tell Us About Your Goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-textarea"
                    placeholder="What are you looking to achieve? Any injuries or conditions we should know about?"
                  ></textarea>
                </div>

                <button type="submit" className="btn-accent w-full sm:w-auto">
                  Book My Free Trial
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                Visit Our Gym
              </h2>

              <div className="location-card mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-accent font-semibold">
                      Our Gym
                    </span>
                    <h3 className="text-xl font-bold text-primary">
                      Chalk Farm Road
                    </h3>
                  </div>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>Camden Strength & Fitness</strong>
                  <br />
                  Unit 3, 56 Chalk Farm Road
                  <br />
                  Camden
                  <br />
                  London NW1 8AN
                </address>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Opening Hours:</strong>
                    <br />
                    Mon-Fri: 5am - 10pm
                    <br />
                    Sat: 7am - 8pm
                    <br />
                    Sun: 8am - 6pm
                  </p>
                </div>
              </div>

              <div className="location-card mb-8">
                <h3 className="text-lg font-bold text-primary mb-4">
                  Getting Here
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Chalk Farm tube — 3 minute walk
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Camden Town tube — 5 minute walk
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Kentish Town tube — 8 minute walk
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-primary mb-4">
                  Call or Email
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:02079463350"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">020 7946 3350</p>
                      <p className="text-sm text-gray-500">
                        During opening hours
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@camdenstrength.co.uk"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">
                        info@camdenstrength.co.uk
                      </p>
                      <p className="text-sm text-gray-500">
                        Email us anytime
                      </p>
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
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            Find Us in Camden
          </h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.8!2d-0.1459!3d51.5415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMyJzI5LjQiTiAwwrAwOCc0NS4yIlc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Camden Strength & Fitness Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
