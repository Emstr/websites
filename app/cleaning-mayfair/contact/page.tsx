import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Clean in Mayfair",
  description: "Book a clean or request a quote from Mayfair Cleaning Services. Call 020 7946 0345 or fill in our online booking form.",
  openGraph: { title: "Contact Us | Mayfair Cleaning Services", description: "Book a premium cleaning service in Mayfair. DBS checked staff, eco-friendly products." },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Get In Touch</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Book a Clean</h1><p className="text-xl text-gray-200 leading-relaxed">Request a quote or book your cleaning service online. We typically respond within 2 hours.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Request a Quote</h2>
          <p className="text-gray-600 mb-8">Tell us about your property and cleaning needs, and we&apos;ll provide a personalised quote.</p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div><label htmlFor="firstName" className="form-label">First Name *</label><input type="text" id="firstName" name="firstName" required className="form-input" placeholder="Charlotte" /></div>
              <div><label htmlFor="lastName" className="form-label">Last Name *</label><input type="text" id="lastName" name="lastName" required className="form-input" placeholder="Brown" /></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div><label htmlFor="email" className="form-label">Email Address *</label><input type="email" id="email" name="email" required className="form-input" placeholder="charlotte@example.com" /></div>
              <div><label htmlFor="phone" className="form-label">Phone Number *</label><input type="tel" id="phone" name="phone" required className="form-input" placeholder="07123 456789" /></div>
            </div>
            <div><label htmlFor="postcode" className="form-label">Property Postcode *</label><input type="text" id="postcode" name="postcode" required className="form-input" placeholder="W1K" /></div>
            <div><label htmlFor="service" className="form-label">Service Required</label>
              <select id="service" name="service" className="form-input">
                <option value="">Select a service</option><option value="regular">Regular Domestic Cleaning</option><option value="deep">Deep Cleaning</option><option value="tenancy">End of Tenancy</option><option value="office">Office Cleaning</option><option value="party">After-Party Cleaning</option><option value="carpet">Carpet &amp; Upholstery</option>
              </select>
            </div>
            <div><label htmlFor="bedrooms" className="form-label">Number of Bedrooms</label>
              <select id="bedrooms" name="bedrooms" className="form-input">
                <option value="">Select</option><option value="studio">Studio</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5+">5+</option>
              </select>
            </div>
            <div><label htmlFor="frequency" className="form-label">Preferred Frequency</label>
              <select id="frequency" name="frequency" className="form-input">
                <option value="">Select</option><option value="weekly">Weekly</option><option value="fortnightly">Fortnightly</option><option value="monthly">Monthly</option><option value="one-off">One-Off</option>
              </select>
            </div>
            <div><label htmlFor="message" className="form-label">Additional Details</label><textarea id="message" name="message" rows={4} className="form-textarea" placeholder="Any specific requirements, access instructions, or areas of focus..."></textarea></div>
            <div className="flex items-start gap-3"><input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" /><label htmlFor="consent" className="text-sm text-gray-600">I consent to Mayfair Cleaning Services contacting me regarding my enquiry. *</label></div>
            <button type="submit" className="btn-accent w-full sm:w-auto">Request Quote</button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Contact Details</h2>
          <div className="location-card mb-8">
            <address className="not-italic text-gray-700 mb-4"><strong>Mayfair Cleaning Services</strong><br />22 Brook Street<br />Mayfair<br />London W1K 5DF</address>
            <div className="space-y-2 text-gray-600 mb-4"><p><strong>Booking Hours:</strong><br />Monday - Friday: 7:00am - 8:00pm<br />Saturday: 8:00am - 6:00pm<br />Sunday: By arrangement</p></div>
          </div>
          <div className="bg-gray-50 p-6 rounded-sm">
            <h3 className="text-lg font-bold text-primary mb-4">Prefer to Call?</h3>
            <div className="space-y-4">
              <a href="tel:02079460345" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"><div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div><div><p className="font-semibold">020 7946 0345</p><p className="text-sm text-gray-500">Speak to our bookings team</p></div></a>
              <a href="mailto:bookings@mayfaircleaning.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"><div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><div><p className="font-semibold">bookings@mayfaircleaning.co.uk</p><p className="text-sm text-gray-500">We respond within 2 hours</p></div></a>
            </div>
          </div>
        </div>
      </div></div></section>

      <section className="bg-gray-100"><div className="container-width py-8"><h2 className="text-2xl font-bold text-primary mb-6 text-center">Find Us</h2><div className="aspect-video bg-gray-200 rounded-sm overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0!2d-0.1468!3d51.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzM2LjAiTiAwwrAwOCc0OC41Ilc!5e0!3m2!1sen!2suk!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mayfair Cleaning Services Location"></iframe></div></div></section>
    </>
  );
}
