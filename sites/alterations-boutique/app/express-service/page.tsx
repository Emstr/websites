import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Express Service',
  description: 'Same-day and express alterations service in London. Fast turnaround when you need it most. Available at all three locations.',
};

export default function ExpressServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-burgundy via-burgundy-light to-burgundy text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg className="w-12 h-12 text-silver-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Express Alterations Service
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Need it fast? We offer same-day and express alterations when you're in a hurry
            </p>
          </div>
        </div>
      </section>

      {/* Express Service Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-6">
                Fast Turnaround Without Compromise
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sometimes you need alterations in a hurry - whether it's for a last-minute event, a business meeting, or an unexpected occasion. Our express service delivers the same exceptional quality you expect, just faster.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 40 years of experience and expert tailors at all three locations, we're equipped to handle urgent alterations without sacrificing the quality and precision that define our work.
              </p>

              <div className="bg-burgundy/5 rounded-lg p-6 border border-burgundy/20">
                <h3 className="text-xl font-semibold text-burgundy mb-4">Express Service Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Same-day service available for urgent requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Priority handling of your garments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Same high quality standards as regular service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Available at all three London locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Evening hours until 9pm Tuesday-Friday</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-burgundy/5 to-silver-light/10 rounded-lg p-8 border border-silver-light/30">
              <h3 className="text-2xl font-semibold text-burgundy mb-6">Express Turnaround Times</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-burgundy">Same-Day Service</h4>
                    <span className="text-sm text-gray-600">Drop off before 10am</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Simple alterations like hemming, basic adjustments, and minor repairs completed the same day. Ready for collection by 5pm.
                  </p>
                </div>

                <div className="border-t border-gray-300 pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-burgundy">24-Hour Express</h4>
                    <span className="text-sm text-gray-600">Next-day collection</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    More complex alterations including resizing, multiple adjustments, and detailed work. Drop off by 2pm, collect next day.
                  </p>
                </div>

                <div className="border-t border-gray-300 pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-burgundy">48-Hour Express</h4>
                    <span className="text-sm text-gray-600">Two-day turnaround</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Comprehensive alterations, bridal adjustments, and complex tailoring work. Perfect for urgent formal events.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-burgundy text-white rounded-lg p-4">
                <p className="text-sm">
                  <strong>Note:</strong> Express service availability depends on the complexity of work required. Please call ahead to confirm timing for your specific alteration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Express Service Types */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">
              What We Can Do Express
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most alterations can be handled on an express basis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="w-14 h-14 bg-burgundy/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-burgundy mb-3">Quick Alterations</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Trouser & skirt hemming</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Dress shortening</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Sleeve adjustments</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Zipper replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Button replacement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="w-14 h-14 bg-burgundy/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-burgundy mb-3">Business & Formal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Suit jacket alterations</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Waist adjustments</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Shirt fitting</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Evening gown adjustments</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Formal wear repairs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="w-14 h-14 bg-burgundy/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-burgundy mb-3">Special Occasions</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Bridesmaid dress adjustments</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Party dress alterations</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Prom dress fitting</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Emergency repairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Last-minute adjustments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4">
              How Express Service Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, fast, and reliable
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-burgundy mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">
                Call ahead or visit us in person to discuss your express alteration needs and timing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-burgundy mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Our expert team assesses your garment and confirms the turnaround time and pricing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-burgundy mb-2">Priority Work</h3>
              <p className="text-gray-600 text-sm">
                Your alteration is prioritized and completed by our skilled tailors with the same quality standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-burgundy mb-2">Quick Collection</h3>
              <p className="text-gray-600 text-sm">
                Collect your perfectly altered garment at the agreed time - ready when you need it
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-burgundy via-burgundy-light to-burgundy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Express Service?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Call us now to discuss your urgent alteration needs. Available at all three locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02077244147"
              className="inline-block bg-silver-light hover:bg-silver text-burgundy-dark px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg"
            >
              Call 0207 724 4147
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors border border-white/30"
            >
              Visit a Location
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
