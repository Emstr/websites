import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wimbledon Village Location',
  description: 'Alterations Boutique Wimbledon Village - 34 High Street, London SW19 5BY. Expert alterations in charming Wimbledon Village.',
};

export default function WimbledonPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-burgundy via-burgundy-light to-burgundy text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg className="w-10 h-10 text-silver-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wimbledon Village Location
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Serving South West London from the heart of Wimbledon Village
            </p>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-burgundy mb-8">
                Visit Our Wimbledon Village Store
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-burgundy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-burgundy mb-2">Address</h3>
                    <p className="text-gray-600">
                      34 High Street<br />
                      Wimbledon Village<br />
                      London SW19 5BY
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-burgundy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-burgundy mb-2">Phone</h3>
                    <a href="tel:02077244147" className="text-gray-600 hover:text-burgundy transition-colors">
                      0207 724 4147
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-burgundy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-burgundy mb-2">Email</h3>
                    <a href="mailto:info@alterationsboutique.co.uk" className="text-gray-600 hover:text-burgundy transition-colors break-all">
                      info@alterationsboutique.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-burgundy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-burgundy mb-2">Opening Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday: 9:00am - 7:00pm</p>
                      <p>Tuesday - Friday: 9:00am - 9:00pm</p>
                      <p>Saturday: 9:00am - 6:00pm</p>
                      <p className="text-sm italic text-gray-500 mt-2">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-burgundy/5 rounded-lg p-6 border border-burgundy/20">
                <h3 className="font-semibold text-burgundy mb-3">Perfect for Busy Schedules</h3>
                <p className="text-gray-600 text-sm">
                  Open until 9pm Tuesday through Friday and conveniently located on the High Street for easy access with ample parking nearby.
                </p>
              </div>
            </div>

            {/* About This Location */}
            <div>
              <h2 className="text-3xl font-bold text-burgundy mb-8">
                About Our Wimbledon Village Store
              </h2>

              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Situated in charming Wimbledon Village on the High Street, our store is perfectly positioned to serve residents across South West London. We're proud to be part of this vibrant community and provide the same exceptional service that has defined us since 1983.
                </p>

                <div className="bg-silver-light/10 rounded-lg p-6 border border-silver-light/30">
                  <h3 className="text-xl font-semibold text-burgundy mb-4">Location Highlights:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">In the heart of Wimbledon Village High Street</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Short walk from Wimbledon Station (National Rail & District Line)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Easy access via Wimbledon Parkside tram stop</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Surrounded by boutique shops and cafes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Ample on-street and nearby car park parking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Serving Wimbledon, Raynes Park, Kingston, and beyond</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-burgundy text-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Full Service Availability</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    All of our services are available at this location:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-silver-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Men's & Women's Alterations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-silver-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Bridal Alterations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-silver-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Same-Day Express Service</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-silver-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Call-Out Service</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-silver-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Free Consultation & Fitting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-burgundy mb-8 text-center">
            Our Other Locations
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              href="/locations/marylebone"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:border-burgundy group"
            >
              <h3 className="text-xl font-semibold text-burgundy mb-2 group-hover:text-burgundy-light transition-colors">
                Marylebone (Flagship)
              </h3>
              <p className="text-gray-600 text-sm">
                14 New Quebec Street, London W1H 7RS
              </p>
            </Link>
            <Link
              href="/locations/chelsea"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:border-burgundy group"
            >
              <h3 className="text-xl font-semibold text-burgundy mb-2 group-hover:text-burgundy-light transition-colors">
                Chelsea
              </h3>
              <p className="text-gray-600 text-sm">
                33 Elystan Street, London SW3 3NT
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-burgundy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Visit Us in Wimbledon Village
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Book your free consultation today. Walk-ins welcome during opening hours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-silver-light hover:bg-silver text-burgundy-dark px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
