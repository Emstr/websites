import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Wembley Solicitors. 4 minutes from Wembley Central Station. Open Saturdays 10am-2pm. Call 020 3417 3700 or book a £60 consultation.',
};

const contactMethods = [
  {
    title: 'Phone',
    value: '020 3417 3700',
    href: 'tel:02034173700',
    description: 'Monday-Friday 9am-5:30pm, Saturday 10am-2pm',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    title: 'Email',
    value: 'info@wembleysolicitors.com',
    href: 'mailto:info@wembleysolicitors.com',
    description: 'We typically respond within 2 hours during business hours',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: 'Location',
    value: '4 min walk from Wembley Central',
    href: '#location',
    description: 'North West London, easy transport links',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

const openingHours = [
  { day: 'Monday - Friday', hours: '9:00am - 5:30pm', special: false },
  { day: 'Saturday', hours: '10:00am - 2:00pm', special: true },
  { day: 'Sunday', hours: 'Closed', special: false },
];

const services = [
  {
    title: 'Immigration Law',
    description: 'Free initial advice online',
  },
  {
    title: 'Family Law',
    description: 'Divorce, children, finances',
  },
  {
    title: 'Commercial Leases',
    description: 'Fixed fees £1,000-£1,500',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#134e4a] to-[#0f766e] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-[#f59e0b] text-[#134e4a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Open Saturdays 10am-2pm
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Get in touch to discuss your legal matter. We offer £60 consultations and free initial
              immigration advice online.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#134e4a] mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group text-center border-2 border-transparent hover:border-[#f59e0b]"
              >
                <div className="text-[#134e4a] mb-4 group-hover:scale-110 transition-transform inline-block">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#134e4a] mb-2">
                  {method.title}
                </h3>
                <p className="text-xl font-bold text-[#f59e0b] mb-2">
                  {method.value}
                </p>
                <p className="text-sm text-gray-600">
                  {method.description}
                </p>
              </a>
            ))}
          </div>

          {/* Quick Services */}
          <div className="bg-[#f59e0b] rounded-2xl p-8 text-[#134e4a]">
            <h3 className="text-2xl font-bold mb-6 text-center">Quick Service Selection</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-lg p-6 text-center">
                  <h4 className="font-semibold text-[#134e4a] mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 font-semibold">
              Mention which service you need when you call or email
            </p>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20" id="location">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location Details */}
            <div>
              <h2 className="text-3xl font-bold text-[#134e4a] mb-6">
                Our Location
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-sm mb-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f59e0b] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#134e4a]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134e4a] mb-2">Address</h3>
                    <p className="text-gray-600">
                      Wembley Solicitors<br />
                      North West London<br />
                      Near Wembley Central Station
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#134e4a] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134e4a] mb-1">4 Minute Walk from Wembley Central</h3>
                    <p className="text-gray-600">Direct access via Bakerloo and London Overground lines</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#134e4a] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134e4a] mb-1">Free Parking Available</h3>
                    <p className="text-gray-600">On-street parking nearby with good availability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#134e4a] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134e4a] mb-1">Accessible Office</h3>
                    <p className="text-gray-600">Ground floor access with disabled facilities available</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#134e4a] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134e4a] mb-1">Remote Consultations</h3>
                    <p className="text-gray-600">UK-wide video and phone consultations available</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
                <h3 className="font-semibold text-[#134e4a] mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                  Appointment Required
                </h3>
                <p className="text-gray-700 text-sm">
                  We operate by appointment only to ensure we can give you our full attention.
                  Please call ahead or book a consultation online.
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h2 className="text-3xl font-bold text-[#134e4a] mb-6">
                Opening Hours
              </h2>
              <div className="bg-gradient-to-br from-[#134e4a] to-[#0f766e] rounded-2xl p-8 text-white">
                <div className="space-y-4 mb-8">
                  {openingHours.map((item) => (
                    <div
                      key={item.day}
                      className={`flex justify-between items-center pb-4 border-b ${
                        item.special ? 'border-[#f59e0b]' : 'border-teal-600'
                      }`}
                    >
                      <span className={item.special ? 'font-semibold' : ''}>{item.day}</span>
                      <span className={`font-semibold ${item.special ? 'text-[#f59e0b] text-lg' : ''}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#f59e0b] text-[#134e4a] rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <h3 className="font-bold text-lg">Saturday Appointments</h3>
                  </div>
                  <p className="text-sm">
                    We're proud to offer Saturday morning appointments for clients who can't make
                    weekday visits. Book your Saturday slot today!
                  </p>
                </div>

                <div className="text-sm text-gray-300 space-y-2">
                  <p>• Evening appointments available by arrangement</p>
                  <p>• Remote consultations outside these hours</p>
                  <p>• Emergency consultations for urgent matters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#134e4a] mb-4">
              Before You Visit
            </h2>
            <p className="text-lg text-gray-600">
              Helpful information to prepare for your consultation
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#134e4a] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                What should I bring to my consultation?
              </h3>
              <p className="text-gray-600 text-sm">
                Bring any relevant documents related to your case (emails, letters, contracts, court papers, etc.),
                photo ID, and a list of questions you'd like to ask. If it's an immigration matter, bring your
                passport and any visa documents.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#134e4a] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                How long is a consultation?
              </h3>
              <p className="text-gray-600 text-sm">
                Our £60 consultation is typically 45-60 minutes. This gives us enough time to understand your
                situation, explain your options, and provide initial advice. If you need more time, we can
                arrange a follow-up appointment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#134e4a] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                Do you offer remote consultations?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes! We offer video and phone consultations for clients across the UK. These are just as
                comprehensive as in-person meetings and are charged at the same £60 rate.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#134e4a] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                What if I instruct you after the consultation?
              </h3>
              <p className="text-gray-600 text-sm">
                If you decide to instruct us following your consultation, the £60 consultation fee will be
                deducted from your final bill. You'll receive a clear fixed-fee quote before any work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#134e4a] to-[#0f766e] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your £60 consultation today or get free initial immigration advice online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02034173700"
              className="bg-[#f59e0b] hover:bg-[#d97706] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-[#134e4a]"
            >
              Call: 020 3417 3700
            </a>
            <a
              href="mailto:info@wembleysolicitors.com"
              className="border-2 border-white hover:bg-white hover:text-[#134e4a] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Email Us
            </a>
          </div>
          <p className="mt-6 text-gray-300">
            Open Monday-Friday 9am-5:30pm | <span className="text-[#f59e0b] font-semibold">Saturday 10am-2pm</span>
          </p>
        </div>
      </section>
    </>
  );
}
