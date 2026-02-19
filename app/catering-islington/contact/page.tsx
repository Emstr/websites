import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote | Contact Us",
  description: "Request a catering quote from Islington Catering Company. Call 020 7946 4789 or complete our enquiry form. Weddings, corporate events, private dining.",
  openGraph: { title: "Get a Quote | Islington Catering Company", description: "Contact us for a free, no-obligation catering quote for your event in London." },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Request a Quote</h1>
        <p className="text-xl text-gray-200 leading-relaxed">Tell us about your event and we&apos;ll come back with a bespoke menu proposal and quote. No obligation, just great food ideas.</p>
      </div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Tell Us About Your Event</h2>
          <p className="text-gray-600 mb-8">The more detail you can share, the better we can tailor our proposal. All enquiries receive a response within 24 hours.</p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div><label htmlFor="name" className="form-label">Your Name *</label><input type="text" id="name" name="name" required className="form-input" placeholder="Full name" /></div>
              <div><label htmlFor="phone" className="form-label">Phone Number *</label><input type="tel" id="phone" name="phone" required className="form-input" placeholder="07123 456789" /></div>
            </div>
            <div><label htmlFor="email" className="form-label">Email Address *</label><input type="email" id="email" name="email" required className="form-input" placeholder="you@example.com" /></div>
            <div><label htmlFor="eventType" className="form-label">Type of Event *</label>
              <select id="eventType" name="eventType" required className="form-input">
                <option value="">Select event type</option><option value="wedding">Wedding</option><option value="corporate">Corporate Event</option><option value="private-dining">Private Dining</option><option value="canapes">Canap&eacute;s &amp; Reception</option><option value="buffet">Buffet</option><option value="party">Party / Celebration</option><option value="other">Other</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div><label htmlFor="date" className="form-label">Event Date</label><input type="date" id="date" name="date" className="form-input" /></div>
              <div><label htmlFor="guests" className="form-label">Number of Guests</label><input type="number" id="guests" name="guests" className="form-input" placeholder="e.g. 80" /></div>
            </div>
            <div><label htmlFor="dietary" className="form-label">Any Dietary Requirements?</label><input type="text" id="dietary" name="dietary" className="form-input" placeholder="e.g. vegan options needed, nut allergies" /></div>
            <div><label htmlFor="message" className="form-label">Tell Us More About Your Event</label><textarea id="message" name="message" rows={5} className="form-textarea" placeholder="Venue, style of food, budget range, any special requests..."></textarea></div>
            <div className="flex items-start gap-3">
              <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
              <label htmlFor="consent" className="text-sm text-gray-600">I consent to Islington Catering Company contacting me regarding my enquiry. See our <a href="/catering-islington/privacy" className="text-accent hover:underline">Privacy Policy</a>. *</label>
            </div>
            <button type="submit" className="btn-accent w-full sm:w-auto">Send Enquiry</button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Contact Details</h2>
          <div className="location-card mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
              <div><span className="text-sm text-accent font-semibold">Our Kitchen</span><h3 className="text-xl font-bold text-primary">Islington, N1</h3></div>
            </div>
            <address className="not-italic text-gray-700 mb-4"><strong>Islington Catering Company</strong><br />54 Upper Street<br />Islington<br />London N1 0QH</address>
            <div className="space-y-2 text-gray-600 mb-4"><p><strong>Office Hours:</strong><br />Monday - Friday: 8:00am - 6:00pm<br />Saturday & Sunday: By appointment</p></div>
            <p className="text-sm text-gray-500">Near Angel station (Northern line) and Highbury &amp; Islington (Victoria line, Overground).</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-sm">
            <h3 className="text-lg font-bold text-primary mb-4">Call or Email</h3>
            <div className="space-y-4">
              <a href="tel:02079464789" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                <div><p className="font-semibold">020 7946 4789</p><p className="text-sm text-gray-500">Mon-Fri, 8am-6pm</p></div>
              </a>
              <a href="mailto:events@islingtoncatering.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                <div><p className="font-semibold">events@islingtoncatering.co.uk</p><p className="text-sm text-gray-500">We reply within 24 hours</p></div>
              </a>
            </div>
          </div>
        </div>
      </div></div></section>

      <section className="bg-gray-100"><div className="container-width py-8">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Find Our Kitchen</h2>
        <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.5!2d-0.1033!3d51.5362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMyJzEwLjMiTiAwwrAwNicxMS45Ilc!5e0!3m2!1sen!2suk!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Islington Catering Company Location"></iframe>
        </div>
      </div></section>
    </>
  );
}
