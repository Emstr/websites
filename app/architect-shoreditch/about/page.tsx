import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | RIBA Chartered Architects in Shoreditch",
  description: "Learn about Shoreditch Architecture Studio - RIBA Chartered, ARB Registered architects with 15+ years experience in residential and commercial design across East London.",
  openGraph: { title: "About Us | Shoreditch Architecture Studio", description: "Award-winning RIBA Chartered architects in Shoreditch with 15+ years experience." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">About Us</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Design-Led Architecture Since 2010</h1><p className="text-xl text-gray-200 leading-relaxed">RIBA Chartered architects creating thoughtful, contemporary design from the heart of Shoreditch.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Story</span><h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Architecture Rooted in Shoreditch</h2><div className="gold-line mb-6"></div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">Shoreditch Architecture Studio was founded in 2010 with a simple belief: that good architecture should be accessible to everyone, not just those with unlimited budgets. Our founding director, a graduate of the Bartlett School of Architecture, established the practice in Shoreditch to serve the diverse communities and businesses of East London.</p>
          <p className="text-gray-600 mb-6 leading-relaxed">Over fifteen years, we have grown from a two-person studio to a team of eight architects and designers. Our work spans residential, commercial and heritage projects across Hackney, Tower Hamlets, Islington, Newham and beyond. We are proud to be a RIBA Chartered Practice and all our architects are ARB registered.</p>
          <p className="text-gray-600 leading-relaxed">What has not changed is our commitment to design quality, honest communication and delivering projects that exceed expectations. We treat every project — whether a rear extension or a multi-unit development — with the same rigour and creativity.</p>
        </div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">15+</div><p className="text-gray-600 mt-2 font-medium">Years in Practice</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">200+</div><p className="text-gray-600 mt-2 font-medium">Projects Completed</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">95%</div><p className="text-gray-600 mt-2 font-medium">Planning Approval</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">5★</div><p className="text-gray-600 mt-2 font-medium">Google Rating</p></div>
        </div></div>
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="text-center mb-16"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Values</span><h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">What Drives Our Practice</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Design Quality", desc: "We believe every project deserves design excellence. We do not do generic or off-the-shelf — every scheme is developed from scratch to respond to its unique context and brief." },
            { title: "Context & Place", desc: "Great architecture responds to its surroundings. We study the history, character and materials of each location to create buildings that belong where they are built." },
            { title: "Honest Communication", desc: "We are straightforward about what is achievable, what things cost and how long they take. No surprises, no jargon — just clear, professional communication." },
            { title: "Sustainability", desc: "Environmental responsibility is integral to our design process. We prioritise energy efficiency, natural materials and retrofit solutions that reduce carbon impact." },
            { title: "Collaboration", desc: "We work closely with our clients, engineers, contractors and consultants. The best projects emerge from genuine collaboration and open dialogue." },
            { title: "Attention to Detail", desc: "The details make the difference between good architecture and great architecture. We obsess over junctions, materials and proportions so the finished building is exactly right." },
          ].map((v) => (<div key={v.title} className="card-premium p-8"><div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div><h3 className="text-xl font-bold text-[var(--primary)] mb-3">{v.title}</h3><p className="text-gray-600">{v.desc}</p></div>))}
        </div>
      </div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="text-center mb-16"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Studio</span><h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Visit Us in Shoreditch</h2><div className="gold-line-center mb-6"></div></div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-[var(--accent)] max-w-2xl mx-auto"><address className="not-italic text-gray-700 mb-4">58 Rivington Street<br />Shoreditch, London E2 7QN</address>
          <ul className="space-y-2 text-gray-600"><li className="flex items-center gap-2"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>5 minutes from Shoreditch High Street Overground</li><li className="flex items-center gap-2"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>7 minutes from Old Street station (Northern line)</li><li className="flex items-center gap-2"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Open plan studio with meeting room</li><li className="flex items-center gap-2"><svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Ground floor, step-free access</li></ul>
        </div>
      </div></section>

      <section className="section-padding bg-[var(--primary)]"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Discuss Your Project?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a free initial consultation at our Shoreditch studio. We would love to hear about your project.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/architect-shoreditch/contact" className="btn-accent">Book a Consultation</Link><a href="tel:02079466901" className="btn-outline border-white text-white hover:bg-white hover:text-[var(--primary)]">Call 020 7946 6901</a></div></div></section>
    </>
  );
}
