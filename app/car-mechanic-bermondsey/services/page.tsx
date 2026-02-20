import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Services | MOT, Servicing, Brakes, Diagnostics & More",
  description:
    "Full range of garage services in Bermondsey, SE1. MOT testing, vehicle servicing, brake repairs, engine diagnostics, tyre fitting and air conditioning. All makes and models.",
  openGraph: {
    title: "Garage Services | Bermondsey Motors",
    description:
      "MOT testing, servicing, brake repairs, diagnostics, tyre fitting and air conditioning in Bermondsey, SE1. Honest work, fair prices.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "mot-testing",
      title: "MOT Testing",
      subtitle: "DVSA-Approved Test Centre",
      description:
        "As a DVSA-approved MOT test centre, we carry out Class 4 MOT tests for cars and light commercial vehicles. Our testers are thorough but fair — we will never fail your vehicle on something that does not need failing. If your car does need work, we will explain exactly what is required and give you an honest quote before proceeding.",
      features: [
        "DVSA-approved Class 4 test centre",
        "While-you-wait MOT tests (around 45 minutes)",
        "Clear explanation of any advisories or failures",
        "No-obligation repair quotes if work is needed",
        "MOT reminder service so you never forget",
        "Free re-test within 10 working days",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "full-servicing",
      title: "Full Servicing",
      subtitle: "Interim & Full Service Options",
      description:
        "Regular servicing keeps your car running reliably and holds its value. We offer both interim and full services to manufacturer specifications, using quality parts from trusted suppliers. We stamp your service book and keep a full digital record so your service history is always up to date.",
      features: [
        "Interim and full service options",
        "Servicing to manufacturer specifications",
        "Quality OE-equivalent or genuine parts",
        "Service book stamped and digital record kept",
        "All makes and models covered",
        "Competitive fixed-price servicing",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: "brake-repairs",
      title: "Brake Repairs",
      subtitle: "Safety You Can Rely On",
      description:
        "Your brakes are the most important safety feature on your car. We carry out full brake inspections, pad and disc replacements, caliper rebuilds, and brake fluid changes. We only fit quality branded parts — no cheap alternatives that could compromise your safety. If we spot brake wear during a service or MOT, we will let you know straight away.",
      features: [
        "Brake pad and disc replacement",
        "Caliper servicing and rebuilds",
        "Brake fluid testing and renewal",
        "Handbrake adjustment and repair",
        "Quality branded parts only",
        "Free brake inspection with any service",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      id: "diagnostics",
      title: "Diagnostics",
      subtitle: "Pinpoint the Problem Fast",
      description:
        "Dashboard warning light on? Strange noise? Loss of power? Our diagnostic equipment reads fault codes from all major vehicle systems — engine, ABS, airbag, transmission and more. We diagnose the actual problem before recommending any repairs, so you are never paying for guesswork. We cover all makes and models.",
      features: [
        "Engine management fault code reading",
        "ABS, airbag and transmission diagnostics",
        "Live data analysis and sensor testing",
        "Electrical fault finding",
        "All makes and models covered",
        "Clear explanation of findings and repair options",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "tyre-fitting",
      title: "Tyre Fitting",
      subtitle: "Leading Brands, Competitive Prices",
      description:
        "We supply and fit tyres from all the leading brands at prices that compete with the big chains. Whether you need a single replacement or a full set, we will help you choose the right tyre for your car and your budget. We also offer wheel balancing, alignment and puncture repairs.",
      features: [
        "Budget, mid-range and premium tyre brands",
        "Professional fitting and wheel balancing",
        "Four-wheel alignment checks",
        "Puncture repairs where safe to do so",
        "Tyre pressure monitoring system (TPMS) servicing",
        "Part-worn tyres available on request",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      id: "air-conditioning",
      title: "Air Conditioning",
      subtitle: "Stay Cool All Year Round",
      description:
        "Car air conditioning systems lose refrigerant over time, so even if nothing is broken, your air con can gradually become less effective. We offer a full re-gas service as well as leak testing and component repairs. Do not put up with a stuffy car — book an air con service and feel the difference.",
      features: [
        "Air conditioning re-gas (R134a and R1234yf)",
        "Leak detection and repair",
        "Compressor, condenser and evaporator repairs",
        "Cabin filter replacement",
        "Full system performance testing",
        "Works on all vehicle makes and models",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Complete Garage Services</h1>
            <p className="text-xl text-gray-200 leading-relaxed">From MOT tests to engine diagnostics, our team of experienced mechanics provides a full range of services for all makes and models. No jargon, no upselling &mdash; just quality work.</p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">What We Offer</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Whether it is a routine service or an unexpected breakdown, we have the skills and equipment to get you back on the road. All work comes with our workmanship guarantee.</p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-[var(--primary)] mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">{service.title}</h3>
                  <p className="text-[var(--accent)] font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/car-mechanic-bermondsey/contact" className="bg-[var(--accent)] text-white px-6 py-3 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Book This Service</Link>
                </div>
                <div className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-sm flex items-center justify-center">
                    <div className="text-white opacity-20 scale-150">{service.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Simple, Straightforward Process</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">1</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Book In</h3>
              <p className="text-gray-600">Give us a call, send an email or use our online form to book your vehicle in at a time that suits you.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">2</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Drop Off</h3>
              <p className="text-gray-600">Bring your car to us. We will go over everything with you and confirm the work to be done. No surprises.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">3</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">We Fix It</h3>
              <p className="text-gray-600">Our mechanics get to work. If we find anything unexpected, we will call you before doing any additional work.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">4</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Collect</h3>
              <p className="text-gray-600">We text you when it is ready. Pay and drive away with peace of mind knowing the job has been done properly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Your Car Looked At?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book your MOT, service or repair today. We will get you back on the road quickly and at a fair price.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/car-mechanic-bermondsey/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors text-lg">Book Online</Link>
            <a href="tel:02079468810" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors text-lg">Call 020 7946 8810</a>
          </div>
        </div>
      </section>
    </>
  );
}
