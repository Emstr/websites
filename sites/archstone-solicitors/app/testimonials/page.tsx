import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Client Testimonials',
  description:
    'Read what our clients say about Archstone Solicitors. Real reviews from satisfied clients across Immigration, Conveyancing, Family Law, and more.',
};

const testimonials = [
  {
    name: 'Sarah Mitchell',
    service: 'Immigration Law',
    rating: 5,
    date: 'November 2025',
    text: 'Archstone Solicitors made my visa application stress-free. Their expertise and attention to detail were outstanding. They kept me informed every step of the way and successfully secured my spouse visa. I cannot recommend them highly enough!',
  },
  {
    name: 'David Chen',
    service: 'Conveyancing',
    rating: 5,
    date: 'October 2025',
    text: 'Professional, efficient, and transparent throughout our property purchase. The team kept us informed every step of the way. What could have been a stressful process was made simple and straightforward. Excellent value for money.',
  },
  {
    name: 'Jennifer Brown',
    service: 'Family Law',
    rating: 5,
    date: 'September 2025',
    text: 'During a difficult divorce, Archstone provided compassionate yet effective legal support. They truly care about their clients. The solicitor handling my case was patient, understanding, and fought hard to protect my interests and my children.',
  },
  {
    name: 'Mohammed Rahman',
    service: 'Immigration Law',
    rating: 5,
    date: 'August 2025',
    text: 'Exceptional service for my citizenship application. The team was knowledgeable, responsive, and achieved the result I needed. They made a complex process simple and were always available to answer my questions.',
  },
  {
    name: 'Emma Thompson',
    service: 'Conveyancing',
    rating: 5,
    date: 'July 2025',
    text: 'First-time buyer and was nervous about the process. Archstone made everything clear and easy to understand. They were patient with all my questions and made sure I understood every document. Brilliant service!',
  },
  {
    name: 'James Patterson',
    service: 'Personal Injury',
    rating: 5,
    date: 'June 2025',
    text: 'After a road accident, Archstone handled my compensation claim professionally and secured an excellent settlement. The no win, no fee arrangement meant no financial risk. They kept fighting even when the other side tried to lowball the offer.',
  },
  {
    name: 'Aisha Begum',
    service: 'Family Law',
    rating: 5,
    date: 'May 2025',
    text: 'Very sensitive handling of my child custody case. The solicitor was understanding and fought for the best outcome for my children. I felt supported throughout a very difficult time. Thank you so much.',
  },
  {
    name: 'Robert Wilson',
    service: 'Litigation',
    rating: 5,
    date: 'April 2025',
    text: 'Excellent representation in my contract dispute. Archstone\'s strategic approach led to a favorable settlement without going to court. They saved me time, money, and stress. Highly professional team.',
  },
  {
    name: 'Priya Sharma',
    service: 'Immigration Law',
    rating: 5,
    date: 'March 2025',
    text: 'My work visa application was initially refused, but Archstone successfully handled the appeal. Their deep knowledge of immigration law made all the difference. I now have my visa and can continue my career in the UK.',
  },
  {
    name: 'Michael O\'Brien',
    service: 'Conveyancing',
    rating: 5,
    date: 'February 2025',
    text: 'Sold and bought properties simultaneously - potentially very stressful! Archstone coordinated everything perfectly and both transactions completed smoothly on the same day. Outstanding service.',
  },
  {
    name: 'Fatima Hassan',
    service: 'Family Law',
    rating: 5,
    date: 'January 2025',
    text: 'The financial settlement from my divorce was fair thanks to Archstone\'s thorough preparation and negotiation skills. They explained everything clearly and fought hard for my rights. Very grateful.',
  },
  {
    name: 'Thomas Green',
    service: 'Company & Commercial',
    rating: 5,
    date: 'December 2024',
    text: 'Helped set up my new business with all the legal framework needed. From company formation to employment contracts and commercial agreements, they covered everything. Great value and excellent advice.',
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Don't just take our word for it. Read what our clients have to say about their experience
              with Archstone Solicitors. We're proud of the relationships we build and the results we achieve.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">4.8</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">127</div>
              <p className="text-gray-600">Client Reviews</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">98%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">20+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gold">{testimonial.service}</p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become Our Next Success Story
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have trusted Archstone Solicitors with their legal needs.
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg"
            >
              Free Consultation
            </Link>
            <Link
              href="/practice-areas"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors border border-white/30"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
