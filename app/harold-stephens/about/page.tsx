import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Later Life Planning Specialists in Bristol",
  description:
    "Learn about Harold Stephens Financial Planning - later life planning specialists based in Bristol, serving the South West. FCA regulated experts in retirement, equity release, and care fee planning.",
  openGraph: {
    title: "About Us | Harold Stephens Financial Planning",
    description:
      "Later life planning specialists based in Bristol. Expert financial advice for retirement, equity release, care fees, and inheritance tax planning across the South West.",
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
              Later Life Planning Specialists
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Based in Bristol, Harold Stephens Financial Planning is dedicated
              to helping people in retirement and approaching retirement navigate
              complex financial decisions with confidence and clarity.
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
                Focused on What Matters Most in Later Life
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Harold Stephens Financial Planning was founded with a singular
                purpose: to provide exceptional financial advice specifically
                tailored to the needs of those in and approaching later life.
                We recognised that retirement brings unique financial challenges
                that generalist advisers often lack the depth to address fully.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From our Bristol base, we serve clients across the South West
                of England, offering face-to-face consultations and building
                lasting relationships with the families we advise. Our focus on
                later life means we bring specialist expertise to every
                conversation, whether it concerns equity release, care fee
                funding, retirement income, or inheritance tax.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We understand that later life financial decisions are often
                emotionally charged and can affect entire families. That is why
                we take a compassionate, patient approach, ensuring our clients
                and their families feel fully informed and confident before
                any decision is made.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">500+</div>
                  <p className="text-gray-600 mt-2 font-medium">Families Helped</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">100%</div>
                  <p className="text-gray-600 mt-2 font-medium">Later Life Focus</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">FCA</div>
                  <p className="text-gray-600 mt-2 font-medium">Regulated</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">SW</div>
                  <p className="text-gray-600 mt-2 font-medium">England Coverage</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Later Life Specialism</h3>
              <p className="text-gray-600">
                We focus exclusively on later life financial planning. This
                specialism means deeper knowledge of equity release, care
                funding, and retirement income than any generalist adviser
                can offer.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Compassionate Approach</h3>
              <p className="text-gray-600">
                We understand that later life decisions can be emotional. We
                take the time to listen, explain clearly, and support you and
                your family through every step of the process.
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
                recommendations and the risks involved before proceeding.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Family Involvement</h3>
              <p className="text-gray-600">
                Later life decisions often affect the whole family. We welcome
                family members to our meetings, ensuring everyone understands
                and supports the plan.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with the highest ethical standards. Our advice is
                always in your best interests, and we will tell you honestly
                if we believe a product or strategy is not right for you.
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
                Based in Bristol, we understand the South West property market,
                local care home costs, and regional support services, bringing
                valuable local context to our advice.
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
              Harold Stephens Financial Planning is authorised and regulated by
              the Financial Conduct Authority (FCA). This means we adhere to the
              highest standards of professional conduct and our clients benefit from the
              protections provided by the Financial Services Compensation Scheme (FSCS).
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
            Ready to Discuss Your Later Life Plans?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a complimentary consultation and discover how Harold Stephens
            can help you navigate your retirement with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/harold-stephens/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a
              href="tel:01173636212"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 0117 363 6212
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
