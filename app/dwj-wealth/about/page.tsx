import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Wealth Management Advisers in Swansea",
  description:
    "Learn about DWJ Wealth Management Ltd - FCA regulated financial advisers in Gorseinon, Swansea. Led by Danni Watts-Jones, serving private and corporate clients across South Wales.",
  openGraph: {
    title: "About Us | DWJ Wealth Management",
    description:
      "FCA regulated wealth management advisers in Swansea, serving private and corporate clients across South Wales.",
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
              Your Trusted Financial Partners
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              FCA regulated wealth management advisers based in Gorseinon,
              Swansea, serving both private and corporate clients across
              South Wales.
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
                Tailored Wealth Management in Swansea
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                DWJ Wealth Management Ltd was founded by Danni Watts-Jones with a
                clear vision: to provide tailored, client-focused financial advice
                that makes a genuine difference to people&apos;s lives. Based in
                Gorseinon, Swansea, we serve both private individuals and corporate
                clients across South Wales.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                What sets us apart is our dual expertise in both private and corporate
                financial advice. Whether you&apos;re an individual planning for
                retirement, a family looking to protect your wealth, or a business
                seeking comprehensive employee benefit solutions, we bring the same
                level of dedication and expertise to every client relationship.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As an FCA regulated firm, we adhere to the highest professional
                standards. Our advice is always tailored to your unique circumstances,
                and we pride ourselves on building long-term relationships founded on
                trust, transparency, and results.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">15+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years Experience</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">4</div>
                  <p className="text-gray-600 mt-2 font-medium">Expert Team Members</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">100%</div>
                  <p className="text-gray-600 mt-2 font-medium">Personalised Service</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">98%</div>
                  <p className="text-gray-600 mt-2 font-medium">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Meet the DWJ Team
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A dedicated team of professionals committed to delivering
              exceptional financial advice and client service.
            </p>
          </div>

          {/* Lead Adviser - Featured */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="card-premium p-8 lg:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/dwj/danni-watts-jones.jpg"
                    alt="Danni Watts-Jones"
                    width={200}
                    height={200}
                    className="rounded-full object-cover w-40 h-40"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-primary mb-2">Danni Watts-Jones</h3>
                  <p className="text-accent font-semibold mb-4">Lead Financial Adviser</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Danni Watts-Jones founded DWJ Wealth Management with a commitment to
                    delivering exceptional financial advice to clients across Swansea and
                    South Wales. With a passion for helping both individuals and businesses
                    achieve their financial goals, Danni has built a practice rooted in
                    personal service and professional expertise.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Under Danni&apos;s leadership, DWJ Wealth Management has established
                    itself as a trusted name for tailored wealth management, serving a
                    diverse client base that includes private individuals, families, and
                    corporate clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of Team */}
          <div className="grid sm:grid-cols-3 gap-8">
            {/* Terry Watts-Jones */}
            <div className="card-premium p-8 text-center">
              <Image
                src="/images/dwj/terry-watts-jones.jpg"
                alt="Terry Watts-Jones"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 object-cover w-36 h-36"
              />
              <h3 className="text-xl font-bold text-primary mb-1">Terry Watts-Jones</h3>
              <p className="text-accent font-semibold text-sm mb-3">Financial Adviser</p>
              <p className="text-gray-600 text-sm">
                With deep experience in wealth management, Terry provides
                expert guidance for both private and corporate clients, helping
                them navigate complex financial decisions with confidence.
              </p>
            </div>

            {/* Nanette Mantle */}
            <div className="card-premium p-8 text-center">
              <Image
                src="/images/dwj/nanette-mantle.jpg"
                alt="Nanette Mantle"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 object-cover w-36 h-36"
              />
              <h3 className="text-xl font-bold text-primary mb-1">Nanette Mantle</h3>
              <p className="text-accent font-semibold text-sm mb-3">Client Support Manager</p>
              <p className="text-gray-600 text-sm">
                Nanette ensures every client receives exceptional support throughout
                their journey with DWJ Wealth Management, managing communications
                and coordinating reviews.
              </p>
            </div>

            {/* Kathryn Shears */}
            <div className="card-premium p-8 text-center">
              <Image
                src="/images/dwj/kathryn-shears.jpg"
                alt="Kathryn Shears"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 object-cover w-36 h-36"
              />
              <h3 className="text-xl font-bold text-primary mb-1">Kathryn Shears</h3>
              <p className="text-accent font-semibold text-sm mb-3">Practice Manager</p>
              <p className="text-gray-600 text-sm">
                Kathryn manages the day-to-day operations of the practice,
                ensuring everything runs smoothly and efficiently for both
                the team and our valued clients.
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
              <h3 className="text-xl font-bold text-primary mb-3">Trust</h3>
              <p className="text-gray-600">
                As an FCA regulated firm, we operate to the highest standards of
                professional conduct. Our clients&apos; interests always come first,
                and we build relationships founded on honesty and integrity.
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
              <h3 className="text-xl font-bold text-primary mb-3">Personal Service</h3>
              <p className="text-gray-600">
                Every client is unique, and so is our advice. We take time to
                understand your personal circumstances, goals, and concerns before
                making any recommendations.
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
                upfront, and we always ensure you understand our recommendations before
                proceeding.
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
                Our team holds the highest qualifications in financial planning and
                continuously updates their knowledge to provide you with the most
                current and relevant advice.
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
                Financial planning is a lifelong journey. We build lasting relationships
                with our clients, adapting their plans as circumstances change over the
                years.
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Local Knowledge</h3>
              <p className="text-gray-600">
                Based in Swansea, we understand the local community and economy.
                Our clients benefit from advisers who know the area and genuinely
                care about the people they serve.
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
              DWJ Wealth Management Ltd (Company No. 09104954) is authorised and
              regulated by the Financial Conduct Authority (FCA). This means we adhere
              to the highest standards of professional conduct and our clients benefit
              from the protections provided by the Financial Services Compensation
              Scheme (FSCS).
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
            Book a complimentary consultation and discover how DWJ Wealth
            Management can help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dwj-wealth/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a
              href="tel:01639825066"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 01639 825066
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
