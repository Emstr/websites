import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recruitment Services | Permanent, Contract & Executive Search",
  description:
    "Comprehensive recruitment services including permanent recruitment, contract staffing, executive search, graduate programmes, HR consulting and salary benchmarking in the City of London.",
  openGraph: {
    title: "Recruitment Services | City Recruitment Partners",
    description:
      "Specialist recruitment services for finance and technology sectors. Permanent, contract and executive search from the City of London.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "permanent-recruitment",
      title: "Permanent Recruitment",
      subtitle: "Build Your Team for the Long Term",
      description:
        "Our permanent recruitment service is designed for businesses seeking to make lasting hires. We take a consultative approach, working closely with you to understand not just the technical requirements of each role, but the cultural fit and growth potential that leads to long-term success. From initial briefing through to offer management and onboarding support, we manage the entire process.",
      features: [
        "In-depth role briefing and candidate profiling",
        "Proactive headhunting and database search",
        "Competency-based interviews and technical assessments",
        "Reference and background verification",
        "Offer negotiation and acceptance management",
        "Post-placement check-ins and retention support",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      id: "contract-staffing",
      title: "Contract Staffing",
      subtitle: "Flexible Talent On Demand",
      description:
        "When you need skilled professionals quickly for projects, peak periods or maternity cover, our contract staffing service delivers. We maintain a bench of pre-vetted contractors across finance and technology who are ready to start at short notice. Our compliant payroll and contract management take the administrative burden off your hands.",
      features: [
        "Rapid shortlisting within 24-48 hours",
        "Pre-vetted contractors with verified references",
        "IR35 compliance guidance and support",
        "Timesheet management and invoicing",
        "Contract extensions and renewals",
        "Permanent conversion options available",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "executive-search",
      title: "Executive Search",
      subtitle: "Leadership That Transforms",
      description:
        "Our executive search practice is built on discretion, rigour and deep market intelligence. We partner with boards and senior leadership teams to identify and attract C-suite, director and senior management talent. Every assignment is led by a dedicated partner who brings sector expertise and an extensive network of senior professionals.",
      features: [
        "Confidential, research-led candidate identification",
        "Psychometric and leadership assessments",
        "Detailed market mapping and competitor analysis",
        "Board-level interview preparation",
        "Compensation and package benchmarking",
        "100-day onboarding support programme",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "graduate-programmes",
      title: "Graduate Programmes",
      subtitle: "Invest in Tomorrow&apos;s Leaders",
      description:
        "Attracting top graduate talent is increasingly competitive. Our graduate recruitment service helps you design and deliver programmes that stand out. From university partnerships and assessment centres to structured development plans, we help you build a pipeline of future leaders who will grow with your organisation.",
      features: [
        "Graduate programme design and structure",
        "University career fair representation",
        "Assessment centre design and facilitation",
        "Candidate screening and psychometric testing",
        "Onboarding programme development",
        "First-year retention coaching and support",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: "hr-consulting",
      title: "HR Consulting",
      subtitle: "Strategic People Solutions",
      description:
        "Beyond recruitment, we offer strategic HR consulting to help your organisation attract, develop and retain the best people. Our consultants bring practical experience from leading HR functions in FTSE 100 companies and high-growth firms, providing actionable advice on everything from organisational design to employee engagement.",
      features: [
        "Organisational design and restructuring",
        "Employee engagement and retention strategies",
        "Workforce planning and succession planning",
        "Employer branding and EVP development",
        "Diversity and inclusion programme design",
        "HR policy review and compliance audits",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "salary-benchmarking",
      title: "Salary Benchmarking",
      subtitle: "Competitive Intelligence for Better Hiring",
      description:
        "Making the right offer means knowing the market. Our salary benchmarking service provides detailed, data-driven reports on compensation levels across your sector, location and seniority band. Whether you are reviewing your pay structure or preparing an offer for a critical hire, our insights ensure you stay competitive.",
      features: [
        "Sector-specific salary surveys and reports",
        "Role-level compensation benchmarking",
        "Benefits and total reward analysis",
        "Regional pay variation insights",
        "Annual salary review recommendations",
        "Custom reports tailored to your organisation",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Recruitment Solutions for Every Need
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From permanent hires to executive search and strategic HR
              consulting, we deliver tailored recruitment solutions for the
              finance and technology sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Specialist Recruitment Services
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With 8 specialist consultants and over 2,000 successful placements,
              we have the expertise and network to deliver results across every
              type of recruitment need.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-accent font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/recruitment-city/contact" className="btn-accent">
                    Discuss Your Needs
                  </Link>
                </div>
                <div
                  className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center">
                    <div className="text-white opacity-20 scale-150">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              How We Work With You
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Briefing
              </h3>
              <p className="text-gray-600">
                We meet to understand your role requirements, team dynamics,
                company culture and what success looks like.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Search & Screen</h3>
              <p className="text-gray-600">
                We activate our network, headhunt passive candidates and
                rigorously screen applicants against your criteria.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Shortlist & Interview</h3>
              <p className="text-gray-600">
                We present a curated shortlist with detailed candidate profiles
                and coordinate the interview process.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Offer & Onboard</h3>
              <p className="text-gray-600">
                We manage offer negotiations, notice periods and provide
                post-placement support to ensure a smooth start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Team?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get in touch for a confidential discussion about your recruitment
            needs. No obligation, just expert advice from specialists who
            understand your sector.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/recruitment-city/contact" className="btn-accent">
              Start Hiring
            </Link>
            <a href="tel:02079465540" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 020 7946 5540
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
