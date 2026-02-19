import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Removal Services | Home Moves, Office Relocations & Storage",
  description: "Complete removal services in Ealing. Home removals, office relocations, packing, storage, man & van, and international moves. BAR member.",
  openGraph: { title: "Removal Services | Ealing Moving Company", description: "Professional removal services for homes and businesses in Ealing and West London." },
};

export default function ServicesPage() {
  const services = [
    { id: "home-removals", title: "Home Removals", subtitle: "Your Belongings, Our Responsibility", description: "Whether you are moving a studio flat or a six-bedroom house, our home removals service covers every detail. Our trained crews arrive on time, handle your possessions with care, and work efficiently to get you settled into your new home as quickly as possible.", features: ["Full or partial packing options", "Furniture disassembly and reassembly", "Specialist handling for antiques and pianos", "Floor and doorframe protection", "Dedicated move coordinator for your job", "Flexible scheduling including weekends"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { id: "office-relocations", title: "Office Relocations", subtitle: "Minimal Disruption, Maximum Efficiency", description: "Office moves require careful planning to minimise downtime. We work with your IT team to disconnect and reconnect equipment, move desks and filing systems, and have your team back at their desks as fast as possible. We frequently work evenings and weekends to suit your schedule.", features: ["Detailed move planning and project management", "IT equipment handling and reconnection", "Furniture dismantling and installation", "Confidential document handling", "Weekend and evening moves available", "Ongoing storage for surplus furniture"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { id: "packing-services", title: "Packing Services", subtitle: "Expertly Packed, Carefully Protected", description: "Let our trained packers handle the most time-consuming part of your move. We use high-quality boxes, tissue paper, bubble wrap, and wardrobe cartons to ensure everything arrives in perfect condition. We can pack your entire home in a single day.", features: ["Full-house packing in one day", "Quality packing materials included", "Specialist wrapping for fragile items", "Wardrobe cartons for hanging clothes", "Kitchen packing with crockery dividers", "Unpacking service at your new home"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg> },
    { id: "storage-solutions", title: "Storage Solutions", subtitle: "Secure, Flexible Storage", description: "Need somewhere to keep your belongings between moves, during renovations, or just to declutter? Our clean, secure storage facility in West London offers flexible terms with no long-term commitment required. Access your items whenever you need them.", features: ["Clean, dry, secure storage units", "Flexible terms from one week upwards", "Convenient West London location", "Easy drive-up access", "Insurance available", "Collection and delivery service"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg> },
    { id: "man-and-van", title: "Man & Van", subtitle: "Flexible, Affordable Moving Help", description: "Our man and van service is perfect for smaller moves, student relocations, eBay or Gumtree collections, or single-item deliveries. You get a professional, uniformed driver with a clean, modern van — no cowboys, no hassle.", features: ["Hourly or fixed-price rates", "Professional, uniformed driver", "Modern, clean Luton vans", "Same-day bookings often available", "Ideal for single items or small moves", "Loading and unloading included"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg> },
    { id: "international-moves", title: "International Moves", subtitle: "Worldwide Door-to-Door Service", description: "Moving abroad? We provide full international removals by road, sea, and air to destinations worldwide. Our team handles customs documentation, packing to export standard, and coordinates delivery at the other end for a seamless transition.", features: ["Road, sea, and air freight options", "Full export packing and crating", "Customs documentation and clearance", "Door-to-door delivery worldwide", "Groupage and dedicated container options", "Destination services and unpacking"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width"><div className="max-w-3xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Complete Removal Services</h1>
          <p className="text-xl text-gray-200 leading-relaxed">From packing your first box to settling into your new home, we handle every aspect of your move with care and professionalism.</p>
        </div></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Removal Services</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">As a BAR member and Which? Trusted Trader, every move is backed by industry-leading standards and comprehensive insurance.</p>
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
                        <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/removals-ealing/contact" className="btn-accent">Get a Free Quote</Link>
                </div>
                <div className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center"><div className="text-white opacity-20 scale-150">{service.icon}</div></div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">How Your Move Works</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Free Survey", desc: "We visit your home or office to assess the move and provide a fixed-price, no-obligation quote." },
              { num: "2", title: "Plan Your Move", desc: "Your dedicated coordinator plans every detail — packing schedule, vehicle allocation, and timing." },
              { num: "3", title: "Moving Day", desc: "Our uniformed crew arrives on time, packs and loads carefully, and delivers to your new address." },
              { num: "4", title: "All Settled", desc: "We unload, place furniture where you want it, reassemble beds and desks, and take away all packing materials." },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">{step.num}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Moving?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Request a free home survey and fixed-price quote. No obligation, no surprises.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/removals-ealing/contact" className="btn-accent">Get a Free Quote</Link>
            <a href="tel:02079469234" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 9234</a>
          </div>
        </div>
      </section>
    </>
  );
}
