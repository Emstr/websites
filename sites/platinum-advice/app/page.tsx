import Link from 'next/link';

const services = [
  {
    title: 'Pensions',
    description: 'Expert pension planning and advice to help you build a secure retirement. From workplace pensions to SIPPs and pension transfers.',
    href: '/services#pensions',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Mortgages',
    description: 'Independent mortgage advice for first-time buyers, movers, and remortgagers. Access to the whole market, not just one lender.',
    href: '/services#mortgages',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Protection',
    description: 'Life insurance, critical illness, and income protection to safeguard you and your family against the unexpected.',
    href: '/services#protection',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Investments',
    description: 'Investment planning and portfolio management tailored to your goals, whether for growth, income, or both.',
    href: '/services#investments',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const areas = [
  { name: 'Wetherby', description: 'Our home base' },
  { name: 'York', description: 'Historic city' },
  { name: 'Harrogate', description: 'Spa town' },
  { name: 'Leeds', description: 'City centre' },
  { name: 'Ripon', description: 'Cathedral city' },
  { name: 'Thirsk', description: 'Market town' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepblue via-blue-800 to-deepblue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/10 border-2 border-gold rounded-full px-5 py-2 mb-6">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gold font-semibold text-sm">INDEPENDENT FINANCIAL ADVISERS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Platinum Advice
            </h1>
            <p className="text-2xl text-gold mb-6 font-semibold">
              Small. Friendly. Reliable.
            </p>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We're a boutique financial advice firm based in Wetherby, North Yorkshire.
              We believe in building genuine relationships with our clients, taking the time
              to understand your unique circumstances and providing tailored advice you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="bg-gold hover:bg-yellow-400 text-deepblue px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Get in Touch
              </Link>
              <Link
                href="/about"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-deepblue px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                About Us
              </Link>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>Based in Wetherby, serving all of North Yorkshire</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-deepblue mb-4">
              The Boutique Approach
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not a faceless corporate firm. We're a small team dedicated to providing
              personal, professional financial advice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-deepblue mb-3">Personal Service</h3>
              <p className="text-slate-600">
                You'll work directly with experienced advisers who take the time to know you
                and your goals. No call centres, no being passed around.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-deepblue mb-3">Independent Advice</h3>
              <p className="text-slate-600">
                We're not tied to any product providers. We search the whole market to find
                the best solutions for your specific needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-deepblue mb-3">Local Knowledge</h3>
              <p className="text-slate-600">
                Based in Wetherby with deep roots in North Yorkshire. We understand the local
                property market, economy, and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-deepblue mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive financial advice across all areas of your financial life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-slate-50 rounded-xl p-8 hover:shadow-xl transition-all group border border-slate-200 hover:border-gold"
              >
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-deepblue mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4 text-lg">
                  {service.description}
                </p>
                <span className="text-gold font-medium inline-flex items-center gap-2">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section className="py-20 bg-gradient-to-br from-deepblue to-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Serving North Yorkshire
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From our Wetherby base, we provide face-to-face and virtual consultations
              across the region
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {areas.map((area) => (
              <div key={area.name} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-gold/20">
                <div className="flex justify-center mb-3">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1">{area.name}</h3>
                <p className="text-sm text-blue-200">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <div>
                <h3 className="text-xl font-semibold mb-2">Flexible Meetings</h3>
                <p className="text-blue-100">
                  We offer appointments at our Wetherby office, at your home or workplace,
                  or via video call - whatever works best for you. Evening and weekend
                  appointments available by arrangement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-deepblue mb-6">
                Your Trusted Partner in Financial Planning
              </h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  At Platinum Advice, we believe financial advice should be personal,
                  straightforward, and focused entirely on your needs.
                </p>
                <p>
                  As a small, independent firm, we're not under pressure to sell specific
                  products or meet corporate targets. Our only goal is to provide you with
                  the best possible advice for your situation.
                </p>
                <p>
                  Whether you're planning for retirement, buying your first home, protecting
                  your family, or growing your wealth, we'll take the time to understand your
                  goals and guide you every step of the way.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all text-lg"
                >
                  Read more about us
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-deepblue to-blue-900 rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-semibold mb-6 text-gold">Why Work With Us?</h3>
              <ul className="space-y-4">
                {[
                  'Small team means personalized attention',
                  'Independent whole-of-market advice',
                  'Deep understanding of North Yorkshire',
                  'Transparent fees with no hidden costs',
                  'Long-term relationships, not one-off sales',
                  'Regulated by the Financial Conduct Authority',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-blue-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-deepblue via-blue-800 to-deepblue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold rounded-full px-4 py-2 mb-6">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-gold font-semibold">Get Started Today</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready for a More Personal Approach?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's have a chat about your financial goals. No pressure, no jargon -
            just friendly, straightforward advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold hover:bg-yellow-400 text-deepblue px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Arrange a Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-deepblue px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            Platinum Advice is authorised and regulated by the Financial Conduct Authority
          </p>
        </div>
      </section>
    </>
  );
}
