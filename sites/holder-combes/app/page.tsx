import Link from 'next/link';

const services = [
  {
    title: 'Investment & Wealth Management',
    description: 'Strategic investment planning and portfolio management tailored to your financial goals and risk profile.',
    href: '/services#wealth',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Retirement Planning',
    description: 'Comprehensive retirement strategies to ensure your financial security and lifestyle goals in later life.',
    href: '/services#retirement',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: 'Pensions',
    description: 'Expert pension advice, including SIPP and SSAS arrangements, transfers, and consolidation strategies.',
    href: '/services#pensions',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Estate Planning & Wills',
    description: 'Protect your legacy with comprehensive estate planning, will writing, and inheritance tax mitigation.',
    href: '/services#estate',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Tax Planning',
    description: 'Efficient tax planning strategies to minimize your tax liability while remaining compliant.',
    href: '/services#tax',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Mortgage Advice',
    description: 'Independent mortgage advice for purchases, remortgages, and buy-to-let properties.',
    href: '/services#mortgage',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section with Chartered Badge */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#374151] to-[#1f2937] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            {/* Chartered Badge */}
            <div className="inline-flex items-center gap-3 bg-[#d97706]/10 border-2 border-[#d97706] rounded-full px-6 py-3 mb-8">
              <svg className="w-6 h-6 text-[#d97706]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="text-[#d97706] font-bold text-lg">CHARTERED FINANCIAL PLANNERS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Holder & Combes
            </h1>
            <p className="text-2xl text-[#d97706] mb-6 font-semibold">
              Top 5% of UK Financial Advisers
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Based in the heart of the City of London, we provide expert financial planning and
              wealth management services. As Chartered Financial Planners, we hold the highest
              professional qualifications in our field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="bg-[#d97706] hover:bg-[#b45309] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Book Consultation
              </Link>
              <Link
                href="/chartered"
                className="border-2 border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Why Chartered Matters
              </Link>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>20 Little Britain, St. Paul's, London EC1A 7DH</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chartered Status Banner */}
      <section className="bg-[#d97706] text-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <div className="text-left">
                <p className="text-sm font-medium">Chartered Status</p>
                <p className="text-xs opacity-90">Top 5% of UK Advisers</p>
              </div>
            </div>
            <div className="hidden md:block h-12 w-px bg-white/30"></div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <div className="text-left">
                <p className="text-sm font-medium">FCA Regulated</p>
                <p className="text-xs opacity-90">Reference: 574786</p>
              </div>
            </div>
            <div className="hidden md:block h-12 w-px bg-white/30"></div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div className="text-left">
                <p className="text-sm font-medium">City of London</p>
                <p className="text-xs opacity-90">St. Paul's Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial planning services tailored to your unique circumstances and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all group border border-gray-200 hover:border-[#d97706]"
              >
                <div className="text-[#d97706] mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1f2937] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-[#d97706] font-medium inline-flex items-center gap-2">
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

      {/* Partners & Team Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-4">
              Our Partners & Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              12 person firm led by experienced Chartered and Certified Financial Planners
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Ed Holder */}
            <div className="bg-gradient-to-br from-[#1f2937] to-[#374151] rounded-2xl p-8 text-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#d97706] rounded-full p-3">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Ed Holder</h3>
                  <p className="text-[#d97706] font-semibold">Chartered Financial Planner</p>
                  <p className="text-sm text-gray-400 mt-1">Partner</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Chartered Financial Planner with extensive experience in comprehensive wealth management and financial planning.
              </p>
              <div className="bg-white/5 rounded-lg p-4 border border-[#d97706]/20">
                <p className="text-sm text-gray-400">Working in partnership since 2002</p>
              </div>
            </div>

            {/* Nick Combes */}
            <div className="bg-gradient-to-br from-[#1f2937] to-[#374151] rounded-2xl p-8 text-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#d97706] rounded-full p-3">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Nick Combes</h3>
                  <p className="text-[#d97706] font-semibold">Certified Financial Planner</p>
                  <p className="text-sm text-gray-400 mt-1">Partner</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Certified Financial Planner specializing in retirement planning, pensions, and investment management.
              </p>
              <div className="bg-white/5 rounded-lg p-4 border border-[#d97706]/20">
                <p className="text-sm text-gray-400">Working in partnership since 2002</p>
              </div>
            </div>
          </div>

          {/* Accounting Services */}
          <div className="bg-amber-50 border-l-4 border-[#d97706] p-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-[#d97706] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-[#1f2937] mb-2">Holder & Combes Accounting</h3>
                <p className="text-gray-700 mb-2">
                  In addition to financial planning, we also offer <span className="font-semibold">Chartered Accountant-led</span> accounting services with 7 tax professionals on staff.
                </p>
                <p className="text-sm text-gray-600">
                  Comprehensive tax planning, compliance, and advisory services for individuals and businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Chartered Section */}
      <section className="py-20 bg-gradient-to-br from-[#1f2937] to-[#374151] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#d97706]/10 border border-[#d97706] rounded-full px-4 py-2 mb-6">
                <svg className="w-5 h-5 text-[#d97706]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="text-[#d97706] font-semibold">Elite Status</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Chartered Status Matters
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Only 5% of UK financial advisers hold Chartered status. This qualification represents
                the highest level of professionalism and expertise in financial planning.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Chartered Financial Planners are committed to ongoing professional development,
                adherence to the highest ethical standards, and putting clients' interests first.
              </p>
              <Link
                href="/chartered"
                className="inline-flex items-center gap-2 text-[#d97706] font-semibold hover:gap-3 transition-all text-lg"
              >
                Discover the Chartered difference
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#d97706]/20">
              <h3 className="text-2xl font-semibold mb-6 text-[#d97706]">What Sets Us Apart</h3>
              <ul className="space-y-4">
                {[
                  'Highest professional qualifications in financial planning',
                  'Extensive knowledge across all areas of financial advice',
                  'Commitment to continuous professional development',
                  'Strict adherence to ethical standards and codes of conduct',
                  'Client-centric approach with fiduciary responsibility',
                  'Comprehensive, holistic financial planning methodology',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* City of London Location */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[#1f2937] to-[#374151] rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-semibold mb-6">Our City Location</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[#d97706]">Address</p>
                    <p className="text-gray-300">20 Little Britain, St. Paul's</p>
                    <p className="text-gray-300">London EC1A 7DH</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[#d97706]">Phone</p>
                    <p className="text-gray-300">+44 (0)207 101 2817</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[#d97706]">Email</p>
                    <p className="text-gray-300">enquiries@holderandcombes.co.uk</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 border-t border-gray-700 pt-6">
                Located in the heart of the City of London, moments from St. Paul's Cathedral.
                Easily accessible by tube (St. Paul's, Bank) and within walking distance of major
                business districts.
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-6">
                Prestige City of London Address
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our offices in Little Britain place us at the epicenter of London's financial district,
                adjacent to St. Paul's Cathedral and surrounded by the historic institutions of the City.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This prestigious location reflects our commitment to excellence and provides convenient
                access for clients across London and the UK.
              </p>
              <div className="bg-amber-50 border-l-4 border-[#d97706] p-6 rounded-r-lg">
                <p className="text-gray-700">
                  <span className="font-semibold text-[#1f2937]">Client meetings:</span> We offer
                  face-to-face consultations at our City office, as well as virtual meetings for your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1f2937] to-[#374151] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#d97706]/10 border border-[#d97706] rounded-full px-4 py-2 mb-6">
            <svg className="w-5 h-5 text-[#d97706]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="text-[#d97706] font-semibold">Experience The Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Work with Chartered Advisers?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how our Chartered status and City location combine to deliver exceptional
            financial planning services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#d97706] hover:bg-[#b45309] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Book Your Consultation
            </Link>
            <a
              href="tel:+442071012817"
              className="border-2 border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call: +44 (0)207 101 2817
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Authorised and regulated by the Financial Conduct Authority (FCA Reference: 574786)
          </p>
        </div>
      </section>
    </>
  );
}
