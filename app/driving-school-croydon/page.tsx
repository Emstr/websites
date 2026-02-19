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
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Croydon&apos;s Top-Rated Driving School
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Learn to Drive with{" "}
              <span className="text-accent-gradient">Confidence</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              DVSA approved instructors with a 90% first-time pass rate. Whether
              you&apos;re a complete beginner or need a refresher, we&apos;ll get you
              on the road safely.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/driving-school-croydon/contact" className="btn-accent text-lg">
                Book Your First Lesson
              </Link>
              <Link href="/driving-school-croydon/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">
                View Courses
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>DVSA Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>90% First-Time Pass Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Patient Instructors</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="#3182ce" strokeWidth="2" fill="none" />
            <circle cx="200" cy="200" r="140" stroke="#3182ce" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="100" stroke="#3182ce" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Courses</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Driving Lessons for Every Learner</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From your very first lesson to advanced motorway training, we have the
              right course to match your experience level and learning goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Manual Lessons</h3>
              <p className="text-gray-600 mb-4">
                Learn to drive a manual car with patient, structured lessons that
                build your skills and confidence progressively.
              </p>
              <Link href="/driving-school-croydon/services" className="text-accent font-semibold inline-flex items-center gap-2">
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Automatic Lessons</h3>
              <p className="text-gray-600 mb-4">
                Simpler gear management means you can focus on the road. Ideal for
                learners who want a stress-free experience.
              </p>
              <Link href="/driving-school-croydon/services" className="text-accent font-semibold inline-flex items-center gap-2">
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Intensive Courses</h3>
              <p className="text-gray-600 mb-4">
                Fast-track your way to a licence with our intensive courses. Pass
                in as little as one to two weeks.
              </p>
              <Link href="/driving-school-croydon/services" className="text-accent font-semibold inline-flex items-center gap-2">
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Pass Plus</h3>
              <p className="text-gray-600 mb-4">
                Post-test training that builds confidence and can reduce your
                insurance premiums. Covers motorways, night driving and more.
              </p>
              <Link href="/driving-school-croydon/services" className="text-accent font-semibold inline-flex items-center gap-2">
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0h-3m3 0h7v-3a3 3 0 00-3-3h-1m-6 6H4m0 0v-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Motorway Lessons</h3>
              <p className="text-gray-600 mb-4">
                Professional motorway tuition with an experienced instructor. Build
                the skills to drive safely at higher speeds.
              </p>
              <Link href="/driving-school-croydon/services" className="text-accent font-semibold inline-flex items-center gap-2">
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Refresher Courses</h3>
              <p className="text-gray-600 mb-4">
                Haven&apos;t driven for a while? Our refresher courses rebuild your
                confidence and bring your skills up to date.
              </p>
              <Link href="/driving-school-croydon/services" className="text-accent font-semibold inline-flex items-center gap-2">
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/driving-school-croydon/services" className="btn-primary">View All Courses</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">The Croydon Driving Academy Difference</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;re not just about getting you through the test &mdash; we&apos;re
                about making you a safe, confident driver for life. Our DVSA approved
                instructors combine expert tuition with genuine patience.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">DVSA Approved Instructors</h3>
                    <p className="text-gray-600">All our instructors are DVSA approved driving instructors (ADIs) with enhanced DBS checks and years of teaching experience.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">90% First-Time Pass Rate</h3>
                    <p className="text-gray-600">Our pass rate is well above the national average because we don&apos;t put you in for your test until you&apos;re truly ready.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Patient &amp; Supportive</h3>
                    <p className="text-gray-600">Learning to drive can be nerve-wracking. Our instructors are patient, encouraging and never lose their cool.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center"><div className="stat-number">90%</div><p className="text-gray-600 mt-2">Pass Rate</p></div>
                <div className="text-center"><div className="stat-number">2,000+</div><p className="text-gray-600 mt-2">Passes Achieved</p></div>
                <div className="text-center"><div className="stat-number">15+</div><p className="text-gray-600 mt-2">Years Teaching</p></div>
                <div className="text-center"><div className="stat-number">5★</div><p className="text-gray-600 mt-2">Google Rating</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Learners Say</h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">&quot;I was so nervous about learning to drive but my instructor was incredibly patient. Passed first time after just 25 lessons! Cannot recommend enough.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">AP</span></div>
                <div><p className="font-semibold text-primary">Aisha P.</p><p className="text-sm text-gray-500">Passed First Time, Croydon</p></div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">&quot;Did the intensive course over two weeks and passed with only 3 minors. The structured approach really works. Worth every penny.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">DK</span></div>
                <div><p className="font-semibold text-primary">Daniel K.</p><p className="text-sm text-gray-500">Intensive Course Graduate</p></div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">&quot;After failing twice with another school, I switched to Croydon Driving Academy. Completely different experience &mdash; supportive, thorough and I passed!&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">LW</span></div>
                <div><p className="font-semibold text-primary">Lauren W.</p><p className="text-sm text-gray-500">Third Time Lucky, Purley</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Start Driving?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your first lesson today and take the first step towards your
              driving licence. We pick you up from home, work or college.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/driving-school-croydon/contact" className="btn-accent">Book Your First Lesson</Link>
              <a href="tel:02079463678" className="btn-outline">Call 020 7946 3678</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
