import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Expert alterations for men, women, and bridal wear. Professional tailoring and seamstress services in Marylebone, Chelsea, and Wimbledon.',
};

const mensServices = [
  'Suit alterations and tailoring',
  'Trouser hemming and adjustments',
  'Jacket resizing and reshaping',
  'Shirt adjustments and sleeve alterations',
  'Waistcoat and formal wear alterations',
  'Coat and overcoat modifications',
  'Jeans and casual wear adjustments',
  'Zipper replacement and repairs',
];

const womensServices = [
  'Dress alterations and resizing',
  'Skirt hemming and adjustments',
  'Trouser and jean alterations',
  'Blouse and shirt modifications',
  'Evening wear and formal dress alterations',
  'Coat and jacket resizing',
  'Zipper replacement and repairs',
  'Button replacement and adjustments',
];

const bridalServices = [
  'Wedding dress alterations',
  'Bridal gown resizing and fitting',
  'Bridesmaid dress alterations',
  'Mother of the bride outfit alterations',
  'Veil adjustments and customization',
  'Train length adjustments',
  'Bodice and bust alterations',
  'Specialist beading and embellishment work',
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-burgundy via-burgundy-light to-burgundy text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Alteration Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Expert tailoring, seamstress services, and alterations for every occasion. With over 40 years of experience, we deliver perfection in every stitch.
            </p>
          </div>
        </div>
      </section>

      {/* Men's Alterations */}
      <section id="mens" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-burgundy/10 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-burgundy">
                  Men's Alterations
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether it's a bespoke suit, off-the-rack garment, or casual wear, our expert tailors ensure the perfect fit. From simple hemming to complex resizing, we handle all aspects of men's alterations with precision and care.
              </p>
              <div className="bg-silver-light/10 rounded-lg p-6 border border-silver-light/30">
                <h3 className="text-xl font-semibold text-burgundy mb-4">Our Services Include:</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {mensServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-burgundy/5 to-silver-light/10 rounded-lg p-8 border border-silver-light/30">
              <h3 className="text-2xl font-semibold text-burgundy mb-6">Perfect for:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-burgundy flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-burgundy mb-1">Business & Formal Wear</h4>
                    <p className="text-gray-600 text-sm">Suits, dress shirts, and formal trousers for the office or special occasions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-burgundy flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-burgundy mb-1">Wedding Attire</h4>
                    <p className="text-gray-600 text-sm">Groom suits, groomsmen outfits, and formal wedding wear</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-burgundy flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-burgundy mb-1">Casual & Everyday Wear</h4>
                    <p className="text-gray-600 text-sm">Jeans, casual shirts, jackets, and everyday clothing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women's Alterations */}
      <section id="womens" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-burgundy/5 to-silver-light/10 rounded-lg p-8 border border-silver-light/30">
              <h3 className="text-2xl font-semibold text-burgundy mb-6">Perfect for:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-burgundy flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-burgundy mb-1">Designer & Fashion</h4>
                    <p className="text-gray-600 text-sm">Trusted by fashion brands for alterations on designer pieces</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-burgundy flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-burgundy mb-1">Evening & Formal Wear</h4>
                    <p className="text-gray-600 text-sm">Elegant alterations for gowns, cocktail dresses, and formal attire</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-burgundy flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-burgundy mb-1">Professional & Casual</h4>
                    <p className="text-gray-600 text-sm">Business suits, workwear, and everyday casual clothing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-burgundy/10 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-burgundy">
                  Women's Alterations
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From designer pieces to everyday wear, our skilled seamstresses provide expert alterations with meticulous attention to detail. We understand the importance of fit and work with all fabrics and styles.
              </p>
              <div className="bg-silver-light/10 rounded-lg p-6 border border-silver-light/30">
                <h3 className="text-xl font-semibold text-burgundy mb-4">Our Services Include:</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {womensServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Alterations */}
      <section id="bridal" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-burgundy/10 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-burgundy">
                Bridal Alterations
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your wedding day is one of the most important days of your life. Our specialist bridal seamstresses ensure your gown fits perfectly, so you can feel confident and beautiful on your special day.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-silver-light/10 rounded-lg p-8 border border-silver-light/30">
              <h3 className="text-xl font-semibold text-burgundy mb-6">Bridal Services:</h3>
              <ul className="space-y-3">
                {bridalServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="bg-burgundy/5 rounded-lg p-8 border border-burgundy/20 mb-6">
                <h3 className="text-xl font-semibold text-burgundy mb-4">Why Choose Us for Bridal?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-burgundy flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-burgundy mb-1">40+ Years Experience</h4>
                      <p className="text-gray-600 text-sm">Decades of expertise in bridal alterations and delicate fabric work</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-burgundy flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-burgundy mb-1">Multiple Fittings</h4>
                      <p className="text-gray-600 text-sm">We provide several fittings to ensure perfection on your big day</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-burgundy flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-burgundy mb-1">All Styles & Fabrics</h4>
                      <p className="text-gray-600 text-sm">From vintage lace to modern silk, we work with all materials</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-burgundy flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-burgundy mb-1">Full Wedding Party</h4>
                      <p className="text-gray-600 text-sm">We alter bridesmaids, mother of the bride, and entire wedding parties</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-silver-light/20 rounded-lg p-6 border border-silver/30">
                <p className="text-burgundy font-semibold mb-2">
                  Book your bridal consultation early!
                </p>
                <p className="text-gray-600 text-sm">
                  We recommend booking at least 2-3 months before your wedding to allow time for multiple fittings and adjustments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-burgundy via-burgundy-light to-burgundy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Book your free consultation at any of our three London locations. Same-day and express service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-silver-light hover:bg-silver text-burgundy-dark px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/express-service"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors border border-white/30"
            >
              Express Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
