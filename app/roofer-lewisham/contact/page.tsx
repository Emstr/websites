import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Free Roofing Quote in Lewisham",
  description: "Get a free roofing quote from Lewisham Roofing Specialists. Call 020 7946 1456 or fill in our online form for a no-obligation estimate.",
  openGraph: { title: "Contact Us | Lewisham Roofing Specialists", description: "Get a free, no-obligation roofing quote. TrustMark registered contractors in Lewisham and SE London." },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Get In Touch</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Get a Free Quote</h1><p className="text-xl text-gray-200 leading-relaxed">Request a free, no-obligation roofing quote. We respond to all enquiries within 24 hours and can usually arrange a site visit within 48 hours.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Request a Quote</h2>
          <p className="text-gray-600 mb-8">Tell us about your roofing project and we&apos;ll provide a free, detailed estimate.</p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div><label htmlFor="firstName" className="form-label">First Name *</label><input type="text" id="firstName" name="firstName" required className="form-input" placeholder="John" /></div>
              <div><label htmlFor="lastName" className="form-label">Last Name *</label><input type="text" id="lastName" name="lastName" required className="form-input" placeholder="Smith" /></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div><label htmlFor="email" className="form-label">Email Address *</label><input type="email" id="email" name="email" required className="form-input" placeholder="john@example.com" /></div>
              <div><label htmlFor="phone" className="form-label">Phone Number *</label><input type="tel" id="phone" name="phone" required className="form-input" placeholder="07123 456789" /></div>
            </div>
            <div><label htmlFor="postcode" className="form-label">Property Postcode *</label><input type="text" id="postcode" name="postcode" required className="form-input" placeholder="SE13" /></div>
            <div><label htmlFor="service" className="form-label">Service Required</label>
              <select id="service" name="service" className="form-input">
                <option value="">Select a service</option><option value="repair">Roof Repairs</option><option value="new-roof">New Roof Installation</option><option value="flat-roof">Flat Roofing</option><option value="guttering">Guttering &amp; Fascias</option><option value="chimney">Chimney Repairs</option><option value="survey">Roof Survey</option><option value="emergency">Emergency Repair</option>
              </select>
            </div>
            <div><label htmlFor="roofType" className="form-label">Roof Type (if known)</label>
              <select id="roofType" name="roofType" className="form-input">
                <option value="">Select</option><option value="slate">Slate</option><option value="tile">Concrete Tile</option><option value="clay">Clay Tile</option><option value="flat">Flat Roof</option><option value="felt">Felt</option><option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div><label htmlFor="propertyType" className="form-label">Property Type</label>
              <select id="propertyType" name="propertyType" className="form-input">
                <option value="">Select</option><option value="terraced">Terraced House</option><option value="semi">Semi-Detached</option><option value="detached">Detached House</option><option value="flat">Flat / Maisonette</option><option value="bungalow">Bungalow</option><option value="commercial">Commercial Property</option>
              </select>
            </div>
            <div><label htmlFor="message" className="form-label">Describe the Problem or Work Needed</label><textarea id="message" name="message" rows={4} className="form-textarea" placeholder="Please describe the issue or the roofing work you need, including any access considerations..."></textarea></div>
            <div className="flex items-start gap-3"><input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" /><label htmlFor="consent" className="text-sm text-gray-600">I consent to Lewisham Roofing Specialists contacting me regarding my enquiry. *</label></div>
            <button type="submit" className="btn-accent w-full sm:w-auto">Request Free Quote</button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Contact Details</h2>
          <div className="location-card mb-8">
            <address className="not-italic text-gray-700 mb-4"><strong>Lewisham Roofing Specialists</strong><br />87 Lewisham High Street<br />Lewisham<br />London SE13 5JX</address>
            <div className="space-y-2 text-gray-600 mb-4"><p><strong>Working Hours:</strong><br />Monday - Friday: 7:30am - 6:00pm<br />Saturday: 8:00am - 2:00pm<br />Emergency call-outs: 24/7</p></div>
          </div>
          <div className="bg-gray-50 p-6 rounded-sm mb-8">
            <h3 className="text-lg font-bold text-primary mb-4">Prefer to Call?</h3>
            <div className="space-y-4">
              <a href="tel:02079461456" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"><div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div><div><p className="font-semibold">020 7946 1456</p><p className="text-sm text-gray-500">Speak to our team</p></div></a>
              <a href="mailto:info@lewishamroofing.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"><div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><div><p className="font-semibold">info@lewishamroofing.co.uk</p><p className="text-sm text-gray-500">We respond within 24 hours</p></div></a>
            </div>
          </div>
          <div className="bg-accent/10 p-6 rounded-sm">
            <h3 className="text-lg font-bold text-primary mb-2">Emergency Roof Repairs</h3>
            <p className="text-gray-600 text-sm mb-3">Storm damage? Active leak? We offer 24/7 emergency call-outs to make your roof safe and watertight as quickly as possible.</p>
            <a href="tel:02079461456" className="text-accent font-semibold hover:text-primary transition-colors inline-flex items-center gap-2">Call Now for Emergency Help <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></a>
          </div>
        </div>
      </div></div></section>

      <section className="bg-gray-100"><div className="container-width py-8"><h2 className="text-2xl font-bold text-primary mb-6 text-center">Find Us</h2><div className="aspect-video bg-gray-200 rounded-sm overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.0!2d-0.0202!3d51.4535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI3JzEyLjYiTiAwwrAwMScxMy4zIlc!5e0!3m2!1sen!2suk!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lewisham Roofing Specialists Location"></iframe></div></div></section>
    </>
  );
}
