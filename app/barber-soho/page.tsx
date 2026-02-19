import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[var(--accent)]"></div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
                Est. 2015 &mdash; Soho, London
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Sharp Cuts,{" "}
              <span className="text-gold-gradient">Sharper Style</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              Premium grooming in the heart of Soho. Classic barbering meets
              modern style, delivered by master barbers who take real pride in
              their craft.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/barber-soho/contact"
                className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors shadow-lg text-lg text-center"
              >
                Book Your Chair
              </Link>
              <Link
                href="/barber-soho/services"
                className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors text-lg text-center"
              >
                View Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Master Barbers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Walk-ins Welcome</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Est. 2015</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="#c9a96e" strokeWidth="2" fill="none" />
            <circle cx="200" cy="200" r="140" stroke="#c9a96e" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="100" stroke="#c9a96e" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">
              Craftsmanship in Every Cut
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From classic cuts to hot towel shaves, every service is delivered with
              precision, care and a genuine passion for the craft.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Classic Cuts */}
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--accent)]">
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Classic Cuts</h3>
              <p className="text-gray-600 mb-4">
                Precision haircuts tailored to your style. From textured crops to
                timeless side parts, our barbers deliver consistently sharp results.
              </p>
              <Link href="/barber-soho/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Beard Trims */}
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--accent)]">
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Beard Trims &amp; Shaping</h3>
              <p className="text-gray-600 mb-4">
                Expert beard grooming to keep your facial hair looking sharp. Precise
                trimming, shaping and conditioning for the perfect profile.
              </p>
              <Link href="/barber-soho/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Hot Towel Shaves */}
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--accent)]">
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Hot Towel Shaves</h3>
              <p className="text-gray-600 mb-4">
                The traditional gentleman&apos;s shave experience. Hot towels, premium
                lather and a cut-throat razor for the smoothest finish possible.
              </p>
              <Link href="/barber-soho/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Hair Styling */}
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--accent)]">
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Hair Styling</h3>
              <p className="text-gray-600 mb-4">
                Modern styling and finishing for any occasion. Whether you need a
                slick look for the office or something laid-back for the weekend.
              </p>
              <Link href="/barber-soho/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Colour & Grey Blending */}
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--accent)]">
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Colour &amp; Grey Blending</h3>
              <p className="text-gray-600 mb-4">
                Subtle colour work to refresh your look. Our grey blending service
                reduces silver tones naturally without looking overdone.
              </p>
              <Link href="/barber-soho/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Wedding Grooming */}
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--accent)]">
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Wedding &amp; Event Grooming</h3>
              <p className="text-gray-600 mb-4">
                Look your absolute best on the big day. Complete grooming packages
                for the groom and groomsmen, including trial sessions.
              </p>
              <Link href="/barber-soho/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/barber-soho/services" className="bg-[var(--primary)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--secondary)] transition-colors inline-block">
              View All Services &amp; Prices
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
                Why Soho Barber Co
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">
                More Than Just a Haircut
              </h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                We believe a visit to the barber should be an experience, not a
                chore. Step into our Soho shop and enjoy the atmosphere, the banter,
                and the knowledge that you&apos;re in the hands of proper craftsmen.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--primary)] mb-1">Master Barbers</h3>
                    <p className="text-gray-600">
                      Every barber in our shop is fully trained with years of
                      experience. No juniors, no trainees &mdash; just skilled
                      craftsmen who know their trade.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--primary)] mb-1">No Appointment Needed</h3>
                    <p className="text-gray-600">
                      Walk-ins are always welcome. Pop in on your lunch break, after
                      work, or whenever suits. We keep wait times short and the
                      atmosphere relaxed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--primary)] mb-1">Heart of Soho</h3>
                    <p className="text-gray-600">
                      Located on Berwick Street in the centre of Soho. Easy to reach
                      from Oxford Circus, Tottenham Court Road and Piccadilly Circus.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">10+</div>
                  <p className="text-gray-600 mt-2">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">15k+</div>
                  <p className="text-gray-600 mt-2">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">5</div>
                  <p className="text-gray-600 mt-2">Master Barbers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">7</div>
                  <p className="text-gray-600 mt-2">Days a Week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              What Our Clients Say
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm">
              <p className="text-gray-600 mb-6 italic">
                &quot;Best barber in Soho, hands down. I&apos;ve been coming here for three
                years and the quality is always spot on. The hot towel shave is an
                absolute must.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                  <span className="text-[var(--primary)] font-bold">DT</span>
                </div>
                <div>
                  <p className="font-semibold text-[var(--primary)]">Dan T.</p>
                  <p className="text-sm text-gray-500">Regular Client</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm">
              <p className="text-gray-600 mb-6 italic">
                &quot;Walked in without an appointment and was seen within ten minutes.
                Great atmosphere, quality cut, and the lads really know what
                they&apos;re doing. Top shop.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                  <span className="text-[var(--primary)] font-bold">MR</span>
                </div>
                <div>
                  <p className="font-semibold text-[var(--primary)]">Marcus R.</p>
                  <p className="text-sm text-gray-500">Soho Local</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm">
              <p className="text-gray-600 mb-6 italic">
                &quot;Had my wedding grooming done here and the whole experience was
                brilliant. The groom package sorted me and the groomsmen out
                perfectly. Couldn&apos;t recommend more.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                  <span className="text-[var(--primary)] font-bold">JK</span>
                </div>
                <div>
                  <p className="font-semibold text-[var(--primary)]">James K.</p>
                  <p className="text-sm text-gray-500">Wedding Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-[var(--accent)]">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Ready for a Fresh Cut?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Walk in any time or book ahead to guarantee your chair. Located on
              Berwick Street in the heart of Soho &mdash; just minutes from Oxford Circus.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/barber-soho/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors shadow-lg">
                Book Your Chair
              </Link>
              <a
                href="tel:02079467890"
                className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors"
              >
                Call 020 7946 7890
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
