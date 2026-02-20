import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interior Design Services | Home Design, Kitchens, Colour & Styling",
  description:
    "Full range of interior design services in Islington, N1. Full home design, kitchen and bathroom design, colour consultations, space planning, styling and staging, and commercial interiors.",
  openGraph: {
    title: "Interior Design Services | Islington Interiors",
    description:
      "Award-winning interior design services in Islington. Home design, kitchens, bathrooms, colour consultations, space planning and commercial interiors.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "full-home-design",
      title: "Full Home Design",
      subtitle: "Concept to Completion",
      description:
        "Our full home design service takes you from initial concept to a beautifully finished space. We begin with an in-depth consultation to understand your lifestyle, tastes and aspirations, then develop a comprehensive design scheme covering every room. From spatial planning and material specification to furniture selection and final accessorising, we manage the entire process so you can sit back and watch your home transform.",
      features: [
        "In-depth lifestyle and taste consultation",
        "Detailed concept boards and 3D visualisations",
        "Material, finish and furniture specification",
        "Trade coordination and project management",
        "Procurement and delivery management",
        "Final styling and accessorising",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "kitchen-bathroom-design",
      title: "Kitchen & Bathroom Design",
      subtitle: "Bespoke Rooms That Work Beautifully",
      description:
        "Kitchens and bathrooms are the hardest rooms to get right and the most rewarding when you do. We design bespoke kitchens and bathrooms that balance aesthetics with functionality, sourcing the finest cabinetry, worktops, tiles, sanitaryware and fittings. We manage the build from demolition to final snagging, coordinating plumbers, electricians, tilers and joiners on your behalf.",
      features: [
        "Bespoke kitchen layout and cabinetry design",
        "Bathroom design with premium sanitaryware",
        "Worktop, tile and finish selection",
        "Lighting design for task and ambience",
        "Full trade coordination and site management",
        "Snagging and quality assurance",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      id: "colour-consultations",
      title: "Colour Consultations",
      subtitle: "The Right Palette Changes Everything",
      description:
        "Colour has the power to transform a room. Our colour consultation service is ideal if you know something is not quite right but cannot put your finger on what. We assess your space, consider the natural light at different times of day, and recommend a palette that complements your existing furnishings and enhances the mood of each room. We work with all major paint brands and can source samples for you to try.",
      features: [
        "On-site assessment of natural and artificial light",
        "Harmonised palette for individual rooms or whole home",
        "Consideration of existing furniture, flooring and art",
        "Paint brand recommendations and sample sourcing",
        "Written colour schedule with finish specifications",
        "Follow-up support during painting",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a6 6 0 00-6-6H7" />
        </svg>
      ),
    },
    {
      id: "space-planning",
      title: "Space Planning",
      subtitle: "Optimise Every Square Metre",
      description:
        "Good space planning is the foundation of good design. Before choosing a single fabric or paint colour, we analyse how you move through your home and identify opportunities to improve flow, maximise storage and bring in more natural light. This service is particularly valuable for open-plan conversions, loft extensions and small London flats where every centimetre counts.",
      features: [
        "Detailed floor plan analysis and measurement",
        "Traffic flow and circulation studies",
        "Furniture layout options with scaled drawings",
        "Storage solutions and built-in design",
        "Natural light optimisation strategies",
        "Advice for planning applications and architectural changes",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      id: "styling-staging",
      title: "Styling & Staging",
      subtitle: "The Finishing Touches That Make a Home",
      description:
        "Whether you are preparing a property for sale, dressing a rental, or simply want your home to feel finished, our styling service adds the layers of personality and texture that make a space feel lived-in and loved. We source cushions, throws, artwork, books, plants and decorative objects that bring your design scheme together and create that effortless, magazine-worthy look.",
      features: [
        "Property staging for sale or rental",
        "Accessory and artwork sourcing",
        "Soft furnishings selection and placement",
        "Plant styling and greenery planning",
        "Shelf and surface styling",
        "Photography preparation for estate agents",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      id: "commercial-interiors",
      title: "Commercial Interiors",
      subtitle: "Spaces That Work as Hard as You Do",
      description:
        "We design commercial interiors that reflect your brand identity and create productive, inspiring environments. From offices and co-working spaces to restaurants, boutiques and clinics, we understand the unique requirements of commercial projects including compliance, accessibility, branding integration and employee wellbeing. We work within your timescales and budget to deliver spaces that impress clients and motivate teams.",
      features: [
        "Brand-aligned design concepts",
        "Office layout and workstation planning",
        "Reception, meeting room and breakout area design",
        "Retail and hospitality interior design",
        "Compliance and accessibility considerations",
        "Phased installation to minimise business disruption",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Interior Design Services</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Whether you need a single room refreshed or an entire property redesigned, our award-winning team creates spaces that are beautiful, functional and uniquely yours.</p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">How We Can Help</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every project is different, but our approach is always the same: listen carefully, design thoughtfully, and deliver impeccably. Here is an overview of our core services.</p>
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
                  <Link href="/interior-designer-islington/contact" className="bg-[var(--accent)] text-white px-6 py-3 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Discuss Your Project</Link>
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
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">How We Work</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">1</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Consultation</h3>
              <p className="text-gray-600">We meet at your property to discuss your vision, assess the space, and understand your lifestyle, budget and timeline.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">2</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Concept</h3>
              <p className="text-gray-600">We develop mood boards, layouts and material palettes that capture the look and feel of your new space for your approval.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">3</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Delivery</h3>
              <p className="text-gray-600">We source materials, coordinate trades and manage the project from start to finish, keeping you informed at every stage.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">4</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Styling</h3>
              <p className="text-gray-600">We add the finishing touches &mdash; accessories, artwork, soft furnishings &mdash; that bring the design to life and make it feel like home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a complimentary consultation at our Islington studio. We would love to hear about your space and explore how we can transform it.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/interior-designer-islington/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors text-lg">Book a Consultation</Link>
            <a href="tel:02079466670" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors text-lg">Call 020 7946 6670</a>
          </div>
        </div>
      </section>
    </>
  );
}
