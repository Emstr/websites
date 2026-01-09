import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alterations & Repairs',
  description:
    'Expert alterations and clothing repairs in Shoreditch by master tailor Orhan. Free consultations. Suit alterations, dress alterations, hemming, and more. All genders welcome.',
};

const services = [
  {
    name: 'Suit Alterations',
    items: [
      'Taking in or letting out jackets and trousers',
      'Sleeve and trouser length adjustments',
      'Shoulder adjustments',
      'Waist suppression',
      'Button repositioning',
      'Lining repairs and replacements',
    ],
  },
  {
    name: 'Dress Alterations',
    items: [
      'Hemming and length adjustments',
      'Taking in or letting out seams',
      'Strap adjustments',
      'Zip replacements',
      'Bust and waist alterations',
      'Wedding dress alterations',
    ],
  },
  {
    name: 'General Alterations',
    items: [
      'Trouser and jean hemming',
      'Shirt alterations',
      'Coat alterations',
      'Skirt alterations',
      'Curtain hemming',
      'General repairs',
    ],
  },
];

export default function AlterationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Expert Alterations</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Alterations & Repairs
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
              Expert alterations and clothing repairs by master tailor Orhan
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Free consultations for all alterations. Bring your garments to life with perfect fit and professional repairs.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-primary px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-lg transform hover:scale-105"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Orhan for Alterations?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master craftsmanship applied to every alteration, no matter how small
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold">
                <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Expert Craftsmanship</h3>
              <p className="text-gray-600 leading-relaxed">
                Orhan brings decades of high-end tailoring experience to every alteration. Previously worked for Vivienne Westwood.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold">
                <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Free Consultations</h3>
              <p className="text-gray-600 leading-relaxed">
                Come in for a free consultation. We'll assess your garment, discuss options, and provide clear pricing before any work begins.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold">
                <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Quick Turnaround</h3>
              <p className="text-gray-600 leading-relaxed">
                Most alterations completed within 1-2 weeks. Rush services available for urgent requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Alteration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple hems to complex structural alterations, we handle it all with expertise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.name} className="bg-white border-2 border-gold/20 rounded-lg p-6 hover:border-gold transition-colors">
                <h3 className="text-xl font-semibold text-primary mb-4 pb-3 border-b-2 border-gold/20">
                  {service.name}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-700 text-lg mb-4">
              Don't see what you're looking for? We handle all types of alterations and repairs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary hover:text-gold font-semibold text-lg transition-colors"
            >
              Contact Us About Your Needs
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600">
                Simple, straightforward process from consultation to collection
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Visit Our Studio</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bring your garment to our Shoreditch studio. Walk-ins welcome, or book an appointment for guaranteed immediate service.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Free Consultation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Orhan or Denise will assess your garment, discuss what needs to be done, and provide clear pricing. No hidden costs.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Expert Alterations</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your garment is carefully altered using professional techniques. Most alterations completed within 1-2 weeks.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Collection & Fitting</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Collect your garment and try it on. If any final adjustments are needed, we'll make sure everything is perfect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Specialist Services
              </h2>
              <div className="space-y-6">
                <div className="bg-white border-2 border-gold/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Wedding Dress Alterations</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Specialist alterations for wedding dresses, bridesmaid dresses, and formal gowns. We understand the importance of perfection on your special day.
                  </p>
                </div>
                <div className="bg-white border-2 border-gold/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Designer Garment Alterations</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Trusted to alter high-end designer pieces with the care and expertise they deserve. Orhan's background includes working for Vivienne Westwood.
                  </p>
                </div>
                <div className="bg-white border-2 border-gold/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Vintage Clothing Repairs</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Careful restoration and alteration of vintage and heirloom garments, preserving their character while ensuring wearability.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-lg text-cream">
              <h3 className="text-2xl font-bold mb-6 text-gold">Pricing</h3>
              <div className="space-y-4 mb-8">
                <p className="leading-relaxed">
                  We offer competitive and transparent pricing for all alterations. Costs vary depending on the complexity of the work required.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free consultation and quote</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No hidden costs - clear pricing upfront</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Payment only upon collection</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Rush service available for urgent work</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-gold/30 pt-6">
                <h4 className="font-semibold mb-3 text-gold">Opening Hours</h4>
                <div className="space-y-2 text-sm">
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 10:30am - 3pm</p>
                  <p className="text-xs text-gray-300 mt-3">Walk-ins welcome, or call ahead to book a specific time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Perfect Your Garments?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Bring your clothing to our Shoreditch studio for a free consultation. Whether it's a simple hem or complex alterations, we'll ensure your garments fit perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-primary px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-lg transform hover:scale-105"
            >
              Visit Us or Book Appointment
            </Link>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:02072503569" className="text-lg text-gold hover:text-gold-light transition-colors">
                020 7250 3569
              </a>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-300">
            25a Pitfield Street, Shoreditch, London N1 6HB (Near Old Street Station)
          </p>
        </div>
      </section>
    </>
  );
}
