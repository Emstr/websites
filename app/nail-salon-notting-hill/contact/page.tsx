import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | Contact Us",
  description:
    "Book your nail appointment at Notting Hill Nail & Beauty Bar. Call 020 7946 3678 or book online. Walk-ins welcome. 18 Pembridge Road, Notting Hill W11.",
  openGraph: {
    title: "Book Appointment | Notting Hill Nail & Beauty Bar",
    description: "Book your nail treatment in Notting Hill. Call 020 7946 3678 or use our online booking form.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Book Now</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Book Your Appointment</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ready for gorgeous nails? Book online, call us, or simply walk in. We can&apos;t wait to pamper you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Book Online</h2>
              <p className="text-gray-600 mb-8">Fill in the form below and we&apos;ll confirm your appointment by text or email.</p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="form-label">Your Name *</label>
                    <input type="text" id="name" name="name" required className="form-input" placeholder="Full name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required className="form-input" placeholder="07123 456789" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="treatment" className="form-label">Treatment *</label>
                  <select id="treatment" name="treatment" required className="form-input">
                    <option value="">Select a treatment</option>
                    <option value="gel-manicure">Gel Manicure</option>
                    <option value="gel-pedicure">Gel Pedicure</option>
                    <option value="nail-art">Nail Art</option>
                    <option value="acrylic-extensions">Acrylic Extensions</option>
                    <option value="biab">BIAB (Builder in a Bottle)</option>
                    <option value="spa">Luxury Spa Treatment</option>
                    <option value="mani-pedi">Mani-Pedi Combo</option>
                    <option value="other">Other / Multiple</option>
                  </select>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="form-label">Preferred Date *</label>
                    <input type="date" id="date" name="date" required className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="time" className="form-label">Preferred Time *</label>
                    <select id="time" name="time" required className="form-input">
                      <option value="">Select a time</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="notes" className="form-label">Any Special Requests?</label>
                  <textarea id="notes" name="notes" rows={4} className="form-textarea" placeholder="e.g. specific nail art design, allergies, first visit..."></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to Notting Hill Nail &amp; Beauty Bar contacting me to confirm my booking. See our{" "}
                    <a href="/nail-salon-notting-hill/privacy" className="text-accent hover:underline">Privacy Policy</a>. *
                  </label>
                </div>
                <button type="submit" className="btn-accent w-full sm:w-auto">Request Appointment</button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Visit Our Salon</h2>
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
                    <h3 className="text-xl font-bold text-primary">Notting Hill, W11</h3>
                  </div>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>Notting Hill Nail &amp; Beauty Bar</strong><br />
                  18 Pembridge Road<br />Notting Hill<br />London W11 3HL
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>
                    <strong>Opening Hours:</strong><br />
                    Monday - Friday: 10:00am - 7:00pm<br />
                    Saturday: 9:00am - 6:00pm<br />
                    Sunday: 11:00am - 5:00pm
                  </p>
                </div>
                <p className="text-sm text-gray-500">2 minutes from Notting Hill Gate station (Central, Circle &amp; District lines). Walk-ins welcome subject to availability.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-lg font-bold text-primary mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <a href="tel:02079463678" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">020 7946 3678</p>
                      <p className="text-sm text-gray-500">Call during opening hours</p>
                    </div>
                  </a>
                  <a href="mailto:bookings@nottinghillnails.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">bookings@nottinghillnails.co.uk</p>
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
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Find Our Salon</h2>
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.8!2d-0.2058!3d51.5115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzQxLjQiTiAwwrAxMicyMC45Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Notting Hill Nail & Beauty Bar Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
