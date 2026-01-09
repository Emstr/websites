import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '150 Years of Heritage Since 1875 | Our Story',
  description:
    'The extraordinary 150-year story of Hirschfelds, one of Britain\'s oldest jewellery workshops. From Queen Victoria\'s reign to today, five generations of master craftsmen in Hatton Garden.',
};

const timeline = [
  {
    year: '1875',
    era: 'Victorian Era',
    title: 'The Beginning',
    description: 'Hirschfelds was founded in Hatton Garden during the reign of Queen Victoria. London was the heart of the British Empire, and Hatton Garden was already established as the epicenter of the jewellery trade.',
  },
  {
    year: '1900s',
    era: 'Edwardian & Art Nouveau',
    title: 'New Century, Lasting Legacy',
    description: 'As the Victorian era gave way to the Edwardian period, Hirschfelds adapted to new styles while maintaining traditional craftsmanship. The workshop became known for its expertise in intricate metalwork.',
  },
  {
    year: '1920s-30s',
    era: 'Art Deco',
    title: 'The Jazz Age',
    description: 'The roaring twenties brought Art Deco glamour to jewellery design. Hirschfelds mastered the geometric patterns and bold designs that defined this revolutionary period.',
  },
  {
    year: '1940s-50s',
    era: 'Post-War Recovery',
    title: 'Resilience & Rebuilding',
    description: 'Through the challenges of wartime and reconstruction, Hirschfelds continued serving the Hatton Garden community. The workshop became a cornerstone for jewellery repairs and restoration.',
  },
  {
    year: '1960s-80s',
    era: 'Modern Era',
    title: 'Tradition Meets Innovation',
    description: 'While embracing new techniques and tools, Hirschfelds remained committed to traditional craftsmanship. The workshop\'s reputation for quality and integrity continued to grow.',
  },
  {
    year: '2000s',
    era: '21st Century',
    title: 'A New Millennium',
    description: 'Entering the 2000s, Hirschfelds celebrated 125 years of continuous service. The workshop modernized while preserving the time-honored techniques that defined its excellence.',
  },
  {
    year: '2025',
    era: 'Present Day',
    title: '150 Years of Excellence',
    description: 'Today, Hirschfelds stands as one of the oldest jewellery workshops in Britain. Five generations later, we continue the tradition of master craftsmanship that began in 1875.',
  },
];

export default function HeritagePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="heritage-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <svg className="w-24 h-24 text-gold mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-gold/30 rounded-full px-8 py-4 mb-8">
              <span className="text-5xl font-bold text-gold">1875</span>
              <span className="text-3xl text-white">—</span>
              <span className="text-5xl font-bold text-gold">2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">150 Years</span>
              <span className="block text-gold mt-3">of Excellence</span>
            </h1>
            <p className="text-2xl text-gray-200 leading-relaxed">
              The extraordinary story of one of Britain's oldest jewellery workshops, spanning from Queen Victoria's reign to the present day.
            </p>
          </div>
        </div>
      </section>

      {/* Opening Statement */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <svg className="w-16 h-16 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              An Extraordinary Legacy
            </h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              In 1875, when Hirschfelds first opened its doors in Hatton Garden, Queen Victoria was on the throne, the telephone had just been invented, and London was the capital of the world's largest empire. Today, 150 years later, we stand as one of Britain's oldest continuously operating jewellery workshops.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Through five generations, two world wars, countless social and technological revolutions, one thing has remained constant: our unwavering commitment to master craftsmanship and exceptional service.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              This is not merely a business story—it is a testament to the enduring value of traditional skills, the importance of heritage, and the timeless appeal of beautifully crafted jewellery.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              150 years of craftsmanship, innovation, and dedication
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold/30"></div>

            <div className="space-y-12">
              {timeline.map((period, index) => (
                <div
                  key={period.year}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                    <div className="inline-block bg-gold text-white px-4 py-2 rounded-full font-bold text-lg mb-2">
                      {period.year}
                    </div>
                    <div className="text-sm text-gold font-semibold mb-2">{period.era}</div>
                    <h3 className="text-2xl font-bold text-navy mb-3">{period.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{period.description}</p>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold rounded-full border-4 border-cream"></div>

                  {/* Spacer for alternating layout */}
                  <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Five Generations */}
      <section className="py-20 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Five Generations of
              <span className="block text-gold mt-2">Master Craftsmen</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              The knowledge, skills, and values that define Hirschfelds have been carefully passed down through five generations of master craftsmen, each building upon the legacy of those who came before.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-gold/30 rounded-lg p-6">
                <div className="text-4xl font-bold text-gold mb-3">5</div>
                <div className="text-lg font-semibold mb-2">Generations</div>
                <div className="text-sm text-gray-300">Of continuous family craftsmanship</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-gold/30 rounded-lg p-6">
                <div className="text-4xl font-bold text-gold mb-3">150</div>
                <div className="text-lg font-semibold mb-2">Years</div>
                <div className="text-sm text-gray-300">Of unbroken service since 1875</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-gold/30 rounded-lg p-6">
                <div className="text-4xl font-bold text-gold mb-3">1000s</div>
                <div className="text-lg font-semibold mb-2">Of Pieces</div>
                <div className="text-sm text-gray-300">Repaired, restored, and created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Techniques */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Preserving Traditional Techniques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In an age of mass production, we maintain the time-honored methods that define true craftsmanship
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-cream border-2 border-gold/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Hand Engraving</h3>
              <p className="text-sm text-gray-600">Traditional hand engraving techniques passed down through generations</p>
            </div>
            <div className="bg-cream border-2 border-gold/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Soldering Arts</h3>
              <p className="text-sm text-gray-600">Precision metalwork using traditional torch techniques</p>
            </div>
            <div className="bg-cream border-2 border-gold/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Stone Setting</h3>
              <p className="text-sm text-gray-600">Expert setting of precious stones using classical methods</p>
            </div>
            <div className="bg-cream border-2 border-gold/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Restoration</h3>
              <p className="text-sm text-gray-600">Breathing new life into antique and heirloom pieces</p>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Looking Forward
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            As we celebrate 150 years of excellence, we look to the future with the same commitment to quality and craftsmanship that has defined Hirschfelds since 1875. While techniques evolve and tools modernize, our core values remain unchanged.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            We are honored to be custodians of this extraordinary legacy, and we remain dedicated to serving our clients with the same excellence that our founders established a century and a half ago.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-block bg-navy hover:bg-navy-light text-white px-10 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Our Services
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
    </>
  );
}
