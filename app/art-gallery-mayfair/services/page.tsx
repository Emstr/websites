import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Art Gallery, Consultancy & Investment Advisory",
  description:
    "Contemporary exhibitions, art consultancy, corporate art, private viewings, art investment advisory, and framing services at Mayfair Fine Art on Cork Street.",
  openGraph: {
    title: "Our Services | Mayfair Fine Art",
    description:
      "Full-service art gallery on Cork Street — exhibitions, consultancy, corporate art, and investment advisory.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "contemporary-exhibitions",
      title: "Contemporary Exhibitions",
      subtitle: "Curated shows that define taste",
      description:
        "Our exhibition programme is the heartbeat of the gallery. Six to eight shows per year present emerging, mid-career, and established artists working across painting, sculpture, photography, and mixed media. Every exhibition is accompanied by a printed catalogue and private view evening. We are particularly known for identifying talent early — several artists who held their first solo show with us have gone on to international recognition.",
      features: [
        "Six to eight curated exhibitions annually",
        "Printed catalogue with critical essays",
        "Private view evenings for collectors",
        "Emerging and established artists",
        "Cross-disciplinary presentations",
        "International scouting for new talent",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "art-consultancy",
      title: "Art Consultancy",
      subtitle: "Expert guidance for collectors and designers",
      description:
        "Our consultancy service is tailored to the needs of private collectors, interior designers, and anyone seeking the perfect artwork for a specific context. We begin with a detailed conversation about your aesthetic preferences, the physical space, your budget, and your aspirations for the collection. From there, we present a curated shortlist of works — sourced from our own stock, directly from artists, or from the secondary market — and guide you through the acquisition process.",
      features: [
        "Bespoke sourcing for private clients",
        "Interior design collaborations",
        "Primary and secondary market access",
        "Condition reports and provenance research",
        "Budget-sensitive recommendations",
        "Ongoing collection management",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      id: "corporate-art",
      title: "Corporate Art",
      subtitle: "Art that transforms workplaces",
      description:
        "Great art in a workplace does more than decorate — it inspires, communicates values, and makes a statement about who you are. We work with businesses of all sizes, from start-ups choosing their first pieces to multinational firms curating entire collections. Our corporate clients include law firms, hotels, restaurants, medical practices, and tech companies across London. We handle everything: brief, sourcing, framing, installation, and ongoing rotation if required.",
      features: [
        "End-to-end corporate art solutions",
        "Office, hotel, and hospitality projects",
        "Art leasing and rotation programmes",
        "Site visits and space assessment",
        "Professional installation team",
        "Collection cataloguing and insurance guidance",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "private-viewings",
      title: "Private Viewings",
      subtitle: "Exclusive access, unhurried experience",
      description:
        "A private viewing allows you to experience art without distraction. Whether you are considering a significant purchase, hosting a client, or simply want to explore the current exhibition at your own pace, we open the gallery exclusively for you. Our director or a senior curator will guide the viewing, providing context on the work, the artist, and the market. Private viewings can be arranged during or outside gallery hours, including evenings and weekends by appointment.",
      features: [
        "One-to-one or small group viewings",
        "Director or senior curator guided",
        "Available outside gallery hours",
        "VIP preview access before public openings",
        "Complimentary refreshments",
        "Portfolio presentations from represented artists",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      id: "art-investment-advisory",
      title: "Art Investment Advisory",
      subtitle: "Art as an alternative asset class",
      description:
        "Art has consistently outperformed many traditional asset classes over the long term, and demand for credible art investment advice is growing. Our advisory service is designed for high-net-worth individuals and family offices who want to incorporate art into a diversified portfolio. We provide market analysis, artist trajectory assessments, acquisition strategy, and exit planning. We do not sell funds or fractional ownership — we help you buy real art that you can live with and enjoy while it appreciates.",
      features: [
        "Portfolio construction and diversification",
        "Artist trajectory and market analysis",
        "Acquisition strategy and negotiation",
        "Auction advisory and bidding",
        "Exit strategy and resale planning",
        "Collection valuation and insurance review",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: "framing-installation",
      title: "Framing & Installation",
      subtitle: "Museum-quality presentation",
      description:
        "How a work is framed and hung matters enormously. A poor frame can diminish a masterpiece; the right one elevates everything. We work with London's leading conservation framers to provide museum-quality framing for works on paper, canvas, and photographs. Our installation team handles everything from a single domestic hanging to a multi-floor corporate project, using archival-grade materials and professional lighting. We also offer conservation advice for older or fragile works.",
      features: [
        "Museum-quality conservation framing",
        "Professional hanging and installation",
        "Archival-grade materials throughout",
        "Lighting design and consultation",
        "Domestic and commercial projects",
        "Conservation assessment for older works",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  const process = [
    {
      step: "01",
      title: "Conversation",
      description: "We listen. Whether you are a first-time buyer or a seasoned collector, it starts with understanding what you are looking for.",
    },
    {
      step: "02",
      title: "Curation",
      description: "We present a tailored selection of works — from our gallery, directly from artists, or sourced from the wider market.",
    },
    {
      step: "03",
      title: "Acquisition",
      description: "We handle negotiation, provenance checks, condition reports, and all the paperwork to ensure a smooth purchase.",
    },
    {
      step: "04",
      title: "Presentation",
      description: "Professional framing, delivery, installation, and lighting. Your artwork arrives ready to enjoy from the moment it is on the wall.",
    },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Gallery Services</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From curated exhibitions to art investment advisory, we offer a
              complete range of services for collectors, businesses, and design professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="service-icon">{service.icon}</div>
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                      {service.subtitle}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                  <div className="gold-line mb-6"></div>
                  <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  <Link href="/art-gallery-mayfair/contact" className="btn-accent">
                    Enquire About This Service
                  </Link>
                </div>
                <div className={`bg-gray-50 p-8 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-xl font-bold text-primary mb-6">What&apos;s Included</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">How We Work</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Art Journey?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether you are looking for a single statement piece or building a
            comprehensive collection, we are here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/art-gallery-mayfair/contact" className="btn-accent">Book a Private Viewing</Link>
            <a href="tel:02079462200" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 2200</a>
          </div>
        </div>
      </section>
    </>
  );
}
