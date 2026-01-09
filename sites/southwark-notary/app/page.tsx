import Link from 'next/link';

const services = [
  {
    title: 'Business Services',
    description: 'Corporate documentation, commercial contracts, powers of attorney, and international business authentication.',
    href: '/businesses',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Individual Services',
    description: 'Personal document certification, powers of attorney, statutory declarations, and travel permissions.',
    href: '/individuals',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Apostille & Legalisation',
    description: 'Full apostille and legalisation services for documents required abroad.',
    href: '/businesses#apostille',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

const areas = [
  'Southwark',
  'Bermondsey',
  'Rotherhithe',
  'Walworth',
  'Dulwich',
  'Bankside',
  'Elephant and Castle',
  'Camberwell',
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#334155] to-[#475569] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Notary Public Services in Southwark
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional notarial services for businesses and individuals across South London. Document authentication,
              legalisation, and apostille services. Evening and weekend appointments available at your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="bg-[#ec4899] hover:bg-[#db2777] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white hover:bg-white hover:text-[#334155] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Banner */}
      <section className="bg-[#ec4899] text-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <p className="text-lg">
              <span className="font-bold">Competitive fees</span> - Contact us for a quote
            </p>
            <span className="hidden md:inline">•</span>
            <p className="text-lg">Evening & weekend appointments available at your location</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#334155] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive notarial services for businesses and individuals across South London
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="text-[#ec4899] mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#334155] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-[#ec4899] font-medium inline-flex items-center gap-2">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#334155] mb-6">
                Professional Notary Services in Southwark
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We provide professional notary public services across Southwark and South London.
                Our services include document authentication, legalisation, apostille services,
                powers of attorney, and certification of company documents.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We offer flexible appointment times including evenings and weekends, and can
                visit you at your home or office for your convenience. Contact us today for
                a competitive quote tailored to your specific requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#ec4899] font-semibold hover:gap-3 transition-all"
              >
                Get in touch for a quote
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#334155] to-[#475569] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Areas Served</h3>
              <p className="text-gray-300 mb-6">
                We provide notary services across Southwark and surrounding areas of South London:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {areas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#ec4899]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 mt-6 text-sm">
                Home and business visits available - appointments at your location
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ID Requirements */}
      <section className="py-16 bg-amber-50 border-y border-amber-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="bg-amber-100 rounded-full p-3">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#334155] mb-2">
                Important: ID Requirements
              </h3>
              <p className="text-gray-700">
                To comply with money laundering regulations, we must confirm your identity before providing
                notarial services. Please bring valid government-issued photo ID and proof of residence to
                your appointment. If acting on behalf of a company, evidence of incorporation is required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#334155] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your notarial requirements and receive a competitive quote.
            Evening and weekend appointments available at your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-[#ec4899] hover:bg-[#db2777] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="mailto:notarypublic@live.co.uk"
              className="border-2 border-white hover:bg-white hover:text-[#334155] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
