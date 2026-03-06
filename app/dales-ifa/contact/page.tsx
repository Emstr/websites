import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Financial Consultation",
  description:
    "Contact DALES IFA for expert independent financial advice. Visit our offices in Nottingham (West Bridgford) or Newark. Call 0333 772 9607 for a free consultation.",
  openGraph: {
    title: "Contact Us | DALES IFA",
    description:
      "Book a free consultation with Philip Dales at our Nottingham or Newark offices. Call 0333 772 9607.",
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
              our Nottingham or Newark office, or reach out to discuss your
              financial planning needs.
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
                Complete the form below and Philip will contact you to arrange a
                convenient time for your initial meeting.
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
                  <label htmlFor="preferredOffice" className="form-label">
                    Preferred Meeting Location
                  </label>
                  <select
                    id="preferredOffice"
                    name="preferredOffice"
                    className="form-input"
                  >
                    <option value="">Select your preference</option>
                    <option value="nottingham">Nottingham - Bridgford Business Centre, West Bridgford</option>
                    <option value="newark">Newark - Central Buildings, Middle Gate</option>
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
                    <option value="mortgage">Mortgages</option>
                    <option value="pension">Pensions</option>
                    <option value="equity-release">Equity Release</option>
                    <option value="investment">Investments</option>
                    <option value="protection">Protection</option>
                    <option value="other">Other / Not Sure</option>
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
                    I consent to P N Dales Ltd (DALES IFA) contacting me
                    regarding my enquiry. I understand my data will be processed
                    in accordance with the{" "}
                    <a href="/dales-ifa/privacy" className="text-accent hover:underline">
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
                Our Office Locations
              </h2>

              {/* Nottingham Office */}
              <div className="location-card mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-accent font-semibold">Head Office</span>
                    <h3 className="text-xl font-bold text-primary">Nottingham</h3>
                  </div>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>DALES IFA</strong>
                  <br />
                  Bridgford Business Centre
                  <br />
                  29 Bridgford Road, West Bridgford
                  <br />
                  Nottingham NG2 6AU
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:01158320265" className="hover:text-accent transition-colors">
                      0115 832 0265
                    </a>
                  </p>
                  <p>
                    <strong>Opening Hours:</strong>
                    <br />
                    Monday - Friday: 9:00am - 5:30pm
                    <br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Located in West Bridgford with parking available nearby. Easy
                  access from the A52 and Nottingham city centre.
                </p>
              </div>

              {/* Newark Office */}
              <div className="location-card mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-primary font-semibold">Newark Office</span>
                    <h3 className="text-xl font-bold text-primary">Newark</h3>
                  </div>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>DALES IFA</strong>
                  <br />
                  Central Buildings
                  <br />
                  Middle Gate
                  <br />
                  Newark NG24 1AG
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:01636870069" className="hover:text-accent transition-colors">
                      01636 870 069
                    </a>
                  </p>
                  <p>
                    <strong>Opening Hours:</strong>
                    <br />
                    Monday - Friday: 9:00am - 5:30pm
                    <br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Town centre location on Middle Gate. Easy access from the A1
                  and A46. Near Newark Castle station.
                </p>
              </div>

              {/* Direct Contact */}
              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-primary mb-4">
                  Prefer to Call or Email?
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:03337729607"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">0333 772 9607</p>
                      <p className="text-sm text-gray-500">
                        General enquiries (local rate)
                      </p>
                    </div>
                  </a>
                  <a
                    href="tel:01158320265"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">0115 832 0265</p>
                      <p className="text-sm text-gray-500">Nottingham office</p>
                    </div>
                  </a>
                  <a
                    href="tel:01636870069"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">01636 870 069</p>
                      <p className="text-sm text-gray-500">Newark office</p>
                    </div>
                  </a>
                  <a
                    href="mailto:advice@pndales.co.uk"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">advice@pndales.co.uk</p>
                      <p className="text-sm text-gray-500">Email us anytime</p>
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
            Find Our Nottingham Office
          </h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.5!2d-1.1307!3d52.9388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDU2JzE5LjciTiAxwrAwNyc1MC41Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DALES IFA Nottingham Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> P N Dales Ltd (trading as DALES
              IFA) is authorised and regulated by the Financial Conduct Authority
              (FCA Ref: 496107). Initial consultations are provided free of
              charge and without obligation. We will always explain our fees
              clearly before any work begins.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
