import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Alterations Boutique - Three London locations in Marylebone, Chelsea, and Wimbledon Village. Free consultation available.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-burgundy via-burgundy-light to-burgundy text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Visit us at any of our three London locations for a free consultation and fitting
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-burgundy mb-3">Phone</h3>
              <a href="tel:02077244147" className="text-lg text-gray-600 hover:text-burgundy transition-colors">
                0207 724 4147
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Call for appointments or urgent enquiries
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-burgundy mb-3">Email</h3>
              <a href="mailto:info@alterationsboutique.co.uk" className="text-lg text-gray-600 hover:text-burgundy transition-colors break-all">
                info@alterationsboutique.co.uk
              </a>
              <p className="text-sm text-gray-500 mt-2">
                For general enquiries and information
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-burgundy mb-3">Opening Hours</h3>
              <div className="text-gray-600 text-sm">
                <p>Mon: 9am-7pm</p>
                <p>Tue-Fri: 9am-9pm</p>
                <p>Sat: 9am-6pm</p>
                <p className="text-gray-500 mt-2">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-silver-light/10 rounded-lg p-8 border border-silver-light/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-burgundy mb-4 text-center">Walk-Ins Welcome!</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              While appointments are appreciated, we happily accept walk-ins during all opening hours at any of our three locations. For express service or bridal consultations, we recommend calling ahead to ensure we can accommodate your timing.
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">
              Our Three Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit any of our conveniently located stores across London
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Marylebone */}
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="bg-burgundy text-white p-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-6 h-6 text-silver-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold">Marylebone</h3>
                </div>
                <p className="text-silver-light text-sm">Flagship Location</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-burgundy mb-2">Address</h4>
                    <p className="text-gray-600 text-sm">
                      14 New Quebec Street<br />
                      Marylebone<br />
                      London W1H 7RS
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy mb-2">Nearby</h4>
                    <p className="text-gray-600 text-sm">
                      Marble Arch tube (Central Line)<br />
                      Close to Baker Street & Edgware Road
                    </p>
                  </div>
                  <Link
                    href="/locations/marylebone"
                    className="block text-center bg-burgundy hover:bg-burgundy-light text-white px-6 py-3 rounded-md font-semibold transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Chelsea */}
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="bg-burgundy text-white p-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-6 h-6 text-silver-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold">Chelsea</h3>
                </div>
                <p className="text-silver-light text-sm">Elegant Chelsea Location</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-burgundy mb-2">Address</h4>
                    <p className="text-gray-600 text-sm">
                      33 Elystan Street<br />
                      Chelsea<br />
                      London SW3 3NT
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy mb-2">Nearby</h4>
                    <p className="text-gray-600 text-sm">
                      Sloane Square tube (Circle & District)<br />
                      Walking distance to King's Road
                    </p>
                  </div>
                  <Link
                    href="/locations/chelsea"
                    className="block text-center bg-burgundy hover:bg-burgundy-light text-white px-6 py-3 rounded-md font-semibold transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Wimbledon */}
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="bg-burgundy text-white p-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-6 h-6 text-silver-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold">Wimbledon Village</h3>
                </div>
                <p className="text-silver-light text-sm">South West London</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-burgundy mb-2">Address</h4>
                    <p className="text-gray-600 text-sm">
                      34 High Street<br />
                      Wimbledon Village<br />
                      London SW19 5BY
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy mb-2">Nearby</h4>
                    <p className="text-gray-600 text-sm">
                      Wimbledon Station (National Rail & District)<br />
                      Wimbledon Village High Street
                    </p>
                  </div>
                  <Link
                    href="/locations/wimbledon"
                    className="block text-center bg-burgundy hover:bg-burgundy-light text-white px-6 py-3 rounded-md font-semibold transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Info */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-burgundy/5 rounded-lg p-8 border border-burgundy/20">
              <h3 className="text-2xl font-semibold text-burgundy mb-4">Call-Out Service Available</h3>
              <p className="text-gray-600 mb-4">
                Can't make it to our stores? We offer a convenient call-out service where our expert team comes to you for fittings and consultations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>At-home fittings and measurements</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Perfect for bridal parties</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Collection and delivery available</span>
                </li>
              </ul>
              <p className="text-sm text-burgundy font-semibold mt-4">
                Call us to arrange: 0207 724 4147
              </p>
            </div>

            <div className="bg-silver-light/10 rounded-lg p-8 border border-silver-light/30">
              <h3 className="text-2xl font-semibold text-burgundy mb-4">Free Consultation & Fitting</h3>
              <p className="text-gray-600 mb-4">
                Every alteration begins with a free consultation and fitting to ensure we understand exactly what you need.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Expert advice on alterations</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Clear pricing before you commit</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Realistic turnaround times</span>
                </li>
              </ul>
              <p className="text-sm text-burgundy font-semibold mt-4">
                Available at all three locations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-burgundy via-burgundy-light to-burgundy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Visit us today for your free consultation or call to discuss your alteration needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02077244147"
              className="inline-block bg-silver-light hover:bg-silver text-burgundy-dark px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg"
            >
              Call 0207 724 4147
            </a>
            <Link
              href="/services"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors border border-white/30"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
