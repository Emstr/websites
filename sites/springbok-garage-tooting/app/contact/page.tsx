import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Springbok Garage in Tooting. Phone: 020 8672 7788 / 020 8672 6904. Address: 110 Totterdown Street, Tooting, London SW17 8TA. Near Tooting Broadway tube.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200">
              Contact us today for bookings, quotes, or any questions about our services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Phone</h3>
                    <a href="tel:02086727788" className="text-lg text-gray-700 hover:text-accent transition-colors block">
                      020 8672 7788
                    </a>
                    <a href="tel:02086726904" className="text-lg text-gray-700 hover:text-accent transition-colors block">
                      020 8672 6904
                    </a>
                    <p className="text-sm text-gray-600 mt-2">Call us for bookings and enquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Address</h3>
                    <p className="text-lg text-gray-700">
                      110 Totterdown Street<br />
                      Tooting<br />
                      London SW17 8TA
                    </p>
                    <p className="text-sm text-gray-600 mt-2">Close to Tooting Broadway tube, behind Primark</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-gray-700">
                      <p><span className="font-medium">Monday - Friday:</span> 7:30am - 5:30pm</p>
                      <p><span className="font-medium">Saturday:</span> 8:00am - 11:00am</p>
                      <p><span className="font-medium">Sunday:</span> Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-4">Quick Service Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  <a href="tel:02086727788" className="text-sm text-gray-700 hover:text-accent transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Book MOT
                  </a>
                  <a href="tel:02086727788" className="text-sm text-gray-700 hover:text-accent transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Book Service
                  </a>
                  <a href="tel:02086727788" className="text-sm text-gray-700 hover:text-accent transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Body Repairs
                  </a>
                  <a href="tel:02086727788" className="text-sm text-gray-700 hover:text-accent transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Breakdown
                  </a>
                </div>
              </div>
            </div>

            {/* Map & Directions */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">How to Find Us</h2>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-80 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600 font-medium">110 Totterdown Street</p>
                  <p className="text-gray-500 text-sm">Tooting, London SW17 8TA</p>
                </div>
              </div>

              <div className="bg-accent/5 border-l-4 border-accent rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Directions
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <h4 className="font-medium text-primary mb-1">By Tube</h4>
                    <p className="text-sm">
                      Take the Northern Line to Tooting Broadway. We're just a 5-minute walk from the station.
                      Exit onto Tooting High Street, walk past Primark, and turn into Totterdown Street.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">By Bus</h4>
                    <p className="text-sm">
                      Multiple bus routes serve Tooting Broadway including 44, 57, 77, 155, 219, 264, 270, 280, 355, and G1.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">By Car</h4>
                    <p className="text-sm">
                      From central London, take the A24 south through Clapham. We're located just off Tooting High Street.
                      Street parking available nearby.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Ready to Book?</h3>
                <p className="text-gray-200 mb-6">
                  Call us now to book your MOT, service, or repair. Our friendly team is ready to help.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:02086727788"
                    className="block bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-md font-semibold text-center transition-colors"
                  >
                    Call 020 8672 7788
                  </a>
                  <a
                    href="tel:02086726904"
                    className="block bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-semibold text-center transition-colors border border-white/30"
                  >
                    Call 020 8672 6904
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-accent text-white rounded-2xl p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Breakdown & Recovery
            </h2>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Need emergency breakdown assistance? We offer 24/7 breakdown and recovery services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:02086727788"
                className="inline-block bg-white hover:bg-gray-100 text-accent px-8 py-4 rounded-md font-semibold text-lg transition-colors"
              >
                Call for Emergency Service
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
