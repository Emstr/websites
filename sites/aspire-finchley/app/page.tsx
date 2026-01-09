import Link from 'next/link';

const services = [
  {
    title: 'Wealth Management',
    description: 'Professional investment management and portfolio planning to grow and protect your wealth for the future.',
    href: '/wealth-management',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Pensions & Retirement',
    description: 'Expert pension planning and retirement strategies to ensure a comfortable and secure future.',
    href: '/pensions',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Mortgages',
    description: 'Tailored mortgage advice for first-time buyers, remortgaging, and buy-to-let property investments.',
    href: '/mortgages',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Insurance & Protection',
    description: 'Life insurance, critical illness cover, and income protection to safeguard you and your family.',
    href: '/insurance',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Equity Release',
    description: 'Unlock the value in your home with expert equity release advice tailored to your circumstances.',
    href: '/equity-release',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    title: 'Will Writing',
    description: 'Professional will writing services to ensure your estate is distributed according to your wishes.',
    href: '/will-writing',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const areas = [
  'Finchley',
  'East Finchley',
  'North Finchley',
  'Barnet',
  'Muswell Hill',
  'Golders Green',
  'Hampstead',
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Pave the Way for a More Secure Financial Future
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Independent Financial Advisers serving Finchley since 2006. Expert investments, mortgages, insurance, and personal financial planning to help you achieve your goals with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#10b981] hover:bg-[#059669] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Free Consultation
              </Link>
              <Link
                href="/about"
                className="border-2 border-white hover:bg-white hover:text-[#1e3a8a] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Banner */}
      <section className="bg-[#10b981] text-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <p className="text-lg">
              <span className="font-bold">FCA Regulated</span> - Reference: 456867 | Company: OC317451
            </p>
            <span className="hidden md:inline">•</span>
            <p className="text-lg">Established 2006</p>
            <span className="hidden md:inline">•</span>
            <p className="text-lg">Free Initial Consultation</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Our Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial planning and advice tailored to your personal circumstances
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="text-[#10b981] mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-[#10b981] font-medium inline-flex items-center gap-2">
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

      {/* About Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-6">
                Independent Financial Planners
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Aspire Independent Financial Planners LLP has been serving the Finchley and North London
                community for years, providing expert, independent financial advice you can trust.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As truly independent advisers, we're not tied to any financial products or providers. This
                means we can offer completely unbiased advice tailored specifically to your needs and goals.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're planning for retirement, looking to grow your wealth, or protecting your
                family's future, our qualified advisers are here to help you make informed decisions.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#10b981] font-semibold hover:gap-3 transition-all"
              >
                Learn more about our team
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Areas We Serve</h3>
              <p className="text-gray-100 mb-6">
                We provide independent financial advice across Finchley and surrounding North London areas:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {areas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#10b981]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-100 mt-6 text-sm">
                <span className="font-semibold">Aspire House</span> | 17 Station Road, Finchley, London, N3 2SB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50 border-y border-blue-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 text-center">Why Choose Aspire?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-[#1e3a8a]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">FCA Regulated</h3>
              <p className="text-gray-600">
                Fully authorised and regulated by the Financial Conduct Authority for your peace of mind.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-[#1e3a8a]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Based in Finchley with deep understanding of the local community and property market.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-[#1e3a8a]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">No Hidden Fees</h3>
              <p className="text-gray-600">
                Transparent pricing with no hidden charges. You'll know exactly what you're paying for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a8a] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Book your free consultation today and discover how we can help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#10b981] hover:bg-[#059669] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:02083714411"
              className="border-2 border-white hover:bg-white hover:text-[#1e3a8a] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call: 020 8371 4411
            </a>
          </div>
          <p className="text-gray-300 mt-6 text-sm">
            Aspire House, 17 Station Road, Finchley, London, N3 2SB<br />
            Phone: 020 8371 4411 | Fax: 020 8371 4422 | enquiries@aspireonline.co.uk
          </p>
        </div>
      </section>
    </>
  );
}
