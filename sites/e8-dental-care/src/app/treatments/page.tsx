import Link from 'next/link';

export const metadata = {
  title: 'Dental Treatments | E8 Dental Care Hackney',
  description: 'Comprehensive dental services including check-ups, fillings, crowns, root canal, teeth whitening and more. Expert care from Dr Mohamed Helmy.',
};

export default function Treatments() {
  const treatments = [
    {
      name: 'Check-ups & Examinations',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Thorough dental examinations to detect any issues early. We check your teeth, gums, and overall oral health.',
      benefits: ['Early problem detection', 'Personalized advice', 'X-rays when needed', 'Preventive guidance'],
      color: 'dental-teal',
    },
    {
      name: 'Scale & Polish (Hygiene)',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      description: 'Professional cleaning to remove plaque and tartar buildup, leaving your teeth feeling fresh and clean.',
      benefits: ['Removes stubborn stains', 'Prevents gum disease', 'Fresh breath', 'Brighter smile'],
      color: 'dental-sky',
    },
    {
      name: 'Fillings',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      description: 'Tooth-colored composite fillings that restore decayed teeth while maintaining a natural appearance.',
      benefits: ['Pain-free procedure', 'Natural looking', 'Quick treatment', 'Long-lasting results'],
      color: 'dental-teal',
    },
    {
      name: 'Crowns & Bridges',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: 'Restore damaged teeth or replace missing ones with custom-made crowns and bridges.',
      benefits: ['Strengthens weak teeth', 'Natural appearance', 'Improves function', 'Durable solution'],
      color: 'dental-sky',
    },
    {
      name: 'Root Canal Treatment',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      description: 'Save infected teeth with gentle root canal therapy. We make it comfortable with modern techniques.',
      benefits: ['Saves natural tooth', 'Relieves pain', 'Gentle procedure', 'Advanced technology'],
      color: 'dental-teal',
    },
    {
      name: 'Extractions',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'When a tooth cannot be saved, we perform gentle extractions with care for your comfort.',
      benefits: ['Pain relief', 'Prevents infection', 'Careful technique', 'Clear aftercare'],
      color: 'dental-sky',
    },
    {
      name: 'Wisdom Teeth Removal',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      description: 'Expert removal of problematic wisdom teeth causing pain or crowding.',
      benefits: ['Experienced team', 'Minimizes discomfort', 'Quick recovery', 'Full support'],
      color: 'dental-teal',
    },
    {
      name: 'Gum Disease Treatment',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: 'Comprehensive treatment for gingivitis and periodontitis to restore healthy gums.',
      benefits: ['Stops progression', 'Deep cleaning', 'Prevents tooth loss', 'Ongoing care plan'],
      color: 'dental-sky',
    },
    {
      name: 'Teeth Whitening',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Professional teeth whitening to brighten your smile by several shades safely and effectively.',
      benefits: ['Dramatic results', 'Safe procedure', 'Boosts confidence', 'Professional grade'],
      color: 'dental-teal',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dental-light via-white to-dental-soft py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Dental Treatments</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive dental care for all your needs. From routine check-ups to advanced treatments,
              we're here to keep your smile healthy and beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-dental-teal hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 bg-${treatment.color}/10 rounded-full flex items-center justify-center mb-4 text-${treatment.color}`}>
                  {treatment.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{treatment.name}</h3>
                <p className="text-gray-600 mb-4">{treatment.description}</p>
                <div className="space-y-2">
                  {treatment.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-dental-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Care */}
      <section className="py-20 bg-dental-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Dental Emergency?</h2>
                  <p className="text-gray-600 mb-6">
                    If you're experiencing severe pain, swelling, or have had a dental accident, please call us immediately.
                    We'll do our best to see you as soon as possible.
                  </p>
                  <a
                    href="tel:02089854547"
                    className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call Now: 020 8985 4547</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dental-teal to-dental-sky text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Treatment?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our friendly team is here to answer your questions and help you schedule an appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-dental-teal px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Book Appointment</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dental-teal transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <span>View Pricing</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
