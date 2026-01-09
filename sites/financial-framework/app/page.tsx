import Link from 'next/link';

const services = [
  {
    title: 'Investment Advice',
    description: 'Strategic investment planning tailored to your financial goals, risk tolerance, and time horizon.',
    href: '/services#investment',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Wealth Management',
    description: 'Comprehensive wealth management strategies for growing, protecting, and transferring your assets.',
    href: '/services#wealth',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: 'Retirement Planning',
    description: 'Secure your retirement with comprehensive pension planning and income strategies.',
    href: '/services#retirement',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: 'Tax Planning',
    description: 'Tax-efficient strategies to maximize your wealth and minimize your tax liability within the law.',
    href: '/services#tax',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: 'Intergenerational Planning',
    description: 'Preserve and transfer wealth across generations with strategic family wealth planning.',
    href: '/services#intergenerational',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Business Financial Planning',
    description: 'Tailored financial strategies for business owners, from succession planning to corporate pensions.',
    href: '/services#business',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e40af] via-[#0d9488] to-[#1e40af] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-[#f59e0b]" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Trusted Yorkshire Financial Advisers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Building Financial Frameworks That Stand the Test of Time
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Based in Otley, Yorkshire, Financial Framework provides comprehensive wealth management
              and financial planning for individuals and businesses. With many years of experience, we
              specialise in investment advice, retirement planning, tax efficiency, and intergenerational
              wealth transfer - helping families preserve and grow their wealth for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center shadow-lg"
              >
                Book Consultation
              </Link>
              <Link
                href="/about"
                className="border-2 border-white hover:bg-white hover:text-[#1e40af] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intergenerational Wealth Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-100 text-[#0d9488] px-4 py-2 rounded-full mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <span className="text-sm font-semibold">Intergenerational Wealth Planning</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e40af] mb-6">
                Preserving Wealth Across Generations
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Building wealth takes a lifetime. Preserving it for future generations requires expert planning.
                At Financial Framework, we specialise in intergenerational wealth transfer strategies that protect
                your family's financial legacy.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From tax-efficient gifting strategies to trust planning and inheritance tax mitigation, we help
                Yorkshire families ensure their wealth benefits not just them, but their children and grandchildren too.
                Our comprehensive approach considers every aspect of family wealth - from property and investments
                to business assets and pensions.
              </p>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-[#0d9488] p-6 rounded-r-lg">
                <p className="text-[#1e40af] font-medium">
                  "The best financial plan isn't just about your retirement - it's about creating a lasting
                  legacy that provides security and opportunity for the generations that follow."
                </p>
                <p className="text-gray-600 mt-2 text-sm">— Financial Framework Team</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1e40af] to-[#0d9488] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Our Intergenerational Services</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Inheritance Tax Planning</h4>
                    <p className="text-gray-200 text-sm">Minimise IHT liability and maximise what you pass on to loved ones</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Trust & Estate Planning</h4>
                    <p className="text-gray-200 text-sm">Protect assets and control how wealth is distributed to future generations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Gifting Strategies</h4>
                    <p className="text-gray-200 text-sm">Tax-efficient ways to gift assets during your lifetime</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Family Wealth Education</h4>
                    <p className="text-gray-200 text-sm">Preparing the next generation to manage inherited wealth responsibly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Business Succession Planning</h4>
                    <p className="text-gray-200 text-sm">Transition family businesses to the next generation smoothly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e40af] mb-4">
              Comprehensive Financial Planning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From investment advice to wealth transfer, we provide the full framework for your financial future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all group border-2 border-transparent hover:border-[#0d9488]"
              >
                <div className="text-[#0d9488] mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1e40af] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-[#0d9488] font-medium inline-flex items-center gap-2">
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e40af] mb-4">
              Why Choose Financial Framework?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience, expertise, and a commitment to building lasting financial frameworks for Yorkshire families and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#0d9488] rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1e40af] mb-2">Many Years Experience</h3>
              <p className="text-gray-600 text-sm">
                Proven track record of helping clients achieve their financial goals across market cycles
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#0d9488] rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1e40af] mb-2">Yorkshire Based</h3>
              <p className="text-gray-600 text-sm">
                Located in Otley, serving clients across Yorkshire with personal, face-to-face service
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#0d9488] rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1e40af] mb-2">FCA Regulated</h3>
              <p className="text-gray-600 text-sm">
                Authorized and regulated by the Financial Conduct Authority for your peace of mind
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#0d9488] rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1e40af] mb-2">Individuals & Businesses</h3>
              <p className="text-gray-600 text-sm">
                Tailored financial planning for both personal wealth and business financial needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Yorkshire Heritage */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#0d9488] rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e40af] mb-6">
              Rooted in Yorkshire, Built for the Future
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Based in the historic market town of Otley, Financial Framework combines Yorkshire values
              of integrity, hard work, and straight talking with sophisticated financial planning expertise.
              We understand the unique needs of Yorkshire families and businesses - from agricultural holdings
              and family enterprises to urban professionals and retirees.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're planning your retirement in Harrogate, managing business succession in Leeds,
              or thinking about intergenerational wealth transfer for your family estate, we bring decades
              of experience to help you build a financial framework that lasts.
            </p>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-12 bg-blue-50 border-y border-blue-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="bg-blue-100 rounded-full p-3">
                <svg className="w-8 h-8 text-[#0d9488]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1e40af] mb-2">
                FCA Regulated & Protected
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Financial Framework is authorized and regulated by the Financial Conduct Authority.
                Your eligible deposits are protected up to £85,000 by the Financial Services Compensation Scheme (FSCS).
                The value of investments can fall as well as rise, and you may get back less than you invested.
                Tax treatment depends on individual circumstances and may be subject to change. Past performance
                is not a reliable indicator of future results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e40af] via-[#0d9488] to-[#1e40af] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Build Your Financial Framework?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Contact our Otley office today for a comprehensive consultation. We'll discuss your financial
            goals, explore your options, and create a bespoke framework designed to protect and grow your
            wealth for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Get in Touch
            </Link>
            <a
              href="mailto:info@financialframework.co.uk"
              className="border-2 border-white hover:bg-white hover:text-[#1e40af] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Email: info@financialframework.co.uk
            </a>
          </div>
          <p className="mt-8 text-gray-200">
            <svg className="w-5 h-5 inline mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Financial Framework, Otley, Yorkshire
          </p>
        </div>
      </section>
    </>
  );
}
