import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Financial Consultation in Wimbledon",
  description:
    "Contact MFS Independent Financial Advisers for expert financial advice. Visit our offices at 235 The Broadway, Wimbledon. Call 020 8543 6244 for a free consultation.",
  openGraph: {
    title: "Contact Us | MFS Independent Financial Advisers",
    description:
      "Book a free consultation with our Chartered Financial Planners at our Wimbledon office. Call 020 8543 6244.",
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
              Ready to take the next step? Book a complimentary consultation at
              our Wimbledon office or reach out to discuss your financial planning
              needs with one of our Chartered Financial Planners.
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
                will contact you to arrange a convenient time for your complimentary
                initial meeting.
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
                    <option value="office">Wimbledon Office - 235 The Broadway</option>
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
                    <option value="tax">Tax Planning</option>
                    <option value="protection">Life &amp; Critical Illness Protection</option>
                    <option value="iht">Inheritance Tax Mitigation</option>
                    <option value="corporate">Corporate Services</option>
                    <option value="mortgage">Mortgage &amp; Commercial Loans</option>
                    <option value="lifetime">Lifetime Financial Planning</option>
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
                    I consent to MFS Independent Financial Advisers contacting
                    me regarding my enquiry. I understand my data will be processed in
                    accordance with the{" "}
                    <a href="/mfs-financial-advisers/privacy" className="text-accent hover:underline">
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
                Our Wimbledon Office
              </h2>

              {/* Office Details */}
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-accent font-semibold">
                      Established 1964
                    </span>
                    <h3 className="text-xl font-bold text-primary">The Broadway, Wimbledon</h3>
                  </div>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>MFS Independent Financial Advisers</strong>
                  <br />
                  235 The Broadway
                  <br />
                  Wimbledon
                  <br />
                  London SW19 1SD
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>
                    <strong>Opening Hours:</strong>
                    <br />
                    Monday - Friday: 9:00am - 6:00pm
                    <br />
                    Saturday: By appointment
                    <br />
                    Sunday: Closed
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Prominent High Street offices near Wimbledon station (District line,
                  Thameslink). Wimbledon tram stop and bus routes nearby. On-street
                  parking and nearby car parks available.
                </p>
              </div>

              {/* Direct Contact */}
              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-primary mb-4">
                  Prefer to Call or Email?
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:02085436244"
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
                      <p className="font-semibold">020 8543 6244</p>
                      <p className="text-sm text-gray-500">
                        Call us during office hours
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@mfs-group.co.uk"
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
                      <p className="font-semibold">info@mfs-group.co.uk</p>
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
            Find Our Wimbledon Office
          </h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.5!2d-0.2064!3d51.4214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI1JzE3LjAiTiAwwrAxMiczOC4zIlc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MFS Independent Financial Advisers Wimbledon Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> MFS Independent Financial Advisers
              is authorised and regulated by the Financial Conduct Authority. Initial
              consultations are provided free of charge and without obligation. We will
              always explain our fees clearly before any work begins.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
