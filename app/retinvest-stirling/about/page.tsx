import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Independent Financial Advisers in Stirling",
  description:
    "Learn about Retirement & Investment Solutions Ltd (Retinvest) - independent financial advisers specialising in divorce planning and pension transfers, based at Castle Business Park, Stirling.",
  openGraph: {
    title: "About Us | Retinvest - Retirement & Investment Solutions",
    description:
      "Independent financial advisers in Stirling specialising in divorce financial planning and pension transfers, serving Central Scotland.",
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
              Your Trusted Financial Partners in Central Scotland
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Independent financial advisers specialising in divorce planning
              and pension transfers, based at Castle Business Park, Stirling.
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
                Central Scotland&apos;s Divorce &amp; Pension Specialists
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Retirement &amp; Investment Solutions Ltd, trading as Retinvest, was
                established to provide specialist, independent financial advice to
                individuals and families across Central Scotland. Based at Lomond
                Court in Castle Business Park, Stirling, we have built our
                reputation on genuine expertise, particularly in the areas of
                divorce financial planning and pension transfers.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We recognised that many people going through separation needed
                specialist financial guidance that went beyond generic advice.
                Pensions are often the second most valuable asset in a divorce,
                yet they are frequently misunderstood and undervalued. Our team
                has developed deep expertise in pension sharing orders, CETV
                analysis, and post-divorce financial rebuilding.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we advise clients from across Stirling, Falkirk, Dunblane,
                Fife and West Lothian on the full range of financial planning
                needs, from retirement planning and investments to tax and trust
                planning, equity release and comprehensive wealth management.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">7</div>
                  <p className="text-gray-600 mt-2 font-medium">Specialist Services</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">5</div>
                  <p className="text-gray-600 mt-2 font-medium">Areas Served</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">100%</div>
                  <p className="text-gray-600 mt-2 font-medium">Independent</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">FCA</div>
                  <p className="text-gray-600 mt-2 font-medium">Regulated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divorce Specialism */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Our Specialism
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                Divorce Financial Planning Experts
              </h2>
              <div className="gold-line-center mb-6"></div>
            </div>
            <div className="bg-white p-8 lg:p-12 rounded-sm shadow-lg border-t-4 border-accent">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Divorce is one of the most financially significant events in a
                person&apos;s life. Pensions, property, savings and investments all
                need to be carefully assessed and divided fairly. Without proper
                financial advice, you could lose out on thousands of pounds.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team works alongside family solicitors and mediators across
                Central Scotland to ensure that the financial aspects of divorce
                are handled with the expertise they demand. We provide independent
                expert reports for court proceedings, pension sharing order
                analysis, and comprehensive post-divorce financial planning.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you are at the early stages of considering separation or
                are already progressing through the legal process, we can provide
                the specialist financial guidance you need to secure your future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
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
              <h3 className="text-xl font-bold text-primary mb-3">Independence</h3>
              <p className="text-gray-600">
                We are not tied to any product provider, which means we can genuinely
                recommend the best solutions for you from the entire market. Your
                interests always come first.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Empathy</h3>
              <p className="text-gray-600">
                We understand that financial decisions, especially during divorce,
                are deeply personal. We provide a compassionate, judgement-free
                environment where you feel comfortable and supported.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Transparency</h3>
              <p className="text-gray-600">
                We believe in complete transparency. Our fees are clear and explained
                upfront, and we always ensure you understand our recommendations
                before proceeding.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Expertise</h3>
              <p className="text-gray-600">
                Our advisers hold the highest qualifications in financial planning
                and continuously update their knowledge, particularly in divorce
                financial planning and pension transfers.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Local Knowledge</h3>
              <p className="text-gray-600">
                Based in Stirling at the heart of Central Scotland, we understand
                the local community and work with solicitors and professionals
                across the region.
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
                We operate with the highest ethical standards. Our reputation has
                been built on doing the right thing for our clients, even when no
                one is watching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulation */}
      <section className="section-padding bg-gray-50">
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
              Retirement &amp; Investment Solutions Ltd is authorised and regulated by
              the Financial Conduct Authority (FCA). This means we adhere to the
              highest standards of professional conduct and our clients benefit from
              the protections provided by the Financial Services Compensation Scheme
              (FSCS).
            </p>
            <p className="text-gray-600 leading-relaxed">
              You can verify our regulatory status on the FCA Register. Our regulation
              ensures that we operate with integrity, treat customers fairly, and
              maintain the highest professional standards in everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Discuss Your Financial Future?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a complimentary consultation and discover how Retinvest can help
            you achieve your financial goals, whether planning for retirement or
            navigating a divorce.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/retinvest-stirling/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a
              href="tel:01786437008"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 01786 437 008
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
