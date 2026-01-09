import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hatton Garden Location | London\'s Historic Jewellery Quarter',
  description:
    'Hirschfelds in Hatton Garden - London\'s legendary jewellery quarter for over 500 years. Discover why this historic location is the heart of Britain\'s jewellery trade.',
};

export default function HattonGardenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="heritage-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-gold mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-semibold text-xl">Our Location</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">In the Heart of</span>
              <span className="block text-gold mt-3">Hatton Garden</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              London's legendary jewellery quarter. The epicenter of Britain's diamond trade for over 500 years.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <svg className="w-16 h-16 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              A Legendary Address
            </h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Hatton Garden is not just a street—it's a symbol of excellence in jewellery craftsmanship and trade. For over 500 years, this historic quarter has been synonymous with diamonds, precious stones, and master craftsmanship.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Named after Sir Christopher Hatton, a favorite of Queen Elizabeth I, the street was once the garden of Hatton House. Today, it houses the greatest concentration of jewellery businesses in the United Kingdom, making it the undisputed center of British jewellery trade.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              For Hirschfelds to have called Hatton Garden home since 1875 is a testament to our position within this prestigious community of craftsmen and traders.
            </p>
          </div>
        </div>
      </section>

      {/* Why Hatton Garden */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Why Hatton Garden?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the significance of London's jewellery quarter
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gold/20 rounded-lg p-8">
              <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">500+ Years of History</h3>
              <p className="text-gray-700 leading-relaxed">
                The jewellery trade has flourished in Hatton Garden since medieval times, creating an unparalleled heritage of craftsmanship and expertise.
              </p>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-8">
              <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">300+ Businesses</h3>
              <p className="text-gray-700 leading-relaxed">
                Over 300 jewellery businesses operate in this single quarter, creating the largest concentration of jewellery expertise in Britain.
              </p>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-8">
              <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Diamond District</h3>
              <p className="text-gray-700 leading-relaxed">
                Hatton Garden is the center of London's diamond trade, handling millions of pounds worth of precious stones daily.
              </p>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-8">
              <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Master Craftsmen</h3>
              <p className="text-gray-700 leading-relaxed">
                Generations of skilled artisans have trained and worked in Hatton Garden, maintaining the highest standards of craftsmanship.
              </p>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-8">
              <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Global Reputation</h3>
              <p className="text-gray-700 leading-relaxed">
                Hatton Garden's reputation extends worldwide, attracting buyers, sellers, and collectors from across the globe.
              </p>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-8">
              <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Trusted Community</h3>
              <p className="text-gray-700 leading-relaxed">
                A close-knit community of reputable businesses built on centuries of trust, integrity, and professional excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Significance */}
      <section className="py-20 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                A Street Steeped in
                <span className="block text-gold mt-2">Royal History</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Hatton Garden takes its name from Sir Christopher Hatton, Lord Chancellor to Queen Elizabeth I, who was granted the land in 1576. The gardens of his mansion, Hatton House, once occupied this site.
                </p>
                <p>
                  By the Victorian era, Hatton Garden had evolved into the center of London's jewellery and diamond trade—a position it has maintained ever since. When Hirschfelds opened in 1875, it joined an already thriving community of jewellers and craftsmen.
                </p>
                <p>
                  Today, walking down Hatton Garden is like stepping into a living museum of British jewellery heritage, where centuries-old businesses operate alongside modern enterprises, all united by a commitment to excellence.
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border-2 border-gold/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gold mb-6">Notable Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">Named after Sir Christopher Hatton, Lord Chancellor to Queen Elizabeth I</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">Home to approximately 55 jewellery shops and 300+ businesses</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">Processes over £200 million worth of jewellery annually</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">Features in countless films and books as London's jewellery center</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">Easily accessible via Farringdon and Chancery Lane stations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hirschfelds in Hatton Garden */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <svg className="w-20 h-20 text-gold mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Hirschfelds: Part of the Fabric
          </h2>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            For 150 years, Hirschfelds has been an integral part of the Hatton Garden community. Our presence here is more than just location—it's a connection to centuries of craftsmanship, a network of expertise, and a shared commitment to excellence.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            When you bring your precious jewellery to Hirschfelds, you're not just visiting a workshop—you're stepping into the heart of British jewellery heritage, where tradition and expertise have been preserved and perfected for generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/heritage"
              className="inline-block bg-navy hover:bg-navy-light text-white px-10 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Our 150-Year Story
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-white px-10 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Visit Our Workshop
            </Link>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Visit Us in Hatton Garden
            </h2>
            <p className="text-xl text-gray-600">
              Conveniently located in the heart of London's jewellery quarter
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gold/20 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Location</h3>
              <p className="text-gray-700">
                Hatton Garden<br />
                London, EC1N
              </p>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Nearest Stations</h3>
              <p className="text-gray-700">
                Farringdon (5 min walk)<br />
                Chancery Lane (7 min walk)
              </p>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Opening Hours</h3>
              <p className="text-gray-700">
                Mon-Fri: 11am - 4pm<br />
                By Appointment Only
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
