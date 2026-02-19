import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | FCA Regulated Financial Advisers",
  description:
    "Learn about Total Finance (UK) Ltd - FCA regulated independent financial advisers in Bromley. Over 15 years of experience helping clients achieve their financial goals.",
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
  const values = [
    {
      title: "Independence",
      description:
        "As independent advisers, we work for you, not the lenders. We search the whole market to find the best solutions for your needs.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
    },
    {
      title: "Transparency",
      description:
        "We believe in complete transparency. All fees are clearly explained upfront, with no hidden charges or surprises.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
    {
      title: "Expertise",
      description:
        "Our team holds industry-recognised qualifications and maintains up-to-date knowledge through continuous professional development.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: "Client Focus",
      description:
        "Your financial wellbeing is our priority. We take time to understand your circumstances and tailor our advice accordingly.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  const qualifications = [
    "Certificate in Mortgage Advice and Practice (CeMAP)",
    "Diploma in Financial Planning (DipPFS)",
    "Certificate in Life & Pensions (LP)",
    "Equity Release Council Members",
    "Statement of Professional Standing (SPS)",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy text-white py-20">
        <div className="container-custom px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Total Finance
            </h1>
            <p className="text-xl text-gray-200">
              Independent financial advisers dedicated to helping you achieve
              your financial goals with expert, impartial advice.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
              <div className="space-y-4 text-slate">
                <p>
                  Total Finance (UK) Ltd was established with a clear mission:
                  to provide honest, independent financial advice that puts
                  clients first. Based in Bromley, Greater London, we&apos;ve spent
                  over 15 years building trusted relationships with individuals
                  and families across the South East.
                </p>
                <p>
                  As independent financial advisers, we&apos;re not tied to any
                  particular provider. This means we can search the whole market
                  to find the products that truly match your needs, rather than
                  pushing products that benefit us financially.
                </p>
                <p>
                  We understand that everyone&apos;s financial situation is unique.
                  That&apos;s why we take time to understand your circumstances,
                  goals, and concerns before making any recommendations. Our
                  advice is always tailored to you.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-light-gray rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">15+</p>
                    <p className="text-slate">Years Experience</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">
                      2,500+
                    </p>
                    <p className="text-slate">Happy Clients</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">98%</p>
                    <p className="text-slate">Client Satisfaction</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <p className="text-4xl font-bold text-primary mb-2">100%</p>
                    <p className="text-slate">Independent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FCA Regulation */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              FCA Regulated
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Total Finance (UK) Ltd is authorised and regulated by the
              Financial Conduct Authority. This means you&apos;re protected and can
              be confident that we meet the highest standards of professional
              conduct.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">Your Protection</h3>
                <p className="text-gray-200 text-sm">
                  Access to the Financial Ombudsman Service if you&apos;re not
                  satisfied with our service, and the Financial Services
                  Compensation Scheme for eligible claims.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">
                  Professional Standards
                </h3>
                <p className="text-gray-200 text-sm">
                  We adhere to strict conduct rules, maintain professional
                  indemnity insurance, and undergo regular compliance audits.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">
                  Ongoing Competence
                </h3>
                <p className="text-gray-200 text-sm">
                  Our advisers maintain their competence through continuous
                  professional development and hold current Statements of
                  Professional Standing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Values
            </h2>
            <p className="text-lg text-slate">
              The principles that guide everything we do at Total Finance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="service-icon mx-auto mb-4 w-16 h-16">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-slate">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Professional Qualifications
              </h2>
              <p className="text-slate mb-8">
                Our team holds a range of industry-recognised qualifications,
                ensuring you receive advice from properly trained and competent
                professionals.
              </p>
              <ul className="space-y-4">
                {qualifications.map((qual, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-primary flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-navy">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-xl font-bold text-navy mb-6">
                Why Qualifications Matter
              </h3>
              <div className="space-y-4 text-slate">
                <p>
                  Financial advice can have a significant impact on your life.
                  That&apos;s why it&apos;s important to work with advisers who have the
                  proper training and qualifications.
                </p>
                <p>
                  Our qualifications are regulated by the Financial Conduct
                  Authority and recognised across the UK financial services
                  industry. They demonstrate our competence to advise on
                  mortgages, protection products, and pension planning.
                </p>
                <p>
                  We also complete annual Continuing Professional Development
                  (CPD) to stay up-to-date with changes in legislation,
                  products, and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">
              Company Information
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-navy mb-4">Registered Office</h3>
                  <address className="not-italic text-slate">
                    Total Finance (UK) Ltd
                    <br />
                    184-190 Farnaby Road
                    <br />
                    Bromley
                    <br />
                    Greater London
                    <br />
                    BR2 0BB
                  </address>
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-4">Contact Details</h3>
                  <p className="text-slate">
                    <strong>Phone:</strong>{" "}
                    <a
                      href="tel:02086957548"
                      className="text-primary hover:underline"
                    >
                      020 8695 7548
                    </a>
                    <br />
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:info@total-finance.org.uk"
                      className="text-primary hover:underline"
                    >
                      info@total-finance.org.uk
                    </a>
                    <br />
                    <strong>Website:</strong> total-finance.org.uk
                  </p>
                </div>
              </div>
              <hr className="my-8" />
              <div className="fca-notice">
                <p className="text-sm">
                  Total Finance (UK) Ltd is authorised and regulated by the
                  Financial Conduct Authority. Registered in England and Wales.
                  The guidance and/or advice contained within this website is
                  subject to the UK regulatory regime and is therefore primarily
                  targeted at consumers based in the UK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-navy py-20">
        <div className="container-custom px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the difference of working with truly independent
            financial advisers. Book your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/total-finance/contact/" className="btn-accent text-lg">
              Book Free Consultation
            </Link>
            <a
              href="tel:02086957548"
              className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-navy text-lg"
            >
              Call 020 8695 7548
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
