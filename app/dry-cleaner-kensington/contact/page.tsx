import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Collection or Drop Off in Kensington",
  description: "Contact Kensington Dry Cleaners to book a free collection or enquire about our services. Call 020 7946 5530 or visit 112 Kensington High Street.",
  openGraph: { title: "Contact Us | Kensington Dry Cleaners", description: "Book a free collection or visit our Kensington High Street shop. Call 020 7946 5530." },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Get In Touch</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Contact Us</h1><p className="text-xl text-gray-200 leading-relaxed">Book a free collection, get a quote, or pop into our shop on Kensington High Street. We are here to help.</p></div></div></section>

      <section className="py-16 lg:py-24 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">Book a Free Collection</h2>
          <p className="text-gray-600 mb-8">Fill in the form below and we will arrange a collection at a time that suits you. Free within our Kensington and Chelsea delivery area.</p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div><label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label><input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none" placeholder="Your name" /></div>
              <div><label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label><input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none" placeholder="you@example.com" /></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div><label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label><input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none" placeholder="07123 456789" /></div>
              <div><label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Required</label><select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none"><option value="">Select a service</option><option value="dry-cleaning">Dry Cleaning</option><option value="shirts">Shirt Service</option><option value="wedding">Wedding Dress Care</option><option value="curtains">Curtain &amp; Upholstery</option><option value="alterations">Alterations &amp; Repairs</option><option value="express">Same-Day Express</option><option value="other">Other / Not Sure</option></select></div>
            </div>
            <div><label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">Preferred Collection Date</label><input type="date" id="preferredDate" name="preferredDate" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none" /></div>
            <div><label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Additional Details</label><textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none" placeholder="Tell us about the items you need cleaned, any special requirements, or questions you have..."></textarea></div>
            <button type="submit" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors w-full sm:w-auto">Book Collection</button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-8">Visit Our Shop</h2>
          <div className="bg-gray-50 p-6 rounded-sm mb-8">
            <h3 className="text-xl font-bold text-[var(--primary)] mb-4">Our Address</h3>
            <address className="not-italic text-gray-700 mb-4"><strong>Kensington Dry Cleaners</strong><br />112 Kensington High Street<br />Kensington<br />London W8 7RW</address>
            <div className="space-y-2 text-gray-600"><p><strong>Opening Hours:</strong></p><p>Monday - Friday: 7:30am - 7pm</p><p>Saturday: 8am - 5pm</p><p>Sunday: Closed</p></div>
          </div>
          <div className="bg-gray-50 p-6 rounded-sm mb-8">
            <h3 className="text-lg font-bold text-[var(--primary)] mb-4">Direct Contact</h3>
            <div className="space-y-4">
              <a href="tel:02079465530" className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors"><div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div><div><p className="font-semibold">020 7946 5530</p><p className="text-sm text-gray-500">Call during opening hours</p></div></a>
              <a href="mailto:info@kensingtondry.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors"><div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><div><p className="font-semibold">info@kensingtondry.co.uk</p><p className="text-sm text-gray-500">We reply within a few hours</p></div></a>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-sm">
            <h3 className="text-lg font-bold text-[var(--primary)] mb-4">Getting Here</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>High Street Kensington (Circle, District) - 1 min</li>
              <li className="flex items-center gap-2"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Kensington Olympia (Overground) - 6 min</li>
            </ul>
          </div>
        </div>
      </div></div></section>

      <section className="bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><h2 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">Find Us</h2><div className="aspect-video bg-gray-200 rounded-sm overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.0!2d-0.1914!3d51.4998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI5JzU5LjMiTiAwwrAxMSczMi42Ilc!5e0!3m2!1sen!2suk!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Kensington Dry Cleaners Location"></iframe></div></div></section>
    </>
  );
}
