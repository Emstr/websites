import Link from 'next/link';

const services = [
  {
    title: 'Investments',
    description: 'Expert investment advice tailored to your goals, risk profile and time horizon. ISAs, bonds, funds and portfolio management.',
    href: '/services#investments',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Pensions',
    description: 'Comprehensive pension planning including SIPPs, workplace pensions, pension transfers and consolidation advice.',
    href: '/services#pensions',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Mortgages',
    description: 'Residential and buy-to-let mortgage advice from a whole of market perspective. First-time buyers to remortgages.',
    href: '/services#mortgages',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Protection',
    description: 'Life insurance, critical illness cover, income protection and family protection to safeguard what matters most.',
    href: '/services#protection',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Retirement Planning',
    description: 'Holistic retirement planning to ensure your later years are financially secure. Drawdown and annuity advice.',
    href: '/services#retirement',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

const areas = [
  'Woodford',
  'Loughton',
  'Buckhurst Hill',
  'Chingford',
  'Wanstead',
  'East London',
  'Essex',
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d9488] to-[#0f766e] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-[#f97316]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold">CHARTERED FINANCIAL PLANNERS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Your Financial Future Deserves Chartered Expertise
            </h1>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Expert financial planning from qualified Chartered advisers in Wanstead.
              We provide tailored advice on investments, pensions, mortgages, protection and retirement planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#f97316] hover:bg-[#ea580c] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/about"
                className="border-2 border-white hover:bg-white hover:text-[#0d9488] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                About Our Practice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chartered Status Banner */}
      <section className="bg-[#f97316] text-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <p className="text-lg">
              <span className="font-bold">Chartered Status</span> - The highest qualification for independent financial advisers
            </p>
            <span className="hidden md:inline">•</span>
            <p className="text-lg">FCA Number: 459612 | Company: OC324364</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d9488] mb-4">
              Our Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial planning services tailored to your individual needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="text-[#f97316] mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0d9488] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-[#f97316] font-medium inline-flex items-center gap-2">
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

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d9488] mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Highly qualified Chartered professionals with decades of combined experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Patrick McClelland */}
            <div className="bg-teal-50 rounded-xl p-8">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#0d9488] mb-1">Patrick McClelland</h3>
                <p className="text-[#f97316] font-semibold text-sm">Senior Partner</p>
              </div>
              <p className="text-gray-700 mb-4">
                Over 30 years of experience in financial planning, providing expert advice across all aspects of wealth management.
              </p>
              <div className="space-y-1 text-sm text-gray-600">
                <p className="font-semibold text-[#0d9488]">Qualifications:</p>
                <p>• BA Hons Business Studies</p>
                <p>• CeMAP</p>
                <p>• DipFA</p>
                <p>• AwPETR</p>
                <p>• Adv DipFA</p>
                <p>• Chartered ALIBF</p>
              </div>
            </div>

            {/* Lucy Bird */}
            <div className="bg-teal-50 rounded-xl p-8">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#0d9488] mb-1">Lucy Bird</h3>
                <p className="text-[#f97316] font-semibold text-sm">Para Planner</p>
              </div>
              <p className="text-gray-700 mb-4">
                Providing technical support and ensuring all financial plans are comprehensive and compliant.
              </p>
              <div className="space-y-1 text-sm text-gray-600">
                <p className="font-semibold text-[#0d9488]">Qualifications:</p>
                <p>• Accounting & Finance Degree</p>
                <p>• CeMAP</p>
              </div>
            </div>

            {/* Carole McClelland */}
            <div className="bg-teal-50 rounded-xl p-8">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#0d9488] mb-1">Carole McClelland</h3>
                <p className="text-[#f97316] font-semibold text-sm">Partner</p>
              </div>
              <p className="text-gray-700 mb-4">
                Responsible for compliance, accounts, and marketing. In the financial services industry since 1986.
              </p>
              <div className="space-y-1 text-sm text-gray-600">
                <p className="font-semibold text-[#0d9488]">Experience:</p>
                <p>• Industry experience since 1986</p>
                <p>• Compliance & Accounts</p>
                <p>• Marketing Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-50 px-3 py-1 rounded-full mb-4">
                <svg className="w-4 h-4 text-[#0d9488]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <span className="text-sm font-semibold text-[#0d9488]">CHARTERED EXPERTISE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0d9488] mb-6">
                Why Choose Chartered Financial Planners?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chartered status represents the highest standard in financial planning. Our Chartered
                Financial Planners have met rigorous qualification requirements and commit to ongoing
                professional development, ensuring you receive expert, up-to-date advice.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Based in Wanstead, we serve the East London community with personalized financial
                planning services. We take the time to understand your unique circumstances and goals.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#f97316] font-semibold hover:gap-3 transition-all"
              >
                Learn about our approach
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#0d9488] to-[#0f766e] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Areas We Serve</h3>
              <p className="text-teal-100 mb-6">
                Primavera Financial Partners serves clients across East London and Essex:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {areas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#f97316]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-teal-100 text-sm">
                  <span className="font-semibold">Main Office:</span> 87a High Street, Wanstead, London E11 2AE
                </p>
                <p className="text-teal-100 text-sm">
                  <span className="font-semibold">Satellite Office:</span> Rye, East Sussex
                </p>
                <p className="text-[#f97316] font-semibold mt-4">
                  Free initial consultation available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Chartered Banner */}
      <section className="py-16 bg-teal-50 border-y border-teal-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="bg-teal-100 rounded-full p-3">
                <svg className="w-8 h-8 text-[#0d9488]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0d9488] mb-2">
                The Chartered Difference
              </h3>
              <p className="text-gray-700">
                Chartered Financial Planners must pass rigorous examinations, maintain ongoing professional
                development, and adhere to the highest ethical standards. This means you receive expert advice
                from qualified professionals committed to acting in your best interests. Your financial future
                truly deserves Chartered expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0d9488] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Book a free, no-obligation consultation with our Chartered Financial Planners to discuss
            your financial goals and how we can help you achieve them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#f97316] hover:bg-[#ea580c] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:02085329652"
              className="border-2 border-white hover:bg-white hover:text-[#0d9488] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call: 020 8532 9652
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
