import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-photo-black">
      {/* Hero Section - Full Screen */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 image-placeholder">
          <div className="text-xs uppercase tracking-widest">Hero Portrait Image</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-photo-black/40 via-transparent to-photo-black"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
            Capturing Your<br />
            <span className="text-photo-red">Best Features</span>
          </h1>
          <p className="text-xl md:text-2xl text-photo-gray-300 mb-8 max-w-2xl mx-auto font-light">
            Creative commercial portraits that showcase the unique you
          </p>
          <Link
            href="/portfolio"
            className="inline-block bg-photo-red text-white px-10 py-4 hover:bg-red-600 transition-colors uppercase tracking-widest text-sm"
          >
            View Portfolio
          </Link>
        </div>
      </section>

      {/* Services Grid - Visual */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">Specialties</h2>
            <div className="w-20 h-0.5 bg-photo-red mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/portfolio" className="group relative overflow-hidden">
              <div className="image-placeholder aspect-[3/4] transition-transform duration-500 group-hover:scale-105">
                <div className="text-xs uppercase tracking-widest">Corporate Headshots</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-photo-black via-photo-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-2xl font-light mb-2">Corporate Headshots</h3>
                <p className="text-photo-gray-300 text-sm">Professional & Polished</p>
              </div>
            </Link>

            <Link href="/portfolio" className="group relative overflow-hidden">
              <div className="image-placeholder aspect-[3/4] transition-transform duration-500 group-hover:scale-105">
                <div className="text-xs uppercase tracking-widest">Creative Portraits</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-photo-black via-photo-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-2xl font-light mb-2">Creative Portraits</h3>
                <p className="text-photo-gray-300 text-sm">Unique & Artistic</p>
              </div>
            </Link>

            <Link href="/portfolio" className="group relative overflow-hidden">
              <div className="image-placeholder aspect-[3/4] transition-transform duration-500 group-hover:scale-105">
                <div className="text-xs uppercase tracking-widest">Musicians & DJs</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-photo-black via-photo-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-2xl font-light mb-2">Musicians & DJs</h3>
                <p className="text-photo-gray-300 text-sm">Dynamic & Expressive</p>
              </div>
            </Link>

            <Link href="/portfolio" className="group relative overflow-hidden">
              <div className="image-placeholder aspect-[3/4] transition-transform duration-500 group-hover:scale-105">
                <div className="text-xs uppercase tracking-widest">Model Portfolios</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-photo-black via-photo-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-2xl font-light mb-2">Model Portfolios</h3>
                <p className="text-photo-gray-300 text-sm">Versatile & Professional</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work - Large Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Recent Work</h2>
          <div className="w-20 h-0.5 bg-photo-red mx-auto mb-6"></div>
          <p className="text-photo-gray-300 text-lg">A selection of recent commercial projects</p>
        </div>

        <div className="gallery-grid max-w-7xl mx-auto">
          <div className="image-placeholder">
            <div className="text-xs">Portrait 1</div>
          </div>
          <div className="image-placeholder">
            <div className="text-xs">Portrait 2</div>
          </div>
          <div className="image-placeholder">
            <div className="text-xs">Portrait 3</div>
          </div>
          <div className="image-placeholder">
            <div className="text-xs">Portrait 4</div>
          </div>
          <div className="image-placeholder">
            <div className="text-xs">Portrait 5</div>
          </div>
          <div className="image-placeholder">
            <div className="text-xs">Portrait 6</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 text-photo-red hover:text-red-400 transition-colors uppercase tracking-widest text-sm"
          >
            <span>View Full Portfolio</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Studio Highlight */}
      <section className="py-20 bg-photo-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="image-placeholder-wide">
              <div className="text-xs">Fully Equipped Studio</div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Fully Equipped<br />
                <span className="text-photo-red">South London Studio</span>
              </h2>
              <p className="text-photo-gray-300 text-lg leading-relaxed mb-6">
                Based in Camberwell, my fully equipped photography studio provides the perfect environment for creating stunning commercial portraits.
              </p>
              <p className="text-photo-gray-300 text-lg leading-relaxed mb-8">
                Professional lighting, versatile backdrops, and a comfortable space designed to bring out your best features. Whether it's corporate headshots, creative portraits, or commercial work, the studio is ready for any project.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-photo-red hover:text-red-400 transition-colors uppercase tracking-widest text-sm"
              >
                <span>Learn More About the Studio</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">My Approach</h2>
          <div className="w-20 h-0.5 bg-photo-red mx-auto mb-8"></div>
          <p className="text-photo-gray-300 text-xl leading-relaxed mb-12">
            Every person has unique features and characteristics that make them special. My creative approach to portrait photography is about discovering and capturing those distinctive qualities, whether you need professional corporate images or artistic creative portraits.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-photo-red/10 border border-photo-red flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-photo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-2">Creative Vision</h3>
              <p className="text-photo-gray-300 text-sm">Unique perspective that highlights your best features</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-photo-red/10 border border-photo-red flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-photo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-2">Professional Quality</h3>
              <p className="text-photo-gray-300 text-sm">Commercial-grade work for all your needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-photo-red/10 border border-photo-red flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-photo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-2">Relaxed Sessions</h3>
              <p className="text-photo-gray-300 text-sm">Comfortable environment to bring out natural expressions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-photo-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Book?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let's create stunning portraits that capture your unique features and personality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-photo-black px-10 py-4 hover:bg-photo-gray-100 transition-colors uppercase tracking-widest text-sm font-medium"
            >
              Book a Session
            </Link>
            <a
              href="tel:07973844035"
              className="bg-transparent border-2 border-white text-white px-10 py-4 hover:bg-white hover:text-photo-red transition-colors uppercase tracking-widest text-sm font-medium"
            >
              Call: 07973 844035
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
