import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Occasionwear & Weddingwear',
  description:
    'Bespoke occasion dresses, weddingwear, and formal attire for all genders by master tailor Orhan in Shoreditch. Hand-crafted for your special moments. Free consultations.',
};

const occasions = [
  {
    name: 'Wedding Dresses & Suits',
    description:
      'Make your special day perfect with a bespoke wedding dress or suit crafted to your exact vision.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Evening Gowns',
    description:
      'Stunning evening wear for galas, balls, and special events. Elegant, sophisticated, unforgettable.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    name: 'Cocktail Dresses',
    description:
      'Chic and stylish cocktail dresses for semi-formal events. Express your personality in style.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
        />
      </svg>
    ),
  },
  {
    name: 'Formal Suits',
    description:
      'Bespoke formal suits for all genders. Perfect for weddings, graduations, and special occasions.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
];

export default function OccasionwearPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">For Every Special Moment</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Occasionwear & Weddingwear
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Bespoke dresses and formal attire for all genders. Hand-crafted by master tailor Orhan to make your special occasions truly memorable.
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

      {/* Occasions */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Dressing Your Special Moments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whatever the occasion, we create garments that make you look and feel extraordinary
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occasion) => (
              <div
                key={occasion.name}
                className="bg-cream border-2 border-gold/20 rounded-lg p-6 hover:shadow-xl hover:border-gold transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-4 border-2 border-gold">
                    {occasion.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{occasion.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{occasion.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Section */}
      <section id="wedding" className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-6">
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Weddingwear</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Your Perfect Wedding Day
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Your wedding day deserves perfection. Orhan specializes in creating stunning bespoke wedding dresses and suits that reflect your unique style and make you feel absolutely beautiful.
                </p>
                <p>
                  From traditional white gowns to contemporary designs, from classic morning suits to modern tailored looks - we work with you to create the perfect wedding attire for all genders.
                </p>
                <div className="pt-4">
                  <h3 className="font-semibold text-primary mb-3 text-lg">Wedding Services Include:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Bespoke wedding dresses for all body types and styles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Wedding suits and morning suits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Bridesmaid and groomsmen attire coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Mother of the bride/groom outfits</span>
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
                      <span>Free consultations and expert advice</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-lg text-cream">
              <h3 className="text-2xl font-bold mb-6 text-gold">Why Choose Orhan for Your Wedding?</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <h4 className="font-semibold text-gold">Experience</h4>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed ml-7">
                    Orhan's background includes working for Vivienne Westwood and dressing Princess Diana - bringing royal-level expertise to your special day.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <h4 className="font-semibold text-gold">Personal Service</h4>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed ml-7">
                    Work directly with Orhan and Denise throughout the process. They'll understand your vision and bring it to life with care and attention.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <h4 className="font-semibold text-gold">Inclusive Approach</h4>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed ml-7">
                    All genders welcome. Whether you want a traditional look or something more contemporary, we celebrate your individuality.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <h4 className="font-semibold text-gold">Perfect Timing</h4>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed ml-7">
                    We recommend booking 6-9 months before your wedding to allow time for design, creation, and fittings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dressmaking */}
      <section id="dressmaking" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Bespoke Dressmaking
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to creation, we craft dresses that are uniquely yours
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold">
                <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Custom Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Work with Orhan to design your perfect dress. Choose every detail from neckline to hemline, fabric to embellishments.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold">
                <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Perfect Fit</h3>
              <p className="text-gray-600 leading-relaxed">
                Precise measurements and multiple fittings ensure your dress fits like a glove and flatters your figure beautifully.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold">
                <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Hand-Crafted Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Every dress is made by hand using traditional techniques and the finest materials for lasting quality and elegance.
              </p>
            </div>
          </div>
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-cream border-2 border-gold/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">What We Can Create</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cocktail dresses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Evening gowns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Prom dresses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ball gowns</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mother of the bride/groom dresses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Special event dresses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Red carpet looks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom formal wear</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Perfect Look?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Whether it's for a wedding, gala, or any special occasion, Orhan will work with you to create something truly extraordinary. Book a free consultation to start designing your dream dress or suit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-primary px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-lg transform hover:scale-105"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/bespoke-suits"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors border-2 border-gold"
            >
              View Bespoke Suits
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
