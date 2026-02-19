import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Trial Lesson",
  description:
    "Contact Kensington Private Tutors to book a free trial lesson. Call 020 7946 2567 or visit our Kensington office. Expert private tutoring in London W8.",
  openGraph: {
    title: "Contact Us | Kensington Private Tutors",
    description:
      "Book a free trial lesson with our expert Oxbridge graduate tutors in Kensington, London. Call 020 7946 2567.",
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
              Ready to give your child the academic advantage? Book a free,
              no-obligation trial lesson or get in touch to discuss your
              tutoring needs.
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
                Book Your Free Trial Lesson
              </h2>
              <p className="text-gray-600 mb-8">
                Tell us about your child&apos;s needs and we&apos;ll match them
                with the perfect tutor. Your first lesson is completely free.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="parentName" className="form-label">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="studentName" className="form-label">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      required
                      className="form-input"
                      placeholder="Student's name"
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
                      placeholder="you@example.com"
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
                  <label htmlFor="service" className="form-label">
                    What Do You Need Help With?
                  </label>
                  <select id="service" name="service" className="form-input">
                    <option value="">Select a service</option>
                    <option value="gcse">GCSE Tutoring</option>
                    <option value="alevel">A-Level Tutoring</option>
                    <option value="11plus">11+ Exam Preparation</option>
                    <option value="university">University Admissions</option>
                    <option value="primary">Primary School Support</option>
                    <option value="adult">Adult Learning</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="form-label">
                    Subject(s) Required
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    placeholder="e.g. Maths, English, Chemistry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Tell Us More About Your Child&apos;s Needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="form-textarea"
                    placeholder="Current year group, school, specific areas of difficulty, goals..."
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
                    I consent to Kensington Private Tutors contacting me regarding
                    my enquiry. My data will be processed in accordance with the{" "}
                    <a href="/tutor-kensington/privacy" className="text-accent hover:underline">
                      Privacy Policy
                    </a>
                    . *
                  </label>
                </div>

                <button type="submit" className="btn-accent w-full sm:w-auto">
                  Request Free Trial Lesson
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                Get In Touch Directly
              </h2>

              {/* Office */}
              <div className="location-card mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-accent font-semibold">Our Office</span>
                    <h3 className="text-xl font-bold text-primary">Kensington, W8</h3>
                  </div>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>Kensington Private Tutors</strong>
                  <br />
                  42 Kensington High Street
                  <br />
                  Kensington
                  <br />
                  London W8 4PT
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>
                    <strong>Office Hours:</strong>
                    <br />
                    Monday - Friday: 8:00am - 8:00pm
                    <br />
                    Saturday: 9:00am - 5:00pm
                    <br />
                    Sunday: Closed
                  </p>
                  <p className="text-sm">
                    <strong>Tutoring sessions available:</strong> 7 days a week,
                    including evenings.
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Near High Street Kensington station (District &amp; Circle lines).
                  Bus routes 9, 10, 27, 28, 49, 328 stop nearby.
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
                      <p className="text-sm text-gray-500">Call us during office hours</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@kensingtontutors.co.uk"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">info@kensingtontutors.co.uk</p>
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
            Find Our Kensington Office
          </h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.5!2d-0.1932!3d51.5010!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzAzLjYiTiAwwrAxMSczNS41Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kensington Private Tutors Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
