import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'MOT Testing',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      description: 'Comprehensive MOT testing for cars, vans, and motorcycles. Book online or call us for same-day appointments.',
      features: ['While you wait service', 'Cars, vans & motorcycles', 'Free re-test if needed', 'Detailed inspection report'],
      link: '/mot',
    },
    {
      title: 'Full Vehicle Servicing',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      description: 'Regular servicing to manufacturers specifications. Keep your vehicle running smoothly and maintain warranty.',
      features: ['Interim & full services', 'Manufacturer specifications', 'Quality parts & fluids', 'Service history stamped'],
    },
    {
      title: 'Mechanical Repairs',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      description: 'Expert mechanical repairs for all makes and models. From brakes to engines, we handle it all.',
      features: ['Brake repairs & replacement', 'Clutch repairs', 'Suspension work', 'Engine repairs'],
    },
    {
      title: 'Car Diagnostics',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
      ),
      description: 'Advanced diagnostic equipment to identify and resolve electrical and mechanical faults quickly.',
      features: ['Engine fault diagnosis', 'Warning light investigation', 'Electronic system testing', 'OBD scanning'],
    },
    {
      title: 'Tyres & Wheel Services',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v.878A2.25 2.25 0 0110.75 16h-1.5A2.25 2.25 0 017 13.878V13a2 2 0 00-2-2v-.025c-.163-.512-.335-1.013-.668-1.948z" clipRule="evenodd" />
        </svg>
      ),
      description: 'Premium tyres at competitive prices, plus fitting, balancing and alignment services.',
      features: ['All major tyre brands', 'Puncture repairs', 'Wheel balancing', 'Tracking & alignment'],
    },
    {
      title: 'Air Conditioning Service',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
        </svg>
      ),
      description: 'Air conditioning regas, repair, and servicing to keep you cool all year round.',
      features: ['AC regas service', 'System leak detection', 'Compressor repairs', 'Climate control diagnostics'],
    },
    {
      title: 'Body Repairs & Cosmetics',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>
      ),
      description: 'Professional bodywork repairs and paint services to restore your vehicle to its former glory.',
      features: ['Dent & scratch repairs', 'Panel replacement', 'Paint matching & spraying', 'Bumper repairs'],
    },
    {
      title: 'Performance Tuning',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      description: 'ECU remapping and performance upgrades for enhanced power and fuel efficiency.',
      features: ['ECU remapping', 'Performance chips', 'Exhaust upgrades', 'Dyno testing available'],
    },
    {
      title: 'Electronics & Auto Electrical',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 7H7v6h6V7z" />
          <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
        </svg>
      ),
      description: 'Electrical fault diagnosis and repair for all modern vehicle electronics and systems.',
      features: ['Electrical fault finding', 'Battery testing & replacement', 'Alternator repairs', 'Wiring repairs'],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-garage-charcoal to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive automotive services for all makes and models. From routine maintenance to complex repairs,
              our experienced technicians have you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="bg-garage-red bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-garage-red">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-garage-charcoal mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-garage-red mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                {service.link && (
                  <Link href={service.link} className="text-garage-red font-semibold hover:underline">
                    Learn More →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-garage-charcoal mb-4">All Vehicle Types Welcome</h2>
            <p className="text-xl text-gray-600">We service and repair all types of vehicles</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-garage-red bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Cars & Vans</h3>
              <p className="text-gray-600">All makes and models, from economy to luxury vehicles</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-garage-red bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Classic Vehicles</h3>
              <p className="text-gray-600">Specialist care for classic and vintage automobiles</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-garage-red bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-garage-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-garage-charcoal mb-3">Electric & Hybrid</h3>
              <p className="text-gray-600">Modern electric and hybrid vehicle servicing and repairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-garage-red to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need a Service or Repair?</h2>
          <p className="text-xl mb-8 text-red-100">Contact us today for a free quote</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02072786375"
              className="inline-block bg-white hover:bg-gray-100 text-garage-red font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Call 020 7278 6375
            </a>
            <Link
              href="/contact"
              className="inline-block bg-garage-charcoal hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
