import Link from 'next/link';
import Image from 'next/image';

const individualServices = [
  'Power of Attorney',
  'Passport & Document Certification',
  'Statutory Declarations',
  'Marriage Capacity Certificates',
  'International Wills',
  'Travel Authorisation for Children',
];

const businessServices = [
  'Corporate Powers of Attorney',
  'Company Document Authentication',
  'Commercial Mortgages',
  'Bank Account Documentation',
  'Bills of Exchange',
  'Corporate Resolutions',
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <Image
          src="/hero-bg.jpg"
          alt="Camden London"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Notary Public
            <br />
            <span className="text-accent">Camden, London</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-2xl">
            Linda Okagbue - Professional notary services for individuals and businesses.
            Conveniently located near Kings Cross and Euston.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quote"
              className="inline-block bg-accent hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors text-center"
            >
              Get an Instant Quote
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors text-center border border-white/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="bg-secondary text-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>4 min from Kings Cross / St Pancras</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>3 min from Euston Station</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Mon-Fri 9:30am - 5:30pm</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              About Linda Okagbue
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Linda Okagbue is a Notary Public and qualified Solicitor based in Camden, Central London.
              With years of experience in notarial practice, she provides professional document
              authentication services for both individuals and businesses.
            </p>
            <p className="text-lg text-gray-600">
              Her office is conveniently located in the heart of London, just minutes from Kings Cross,
              St Pancras, and Euston stations, making it easily accessible from across London and the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Notary Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Individual Services */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                For Individuals
              </h3>
              <ul className="space-y-3">
                {individualServices.map((service) => (
                  <li key={service} className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="inline-block mt-6 text-accent hover:text-[amber-600] font-medium"
              >
                View all individual services &rarr;
              </Link>
            </div>

            {/* Business Services */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                For Businesses
              </h3>
              <ul className="space-y-3">
                {businessServices.map((service) => (
                  <li key={service} className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="inline-block mt-6 text-accent hover:text-[amber-600] font-medium"
              >
                View all business services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legalisation CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Apostille & Legalisation Services
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Need your documents recognised abroad? We handle apostille certificates
            and embassy legalisation for use in countries worldwide.
          </p>
          <Link
            href="/legalisation"
            className="inline-block bg-accent hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            Learn About Legalisation
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Why Choose Camden Notary?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Central Location</h3>
              <p className="text-gray-600">
                Easy access from Kings Cross, St Pancras, and Euston stations.
                Perfect for clients across London.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Flexible Appointments</h3>
              <p className="text-gray-600">
                Evening and weekend appointments available. Home and office visits
                by arrangement.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Professional Service</h3>
              <p className="text-gray-600">
                Qualified Notary Public and Solicitor. Regulated by the Faculty Office
                of the Archbishop of Canterbury.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get an instant quote for your notary requirements, or contact us to discuss
            your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-block bg-accent hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Get an Instant Quote
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-secondary text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
