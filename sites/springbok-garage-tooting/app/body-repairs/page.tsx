import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Body Repairs',
  description:
    'Professional body repairs and accident damage repair in Tooting. Insurance approved. We deal with insurers directly. 60+ years of trusted bodywork expertise.',
};

export default function BodyRepairsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg className="w-16 h-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Body Repairs & Accident Damage
            </h1>
            <p className="text-xl text-gray-200">
              Expert bodywork and collision repairs. Insurance approved with over 60 years of experience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Insurance Approved Body Repair Centre
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Springbok Garage, we've been restoring vehicles to their former glory for over six decades.
              Our body shop is equipped with the latest technology and staffed by skilled craftsmen who take
              pride in their work. We're approved by all major insurance companies and handle everything from
              minor dents to major accident damage.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Insurance Claims</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>We deal directly with your insurance company</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Approved by all major insurers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No excess payment for non-fault claims</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free estimates and assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Courtesy cars available</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Repair Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Panel beating and dent removal</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Professional spray painting and color matching</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Bumper repairs and replacement</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Scratch and scuff removal</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Welding and structural repairs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-accent/5 border-l-4 border-accent rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Our Body Shop?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  60+ Years of Experience
                </h4>
                <p className="text-gray-700">
                  Since 1963, we've been repairing vehicles with the same attention to detail and craftsmanship.
                  Our family business takes pride in every repair.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Insurance Industry Trusted
                </h4>
                <p className="text-gray-700">
                  Our strong reputation with insurance companies means faster claims processing and stress-free repairs for you.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  Quality Guarantee
                </h4>
                <p className="text-gray-700">
                  All our bodywork is guaranteed. We use only quality parts and materials to ensure lasting repairs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                  Courtesy Cars
                </h4>
                <p className="text-gray-700">
                  We understand you need to stay mobile. Courtesy cars are available while we repair your vehicle.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Our Repair Process</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Assessment & Quote</h4>
                  <p className="text-gray-700">
                    Bring your vehicle in for a free assessment. We'll provide a detailed quote and liaise with your insurer if needed.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Approval & Scheduling</h4>
                  <p className="text-gray-700">
                    Once approved, we'll schedule the work at a time convenient for you and arrange a courtesy car if needed.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Expert Repairs</h4>
                  <p className="text-gray-700">
                    Our skilled technicians restore your vehicle to pre-accident condition using quality parts and modern techniques.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Quality Check & Handover</h4>
                  <p className="text-gray-700">
                    Every repair is thoroughly checked before we return your vehicle. We'll explain all work completed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Body Repairs?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact us for a free assessment and quote. Whether it's insurance work or private repair, we're here to help.
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
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
