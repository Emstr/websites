import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[var(--accent)]"></div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
                Bermondsey Street, SE1
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Brewed with{" "}
              <span className="text-gold-gradient">Passion</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              Speciality coffee, freshly baked pastries and an all-day brunch menu
              in the heart of Bermondsey. Locally roasted, lovingly served.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/cafe-bermondsey/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors shadow-lg text-lg text-center">
                Visit Us Today
              </Link>
              <Link href="/cafe-bermondsey/services" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors text-lg text-center">
                View Menu
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>Speciality Coffee Association</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>5-Star Hygiene Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>Locally Roasted</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="#d4a574" strokeWidth="2" fill="none" />
            <circle cx="200" cy="200" r="140" stroke="#d4a574" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="100" stroke="#d4a574" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">More Than Just Coffee</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From single-origin pour-overs to house-baked pastries and a weekend brunch worth queueing for.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--accent)]">
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Speciality Coffee</h3>
              <p className="text-gray-600 mb-4">Single-origin beans roasted locally in South London. Espresso, pour-over, cold brew and more, pulled by trained baristas.</p>
              <Link href="/cafe-bermondsey/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">See Menu <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--accent)]">
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 013 15.546m18-3.091c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Artisan Pastries &amp; Cakes</h3>
              <p className="text-gray-600 mb-4">Freshly baked each morning in our kitchen. Croissants, sourdough, cakes and seasonal treats &mdash; all made from scratch.</p>
              <Link href="/cafe-bermondsey/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">See Menu <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--accent)]">
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Brunch Menu</h3>
              <p className="text-gray-600 mb-4">All-day brunch with eggs done every way, avocado toast, shakshuka and our legendary full English. Weekend bookings recommended.</p>
              <Link href="/cafe-bermondsey/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">See Menu <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--accent)]">
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Private Hire &amp; Events</h3>
              <p className="text-gray-600 mb-4">Hire our space for birthdays, baby showers, corporate meetings or any occasion. Full catering available.</p>
              <Link href="/cafe-bermondsey/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--accent)]">
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Coffee Subscriptions</h3>
              <p className="text-gray-600 mb-4">Fresh beans delivered to your door monthly. Choose your roast, your grind and your frequency.</p>
              <Link href="/cafe-bermondsey/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">Subscribe <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--accent)]">
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Catering</h3>
              <p className="text-gray-600 mb-4">Coffee carts, pastry platters and full catering for corporate events, weddings and private parties across London.</p>
              <Link href="/cafe-bermondsey/services" className="text-[var(--accent)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">Enquire <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Coffee Done Properly</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">We care about every detail &mdash; from the origin of our beans to the temperature of the milk. It&apos;s not just coffee, it&apos;s craft.</p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--primary)] mb-1">Locally Roasted</h3>
                    <p className="text-gray-600">Our beans are roasted in small batches by a South London roastery. Fresh, traceable and packed with flavour.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--primary)] mb-1">Baked In-House</h3>
                    <p className="text-gray-600">Every pastry, cake and sourdough loaf is made from scratch in our kitchen each morning. Nothing arrives frozen.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--primary)] mb-1">Heart of Bermondsey</h3>
                    <p className="text-gray-600">On Bermondsey Street, surrounded by galleries, independent shops and some of London&apos;s best food spots.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">5★</div>
                  <p className="text-gray-600 mt-2">Hygiene Rating</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">300+</div>
                  <p className="text-gray-600 mt-2">Cups Daily</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">100%</div>
                  <p className="text-gray-600 mt-2">Locally Roasted</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">7</div>
                  <p className="text-gray-600 mt-2">Days Open</p>
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
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Guests Say</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm">
              <p className="text-gray-600 mb-6 italic">&quot;The best flat white south of the river. The pastries are incredible too &mdash; you can tell everything is made fresh. My go-to morning spot.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">EW</span></div>
                <div><p className="font-semibold text-[var(--primary)]">Emily W.</p><p className="text-sm text-gray-500">Bermondsey Local</p></div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <p className="text-gray-600 mb-6 italic">&quot;We hired the cafe for my partner&apos;s birthday and the team went above and beyond. Amazing food, beautiful space and the coffee was outstanding.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">TC</span></div>
                <div><p className="font-semibold text-[var(--primary)]">Tom C.</p><p className="text-sm text-gray-500">Private Hire Client</p></div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <p className="text-gray-600 mb-6 italic">&quot;Their coffee subscription has been brilliant. Fresh beans every month and the quality is consistently excellent. Proper speciality coffee at home.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center"><span className="text-[var(--primary)] font-bold">LS</span></div>
                <div><p className="font-semibold text-[var(--primary)]">Laura S.</p><p className="text-sm text-gray-500">Subscription Customer</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-[var(--accent)]">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Come for the Coffee, Stay for the Vibes</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">We&apos;re on Bermondsey Street, just a short walk from London Bridge. Open seven days a week.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/cafe-bermondsey/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors shadow-lg">Find Us</Link>
              <a href="tel:02079468901" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors">Call 020 7946 8901</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
