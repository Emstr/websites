import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Financial Consultation",
  description:
    "Contact David Williams IFA for expert Chartered financial advice. Visit our Northampton office or arrange a meeting anywhere in the UK. Call 01604 621302 for a free consultation.",
  openGraph: {
    title: "Contact Us | David Williams IFA",
    description:
      "Book a free consultation with our Chartered Financial Planners. Call 01604 621302 or visit us at 5 Waterside Way, Northampton.",
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ready to take the next step? Book a complimentary consultation at our
              Northampton office or arrange a meeting at a location that suits you.
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
                Book Your Free Consultation
              </h2>
              <p className="text-gray-600 mb-8">
                Complete the form below and one of our Chartered Financial Planners
                will contact you to arrange a convenient time for your initial meeting.
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
                      placeholder="John"
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
                      placeholder="Smith"
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
                      placeholder="john@example.com"
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

                <div>
                  <label htmlFor="meetingPreference" className="form-label">
                    Meeting Preference
                  </label>
                  <select
                    id="meetingPreference"
                    name="meetingPreference"
                    className="form-input"
                  >
                    <option value="">Select your preference</option>
                    <option value="office">Northampton Office - 5 Waterside Way</option>
                    <option value="home">Home Visit</option>
                    <option value="video">Video Call</option>
                    <option value="phone">Phone Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="form-label">
                    Service of Interest
                  </label>
                  <select id="service" name="service" className="form-input">
                    <option value="">Select a service</option>
                    <option value="investment">Investment Planning</option>
                    <option value="pension">Pension Planning</option>
                    <option value="tax-estate">Tax &amp; Estate Planning</option>
                    <option value="iht">Inheritance Tax Planning</option>
                    <option value="trusts">Trust Planning</option>
                    <option value="cashflow">Cashflow Modelling</option>
                    <option value="mortgage">Mortgage Services</option>
                    <option value="protection">Protection</option>
                    <option value="corporate">Corporate Services</option>
                    <option value="charity">Charity Financial Advice</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="investmentAmount" className="form-label">
                    Approximate Investment/Pension Value
                  </label>
                  <select
                    id="investmentAmount"
                    name="investmentAmount"
                    className="form-input"
                  >
                    <option value="">Prefer not to say</option>
                    <option value="under50k">Under 50,000</option>
                    <option value="50k-100k">50,000 - 100,000</option>
                    <option value="100k-250k">100,000 - 250,000</option>
                    <option value="250k-500k">250,000 - 500,000</option>
                    <option value="500k-1m">500,000 - 1,000,000</option>
                    <option value="over1m">Over 1,000,000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Tell Us About Your Financial Goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="form-textarea"
                    placeholder="Please briefly describe your current situation and what you're hoping to achieve..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to David Williams IFA Ltd contacting me regarding my
                    enquiry. I understand my data will be processed in accordance with
                    the{" "}
                    <a href="/david-williams-ifa/privacy" className="text-accent hover:underline">
                      Privacy Policy
                    </a>
                    . *
                  </label>
                </div>

                <button type="submit" className="btn-accent w-full sm:w-auto">
                  Request Consultation
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                Our Office
              </h2>

              {/* Northampton Office */}
              <div className="location-card mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
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
                    <span className="text-sm text-primary font-semibold">Head Office</span>
                    <h3 className="text-xl font-bold text-primary">Northampton</h3>
                  </div>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>David Williams IFA</strong>
                  <br />
                  5 Waterside Way
                  <br />
                  Northampton
                  <br />
                  NN4 7XD
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>
                    <strong>Opening Hours:</strong>
                    <br />
                    Monday - Friday: 9:00am - 5:30pm
                    <br />
                    Saturday &amp; Sunday: Closed
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Free on-site parking available. Easily accessible from the A45 and M1.
                </p>
              </div>

              {/* Meeting Options */}
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
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-accent font-semibold">
                      Flexible Meetings
                    </span>
                    <h3 className="text-xl font-bold text-primary">We Come to You</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  We understand that visiting our office is not always convenient.
                  We are happy to arrange meetings at your home, workplace, or via
                  video call — whatever works best for your schedule.
                </p>
                <p className="text-sm text-gray-500">
                  We serve clients across the East Midlands, Home Counties, London,
                  and nationally.
                </p>
              </div>

              {/* Direct Contact */}
              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-primary mb-4">
                  Prefer to Call or Email?
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:01604621302"
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
                      <p className="font-semibold">01604 621302</p>
                      <p className="text-sm text-gray-500">
                        Call us during office hours
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@dwifa.co.uk"
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
                      <p className="font-semibold">info@dwifa.co.uk</p>
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

      {/* Map Section */}
      <section className="bg-gray-100">
        <div className="container-width py-8">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            Find Our Northampton Office
          </h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.5!2d-0.8957!3d52.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEzJzQ2LjkiTiAwwrA1Myc0NC41Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="David Williams IFA Northampton Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> David Williams IFA is a trading name of
              David Williams IFA Ltd, which is authorised and regulated by the Financial
              Conduct Authority (FCA No. 530750). Initial consultations are provided free
              of charge and without obligation. We will always explain our fees clearly
              before any work begins.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
