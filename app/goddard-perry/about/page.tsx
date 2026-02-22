import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Goddard Perry Consulting, independent financial advisers in Croydon. FCA regulated, impartial financial planning for individuals and businesses.',
};

const areas = [
  { name: 'Croydon', primary: true },
  { name: 'South Croydon', primary: false },
  { name: 'Purley', primary: false },
  { name: 'Coulsdon', primary: false },
  { name: 'Sanderstead', primary: false },
  { name: 'Selsdon', primary: false },
  { name: 'Bromley', primary: false },
  { name: 'Sutton', primary: false },
  { name: 'South London', primary: false },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2b46] to-[#1a3c5e] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Independent financial advisers built on honesty, reliability, and excellent service
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Bio */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Goddard Perry Consulting is a firm of independent financial advisers and employee
                  benefit consultants based in Croydon, South London. Our duty is solely to our
                  clients, whether as individuals or corporate entities.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Built on the principles of honesty, reliability, and excellent service, we provide
                  completely impartial financial advice. Our continuous monitoring, research, and
                  due diligence of the financial services market enables us to recommend the most
                  appropriate solutions for every client.
                </p>

                <h2 className="text-2xl font-bold text-[#0f2b46] mt-10 mb-4">
                  Our Independence
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  As independent financial advisers, we are not tied to any bank, insurer, or
                  product provider. This means we can search the whole of the market to find the
                  most suitable products and solutions for your specific needs and circumstances.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  This independence is fundamental to who we are. When we make a recommendation,
                  you can be confident it is based solely on what is right for you — not on any
                  commercial arrangement with a product provider.
                </p>

                <div className="bg-[#c4952b]/10 rounded-xl p-6 my-8">
                  <h3 className="text-xl font-bold text-[#0f2b46] mb-4">Our Values</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['Honesty', 'Reliability', 'Independence', 'Excellence'].map((value) => (
                      <div key={value} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <svg className="w-5 h-5 text-[#c4952b]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="font-medium text-[#0f2b46]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-[#0f2b46] mt-10 mb-4">
                  Private Client &amp; Corporate
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We provide high-quality, professional financial planning for private clients at
                  all stages of life — whether you&apos;re saving for your first property, planning
                  for retirement, or managing wealth you&apos;ve already built.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  For businesses, we offer comprehensive employee benefit solutions including group
                  pensions, auto-enrolment compliance, group life assurance, income protection, and
                  private medical insurance. We believe the best employee benefit packages include
                  products that complement each other and provide maximum value for both employer
                  and employee.
                </p>

                <h2 className="text-2xl font-bold text-[#0f2b46] mt-10 mb-4">
                  FCA Regulation
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Goddard Perry Consulting Limited is authorised and regulated by the Financial
                  Conduct Authority (FCA number 125376). This means we meet the FCA&apos;s strict
                  standards for competence, ethical behaviour, and financial stability.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our clients benefit from the protection of the Financial Services Compensation
                  Scheme (FSCS) and the right to complain to the Financial Ombudsman Service if
                  they are unhappy with the service they receive.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Areas Served */}
              <div className="bg-gradient-to-br from-[#0f2b46] to-[#1a3c5e] rounded-xl p-6 text-white mb-8">
                <h3 className="text-xl font-semibold mb-4">Areas We Serve</h3>
                <ul className="space-y-2">
                  {areas.map((area) => (
                    <li key={area.name} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#c4952b]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <span className={area.primary ? 'font-semibold' : ''}>{area.name}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-300 mt-4 text-sm">
                  We also advise clients nationwide
                </p>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#0f2b46] mb-4">Get in Touch</h3>
                <div className="space-y-3 text-gray-600">
                  <a href="tel:02086033700" className="flex items-center gap-3 hover:text-[#c4952b] transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    020 8603 3700
                  </a>
                  <a href="mailto:contact@goddardperry.com" className="flex items-center gap-3 hover:text-[#c4952b] transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    contact@goddardperry.com
                  </a>
                </div>
                <Link
                  href="/goddard-perry/contact"
                  className="mt-6 block w-full bg-[#c4952b] hover:bg-[#b3862a] text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0f2b46] mb-6">Our Fees</h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-lg text-gray-600 mb-6">
                We offer a transparent fee structure with no hidden costs. Our initial consultation
                is completely free and without obligation.
              </p>
              <div className="border-t border-gray-100 pt-6 space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#c4952b] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700">Free initial consultation with no obligation</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#c4952b] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700">Clearly defined service levels and fee structures</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#c4952b] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700">Fees agreed in writing before any chargeable work begins</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#c4952b] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700">No hidden charges or unexpected costs</span>
                </div>
              </div>
              <Link
                href="/goddard-perry/contact"
                className="mt-8 inline-block bg-[#0f2b46] hover:bg-[#1a3c5e] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
