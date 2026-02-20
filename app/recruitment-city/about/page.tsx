import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Specialist City of London Recruitment Agency",
  description:
    "Learn about City Recruitment Partners - specialist recruitment agency in the City of London. 8 expert consultants, 2,000+ placements since 2012 across finance and technology.",
  openGraph: {
    title: "About Us | City Recruitment Partners",
    description:
      "Specialist recruitment agency with 8 expert consultants placing talent across finance and technology from the City of London since 2012.",
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
              The Right People, The Right Roles
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Since 2012, City Recruitment Partners has been connecting
              exceptional talent with outstanding opportunities across the
              finance and technology sectors.
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
                Built on Relationships Since 2012
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                City Recruitment Partners was founded by two former recruitment
                directors who saw an opportunity to do things differently. Based
                in the heart of the Square Mile on Old Broad Street, we set out
                to build a recruitment agency that genuinely puts relationships
                first.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the past thirteen years, we have grown from a two-person
                operation to a team of eight specialist consultants, each
                bringing deep expertise in either financial services or
                technology recruitment. Our growth has been organic, driven
                entirely by referrals and repeat business from satisfied clients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, with over 2,000 successful placements behind us, we are
                proud to be a trusted partner to some of the City&apos;s most
                respected firms, from global investment banks to fast-growing
                fintech companies. Our approach remains the same: understand the
                business, know the market, deliver the right people.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">13+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years of Excellence</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">2,000+</div>
                  <p className="text-gray-600 mt-2 font-medium">Placements Made</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">8</div>
                  <p className="text-gray-600 mt-2 font-medium">Expert Consultants</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">95%</div>
                  <p className="text-gray-600 mt-2 font-medium">Client Retention</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
              <p className="text-gray-600">
                We are honest and transparent with every client and candidate.
                We would rather turn down a brief than make a placement we do
                not believe in.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Urgency</h3>
              <p className="text-gray-600">
                In the City, timing matters. We move quickly without cutting
                corners, delivering shortlists within days rather than weeks.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Partnership</h3>
              <p className="text-gray-600">
                We see ourselves as an extension of your team, not a transactional
                supplier. Long-term partnerships built on trust are the foundation
                of everything we do.
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
                Our consultants are sector specialists, not generalists. They
                understand the nuances of finance and technology hiring because
                they live and breathe it every day.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Quality</h3>
              <p className="text-gray-600">
                We never flood inboxes with unsuitable CVs. Every candidate we
                present has been thoroughly assessed and personally recommended
                by a consultant who knows your brief.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Diversity</h3>
              <p className="text-gray-600">
                We are committed to presenting diverse shortlists and helping
                clients build inclusive teams. A diverse workforce drives better
                business outcomes.
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
              In the Heart of the City
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our offices on Old Broad Street place us at the centre of
              London&apos;s financial district, minutes from Liverpool Street
              station and surrounded by the businesses we serve.
            </p>
          </div>

          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent max-w-3xl mx-auto">
            <address className="not-italic text-gray-700 mb-6 text-lg">
              <strong>City Recruitment Partners</strong>
              <br />
              3rd Floor, 25 Old Broad Street
              <br />
              City of London, EC2N 1HN
            </address>
            <div className="space-y-2 text-gray-600">
              <p><strong>Liverpool Street Station:</strong> 2-minute walk</p>
              <p><strong>Bank Station:</strong> 5-minute walk</p>
              <p><strong>Moorgate Station:</strong> 4-minute walk</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether you are hiring or looking for your next career move, we
            would love to hear from you. Get in touch for a confidential
            conversation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/recruitment-city/contact" className="btn-accent">
              Get in Touch
            </Link>
            <a
              href="tel:02079465540"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 020 7946 5540
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
