import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Olivia Brown | Notary Public Croydon',
  description: 'Learn about Olivia Brown, qualified Notary Public and Solicitor based in Croydon, London. Post-graduate Diploma in Notarial Practice.',
};

const qualifications = [
  'Post-graduate Diploma in Notarial Practice',
  'Qualified Solicitor',
  'Partner at Akin Palmer (Solicitors) LLP',
];

const areas = [
  { name: 'Croydon', primary: true },
  { name: 'City of London', primary: false },
  { name: 'Hackney', primary: false },
  { name: 'Camden', primary: false },
  { name: 'Westminster', primary: false },
  { name: 'Tower Hamlets', primary: false },
  { name: 'Southwark', primary: false },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1f2937] to-[#374151] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              About Olivia Brown
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Notary Public & Solicitor serving Croydon and surrounding London boroughs
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
                  I am a Notary Public based in Croydon, Croydon CR0. I hold a Post-graduate
                  Diploma in Notarial Practice and am also a qualified solicitor.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  I am a partner at Akin Palmer (Solicitors) LLP, where I combine my notarial
                  practice with general legal services. This dual qualification allows me to
                  provide comprehensive support for clients who may need both notarial and
                  legal services.
                </p>

                <h2 className="text-2xl font-bold text-[#1f2937] mt-10 mb-4">
                  My Approach
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  While notarial work can seem quite formal, I strive to provide an efficient
                  and friendly service to all my clients. Whether you are a business requiring
                  corporate documentation or an individual needing personal documents certified,
                  I aim to make the process as straightforward as possible.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  I understand that clients often need documents notarised at short notice or
                  outside of regular office hours. That&apos;s why I offer flexible appointment
                  times, including evenings and weekends when necessary, as well as home and
                  business visits for those who cannot come to my office.
                </p>

                <h2 className="text-2xl font-bold text-[#1f2937] mt-10 mb-4">
                  What is a Notary Public?
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A Notary Public is a legal professional appointed by the Court of Faculties
                  of the Archbishop of Canterbury. Notaries are authorised to authenticate
                  documents and signatures for use in the UK and internationally.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Notarised documents are recognised worldwide and are often required for
                  international business transactions, legal proceedings abroad, immigration
                  matters, and various personal purposes such as marriage abroad or property
                  transactions in other countries.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Qualifications */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-[#1f2937] mb-4">Qualifications</h3>
                <ul className="space-y-3">
                  {qualifications.map((qual, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#06b6d4] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-gray-700">{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Areas Served */}
              <div className="bg-gradient-to-br from-[#1f2937] to-[#374151] rounded-xl p-6 text-white mb-8">
                <h3 className="text-xl font-semibold mb-4">Areas Served</h3>
                <ul className="space-y-2">
                  {areas.map((area) => (
                    <li key={area.name} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#06b6d4]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <span className={area.primary ? 'font-semibold' : ''}>{area.name}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-300 mt-4 text-sm">
                  Home and business visits available for an additional fee
                </p>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#1f2937] mb-4">Get in Touch</h3>
                <div className="space-y-3 text-gray-600">
                  <a href="tel:02086865500" className="flex items-center gap-3 hover:text-[#06b6d4] transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    020 8686 5500
                  </a>
                  <a href="tel:07945678901" className="flex items-center gap-3 hover:text-[#06b6d4] transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    07945 678901
                  </a>
                  <a href="mailto:olivia@croydonnotary.co.uk" className="flex items-center gap-3 hover:text-[#06b6d4] transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    olivia@croydonnotary.co.uk
                  </a>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 block w-full bg-[#06b6d4] hover:bg-[#0891b2] text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1f2937] mb-6">Fees</h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-5xl font-bold text-[#06b6d4] mb-2">£80</div>
              <p className="text-gray-600 mb-6">
                Minimum fee for up to 20 minutes of notary time (no VAT)
              </p>
              <div className="border-t border-gray-100 pt-6 space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#06b6d4] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700">Pro-rata rates apply for longer appointments</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#06b6d4] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700">Additional fees for home or business visits</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#06b6d4] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700">Quotes provided based on your specific requirements</span>
                </div>
              </div>
              <Link
                href="/quote"
                className="mt-8 inline-block bg-[#1f2937] hover:bg-[#374151] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Instant Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
