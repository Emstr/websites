import Link from 'next/link';

const services = [
  {
    name: 'Jewellery Repairs',
    description: 'Expert repairs using traditional techniques passed down through generations. We handle everything from simple fixes to complex restoration work.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: 'Ring Sizing',
    description: 'Professional ring sizing and resizing services. Whether making rings larger or smaller, we ensure a perfect fit while preserving the integrity of your piece.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
  {
    name: 'Bespoke Manufacturing',
    description: 'Custom jewellery design and manufacturing. From concept to creation, our master craftsmen bring your vision to life with meticulous attention to detail.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    name: 'Restoration',
    description: 'Antique and heirloom jewellery restoration. We breathe new life into treasured pieces, preserving their history while restoring their beauty.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section - 150 YEARS EMPHASIS */}
      <section className="relative heritage-gradient text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-8">
              <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-2xl font-bold text-gold">EST. 1875</span>
              <span className="text-white text-lg">·</span>
              <span className="text-xl text-white font-semibold">150 YEARS</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white">Master Jewellery Craftsmen</span>
              <span className="block text-gold mt-3">In Hatton Garden Since 1875</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed max-w-3xl mx-auto">
              One of Britain's oldest jewellery repair workshops. For 150 extraordinary years, Hirschfelds has provided unique bespoke jewellery repair services in London's historic jewellery quarter.
            </p>

            <p className="text-lg text-gold-light mb-10 font-semibold">
              By Appointment Only · Hatton Garden, London
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-block bg-gold hover:bg-gold-light text-white px-10 py-4 rounded-md font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Book Your Appointment
              </Link>
              <Link
                href="/heritage"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-md font-semibold text-lg transition-colors border-2 border-gold/50 hover:border-gold"
              >
                Our 150-Year Story
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">150</div>
                <div className="text-sm text-gray-300">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">1875</div>
                <div className="text-sm text-gray-300">Established</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">5th</div>
                <div className="text-sm text-gray-300">Generation Craftsmen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Statement */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <svg className="w-16 h-16 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              A Legacy of Craftsmanship
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Since Queen Victoria's reign, Hirschfelds has been synonymous with excellence in jewellery craftsmanship. Through five generations, we have maintained the traditional techniques and exacting standards that have made us one of the country's most respected jewellery workshops.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our location in Hatton Garden—London's legendary jewellery quarter—places us at the heart of Britain's jewellery trade, where we continue a proud tradition of master craftsmanship that spans three centuries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional craftsmanship meets modern precision in every service we provide
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white border-2 border-gold/20 rounded-lg p-8 hover:shadow-2xl hover:border-gold transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-navy rounded-lg flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-navy hover:text-gold font-semibold text-lg transition-colors group"
            >
              Explore All Services
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Hatton Garden - Location Prestige */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-gold mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold text-lg">Our Location</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                In the Heart of
                <span className="block text-gold mt-2">Hatton Garden</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Hatton Garden has been the centre of London's jewellery trade since medieval times. Our presence here for 150 years is a testament to our enduring commitment to excellence.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                This historic street, named after Sir Christopher Hatton, remains the beating heart of Britain's jewellery industry—a fitting home for one of the country's oldest jewellery workshops.
              </p>
              <Link
                href="/hatton-garden"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Discover Hatton Garden
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border-2 border-gold/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gold mb-6">Why Hatton Garden?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">Home to London's diamond trade for over 500 years</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">Over 300 jewellery businesses concentrated in one quarter</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">The epicenter of British jewellery craftsmanship and trade</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">Generations of master craftsmen and jewellery expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke & By Appointment */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-cream border-2 border-gold/20 rounded-lg p-10">
              <svg className="w-12 h-12 text-gold mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="text-3xl font-bold text-navy mb-4">Bespoke Service</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every piece of jewellery has a story, and every client has unique needs. Our bespoke service ensures that your jewellery receives the individual attention it deserves from our master craftsmen.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From intricate antique restorations to contemporary custom designs, we approach each project with the same care and expertise that has defined Hirschfelds for 150 years.
              </p>
            </div>
            <div className="bg-navy text-white border-2 border-gold rounded-lg p-10">
              <svg className="w-12 h-12 text-gold mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-3xl font-bold text-gold mb-4">By Appointment Only</h3>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                We operate exclusively by appointment to ensure each client receives our undivided attention. This allows us to dedicate the time needed to understand your requirements and deliver exceptional results.
              </p>
              <div className="bg-white/10 backdrop-blur-sm border border-gold/30 rounded-lg p-6">
                <p className="text-gold font-semibold mb-2">Opening Hours:</p>
                <p className="text-gray-200 mb-1">Monday - Friday: 11:00am - 4:00pm</p>
                <p className="text-sm text-gold-light">Please call ahead to book your appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 heritage-gradient text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <svg className="w-20 h-20 text-gold mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience 150 Years of Excellence
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Whether you need repairs, restoration, or bespoke manufacturing, trust your precious jewellery to one of Britain's oldest and most respected workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-white px-10 py-4 rounded-md font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:02074051536"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-md font-semibold text-lg transition-colors border-2 border-white/30 hover:border-gold"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              020 7405 1536
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
