import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Treatments | Gel Manicures, Nail Art, Acrylics & Spa",
  description:
    "Full treatment menu at Notting Hill Nail & Beauty Bar. Gel manicures, pedicures, bespoke nail art, acrylic extensions, BIAB and luxury spa treatments in London W11.",
  openGraph: {
    title: "Treatments | Notting Hill Nail & Beauty Bar",
    description:
      "Premium nail and beauty treatments in Notting Hill. VTCT qualified technicians using vegan-friendly products.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "gel-manicure",
      title: "Gel Manicure",
      subtitle: "Long-Lasting, Chip-Free Perfection",
      description:
        "Our signature gel manicure delivers a flawless, high-shine finish that lasts up to three weeks without chipping. We begin with nail shaping, cuticle care and hand massage before applying your chosen shade from our collection of over 200 colours. Whether you prefer classic French tips, bold statement colours or subtle nudes, we'll create the perfect finish.",
      features: [
        "Over 200 gel polish colours to choose from",
        "Includes nail shaping, cuticle care and hand massage",
        "Chip-free for up to 3 weeks",
        "Safe, gentle removal with no damage to natural nails",
        "Custom colour mixing available on request",
        "Express 30-minute option available",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: "gel-pedicure",
      title: "Gel Pedicure",
      subtitle: "Complete Foot Pampering",
      description:
        "Treat your feet to our luxurious gel pedicure. We begin with a warm foot soak infused with essential oils, followed by exfoliation, callus treatment, cuticle care and a relaxing foot and calf massage. Finished with a flawless gel polish application, your feet will look and feel incredible.",
      features: [
        "Warm foot soak with essential oils",
        "Gentle exfoliation and callus removal",
        "Professional cuticle care and nail shaping",
        "Relaxing foot and calf massage",
        "Gel polish in your chosen shade",
        "Add-on hot stone massage available",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      id: "nail-art",
      title: "Nail Art",
      subtitle: "Wearable Art, Designed for You",
      description:
        "Our nail art specialists create bespoke designs that turn your nails into miniature works of art. From delicate hand-painted florals and intricate geometric patterns to chrome finishes, ombre fades and encapsulated glitter — if you can dream it, we can create it. Bring your own inspiration or let our artists design something unique.",
      features: [
        "Hand-painted bespoke designs by trained artists",
        "Stamping, foil, chrome and ombre techniques",
        "3D nail art and encapsulated designs",
        "Swarovski crystal and gem embellishments",
        "Recreate any design from Instagram or Pinterest",
        "Available on gel, acrylic or BIAB base",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      id: "acrylic-extensions",
      title: "Acrylic Extensions",
      subtitle: "Length, Strength & Shape",
      description:
        "Professional acrylic nail extensions sculpted to your desired length and shape. Whether you want elegant almond, dramatic stiletto, trendy coffin or classic square, our technicians create durable, beautiful extensions that look completely natural. Perfect for special occasions or everyday glam.",
      features: [
        "Full set or infill appointments available",
        "Any shape: coffin, almond, stiletto, square, ballerina",
        "Short, medium or long lengths",
        "Colour acrylic and glitter options",
        "Gel polish overlay included",
        "Aftercare guidance for lasting results",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "biab",
      title: "BIAB (Builder in a Bottle)",
      subtitle: "Strengthen & Protect Your Natural Nails",
      description:
        "BIAB is the revolutionary gel overlay that strengthens your natural nails while they grow underneath. Ideal for nail biters, those with weak or brittle nails, or anyone who wants the look of gel with the benefit of natural nail growth. It's thinner than acrylic but stronger than regular gel, giving you the best of both worlds.",
      features: [
        "Promotes natural nail growth underneath",
        "Ideal for weak, brittle or bitten nails",
        "Available in clear, nude and coloured options",
        "Can be shaped and filed like extensions",
        "Lasts 3-4 weeks between appointments",
        "Safe, gentle removal process",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "luxury-spa-treatments",
      title: "Luxury Spa Treatments",
      subtitle: "Pure Indulgence for Hands & Feet",
      description:
        "Our luxury spa treatments take pampering to the next level. Choose from our signature hand spa with hot stone massage and paraffin dip, our deluxe foot spa with reflexology techniques, or combine both for the ultimate relaxation experience. All treatments use premium aromatherapy oils and organic products.",
      features: [
        "Hot stone hand and foot massage",
        "Paraffin wax dip for deep hydration",
        "Aromatherapy oils and organic products",
        "Reflexology-inspired pressure point techniques",
        "Perfect for bridal parties and special occasions",
        "Gift vouchers available",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Treatments</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Full Treatment Menu</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From classic gel manicures to bespoke nail art and luxury spa treatments.
              Every service delivered by VTCT qualified technicians using vegan-friendly products.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Nail & Beauty Services</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every treatment is tailored to you. We take the time to understand exactly what
              you want and deliver results that exceed your expectations.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-accent font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/nail-salon-notting-hill/contact" className="btn-accent">Book This Treatment</Link>
                </div>
                <div className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center">
                    <div className="text-white opacity-20 scale-150">{service.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Your Visit</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What to Expect</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">1</div>
              <h3 className="text-xl font-bold text-primary mb-2">Book Online</h3>
              <p className="text-gray-600">Choose your treatment and preferred time. We&apos;ll confirm your appointment instantly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">2</div>
              <h3 className="text-xl font-bold text-primary mb-2">Consultation</h3>
              <p className="text-gray-600">Your technician discusses your desired look, nail health and any inspiration images.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">3</div>
              <h3 className="text-xl font-bold text-primary mb-2">Treatment</h3>
              <p className="text-gray-600">Sit back, relax and enjoy your treatment in our beautiful, calming salon.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">4</div>
              <h3 className="text-xl font-bold text-primary mb-2">Show Off</h3>
              <p className="text-gray-600">Leave with nails you&apos;ll want to show the world. Don&apos;t forget to tag us on Instagram!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Beautiful Nails?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your appointment today. Walk-ins welcome, but booking guarantees your preferred time and technician.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/nail-salon-notting-hill/contact" className="btn-accent">Book Now</Link>
            <a href="tel:02079463678" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 3678</a>
          </div>
        </div>
      </section>
    </>
  );
}
