import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive automotive services from Springbok Garage: MOT, Servicing, Body Repairs, Car Wash, Breakdown & Recovery, Commercial Vehicles. 60+ years of expertise.',
};

const services = [
  {
    id: 'mot',
    name: 'MOT Testing',
    description: 'Comprehensive MOT testing carried out by experienced technicians',
    details: [
      'Class 4 MOT for cars and light vans',
      'Class 7 MOT for commercial vehicles',
      'While-you-wait service available',
      'Free re-test within 10 working days',
      'Minor repairs completed same day',
      'Honest advice on any work needed',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'servicing',
    name: 'Car Servicing',
    description: 'Full and interim servicing for all makes and models',
    details: [
      'Full service including all filters and fluids',
      'Interim service for regular maintenance',
      'Manufacturer service schedules followed',
      'Genuine and quality aftermarket parts',
      'Computerized diagnostic testing',
      'Service history stamped and recorded',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 'bodywork',
    name: 'Body Repairs',
    description: 'Professional bodywork and accident damage repairs',
    details: [
      'Insurance approved repairs',
      'We deal with insurers directly',
      'Accident damage restoration',
      'Panel beating and welding',
      'Respray and paint matching',
      'Courtesy cars available',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 'car-wash',
    name: 'Car Wash',
    description: 'Professional car washing and valeting services',
    details: [
      'Hand wash and dry',
      'Interior valeting',
      'Wax and polish',
      'Engine bay cleaning',
      'Wheel and tire cleaning',
      'Quick turnaround',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
  },
  {
    id: 'breakdown',
    name: 'Breakdown & Recovery',
    description: 'Emergency breakdown assistance and vehicle recovery',
    details: [
      '24/7 breakdown assistance',
      'Vehicle recovery service',
      'Roadside repairs where possible',
      'Flat battery jump start',
      'Tire replacement service',
      'Local and long-distance recovery',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'commercial',
    name: 'Commercial Vehicles',
    description: 'Specialist servicing and repairs for commercial vehicles',
    details: [
      'Van and light commercial servicing',
      'Fleet maintenance contracts',
      'HGV repairs and servicing',
      'Commercial vehicle MOT',
      'Breakdown recovery',
      'Flexible appointment times',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive automotive services backed by over 60 years of expertise and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center scroll-mt-20`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-primary">{service.name}</h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg p-8 text-center">
                  <div className="text-accent text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Need {service.name}?</h3>
                  <p className="text-gray-600 mb-6">
                    Contact us today to book your appointment or get a free quote
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-md font-semibold transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Call us now or visit our garage in Tooting. We're here to help with all your automotive needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:02086727788"
                className="inline-block bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
              >
                Call 020 8672 7788
              </a>
              <Link
                href="/contact"
                className="inline-block bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-md font-semibold text-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
