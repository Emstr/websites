import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Ofsted Outstanding Nursery Since 2011",
  description: "Learn about Dulwich Day Nursery - Ofsted Outstanding childcare in Dulwich since 2011. 12 qualified practitioners, 60 places, forest school and a passion for early years education.",
  openGraph: { title: "About Us | Dulwich Day Nursery", description: "Ofsted Outstanding nursery in Dulwich Village since 2011. Nurturing childcare for ages 3 months to 11 years." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Nurturing Dulwich&apos;s Children Since 2011</h1>
            <p className="text-xl text-gray-200 leading-relaxed">A family-run nursery with an Ofsted Outstanding rating, dedicated to giving every child the best possible start in life.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">From a Family Dream to an Outstanding Nursery</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Dulwich Day Nursery was founded in 2011 by a local family who wanted to create the kind of nursery they wished existed for their own children: small enough to feel like home, yet rich enough to prepare children brilliantly for school. Our founders believed in the power of outdoor learning long before forest school became a trend.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">From our very first Ofsted inspection, we were rated Outstanding, a recognition of the exceptional care and education we provide. That rating is not just a badge &mdash; it reflects the daily commitment of every member of our team to go above and beyond for the children and families in our care.</p>
              <p className="text-gray-600 leading-relaxed">Today, with 60 places and a team of 12 qualified practitioners, we remain true to our founding values: warmth, quality, creativity and a deep respect for childhood. Many of our original families have sent younger siblings to us, and we regularly welcome the children of parents who attended the nursery themselves.</p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-4xl font-bold text-[var(--accent)] font-serif">14+</div><p className="text-gray-600 mt-2 font-medium">Years of Care</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-4xl font-bold text-[var(--accent)] font-serif">60</div><p className="text-gray-600 mt-2 font-medium">Nursery Places</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-4xl font-bold text-[var(--accent)] font-serif">12</div><p className="text-gray-600 mt-2 font-medium">Practitioners</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-4xl font-bold text-[var(--accent)] font-serif">100%</div><p className="text-gray-600 mt-2 font-medium">Ofsted Outstanding</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">What Guides Everything We Do</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm"><div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></div><h3 className="text-xl font-bold text-[var(--primary)] mb-3">Warmth &amp; Nurture</h3><p className="text-gray-600">Children thrive when they feel safe and loved. Every child in our care is valued as an individual, and our practitioners build genuine, caring relationships with each one.</p></div>
            <div className="bg-white p-8 rounded-sm shadow-sm"><div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg></div><h3 className="text-xl font-bold text-[var(--primary)] mb-3">Curiosity &amp; Discovery</h3><p className="text-gray-600">We encourage children to ask questions, explore and discover. Our learning environment is designed to spark curiosity and support children&apos;s natural desire to understand the world.</p></div>
            <div className="bg-white p-8 rounded-sm shadow-sm"><div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg></div><h3 className="text-xl font-bold text-[var(--primary)] mb-3">Nature &amp; Outdoors</h3><p className="text-gray-600">Outdoor learning is central to our approach. From our garden to Dulwich Park forest school, children benefit from fresh air, physical activity and hands-on experiences with the natural world.</p></div>
            <div className="bg-white p-8 rounded-sm shadow-sm"><div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></div><h3 className="text-xl font-bold text-[var(--primary)] mb-3">Partnership</h3><p className="text-gray-600">We are partners with parents, not substitutes. Regular communication, parent consultations and an open-door policy ensure families feel connected and involved in their child&apos;s learning journey.</p></div>
            <div className="bg-white p-8 rounded-sm shadow-sm"><div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div><h3 className="text-xl font-bold text-[var(--primary)] mb-3">Safety &amp; Wellbeing</h3><p className="text-gray-600">Safeguarding is our highest priority. Every practitioner is DBS-checked, paediatric first aid trained and regularly updated on safeguarding procedures. Our premises are secure and regularly risk-assessed.</p></div>
            <div className="bg-white p-8 rounded-sm shadow-sm"><div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div><h3 className="text-xl font-bold text-[var(--primary)] mb-3">Continuous Improvement</h3><p className="text-gray-600">Outstanding is not a destination &mdash; it is a commitment. We continuously reflect on our practice, invest in staff development and seek feedback from families to keep getting better.</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Location</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">In the Heart of Dulwich Village</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Located on Village Way, we are a five-minute walk from West Dulwich station and close to Dulwich Park, which we use for our forest school sessions and nature walks.</p>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div><h3 className="text-xl font-bold text-[var(--primary)] mb-4">Getting Here</h3><address className="not-italic text-gray-700 mb-4"><strong>14 Village Way</strong><br />Dulwich, London SE21 7AW</address><ul className="space-y-2 text-gray-600"><li className="flex items-center gap-2"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>West Dulwich rail - 5 min walk</li><li className="flex items-center gap-2"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>North Dulwich rail - 8 min walk</li></ul></div>
              <div><h3 className="text-xl font-bold text-[var(--primary)] mb-4">Opening Hours</h3><div className="space-y-2 text-gray-600"><p><strong>Monday - Friday:</strong> 7:30am - 6:30pm</p><p><strong>Weekends:</strong> Closed</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Visit?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">We would love to show you around our nursery and introduce you to the team. Book a visit today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/nursery-dulwich/contact" className="bg-[var(--accent)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Book a Visit</Link>
            <a href="tel:02079462290" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors">Call 020 7946 2290</a>
          </div>
        </div>
      </section>
    </>
  );
}
