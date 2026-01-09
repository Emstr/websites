import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lettings & Property Management',
  description: 'Professional lettings and property management in Hackney, East & North London. Family-run agency with 20+ years expertise. Landlord and tenant services.',
};

export default function Lettings() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4f46e5] to-[#6366f1] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Lettings & Property Management
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed mb-8">
              Comprehensive lettings and property management services. We take care of your
              investment property like it&apos;s our own family home.
            </p>
            <a
              href="tel:02072758000"
              className="inline-block bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call: 0207 275 8000
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#4f46e5] mb-4">
              Services for Landlords
            </h2>
            <p className="text-xl text-gray-600">
              Professional property management you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4f46e5] transition-colors">
              <div className="bg-indigo-100 rounded-lg p-3 w-fit mb-4">
                <svg className="w-8 h-8 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tenant Finding</h3>
              <p className="text-gray-600">
                Professional marketing, viewings, referencing, and tenant selection.
                We find quality tenants for your property.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4f46e5] transition-colors">
              <div className="bg-amber-100 rounded-lg p-3 w-fit mb-4">
                <svg className="w-8 h-8 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rent Collection</h3>
              <p className="text-gray-600">
                Efficient monthly rent collection and payment to landlords.
                We handle all financial administration.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4f46e5] transition-colors">
              <div className="bg-indigo-100 rounded-lg p-3 w-fit mb-4">
                <svg className="w-8 h-8 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Maintenance</h3>
              <p className="text-gray-600">
                Coordinating repairs and maintenance with trusted local contractors.
                24/7 emergency support available.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4f46e5] transition-colors">
              <div className="bg-amber-100 rounded-lg p-3 w-fit mb-4">
                <svg className="w-8 h-8 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Management</h3>
              <p className="text-gray-600">
                Gas safety certificates, EPC, electrical inspections, and all
                legal compliance documentation handled.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4f46e5] transition-colors">
              <div className="bg-indigo-100 rounded-lg p-3 w-fit mb-4">
                <svg className="w-8 h-8 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Inspections</h3>
              <p className="text-gray-600">
                Regular property inspections with detailed reports. We keep you
                informed about your investment&apos;s condition.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4f46e5] transition-colors">
              <div className="bg-amber-100 rounded-lg p-3 w-fit mb-4">
                <svg className="w-8 h-8 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tenancy Management</h3>
              <p className="text-gray-600">
                Complete tenancy administration from agreements to renewals.
                Expert handling of deposits and inventory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tenant Services */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#4f46e5] mb-4">
              Services for Tenants
            </h2>
            <p className="text-xl text-gray-600">
              Find your perfect rental home in Hackney
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#4f46e5] mb-4">Property Search</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Wide selection of rental properties across Hackney & East London</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Expert local knowledge to help you find the right area</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Convenient viewing times arranged to suit you</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Transparent application process</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#4f46e5] mb-4">Tenant Support</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4f46e5] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Clear tenancy agreements and contracts</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4f46e5] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Protected deposit schemes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4f46e5] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Responsive maintenance reporting and coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#4f46e5] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Friendly, approachable team always ready to help</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#4f46e5] to-[#6366f1] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let Us Manage Your Property
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Family values meet professional service. Contact us to discuss your lettings needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02072758000"
              className="bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call: 0207 275 8000
            </a>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-[#4f46e5] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
