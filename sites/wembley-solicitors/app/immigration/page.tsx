import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Immigration Law Services',
  description:
    'Expert immigration law services in Wembley. Visa applications, appeals, asylum claims, citizenship. Free initial advice online. Fixed fees available.',
};

const services = [
  {
    title: 'Visa Applications',
    description: 'Work visas, family visas, student visas, and visitor visas. Expert guidance through the entire application process.',
    items: [
      'Skilled Worker visas',
      'Family reunion visas',
      'Student visas',
      'Spouse/Partner visas',
      'Visit visas',
    ],
  },
  {
    title: 'Immigration Appeals',
    description: 'Professional representation for visa refusals and immigration appeals at all tribunal levels.',
    items: [
      'First-tier Tribunal appeals',
      'Upper Tribunal appeals',
      'Judicial review applications',
      'Administrative reviews',
      'Human rights claims',
    ],
  },
  {
    title: 'Asylum Claims',
    description: 'Sensitive and expert support for asylum seekers and refugees navigating the UK asylum system.',
    items: [
      'Initial asylum claims',
      'Fresh asylum claims',
      'Asylum appeals',
      'Humanitarian protection',
      'Refugee family reunion',
    ],
  },
  {
    title: 'British Citizenship',
    description: 'Complete support for naturalisation and citizenship applications, including documentation and preparation.',
    items: [
      'Naturalisation applications',
      'Registration as British citizen',
      'Indefinite Leave to Remain',
      'Settled status applications',
      'Citizenship ceremonies',
    ],
  },
];

const process = [
  {
    step: '1',
    title: 'Free Initial Advice',
    description: 'Get free initial immigration advice online. We\'ll assess your case and explain your options.',
  },
  {
    step: '2',
    title: '£60 Consultation',
    description: 'Book an in-depth consultation to discuss your case in detail and receive expert guidance.',
  },
  {
    step: '3',
    title: 'Fixed Fee Quote',
    description: 'Receive a transparent fixed-fee quote with no hidden costs or surprise bills.',
  },
  {
    step: '4',
    title: 'Expert Representation',
    description: 'We handle your case from start to finish with regular updates throughout the process.',
  },
];

export default function ImmigrationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#134e4a] to-[#0f766e] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#f59e0b] text-[#134e4a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Free Initial Advice Online
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Immigration Law Services
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Expert immigration advice for visas, appeals, asylum claims, and citizenship applications.
              UK-wide services with transparent fixed fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#f59e0b] hover:bg-[#d97706] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-[#134e4a] text-center"
              >
                Book £60 Consultation
              </Link>
              <Link
                href="/fees"
                className="border-2 border-white hover:bg-white hover:text-[#134e4a] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                View Fees
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#134e4a] mb-4">
              Our Immigration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive immigration law support for individuals and families
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f59e0b] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#134e4a]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#134e4a] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#134e4a] mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple, transparent process from initial consultation to successful outcome
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#134e4a] text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-[#134e4a] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Advice Banner */}
      <section className="py-16 bg-[#f59e0b]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#134e4a] mb-4">
              Get Free Initial Immigration Advice Online
            </h2>
            <p className="text-lg text-[#134e4a] mb-8">
              Not sure where to start? Contact us for free initial immigration advice.
              We\'ll help you understand your options with no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#134e4a] hover:bg-[#0f3a37] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-white"
              >
                Get Free Advice
              </Link>
              <a
                href="tel:02034173700"
                className="border-2 border-[#134e4a] hover:bg-[#134e4a] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-[#134e4a]"
              >
                Call: 020 3417 3700
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#134e4a] mb-6">
                Why Choose Our Immigration Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f59e0b] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#134e4a]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134e4a] mb-1">Expert Knowledge</h3>
                    <p className="text-gray-600">Up-to-date expertise on UK immigration law and Home Office procedures</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f59e0b] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#134e4a]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134e4a] mb-1">Transparent Pricing</h3>
                    <p className="text-gray-600">Fixed fees quoted upfront with no hidden charges</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f59e0b] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#134e4a]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134e4a] mb-1">UK-Wide Services</h3>
                    <p className="text-gray-600">Remote consultations available anywhere in the UK</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f59e0b] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#134e4a]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134e4a] mb-1">Saturday Appointments</h3>
                    <p className="text-gray-600">Open Saturdays 10am-2pm for your convenience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#134e4a] to-[#0f766e] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Common Immigration Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#f59e0b] mb-2">How long does a visa application take?</h4>
                  <p className="text-gray-200 text-sm">Processing times vary by visa type, typically 3-12 weeks. We keep you updated throughout.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#f59e0b] mb-2">What if my visa is refused?</h4>
                  <p className="text-gray-200 text-sm">We can advise on appeals, administrative reviews, or fresh applications depending on your circumstances.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#f59e0b] mb-2">Do you offer payment plans?</h4>
                  <p className="text-gray-200 text-sm">Yes, we can arrange payment plans for larger cases. Discuss this during your consultation.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#f59e0b] mb-2">Can you help with urgent applications?</h4>
                  <p className="text-gray-200 text-sm">We can advise on priority and super-priority services where available from the Home Office.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#134e4a] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Get Expert Immigration Advice Today
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Start with free initial advice online or book a £60 consultation to discuss your case in detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#f59e0b] hover:bg-[#d97706] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-[#134e4a]"
            >
              Get Started
            </Link>
            <Link
              href="/fees"
              className="border-2 border-white hover:bg-white hover:text-[#134e4a] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              View Our Fees
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
