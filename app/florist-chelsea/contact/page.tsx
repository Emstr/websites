import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Order Flowers & Enquiries",
  description: "Contact Chelsea Blooms to order flowers, discuss wedding floristry or enquire about corporate arrangements. 156 King's Road, Chelsea SW3. Call 020 7946 9012.",
  openGraph: { title: "Contact Us | Chelsea Blooms", description: "Order flowers or make an enquiry. Same day delivery available across London." },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Get In Touch</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Contact Us</h1><p className="text-xl text-gray-200 leading-relaxed">Order flowers, enquire about wedding floristry or discuss corporate arrangements. We&apos;re here to help.</p></div></div></section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">Send Us an Enquiry</h2>
              <p className="text-gray-600 mb-8">Whether you need a bouquet delivered today or want to discuss wedding flowers, we&apos;re happy to help.</p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label><input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="Jane" /></div>
                  <div><label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label><input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="Smith" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email *</label><input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="jane@example.com" /></div>
                  <div><label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone</label><input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="07123 456789" /></div>
                </div>
                <div><label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">What Do You Need?</label><select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"><option value="">Select a service</option><option value="bouquet">Order a Bouquet</option><option value="wedding">Wedding Flowers</option><option value="funeral">Funeral Tribute</option><option value="corporate">Corporate Flowers</option><option value="event">Event Styling</option><option value="subscription">Flower Subscription</option><option value="other">Other</option></select></div>
                <div><label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">Date Required</label><input type="text" id="date" name="date" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="e.g. ASAP / 15 March 2026 / Weekly delivery" /></div>
                <div><label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Tell Us More</label><textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent" placeholder="Describe your ideal arrangement, colour preferences, budget or any other details..."></textarea></div>
                <button type="submit" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors w-full sm:w-auto">Send Enquiry</button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-8">Visit Our Studio</h2>
              <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-[var(--accent)] mb-8">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4">Chelsea Blooms</h3>
                <address className="not-italic text-gray-700 mb-4"><strong>156 King&apos;s Road</strong><br />Chelsea, London SW3 4UT</address>
                <div className="space-y-2 text-gray-600 mb-4"><p><strong>Opening Hours:</strong><br />Monday &ndash; Saturday: 8:00am &ndash; 6:00pm<br />Sunday: 10:00am &ndash; 4:00pm</p></div>
                <p className="text-sm text-gray-500">Same day delivery for orders placed before 1pm.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-sm mb-8">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-4">Contact Directly</h3>
                <div className="space-y-4">
                  <a href="tel:02079469012" className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors"><div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div><div><p className="font-semibold">020 7946 9012</p><p className="text-sm text-gray-500">Call during opening hours</p></div></a>
                  <a href="mailto:orders@chelseablooms.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-[var(--accent)] transition-colors"><div className="w-10 h-10 bg-[var(--accent)]/10 rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><div><p className="font-semibold">orders@chelseablooms.co.uk</p><p className="text-sm text-gray-500">Email us anytime</p></div></a>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-sm"><h3 className="text-lg font-bold text-[var(--primary)] mb-4">Getting Here</h3><ul className="space-y-2 text-gray-600"><li className="flex items-start gap-2"><svg className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span><strong>Sloane Square</strong> &mdash; 8 min walk (District, Circle)</span></li><li className="flex items-start gap-2"><svg className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span><strong>South Kensington</strong> &mdash; 12 min walk (Piccadilly, District, Circle)</span></li></ul></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><h2 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">Find Us on King&apos;s Road</h2><div className="aspect-video bg-gray-200 rounded-sm overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.5!2d-0.1687!3d51.4875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI5JzE1LjAiTiAwwrAxMCcwNy4zIlc!5e0!3m2!1sen!2suk!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Chelsea Blooms Location"></iframe></div></div></section>
    </>
  );
}
