import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Family-Run Independent Financial Advisers in Sheffield",
  description:
    "Meet Jane and Paul Shepherd — family-run independent financial advisers in Sheffield since 2005. Personal, dedicated financial advice you can trust.",
  openGraph: {
    title: "About Us | Shepherd Independent Financial Advisers",
    description:
      "Family-run independent financial advisers in Sheffield. Jane and Paul Shepherd have been providing personal financial advice since 2005.",
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
              A Family Firm Built on Trust
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Jane and Paul Shepherd have been helping Sheffield families make
              confident financial decisions since 2005. Personal service,
              independent advice, and a genuine commitment to your future.
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
                Personal Financial Advice Since 2005
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Shepherd Independent Financial Advisers was founded by Jane and Paul
                Shepherd with a simple belief: that everyone deserves honest, personal
                financial advice from someone who genuinely cares about their future.
                Over two decades later, that belief still drives everything we do.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a husband-and-wife team, we bring a unique perspective to financial
                planning. We understand the real-life decisions families face — from
                buying a first home and starting a pension, to planning for retirement
                and protecting loved ones. We&apos;ve been through these milestones
                ourselves, and we bring that personal understanding to every client
                relationship.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Based at Hill Top House on Ringinglow Road, we&apos;re proud to serve
                the Sheffield community. Many of our clients have been with us for
                over a decade, and several have referred their children and
                grandchildren to us. That kind of trust is something we never take
                for granted.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">20+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years of Service</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">2</div>
                  <p className="text-gray-600 mt-2 font-medium">Dedicated Advisers</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">1</div>
                  <p className="text-gray-600 mt-2 font-medium">Sheffield Office</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">100%</div>
                  <p className="text-gray-600 mt-2 font-medium">Independent</p>
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
              What We Stand For
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Personal Touch</h3>
              <p className="text-gray-600">
                You&apos;ll always deal directly with Jane or Paul. We know our
                clients by name, understand their families, and remember their
                goals. That&apos;s the advantage of a family firm.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Independence</h3>
              <p className="text-gray-600">
                We&apos;re directly authorised and not tied to any product provider.
                That means we genuinely recommend what&apos;s best for you from the
                entire market — no conflicts of interest.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Plain English</h3>
              <p className="text-gray-600">
                Financial jargon can be confusing. We explain everything in clear,
                simple language and make sure you fully understand our advice
                before making any decisions.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Long-term Commitment</h3>
              <p className="text-gray-600">
                We don&apos;t disappear after giving advice. We build lasting
                relationships and provide ongoing reviews, adapting your plan as
                your life changes over the years.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
              <p className="text-gray-600">
                Honesty is at the heart of what we do. If we think a product
                isn&apos;t right for you, we&apos;ll say so. Our reputation is built
                on doing the right thing, always.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Rooted in Sheffield</h3>
              <p className="text-gray-600">
                We live and work in Sheffield. We know the local community,
                understand the local economy, and are proud to serve the people
                of South Yorkshire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulation */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              FCA Regulated
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Shepherd Independent Financial Advisers Limited is directly authorised
              and regulated by the Financial Conduct Authority (FCA). This means we
              adhere to the highest standards of professional conduct and our clients
              benefit from the protections provided by the Financial Services
              Compensation Scheme (FSCS).
            </p>
            <p className="text-gray-600 leading-relaxed">
              You can verify our regulatory status on the FCA Register at
              register.fca.org.uk or by contacting the FCA on 0800 111 6768. Being
              directly authorised means we take full responsibility for the advice we
              give — something we&apos;re proud of.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Meet Jane and Paul?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a free, no-obligation consultation at our Sheffield office and
            discover how personal financial advice can make a real difference to
            your future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/shepherd-ifa/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a
              href="tel:01142505260"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 0114 250 5260
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
