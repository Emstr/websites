import Link from 'next/link';

const services = [
  {
    name: 'Investment Planning',
    description: 'Expert investment advice tailored to your financial goals. We help you build and manage a diverse portfolio aligned with your risk tolerance and long-term objectives.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    name: 'Pension Planning',
    description: 'Comprehensive pension and retirement planning services. From workplace pensions to SIPPs, we ensure you are on track for a comfortable retirement.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Protection & Insurance',
    description: 'Safeguard your family and assets with appropriate life insurance, critical illness cover, and income protection. Peace of mind for you and your loved ones.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: 'Financial Planning',
    description: 'Holistic financial planning considering all aspects of your financial life. We create comprehensive strategies to help you achieve your goals and secure your future.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section - 20+ YEARS & DEVON/CORNWALL EMPHASIS */}
      <section className="relative coastal-gradient text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            {/* FCA Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-teal/30 rounded-full px-6 py-3 mb-8">
              <svg className="w-8 h-8 text-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xl font-bold text-teal">FCA Authorised</span>
              <span className="text-white text-lg">·</span>
              <span className="text-lg text-white font-semibold">Ref: 624563</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white">Independent Financial Advisers</span>
              <span className="block text-coral mt-3">Serving Devon & Cornwall Since 2003</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed max-w-3xl mx-auto">
              With over 20 years of experience, Molyneux Associates provides expert financial advice across Plymouth, Devon and Cornwall. Your trusted partner for investments, pensions, and financial protection.
            </p>

            <p className="text-lg text-teal-light mb-10 font-semibold">
              Envoy House, Plympton, Plymouth · Serving all Devon & Cornwall
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-block bg-coral hover:bg-coral-light text-white px-10 py-4 rounded-md font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-md font-semibold text-lg transition-colors border-2 border-teal/50 hover:border-teal"
              >
                Our Services
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal mb-2">20+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal mb-2">2003</div>
                <div className="text-sm text-gray-300">Established</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal mb-2">2012</div>
                <div className="text-sm text-gray-300">Regional Expansion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <svg className="w-16 h-16 text-ocean" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-ocean mb-6">
              Your Regional Financial Experts
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Since 2003, Molyneux Associates has been helping individuals and families across the South West achieve their financial goals. In 2012, we expanded our services to cover all of Devon and Cornwall, bringing expert financial advice to every corner of the region.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our deep understanding of the local area, combined with FCA-regulated expertise, makes us the trusted choice for financial planning in Plymouth and beyond. We take pride in building long-term relationships with our clients, providing continuity and reliability you can count on.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial advice tailored to your unique circumstances and goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white border-2 border-teal/20 rounded-lg p-8 hover:shadow-2xl hover:border-teal transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-ocean rounded-lg flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-ocean mb-3 group-hover:text-teal transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-ocean hover:text-teal font-semibold text-lg transition-colors group"
            >
              View All Services
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Regional Coverage - Devon & Cornwall */}
      <section className="py-20 bg-ocean text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-coral mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold text-lg">Regional Coverage</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Covering All of
                <span className="block text-coral mt-2">Devon & Cornwall</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Based in Plymouth at Envoy House, Plympton, we expanded in 2012 to provide comprehensive financial advice throughout Devon and Cornwall. Our regional presence means we understand the unique needs and opportunities of South West communities.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Whether you are in Plymouth, Exeter, Truro, or anywhere across the two counties, our team of expert advisers is here to help you plan for a secure financial future.
              </p>
              <Link
                href="/coverage"
                className="inline-flex items-center gap-2 bg-coral hover:bg-coral-light text-white px-8 py-3 rounded-md font-semibold transition-colors"
              >
                View Coverage Area
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border-2 border-teal/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-coral mb-6">Why Local Expertise Matters</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">Deep understanding of regional economic factors and opportunities</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">Face-to-face meetings across Plymouth, Devon and Cornwall</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">Established relationships with local professionals and businesses</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">Commitment to serving the South West community for over 20 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FCA Regulation & Trust */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-cream border-2 border-teal/20 rounded-lg p-10">
              <svg className="w-12 h-12 text-ocean mb-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="text-3xl font-bold text-ocean mb-4">FCA Authorised & Regulated</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Molyneux Associates is fully authorised and regulated by the Financial Conduct Authority (FCA Ref: 624563). This means you can trust that we operate to the highest professional standards and your interests are always protected.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our FCA authorisation demonstrates our commitment to transparency, ethical advice, and putting your financial wellbeing first. You can check our credentials on the FCA register at any time.
              </p>
            </div>
            <div className="bg-ocean text-white border-2 border-teal rounded-lg p-10">
              <svg className="w-12 h-12 text-coral mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-3xl font-bold text-coral mb-4">Independent Advice</h3>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                As independent financial advisers, we are not tied to any particular provider or product. This means we can search the whole of the market to find the best solutions for your specific needs and circumstances.
              </p>
              <div className="bg-white/10 backdrop-blur-sm border border-coral/30 rounded-lg p-6">
                <p className="text-coral font-semibold mb-2">Our Promise:</p>
                <p className="text-gray-200 mb-1">Unbiased, independent advice</p>
                <p className="text-gray-200 mb-1">Whole-of-market research</p>
                <p className="text-sm text-teal-light">Putting your interests first, always</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 coastal-gradient text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <svg className="w-20 h-20 text-coral mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Plan Your Financial Future?
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Book a free initial consultation with our expert advisers. We will discuss your goals, answer your questions, and show you how we can help secure your financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-coral hover:bg-coral-light text-white px-10 py-4 rounded-md font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:01752123456"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-md font-semibold text-lg transition-colors border-2 border-white/30 hover:border-coral"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
