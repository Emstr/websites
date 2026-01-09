const services = [
  {
    title: 'Pension Planning',
    description: 'Smart pension strategies to help you build the retirement you deserve. From workplace pensions to SIPPs and drawdown planning.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Investment Planning',
    description: 'Modern investment solutions tailored to your goals. ISAs, GIAs, and tax-efficient portfolio management using the latest technology.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Protection Planning',
    description: 'Comprehensive protection for you and your family. Life insurance, critical illness cover, and income protection arranged efficiently.',
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
      <section className="relative bg-gradient-to-br from-[#0d9488] via-[#0ea5e9] to-[#0d9488] text-white overflow-hidden">
        {/* Decorative wave pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-[#f97316]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              <span className="text-sm font-medium">Founded 2023 • FCA Regulated via ValidPath</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Modern Financial Advice for Cornwall
            </h1>

            <p className="text-xl text-teal-50 mb-8 leading-relaxed">
              Technology-led, truly independent financial planning from Bodmin.
              David Ellicott DipPFS brings fresh thinking to pensions, investments, and protection
              across Cornwall and Devon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl text-center transform hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="#about"
                className="border-2 border-white hover:bg-white hover:text-[#0d9488] px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <div className="bg-[#0ea5e9]/10 rounded-full p-2">
                <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">FCA Regulated</p>
                <p className="text-sm text-gray-600">Via ValidPath</p>
              </div>
            </div>
            <div className="hidden md:block h-8 w-px bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <div className="bg-[#0d9488]/10 rounded-full p-2">
                <svg className="w-6 h-6 text-[#0d9488]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Truly Independent</p>
                <p className="text-sm text-gray-600">Whole of market</p>
              </div>
            </div>
            <div className="hidden md:block h-8 w-px bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <div className="bg-[#f97316]/10 rounded-full p-2">
                <svg className="w-6 h-6 text-[#f97316]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Technology-Led</p>
                <p className="text-sm text-gray-600">Modern tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial planning solutions designed for modern life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all group border border-gray-100 hover:border-[#0ea5e9]"
              >
                <div className="text-[#0ea5e9] mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              All advice is truly independent and tailored to your individual circumstances
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#0d9488] font-semibold hover:gap-3 transition-all"
            >
              Discuss your needs
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                A Fresh Approach to Financial Advice
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2023, Strategy Wealth brings modern, technology-led financial planning to Cornwall.
                Led by David Ellicott DipPFS, we combine professional expertise with the latest tools to
                deliver truly independent advice.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Based in Bodmin, we serve clients across Cornwall and Devon. Whether you're planning for
                retirement, building your investment portfolio, or protecting your family's future, we provide
                clear, jargon-free guidance focused on your goals.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f97316] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Technology-Led Process</h3>
                    <p className="text-gray-600">Modern tools and platforms for efficient, transparent advice</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f97316] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Truly Independent</h3>
                    <p className="text-gray-600">Whole of market advice with no ties to product providers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f97316] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Client-Focused</h3>
                    <p className="text-gray-600">Your goals and circumstances drive every recommendation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0d9488] to-[#0ea5e9] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Why Choose Strategy Wealth?</h3>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                  <h4 className="font-semibold mb-2 text-[#f97316]">Local, Accessible Service</h4>
                  <p className="text-teal-50 text-sm">
                    Based in Bodmin and serving Cornwall & Devon. Face-to-face, video, or phone consultations
                    available to suit your lifestyle.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                  <h4 className="font-semibold mb-2 text-[#f97316]">Modern Digital Tools</h4>
                  <p className="text-teal-50 text-sm">
                    Access your financial plan anytime through our secure client portal. Track progress,
                    view documents, and stay informed.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                  <h4 className="font-semibold mb-2 text-[#f97316]">Clear, Transparent Fees</h4>
                  <p className="text-teal-50 text-sm">
                    No hidden charges. We explain our fees upfront so you know exactly what you're paying
                    for and why.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#0d9488] to-[#0ea5e9] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-teal-50 mb-12">
              Ready to take control of your financial future? Let's start the conversation.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#f97316] rounded-full p-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg">Visit Us</h3>
                </div>
                <p className="text-teal-50">45 Tanwood View</p>
                <p className="text-teal-50">Bodmin, Cornwall</p>
                <p className="text-teal-50">PL31 2PN</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#f97316] rounded-full p-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                </div>
                <p className="text-teal-50 mb-2">hello@strategy-wealth.co.uk</p>
                <p className="text-sm text-teal-100">Usually respond within 24 hours</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Book a Free Consultation</h3>
              <p className="text-teal-50 mb-6">
                No obligation, no pressure. Just a friendly conversation about your financial goals
                and how we might help you achieve them.
              </p>
              <a
                href="mailto:hello@strategy-wealth.co.uk"
                className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Send Us a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Notice */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="bg-[#0ea5e9]/10 rounded-full p-3">
                <svg className="w-8 h-8 text-[#0ea5e9]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                FCA Regulated & Protected
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Strategy Wealth is an appointed representative of ValidPath Ltd (FCA Reference: 197107),
                which is authorised and regulated by the Financial Conduct Authority. Company Number: 14838686.
                Your eligible deposits with our recommended providers are protected by the Financial Services
                Compensation Scheme (FSCS). The value of investments can fall as well as rise, and you may get
                back less than you invested. Tax treatment depends on individual circumstances and may be subject
                to change in future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
