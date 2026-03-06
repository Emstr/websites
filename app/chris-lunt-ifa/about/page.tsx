import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Chris | Dedicated Independent Financial Adviser",
  description:
    "Learn about Chris Lunt - a dedicated independent financial adviser in Lydiate, Liverpool with £65 million under advice. Personal service, FCA regulated, serving Merseyside.",
  openGraph: {
    title: "About Chris | Chris Lunt Independent Financial Adviser",
    description:
      "Dedicated independent financial adviser providing personal service from Lydiate, Liverpool. £65 million under advice, FCA regulated.",
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
              About Chris
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Your Dedicated Financial Adviser
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A personal, independent financial adviser based in Lydiate, Liverpool
              — providing dedicated service to clients across Merseyside with over
              £65 million under advice.
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
                The Chris Lunt IFA Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                One Adviser, One Relationship, Real Results
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chris Lunt established his independent financial advice practice with
                a simple but powerful belief: people deserve better than being a number
                in a large corporate firm. They deserve an adviser who knows their name,
                understands their circumstances, and genuinely cares about their
                financial future.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Based in Lydiate, Liverpool, Chris serves clients across Merseyside and
                beyond. With over £65 million under advice, he has built a practice
                founded on trust, expertise, and the kind of personal attention that
                only a dedicated individual adviser can provide. When you call, it&apos;s
                Chris who answers. When you have a review, it&apos;s Chris you sit down with.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a truly independent financial adviser, Chris is not tied to any
                product provider. This means every recommendation is based solely on
                what is best for you — drawn from the whole of the market, not a
                restricted panel of products.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">£65m</div>
                  <p className="text-gray-600 mt-2 font-medium">Under Advice</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">1</div>
                  <p className="text-gray-600 mt-2 font-medium">Dedicated Adviser</p>
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

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              What Sets Chris Apart
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Personal Service</h3>
              <p className="text-gray-600">
                You deal directly with Chris for every meeting, every review, every
                question. No being passed around departments or fobbed off with a
                junior associate. Your adviser knows you by name.
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Independence</h3>
              <p className="text-gray-600">
                Chris is not tied to any product provider, which means he can genuinely
                recommend the best solutions for you from the entire market. Your
                interests always come first.
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
                Chris believes in complete transparency. Fees are clear and explained
                upfront, and he always ensures you understand his recommendations
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
              <h3 className="text-xl font-bold text-primary mb-3">Expertise</h3>
              <p className="text-gray-600">
                With £65 million under advice, Chris brings significant experience
                and expertise to every client relationship. He continuously updates
                his knowledge to provide cutting-edge advice.
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Long-term Focus</h3>
              <p className="text-gray-600">
                Financial planning is a lifelong journey. Chris builds lasting
                relationships with his clients, adapting their plans as circumstances
                change over the years.
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
                Chris operates with the highest ethical standards. His reputation has
                been built on doing the right thing for his clients, even when no one
                is watching.
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
              FCA Regulated
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Chris Lunt Independent Financial Adviser is authorised and regulated by
              the Financial Conduct Authority (FCA). This means Chris adheres to the
              highest standards of professional conduct and his clients benefit from the
              protections provided by the Financial Services Compensation Scheme (FSCS).
            </p>
            <p className="text-gray-600 leading-relaxed">
              You can verify Chris&apos;s regulatory status on the FCA Register. This
              regulation ensures that Chris operates with integrity, treats customers
              fairly, and maintains the highest professional standards in everything
              he does.
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
            Book a complimentary consultation and discover how Chris can help you
            achieve your financial goals with personal, dedicated advice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/chris-lunt-ifa/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a
              href="tel:01519236173"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 0151 923 6173
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
