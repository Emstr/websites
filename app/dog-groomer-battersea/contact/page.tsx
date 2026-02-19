import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Dog Grooming Appointment",
  description:
    "Book a dog grooming appointment at Battersea Dog Spa. Call 020 7946 2567 or fill in our booking form. Located on Battersea Park Road, SW11.",
  openGraph: {
    title: "Contact Us | Battersea Dog Spa",
    description:
      "Book your dog's grooming appointment today. Call 020 7946 2567 or visit our salon on Battersea Park Road, SW11.",
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
              Book Your Dog&apos;s Groom
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ready to treat your dog to a professional groom? Fill in our booking
              form or give us a call to arrange an appointment.
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
                Booking Request
              </h2>
              <p className="text-gray-600 mb-8">
                Tell us about your dog and we&apos;ll get back to you to confirm
                your appointment.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="ownerName" className="form-label">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="ownerName"
                      name="ownerName"
                      required
                      className="form-input"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="dogName" className="form-label">
                      Dog&apos;s Name *
                    </label>
                    <input
                      type="text"
                      id="dogName"
                      name="dogName"
                      required
                      className="form-input"
                      placeholder="Buddy"
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
                      placeholder="jane@example.com"
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
                    <label htmlFor="breed" className="form-label">
                      Dog&apos;s Breed
                    </label>
                    <input
                      type="text"
                      id="breed"
                      name="breed"
                      className="form-input"
                      placeholder="e.g. Cockapoo, Labrador"
                    />
                  </div>
                  <div>
                    <label htmlFor="dogAge" className="form-label">
                      Dog&apos;s Age
                    </label>
                    <select id="dogAge" name="dogAge" className="form-input">
                      <option value="">Select age range</option>
                      <option value="puppy">Puppy (under 6 months)</option>
                      <option value="young">Young (6 months - 2 years)</option>
                      <option value="adult">Adult (2 - 8 years)</option>
                      <option value="senior">Senior (8+ years)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="form-label">
                    Service Required
                  </label>
                  <select id="service" name="service" className="form-input">
                    <option value="">Select a service</option>
                    <option value="full-groom">Full Groom</option>
                    <option value="puppy-first">Puppy First Groom</option>
                    <option value="breed-specific">Breed-Specific Styling</option>
                    <option value="de-shedding">De-Shedding Treatment</option>
                    <option value="nail-ear">Nail Clipping &amp; Ear Cleaning</option>
                    <option value="spa">Spa Treatment</option>
                    <option value="unsure">Not Sure - Please Advise</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Anything Else We Should Know?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="form-textarea"
                    placeholder="Tell us about any health conditions, anxieties, preferred styles or preferred dates..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-accent w-full sm:w-auto">
                  Request Booking
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                Salon Information
              </h2>

              <div className="location-card mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-accent font-semibold">Our Salon</span>
                    <h3 className="text-xl font-bold text-primary">Battersea Dog Spa</h3>
                  </div>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>42 Battersea Park Road</strong>
                  <br />
                  Battersea
                  <br />
                  London SW11 4JP
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>
                    <strong>Opening Hours:</strong>
                    <br />
                    Monday - Friday: 8:00am - 6:00pm
                    <br />
                    Saturday: 9:00am - 5:00pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  5 minutes walk from Battersea Park station. Street parking
                  available on surrounding roads.
                </p>
              </div>

              {/* Direct Contact */}
              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-primary mb-4">
                  Prefer to Call or Email?
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:02079462567"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">020 7946 2567</p>
                      <p className="text-sm text-gray-500">Call during opening hours</p>
                    </div>
                  </a>
                  <a
                    href="mailto:woof@batterseadogspa.co.uk"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">woof@batterseadogspa.co.uk</p>
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
            Find Our Salon
          </h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.5!2d-0.1687!3d51.4750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI4JzMwLjAiTiAwwrAxMCcwNy4zIlc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Battersea Dog Spa Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
