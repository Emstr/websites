export const metadata = {
  title: 'Meet the Team | E8 Dental Care Hackney',
  description: 'Meet Dr Mohamed Helmy and our friendly dental team. Experienced, caring professionals dedicated to your dental health.',
};

export default function Team() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dental-light via-white to-dental-soft py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our experienced and friendly team is dedicated to providing you with exceptional dental care
              in a warm, welcoming environment.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Owner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-dental-light to-dental-soft rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-dental-teal to-dental-sky rounded-full flex items-center justify-center shadow-xl">
                    <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="inline-block bg-dental-teal text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Practice Owner
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Mrs Shilpa Chirag Roy</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    As the proud owner of E8 Dental Care, Mrs Roy is committed to bringing high-quality,
                    accessible dental care to the Hackney community. Since opening in 2022, she has built
                    a practice that prioritizes patient comfort, professional excellence, and friendly service.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Her vision for E8 Dental Care is simple: to create a dental practice where patients feel
                    welcome, valued, and confident in the care they receive. Under her leadership, the practice
                    has earned CQC registration and a reputation for outstanding patient care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Dentist */}
      <section className="py-20 bg-dental-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-dental-sky to-dental-teal rounded-full flex items-center justify-center shadow-xl">
                    <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-center mt-6">
                    <div className="flex justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 font-semibold">Excellent Patient Reviews</p>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="inline-block bg-dental-sky text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Principal Dentist
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Dr Mohamed Helmy</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Dr Helmy is our highly experienced principal dentist, known for his gentle approach and
                    excellent patient care. With years of experience in general and restorative dentistry,
                    he has built an outstanding reputation in the Hackney community.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Patients consistently praise Dr Helmy for his thoroughness, clear explanations, and ability
                    to put even the most nervous patients at ease. He takes pride in staying current with the
                    latest dental techniques and technology to provide the best possible care.
                  </p>
                  <div className="bg-dental-light rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Areas of Expertise:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-dental-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">General Dentistry</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-dental-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Restorative Work</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-dental-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Root Canal Treatment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-dental-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Cosmetic Dentistry</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Support Team</h2>
              <p className="text-xl text-gray-600">
                Behind every great dentist is a dedicated support team
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-dental-light rounded-2xl p-8 text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-dental-teal to-dental-sky rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reception Team</h3>
                <p className="text-gray-600">
                  Our friendly reception team is here to welcome you, answer your questions, and help with appointments.
                </p>
              </div>
              <div className="bg-dental-light rounded-2xl p-8 text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-dental-sky to-dental-teal rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dental Nurses</h3>
                <p className="text-gray-600">
                  Our skilled dental nurses assist during treatments and ensure your comfort throughout your visit.
                </p>
              </div>
              <div className="bg-dental-light rounded-2xl p-8 text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-dental-teal to-dental-sky rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Practice Manager</h3>
                <p className="text-gray-600">
                  Ensuring smooth operations and the highest standards of patient care every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews Section */}
      <section className="py-20 bg-dental-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Patients Say About Dr Helmy</h2>
              <p className="text-xl text-gray-600">Don't just take our word for it</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Dr Helmy is absolutely brilliant. He's thorough, patient, and really takes the time to
                  explain everything. I was terrified of dentists before but he's completely changed that.
                  Can't recommend him enough!"
                </p>
                <p className="text-gray-900 font-semibold">Emma R.</p>
                <p className="text-gray-500 text-sm">Long-term Patient</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The best dentist I've ever had. Dr Helmy is professional, gentle, and genuinely cares
                  about his patients. The whole team at E8 Dental Care is wonderful. Highly recommended!"
                </p>
                <p className="text-gray-900 font-semibold">David L.</p>
                <p className="text-gray-500 text-sm">Regular Patient</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dental-teal to-dental-sky text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Meet Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your appointment today and experience the E8 Dental Care difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="bg-white text-dental-teal px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Book Appointment</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="tel:02089854547"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dental-teal transition-all shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: 020 8985 4547</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
