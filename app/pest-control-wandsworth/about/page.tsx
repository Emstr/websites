import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | BPCA Certified Pest Control in Wandsworth",
  description:
    "Learn about Wandsworth Pest Solutions - BPCA member and RSPH qualified pest control specialists serving Wandsworth and South West London since 2009.",
  openGraph: {
    title: "About Us | Wandsworth Pest Solutions",
    description: "BPCA certified pest control specialists in Wandsworth. Discreet, effective, same-day service.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Wandsworth&apos;s Trusted Pest Experts</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              BPCA member and RSPH qualified technicians providing discreet,
              effective pest control across Wandsworth and South West London.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                Protecting Wandsworth Homes &amp; Businesses Since 2009
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Wandsworth Pest Solutions was founded by experienced pest control
                professionals who saw a need for a truly local, responsive service
                in South West London. We understood that when you have a pest
                problem, you need it dealt with quickly, discreetly, and properly.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every one of our technicians is BPCA trained and holds RSPH Level 2
                qualifications in pest management. We use only approved products and
                follow integrated pest management principles — combining prevention,
                monitoring, and targeted treatment for lasting results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today we serve thousands of domestic and commercial customers across
                Wandsworth, Putney, Tooting, Balham, Battersea, and the wider SW
                London area. Our reputation is built on fast response, honest pricing,
                and results you can count on.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">15+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years of Service</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">5,000+</div>
                  <p className="text-gray-600 mt-2 font-medium">Jobs Completed</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">4.9/5</div>
                  <p className="text-gray-600 mt-2 font-medium">Customer Rating</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">100%</div>
                  <p className="text-gray-600 mt-2 font-medium">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What Sets Us Apart</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Speed</h3>
              <p className="text-gray-600">Same-day callouts for urgent problems. We know pest issues can&apos;t wait, so neither do we.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Discretion</h3>
              <p className="text-gray-600">Unmarked vehicles and plain-clothes technicians. Your privacy matters to us.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Expertise</h3>
              <p className="text-gray-600">BPCA members with RSPH Level 2 qualifications. We use the right methods for every pest, every time.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Fair Pricing</h3>
              <p className="text-gray-600">Honest, upfront quotes with no hidden charges. We tell you the cost before any work begins.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Eco-Conscious</h3>
              <p className="text-gray-600">We use integrated pest management and choose the least toxic effective treatments wherever possible.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Local Knowledge</h3>
              <p className="text-gray-600">Based in Wandsworth, we know the local pest pressures and can respond quickly across SW London.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Service Area</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Covering South West London</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Based in Wandsworth, we provide pest control services across Putney,
              Tooting, Balham, Battersea, Clapham, Streatham, and the wider
              South West London area.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Got a Pest Problem?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Call us now for a free quote. Same-day service available across Wandsworth and South West London.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pest-control-wandsworth/contact" className="btn-accent">Get a Free Quote</Link>
            <a href="tel:02079468123" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 8123</a>
          </div>
        </div>
      </section>
    </>
  );
}
