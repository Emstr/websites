import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Independent Opticians Since 2010",
  description: "Learn about Brixton Eye Care — independent opticians serving Brixton since 2010. Four GOC-registered optometrists, advanced technology, and a community-first approach.",
  openGraph: { title: "About Us | Brixton Eye Care", description: "Independent opticians in Brixton since 2010. Four experienced optometrists and a commitment to thorough, unhurried eye care." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Your Local Eye Care Experts</h1><p className="text-xl text-gray-200 leading-relaxed">An independent practice built on the belief that great eye care means taking the time to do things properly.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Serving Brixton Since 2010</h2><div className="gold-line mb-6"></div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">Brixton Eye Care was founded by optometrist David Okonkwo in 2010. After working in high-street chains where eye tests were rushed to 15-minute slots, David wanted to create a practice where patients received the time and attention their eyes deserved.</p>
          <p className="text-gray-600 mb-6 leading-relaxed">He opened the doors on Brixton Road with a simple promise: 30-minute eye tests, advanced technology as standard, and honest advice about your eye health. That promise has not changed in over fourteen years.</p>
          <p className="text-gray-600 leading-relaxed">Today, our team of four optometrists has cared for over 12,000 patients. We are proud to be part of the Brixton community and grateful for the trust our patients place in us every day.</p>
        </div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">12K+</div><p className="text-gray-600 mt-2 font-medium">Patients Served</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">4</div><p className="text-gray-600 mt-2 font-medium">Optometrists</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">2010</div><p className="text-gray-600 mt-2 font-medium">Established</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">500+</div><p className="text-gray-600 mt-2 font-medium">Frames in Stock</p></div>
        </div></div>
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What Matters to Us</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{ t: "Thoroughness", d: "We never rush. Every eye test is a full 30 minutes. We screen for conditions that other practices might miss." },
            { t: "Honesty", d: "We will never recommend glasses or lenses you do not need. Our advice is based on your clinical needs, not sales targets." },
            { t: "Accessibility", d: "Eye care should be available to everyone. We offer NHS appointments, affordable frame ranges, and flexible payment options." },
            { t: "Technology", d: "We invest in the latest diagnostic equipment because better technology means earlier detection and better outcomes." },
            { t: "Continuity", d: "You will see the same optometrist at each visit. We build long-term relationships with our patients to track changes over time." },
            { t: "Community", d: "We are rooted in Brixton. We support local initiatives, employ locally, and take pride in serving our neighbourhood." },
          ].map((v, i) => (
            <div key={i} className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">{v.t}</h3><p className="text-gray-600">{v.d}</p></div>
          ))}
        </div>
      </div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Find Us</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">On Brixton Road</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 max-w-3xl mx-auto">Just a three-minute walk from Brixton station, our practice is easy to find and accessible for all.</p></div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 rounded-sm text-white"><h3 className="text-2xl font-bold mb-6">Practice Details</h3><address className="not-italic text-gray-200 mb-6"><strong className="text-white">45 Brixton Road</strong><br />Brixton, London SW9 6DE</address><div className="mb-6"><p className="text-accent font-semibold mb-2">Opening Hours</p><p className="text-gray-200">Mon-Fri: 9am - 6pm<br />Sat: 9am - 5pm<br />Sun: Closed</p></div>
            <ul className="space-y-2 text-gray-200"><li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Brixton station — 3 min walk</li><li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Oval station — 10 min walk</li></ul>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent"><h3 className="text-2xl font-bold text-primary mb-6">NHS Eye Tests</h3><p className="text-gray-600 mb-6 leading-relaxed">You may be entitled to a free NHS eye test if you are under 16, a full-time student under 19, over 60, registered blind or partially sighted, diagnosed with diabetes or glaucoma, or receiving certain benefits.</p><p className="text-gray-600 mb-6 leading-relaxed">Not sure if you qualify? Just ask — our team will check your eligibility when you book.</p><Link href="/optician-brixton/contact" className="btn-accent inline-block">Book Your Eye Test</Link></div>
        </div>
      </div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book Your Appointment?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Protect your vision with a comprehensive eye examination from our experienced team.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/optician-brixton/contact" className="btn-accent">Book Eye Test</Link><a href="tel:02079465520" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 5520</a></div></div></section>
    </>
  );
}
