import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Brixton's Community Music School Since 2014",
  description:
    "Learn about Brixton School of Music - Brixton's community music school since 2014. 15 professional tutors, 500+ students, and a passion for music education.",
  openGraph: {
    title: "About Us | Brixton School of Music",
    description:
      "Brixton's community music school since 2014. Professional music tuition for all ages and abilities in South London.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Brixton&apos;s Home of Music Education
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Since 2014, we have been helping people of all ages discover the joy of
              making music. From our studios on Coldharbour Lane, we are proud to be
              part of Brixton&apos;s vibrant creative community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">
                From a Single Studio to South London&apos;s Favourite Music School
              </h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Brixton School of Music was founded in 2014 by a group of professional
                musicians who believed that quality music education should be accessible
                to everyone, not just those who could afford private school fees. We
                started with three tutors and a handful of students in a single
                practice room.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Word spread quickly. Parents told other parents. Adult learners
                recommended us to friends. Within two years we had expanded into our
                current premises on Coldharbour Lane, with dedicated practice rooms for
                every instrument, a recording space and a performance area for our
                termly showcases.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we are proud to have a team of 15 professional tutors who have
                taught over 500 students. Our students range from five-year-olds having
                their first piano lesson to retirees fulfilling a lifelong dream of
                learning guitar. What unites them all is a love of music and a desire
                to learn.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)] font-serif">10+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years Teaching</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)] font-serif">500+</div>
                  <p className="text-gray-600 mt-2 font-medium">Students Taught</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)] font-serif">15</div>
                  <p className="text-gray-600 mt-2 font-medium">Expert Tutors</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)] font-serif">98%</div>
                  <p className="text-gray-600 mt-2 font-medium">Exam Pass Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">
              What Drives Us
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                Music is for everyone. We welcome students of every age, background and
                ability level. There is no audition to join us &mdash; just enthusiasm
                and a willingness to learn.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Inspiration</h3>
              <p className="text-gray-600">
                We aim to inspire, not just instruct. Our tutors are performing musicians
                who bring real-world experience and genuine passion into every lesson.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Excellence</h3>
              <p className="text-gray-600">
                We set high standards for our teaching. Every tutor is professionally
                qualified, DBS-checked and committed to continuous professional
                development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Enjoyment</h3>
              <p className="text-gray-600">
                Learning music should be fun. We balance technical development with
                playing songs you love, ensuring students stay motivated and excited
                about their progress.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Community</h3>
              <p className="text-gray-600">
                We are more than a music school &mdash; we are a community. Our band
                workshops, showcases and events bring students together and create
                lasting friendships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Progress</h3>
              <p className="text-gray-600">
                Every student has goals, and we take them seriously. Whether it is
                passing an exam, performing live, or learning a favourite song, we track
                progress and celebrate achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              Our Location
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">
              In the Heart of Brixton
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are located on Coldharbour Lane, just a four-minute walk from Brixton
              Underground station. Our purpose-fitted studios include soundproofed
              practice rooms, quality instruments and a welcoming reception area.
            </p>
          </div>

          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4">Getting Here</h3>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>29 Coldharbour Lane</strong><br />
                  Brixton, London SW9 8PS
                </address>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Brixton Underground - 4 min walk
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Oval Underground - 10 min walk
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4">Opening Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Monday - Friday:</strong> 10am - 9pm</p>
                  <p><strong>Saturday:</strong> 9am - 6pm</p>
                  <p><strong>Sunday:</strong> 10am - 4pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Come and See Us
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a trial lesson or pop in for a chat. We would love to show you around
            and help you start your musical journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/music-school-brixton/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">
              Book a Trial Lesson
            </Link>
            <a
              href="tel:02079464420"
              className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors"
            >
              Call 020 7946 4420
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
