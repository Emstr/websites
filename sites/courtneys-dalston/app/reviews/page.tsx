import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials',
  description: '5-star Google reviews for Courtneys Estate Agents. Read what our clients say about our family-run service in Hackney, East London.',
};

const reviews = [
  {
    name: 'Sarah Mitchell',
    rating: 5,
    text: 'Tim and the team at Courtneys were absolutely fantastic from start to finish. The personal touch really made all the difference - they genuinely treated us like family throughout the entire house buying process. I cannot recommend them highly enough!',
    date: '2 weeks ago',
    service: 'Property Purchase',
  },
  {
    name: 'James Patterson',
    rating: 5,
    text: 'Honest, transparent and efficient service. After 20 years in Dalston, they really know the area inside out and gave us excellent advice. The family values shine through in everything they do. Would highly recommend!',
    date: '1 month ago',
    service: 'Property Sale',
  },
  {
    name: 'Michelle Kumar',
    rating: 5,
    text: 'Best estate agents in East London! The family values really shine through in their personal approach. They went above and beyond to help us find our perfect home. Tim was particularly helpful and responsive.',
    date: '2 months ago',
    service: 'Property Purchase',
  },
  {
    name: 'David Thompson',
    rating: 5,
    text: 'We used Courtneys to let our property and the service has been exceptional. They found great tenants quickly and manage everything so efficiently. Knowing it\'s a family business makes you feel confident your property is in safe hands.',
    date: '2 months ago',
    service: 'Lettings & Management',
  },
  {
    name: 'Rebecca Chen',
    rating: 5,
    text: 'Professional yet personal service. They knew exactly what we were looking for and helped us find it quickly. Their local knowledge of Hackney is second to none. Couldn\'t have asked for better agents.',
    date: '3 months ago',
    service: 'Property Purchase',
  },
  {
    name: 'Andrew Wilson',
    rating: 5,
    text: 'Sold our flat through Courtneys and they achieved over the asking price! Their marketing was excellent and they handled all the negotiations brilliantly. A family business that really cares about getting the best results.',
    date: '3 months ago',
    service: 'Property Sale',
  },
  {
    name: 'Lisa Rodriguez',
    rating: 5,
    text: 'We\'ve rented through several agents in London but Courtneys are by far the best. They actually listen and help rather than just processing paperwork. The personal touch from a family business makes all the difference.',
    date: '4 months ago',
    service: 'Lettings',
  },
  {
    name: 'Mark Stevens',
    rating: 5,
    text: 'Exceptional service for our commercial property needs. Their expertise in East London commercial market is outstanding. Tim and the team provided honest advice and helped us find the perfect retail unit for our business.',
    date: '4 months ago',
    service: 'Commercial Property',
  },
  {
    name: 'Emma Harris',
    rating: 5,
    text: 'First time buyers and Courtneys made the whole process so smooth. They were patient, explained everything clearly, and were always available to answer our questions. Can\'t thank them enough for helping us get on the property ladder!',
    date: '5 months ago',
    service: 'Property Purchase',
  },
  {
    name: 'Tom Bradley',
    rating: 5,
    text: 'Been using Courtneys to manage my rental properties for years. They\'re reliable, honest, and truly care about both landlords and tenants. The family values approach works brilliantly in property management.',
    date: '5 months ago',
    service: 'Property Management',
  },
  {
    name: 'Sophie Anderson',
    rating: 5,
    text: 'Fantastic local estate agents. They know Dalston better than anyone and gave us brilliant advice on which areas to focus on. Their honesty and transparency are refreshing in the property industry.',
    date: '6 months ago',
    service: 'Property Search',
  },
  {
    name: 'Peter Collins',
    rating: 5,
    text: 'Outstanding service from start to finish. Sold our house in just 3 weeks at a great price. The team kept us updated throughout and made what can be a stressful process feel easy. Family business done right!',
    date: '6 months ago',
    service: 'Property Sale',
  },
];

export default function Reviews() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4f46e5] to-[#6366f1] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-10 h-10 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              5-Star Google Reviews
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              See why families across Hackney have trusted Courtneys Estate Agents for over 20 years.
              Real reviews from real clients about our family-run service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#4f46e5] mb-2">5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#4f46e5] mb-2">50+</div>
              <p className="text-gray-600 mt-2">5-Star Reviews</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#4f46e5] mb-2">20+</div>
              <p className="text-gray-600 mt-2">Years Serving Hackney</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#4f46e5] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Genuine reviews from families and businesses we&apos;ve helped
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4f46e5] transition-colors">
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-[#4f46e5] mt-1">{review.service}</p>
                  <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 5 Stars */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#4f46e5] mb-8 text-center">
              Why Clients Give Us 5 Stars
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21.75c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Family Values</h3>
                    <p className="text-gray-600 text-sm">
                      We treat every client like family, providing personal attention and care
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Honest & Transparent</h3>
                    <p className="text-gray-600 text-sm">
                      Clear communication and realistic expectations from day one
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Expertise</h3>
                    <p className="text-gray-600 text-sm">
                      Over 20 years of unmatched knowledge of Hackney and East London
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Efficient Service</h3>
                    <p className="text-gray-600 text-sm">
                      Quick responses, smooth processes, and results that exceed expectations
                    </p>
                  </div>
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
            Experience Our 5-Star Service
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join the hundreds of satisfied clients who have trusted Courtneys with their property needs.
            We&apos;d love to help you too!
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
