import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/images/dwj/hero.jpg" alt="" fill className="object-cover opacity-15" />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent"></div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Tailored Wealth Management
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Wealth,{" "}
              <span className="text-gold-gradient">Your Future</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              Tailored wealth management for private and corporate clients
              in Swansea and across South Wales. Expert financial advice from
              FCA regulated advisers who put your interests first.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/dwj-wealth/contact"
                className="btn-accent text-lg"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/dwj-wealth/services"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg"
              >
                Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>FCA Regulated</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Private &amp; Corporate</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Swansea, Wales</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="#c07830" strokeWidth="2" fill="none" />
            <circle cx="200" cy="200" r="140" stroke="#c07830" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="100" stroke="#c07830" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-10 border-b border-gray-200">
        <div className="container-width">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary text-sm">St. James&apos;s Place Partner</h3>
              <p className="text-xs text-gray-500 mt-1">Part of the SJP network</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary text-sm">Free Consultation</h3>
              <p className="text-xs text-gray-500 mt-1">No-obligation initial meeting</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary text-sm">Swansea Based</h3>
              <p className="text-xs text-gray-500 mt-1">Serving all of South Wales</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary text-sm">Personalised Service</h3>
              <p className="text-xs text-gray-500 mt-1">Advice tailored to you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Comprehensive Wealth Management
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From retirement planning to business financial solutions, we provide
              expert financial advice for both private and corporate clients
              across Swansea and South Wales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Retirement Planning */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Retirement Planning</h3>
              <p className="text-gray-600 mb-4">
                Secure a comfortable retirement with a bespoke plan tailored to your
                goals. We help you understand your pension options, project your income
                needs, and build a strategy for financial freedom.
              </p>
              <Link href="/dwj-wealth/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Investment Management */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Investment Management</h3>
              <p className="text-gray-600 mb-4">
                Grow your wealth with a professionally managed investment portfolio
                aligned with your risk profile. We provide ongoing reviews and adjust
                your strategy as your circumstances change.
              </p>
              <Link href="/dwj-wealth/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Protection & Insurance */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Protection &amp; Insurance</h3>
              <p className="text-gray-600 mb-4">
                Safeguard your family and lifestyle with comprehensive protection
                planning. From life insurance and critical illness cover to income
                protection, we ensure you are prepared for the unexpected.
              </p>
              <Link href="/dwj-wealth/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Inheritance Tax Planning */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Inheritance Tax Planning</h3>
              <p className="text-gray-600 mb-4">
                Protect your legacy and minimise the tax burden on your estate.
                We help you structure your affairs efficiently so more of your
                wealth reaches the people who matter most.
              </p>
              <Link href="/dwj-wealth/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mortgage Advice */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Mortgage Advice</h3>
              <p className="text-gray-600 mb-4">
                Whether you are buying your first home, remortgaging, or releasing
                equity, our advisers search the whole market to find the right
                mortgage deal for your situation.
              </p>
              <Link href="/dwj-wealth/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Business Financial Planning */}
            <div className="card-premium p-8">
              <div className="service-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Business Financial Planning</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive financial solutions for businesses, including
                workplace pensions, employee benefits, key person insurance,
                and corporate investment strategies.
              </p>
              <Link href="/dwj-wealth/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/dwj-wealth/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Why DWJ Wealth Management
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                Trusted Advisers for Private &amp; Corporate Clients
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                Based in Swansea, we combine deep local knowledge with professional
                expertise to deliver tailored financial solutions. Whether you&apos;re
                an individual planning for retirement or a business looking after
                your employees, we work solely in your best interests.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">FCA Regulated</h3>
                    <p className="text-gray-600">
                      Fully authorised and regulated by the Financial Conduct Authority,
                      providing you with complete peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Tailored Advice</h3>
                    <p className="text-gray-600">
                      Every client is unique. We take the time to understand your
                      circumstances and create bespoke financial strategies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Private &amp; Corporate</h3>
                    <p className="text-gray-600">
                      We serve both private individuals and corporate clients,
                      providing comprehensive financial solutions across the board.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-sm shadow-lg">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="stat-number">15+</div>
                  <p className="text-gray-600 mt-2">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">4</div>
                  <p className="text-gray-600 mt-2">Expert Team Members</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">100%</div>
                  <p className="text-gray-600 mt-2">Personalised Service</p>
                </div>
                <div className="text-center">
                  <div className="stat-number">98%</div>
                  <p className="text-gray-600 mt-2">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Meet the DWJ Team
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A dedicated team of professionals committed to helping you achieve
              your financial goals. Get to know the people behind DWJ Wealth Management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Danni Watts-Jones */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/images/dwj/danni-watts-jones.jpg"
                  alt="Danni Watts-Jones"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto object-cover w-40 h-40"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">Danni Watts-Jones</h3>
              <p className="text-accent font-semibold text-sm mb-3">Lead Financial Adviser</p>
              <p className="text-gray-600 text-sm">
                Founder and lead adviser, Danni brings a client-first approach to
                every financial planning conversation.
              </p>
            </div>

            {/* Terry Watts-Jones */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/images/dwj/terry-watts-jones.jpg"
                  alt="Terry Watts-Jones"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto object-cover w-40 h-40"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">Terry Watts-Jones</h3>
              <p className="text-accent font-semibold text-sm mb-3">Financial Adviser</p>
              <p className="text-gray-600 text-sm">
                With deep experience in wealth management, Terry provides
                expert guidance for both private and corporate clients.
              </p>
            </div>

            {/* Nanette Mantle */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/images/dwj/nanette-mantle.jpg"
                  alt="Nanette Mantle"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto object-cover w-40 h-40"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">Nanette Mantle</h3>
              <p className="text-accent font-semibold text-sm mb-3">Client Support Manager</p>
              <p className="text-gray-600 text-sm">
                Nanette ensures every client receives exceptional support throughout
                their journey with DWJ Wealth Management.
              </p>
            </div>

            {/* Kathryn Shears */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/images/dwj/kathryn-shears.jpg"
                  alt="Kathryn Shears"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto object-cover w-40 h-40"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">Kathryn Shears</h3>
              <p className="text-accent font-semibold text-sm mb-3">Practice Manager</p>
              <p className="text-gray-600 text-sm">
                Kathryn manages the day-to-day operations of the practice, ensuring
                everything runs smoothly and efficiently.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/dwj-wealth/about" className="btn-outline">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              What Our Clients Say
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;DWJ Wealth Management helped us plan for retirement with
                real clarity. Their advice was tailored to our exact situation,
                and we felt confident every step of the way.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">GT</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Gareth T.</p>
                  <p className="text-sm text-gray-500">Retiree, Swansea</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;As a business owner, finding an adviser who understands
                corporate as well as personal finances was invaluable. DWJ
                delivers on both fronts.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">ER</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Elin R.</p>
                  <p className="text-sm text-gray-500">Business Owner, Gorseinon</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="text-gray-600 mb-6 italic">
                &quot;The equity release guidance we received was thorough and
                honest. They explained every option clearly and never pressured
                us into a decision.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">MH</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Margaret H.</p>
                  <p className="text-sm text-gray-500">Homeowner, Llanelli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section with Google Maps */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Visit Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Our Swansea Office
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Gorseinon, we provide a welcoming,
              professional environment for discussing your financial goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="location-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-primary font-semibold">Our Office</span>
                    <h3 className="text-2xl font-bold text-primary">Gorseinon, Swansea</h3>
                  </div>
                </div>
                <address className="not-italic text-gray-700 mb-4">
                  <strong>Argyle House, 10 West Street</strong>
                  <br />
                  Gorseinon, Swansea SA4 4AA
                </address>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>
                    <strong>Opening Hours:</strong>
                    <br />
                    Monday - Friday: 9:00am - 5:00pm
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a href="tel:01639825066" className="btn-accent text-sm">
                    Call 01639 825066
                  </a>
                  <Link href="/dwj-wealth/contact" className="btn-outline text-sm">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.8!2d-4.0665!3d51.6710!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQwJzE1LjYiTiA0wrAwMycyMy40Ilc!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DWJ Wealth Management Office - Gorseinon, Swansea"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a complimentary initial consultation at our Gorseinon office.
              We&apos;ll discuss your goals and how we can help you achieve them.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/dwj-wealth/contact" className="btn-accent">
                Book Free Consultation
              </Link>
              <a
                href="tel:01639825066"
                className="btn-outline"
              >
                Call 01639 825066
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FCA Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p>
              <strong>Important Notice:</strong> DWJ Wealth Management Ltd
              (Company No. 09104954) is authorised and regulated by the Financial Conduct
              Authority (FCA). The value of investments can go down as well as up, and you
              may get back less than you invested. Past performance is not a reliable
              indicator of future results. Tax treatment depends on individual
              circumstances and may change in the future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
