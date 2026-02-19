import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Consultation | Contact Us",
  description: "Book a free, no-obligation mortgage consultation at Stratford Mortgage Solutions. Call 020 7946 6901 or book online. 14 The Broadway, Stratford E15 4QS.",
  openGraph: { title: "Free Consultation | Stratford Mortgage Solutions", description: "Book a free mortgage consultation in Stratford, East London. FCA regulated, whole of market mortgage broker." },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Get In Touch</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Book Your Free Consultation</h1><p className="text-xl text-gray-200 leading-relaxed">Ready to find the right mortgage? Book a free, no-obligation consultation and let us search the whole market for you.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16">
        <div><h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Book Online</h2><p className="text-gray-600 mb-8">Complete the form below and we&apos;ll get back to you within 24 hours to arrange your free consultation.</p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div><label htmlFor="name" className="form-label">Full Name *</label><input type="text" id="name" name="name" required className="form-input" placeholder="Your full name" /></div>
              <div><label htmlFor="phone" className="form-label">Phone Number *</label><input type="tel" id="phone" name="phone" required className="form-input" placeholder="07123 456789" /></div>
            </div>
            <div><label htmlFor="email" className="form-label">Email Address *</label><input type="email" id="email" name="email" required className="form-input" placeholder="you@example.com" /></div>
            <div><label htmlFor="mortgage-type" className="form-label">Type of Mortgage</label>
              <select id="mortgage-type" name="mortgage-type" className="form-input"><option value="">Select a mortgage type</option><option value="first-time">First-Time Buyer</option><option value="remortgage">Remortgaging</option><option value="buy-to-let">Buy-to-Let</option><option value="help-to-buy">Help to Buy</option><option value="shared-ownership">Shared Ownership</option><option value="commercial">Commercial Mortgage</option><option value="other">Other / Not Sure</option></select>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div><label htmlFor="property-value" className="form-label">Approximate Property Value</label><input type="text" id="property-value" name="property-value" className="form-input" placeholder="e.g. &pound;350,000" /></div>
              <div><label htmlFor="deposit" className="form-label">Deposit Available</label><input type="text" id="deposit" name="deposit" className="form-input" placeholder="e.g. &pound;35,000" /></div>
            </div>
            <div><label htmlFor="details" className="form-label">Tell Us About Your Situation</label><textarea id="details" name="details" rows={5} className="form-textarea" placeholder="e.g. First-time buyer looking to purchase in Stratford, currently renting, combined household income &pound;65,000..."></textarea></div>
            <div className="flex items-start gap-3"><input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" /><label htmlFor="consent" className="text-sm text-gray-600">I consent to Stratford Mortgage Solutions contacting me regarding my enquiry. See our <a href="/mortgage-broker-stratford/privacy" className="text-accent hover:underline">Privacy Policy</a>. *</label></div>
            <button type="submit" className="btn-accent w-full sm:w-auto">Request Free Consultation</button>
          </form>
        </div>
        <div><h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Our Office</h2>
          <div className="location-card mb-8">
            <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div><div><span className="text-sm text-accent font-semibold">Our Office</span><h3 className="text-xl font-bold text-primary">Stratford, E15</h3></div></div>
            <address className="not-italic text-gray-700 mb-4"><strong>Stratford Mortgage Solutions</strong><br />14 The Broadway<br />Stratford<br />London E15 4QS</address>
            <div className="space-y-2 text-gray-600 mb-4"><p><strong>Office Hours:</strong><br />Monday - Friday: 9:00am - 6:00pm<br />Saturday: 10:00am - 2:00pm<br />Sunday: Closed</p><p className="text-sm"><strong>Evening appointments available</strong> by arrangement (Monday - Thursday until 8:00pm)</p></div>
            <p className="text-sm text-gray-500">2 minutes from Stratford station (Central, Jubilee, Elizabeth lines, DLR, Overground). Westfield Stratford City nearby.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-sm"><h3 className="text-lg font-bold text-primary mb-4">Call or Email</h3>
            <div className="space-y-4">
              <a href="tel:02079466901" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"><div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div><div><p className="font-semibold">020 7946 6901</p><p className="text-sm text-gray-500">Call during office hours</p></div></a>
              <a href="mailto:info@stratfordmortgages.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"><div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><div><p className="font-semibold">info@stratfordmortgages.co.uk</p><p className="text-sm text-gray-500">We reply within 24 hours</p></div></a>
            </div>
          </div>
        </div>
      </div></div></section>

      <section className="bg-gray-100"><div className="container-width py-8"><h2 className="text-2xl font-bold text-primary mb-6 text-center">Find Our Office</h2><div className="aspect-video bg-gray-200 rounded-sm overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0!2d-0.0031!3d51.5413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMyJzI4LjciTiAwwrAwMCcxMS4yIlc!5e0!3m2!1sen!2suk!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Stratford Mortgage Solutions Office Location"></iframe></div></div></section>
    </>
  );
}
