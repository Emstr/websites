import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Expert Travel Consultants Since 2010",
  description: "Learn about Chelsea Travel Company - ABTA & ATOL protected travel agents on King's Road, Chelsea. Five expert consultants, over 5,000 holidays booked since 2010.",
  openGraph: { title: "About Us | Chelsea Travel Company", description: "Expert travel consultants on King's Road, Chelsea. ABTA & ATOL protected since 2010." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width"><div className="max-w-3xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Your Travel Experts on King&apos;s Road</h1>
          <p className="text-xl text-gray-200 leading-relaxed">Since 2010, Chelsea Travel Company has been creating unforgettable holiday experiences for discerning travellers from our King&apos;s Road office.</p>
        </div></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Passionate About Travel Since 2010</h2>
            <div className="gold-line mb-6"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Chelsea Travel Company was founded by a team of travel professionals who believed that the best holidays are created by people, not algorithms. After years working for large tour operators, we set up on King&apos;s Road to offer the personal, expert service that travellers deserve.</p>
            <p className="text-gray-600 mb-6 leading-relaxed">Our five consultants have collectively visited over 120 countries. When we recommend a resort, a route or a restaurant, it&apos;s because we&apos;ve been there ourselves. This first-hand knowledge is what sets us apart from online booking engines and call-centre agencies.</p>
            <p className="text-gray-600 leading-relaxed">Over 5,000 holidays later, we remain as passionate about travel as the day we opened. From a family holiday to the Algarve to a once-in-a-lifetime round-the-world trip, we bring the same enthusiasm and attention to detail to every booking.</p>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">15+</div><p className="text-gray-600 mt-2 font-medium">Years in Business</p></div>
              <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">5k+</div><p className="text-gray-600 mt-2 font-medium">Holidays Booked</p></div>
              <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">5</div><p className="text-gray-600 mt-2 font-medium">Expert Consultants</p></div>
              <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">120+</div><p className="text-gray-600 mt-2 font-medium">Countries Visited</p></div>
            </div>
          </div>
        </div></div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What Sets Us Apart</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Fully Protected</h3><p className="text-gray-600">ABTA and ATOL membership means your money and your holiday are protected. You can book with complete confidence.</p></div>
            <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Personal Service</h3><p className="text-gray-600">You&apos;ll work with a dedicated consultant who gets to know your preferences. No scripts, no call centres &mdash; just genuine expertise.</p></div>
            <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">First-Hand Knowledge</h3><p className="text-gray-600">Our consultants travel extensively. When we recommend a destination, it&apos;s because we&apos;ve experienced it ourselves.</p></div>
            <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">24/7 Support</h3><p className="text-gray-600">Our emergency line means you&apos;re never alone when travelling. Help is always just a phone call away, wherever you are.</p></div>
            <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Transparent Pricing</h3><p className="text-gray-600">No hidden fees or surprise charges. We provide clear, itemised quotes so you know exactly what you&apos;re paying for.</p></div>
            <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Passion for Travel</h3><p className="text-gray-600">We genuinely love what we do. That passion translates into better itineraries, better recommendations and better holidays for you.</p></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Location</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">King&apos;s Road, Chelsea</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our office is on the iconic King&apos;s Road in the heart of Chelsea. Pop in for a chat about your next holiday &mdash; no appointment needed.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-sm">
              <svg className="w-10 h-10 text-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <h3 className="text-lg font-bold text-primary mb-2">Sloane Square</h3>
              <p className="text-gray-600">4-minute walk</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-sm">
              <svg className="w-10 h-10 text-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <h3 className="text-lg font-bold text-primary mb-2">South Kensington</h3>
              <p className="text-gray-600">8-minute walk</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Plan Your Next Holiday?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Visit our King&apos;s Road office or get in touch. Your perfect holiday starts with a conversation.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/travel-agent-chelsea/contact" className="btn-accent">Plan Your Trip</Link>
            <a href="tel:02079466650" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 6650</a>
          </div>
        </div>
      </section>
    </>
  );
}
