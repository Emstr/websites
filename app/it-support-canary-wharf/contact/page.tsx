import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get IT Support in Canary Wharf",
  description:
    "Contact Canary Wharf IT Solutions for managed IT support, cybersecurity, and cloud solutions. Call 020 7946 7012 or book a free IT audit.",
  openGraph: {
    title: "Contact Us | Canary Wharf IT Solutions",
    description:
      "Get in touch for a free IT audit. Managed IT support, cybersecurity, and cloud solutions for Canary Wharf businesses.",
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
              Ready to upgrade your IT? Book a free, no-obligation IT audit or
              get in touch with our team to discuss your technology needs.
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
                Book Your Free IT Audit
              </h2>
              <p className="text-gray-600 mb-8">
                Complete the form below and one of our engineers will contact you
                to arrange your complimentary IT assessment.
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
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-input"
                      placeholder="john@company.co.uk"
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
                      placeholder="020 7946 0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="form-input"
                    placeholder="Your Company Ltd"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="form-label">
                    Service of Interest
                  </label>
                  <select id="service" name="service" className="form-input">
                    <option value="">Select a service</option>
                    <option value="managed-it">Managed IT Support</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="network">Network Infrastructure</option>
                    <option value="voip">VoIP &amp; Communications</option>
                    <option value="backup">Data Backup &amp; Recovery</option>
                    <option value="audit">IT Audit</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="employees" className="form-label">
                    Number of Employees
                  </label>
                  <select id="employees" name="employees" className="form-input">
                    <option value="">Select range</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-100">51-100</option>
                    <option value="101-250">101-250</option>
                    <option value="250+">250+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Tell Us About Your IT Challenges
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="form-textarea"
                    placeholder="Describe your current IT setup and any challenges you're facing..."
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
                    I consent to Canary Wharf IT Solutions contacting me
                    regarding my enquiry. I understand my data will be processed
                    in accordance with the{" "}
                    <a href="/it-support-canary-wharf/privacy" className="text-accent hover:underline">
                      Privacy Policy
                    </a>
                    . *
                  </label>
                </div>

                <button type="submit" className="btn-accent w-full sm:w-auto">
                  Request Free IT Audit
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                Our Office
              </h2>

              <div className="location-card mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-primary font-semibold">Head Office</span>
                    <h3 className="text-xl font-bold text-primary">Canary Wharf</h3>
                  </div>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>Canary Wharf IT Solutions</strong>
                  <br />
                  30 Churchill Place
                  <br />
                  Canary Wharf
                  <br />
                  London E14 5RE
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>
                    <strong>Office Hours:</strong>
                    <br />
                    Monday - Friday: 8:00am - 6:00pm
                    <br />
                    Saturday &amp; Sunday: Emergency support only
                  </p>
                  <p>
                    <strong>Support Desk:</strong>
                    <br />
                    Monday - Friday: 7:00am - 8:00pm
                    <br />
                    24/7 critical incident response available
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  2 minutes from Canary Wharf Jubilee line station. Also
                  accessible via DLR and Elizabeth line.
                </p>
              </div>

              {/* Direct Contact */}
              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-primary mb-4">
                  Get In Touch Directly
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:02079467012"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">020 7946 7012</p>
                      <p className="text-sm text-gray-500">Call us during office hours</p>
                    </div>
                  </a>
                  <a
                    href="mailto:support@canaryit.co.uk"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">support@canaryit.co.uk</p>
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
            Find Our Office
          </h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5!2d-0.0235!3d51.5054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzE5LjQiTiAwwrAwMScyNC42Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Canary Wharf IT Solutions Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
