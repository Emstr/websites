import Link from 'next/link';

const services = [
  {
    name: 'Men\'s Alterations',
    description: 'Expert tailoring for suits, jackets, trousers, and shirts. Perfect fit guaranteed.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    href: '/services#mens',
  },
  {
    name: 'Women\'s Alterations',
    description: 'Professional alterations for dresses, skirts, trousers, and blouses. Precision work.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    href: '/services#womens',
  },
  {
    name: 'Bridal Alterations',
    description: 'Specialist bridal gown alterations. Your perfect day deserves a perfect fit.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    href: '/services#bridal',
  },
  {
    name: 'Express Service',
    description: 'Need it fast? Same-day and express alterations available for urgent requirements.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    href: '/express-service',
  },
  {
    name: 'Call-Out Service',
    description: 'We come to you! Mobile fitting and consultation service at your convenience.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    href: '/contact',
  },
  {
    name: 'Free Consultation',
    description: 'Expert advice and fitting consultation at no charge. Visit any of our locations.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: '/contact',
  },
];

const locations = [
  {
    name: 'Marylebone',
    address: '14 New Quebec Street, London W1H 7RS',
    description: 'Our flagship location in the heart of Marylebone',
    href: '/locations/marylebone',
  },
  {
    name: 'Chelsea',
    address: '33 Elystan Street, London SW3 3NT',
    description: 'Conveniently located in elegant Chelsea',
    href: '/locations/chelsea',
  },
  {
    name: 'Wimbledon Village',
    address: '34 High Street, London SW19 5BY',
    description: 'Serving Wimbledon and South West London',
    href: '/locations/wimbledon',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-burgundy via-burgundy-light to-burgundy text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <svg className="w-12 h-12 text-silver-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              London's Premier Alterations Service
              <span className="block text-silver-light mt-2">Since 1983</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              40+ years of expert tailoring, seamstress services, and alterations across three prime London locations. Trusted by fashion brands and discerning clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-block bg-silver-light hover:bg-silver text-burgundy-dark px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg"
              >
                Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors border border-white/30"
              >
                Our Services
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-silver-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>40+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-silver-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>3 London Locations</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-silver-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Same-Day Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert alterations and tailoring for every occasion, from everyday wear to special events
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:border-burgundy group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-burgundy/5 rounded-lg flex items-center justify-center text-burgundy group-hover:bg-silver-light/20 group-hover:text-burgundy-dark transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-burgundy mb-2 group-hover:text-burgundy-light transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">
              Why Choose Alterations Boutique?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four decades of excellence in alterations and tailoring
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-silver-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-burgundy mb-3">Established 1983</h3>
              <p className="text-gray-600">
                Over 40 years of experience serving London's most discerning clients. Our expertise is unmatched.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-silver-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-burgundy mb-3">Three Prime Locations</h3>
              <p className="text-gray-600">
                Conveniently located in Marylebone, Chelsea, and Wimbledon Village for easy access across London.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-silver-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-burgundy mb-3">Fashion Brand Trusted</h3>
              <p className="text-gray-600">
                Trusted by leading fashion brands and their clients. Professional service with attention to every detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three prime locations across London for your convenience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Link
                key={location.name}
                href={location.href}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:border-burgundy group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <svg className="w-6 h-6 text-burgundy flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2 group-hover:text-burgundy-light transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {location.address}
                    </p>
                    <p className="text-gray-500 text-sm italic">
                      {location.description}
                    </p>
                  </div>
                </div>
                <div className="text-burgundy text-sm font-semibold flex items-center gap-1 group-hover:text-burgundy-light transition-colors">
                  View Details
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-burgundy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for the Perfect Fit?
              </h2>
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                Visit any of our three locations for a free consultation and fitting. Our expert team of tailors, seamstresses, and dressmakers are ready to serve you.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-silver-light mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-200">Free consultation and fitting at all locations</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-silver-light mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-200">Same-day and express service available</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-silver-light mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-200">Call-out service - we come to you</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-silver-light mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-200">Extended hours: Open until 9pm Tuesday-Friday</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-silver-light hover:bg-silver text-burgundy-dark px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg"
              >
                Book Your Free Consultation
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-silver-light mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:02077244147" className="text-gray-200 hover:text-silver-light transition-colors">
                      0207 724 4147
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-silver-light mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:info@alterationsboutique.co.uk" className="text-gray-200 hover:text-silver-light transition-colors break-all">
                      info@alterationsboutique.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-silver-light mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">Opening Hours</p>
                    <p className="text-gray-200 text-sm">
                      Mon: 9am-7pm<br />
                      Tue-Fri: 9am-9pm<br />
                      Sat: 9am-6pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
