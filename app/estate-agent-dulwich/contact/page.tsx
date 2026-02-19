import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Property Valuation",
  description:
    "Contact Dulwich Property Group for expert property advice. Book a free valuation, arrange a viewing or speak to our team. Call 020 7946 2345.",
  openGraph: {
    title: "Contact Us | Dulwich Property Group",
    description: "Book a free property valuation or speak to our expert team. Call 020 7946 2345.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Whether you&apos;re looking to sell, buy, let or invest, our team is
              ready to help. Book a free valuation or get in touch to discuss
              your property needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Book Your Free Valuation</h2>
              <p className="text-gray-600 mb-8">
                Complete the form below and one of our property experts will be in
                touch to arrange a convenient time to visit your property.
              </p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required className="form-input" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required className="form-input" placeholder="Smith" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input type="email" id="email" name="email" required className="form-input" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required className="form-input" placeholder="07123 456789" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="form-label">What Can We Help With?</label>
                  <select id="service" name="service" className="form-input">
                    <option value="">Select a service</option>
                    <option value="sales-valuation">Sales Valuation</option>
                    <option value="lettings-valuation">Lettings Valuation</option>
                    <option value="buying">Looking to Buy</option>
                    <option value="renting">Looking to Rent</option>
                    <option value="property-management">Property Management</option>
                    <option value="investment">Investment Advice</option>
                    <option value="other">Other Enquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="propertyType" className="form-label">Property Type</label>
                  <select id="propertyType" name="propertyType" className="form-input">
                    <option value="">Select property type</option>
                    <option value="detached">Detached House</option>
                    <option value="semi">Semi-Detached House</option>
                    <option value="terrace">Terraced House</option>
                    <option value="flat">Flat / Apartment</option>
                    <option value="maisonette">Maisonette</option>
                    <option value="bungalow">Bungalow</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="postcode" className="form-label">Property Postcode</label>
                  <input type="text" id="postcode" name="postcode" className="form-input" placeholder="SE21 7AA" />
                </div>
                <div>
                  <label htmlFor="message" className="form-label">Tell Us More</label>
                  <textarea id="message" name="message" rows={5} className="form-textarea" placeholder="Please tell us about your property and what you're looking for..."></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to Dulwich Property Group contacting me regarding my
                    enquiry. I understand my data will be processed in accordance with
                    the <a href="/estate-agent-dulwich/privacy" className="text-accent hover:underline">Privacy Policy</a>. *
                  </label>
                </div>
                <button type="submit" className="btn-accent w-full sm:w-auto">Request Valuation</button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Our Office</h2>
              <div className="location-card mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-primary font-semibold">Lordship Lane</span>
                    <h3 className="text-xl font-bold text-primary">Dulwich, SE22</h3>
                  </div>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>Dulwich Property Group</strong><br />
                  84 Lordship Lane<br />
                  Dulwich<br />
                  London SE22 8HF
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>
                    <strong>Opening Hours:</strong><br />
                    Monday &ndash; Friday: 9:00am &ndash; 6:00pm<br />
                    Saturday: 10:00am &ndash; 4:00pm<br />
                    Sunday: By appointment only
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Located on Lordship Lane, East Dulwich. Nearest station: East Dulwich (overground). Free street parking available.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-primary mb-4">Prefer to Call or Email?</h3>
                <div className="space-y-4">
                  <a href="tel:02079462345" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">020 7946 2345</p>
                      <p className="text-sm text-gray-500">Call us during office hours</p>
                    </div>
                  </a>
                  <a href="mailto:info@dulwichproperty.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">info@dulwichproperty.co.uk</p>
                      <p className="text-sm text-gray-500">Email us anytime</p>
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
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Find Our Office</h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.0!2d-0.0838!3d51.4452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI2JzQzLjAiTiAwwrAwNScwMi4wIlc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Dulwich Property Group Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Professional Standards:</strong> Dulwich Property Group is a member of
              NAEA Propertymark. We are registered with The Property Ombudsman for
              dispute resolution and hold Client Money Protection insurance. All
              fees are agreed in writing before instruction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
