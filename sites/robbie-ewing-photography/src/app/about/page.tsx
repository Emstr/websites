import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-photo-black">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="image-placeholder aspect-[4/5]">
              <div className="text-xs">Robbie Ewing Portrait</div>
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                About<br />
                <span className="text-photo-red">Robbie Ewing</span>
              </h1>
              <div className="w-16 h-0.5 bg-photo-red mb-8"></div>
              <p className="text-photo-gray-300 text-lg leading-relaxed mb-6">
                I'm a professional commercial portrait photographer based in South London, specializing in creative work that captures the unique features and personality of each subject.
              </p>
              <p className="text-photo-gray-300 text-lg leading-relaxed mb-6">
                Whether you need polished corporate headshots, artistic creative portraits, dynamic musician photography, or professional model portfolios, my approach is to discover what makes you distinctive and capture that in every frame.
              </p>
              <p className="text-photo-gray-300 text-lg leading-relaxed">
                With years of experience in commercial photography and a fully equipped studio in Camberwell, I work with individuals and businesses to create high-quality images that serve their professional and creative needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 bg-photo-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light mb-6">My Philosophy</h2>
          <div className="w-20 h-0.5 bg-photo-red mx-auto mb-8"></div>
          <p className="text-photo-gray-300 text-xl leading-relaxed mb-8">
            Every person has unique features that make them who they are. Great portrait photography isn't about making everyone look the same—it's about discovering and highlighting what makes each individual special.
          </p>
          <p className="text-photo-gray-300 text-lg leading-relaxed">
            I take a creative, personalized approach to every session, working with you to understand your needs and goals. The result is photography that feels authentic, professional, and distinctly yours.
          </p>
        </div>
      </section>

      {/* The Studio */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">The Studio</h2>
            <div className="w-20 h-0.5 bg-photo-red mx-auto mb-6"></div>
            <p className="text-photo-gray-300 text-lg max-w-3xl mx-auto">
              My fully equipped photography studio in Camberwell, South London, provides the perfect environment for professional portrait sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-12">
            <div className="image-placeholder-wide">
              <div className="text-xs">Studio Setup 1</div>
            </div>
            <div className="image-placeholder-wide">
              <div className="text-xs">Studio Setup 2</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-photo-red/10 border border-photo-red flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-photo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-3">Professional Lighting</h3>
              <p className="text-photo-gray-300 text-sm">
                High-end studio lighting equipment for perfect illumination and creative control
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-photo-red/10 border border-photo-red flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-photo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-3">Versatile Backdrops</h3>
              <p className="text-photo-gray-300 text-sm">
                Multiple backdrop options to suit any style or requirement
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-photo-red/10 border border-photo-red flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-photo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-3">South London Location</h3>
              <p className="text-photo-gray-300 text-sm">
                Conveniently located in Camberwell with easy access from across London
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 px-4 bg-photo-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">What I Offer</h2>
            <div className="w-20 h-0.5 bg-photo-red mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-photo-gray-700 p-8">
              <h3 className="text-2xl font-light mb-4 text-photo-red">Corporate Headshots</h3>
              <p className="text-photo-gray-300 mb-4">
                Professional headshots for business professionals, executives, and teams. Perfect for LinkedIn, company websites, and marketing materials.
              </p>
              <ul className="text-photo-gray-300 text-sm space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-photo-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multiple looks and backgrounds</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-photo-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Professional retouching included</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-photo-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Quick turnaround available</span>
                </li>
              </ul>
            </div>

            <div className="border border-photo-gray-700 p-8">
              <h3 className="text-2xl font-light mb-4 text-photo-red">Creative Portraits</h3>
              <p className="text-photo-gray-300 mb-4">
                Artistic portrait sessions that explore unique lighting, composition, and styling to create distinctive images.
              </p>
              <ul className="text-photo-gray-300 text-sm space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-photo-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personalized creative direction</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-photo-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Experimental lighting techniques</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-photo-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Artistic post-processing</span>
                </li>
              </ul>
            </div>

            <div className="border border-photo-gray-700 p-8">
              <h3 className="text-2xl font-light mb-4 text-photo-red">Musicians & DJs</h3>
              <p className="text-photo-gray-300 mb-4">
                Dynamic portraits for performing artists that capture personality and stage presence for press kits and promotional use.
              </p>
              <ul className="text-photo-gray-300 text-sm space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-photo-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Press kit ready images</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-photo-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Album cover concepts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-photo-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Social media optimized</span>
                </li>
              </ul>
            </div>

            <div className="border border-photo-gray-700 p-8">
              <h3 className="text-2xl font-light mb-4 text-photo-red">Model Portfolios</h3>
              <p className="text-photo-gray-300 mb-4">
                Comprehensive portfolio shoots showcasing range and versatility for aspiring and professional models.
              </p>
              <ul className="text-photo-gray-300 text-sm space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-photo-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multiple looks and styles</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-photo-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Industry-standard quality</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-photo-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Portfolio guidance included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light mb-6">Let's Create Something Special</h2>
          <p className="text-photo-gray-300 text-lg mb-10">
            Ready to book a session or have questions about my services? Get in touch and let's discuss your photography needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-photo-red text-white px-10 py-4 hover:bg-red-600 transition-colors uppercase tracking-widest text-sm"
            >
              Book a Session
            </Link>
            <Link
              href="/portfolio"
              className="border border-photo-gray-700 text-white px-10 py-4 hover:border-photo-red hover:text-photo-red transition-colors uppercase tracking-widest text-sm"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
