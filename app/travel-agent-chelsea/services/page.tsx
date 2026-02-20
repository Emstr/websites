import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Travel Services | Luxury Holidays, Honeymoons, Ski & More",
  description:
    "Bespoke travel services from Chelsea Travel Company. Luxury holidays, honeymoon planning, ski holidays, safaris, cruises and business travel. ABTA & ATOL protected.",
  openGraph: {
    title: "Travel Services | Chelsea Travel Company",
    description: "Expert travel planning including luxury holidays, honeymoons, ski trips, safaris, cruises and corporate travel from Chelsea, London.",
  },
};

export default function ServicesPage() {
  const services = [
    { id: "luxury-holidays", title: "Luxury Holidays", subtitle: "Five-Star Escapes Worldwide", description: "Our luxury holiday service is for travellers who want more than a standard package. We work with the world's finest hotels, resorts and villa providers to create bespoke itineraries that exceed your expectations. Whether it's an overwater villa in the Maldives, a boutique retreat in Tuscany, or a private island in the Seychelles, we curate every element to ensure an unforgettable experience.", features: ["Hand-selected five-star hotels and resorts", "Private villa and estate bookings", "VIP airport lounge access and fast-track", "Private transfers and chauffeur services", "Exclusive dining and experience reservations", "Bespoke multi-destination itineraries"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> },
    { id: "honeymoon-planning", title: "Honeymoon Planning", subtitle: "Romance, Perfected", description: "Your honeymoon should be as special as the wedding itself. Our dedicated honeymoon planners take the time to understand what you and your partner truly want, then craft an itinerary that turns those dreams into reality. From tropical island-hopping to European city breaks, we handle every romantic detail so you can simply enjoy being together.", features: ["Complimentary honeymoon consultations", "Romantic upgrades and special touches arranged", "Honeymoon gift list service available", "Multi-stop honeymoon itineraries", "Beach, city, adventure and wellness options", "Post-wedding departure timing flexibility"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
    { id: "ski-holidays", title: "Ski Holidays", subtitle: "Slope-Side Perfection", description: "Whether you're a seasoned black-run skier or planning your first family trip to the slopes, our ski specialists know the resorts inside out. We arrange everything from flights and transfers to chalet accommodation, ski hire and lift passes, leaving you free to focus on the powder.", features: ["Expert resort recommendations for all levels", "Catered and self-catered chalet bookings", "Ski school and childcare arrangements", "Lift pass and equipment hire included", "Airport transfers to resort arranged", "Après-ski and dining recommendations"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg> },
    { id: "safari-adventure", title: "Safari & Adventure", subtitle: "Experiences of a Lifetime", description: "Our safari and adventure holidays are designed for those who want to see the world's most extraordinary wildlife and landscapes. Our consultants have personally visited the lodges and camps they recommend, ensuring you get authentic, immersive experiences that create lasting memories.", features: ["Expert-guided Big Five safari itineraries", "Gorilla trekking in Rwanda and Uganda", "Luxury tented camp and lodge accommodation", "Combined beach and safari itineraries", "Galápagos and South American adventures", "Conservation-focused tourism partners"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { id: "cruise-bookings", title: "Cruise Bookings", subtitle: "Set Sail in Style", description: "From Mediterranean sun to Norwegian fjords and Antarctic expeditions, we work with all the leading cruise lines to match you with the perfect voyage. Whether you prefer the intimacy of a boutique ship or the facilities of a large liner, we'll find your ideal sailing and secure the best cabin at the best price.", features: ["All major cruise lines and boutique operators", "River, ocean and expedition cruises", "Best cabin selection and price matching", "Pre and post-cruise hotel stays arranged", "Shore excursion recommendations", "Group and celebration cruise planning"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
    { id: "business-travel", title: "Business Travel", subtitle: "Seamless Corporate Solutions", description: "We understand that business travel needs to be efficient, reliable and cost-effective. Our corporate travel team handles everything from last-minute flight changes to multi-city itineraries, allowing your team to focus on the business at hand rather than logistics.", features: ["Dedicated corporate travel manager", "Negotiated business class fares", "Hotel and venue sourcing worldwide", "Airport meet-and-greet and fast-track", "Expense reporting and travel policy compliance", "24/7 emergency rebooking support"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Bespoke Travel Services</h1>
            <p className="text-xl text-gray-200 leading-relaxed">From luxury beach holidays to corporate travel management, our expert consultants create seamless travel experiences tailored to your needs.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How We Can Help</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every holiday we plan is unique. Our consultants draw on first-hand destination knowledge and trusted supplier relationships to create experiences you simply cannot book online.</p>
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
                  <Link href="/travel-agent-chelsea/contact" className="btn-accent">Enquire Now</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">How We Plan Your Holiday</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">1</div>
              <h3 className="text-xl font-bold text-primary mb-2">Consultation</h3>
              <p className="text-gray-600">We sit down with you to understand your dream holiday &mdash; dates, destinations, budget, interests and any special requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">2</div>
              <h3 className="text-xl font-bold text-primary mb-2">Research &amp; Design</h3>
              <p className="text-gray-600">Our consultants research the best options and design a bespoke itinerary, drawing on personal experience and trusted partners.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">3</div>
              <h3 className="text-xl font-bold text-primary mb-2">Refine &amp; Book</h3>
              <p className="text-gray-600">We present your itinerary, make any adjustments, then handle all bookings, confirmations and documentation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">4</div>
              <h3 className="text-xl font-bold text-primary mb-2">Travel &amp; Support</h3>
              <p className="text-gray-600">You travel with full documentation and our 24/7 support number. We&apos;re always just a call away if you need us.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Planning?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Contact our team to begin designing your perfect holiday. No obligation, just expert advice and genuine enthusiasm for travel.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/travel-agent-chelsea/contact" className="btn-accent">Plan Your Trip</Link>
            <a href="tel:02079466650" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 6650</a>
          </div>
        </div>
      </section>
    </>
  );
}
