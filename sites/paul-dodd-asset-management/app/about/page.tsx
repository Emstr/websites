import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Paul Dodd Asset Management",
  description: "Learn about Paul Dodd Asset Management Limited - Independent Financial Advisers in Leeds since 1992. Over 30 years of expertise, FCA authorised, with many founding clients still with us today.",
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#15293f] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#c9a227] text-[#1e3a5f] px-4 py-2 rounded-full font-bold mb-6 text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>Established 1992</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Paul Dodd Asset Management</h1>
            <p className="text-xl text-gray-300">
              Over three decades of trusted financial expertise, building lasting relationships with our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    <strong>Paul Dodd Asset Management Limited</strong> was founded in 1992 with a simple mission: to provide
                    independent, expert financial advice that puts clients first.
                  </p>
                  <p>
                    Over the past 30+ years, we've built a reputation for integrity, expertise, and lasting client relationships.
                    The fact that many of our founding clients from 1992 are still with us today speaks volumes about the trust
                    and quality of service we deliver.
                  </p>
                  <p>
                    Based in Leeds, West Yorkshire, we serve clients across the region and beyond, including areas of London
                    such as Kennington. Our independence means we're not tied to any particular provider or product - we search
                    the entire market to find the best solutions for your unique circumstances.
                  </p>
                  <p>
                    As a fully FCA-authorised firm (Reference: 610180), we adhere to the highest professional standards,
                    giving you complete peace of mind that your financial future is in safe hands.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#15293f] p-8 rounded-2xl text-white">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Founded</h3>
                      <p className="text-gray-300">Established in 1992</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">FCA Authorised</h3>
                      <p className="text-gray-300">Reference: 610180</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Company</h3>
                      <p className="text-gray-300">Registered: 8716410</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Location</h3>
                      <p className="text-gray-300">Leeds, West Yorkshire</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Paul Dodd */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#1e3a5f] to-[#15293f] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-[#c9a227]">PD</span>
                </div>
                <h2 className="text-4xl font-bold text-[#1e3a5f] mb-2">Paul Dodd</h2>
                <p className="text-xl text-[#c9a227] font-semibold">Principal & Founder</p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
                <p className="text-lg">
                  With over <strong>30 years of experience in financial services</strong>, Paul Dodd has established himself
                  as one of the region's most trusted independent financial advisers.
                </p>
                <p>
                  Paul founded Paul Dodd Asset Management Limited in 1992 with a commitment to providing truly independent,
                  client-focused financial advice. His approach is built on understanding each client's unique circumstances,
                  goals, and concerns, then crafting bespoke strategies to help them achieve their financial objectives.
                </p>
                <p>
                  Throughout his career, Paul has helped hundreds of clients navigate complex financial decisions - from
                  retirement planning and pension consolidation to wealth management and investment strategies. His expertise
                  spans all areas of financial planning, with particular specialism in pensions and retirement income planning.
                </p>
                <p>
                  What sets Paul apart is his commitment to building lasting relationships. Many clients who first sought his
                  advice in the early 1990s continue to work with him today, a testament to the quality, integrity, and value
                  of his service.
                </p>
                <div className="bg-gradient-to-r from-[#1e3a5f] to-[#15293f] text-white p-6 rounded-lg mt-8">
                  <p className="text-lg italic">
                    "My goal has always been simple: to provide honest, expert advice that helps people achieve financial
                    security and peace of mind. The fact that many of my founding clients are still with me after 30+ years
                    tells me we're doing something right."
                  </p>
                  <p className="mt-4 font-semibold text-[#c9a227]">— Paul Dodd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  ),
                  title: "Integrity",
                  description: "We operate with complete honesty and transparency, always putting your interests first."
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  ),
                  title: "Independence",
                  description: "As independent advisers, we're free to recommend the best solutions from across the entire market."
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  ),
                  title: "Expertise",
                  description: "Three decades of experience and continuous professional development ensure expert guidance."
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  ),
                  title: "Long-term Relationships",
                  description: "We're in it for the long haul, building relationships that last decades, not just transactions."
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                  title: "Fair Fees",
                  description: "Clear, transparent pricing with no hidden charges - you know exactly what you're paying for."
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  ),
                  title: "Ongoing Support",
                  description: "Regular reviews and continuous support as your life and circumstances evolve."
                }
              ].map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#15293f] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {value.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">Areas We Serve</h2>
            <p className="text-lg text-gray-700 mb-8">
              While we're proudly based in Leeds, West Yorkshire, we serve clients across the region and beyond.
              Our client base includes individuals and businesses in:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 font-medium">
              <div className="bg-white p-4 rounded-lg shadow-md">Leeds</div>
              <div className="bg-white p-4 rounded-lg shadow-md">West Yorkshire</div>
              <div className="bg-white p-4 rounded-lg shadow-md">Yorkshire</div>
              <div className="bg-white p-4 rounded-lg shadow-md">Bradford</div>
              <div className="bg-white p-4 rounded-lg shadow-md">Harrogate</div>
              <div className="bg-white p-4 rounded-lg shadow-md">York</div>
              <div className="bg-white p-4 rounded-lg shadow-md">London (Kennington)</div>
              <div className="bg-white p-4 rounded-lg shadow-md">Nationwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#15293f] text-white p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-center">Regulatory Information</h2>
              <div className="space-y-4 text-gray-200">
                <p>
                  <strong className="text-[#c9a227]">Paul Dodd Asset Management Limited</strong> is authorised and regulated
                  by the Financial Conduct Authority.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-sm text-gray-300 mb-1">FCA Reference Number</p>
                    <p className="text-2xl font-bold text-[#c9a227]">610180</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-sm text-gray-300 mb-1">Company Number</p>
                    <p className="text-2xl font-bold text-[#c9a227]">8716410</p>
                  </div>
                </div>
                <p className="pt-4 text-sm">
                  Registered Office: 55 Great George Street, Leeds, LS1 3BB
                </p>
                <p className="text-sm border-t border-white/20 pt-4">
                  You can check our FCA authorisation on the Financial Services Register at{" "}
                  <a href="https://register.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[#c9a227] hover:underline">
                    www.fca.org.uk/register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#15293f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Experience the Difference</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the clients who've trusted us for over 30 years. Book your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#c9a227] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#b08f1f] transition-all shadow-lg hover:shadow-xl">
                Book Free Consultation
              </Link>
              <a href="tel:01132300449" className="bg-white text-[#1e3a5f] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 0113 2300449
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
