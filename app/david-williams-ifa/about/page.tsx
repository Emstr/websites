import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Chartered Financial Planners Since the 1980s",
  description:
    "Learn about David Williams IFA - Chartered Financial Planners with over 40 years of trusted independent advice from Northampton. Serving families across four generations.",
  openGraph: {
    title: "About Us | David Williams IFA",
    description:
      "Chartered Financial Planners with over 40 years of independent advice. Multi-generational client relationships built on trust and expertise.",
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
              Four Decades of Trusted Financial Advice
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Chartered Financial Planners serving individuals, families, businesses,
              and charities from our Northampton base since the early 1980s.
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
                Trusted Advice Since the Early 1980s
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                David Williams IFA was founded over 40 years ago with a simple
                principle: provide genuinely independent financial advice that puts
                clients first. What began as a local practice in Northampton has
                grown into a nationally respected Chartered Financial Planning firm.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our growth has been organic, built entirely on trust, expertise, and
                the recommendations of satisfied clients. Some of our client
                relationships now span four generations of the same family — grandparents
                who came to us in the 1980s, their children, their grandchildren, and
                now their great-grandchildren. That enduring trust is something we
                are immensely proud of.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we hold Chartered Financial Planner status — the gold standard
                in our profession, held by an elite group of firms that demonstrate
                the highest levels of knowledge, ethical practice, and commitment to
                their clients. Combined with our truly independent, whole-of-market
                approach, we offer a level of service few firms can match.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">40+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years of Excellence</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">4</div>
                  <p className="text-gray-600 mt-2 font-medium">Generations Served</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">100%</div>
                  <p className="text-gray-600 mt-2 font-medium">Independent</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">UK</div>
                  <p className="text-gray-600 mt-2 font-medium">Wide Coverage</p>
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
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Chartered Status</h3>
              <p className="text-gray-600">
                Chartered Financial Planner is the gold standard professional
                qualification. It demonstrates the highest level of knowledge,
                ethical conduct, and commitment to our clients&apos; interests.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Multi-Generational Relationships</h3>
              <p className="text-gray-600">
                We don&apos;t just build financial plans — we build relationships that
                last. Some of our clients span four generations, trusting us with
                their family&apos;s financial wellbeing decade after decade.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">True Independence</h3>
              <p className="text-gray-600">
                We&apos;re not tied to any product provider. We search the whole market
                to find the best solutions for you — our only obligation is to
                your best interests.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
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
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Specialist Expertise</h3>
              <p className="text-gray-600">
                Beyond standard financial planning, we have specialist expertise in
                trust planning, inheritance tax, corporate services, and charity
                financial advice.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
              <p className="text-gray-600">
                Over four decades, our reputation has been built on doing the right
                thing for our clients. Integrity is not a buzzword — it is the
                foundation of every relationship we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Reach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Northampton Base, National Reach
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              While rooted in Northampton for over 40 years, we serve clients across
              the East Midlands, Home Counties, London, and nationally. We meet
              clients at our office, at their homes, or via video conference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Northampton */}
            <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 rounded-sm text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-accent font-semibold text-sm">Head Office</span>
                  <h3 className="text-2xl font-bold">Northampton</h3>
                </div>
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Our Northampton office at 5 Waterside Way has been our home for
                decades. Centrally located and easily accessible, it is where most
                of our client meetings take place.
              </p>
              <address className="not-italic text-gray-200 mb-6">
                5 Waterside Way
                <br />
                Northampton NN4 7XD
              </address>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Established over 40 years
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free on-site parking
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Private consultation rooms
                </li>
              </ul>
            </div>

            {/* National Reach */}
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-primary font-semibold text-sm">Growing Presence</span>
                  <h3 className="text-2xl font-bold text-primary">Nationwide Service</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our central location gives us excellent reach across the UK. We
                have a growing London client base and serve families across the East
                Midlands, Home Counties, and beyond. We are happy to meet clients
                wherever suits them best.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  East Midlands &amp; Home Counties
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Growing London client base
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Video and telephone consultations available
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Home visits by arrangement
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
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              FCA Regulated &amp; Chartered
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              David Williams IFA Ltd is authorised and regulated by the Financial
              Conduct Authority (FCA No. 530750). Company Registration No. 04638076.
              As Chartered Financial Planners, we adhere to the highest standards of
              professional conduct, and our clients benefit from the protections
              provided by the Financial Services Compensation Scheme (FSCS).
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
            Book a complimentary consultation and discover how our Chartered
            Financial Planners can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/david-williams-ifa/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a
              href="tel:01604621302"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 01604 621302
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
