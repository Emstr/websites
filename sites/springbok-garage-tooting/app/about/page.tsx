import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Our Family Story',
  description:
    'The Springbok Garage story. Family-run since 1963, serving Tooting for 60+ years. Three generations of automotive excellence. Wandsworth Guardian Garage of the Year 2012.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-accent/20 backdrop-blur-sm border-2 border-accent rounded-full px-6 py-2">
                <span className="text-accent font-bold text-lg">Est. 1963</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Family Story
            </h1>
            <p className="text-xl text-gray-200">
              Three generations serving Tooting with pride, dedication, and exceptional automotive service
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 60+ Years Banner */}
          <div className="bg-accent text-white rounded-2xl p-12 mb-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">60+ YEARS</h2>
              <p className="text-2xl md:text-3xl mb-6">of Trust & Excellence</p>
              <p className="text-xl text-white/90">
                Since 1963, Springbok Garage has been the heart of automotive service in Tooting.
                That's over six decades of family values, honest service, and community trust.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">A Legacy Built on Trust</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Springbok Garage Ltd was founded in <strong className="text-primary">1963</strong>, in the heart
                  of Tooting, South London. What started as a small family garage has grown into one of the most
                  trusted automotive service centers in the area, yet we've never lost sight of the values that
                  made us successful.
                </p>
                <p>
                  For over six decades, we've been serving the same streets, often working on vehicles for
                  multiple generations of the same families. Some of our customers remember bringing their first
                  car to us in the 1970s and 80s, and now bring their children's and grandchildren's cars to our
                  workshop.
                </p>
                <p>
                  This incredible heritage isn't just about time – it's about the relationships we've built,
                  the trust we've earned, and the commitment to excellence that has been passed down through
                  three generations of our family.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Milestones</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-xl">63</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">1963 - The Beginning</h4>
                    <p className="text-gray-600 text-sm">
                      Springbok Garage opens its doors on Totterdown Street, Tooting
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-xl">80s</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">1980s - Second Generation</h4>
                    <p className="text-gray-600 text-sm">
                      The next generation joins the family business, bringing fresh ideas while maintaining traditions
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">2012 - Award Recognition</h4>
                    <p className="text-gray-600 text-sm">
                      Named Wandsworth Guardian Garage of the Year for outstanding service
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-xl">Now</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">2020s - Three Generations</h4>
                    <p className="text-gray-600 text-sm">
                      Third generation continues the tradition of excellence with modern technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Award Section */}
          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-12 mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <svg className="w-20 h-20 text-accent mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Wandsworth Guardian<br />Garage of the Year 2012
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                This award recognized our commitment to exceptional customer service, quality workmanship,
                and community values. It was a proud moment for our entire team and family.
              </p>
              <p className="text-lg text-gray-300">
                "This award represents everything we stand for – honest service, fair pricing, and treating
                every customer like family."
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Family Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Trust & Integrity</h3>
                <p className="text-gray-600">
                  Honest advice and transparent pricing. We treat every customer with the same respect we'd want for our own family.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Community Focus</h3>
                <p className="text-gray-600">
                  We're proud to be part of Tooting. Many of our customers have been with us for decades – that's what community means.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Excellence</h3>
                <p className="text-gray-600">
                  Six decades of experience, constant training, and attention to detail. We never compromise on quality.
                </p>
              </div>
            </div>
          </div>

          {/* Insurance Industry */}
          <div className="bg-gray-50 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Trusted by the Insurance Industry
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Over the years, we've built a strong reputation not just with our customers, but with the
                insurance industry as well. We're approved by all major insurance companies and handle hundreds
                of claims each year.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This industry trust means we can deal directly with your insurer, handle all the paperwork,
                and make the claims process as smooth and stress-free as possible for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Find Us in Tooting
            </h2>
            <p className="text-xl text-gray-600">
              Same location since 1963 – right in the heart of Tooting
            </p>
          </div>
          <div className="bg-primary text-white rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Visit Our Garage</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-1">Address</p>
                      <p className="text-gray-200">
                        110 Totterdown Street<br />
                        Tooting, London SW17 8TA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-1">How to Find Us</p>
                      <p className="text-gray-200">
                        Close to Tooting Broadway tube station<br />
                        Behind Primark on Tooting High Street
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Opening Hours</h3>
                <div className="space-y-3 text-gray-200">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">7:30am - 5:30pm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span>Saturday</span>
                    <span className="font-semibold">8:00am - 11:00am</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-md font-semibold transition-colors w-full text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
