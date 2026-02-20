import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Swiss-Trained Master Horologist Since 2006",
  description:
    "Learn about Mayfair Horologists - Swiss-trained master horologist providing expert watch repair and restoration from Burlington Arcade since 2006. Over 10,000 watches serviced.",
  openGraph: {
    title: "About Us | Mayfair Horologists",
    description:
      "Swiss-trained master horologist in Burlington Arcade, Mayfair. Expert watch repair and restoration since 2006.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              A Passion for Precision
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Since 2006, Mayfair Horologists has been the trusted destination for
              discerning watch owners seeking exceptional repair and restoration
              from the heart of Burlington Arcade.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                Craftsmanship Since 2006
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mayfair Horologists was founded by a master horologist who trained
                in the watchmaking ateliers of La Chaux-de-Fonds, Switzerland &mdash;
                the historic cradle of the Swiss watch industry. After years
                perfecting his craft alongside some of Europe&apos;s finest
                watchmakers, he brought that precision and passion to London&apos;s
                iconic Burlington Arcade.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                What began as a modest workshop has grown into one of Mayfair&apos;s
                most respected horological practices. We have earned the trust of
                collectors, enthusiasts and everyday watch wearers alike, servicing
                everything from contemporary luxury pieces to irreplaceable family
                heirlooms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our philosophy is simple: treat every timepiece with the same care
                and respect, regardless of its monetary value. Whether it&apos;s a
                vintage Omega from 1962 or a modern Rolex Submariner, we apply the
                same exacting standards of Swiss craftsmanship to every watch that
                crosses our bench.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">18+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years of Excellence</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">10k+</div>
                  <p className="text-gray-600 mt-2 font-medium">Watches Serviced</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">12</div>
                  <p className="text-gray-600 mt-2 font-medium">Month Guarantee</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">100%</div>
                  <p className="text-gray-600 mt-2 font-medium">Genuine Parts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              What Sets Us Apart
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Swiss Training</h3>
              <p className="text-gray-600">
                Our master horologist trained in Switzerland&apos;s most prestigious
                workshops, bringing authentic Swiss watchmaking techniques to
                every repair we undertake.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Personal Service</h3>
              <p className="text-gray-600">
                You deal directly with the horologist who will work on your watch.
                No call centres, no middlemen &mdash; just expert, personal attention
                from start to finish.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                We provide a detailed assessment and clear quote before any work
                begins. There are never hidden charges or unexpected additions to
                your bill.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Genuine Parts</h3>
              <p className="text-gray-600">
                We use only genuine and manufacturer-approved components. For
                vintage pieces, we source period-correct parts from specialist
                suppliers to preserve authenticity.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Guaranteed Work</h3>
              <p className="text-gray-600">
                Every service and repair is backed by our comprehensive
                twelve-month guarantee. We stand behind the quality of our work
                with complete confidence.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Heritage Location</h3>
              <p className="text-gray-600">
                Burlington Arcade has been home to fine craftsmen since 1819. Our
                workshop continues this tradition of excellence in one of London&apos;s
                most distinguished settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Location
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Burlington Arcade, Mayfair
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our workshop is situated in the historic Burlington Arcade, one of
              London&apos;s finest covered shopping arcades. Conveniently located in the
              heart of Mayfair with excellent transport links.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-sm">
              <svg className="w-10 h-10 text-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-lg font-bold text-primary mb-2">Green Park</h3>
              <p className="text-gray-600">2-minute walk</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-sm">
              <svg className="w-10 h-10 text-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-lg font-bold text-primary mb-2">Piccadilly Circus</h3>
              <p className="text-gray-600">4-minute walk</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-sm">
              <svg className="w-10 h-10 text-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-lg font-bold text-primary mb-2">Bond Street</h3>
              <p className="text-gray-600">5-minute walk</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Entrust Your Timepiece to the Experts
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Visit our Burlington Arcade workshop or contact us to discuss your
            watch&apos;s needs. We offer free assessments for all timepieces.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/watch-repair-mayfair/contact" className="btn-accent">
              Book a Service
            </Link>
            <a
              href="tel:02079468850"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 020 7946 8850
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
