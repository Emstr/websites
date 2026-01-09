import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Our Family Story',
  description: 'Learn about Courtneys Estate Agents - a family-run business serving Hackney since 2003. Discover our story, values, and commitment to personal service.',
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4f46e5] to-[#6366f1] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Our Family Story
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              A family-run estate agency serving Hackney, East & North London with
              honesty, transparency, and efficiency since 2003.
            </p>
          </div>
        </div>
      </section>

      {/* Family Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#4f46e5] mb-6">Over 20 Years of Family Service</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Courtneys Estate Agents was founded in 2003 with a simple mission: to provide
              honest, transparent, and efficient estate agency services with the personal
              touch that only a family business can offer.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              For more than two decades, we&apos;ve been serving the Hackney community and
              surrounding areas of East and North London. Our office on Kingsland Road has
              become a trusted local landmark, where generations of families have come to
              find their perfect homes.
            </p>

            <div className="bg-gradient-to-br from-indigo-50 to-amber-50 rounded-2xl p-8 my-10">
              <h3 className="text-2xl font-bold text-[#4f46e5] mb-4">Our Family Values</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Honesty First:</strong> We believe in transparent communication and setting realistic expectations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Personal Touch:</strong> Every client receives the individual attention and care they deserve</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Efficiency:</strong> We work hard to make property transactions as smooth and stress-free as possible</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Local Expertise:</strong> Deep knowledge of Hackney and surrounding areas built over 20+ years</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Community Commitment:</strong> We&apos;re not just estate agents, we&apos;re part of the local community</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-[#4f46e5] mb-4 mt-10">Why Clients Choose Us</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our clients consistently praise Tim and the team for the personal touch that sets
              us apart from corporate estate agents. As one recent 5-star review noted:
              &ldquo;They treated us like family throughout the entire process.&rdquo;
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              This personal approach is what defines Courtneys. We understand that buying,
              selling, or renting a property is one of life&apos;s most significant decisions.
              That&apos;s why we take the time to understand your unique needs and work tirelessly
              to achieve the best possible outcome.
            </p>

            <h3 className="text-2xl font-bold text-[#4f46e5] mb-4 mt-10">Local Knowledge, Family Service</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              With over 20 years serving Hackney, East and North London, we&apos;ve developed
              an unparalleled understanding of local property markets, neighborhoods, schools,
              transport links, and community amenities. This expertise, combined with our
              family-first approach, ensures you receive the best possible guidance.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Whether you&apos;re a first-time buyer, seasoned investor, landlord, or tenant,
              we&apos;re here to provide the honest advice and efficient service that has earned
              us countless 5-star reviews over the years.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4f46e5] mb-12 text-center">
            Comprehensive Property Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-indigo-100 rounded-lg p-3">
                  <svg className="w-8 h-8 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Residential Sales</h3>
                  <p className="text-gray-600">
                    Expert guidance through every step of buying or selling your home.
                    Market valuations, professional photography, marketing, and negotiation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-amber-100 rounded-lg p-3">
                  <svg className="w-8 h-8 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Lettings & Management</h3>
                  <p className="text-gray-600">
                    Comprehensive lettings and property management services. Tenant finding,
                    rent collection, maintenance coordination, and compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-indigo-100 rounded-lg p-3">
                  <svg className="w-8 h-8 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Sales & Lettings</h3>
                  <p className="text-gray-600">
                    Specialist commercial property services for retail, office, and industrial
                    units across East London. Investment and business premises expertise.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm" id="mortgages">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-amber-100 rounded-lg p-3">
                  <svg className="w-8 h-8 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mortgages</h3>
                  <p className="text-gray-600">
                    Independent mortgage advice with access to exclusive deals across the market.
                    First-time buyers, remortgages, buy-to-let, and commercial mortgages.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm" id="development">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-indigo-100 rounded-lg p-3">
                  <svg className="w-8 h-8 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Land & Development</h3>
                  <p className="text-gray-600">
                    Expert advice on development opportunities and land sales. Site acquisition,
                    planning considerations, and maximizing development potential.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-amber-100 rounded-lg p-3">
                  <svg className="w-8 h-8 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Property Search</h3>
                  <p className="text-gray-600">
                    Personalized property search service. Let our experienced team use their
                    local knowledge to find your perfect home or investment property.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#4f46e5] to-[#6366f1] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Experience the Courtneys Difference
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Discover why families across Hackney have trusted us for over 20 years.
            Contact us today for honest, transparent, and efficient service.
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
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
