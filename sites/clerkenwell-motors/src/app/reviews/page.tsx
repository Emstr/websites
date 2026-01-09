import Link from 'next/link';

export default function Reviews() {
  const reviews = [
    {
      name: 'Sarah Thompson',
      rating: 5,
      date: 'December 2024',
      text: 'Absolutely brilliant service! Had my car MOT done here and they were so professional. Found a few issues, explained everything clearly, and fixed it all the same day at a fair price. Been using them for 3 years now and wouldn\'t go anywhere else.',
    },
    {
      name: 'James Chen',
      rating: 5,
      date: 'November 2024',
      text: 'Honest, reliable, and knowledgeable. They diagnosed an issue my previous garage missed and fixed it properly. The team took time to explain what was wrong and showed me the old parts. Highly recommend!',
    },
    {
      name: 'Emma Wilson',
      rating: 5,
      date: 'November 2024',
      text: 'Great garage! I\'ve been bringing my van here for servicing for over 5 years. Always helpful, never try to sell you things you don\'t need. Fair prices and excellent work. The team really know their stuff.',
    },
    {
      name: 'Michael O\'Brien',
      rating: 5,
      date: 'October 2024',
      text: 'Fantastic service from start to finish. Needed urgent brake repairs and they fitted me in same day. Work was completed quickly to a very high standard. The peace of mind knowing your car is in safe hands is priceless.',
    },
    {
      name: 'Priya Patel',
      rating: 5,
      date: 'October 2024',
      text: 'I don\'t know much about cars but the team here are so patient and explain everything in plain English. Never feel like I\'m being taken advantage of. Had my car serviced and MOT done - passed with flying colours. Thank you!',
    },
    {
      name: 'David Martinez',
      rating: 5,
      date: 'September 2024',
      text: 'Been using Clerkenwell Motors for 10+ years. They service my classic MG and my wife\'s electric car. Rare to find a garage with expertise across such different vehicle types. Wouldn\'t trust anyone else.',
    },
    {
      name: 'Lisa Ahmed',
      rating: 4,
      date: 'September 2024',
      text: 'Very good service overall. Had some bodywork done after a minor accident. Quality of work is excellent and price was competitive. Only minor issue was it took slightly longer than quoted, but they kept me informed.',
    },
    {
      name: 'Tom Richards',
      rating: 5,
      date: 'August 2024',
      text: 'Top notch garage! Had my motorcycle MOT and service done. They really know bikes as well as cars. Found a potential issue before it became serious. Great value and friendly service.',
    },
    {
      name: 'Rachel Green',
      rating: 5,
      date: 'August 2024',
      text: 'So relieved to have found an honest garage in London! They fixed my air conditioning and didn\'t try to upsell me loads of unnecessary work. Quick turnaround, reasonable price, and it works perfectly now.',
    },
    {
      name: 'Andrew Smith',
      rating: 5,
      date: 'July 2024',
      text: 'Cannot recommend highly enough. Family-run business that actually cares about their customers. They\'ve serviced all my family\'s cars for years. Always transparent about costs and timing. Absolute professionals.',
    },
    {
      name: 'Natalie Foster',
      rating: 5,
      date: 'July 2024',
      text: 'Excellent garage with decades of experience. They diagnosed an electrical fault that two other garages couldn\'t figure out. Solved it within an hour. Their diagnostic equipment and knowledge is outstanding.',
    },
    {
      name: 'Robert Johnson',
      rating: 5,
      date: 'June 2024',
      text: 'Best garage in Central London, hands down. Fair prices, quality work, and they stand behind their repairs. Had my clutch replaced and it\'s been perfect ever since. These guys are the real deal.',
    },
  ];

  const averageRating = 4.7;
  const totalReviews = 111;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-garage-charcoal to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl text-gray-300 mb-8">
              See what our customers say about our service
            </p>
            {/* Rating Display */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm inline-block px-12 py-8 rounded-2xl border border-white border-opacity-20">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-5xl font-bold mb-2">{averageRating}/5</div>
              <div className="text-xl text-gray-300">Based on {totalReviews} Google Reviews</div>
              <a
                href="https://www.google.com/search?q=clerkenwell+motors"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-garage-red hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                View on Google
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-garage-charcoal mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from real customers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>
                <div className="flex items-center pt-4 border-t border-gray-200">
                  <div className="bg-garage-red bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-garage-red font-bold text-lg">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-garage-charcoal">{review.name}</div>
                    <div className="text-xs text-gray-500">Google Review</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-garage-charcoal mb-4">
              Trusted by Customers & Industry
            </h2>
            <p className="text-xl text-gray-600">
              30+ years of excellence backed by prestigious accreditations
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-white border-4 border-gray-200 rounded-lg p-6 mb-4 inline-block">
                <div className="text-black font-bold text-2xl">RAC</div>
                <div className="text-xs text-gray-600">Approved</div>
              </div>
              <h3 className="font-bold text-garage-charcoal">RAC Approved</h3>
            </div>
            <div className="text-center p-6">
              <div className="bg-yellow-400 rounded-lg p-6 mb-4 inline-block">
                <div className="text-black font-bold text-2xl">AA</div>
                <div className="text-xs text-gray-800">Approved</div>
              </div>
              <h3 className="font-bold text-garage-charcoal">AA Approved</h3>
            </div>
            <div className="text-center p-6">
              <div className="bg-white border-4 border-gray-200 rounded-lg p-6 mb-4 inline-block">
                <div className="text-black font-bold text-xl">MIPOC</div>
                <div className="text-xs text-gray-600">Member</div>
              </div>
              <h3 className="font-bold text-garage-charcoal">MIPOC Member</h3>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-600 rounded-lg p-6 mb-4 inline-block">
                <div className="text-white font-bold text-xl">Which?</div>
                <div className="text-xs text-green-100 font-semibold">TRUSTED TRADER</div>
              </div>
              <h3 className="font-bold text-garage-charcoal">Which? Trusted</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Review Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-garage-red mb-2">{averageRating}★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-garage-red mb-2">{totalReviews}</div>
              <div className="text-gray-600">Total Reviews</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-garage-red mb-2">95%</div>
              <div className="text-gray-600">5-Star Reviews</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-garage-red mb-2">30+</div>
              <div className="text-gray-600">Years Serving London</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-garage-red to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience Our Award-Winning Service</h2>
          <p className="text-xl mb-8 text-red-100">
            Join our satisfied customers and discover why we're Central London's most trusted garage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02072786375"
              className="inline-block bg-white hover:bg-gray-100 text-garage-red font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Call 020 7278 6375
            </a>
            <Link
              href="/contact"
              className="inline-block bg-garage-charcoal hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Book Your Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
