import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Chartered Financial Planners in Edinburgh & Coatbridge",
  description:
    "Learn about Aveton Gifford Associates Limited - Chartered Financial Planners with over 40 years combined experience. Two Scottish offices, FCA regulated, whole-of-market independent advice.",
  openGraph: {
    title: "About Us | Aveton Gifford Associates",
    description:
      "Chartered Financial Planners providing independent financial advice from Edinburgh and Coatbridge since 2004. Over 40 years combined experience.",
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
              Chartered Financial Planners You Can Trust
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Aveton Gifford Associates Limited &mdash; Chartered Financial Planners
              providing independent, whole-of-market advice from Edinburgh and
              Coatbridge since 2004.
            </p>
          </div>
        </div>
      </section>

      {/* Chartered Status */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                The Gold Standard
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                Chartered Financial Planner Status
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chartered Financial Planner is the gold standard qualification in the
                financial planning profession. Fewer than 10% of financial advisers
                in the United Kingdom hold this prestigious designation, which is awarded
                by the Chartered Insurance Institute (CII).
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To achieve Chartered status, a financial planner must demonstrate the
                highest levels of technical competence, adhere to a rigorous code of
                ethics, and commit to ongoing professional development. When you work
                with Aveton Gifford Associates, you work with professionals who have
                proven their expertise at the very highest level.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                This means you can be confident that the advice you receive is of the
                highest quality, based on deep technical knowledge, and delivered with
                the utmost integrity and professionalism.
              </p>
              <div className="bg-accent/10 p-6 rounded-sm border-l-4 border-accent">
                <p className="text-primary font-semibold text-lg">
                  &quot;Chartered status represents a gold standard of professionalism
                  in financial planning. It demonstrates commitment to the highest
                  ethical standards and technical excellence.&quot;
                </p>
                <p className="text-gray-600 mt-2 text-sm">&mdash; Chartered Insurance Institute</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">40+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years Combined Experience</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">2004</div>
                  <p className="text-gray-600 mt-2 font-medium">Incorporated</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">2</div>
                  <p className="text-gray-600 mt-2 font-medium">Scottish Offices</p>
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

      {/* Our Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                Trusted Advisers Since 2004
              </h2>
              <div className="gold-line-center mb-6"></div>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Aveton Gifford Associates Limited was incorporated in 2004 with a clear
              mission: to provide the highest quality independent financial advice to
              clients across Scotland. With offices in Edinburgh and Coatbridge, we
              have built a reputation for delivering expert, personalised guidance
              that truly puts our clients&apos; interests first.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team brings over 40 years of combined experience in financial
              services. Derek, based at our Edinburgh head office, and Hugh, at our
              Coatbridge office, are both committed to the highest standards of
              professional practice. Our Chartered Financial Planner status reflects
              this commitment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As independent, whole-of-market advisers, we are not restricted to any
              provider or product range. This means we can genuinely search the entire
              market to find the most suitable solutions for each client&apos;s unique
              circumstances. Whether you need investment planning, pension advice,
              tax mitigation or comprehensive retirement planning, our Chartered
              Financial Planners have the expertise and market access to deliver
              outstanding results.
            </p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Chartered Excellence</h3>
              <p className="text-gray-600">
                Our Chartered Financial Planner status represents the highest level
                of qualification and ethical commitment in the profession. We maintain
                this through continuous professional development.
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
              <h3 className="text-xl font-bold text-primary mb-3">Personal Service</h3>
              <p className="text-gray-600">
                Every client is unique, and so is our advice. We take time to
                understand your personal circumstances, goals, and concerns before
                making any recommendations.
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
                upfront, and we always ensure you understand our recommendations before
                proceeding.
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
                Financial planning is a lifelong journey. We build lasting relationships
                with our clients, adapting their plans as circumstances change over the
                years.
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
                We operate with the highest ethical standards, as demanded by our
                Chartered status. Our reputation has been built on doing the right
                thing for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Presence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Two Scottish Offices
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With offices in Edinburgh and Coatbridge, we provide Chartered Financial
              Planning services across Scotland. Whether you prefer to meet in the
              capital or in Central Scotland, expert advice is always close at hand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Edinburgh */}
            <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 rounded-sm text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <span className="text-accent font-semibold text-sm">Head Office</span>
                  <h3 className="text-2xl font-bold">Edinburgh</h3>
                </div>
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Our Edinburgh head office serves clients across the capital, the
                Lothians and Fife. Conveniently located on Cammo Road, we provide
                Chartered Financial Planning in a professional, welcoming environment.
              </p>
              <address className="not-italic text-gray-200 mb-6">
                36 Cammo Road
                <br />
                Edinburgh EH4 8AP
              </address>
              <p className="text-gray-200">
                <strong>Contact Derek:</strong> 0131 339 6508
              </p>
            </div>

            {/* Coatbridge */}
            <div className="bg-white p-8 lg:p-12 rounded-sm border-t-4 border-primary shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-primary font-semibold text-sm">Regional Office</span>
                  <h3 className="text-2xl font-bold text-primary">Coatbridge</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Coatbridge office serves clients across Central Scotland, including
                North Lanarkshire, Glasgow and the surrounding areas. Expert Chartered
                Financial Planning in an accessible location.
              </p>
              <address className="not-italic text-gray-700 mb-6">
                Gartcolt Cottages, Gartgill Road
                <br />
                Coatbridge ML5 2EQ
              </address>
              <p className="text-gray-600">
                <strong>Contact Hugh:</strong> 01236 872751
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
              FCA Regulated &amp; Company Registered
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Aveton Gifford Associates Limited is authorised and regulated by the
              Financial Conduct Authority (FCA). Our company is registered in Scotland
              under Company Number SC268741, incorporated in 2004.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              This means we adhere to the highest standards of professional conduct
              and our clients benefit from the protections provided by the Financial
              Services Compensation Scheme (FSCS). You can verify our regulatory
              status on the FCA Register at register.fca.org.uk or by contacting the
              FCA on 0800 111 6768.
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
            Financial Planners can help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/aveton-gifford-ifa/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a
              href="tel:01313396508"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 0131 339 6508
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
