import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>

        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent"></div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Tension Released, Balance Restored</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional <span className="text-gold-gradient">Massage Therapy</span> in Covent Garden
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              Expert therapeutic massage in the heart of the West End. Eight
              ITEC and VTCT qualified therapists, seven days a week, with
              evening appointments available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/massage-covent-garden/contact" className="btn-accent text-lg">Book Your Session</Link>
              <Link href="/massage-covent-garden/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">Our Treatments</Link>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>ITEC &amp; VTCT Qualified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>Open 7 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>Est. 2013</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="#00b894" strokeWidth="2" fill="none" />
            <circle cx="200" cy="200" r="140" stroke="#00b894" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="100" stroke="#00b894" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Treatments</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Massage & Therapy Services</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need deep relief from chronic pain or a restorative
              hour of calm, we have the right treatment for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Swedish Massage</h3>
              <p className="text-gray-600 mb-4">Classic relaxation massage using flowing, rhythmic strokes to ease muscular tension, improve circulation, and leave you feeling genuinely renewed.</p>
              <Link href="/massage-covent-garden/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Deep Tissue Massage</h3>
              <p className="text-gray-600 mb-4">Targeted, firm pressure on deeper muscle layers to break down knots, release chronic tension, and restore full range of movement.</p>
              <Link href="/massage-covent-garden/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Sports Massage</h3>
              <p className="text-gray-600 mb-4">Specialist treatment for athletes and active individuals. Prevents injury, speeds recovery, and improves flexibility and performance.</p>
              <Link href="/massage-covent-garden/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Hot Stone Therapy</h3>
              <p className="text-gray-600 mb-4">Smooth, heated basalt stones placed on key points and used as massage tools. The warmth penetrates deep into muscles for profound relaxation.</p>
              <Link href="/massage-covent-garden/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Pregnancy Massage</h3>
              <p className="text-gray-600 mb-4">Gentle, nurturing massage specially adapted for expectant mothers. Relieves back pain, reduces swelling, and promotes better sleep.</p>
              <Link href="/massage-covent-garden/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Reflexology</h3>
              <p className="text-gray-600 mb-4">Targeted pressure-point therapy applied to the feet, stimulating the body&apos;s natural healing processes and promoting deep relaxation.</p>
              <Link href="/massage-covent-garden/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/massage-covent-garden/services" className="btn-primary">View All Treatments</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Therapy You Can Trust</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;re not a spa chain. We&apos;re a dedicated massage therapy clinic
                staffed by highly qualified professionals who treat the cause,
                not just the symptoms. Every session is tailored to your body
                and your goals.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Fully Qualified Therapists</h3>
                    <p className="text-gray-600">All eight of our therapists hold ITEC or VTCT Level 3 and 4 qualifications, with additional CPD in specialist areas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Flexible Hours</h3>
                    <p className="text-gray-600">Open seven days a week with evening appointments until 9pm on weekdays. Fit treatment around your schedule, not the other way round.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Central Location</h3>
                    <p className="text-gray-600">Two minutes from Covent Garden tube on Floral Street. Easy to reach from anywhere in Central London before or after work.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="stat-number">12+</div><p className="text-gray-600 mt-2">Years Experience</p></div>
                <div className="text-center"><div className="stat-number">8</div><p className="text-gray-600 mt-2">Qualified Therapists</p></div>
                <div className="text-center"><div className="stat-number">25k+</div><p className="text-gray-600 mt-2">Treatments Given</p></div>
                <div className="text-center"><div className="stat-number">7</div><p className="text-gray-600 mt-2">Days a Week</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Client Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Clients Say</h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">&quot;I&apos;ve had a standing weekly appointment here for two years. The deep tissue work has completely resolved the chronic neck pain I&apos;d been living with for a decade. Cannot recommend highly enough.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">KW</span></div>
                <div><p className="font-semibold text-primary">Katherine W.</p><p className="text-sm text-gray-500">Office Manager, Strand</p></div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">&quot;Found this place before the London Marathon and it made all the difference. The sports massage therapist clearly understood running injuries. I&apos;ve been going back monthly ever since.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">MB</span></div>
                <div><p className="font-semibold text-primary">Marcus B.</p><p className="text-sm text-gray-500">Marathon Runner</p></div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">&quot;The pregnancy massage was a godsend during my third trimester. My therapist was so knowledgeable and careful. The clinic is spotless and the staff are genuinely lovely.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">EP</span></div>
                <div><p className="font-semibold text-primary">Emma P.</p><p className="text-sm text-gray-500">First-Time Mum, Bloomsbury</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Feel Better?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your massage today. Walk-ins welcome when availability allows,
              but we recommend booking to secure your preferred time and therapist.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/massage-covent-garden/contact" className="btn-accent">Book Your Session</Link>
              <a href="tel:02079467740" className="btn-outline">Call 020 7946 7740</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
