import Link from 'next/link';

const services = [
  {
    title: 'Pension Planning',
    description: 'Expert guidance on workplace pensions, SIPPs, pension consolidation, and drawdown strategies to maximise your retirement income.',
    href: '/goddard-perry/services#pensions',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Investment Management',
    description: 'Bespoke investment strategies tailored to your goals, risk appetite, and time horizon. ISAs, bonds, and portfolio management.',
    href: '/goddard-perry/services#investments',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Corporate Benefits',
    description: 'Comprehensive employee benefit solutions including group pensions, group life, income protection, and private medical insurance.',
    href: '/goddard-perry/services#corporate',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

const areas = [
  'Croydon',
  'South Croydon',
  'Purley',
  'Coulsdon',
  'Sanderstead',
  'Selsdon',
  'Bromley',
  'Sutton',
];

const trustIndicators = [
  { label: 'FCA Regulated', value: 'No. 125376' },
  { label: 'Independent Advice', value: 'Whole of market' },
  { label: 'Free Consultation', value: 'No obligation' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f2b46] to-[#1a3c5e] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-[#c4952b] font-semibold mb-4 tracking-wide uppercase text-sm">
              Independent Financial Advisers — Croydon
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Financial Planning Built on Honesty & Reliability
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Impartial financial advice for individuals and businesses across Croydon and South London.
              From retirement planning to corporate employee benefits, we put your interests first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/goddard-perry/contact"
                className="bg-[#c4952b] hover:bg-[#b3862a] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Free Consultation
              </Link>
              <Link
                href="/goddard-perry/services"
                className="border-2 border-white hover:bg-white hover:text-[#0f2b46] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-[#c4952b] text-white py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {trustIndicators.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="font-bold">{item.label}</span>
                <span className="text-white/80">— {item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2b46] mb-4">
              How We Can Help
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial planning for every stage of life, backed by independent, whole-of-market advice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="text-[#c4952b] mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0f2b46] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-[#c4952b] font-medium inline-flex items-center gap-2">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2b46] mb-6">
                Croydon&apos;s Trusted Independent Financial Advisers
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Goddard Perry Consulting has been built on honesty, reliability, and excellent service.
                As independent financial advisers, our duty is solely to you — not to any bank, insurer,
                or product provider.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide completely impartial advice, and our continuous monitoring, research, and
                due diligence of the financial services market enables us to recommend the most
                appropriate solutions to your individual financial and corporate needs.
              </p>
              <Link
                href="/goddard-perry/about"
                className="inline-flex items-center gap-2 text-[#c4952b] font-semibold hover:gap-3 transition-all"
              >
                More about our approach
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#0f2b46] to-[#1a3c5e] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Areas We Serve</h3>
              <p className="text-gray-300 mb-6">
                We advise clients across Croydon, South London, and the surrounding areas:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {areas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#c4952b]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 mt-6 text-sm">
                We also advise clients nationwide — contact us to discuss your needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#1a3c5e] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose Goddard Perry?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We believe the best financial advice comes from putting clients first
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0f2b46] rounded-xl p-6 text-center">
              <div className="bg-[#c4952b] rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#c4952b] mb-2">Truly Independent</h3>
              <p className="text-gray-300 text-sm">
                We&apos;re not tied to any provider. We search the whole market to find the right solutions for you.
              </p>
            </div>
            <div className="bg-[#0f2b46] rounded-xl p-6 text-center">
              <div className="bg-[#c4952b] rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#c4952b] mb-2">Personal Service</h3>
              <p className="text-gray-300 text-sm">
                High-quality, professional financial planning with clearly defined service levels and a transparent fee structure.
              </p>
            </div>
            <div className="bg-[#0f2b46] rounded-xl p-6 text-center">
              <div className="bg-[#c4952b] rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#c4952b] mb-2">Ongoing Monitoring</h3>
              <p className="text-gray-300 text-sm">
                Continuous research and due diligence of the market ensures your financial plan stays on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="bg-amber-100 rounded-full p-3">
                <svg className="w-8 h-8 text-[#c4952b]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0f2b46] mb-2">
                Your Money, Your Protection
              </h3>
              <p className="text-gray-700">
                The value of investments and the income from them can go down as well as up. You may get back less
                than you invest. Past performance is not a reliable indicator of future results. Goddard Perry Consulting
                Limited is authorised and regulated by the Financial Conduct Authority (FCA number 125376).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0f2b46] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free, no-obligation consultation to discuss your financial goals. Independent,
            impartial advice tailored to your circumstances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/goddard-perry/contact"
              className="bg-[#c4952b] hover:bg-[#b3862a] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:02086033700"
              className="border-2 border-white hover:bg-white hover:text-[#0f2b46] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call: 020 8603 3700
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
