import Link from 'next/link';

const services = [
  {
    title: 'Bespoke Financial Planning',
    description: 'Tailored financial strategies designed around your unique circumstances and goals, not off-the-shelf solutions.',
    href: '/services#financial-planning',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: 'Investment Management',
    description: 'Independent, impartial investment advice with no ties to product providers - your interests always come first.',
    href: '/services#investment',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Retirement Planning',
    description: 'Comprehensive retirement strategies to ensure your future is secure, wherever you are in England.',
    href: '/services#retirement',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#334155] to-[#2563eb] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-[#ea580c]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-sm font-medium">Devon & Suffolk - Coast to Coast Coverage</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Bespoke Financial Planning Spanning the Width of England
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              The only financial planning firm with dual locations in Devon and Suffolk. Fair, impartial,
              and truly independent advice from the West Country to East Anglia. Wherever you are,
              we're closer than you think.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Book Consultation
              </Link>
              <Link
                href="/locations"
                className="border-2 border-white hover:bg-white hover:text-[#334155] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Our Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Dual Location Coverage */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-[#2563eb] px-4 py-2 rounded-full mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                <span className="text-sm font-semibold">Unique National Coverage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#334155] mb-6">
                From Devon to Suffolk: Truly Unique Dual-Location Service
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                CarterDawes is the only financial planning firm offering dedicated offices spanning from
                the West Country to East Anglia. Our Devon office serves the Southwest, while our Suffolk
                office covers the East - giving us unparalleled reach across England.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This unique geographical positioning means wherever you are between our two locations,
                you're never far from personalized, face-to-face advice. We combine the best of both
                worlds: local accessibility with the resources and expertise of a multi-regional firm.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-orange-50 p-4 rounded-lg">
                  <svg className="w-6 h-6 text-[#ea580c] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[#334155] mb-1">West Country Excellence</h4>
                    <p className="text-gray-600 text-sm">Devon office serving Southwest England with deep local knowledge</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                  <svg className="w-6 h-6 text-[#2563eb] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[#334155] mb-1">East Anglia Expertise</h4>
                    <p className="text-gray-600 text-sm">Suffolk office providing comprehensive coverage across the East</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#334155] to-[#2563eb] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Why Choose CarterDawes?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#ea580c] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Truly Independent</h4>
                    <p className="text-gray-200 text-sm">No product provider ties - fair, impartial advice every time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#ea580c] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Bespoke Planning</h4>
                    <p className="text-gray-200 text-sm">Every client is unique - your plan should be too</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#ea580c] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Dual-Location Advantage</h4>
                    <p className="text-gray-200 text-sm">Unprecedented coverage from Devon to Suffolk and everywhere between</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#ea580c] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Personal Service</h4>
                    <p className="text-gray-200 text-sm">Face-to-face advice with experts who understand your region</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#ea580c] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">FCA Regulated</h4>
                    <p className="text-gray-200 text-sm">Fully authorized and regulated for your peace of mind</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-400">
                <p className="text-sm text-gray-200 italic">
                  "The only firm spanning the entire width of England - from the Atlantic to the North Sea"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#334155] mb-4">
              Our Bespoke Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored financial planning solutions designed around you, not packaged products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="text-[#2563eb] mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#334155] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-[#2563eb] font-medium inline-flex items-center gap-2">
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

      {/* Independence Statement */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2563eb] rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#334155] mb-6">
                Fair, Impartial, Truly Independent
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At CarterDawes, independence isn't just a word - it's our foundation. We have no ties to
                product providers, no commission-driven sales targets, and no hidden agendas. This means
                our advice is always fair and impartial, based solely on what's best for you.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're meeting us in Devon or Suffolk, you'll receive the same high-quality,
                bespoke financial planning tailored to your unique circumstances. That's the CarterDawes
                difference - true independence with unmatched geographical reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Visual */}
      <section className="py-20 bg-gradient-to-br from-[#334155] to-[#475569]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Spanning the Width of England
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From the Atlantic coast to the North Sea - unprecedented geographical coverage
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#ea580c] rounded-full mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">West: Devon</h3>
              <p className="text-gray-300 text-sm">Southwest England & West Country</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-[#ea580c] mx-auto mb-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                <p className="text-white font-semibold">Coast to Coast</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2563eb] rounded-full mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">East: Suffolk</h3>
              <p className="text-gray-300 text-sm">East Anglia & Eastern England</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              View Our Offices
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-12 bg-blue-50 border-y border-blue-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="bg-blue-100 rounded-full p-3">
                <svg className="w-8 h-8 text-[#2563eb]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#334155] mb-2">
                FCA Regulated & Protected
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                CarterDawes is authorized and regulated by the Financial Conduct Authority (FCA).
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
      <section className="py-20 bg-gradient-to-br from-[#334155] to-[#2563eb] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready for Truly Independent Financial Planning?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a complimentary consultation at either our Devon or Suffolk office. Fair, impartial
            advice with no obligation - discover the CarterDawes difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="mailto:info@carterdawes.com"
              className="border-2 border-white hover:bg-white hover:text-[#334155] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Email: info@carterdawes.com
            </a>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>Devon Office</span>
            </div>
            <div className="hidden sm:block text-gray-400">•</div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>Suffolk Office</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
