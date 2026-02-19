import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Kensington's Trusted Private Tutoring Service",
  description:
    "Learn about Kensington Private Tutors - DBS-checked Oxbridge graduates providing expert private tutoring in Kensington, London W8. 98% student satisfaction rate.",
  openGraph: {
    title: "About Us | Kensington Private Tutors",
    description:
      "DBS-checked Oxbridge graduate tutors delivering outstanding academic results in Kensington, London since 2016.",
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
              Kensington&apos;s Most Trusted Tutors
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Founded by educators who believe every student deserves access to
              the very best teaching, we&apos;ve been transforming academic
              outcomes in Kensington since 2016.
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
                Passionate About Education Since 2016
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kensington Private Tutors was founded by a group of Oxbridge
                graduates who saw a gap in the market for truly personalised,
                high-quality private tutoring. Too many tutoring agencies treated
                education as a transaction &mdash; we wanted to build something
                different.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From our first student in 2016, we&apos;ve grown through word of
                mouth and outstanding results. Every tutor in our team is
                hand-picked not just for their academic credentials, but for
                their ability to inspire, motivate, and connect with students.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we work with over 500 families across Kensington, Chelsea,
                Notting Hill, and the wider London area. Whether it&apos;s a
                Year 3 pupil building confidence in reading or a Sixth Former
                preparing for Oxbridge interviews, our approach remains the
                same: tailored, expert, and genuinely caring.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">98%</div>
                  <p className="text-gray-600 mt-2 font-medium">Satisfaction Rate</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">500+</div>
                  <p className="text-gray-600 mt-2 font-medium">Students Taught</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">50+</div>
                  <p className="text-gray-600 mt-2 font-medium">Expert Tutors</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">8+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years of Excellence</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Safety First</h3>
              <p className="text-gray-600">
                Every tutor undergoes enhanced DBS checks, thorough reference
                verification, and face-to-face interviews. Your child&apos;s
                safety is non-negotiable.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Academic Excellence</h3>
              <p className="text-gray-600">
                Our tutors graduated from Oxford, Cambridge, and other leading
                universities. They don&apos;t just know their subjects &mdash;
                they excel in them.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Genuine Care</h3>
              <p className="text-gray-600">
                We treat every student as an individual. Our tutors build
                real relationships, understand learning differences, and
                celebrate every achievement.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                We track progress rigorously and adapt our methods to ensure
                every student is on course to meet their targets. 98% of our
                students improve by at least one grade.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Flexibility</h3>
              <p className="text-gray-600">
                We work around your schedule with sessions available mornings,
                afternoons, evenings and weekends. In-person or online &mdash;
                whatever suits you best.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Parent Partnership</h3>
              <p className="text-gray-600">
                We keep parents informed with regular progress reports, open
                communication, and termly reviews. Education works best when
                everyone is aligned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Location
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Based in the Heart of Kensington
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our office on Kensington High Street serves families across
              Kensington, Chelsea, Notting Hill, Holland Park, Earl&apos;s Court
              and the wider West London area. We also offer tutoring across
              London and online.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-accent font-semibold text-sm">Our Office</span>
                  <h3 className="text-2xl font-bold text-primary">Kensington, W8</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Conveniently located on Kensington High Street, our office is
                easily accessible by public transport. We offer lessons at our
                office, at the student&apos;s home, or online via our virtual
                classroom platform.
              </p>
              <address className="not-italic text-gray-700 mb-6">
                42 Kensington High Street
                <br />
                Kensington, London W8 4PT
              </address>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Near High Street Kensington Station
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Home visits across West London
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Online tutoring available nationwide
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
            Ready to Transform Your Child&apos;s Results?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a free consultation and trial lesson. Discover the difference
            an expert Kensington tutor can make.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tutor-kensington/contact" className="btn-accent">
              Book Free Trial Lesson
            </Link>
            <a
              href="tel:02079462567"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 020 7946 2567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
