import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Jewellery Repairs, Ring Sizing, Bespoke & Restoration',
  description:
    'Expert jewellery services from Hirschfelds. Repairs, ring sizing, bespoke manufacturing, and restoration using traditional techniques. 150 years of master craftsmanship in Hatton Garden.',
};

const services = [
  {
    title: 'Jewellery Repairs',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: 'Expert repairs using time-honored techniques passed down through five generations of master craftsmen.',
    services: [
      'Chain repairs and soldering',
      'Stone setting and replacement',
      'Clasp and catch repairs',
      'Claw tightening and re-tipping',
      'Bracelet and necklace repairs',
      'Earring repairs and conversions',
      'Brooch pin replacements',
      'Polish and refinishing',
    ],
  },
  {
    title: 'Ring Sizing',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    description: 'Professional ring sizing services ensuring a perfect fit while maintaining the integrity and beauty of your piece.',
    services: [
      'Ring enlargement',
      'Ring reduction',
      'Band thickening',
      'Shank replacement',
      'Stone resetting after sizing',
      'Engraving restoration',
      'Pattern matching',
      'Metal matching and finishing',
    ],
  },
  {
    title: 'Bespoke Manufacturing',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    description: 'From concept to creation, our master craftsmen bring your vision to life with meticulous attention to detail.',
    services: [
      'Custom ring design',
      'Bespoke necklaces',
      'Unique bracelets',
      'Personalized pendants',
      'Commission pieces',
      'Remodeling existing jewellery',
      'Memorial jewellery',
      'Anniversary and special occasion pieces',
    ],
  },
  {
    title: 'Restoration',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'Breathing new life into treasured heirlooms and antique pieces, preserving their history while restoring their beauty.',
    services: [
      'Antique jewellery restoration',
      'Victorian and Edwardian pieces',
      'Art Deco restorations',
      'Family heirloom repairs',
      'Pearl restringing',
      'Enamel repair',
      'Historical piece conservation',
      'Museum-quality restoration',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="heritage-gradient text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-gold mb-6">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">150 Years of Excellence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Traditional master craftsmanship combined with modern precision. Every service backed by 150 years of expertise in Hatton Garden.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="bg-navy text-white rounded-lg p-8 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 w-20 h-20 bg-gold rounded-lg flex items-center justify-center text-navy">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white border-2 border-gold/20 rounded-lg p-8 h-full">
                    <h3 className="text-xl font-bold text-navy mb-6">What We Offer:</h3>
                    <ul className="space-y-3">
                      {service.services.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Why Choose Hirschfelds?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our heritage and expertise set us apart
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 border-2 border-gold/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-3">150 Years Heritage</h3>
              <p className="text-gray-600 leading-relaxed">
                One of Britain's oldest jewellery workshops, established 1875. Five generations of master craftsmen.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 border-2 border-gold/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-3">Traditional Techniques</h3>
              <p className="text-gray-600 leading-relaxed">
                Time-honored methods combined with modern precision. Every piece receives individual attention from skilled artisans.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 border-2 border-gold/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-3">Hatton Garden</h3>
              <p className="text-gray-600 leading-relaxed">
                Located in London's historic jewellery quarter, at the heart of Britain's jewellery trade since medieval times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we ensure exceptional results for every client
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-gold/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-navy text-gold rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Consultation</h3>
              <p className="text-gray-600">
                Book an appointment to discuss your requirements with our master craftsmen.
              </p>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-navy text-gold rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Assessment</h3>
              <p className="text-gray-600">
                Detailed evaluation and recommendation of the best approach for your piece.
              </p>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-navy text-gold rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Craftsmanship</h3>
              <p className="text-gray-600">
                Expert work using traditional techniques and modern precision tools.
              </p>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-navy text-gold rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Completion</h3>
              <p className="text-gray-600">
                Final inspection and presentation of your beautifully restored or created piece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 heritage-gradient text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Book an appointment to meet with our master craftsmen and discover how 150 years of expertise can serve your jewellery needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-white px-10 py-4 rounded-md font-semibold text-lg transition-all duration-300 shadow-lg"
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
