import Link from 'next/link';

const services = [
  {
    name: 'Bespoke Suits',
    description: 'Hand-crafted suits tailored to your exact specifications. Each piece is a work of art.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    href: '/bespoke-suits',
  },
  {
    name: 'Occasionwear',
    description: 'Stunning occasion dresses and formal attire for all genders. Make every moment memorable.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    href: '/occasionwear',
  },
  {
    name: 'Weddingwear',
    description: 'Bespoke wedding suits and dresses designed to make your special day perfect.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    href: '/occasionwear#wedding',
  },
  {
    name: 'Alterations',
    description: 'Expert alterations and repairs. Free consultations to ensure perfect fit.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    href: '/alterations',
  },
];

const testimonials = [
  {
    name: 'James M.',
    service: 'Bespoke Suit',
    text: 'Orhan created the most incredible suit I\'ve ever owned. The attention to detail and craftsmanship is extraordinary. Worth every penny.',
    rating: 5,
  },
  {
    name: 'Sarah L.',
    service: 'Wedding Dress',
    text: 'Orhan and Denise made my dream wedding dress come to life. They listened to every detail and the result was beyond my expectations. Absolutely stunning work.',
    rating: 5,
  },
  {
    name: 'Alex T.',
    service: 'Alterations',
    text: 'Found Orhan through a friend\'s recommendation. The alterations were perfect and the service was incredibly welcoming. Will definitely be back for a bespoke suit!',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-cream py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <svg className="w-16 h-16 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6h12M6 10h12M6 14h12M6 18h12M3 6h1M3 10h1M3 14h1M3 18h1" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Master Bespoke Tailor
              <span className="block text-gold mt-3 text-4xl md:text-5xl lg:text-6xl">in Shoreditch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
              Orhan - Previously worked for Vivienne Westwood and dressed Princess Diana
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Hand-crafted bespoke suits, occasion dresses, and weddingwear. Expertly tailored for all genders in the heart of Shoreditch's creative hub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                Orhan's Story
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Est. 2007</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>All Genders Welcome</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Near Old Street Station</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-6">
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Prestigious Heritage</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                A Master Craftsman with Royal & Fashion Credentials
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  Orhan brings decades of experience from the highest echelons of British fashion and society. Having worked for the legendary <strong>Vivienne Westwood</strong> and with the honour of dressing <strong>Princess Diana</strong>, Orhan established his own atelier in Shoreditch in 2007.
                </p>
                <p className="mb-4">
                  Together with Denise, Orhan has created a welcoming space where traditional craftsmanship meets modern, inclusive values. Every garment is hand-crafted with meticulous attention to detail, ensuring each piece is unique and perfectly fitted.
                </p>
                <p className="text-gold font-semibold">
                  Experience the artistry of a master tailor who has dressed royalty and worked with fashion icons.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary hover:text-gold font-semibold text-lg transition-colors"
                >
                  Read Orhan's Full Story
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg text-center text-cream">
                <div className="text-4xl font-bold text-gold mb-2">17+</div>
                <div className="text-sm">Years in Shoreditch</div>
              </div>
              <div className="bg-gradient-to-br from-gold to-gold-light p-6 rounded-lg text-center text-primary">
                <div className="text-4xl font-bold mb-2">VW</div>
                <div className="text-sm font-semibold">Vivienne Westwood Alumni</div>
              </div>
              <div className="bg-gradient-to-br from-gold to-gold-light p-6 rounded-lg text-center text-primary">
                <div className="text-4xl font-bold mb-2">👑</div>
                <div className="text-sm font-semibold">Dressed Princess Diana</div>
              </div>
              <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg text-center text-cream">
                <div className="text-4xl font-bold text-gold mb-2">100%</div>
                <div className="text-sm">Hand-Crafted in London</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Bespoke Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From bespoke suits to occasion dresses, every piece is crafted with passion and precision
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="bg-white border-2 border-gold/20 rounded-lg p-6 hover:shadow-2xl hover:border-gold transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Orhan London?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tradition, expertise, and a modern inclusive approach to bespoke tailoring
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold">
                <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Master Craftsmanship</h3>
              <p className="text-gray-600 leading-relaxed">
                Decades of experience working with Vivienne Westwood and royalty. Each garment is a testament to traditional tailoring excellence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold">
                <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Inclusive & Creative</h3>
              <p className="text-gray-600 leading-relaxed">
                We welcome all genders and celebrate individuality. Our Shoreditch location reflects our creative, modern approach to traditional craft.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold">
                <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Personal Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Free consultations, attentive care, and dedication to making your vision reality. We take the time to understand exactly what you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why clients trust Orhan for their most important occasions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md border-2 border-gold/20 hover:border-gold transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gold/20 pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gold">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Visit Our Studio in Shoreditch
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Located in the heart of Shoreditch's creative hub, just moments from Old Street Station. Our studio welcomes clients from across London and beyond.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gold">Address</p>
                    <p className="text-gray-200">25a Pitfield Street, Shoreditch, London N1 6HB</p>
                    <p className="text-sm text-gray-300">(Near Old Street Station)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gold">Opening Hours</p>
                    <p className="text-gray-200">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-200">Saturday: 10:30am - 3pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gold">Contact</p>
                    <a href="tel:02072503569" className="text-gray-200 hover:text-gold transition-colors">
                      020 7250 3569
                    </a>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-gold hover:bg-gold-light text-primary px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-lg transform hover:scale-105"
              >
                Book Your Free Consultation
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border-2 border-gold">
              <h3 className="text-2xl font-semibold mb-6 text-gold">Why Visit Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">Free consultation for all services including alterations</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">Personal attention from master tailor Orhan and Denise</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">View fabric samples and discuss your vision</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">Welcoming, inclusive environment for all clients</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-200">Convenient location near Old Street and Shoreditch High Street</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
