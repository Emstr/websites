import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book Your Free 45-Minute Consultation",
  description:
    "Book your free 45-minute financial consultation with The Independent Advice Bureau in South Manchester. Call 0161 248 9746 or complete our contact form.",
  openGraph: {
    title: "Contact Us | The Independent Advice Bureau",
    description:
      "Book your free 45-minute consultation with our independent financial advisers in South Manchester. Call 0161 248 9746.",
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
              Book Your Free 45-Minute Consultation
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Take the first step towards financial confidence. Your initial
              consultation is completely free, with no obligation to proceed. We are
              here to listen, advise and help.
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
                Book Your Free 45-Minute Consultation
              </h2>
              <p className="text-gray-600 mb-8">
                Complete the form below and we will contact you to arrange a
                convenient time for your free initial meeting. No obligation, no
                pressure.
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
                  <label htmlFor="consultationType" className="form-label">
                    Preferred Consultation Type
                  </label>
                  <select
                    id="consultationType"
                    name="consultationType"
                    className="form-input"
                  >
                    <option value="">Select your preference</option>
                    <option value="office">In-Person - Manchester Office</option>
                    <option value="video">Video Call</option>
                    <option value="phone">Phone Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="form-label">
                    What Can We Help You With?
                  </label>
                  <select id="service" name="service" className="form-input">
                    <option value="">Select a service</option>
                    <option value="financial-planning">Financial Planning</option>
                    <option value="pensions">Pensions</option>
                    <option value="investments">Investments</option>
                    <option value="protection">Protection</option>
                    <option value="retirement">Retirement Planning</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Tell Us About Your Situation
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="form-textarea"
                    placeholder="Briefly describe your current situation and what you'd like to discuss in your free consultation..."
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
                    I consent to The Independent Advice Bureau Limited contacting
                    me regarding my enquiry. I understand my data will be processed in
                    accordance with the{" "}
                    <a href="/iab-manchester/privacy" className="text-accent hover:underline">
                      Privacy Policy
                    </a>
                    . *
                  </label>
                </div>

                <button type="submit" className="btn-accent w-full sm:w-auto">
                  Book My Free Consultation
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                Our Manchester Office
              </h2>

              {/* Free Consultation Banner */}
              <div className="bg-accent text-white p-6 rounded-sm mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold font-serif">Free 45-Minute Consultation</h3>
                </div>
                <p className="text-white/90">
                  Your first meeting is always free and without obligation. We take
                  the time to understand your situation and explain how we can help.
                </p>
              </div>

              {/* Manchester Office */}
              <div className="location-card mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-primary font-semibold">South Manchester</span>
                    <h3 className="text-xl font-bold text-primary">Manchester Office</h3>
                  </div>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>The Independent Advice Bureau Limited</strong>
                  <br />
                  109 Burnage Lane
                  <br />
                  Manchester
                  <br />
                  M19 2WH
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>
                    <strong>Opening Hours:</strong>
                    <br />
                    Monday - Friday: 9:00am - 5:30pm
                    <br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Located on Burnage Lane, easily accessible from across South
                  Manchester, Stockport and Greater Manchester.
                </p>
              </div>

              {/* Direct Contact */}
              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-primary mb-4">
                  Prefer to Call or Email?
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:01612489746"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">0161 248 9746</p>
                      <p className="text-sm text-gray-500">
                        Call us during office hours
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@iabltd.co.uk"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">info@iabltd.co.uk</p>
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
            Find Our Manchester Office
          </h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.5!2d-2.1938!3d53.4350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDI2JzA2LjAiTiAywrAxMSczNy43Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Independent Advice Bureau Manchester Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> The Independent Advice Bureau
              Limited is authorised and regulated by the Financial Conduct Authority.
              Initial consultations are provided free of charge for 45 minutes and
              without obligation. We will always explain our fees clearly before any
              work begins.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
