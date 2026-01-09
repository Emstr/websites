import Link from 'next/link';

const services = [
  {
    title: 'Investment Planning',
    description: 'Tailored investment strategies explained in plain English, designed to help you build wealth over time.',
    href: '/services#investments',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Pensions & Retirement',
    description: 'Clear, straightforward pension advice to help you plan the retirement you deserve.',
    href: '/services#pensions',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Retirement Planning',
    description: 'Comprehensive retirement planning to ensure your golden years are financially secure.',
    href: '/services#retirement',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-[#f59e0b]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
              <span className="text-sm font-medium">Family-Owned Since 1985</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Independent Financial Advice in Plain English
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Three generations of trusted financial guidance in Leeds. From Gordon Bareham to his son James,
              we provide bespoke, independent advice without the jargon. Investments, pensions, and retirement
              planning explained clearly. FCA regulated for your peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Book Consultation
              </Link>
              <Link
                href="/about"
                className="border-2 border-white hover:bg-white hover:text-[#1e3a8a] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Family Succession Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-[#1e3a8a] px-4 py-2 rounded-full mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <span className="text-sm font-semibold">Three Generations of Trust</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-6">
                From Gordon to James: A Family Tradition
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Founded by Gordon Bareham in 1985, Bareham IFA has been helping families across Leeds
                plan their financial futures for nearly four decades. When James Bareham joined the
                business, it marked the beginning of a natural family succession built on shared values
                and commitment to clients.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Today, James continues his father's legacy of providing independent, bespoke financial
                advice with one crucial difference - no complicated jargon. We believe financial planning
                should be explained in plain English, so you understand exactly what you're investing in
                and why.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#3b82f6] p-6 rounded-r-lg">
                <p className="text-[#1e3a8a] font-medium italic">
                  "My father taught me that financial advice isn't about impressive terminology - it's
                  about helping people understand their options and make confident decisions about their future."
                </p>
                <p className="text-gray-600 mt-2 text-sm">— James Bareham, Director</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Why Choose Bareham IFA?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Family-Owned Independence</h4>
                    <p className="text-gray-200 text-sm">No corporate pressures, just honest advice tailored to your needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Plain English Communication</h4>
                    <p className="text-gray-200 text-sm">Financial planning explained clearly, without confusing jargon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Bespoke Solutions</h4>
                    <p className="text-gray-200 text-sm">Every client is unique - your financial plan should be too</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Local Leeds Expertise</h4>
                    <p className="text-gray-200 text-sm">Based in Allerton, serving families across Leeds and Yorkshire</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-400">
                <p className="text-sm text-gray-200">
                  <strong className="text-white">FCA Reference:</strong> 939595
                </p>
              </div>
            </div>
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
              Bespoke financial planning solutions explained in plain English
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="text-[#3b82f6] mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-[#3b82f6] font-medium inline-flex items-center gap-2">
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

      {/* Plain English Promise */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3b82f6] rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-6">
                Our Plain English Promise
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Financial services have a reputation for complicated language and confusing jargon.
                We think that's wrong. Your money, your future - you deserve to understand it clearly.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                That's why every conversation at Bareham IFA is in plain English. We explain your
                options, answer your questions, and help you make informed decisions without bamboozling
                you with technical terms. It's financial advice the Yorkshire way - straightforward and honest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-12 bg-blue-50 border-y border-blue-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="bg-blue-100 rounded-full p-3">
                <svg className="w-8 h-8 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">
                FCA Regulated & Protected
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Bareham IFA is authorized and regulated by the Financial Conduct Authority (FCA Reference: 939595).
                Your eligible deposits are protected up to £85,000 by the Financial Services Compensation Scheme (FSCS).
                The value of investments can fall as well as rise, and you may get back less than you invested.
                Tax treatment depends on individual circumstances and may be subject to change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Plan Your Financial Future?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a complimentary consultation at our Leeds office. We'll explain your options in
            plain English, with no obligation and no confusing jargon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="mailto:info@barehamifa.com"
              className="border-2 border-white hover:bg-white hover:text-[#1e3a8a] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Email: info@barehamifa.com
            </a>
          </div>
          <p className="mt-8 text-gray-300">
            <svg className="w-5 h-5 inline mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Foxborough House, 96 Allerton Grange Rise, Leeds LS17 6LG
          </p>
        </div>
      </section>
    </>
  );
}
