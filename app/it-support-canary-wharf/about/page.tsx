import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Canary Wharf IT Support Specialists",
  description:
    "Learn about Canary Wharf IT Solutions - Microsoft Partner and Cyber Essentials certified IT support company serving businesses in Canary Wharf and East London.",
  openGraph: {
    title: "About Us | Canary Wharf IT Solutions",
    description:
      "Microsoft Partner providing managed IT support, cybersecurity, and cloud solutions to businesses in Canary Wharf and East London.",
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
              Your Technology Partner in Canary Wharf
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              We are a team of experienced IT professionals dedicated to keeping
              Canary Wharf businesses secure, connected, and productive.
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
                Built for the Demands of Docklands Business
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Canary Wharf IT Solutions was founded with a clear mission: to
                deliver enterprise-grade IT support with the responsiveness and
                personal touch that large MSPs simply cannot offer. Based in the
                heart of Canary Wharf, we understand the unique demands of
                businesses in the Docklands.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team combines deep technical expertise with genuine business
                understanding. We don&apos;t just fix problems — we anticipate them.
                Our proactive approach means issues are resolved before they
                impact your operations, keeping your team productive and your
                data secure.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a Microsoft Partner and Cyber Essentials certified provider,
                we bring industry-leading standards to every engagement. Whether
                you&apos;re a 10-person startup or a 200-seat enterprise, we scale
                our services to match your needs and ambitions.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">10+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years in Canary Wharf</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">200+</div>
                  <p className="text-gray-600 mt-2 font-medium">Clients Supported</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">15</div>
                  <p className="text-gray-600 mt-2 font-medium">Certified Engineers</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">99.9%</div>
                  <p className="text-gray-600 mt-2 font-medium">Uptime Delivered</p>
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
              What Drives Us
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Proactive, Not Reactive</h3>
              <p className="text-gray-600">
                We monitor and maintain your systems around the clock so
                problems are caught and resolved before they affect your
                business.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Security First</h3>
              <p className="text-gray-600">
                Every decision we make prioritises the security and integrity
                of your data. We hold ourselves to the same standards we set
                for our clients.
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
                You get a dedicated account manager and named engineers — not
                an anonymous helpdesk. We build genuine partnerships with our
                clients.
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
                Clear pricing, honest advice, and regular reporting. We never
                recommend technology you don&apos;t need, and our fees are always
                agreed upfront.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                Technology never stands still, and neither do we. Our engineers
                maintain industry certifications and stay ahead of emerging
                threats and trends.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Rapid Response</h3>
              <p className="text-gray-600">
                With a 15-minute SLA on critical issues and engineers based
                locally in Canary Wharf, we deliver the fastest response times
                in the Docklands.
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
              Based in the Heart of Canary Wharf
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our office at 30 Churchill Place puts us right in the centre of
              the Canary Wharf business district, meaning on-site support is
              never more than minutes away.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 rounded-sm text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <span className="text-accent font-semibold text-sm">Head Office</span>
                  <h3 className="text-2xl font-bold">Canary Wharf, E14</h3>
                </div>
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Located at 30 Churchill Place in the heart of Canary Wharf, our
                office is ideally positioned to provide rapid on-site support to
                businesses across the Docklands, Isle of Dogs, and wider East
                London area.
              </p>
              <address className="not-italic text-gray-200 mb-6">
                30 Churchill Place
                <br />
                Canary Wharf, London E14 5RE
              </address>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  2 minutes from Canary Wharf station
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  On-site within 30 minutes for emergencies
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Serving the entire Docklands area
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-4">Certifications &amp; Partnerships</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our certifications demonstrate our commitment to the highest
                standards in IT service delivery and security.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-primary">Microsoft Partner</strong>
                    <p className="text-gray-600 text-sm">Certified expertise across Microsoft 365, Azure, and Windows Server.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-primary">Cyber Essentials Certified</strong>
                    <p className="text-gray-600 text-sm">Government-backed cybersecurity certification demonstrating best practice.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-primary">ISO 27001</strong>
                    <p className="text-gray-600 text-sm">International standard for information security management systems.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a free IT audit and discover how Canary Wharf IT Solutions can
            transform your business technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/it-support-canary-wharf/contact" className="btn-accent">
              Book Free IT Audit
            </Link>
            <a
              href="tel:02079467012"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 020 7946 7012
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
