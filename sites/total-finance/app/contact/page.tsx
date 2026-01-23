import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Financial Consultation",
  description:
    "Book your free financial consultation with Total Finance. Expert advice on mortgages, pensions, and protection in Bromley and Greater London. Call 020 8695 7548.",
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy text-white py-20">
        <div className="container-custom px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your Free Consultation
            </h1>
            <p className="text-xl text-gray-200">
              Take the first step towards your financial goals. Contact us today
              for a free, no-obligation consultation with one of our expert
              advisers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-light-gray rounded-xl p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Request a Consultation
                </h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
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

                  <div className="grid sm:grid-cols-2 gap-6">
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
                        placeholder="020 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="form-label">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="form-input"
                    >
                      <option value="">Select a service...</option>
                      <option value="mortgage">Mortgage Advice</option>
                      <option value="remortgage">Remortgage</option>
                      <option value="secured-loan">Secured Loan</option>
                      <option value="life-assurance">Life Assurance</option>
                      <option value="critical-illness">
                        Critical Illness Cover
                      </option>
                      <option value="income-protection">
                        Income Protection
                      </option>
                      <option value="pension">Pension Planning</option>
                      <option value="general">General Financial Advice</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferredContact" className="form-label">
                      Preferred Contact Method
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      className="form-input"
                    >
                      <option value="phone">Phone Call</option>
                      <option value="email">Email</option>
                      <option value="either">Either</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="form-label">
                      Preferred Time to Contact
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      className="form-input"
                    >
                      <option value="morning">Morning (9am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 5pm)</option>
                      <option value="evening">Evening (5pm - 7pm)</option>
                      <option value="anytime">Anytime</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">
                      Tell us about your requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="form-input"
                      placeholder="Please provide any additional details about your financial needs..."
                    ></textarea>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        className="mt-1"
                      />
                      <label htmlFor="consent" className="text-sm text-slate">
                        I consent to Total Finance (UK) Ltd contacting me
                        regarding my enquiry. I understand that my data will be
                        processed in accordance with the{" "}
                        <a
                          href="/privacy/"
                          className="text-primary hover:underline"
                        >
                          Privacy Policy
                        </a>
                        .
                      </label>
                    </div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="marketing"
                        name="marketing"
                        className="mt-1"
                      />
                      <label htmlFor="marketing" className="text-sm text-slate">
                        I would like to receive helpful financial tips and
                        updates from Total Finance (UK) Ltd.
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Request Free Consultation
                  </button>

                  <p className="text-xs text-slate text-center">
                    Your information is secure and will never be shared with
                    third parties.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Get in Touch
                </h2>
                <p className="text-slate mb-8">
                  We're here to help you make informed financial decisions.
                  Whether you prefer to call, email, or visit us in person,
                  we're ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-light-gray rounded-xl">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
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
                    <h3 className="font-bold text-navy mb-1">Phone</h3>
                    <a
                      href="tel:02086957548"
                      className="text-primary text-lg font-semibold hover:underline"
                    >
                      020 8695 7548
                    </a>
                    <p className="text-sm text-slate mt-1">
                      Available Mon-Fri 9am-6pm, Sat 9am-1pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-light-gray rounded-xl">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
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
                    <h3 className="font-bold text-navy mb-1">Email</h3>
                    <a
                      href="mailto:info@total-finance.org.uk"
                      className="text-primary text-lg font-semibold hover:underline"
                    >
                      info@total-finance.org.uk
                    </a>
                    <p className="text-sm text-slate mt-1">
                      We aim to respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-light-gray rounded-xl">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
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
                    <h3 className="font-bold text-navy mb-1">Office Address</h3>
                    <address className="not-italic text-slate">
                      Total Finance (UK) Ltd
                      <br />
                      184-190 Farnaby Road
                      <br />
                      Bromley, Greater London
                      <br />
                      BR2 0BB
                    </address>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                <h3 className="font-bold text-navy mb-3 flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Opening Hours
                </h3>
                <div className="space-y-2 text-slate">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-slate mt-4">
                  Evening and weekend appointments available by arrangement.
                </p>
              </div>

              <div className="fca-notice">
                <h4 className="font-semibold text-navy mb-2">
                  What to Expect
                </h4>
                <p className="text-sm">
                  Your initial consultation is completely free with no
                  obligation. We'll discuss your financial situation, goals, and
                  answer any questions you may have. You're under no pressure to
                  proceed with any recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.3!2d-0.0315!3d51.408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI0JzI5LjAiTiAwwrAwMSc1My40Ilc!5e0!3m2!1sen!2suk!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Total Finance Office Location"
        ></iframe>
      </section>
    </>
  );
}
