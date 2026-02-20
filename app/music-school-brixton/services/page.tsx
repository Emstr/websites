import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Music Lessons | Guitar, Piano, Vocals, Drums & More",
  description:
    "Professional music lessons in Brixton: guitar, piano, keyboard, vocal training, drums, music theory and band workshops. All ages and levels welcome.",
  openGraph: {
    title: "Music Lessons | Brixton School of Music",
    description:
      "Expert music tuition in Brixton, South London. Guitar, piano, vocals, drums, theory and band workshops for all ages and abilities.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "guitar-lessons",
      title: "Guitar Lessons",
      subtitle: "Acoustic & Electric Guitar for All Levels",
      description:
        "Our guitar programme covers everything from your very first chord to advanced soloing and composition. Whether you dream of strumming round a campfire or shredding on stage, our tutors will guide you there. We teach acoustic, electric and classical guitar across all popular styles including rock, pop, blues, jazz, folk and classical.",
      features: [
        "One-to-one and small group lessons available",
        "Acoustic, electric and classical guitar tuition",
        "ABRSM and Trinity exam preparation",
        "Learn songs you love from day one",
        "Technique, scales, chords and music reading",
        "Performance opportunities at termly showcases",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
    {
      id: "piano-keyboard",
      title: "Piano & Keyboard",
      subtitle: "Classical & Contemporary Keys",
      description:
        "Learn piano on our quality acoustic instruments or explore the versatility of keyboard in our dedicated practice rooms. Our tutors cover classical technique, contemporary styles, sight-reading and improvisation. Piano lessons develop discipline, coordination and a deep understanding of music that transfers to every other instrument.",
      features: [
        "Lessons on quality acoustic upright and digital pianos",
        "Classical, jazz, pop and contemporary styles",
        "Sight-reading and aural skills development",
        "ABRSM and Trinity graded exam preparation",
        "Improvisation and composition guidance",
        "Suitable for beginners through to diploma level",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: "vocal-training",
      title: "Vocal Training",
      subtitle: "Discover & Develop Your Voice",
      description:
        "Our vocal coaching programme is designed to unlock your voice, build confidence and develop professional technique. Whether you want to sing pop, rock, R&B, musical theatre or classical, our vocal tutors will help you find your unique sound. We cover breathing, posture, pitch, range extension, performance skills and microphone technique.",
      features: [
        "One-to-one vocal coaching sessions",
        "Breathing technique and vocal health",
        "Range extension and tone development",
        "Performance confidence and stage presence",
        "Microphone technique for live and studio",
        "Preparation for auditions and performances",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
    },
    {
      id: "drum-lessons",
      title: "Drum Lessons",
      subtitle: "Rhythm, Groove & Technique",
      description:
        "Our soundproofed drum rooms house professional-quality kits where students learn rhythm, coordination, dynamics and reading drum notation. From rock and pop to jazz and Latin, our drum tutors cover every style. Drumming builds incredible timing, coordination and is one of the most exhilarating instruments to play.",
      features: [
        "Professional-quality drum kits in soundproofed rooms",
        "Rock, pop, jazz, funk and Latin styles",
        "Reading drum notation and chart reading",
        "Rudiments, technique and independence",
        "Practice pad techniques for home practice",
        "Graded exam preparation available",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ),
    },
    {
      id: "music-theory",
      title: "Music Theory",
      subtitle: "Understand the Language of Music",
      description:
        "Music theory brings everything together. Understanding how music works on the page deepens your playing, improves your ear and opens doors to composition and arrangement. Our theory classes follow the ABRSM and Trinity syllabuses and are available as standalone lessons or alongside your instrumental tuition.",
      features: [
        "ABRSM Grades 1-8 theory preparation",
        "Trinity theory exam support",
        "Harmony, counterpoint and analysis",
        "Aural training and ear development",
        "Composition and arrangement basics",
        "Small group and one-to-one options",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: "band-workshops",
      title: "Band Workshops",
      subtitle: "Play Together, Grow Together",
      description:
        "Our band workshops are where the magic happens. Students are grouped by age and ability to form bands that rehearse together weekly, learning collaboration, arrangement, listening skills and stage presence. Each term culminates in a live showcase where bands perform for friends and family. It is an incredible confidence builder.",
      features: [
        "Weekly group rehearsal sessions",
        "Grouped by age and ability level",
        "Learn arrangement and ensemble skills",
        "Termly live showcase performances",
        "Covers, originals or a mix of both",
        "Builds teamwork and musical confidence",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              Our Lessons
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Music Lessons for Every Passion
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From your first note to grade 8 and beyond, our experienced tutors offer
              professional tuition across six disciplines. All ages. All levels.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Expert Tuition Across Six Disciplines
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each lesson is tailored to your goals, whether that is passing an exam,
              performing live, or simply enjoying the pleasure of making music.
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
                  <div className="text-[var(--accent)] mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[var(--accent)] font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0"
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
                  <Link href="/music-school-brixton/contact" className="bg-[var(--accent)] text-white px-6 py-3 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">
                    Book a Trial Lesson
                  </Link>
                </div>
                <div
                  className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-video bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-sm flex items-center justify-center">
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
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">
              Your Journey With Us
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                1
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                Book a Trial
              </h3>
              <p className="text-gray-600">
                Get in touch to arrange a trial lesson. We will match you with the
                right tutor for your instrument and level.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Meet Your Tutor</h3>
              <p className="text-gray-600">
                Your trial lesson is a chance to meet your tutor, discuss your
                goals and experience your first proper lesson.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Start Learning</h3>
              <p className="text-gray-600">
                Begin your regular weekly lessons with a personalised learning
                plan tailored to your goals and pace.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Perform &amp; Grow</h3>
              <p className="text-gray-600">
                Join band workshops, take exams and perform at our termly
                showcases. Watch your skills and confidence soar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Sound?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a trial lesson today and take the first step on your musical
            journey. All ages, all levels, all welcome.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/music-school-brixton/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">
              Book a Trial Lesson
            </Link>
            <a href="tel:02079464420" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors">
              Call 020 7946 4420
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
