import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Notary Southwark. Professional notarial services in Southwark, London SE1.',
};

const areas = [
  { name: 'Southwark', primary: true },
  { name: 'Waterloo', primary: false },
  { name: 'Kennington', primary: false },
  { name: 'Vauxhall', primary: false },
  { name: 'Lambeth', primary: false },
  { name: 'Brixton', primary: false },
  { name: 'Walworth', primary: false },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#34495e] to-[#2c3e50] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Professional notary public services in Southwark, London
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
                  Notary Southwark provides professional notarial services to businesses and
                  individuals across South London and beyond. We are conveniently located in
                  Southwark, London SE1.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our convenient Southwark location offers excellent transport links, making us
                  easily accessible for clients from Waterloo, Kennington, Vauxhall, Lambeth,
                  and surrounding areas.
                </p>

                <h2 className="text-2xl font-bold text-[#34495e] mt-10 mb-4">
                  Our Approach
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We understand that notarial requirements can be time-sensitive and complex.
                  Our team is dedicated to providing efficient, professional service while
                  ensuring all legal requirements are properly met.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Whether you need corporate documentation for international business,
                  personal documents certified for use abroad, or apostille and legalisation
                  services, we have the expertise to assist.
                </p>

                <h2 className="text-2xl font-bold text-[#34495e] mt-10 mb-4">
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
                  matters, and various personal purposes.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Areas Served */}
              <div className="bg-gradient-to-br from-[#34495e] to-[#2c3e50] rounded-xl p-6 text-white mb-8">
                <h3 className="text-xl font-semibold mb-4">Areas Served</h3>
                <ul className="space-y-2">
                  {areas.map((area) => (
                    <li key={area.name} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#e74c3c]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
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
                <h3 className="text-xl font-bold text-[#34495e] mb-4">Get in Touch</h3>
                <div className="space-y-3 text-gray-600">
                  <a href="tel:02079285000" className="flex items-center gap-3 hover:text-[#e74c3c] transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    020 7928 5000
                  </a>
                  <a href="mailto:info@notarysouthwark.co.uk" className="flex items-center gap-3 hover:text-[#e74c3c] transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    info@notarysouthwark.co.uk
                  </a>
                </div>
                <Link
                  href="/notary-southwark/contact"
                  className="mt-6 block w-full bg-[#e74c3c] hover:bg-[#c0392b] text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
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
            <h2 className="text-3xl font-bold text-[#34495e] mb-6">Our Fees</h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-lg text-gray-600 mb-6">
                We offer competitive, transparent pricing for all our notarial services.
                Fees vary depending on the complexity of your requirements.
              </p>
              <div className="border-t border-gray-100 pt-6 space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#e74c3c] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700">Transparent pricing with no hidden fees</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#e74c3c] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700">Additional fees for home or business visits</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#e74c3c] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700">Quotes provided based on your specific requirements</span>
                </div>
              </div>
              <Link
                href="/notary-southwark/quote"
                className="mt-8 inline-block bg-[#34495e] hover:bg-[#2c3e50] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
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
