import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Keeley & Co Financial Advisers Birmingham",
  description:
    "Learn about Keeley & Co Financial Advisers - independent financial advisers in Birmingham city centre. Director Luella Keeley leads a team of 6 expert advisers. FCA Ref: 932437.",
  openGraph: {
    title: "About Us | Keeley & Co Financial Advisers",
    description:
      "Independent financial advice from the heart of Birmingham. Expert team of 6 advisers specialising in wealth management, retirement and protection.",
  },
};

export default function AboutPage() {
  const team = [
    {
      name: "Luella Keeley",
      role: "Director",
      image: "/images/keeley/luella-keeley.png",
      description:
        "Luella leads the team at Keeley & Co, bringing extensive experience in wealth management and financial planning. She is passionate about delivering truly independent advice that puts clients first.",
    },
    {
      name: "Alexandra Llewellyn",
      role: "Financial Adviser",
      image: "/images/keeley/alexandra-llewellyn.png",
      description:
        "Alexandra specialises in retirement planning and pension advice, helping clients navigate the complexities of securing their financial future.",
    },
    {
      name: "Paul Bagnall",
      role: "Financial Adviser",
      image: "/images/keeley/paul-bagnall.png",
      description:
        "Paul brings deep expertise in investment management and wealth planning, working with clients to build and protect their portfolios.",
    },
    {
      name: "James Rowley",
      role: "Financial Adviser",
      image: "/images/keeley/james-rowley.png",
      description:
        "James focuses on mortgage advice and protection planning, ensuring clients find the right solutions for their property and family needs.",
    },
    {
      name: "Oona Ormsby",
      role: "Financial Adviser",
      image: "/images/keeley/oona-ormsby.png",
      description:
        "Oona provides comprehensive financial planning advice, helping individuals and families align their finances with their life goals.",
    },
    {
      name: "Rachel Bennett",
      role: "Financial Adviser",
      image: "/images/keeley/rachel-bennett.png",
      description:
        "Rachel specialises in protection and insurance advice, ensuring families and businesses have the right cover in place.",
    },
  ];

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
              Your Trusted Financial Advisers in Birmingham
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Keeley & Co Financial Advisers is an established Birmingham practice
              providing truly independent financial advice. Our team of six expert
              advisers is dedicated to helping you achieve your financial goals.
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
                Independent Advice You Can Trust
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Keeley & Co Financial Advisers is built on the principle that
                financial advice should always put the client first. As a truly
                independent practice, we are not tied to any product provider,
                which means we can search the whole market to find solutions that
                genuinely work for you.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Based in the heart of Birmingham on New Street, our team of six
                experienced advisers covers the full spectrum of financial planning
                needs &mdash; from wealth management and retirement planning to
                protection and mortgages. We take the time to understand your
                unique circumstances before making any recommendations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Under the leadership of Director Luella Keeley, our practice
                combines professional expertise with a personal, client-focused
                approach. We believe in building lasting relationships, providing
                clear and transparent advice, and always acting in your best
                interests.
              </p>
            </div>
            <div>
              <Image
                src="/images/keeley/about.jpg"
                alt="Keeley & Co Financial Advisers - About Us"
                width={600}
                height={400}
                className="rounded-sm shadow-lg w-full h-auto"
              />
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-6 bg-gray-50 rounded-sm">
                  <div className="stat-number">10+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years Experience</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-sm">
                  <div className="stat-number">6</div>
                  <p className="text-gray-600 mt-2 font-medium">Expert Advisers</p>
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
              Meet Your Advisers
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team of six experienced financial advisers brings expertise
              across wealth management, retirement, protection and mortgages.
            </p>
          </div>

          {/* Director - Featured */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="card-premium p-8 lg:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/keeley/luella-keeley.png"
                    alt="Luella Keeley"
                    width={160}
                    height={160}
                    className="rounded-full object-cover w-36 h-36 border-4 border-accent/20"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-primary mb-1">Luella Keeley</h3>
                  <p className="text-accent font-semibold mb-4">Director</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Luella leads the team at Keeley & Co, bringing extensive
                    experience in wealth management and financial planning. She is
                    passionate about delivering truly independent advice that puts
                    clients first.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <span className="inline-flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      FCA Registered
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Independent Adviser
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Team Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.slice(1).map((member) => (
              <div key={member.name} className="card-premium p-6 text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="rounded-full mx-auto mb-4 object-cover w-28 h-28 border-3 border-gray-200"
                />
                <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
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
                We&apos;re not tied to any product provider, which means we can genuinely
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
                Every client is known personally to our team. We take time to
                understand your circumstances, goals, and concerns before making
                any recommendations.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Expertise</h3>
              <p className="text-gray-600">
                Our team covers the full spectrum of financial advice, from wealth
                management and pensions to mortgages and protection, ensuring you
                receive the most competent advice available.
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
                Our reputation is built on doing the right thing for our clients.
                Integrity is not a buzzword for us &mdash; it is the foundation
                of everything we do.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Birmingham Based</h3>
              <p className="text-gray-600">
                Located on New Street in the heart of Birmingham city centre, we are
                easily accessible for clients across Birmingham and the wider West
                Midlands region.
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
              FCA Regulated (Ref: 932437)
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Keeley & Co Financial Advisers is authorised and regulated by the
              Financial Conduct Authority (FCA Reference: 932437). This means we
              adhere to the highest standards of professional conduct and our
              clients benefit from the protections provided by the Financial
              Services Compensation Scheme (FSCS).
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
            Book a complimentary consultation and discover how our team of expert
            advisers can help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/keeley-financial-advisers/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a
              href="tel:01217964472"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 0121 796 4472
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
