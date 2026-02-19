import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Prices | Cuts, Shaves & Grooming",
  description:
    "Full range of barber services in Soho, London. Classic cuts, hot towel shaves, beard trims, hair styling, colour work and wedding grooming packages.",
  openGraph: {
    title: "Services & Prices | Soho Barber Co",
    description:
      "Premium barber services in Soho. Classic cuts, hot towel shaves, beard trims and grooming by master barbers.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "classic-cuts",
      title: "Classic Cuts",
      subtitle: "Precision Haircuts for Every Style",
      description:
        "Our signature service. Whether you want a textured crop, a slick side part, a skin fade or a classic gentleman's cut, our master barbers will deliver exactly what you're after. Every cut includes a consultation, wash and styled finish.",
      features: [
        "Personalised consultation before every cut",
        "Wash and conditioning treatment included",
        "Skin fades, tapers and scissor cuts",
        "Textured crops, pompadours and classic styles",
        "Styled finish with premium products",
        "Complimentary neck shave and lineup",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
        </svg>
      ),
    },
    {
      id: "beard-trims",
      title: "Beard Trims & Shaping",
      subtitle: "Expert Facial Hair Grooming",
      description:
        "A well-groomed beard makes all the difference. Our barbers are experts at sculpting, trimming and shaping facial hair to suit your face shape. We use precision clippers and scissors to define your neckline, cheek line and overall profile.",
      features: [
        "Precision trimming with clippers and scissors",
        "Neckline and cheek line definition",
        "Beard shaping to suit your face",
        "Hot towel application for comfort",
        "Beard oil and balm conditioning",
        "Moustache trimming and styling",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      id: "hot-towel-shaves",
      title: "Hot Towel Shaves",
      subtitle: "The Traditional Gentleman's Shave",
      description:
        "Our signature hot towel shave is the ultimate barbershop experience. Multiple hot towel applications soften the skin and hair, followed by a rich lather and a cut-throat razor shave. Finished with cold towel and premium aftershave balm.",
      features: [
        "Multiple hot towel applications",
        "Premium shaving cream and lather",
        "Cut-throat razor for the closest shave",
        "Cold towel and toner finish",
        "Aftershave balm and moisturiser",
        "Full 30-minute relaxation experience",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
    },
    {
      id: "hair-styling",
      title: "Hair Styling",
      subtitle: "Modern Looks, Classic Techniques",
      description:
        "Need to look sharp for a meeting, night out or special event? Our styling service goes beyond a basic cut. We work with you to create the perfect look using premium styling products, blow-drying techniques and expert finishing.",
      features: [
        "Blow-dry and styling included",
        "Premium product selection (clay, pomade, wax)",
        "Advice on maintaining your style at home",
        "Event-ready looks and formal styling",
        "Texture and volume techniques",
        "Product recommendations for your hair type",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      id: "colour-grey-blending",
      title: "Colour & Grey Blending",
      subtitle: "Refresh Your Look Naturally",
      description:
        "Whether you want to cover grey or add subtle colour, our barbers deliver natural-looking results. Grey blending reduces silver tones without eliminating them completely, giving you a fresher, more youthful appearance that looks entirely natural.",
      features: [
        "Subtle grey blending and camouflage",
        "Natural-looking colour results",
        "Semi-permanent colour options",
        "Processing time just 10-15 minutes",
        "Covers grey without the 'dyed' look",
        "Colour consultation and patch test",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: "wedding-grooming",
      title: "Wedding & Event Grooming",
      subtitle: "Look Your Best on the Big Day",
      description:
        "Your wedding day calls for more than a quick trim. Our wedding grooming packages cover the groom and the full wedding party. We offer trial sessions, on-the-day grooming and packages that include cuts, shaves and styling for the whole group.",
      features: [
        "Pre-wedding trial session included",
        "Groom and groomsmen packages",
        "Cut, hot towel shave and styling",
        "Flexible scheduling around your day",
        "Premium products and finishing",
        "Group booking discounts available",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Services &amp; Prices
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From a quick trim to a full grooming experience, every service is
              delivered by master barbers using premium products and traditional
              techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              What We Offer
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every service comes with a consultation to make sure we deliver exactly
              what you want. No rush, no shortcuts &mdash; just quality barbering.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-[var(--primary)] mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[var(--accent)] font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/barber-soho/contact" className="bg-[var(--accent)] text-white px-6 py-3 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">
                    Book This Service
                  </Link>
                </div>
                <div
                  className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-video bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-sm flex items-center justify-center">
                    <div className="text-white opacity-20 scale-150">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              The Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">
              What to Expect
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Walk In or Book</h3>
              <p className="text-gray-600">
                Drop in any time we&apos;re open or book ahead online. Either way,
                you&apos;ll be seen by a master barber.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Consultation</h3>
              <p className="text-gray-600">
                We discuss what you want and offer expert advice based on your hair
                type, face shape and personal style.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">The Cut</h3>
              <p className="text-gray-600">
                Sit back, relax and enjoy. We take our time to get every detail
                right, using premium tools and products.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Finish &amp; Style</h3>
              <p className="text-gray-600">
                We finish with precision detailing, product styling and make sure
                you leave looking and feeling sharp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Fresh Look?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Walk in or book ahead. Our Soho shop is open seven days a week for
            your convenience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/barber-soho/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">
              Book Your Chair
            </Link>
            <a href="tel:02079467890" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors">
              Call 020 7946 7890
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
