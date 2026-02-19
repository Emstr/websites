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

        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent"></div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Notting Hill&apos;s Favourite Nail Bar
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nails That Make a{" "}
              <span className="text-accent-gradient">Statement</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              Bespoke nail art, flawless gel manicures and luxury pampering
              treatments in the heart of Notting Hill. VTCT qualified
              technicians using only vegan-friendly, cruelty-free products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/nail-salon-notting-hill/contact" className="btn-accent text-lg">
                Book Your Appointment
              </Link>
              <Link
                href="/nail-salon-notting-hill/services"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg"
              >
                View Treatments
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>VTCT Qualified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Hygiene Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Vegan-Friendly Products</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="#ff6b9d" strokeWidth="2" fill="none" />
            <circle cx="200" cy="200" r="140" stroke="#ff6b9d" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="100" stroke="#ff6b9d" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Treatments
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Luxury Nail & Beauty Treatments
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From classic gel manicures to bespoke nail art, every treatment
              is performed by our VTCT qualified technicians using premium,
              vegan-friendly products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Gel Manicure</h3>
              <p className="text-gray-600 mb-4">
                Chip-free, high-shine gel polish that lasts up to three weeks.
                Choose from hundreds of colours or go bespoke with custom mixing.
              </p>
              <Link href="/nail-salon-notting-hill/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                View Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Gel Pedicure</h3>
              <p className="text-gray-600 mb-4">
                Complete foot pampering with soak, exfoliation, cuticle care,
                massage and flawless gel polish application.
              </p>
              <Link href="/nail-salon-notting-hill/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                View Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Nail Art</h3>
              <p className="text-gray-600 mb-4">
                Hand-painted designs from delicate florals and geometric patterns
                to bold, statement nails. Instagram-worthy results every time.
              </p>
              <Link href="/nail-salon-notting-hill/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                View Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Acrylic Extensions</h3>
              <p className="text-gray-600 mb-4">
                Professional acrylic extensions in any length and shape &mdash;
                coffin, almond, stiletto, square or custom. Built to last.
              </p>
              <Link href="/nail-salon-notting-hill/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                View Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">BIAB</h3>
              <p className="text-gray-600 mb-4">
                Builder in a Bottle &mdash; the strengthening gel overlay that
                protects your natural nails while they grow. Perfect for nail
                biters and weak nails.
              </p>
              <Link href="/nail-salon-notting-hill/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                View Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Luxury Spa Treatments</h3>
              <p className="text-gray-600 mb-4">
                Indulgent hand and foot spa treatments with hot stone massage,
                paraffin dips, and aromatherapy oils. Pure relaxation.
              </p>
              <Link href="/nail-salon-notting-hill/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                View Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/nail-salon-notting-hill/services" className="btn-primary">
              View Full Treatment Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                The Notting Hill Difference
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;re not your average nail bar. Every detail matters to us,
                from the products we use to the experience we create. Step into
                our salon and discover why Notting Hill locals keep coming back.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">VTCT Qualified Technicians</h3>
                    <p className="text-gray-600">
                      All our nail technicians hold VTCT Level 2 and 3 qualifications
                      and stay current with advanced training and trends.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Vegan & Cruelty-Free</h3>
                    <p className="text-gray-600">
                      We exclusively use vegan-friendly, cruelty-free products
                      from leading brands. Beautiful nails without compromise.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Impeccable Hygiene</h3>
                    <p className="text-gray-600">
                      We maintain the highest hygiene standards with sterilised
                      tools, single-use files, and hospital-grade disinfection
                      between every client.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="stat-number">5,000+</div>
                  <p className="text-gray-600 mt-2">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">200+</div>
                  <p className="text-gray-600 mt-2">Colours Available</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">5</div>
                  <p className="text-gray-600 mt-2">Star Reviews</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">100%</div>
                  <p className="text-gray-600 mt-2">Vegan Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Client Love
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              What Our Clients Say
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;Best nail salon in West London, hands down. The gel manicure
                lasted three weeks without a single chip. The salon is gorgeous
                and the staff are so welcoming.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">EB</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Emma B.</p>
                  <p className="text-sm text-gray-500">Notting Hill Local</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;I came in for BIAB nails and left with the strongest,
                most beautiful natural nails I&apos;ve ever had. The technician
                really knew her stuff. Already rebooked!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">LM</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Lucy M.</p>
                  <p className="text-sm text-gray-500">Bayswater</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;The nail art here is incredible. I showed them a complex
                design from Pinterest and they recreated it perfectly. Love that
                they use vegan products too.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">ZK</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Zara K.</p>
                  <p className="text-sm text-gray-500">Holland Park</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ready for Gorgeous Nails?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your appointment today and discover why Notting Hill locals
              trust us for their nails. Walk-ins welcome, but booking guarantees
              your preferred time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/nail-salon-notting-hill/contact" className="btn-accent">
                Book Your Appointment
              </Link>
              <a href="tel:02079463678" className="btn-outline">
                Call 020 7946 3678
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
