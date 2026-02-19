import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pest Control Services | Rodents, Wasps, Bed Bugs & More",
  description:
    "Professional pest control services in Wandsworth. Rodent control, wasp nest removal, bed bug treatment, cockroach control, fox deterrent, and commercial pest management.",
  openGraph: {
    title: "Pest Control Services | Wandsworth Pest Solutions",
    description:
      "BPCA certified pest control for homes and businesses in Wandsworth. Same-day service available for all pest types.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "rodent-control",
      title: "Rodent Control",
      subtitle: "Rats & Mice Eliminated Fast",
      description:
        "Rodents can cause serious damage to your property, contaminate food, and spread disease. Our rodent control service starts with a thorough survey to identify entry points, nesting sites, and the extent of the infestation. We then deploy targeted baiting and trapping programmes, followed by proofing works to seal entry points and prevent re-entry.",
      features: [
        "Full property survey and risk assessment",
        "Targeted baiting and trapping programmes",
        "Entry point identification and proofing",
        "Loft, cavity, and drain inspections",
        "Follow-up visits to ensure complete eradication",
        "Prevention advice and recommendations",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      id: "wasp-nest-removal",
      title: "Wasp Nest Removal",
      subtitle: "Safe, Same-Day Nest Treatment",
      description:
        "Wasp nests can appear anywhere — lofts, sheds, walls, even underground. Our technicians are equipped with full protective gear and use professional-grade insecticides to treat nests quickly and safely. We also offer preventative treatments to discourage wasps from returning to your property.",
      features: [
        "Same-day wasp nest treatment available",
        "Fully equipped technicians with PPE",
        "Treatment of nests in any location",
        "Safe for children and pets after treatment",
        "Preventative treatments available",
        "Bee identification service (we never harm bees)",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "bed-bug-treatment",
      title: "Bed Bug Treatment",
      subtitle: "Complete Eradication Guaranteed",
      description:
        "Bed bugs are notoriously difficult to eliminate without professional help. Our treatment programme combines thorough inspection, targeted heat treatment, and residual insecticides to eradicate bed bugs at every life stage. We provide follow-up inspections to confirm complete elimination.",
      features: [
        "Detailed mattress and room inspection",
        "Heat treatment for severe infestations",
        "Residual insecticide application",
        "Treatment of all affected rooms and furniture",
        "Follow-up inspection and retreatment if needed",
        "Prevention advice for travellers and landlords",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
    },
    {
      id: "cockroach-control",
      title: "Cockroach Control",
      subtitle: "Thorough Treatment & Prevention",
      description:
        "Cockroaches thrive in warm, humid environments and can contaminate food and surfaces with harmful bacteria. Our cockroach control uses a combination of gel baits, insecticidal sprays, and monitoring traps to eliminate infestations. We also identify harbourage areas and provide hygiene recommendations.",
      features: [
        "Species identification (German, Oriental, etc.)",
        "Gel bait application in harbourage areas",
        "Residual spray treatment for heavy infestations",
        "Monitoring traps for ongoing assessment",
        "Hygiene and sanitation recommendations",
        "Ideal for kitchens, restaurants, and commercial premises",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: "fox-deterrent",
      title: "Fox Deterrent",
      subtitle: "Humane, Effective Fox Control",
      description:
        "Urban foxes can cause damage to gardens, bins, and property. We provide humane fox deterrent solutions that discourage foxes from entering your property without causing harm. Our methods are approved and effective for both residential gardens and commercial premises.",
      features: [
        "Humane deterrent methods only",
        "Garden and perimeter assessment",
        "Scent-based and electronic deterrents",
        "Waste management advice to reduce attraction",
        "Fencing and proofing recommendations",
        "Ongoing monitoring for commercial clients",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "commercial-pest-management",
      title: "Commercial Pest Management",
      subtitle: "Ongoing Protection for Your Business",
      description:
        "Restaurants, pubs, hotels, offices, and retail premises all need robust pest management to remain compliant with health and safety regulations. We offer tailored pest management contracts with regular visits, detailed reporting, and rapid response to any incidents between scheduled visits.",
      features: [
        "Bespoke pest management contracts",
        "Scheduled visits at intervals to suit your business",
        "Full compliance with EHO requirements",
        "Digital reporting and documentation",
        "Emergency callout service between visits",
        "Staff training on pest awareness and prevention",
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
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Professional Pest Control Services</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From rodents and wasps to bed bugs and cockroaches, our BPCA-trained
              technicians handle every pest problem with speed, expertise, and total discretion.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Pest Control Services</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every pest problem is different. We tailor our approach to your
              specific situation, using the latest BPCA-approved methods and
              products for safe, effective results.
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
                  <Link href="/pest-control-wandsworth/contact" className="btn-accent">Get a Free Quote</Link>
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
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">How We Work</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-primary mb-2">Your Call</h3>
              <p className="text-gray-600">Call us or fill in our form. We&apos;ll ask about the pest, location, and severity to prepare our technician.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-primary mb-2">Site Survey</h3>
              <p className="text-gray-600">Our technician inspects your property, identifies the pest species, and assesses the extent of the problem.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-primary mb-2">Treatment</h3>
              <p className="text-gray-600">We apply the most effective, safe treatment for your specific pest problem and explain the process clearly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-primary mb-2">Follow-Up</h3>
              <p className="text-gray-600">We return to check the treatment has worked, make any adjustments, and advise on ongoing prevention.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Pest Control Today?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Call now for a free quote and same-day service across Wandsworth and South West London.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pest-control-wandsworth/contact" className="btn-accent">Get a Free Quote</Link>
            <a href="tel:02079468123" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 8123</a>
          </div>
        </div>
      </section>
    </>
  );
}
