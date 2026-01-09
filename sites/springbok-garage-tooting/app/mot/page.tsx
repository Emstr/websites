import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MOT Testing',
  description:
    'MOT testing in Tooting from Springbok Garage. Class 4 & 7 MOT. While-you-wait service, free re-test, honest advice. 60+ years of trusted service.',
};

export default function MOTPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg className="w-16 h-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              MOT Testing in Tooting
            </h1>
            <p className="text-xl text-gray-200">
              Professional MOT testing you can trust. Over 60 years of experience serving the local community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Why Choose Our MOT Service?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Springbok Garage, we've been conducting MOT tests since the scheme began.
                Our experienced technicians provide thorough, honest testing with no unnecessary
                recommendations. We're here to help you keep your vehicle safe and legal.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">While-You-Wait Service</h3>
                    <p className="text-gray-600">Most MOT tests completed within the hour. Comfortable waiting area available.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Free Re-Test</h3>
                    <p className="text-gray-600">Free MOT re-test within 10 working days if repairs are needed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Experienced Testers</h3>
                    <p className="text-gray-600">Our MOT testers have decades of experience and follow all DVSA guidelines.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Honest Advice</h3>
                    <p className="text-gray-600">Clear explanation of any issues found. No pressure, just honest recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Repairs Available</h3>
                    <p className="text-gray-600">Minor repairs can often be completed the same day to get you back on the road.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">What We Test</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Class 4 MOT</h4>
                  <p className="text-gray-600 mb-3">For cars, vans, and motorhomes up to 3,000kg</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      Lights and indicators
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      Brakes and brake lights
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      Steering and suspension
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      Tires and wheels
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      Exhaust and emissions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      Seatbelts and airbags
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      Windscreen and wipers
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      Vehicle body and structure
                    </li>
                  </ul>
                </div>
                <div className="border-t border-gray-300 pt-6">
                  <h4 className="font-semibold text-primary mb-3">Class 7 MOT</h4>
                  <p className="text-gray-600 mb-3">For commercial vehicles from 3,000kg to 3,500kg</p>
                  <p className="text-gray-700">
                    We also test commercial vehicles including vans and light goods vehicles with comprehensive testing to DVSA standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MOT Preparation Tips */}
          <div className="bg-accent/5 border-l-4 border-accent rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-primary mb-6">Prepare for Your MOT</h3>
            <p className="text-gray-700 mb-6">
              Before bringing your vehicle in, check these simple items to help ensure a smooth MOT:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Check all lights are working (including number plate lights)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ensure windscreen has no cracks or chips in driver's view</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Check tire tread depth (minimum 1.6mm across central 3/4)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Test horn is working</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Check all seatbelts function properly</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Top up windscreen washer fluid</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ensure number plates are clean and readable</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Remove excess items from boot (we need access to spare wheel area)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your MOT Today
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Don't wait until the last minute. Call us now to book your MOT test at our Tooting garage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:02086727788"
                className="inline-block bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
              >
                Call 020 8672 7788
              </a>
              <Link
                href="/contact"
                className="inline-block bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-md font-semibold text-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <p className="mt-6 text-gray-300 text-sm">
              Mon-Fri: 7:30am - 5:30pm | Sat: 8:00am - 11:00am
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
