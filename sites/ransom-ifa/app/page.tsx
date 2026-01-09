import Link from 'next/link';

const services = [
  {
    title: 'Lifetime Planning',
    description: 'Comprehensive financial planning for every stage of your life, from starting out to retirement and beyond.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Investments',
    description: 'Expert investment advice to help you grow and protect your wealth with tax-efficient strategies.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Pensions',
    description: 'Tailored pension planning to ensure you can enjoy the retirement lifestyle you deserve.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Protection',
    description: 'Life assurance and protection planning to secure your family\'s financial future.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#166534] to-[#10b981] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-[#d97706]" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Chartered Financial Advisers Since 1999</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Independent Financial Advice Rooted in Yorkshire Values
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              A small family firm based in Burley-in-Wharfedale with 25+ years of trusted financial planning.
              Expert lifetime planning, investments, pensions, and protection advice. FCA regulated with Chartered status.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:01943850222"
                className="bg-[#d97706] hover:bg-[#b45309] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Call 01943 850222
              </a>
              <a
                href="mailto:tony@ransomifa.co.uk"
                className="border-2 border-white hover:bg-white hover:text-[#166534] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="bg-[#d97706] text-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="font-bold">113 Main Street, Burley-in-Wharfedale, Ilkley, LS29 7JN</span>
            </div>
            <span className="hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="font-bold">Serving Yorkshire: Burley-in-Wharfedale, Ilkley, Otley, Leeds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#166534] mb-4">
              Our Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial planning solutions tailored to your unique needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-[#10b981] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#166534] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#166534] mb-6">
                A Family Firm with Yorkshire Values
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Established in 1999, Ransom IFA is a small family firm based in the heart of
                Burley-in-Wharfedale. With over 50 years of combined experience and Chartered status,
                we provide independent financial advice grounded in traditional Yorkshire values of
                honesty, integrity, and putting our clients first.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-[#166534] mb-1">Chartered Status</h3>
                    <p className="text-gray-600">Highest professional qualification in financial planning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-[#166534] mb-1">25+ Years Established</h3>
                    <p className="text-gray-600">Trusted financial planning since 1999</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-[#166534] mb-1">50+ Years Combined Experience</h3>
                    <p className="text-gray-600">Expertise built over decades of serving Yorkshire clients</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-[#166534] mb-1">FCA Regulated</h3>
                    <p className="text-gray-600">Reference: 425959 - Full authorization and regulation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#166534] to-[#10b981] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Why Choose Ransom IFA?</h3>
              <p className="text-gray-100 mb-6">
                As a small family firm, we offer a personal service that larger financial institutions
                simply cannot match. You'll work directly with experienced, Chartered advisers who take
                the time to understand your individual circumstances and goals.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <h4 className="font-semibold mb-3 text-[#d97706]">Our Approach</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#d97706] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Truly independent advice - not tied to any provider</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#d97706] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Long-term relationships built on trust and transparency</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#d97706] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Holistic lifetime planning tailored to your needs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#d97706] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Local Yorkshire roots with deep community ties</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#d97706] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Clear fee structure with no hidden charges</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <p className="text-sm text-gray-100 italic">
                  "We're proud to serve our local community across Yorkshire, from Burley-in-Wharfedale
                  to Ilkley, Otley, and Leeds. Our clients value our straightforward, honest approach
                  and the peace of mind that comes from working with experienced Chartered advisers."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-12 bg-green-50 border-y border-green-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="bg-green-100 rounded-full p-3">
                <svg className="w-8 h-8 text-[#10b981]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#166534] mb-2">
                FCA Regulated & Chartered Status
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ransom IFA is authorized and regulated by the Financial Conduct Authority (FCA Reference: 425959).
                We hold Chartered status, the highest professional qualification in financial planning. Your eligible
                deposits are protected up to £85,000 by the Financial Services Compensation Scheme (FSCS). The value
                of investments can fall as well as rise, and you may get back less than you invested. Past performance
                is not a reliable indicator of future results. Tax treatment depends on individual circumstances and
                may be subject to change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[#166534] to-[#10b981] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's Plan Your Financial Future
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Get in touch for a no-obligation consultation with one of our Chartered financial advisers.
              We're here to help you achieve your financial goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a
              href="tel:01943850222"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-6 transition-colors text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#d97706] rounded-full mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="text-gray-100">01943 850222</p>
            </a>

            <a
              href="mailto:tony@ransomifa.co.uk"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-6 transition-colors text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#d97706] rounded-full mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-100 text-sm break-all">tony@ransomifa.co.uk</p>
            </a>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#d97706] rounded-full mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-gray-100 text-sm">
                113 Main Street<br />
                Burley-in-Wharfedale<br />
                Ilkley, LS29 7JN
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-100 text-sm">
              Office Hours: Monday - Friday, 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#166534] text-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-300 mb-2">
              &copy; {new Date().getFullYear()} Ransom IFA. All rights reserved.
            </p>
            <p className="text-xs text-gray-400">
              Ransom IFA is authorized and regulated by the Financial Conduct Authority (FCA Ref: 425959)
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
