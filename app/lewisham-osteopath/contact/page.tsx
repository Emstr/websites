import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Directions',
  description: 'Book an appointment with Lewisham Osteopathic Practice. Call 020 8852 5577 or email lewishamosteo@gmail.com. Studio 107, Ladywell Works, Lewisham SE13.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact & Directions</h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Call or email to book an appointment. We&apos;re easy to reach from Ladywell, Catford, Forest Hill, and Lewisham station.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Phone</div>
                      <a href="tel:02088525577" className="text-lg font-semibold text-gray-900 hover:text-[var(--primary)] transition-colors">
                        020 8852 5577
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Email</div>
                      <a href="mailto:lewishamosteo@gmail.com" className="text-lg font-semibold text-gray-900 hover:text-[var(--primary)] transition-colors">
                        lewishamosteo@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Opening hours</div>
                      <div className="text-gray-900">
                        <div>Monday – Friday: 9am – 7pm</div>
                        <div>Saturday: 9am – 2pm</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Address</div>
                      <address className="not-italic text-gray-900">
                        Studio 107, Ladywell Works<br />
                        15 Whitburn Road, Lewisham<br />
                        London SE13 7UQ
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Getting here</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-[var(--primary)] flex-shrink-0">Train:</span>
                    Ladywell station is a 5-minute walk (Southeastern line from London Bridge)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-[var(--primary)] flex-shrink-0">Bus:</span>
                    Routes 484, 171, and 122 stop nearby
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-[var(--primary)] flex-shrink-0">Car:</span>
                    Street parking available on Whitburn Road
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl overflow-hidden h-96 flex items-center justify-center">
              <div className="text-center text-gray-500 p-8">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="text-sm">Studio 107, Ladywell Works</p>
                <p className="text-sm">15 Whitburn Road, SE13 7UQ</p>
                <a
                  href="https://maps.google.com/?q=15+Whitburn+Road+Lewisham+London+SE13+7UQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[var(--primary)] underline text-sm hover:no-underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
