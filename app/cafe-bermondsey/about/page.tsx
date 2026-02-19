import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Bermondsey's Neighbourhood Coffee Shop",
  description: "The story of Bermondsey Coffee House. Speciality coffee, locally roasted beans and freshly baked goods on Bermondsey Street, London SE1.",
  openGraph: { title: "About Us | Bermondsey Coffee House", description: "Speciality coffee, locally roasted and lovingly brewed on Bermondsey Street since day one." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Our Story</h1>
            <p className="text-xl text-gray-200 leading-relaxed">A neighbourhood coffee shop with a passion for quality. Born on Bermondsey Street, built on great coffee.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Coffee is Our Craft</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Bermondsey Coffee House started with a simple belief: great coffee shouldn&apos;t be complicated. We opened on Bermondsey Street with a small espresso machine, a handful of tables and a commitment to doing things properly.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">From the start, we partnered with a local South London roastery to source and roast our beans. We hired baristas who care about their craft, and our pastry chef comes in at 4am every morning to bake everything from scratch. Nothing arrives frozen, nothing is reheated, nothing is an afterthought.</p>
              <p className="text-gray-600 leading-relaxed">Today, we&apos;re a firm favourite with the Bermondsey community. Office workers pop in for their morning flat white, families come for weekend brunch, and visitors discover us while exploring this brilliant part of South London. We wouldn&apos;t have it any other way.</p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">5★</div><p className="text-gray-600 mt-2 font-medium">Hygiene Rating</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">300+</div><p className="text-gray-600 mt-2 font-medium">Cups Served Daily</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">100%</div><p className="text-gray-600 mt-2 font-medium">Baked In-House</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">4.9★</div><p className="text-gray-600 mt-2 font-medium">Google Rating</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">What Drives Us</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Quality First</h3>
              <p className="text-gray-600">We never cut corners. From the beans we source to the milk we steam, everything meets the highest standard.</p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg></div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Sustainability</h3>
              <p className="text-gray-600">We use compostable cups, source seasonal produce and support ethical coffee farming. Better for the planet, better for the cup.</p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Community</h3>
              <p className="text-gray-600">We&apos;re not a chain &mdash; we&apos;re a neighbourhood cafe. We know our regulars by name and we&apos;re proud to be part of Bermondsey.</p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Local Sourcing</h3>
              <p className="text-gray-600">Our beans, produce and ingredients come from local suppliers wherever possible. Supporting the local economy, one cup at a time.</p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg></div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Freshness</h3>
              <p className="text-gray-600">Everything is made fresh daily. Our pastry chef starts at 4am so everything is ready when you walk through the door.</p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Passion</h3>
              <p className="text-gray-600">We love what we do and it shows in every cup we pour and every dish we plate. Coffee is our craft and it always will be.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Find Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Bermondsey Street, SE1</h2>
          <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">We&apos;re in the heart of Bermondsey, a short walk from London Bridge station. Surrounded by galleries, independent shops and some of the best food in South London.</p>
          <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-8 rounded-sm text-white max-w-lg mx-auto">
            <address className="not-italic text-gray-200 text-lg mb-4">78 Bermondsey Street<br />Bermondsey, London SE1 3UD</address>
            <p className="text-gray-300 text-sm">5-minute walk from London Bridge station (Northern, Jubilee)</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Come Say Hello</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">We&apos;re open seven days a week and there&apos;s always a warm welcome (and a fresh flat white) waiting.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/cafe-bermondsey/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Visit Us</Link>
            <a href="tel:02079468901" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors">Call 020 7946 8901</a>
          </div>
        </div>
      </section>
    </>
  );
}
