import Link from 'next/link';

const conditions = [
  {
    title: 'Back Pain & Sciatica',
    description: 'Lower back pain, disc problems, and sciatica are among the most common reasons people visit an osteopath. We treat the root cause, not just the symptoms.',
    href: '/lewisham-osteopath/services#back-pain',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Neck & Shoulder Pain',
    description: 'Stiff neck, tension headaches, and shoulder pain from desk work or poor posture — common problems with highly effective osteopathic solutions.',
    href: '/lewisham-osteopath/services#neck-pain',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Sports Injuries',
    description: 'Sprains, strains, repetitive strain injuries, and post-exercise recovery. We work with athletes of all levels to get you back to full fitness.',
    href: '/lewisham-osteopath/services#sports',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Headaches & Migraines',
    description: 'Many headaches originate from tension in the neck and upper back. Osteopathic treatment can significantly reduce frequency and severity.',
    href: '/lewisham-osteopath/services#headaches',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: 'Hip & Knee Pain',
    description: 'Joint pain, osteoarthritis, and mobility issues in the hips and knees respond well to osteopathic care. We help maintain function and reduce discomfort.',
    href: '/lewisham-osteopath/services#joints',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
      </svg>
    ),
  },
  {
    title: 'Foot & Ankle Problems',
    description: 'Plantar fasciitis, ankle sprains, and general foot pain — often connected to gait and posture issues that osteopathy can address holistically.',
    href: '/lewisham-osteopath/services#foot',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: "I cannot recommend Richard enough. I'd been struggling with lower back pain for years and after just three sessions I felt like a different person. He takes the time to explain what's happening and why.",
    author: 'Patient, Lewisham',
  },
  {
    quote: "Richard has been treating my sports injury for the past few months. His knowledge is exceptional and I've made a full recovery. The Ladywell Works practice is really easy to get to.",
    author: 'Patient, Forest Hill',
  },
  {
    quote: "I was sceptical about osteopathy but a friend recommended Richard. He's thorough, professional, and really listens. My sciatica is manageable now for the first time in two years.",
    author: 'Patient, Catford',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] text-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[var(--accent)]" />
              <span className="text-[var(--accent)] text-sm font-semibold uppercase tracking-wider">
                GOsC Registered · Est. 1999
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Osteopathic Care
              <br />
              <span className="text-[var(--accent)]">in Lewisham</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Richard Lewey has been treating patients in South London for over 25 years.
              Back pain, sciatica, sports injuries, neck pain — we treat the root cause, not just the symptoms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:02088525577"
                className="inline-block bg-[var(--accent)] hover:opacity-90 text-white px-8 py-4 rounded-md font-semibold text-lg transition-opacity text-center"
              >
                Book: 020 8852 5577
              </a>
              <Link
                href="/lewisham-osteopath/services"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors text-center border border-white/30"
              >
                View Conditions Treated
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              {[
                'GOsC Registered',
                '25+ Years Experience',
                'Mon–Sat Appointments',
                '£60 per appointment',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conditions We Treat</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Osteopathy takes a whole-body approach to diagnosing and treating musculoskeletal pain and injury.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition) => (
              <Link
                key={condition.title}
                href={condition.href}
                className="group p-6 rounded-lg border border-gray-100 hover:border-[var(--accent)] hover:shadow-md transition-all"
              >
                <div className="text-[var(--accent)] mb-4">{condition.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {condition.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{condition.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/lewisham-osteopath/services"
              className="inline-block bg-[var(--primary)] hover:bg-[var(--secondary)] text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              See all conditions
            </Link>
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[var(--accent)]" />
                <span className="text-[var(--accent)] text-sm font-semibold uppercase tracking-wider">About Richard</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                25 Years of Osteopathic Practice in Lewisham
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Richard Lewey BSc (Hons) Ost has been registered with the General Osteopathic Council (GOsC) since 2001 and has been practising in Lewisham since 1999. He sees patients at Ladywell Works alongside fellow osteopath Elliot Kennard.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Richard takes a thorough, whole-body approach — assessing posture, movement, and lifestyle to understand the real cause of your pain, not just the site of it.
              </p>
              <Link
                href="/lewisham-osteopath/about"
                className="inline-block border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                About the practice
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '25+', label: 'Years in practice' },
                { number: 'GOsC', label: 'Registered since 2001' },
                { number: '£60', label: 'Per appointment' },
                { number: '6', label: 'Days a week' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-[var(--primary)] mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Patients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-gray-50 rounded-lg p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-medium text-[var(--primary)]">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--primary)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to book an appointment?</h2>
          <p className="text-gray-200 text-lg mb-8 max-w-xl mx-auto">
            Call us directly or send an email. Appointments Monday to Friday 9am–7pm, Saturday 9am–2pm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02088525577"
              className="inline-block bg-[var(--accent)] hover:opacity-90 text-white px-8 py-4 rounded-md font-semibold text-lg transition-opacity"
            >
              020 8852 5577
            </a>
            <a
              href="mailto:lewishamosteo@gmail.com"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors border border-white/30"
            >
              lewishamosteo@gmail.com
            </a>
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            Studio 107, Ladywell Works, 15 Whitburn Road, Lewisham SE13 7UQ
          </p>
        </div>
      </section>
    </>
  );
}
