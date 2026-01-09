import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bespoke Suits',
  description:
    'Hand-crafted bespoke suits by master tailor Orhan in Shoreditch. Expertly tailored for all genders using finest fabrics. Previously worked for Vivienne Westwood. Free consultations.',
};

const suitStyles = [
  {
    name: 'Single-Breasted',
    description: 'Classic and versatile, perfect for business and formal occasions.',
  },
  {
    name: 'Double-Breasted',
    description: 'Traditional elegance with a bold, sophisticated silhouette.',
  },
  {
    name: 'Three-Piece',
    description: 'Complete with waistcoat for the ultimate formal look.',
  },
  {
    name: 'Two-Piece',
    description: 'Timeless jacket and trouser combination for any occasion.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description:
      'Free consultation to discuss your vision, style preferences, and occasion. View fabric samples and discuss design details.',
  },
  {
    number: '02',
    title: 'Measurements & Design',
    description:
      'Precise measurements taken by Orhan. Discuss lapel style, buttons, pockets, and every detail that makes your suit unique.',
  },
  {
    number: '03',
    title: 'First Fitting',
    description:
      'Try on your basted suit. We refine the fit and make any necessary adjustments to ensure perfection.',
  },
  {
    number: '04',
    title: 'Final Fitting & Collection',
    description:
      'Final fitting to ensure absolute perfection. Minor adjustments if needed, then collect your completed masterpiece.',
  },
];

export default function BespokeSuitsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Master Craftsmanship</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bespoke Suits
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Hand-crafted suits tailored to your exact specifications by master tailor Orhan. Each suit is a unique work of art, created using traditional techniques and the finest fabrics.
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

      {/* Why Bespoke */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Bespoke?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A bespoke suit is more than clothing - it's an investment in quality, fit, and personal style
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold">
                <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Perfect Fit</h3>
              <p className="text-gray-600 leading-relaxed">
                Every measurement is taken precisely. Your suit is cut and tailored specifically for your body, ensuring unparalleled comfort and appearance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold">
                <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Your Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose every detail: fabric, lining, buttons, lapels, pockets, and more. Create a suit that truly reflects your personal style and needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold">
                <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Hand-crafted using traditional techniques and finest fabrics. Built to last for years, maintaining its shape and elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suit Styles */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Suit Styles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From classic to contemporary, we create suits for every occasion and preference
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suitStyles.map((style) => (
              <div key={style.name} className="bg-white border-2 border-gold/20 rounded-lg p-6 hover:border-gold transition-colors">
                <h3 className="text-xl font-semibold text-primary mb-3">{style.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{style.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-br from-primary to-secondary text-cream p-8 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 text-gold">For All Genders</h3>
              <p className="text-lg leading-relaxed">
                We create bespoke suits for all genders. Whether you're looking for a traditional cut or something more contemporary, Orhan will work with you to create the perfect suit that makes you feel confident and looks impeccable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              The Bespoke Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating your perfect suit is a journey we'll take together
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Typical timeframe: 4-8 weeks from initial consultation to completion
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary hover:text-gold font-semibold text-lg transition-colors"
            >
              Start Your Journey Today
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Fabrics */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Premium Fabrics
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  We source the finest fabrics from renowned mills around the world. Choose from:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>British Wool:</strong> Classic suiting fabrics with exceptional durability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Italian Fabrics:</strong> Luxurious textures and vibrant colors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Summer Linens:</strong> Breathable and elegant for warmer months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Wool-Cashmere Blends:</strong> Supreme comfort and luxury</span>
                  </li>
                </ul>
                <p className="text-lg pt-4">
                  During your consultation, you'll have access to our full range of fabric samples to find the perfect material for your suit.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-lg text-cream">
              <h3 className="text-2xl font-bold mb-6 text-gold">What's Included</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Precise measurements by master tailor Orhan</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multiple fittings to ensure perfection</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hand-finished details and buttonholes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Premium quality linings and interlinings</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complimentary alterations within first 3 months</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Bespoke Suit?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Book a free consultation with Orhan to discuss your vision and begin creating your perfect bespoke suit. No obligation, just expert advice and decades of experience at your service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-primary px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-lg transform hover:scale-105"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/about"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors border-2 border-gold"
            >
              Learn About Orhan
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-gold">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:02072503569" className="text-lg hover:text-gold-light transition-colors">
              020 7250 3569
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
