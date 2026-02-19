import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Experienced Plumbers Serving Brixton Since 2009",
  description:
    "Learn about Brixton Plumbing Services - experienced, Gas Safe registered plumbers serving Brixton and South London. Over 15 years of reliable plumbing work.",
  openGraph: {
    title: "About Us | Brixton Plumbing Services",
    description:
      "Gas Safe registered plumbers with over 15 years of experience serving Brixton and South London.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Your Local Brixton Plumber
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Gas Safe registered, fully insured, and trusted by thousands of
              homeowners across Brixton and South London for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">
                Built on Reliability, Driven by Quality
              </h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Brixton Plumbing Services was founded in 2009 with a simple idea:
                Brixton deserved a plumber they could actually trust. No inflated
                quotes, no unnecessary work, no disappearing halfway through a job.
                Just honest, skilled plumbing at a fair price.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                What started as a one-man operation working out of a van has grown
                into a team of six experienced, Gas Safe registered engineers. We&apos;ve
                stayed true to our roots though — every customer gets the same
                personal service, whether it&apos;s a dripping tap or a full heating
                system installation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We live and work in Brixton, which means we understand the unique
                challenges of South London properties — from Victorian terrace
                plumbing to modern flat conversions. Our local knowledge and
                commitment to the community keep our customers coming back year
                after year.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)]">15+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years in Brixton</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)]">5,000+</div>
                  <p className="text-gray-600 mt-2 font-medium">Jobs Completed</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)]">6</div>
                  <p className="text-gray-600 mt-2 font-medium">Qualified Engineers</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)]">4.9/5</div>
                  <p className="text-gray-600 mt-2 font-medium">Customer Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">
              What We Stand For
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Safety First</h3>
              <p className="text-gray-600">
                Every engineer is Gas Safe registered and undergoes regular
                training. We never cut corners on safety — your family&apos;s
                wellbeing is our top priority.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Fair Pricing</h3>
              <p className="text-gray-600">
                We quote what we mean and mean what we quote. No hidden charges,
                no sneaky extras. You&apos;ll always know exactly what you&apos;re
                paying before we start.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Punctuality</h3>
              <p className="text-gray-600">
                We respect your time. When we say we&apos;ll be there at 9am,
                we&apos;ll be there at 9am. If anything changes, we&apos;ll always
                let you know in advance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Respect</h3>
              <p className="text-gray-600">
                We treat your home like our own. Dust sheets down, shoes off where
                asked, and we always leave your property clean and tidy when we&apos;re done.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Quality Work</h3>
              <p className="text-gray-600">
                We use quality materials and proven techniques. Every job comes
                with a written guarantee because we&apos;re confident in the
                standard of our work.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Local Knowledge</h3>
              <p className="text-gray-600">
                We know Brixton inside out — its Victorian terraces, its council
                estates, its new builds. Local expertise means we solve problems
                faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              Our Area
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">
              Proudly Serving South London
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Based in the heart of Brixton, we cover all of SW2 and the surrounding
              areas including Herne Hill, Tulse Hill, Streatham, Clapham, Stockwell,
              Camberwell, and beyond.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-8 lg:p-12 rounded-sm text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Based in Brixton, SW2</h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Our base on Atlantic Road puts us right in the centre of Brixton,
                  meaning we can reach any emergency in the local area within minutes.
                  We also cover a wide radius across South London for planned work.
                </p>
                <address className="not-italic text-gray-200 mb-6">
                  <strong className="text-white">Brixton Plumbing Services</strong>
                  <br />
                  45 Atlantic Road
                  <br />
                  Brixton, London SW2 1DR
                </address>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4 text-[var(--accent)]">Areas We Cover</h4>
                <div className="grid grid-cols-2 gap-2 text-gray-200">
                  <span>Brixton</span>
                  <span>Herne Hill</span>
                  <span>Tulse Hill</span>
                  <span>Streatham</span>
                  <span>Clapham</span>
                  <span>Stockwell</span>
                  <span>Camberwell</span>
                  <span>Dulwich</span>
                  <span>Kennington</span>
                  <span>Peckham</span>
                  <span>Balham</span>
                  <span>Tooting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gas Safe */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Gas Safe Registered
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              All our engineers are Gas Safe registered, meaning they are legally
              qualified to work on gas appliances and installations. This is your
              guarantee that all gas work is carried out safely and to the highest
              standards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We also carry full public liability insurance and provide written
              guarantees on all workmanship. You can check our Gas Safe registration
              at any time on the official Gas Safe Register website.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Reliable Plumber in Brixton?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get in touch today for a free, no-obligation quote. We&apos;re
            available 24/7 for emergencies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/plumber-brixton/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">
              Get a Free Quote
            </Link>
            <a
              href="tel:02079460123"
              className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors inline-block"
            >
              Call 020 7946 0123
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
