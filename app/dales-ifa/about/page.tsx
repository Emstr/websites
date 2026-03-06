import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Philip Dales - Experienced Independent Financial Adviser",
  description:
    "Learn about DALES IFA and Philip Dales - an experienced independent financial adviser with over 16 years of expertise. Equity Release Council member with offices in Nottingham and Newark.",
  openGraph: {
    title: "About Us | DALES IFA",
    description:
      "Meet Philip Dales - an experienced IFA providing independent financial advice from offices in Nottingham and Newark. Equity Release Council member.",
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
              Your Trusted Financial Adviser
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Independent financial advice you can trust, from an experienced
              adviser with offices in Nottingham and Newark.
            </p>
          </div>
        </div>
      </section>

      {/* Philip Dales / Our Story */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Meet Your Adviser
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                Philip Dales
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Philip Dales is the sole principal of P N Dales Ltd (trading as
                DALES IFA), bringing over 16 years of experience in independent
                financial advice. Based across two offices in Nottinghamshire,
                Philip provides personal, hands-on advice to every client.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a whole-of-market adviser, Philip is not tied to any single
                product provider. This independence means he can genuinely
                recommend the best solutions from across the entire market,
                whether you need mortgage advice, pension planning, equity
                release, investment guidance, or protection cover.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Philip is a proud member of the Equity Release Council, which
                sets the highest standards for equity release advice and
                provides built-in consumer safeguards. This membership reflects
                his commitment to specialist knowledge and ethical practice in
                this important area of financial planning.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With offices in both West Bridgford (Nottingham) and Newark town
                centre, Philip makes expert financial advice accessible to
                clients across Nottinghamshire and the wider East Midlands.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">16+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years of Experience</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">2</div>
                  <p className="text-gray-600 mt-2 font-medium">Office Locations</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">100%</div>
                  <p className="text-gray-600 mt-2 font-medium">Independent</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">5</div>
                  <p className="text-gray-600 mt-2 font-medium">Service Areas</p>
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
              <h3 className="text-xl font-bold text-primary mb-3">Independence</h3>
              <p className="text-gray-600">
                We&apos;re not tied to any product provider, which means we can
                genuinely recommend the best solutions for you from the entire
                market. Your interests always come first.
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
                Every client works directly with Philip. You&apos;ll never be
                passed between different advisers. We take time to understand
                your personal circumstances before making any recommendations.
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
                We believe in complete transparency. Our fees are clear and
                explained upfront, and we always ensure you understand our
                recommendations before proceeding.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Specialist Knowledge</h3>
              <p className="text-gray-600">
                As an Equity Release Council member, Philip holds specialist
                qualifications and continuously updates his knowledge to provide
                you with the best possible advice.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Long-term Focus</h3>
              <p className="text-gray-600">
                Financial planning is a lifelong journey. We build lasting
                relationships with our clients, adapting their plans as
                circumstances change over the years.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Local Presence</h3>
              <p className="text-gray-600">
                With two offices across Nottinghamshire, we&apos;re rooted in
                the local community. We understand the local property market and
                the financial needs of people in the East Midlands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Offices
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Two Convenient Locations
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe expert financial advice should be accessible. Visit us
              at our West Bridgford office in Nottingham or our town centre
              office in Newark &mdash; whichever is more convenient for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Nottingham */}
            <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 rounded-sm text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <span className="text-accent font-semibold text-sm">Head Office</span>
                  <h3 className="text-2xl font-bold">Nottingham</h3>
                </div>
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Our Nottingham office at Bridgford Business Centre in West
                Bridgford provides a professional, accessible environment.
                Convenient for clients across Nottingham, Beeston, and the
                surrounding areas.
              </p>
              <address className="not-italic text-gray-200 mb-6">
                Bridgford Business Centre
                <br />
                29 Bridgford Road, West Bridgford
                <br />
                Nottingham NG2 6AU
              </address>
              <p className="text-gray-200 mb-4">
                <a href="tel:01158320265" className="hover:text-accent transition-colors">
                  0115 832 0265
                </a>
              </p>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Professional meeting rooms
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Parking available nearby
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Serving greater Nottingham
                </li>
              </ul>
            </div>

            {/* Newark */}
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-primary font-semibold text-sm">Newark Office</span>
                  <h3 className="text-2xl font-bold text-primary">Newark</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Newark office at Central Buildings on Middle Gate offers
                convenient town centre access. Ideal for clients in Newark,
                Southwell, and the surrounding areas of north Nottinghamshire
                and Lincolnshire.
              </p>
              <address className="not-italic text-gray-700 mb-6">
                Central Buildings
                <br />
                Middle Gate
                <br />
                Newark NG24 1AG
              </address>
              <p className="text-gray-700 mb-4">
                <a href="tel:01636870069" className="hover:text-accent transition-colors">
                  01636 870 069
                </a>
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Town centre location
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Easy access from A1 and A46
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Serving north Nottinghamshire
                </li>
              </ul>
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
              FCA Regulated &amp; Equity Release Council Member
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              P N Dales Ltd is authorised and regulated by the Financial Conduct
              Authority (FCA Ref: 496107). This means we adhere to the highest
              standards of professional conduct and our clients benefit from the
              protections provided by the Financial Services Compensation Scheme
              (FSCS).
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our membership of the Equity Release Council provides additional
              safeguards for equity release customers, including a
              no-negative-equity guarantee and the right to remain in your
              property for life.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You can verify our regulatory status on the FCA Register at
              register.fca.org.uk or by contacting the FCA on 0800 111 6768.
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
            Book a complimentary consultation and discover how DALES IFA can
            help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dales-ifa/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a
              href="tel:03337729607"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 0333 772 9607
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
