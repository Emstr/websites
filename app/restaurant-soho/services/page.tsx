import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menu & Services | A La Carte, Private Dining & More",
  description:
    "Explore our dining services including a la carte, private dining, Sunday roast, pre-theatre menu, cocktail bar and corporate events at Soho Kitchen & Bar.",
  openGraph: {
    title: "Menu & Services | Soho Kitchen & Bar",
    description:
      "Modern British dining in Soho. A la carte, private dining, Sunday roasts, pre-theatre menus and cocktail bar.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "a-la-carte",
      title: "A La Carte Dining",
      subtitle: "Seasonal British at Its Finest",
      description:
        "Our a la carte menu is the heart of Soho Kitchen & Bar. Changing with the seasons, each dish is crafted from the finest British produce by our Le Cordon Bleu trained head chef. From hand-dived scallops to slow-braised heritage cuts, every plate celebrates what British farming and fishing do best.",
      features: [
        "Seasonal menu updated quarterly with the finest British ingredients",
        "Starters, mains and desserts showcasing modern British technique",
        "Vegetarian and vegan options on every course",
        "Sommelier-selected wine pairings available",
        "Daily specials featuring market-fresh produce",
        "Tasting menu available for the full experience",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: "private-dining",
      title: "Private Dining",
      subtitle: "Your Exclusive Soho Experience",
      description:
        "Our beautifully appointed private dining room on the first floor seats up to 24 guests in elegant surroundings. Whether it is a milestone birthday, an engagement celebration or a high-stakes business dinner, our events team will work with you to create a bespoke menu and experience your guests will not forget.",
      features: [
        "Exclusive first-floor dining room seating up to 24 guests",
        "Bespoke menus tailored to your preferences and dietary needs",
        "Dedicated service team for your event",
        "Curated wine packages and cocktail reception options",
        "AV equipment available for corporate presentations",
        "Flexible layouts for dining, drinks receptions or meetings",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "sunday-roast",
      title: "Sunday Roast",
      subtitle: "A Proper British Sunday",
      description:
        "Nothing beats a proper Sunday roast, and ours is one of Soho's finest. Slow-roasted meats, crispy roast potatoes, seasonal vegetables and proper gravy — all served with the generous portions and warm hospitality that a Sunday lunch deserves. Bring the family or gather your mates; our Sunday tables fill up fast.",
      features: [
        "Choice of slow-roasted sirloin of beef, free-range chicken or lamb",
        "Seasonal vegetable Wellington for vegetarian guests",
        "All the trimmings: Yorkshire puddings, roasties, seasonal veg, gravy",
        "Dedicated Sunday dessert menu featuring British classics",
        "Children's portions available",
        "Served every Sunday from 12pm to 4pm",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "pre-theatre",
      title: "Pre-Theatre Menu",
      subtitle: "Dine Before the Show",
      description:
        "With the West End on our doorstep, our pre-theatre menu is designed for theatre-goers who want a memorable meal without the stress. Two or three courses served promptly from 5pm, with dishes crafted to delight without slowing you down. You will be on your way to curtain call feeling satisfied and impressed.",
      features: [
        "Two courses for £24.95, three courses for £29.95",
        "Served Monday to Saturday from 5pm to 6:30pm",
        "Quick, attentive service so you never miss curtain call",
        "Seasonal dishes from the a la carte selection",
        "Glass of prosecco upgrade available",
        "Perfect for groups heading to nearby theatres",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
    },
    {
      id: "cocktail-bar",
      title: "Cocktail Bar",
      subtitle: "Crafted Drinks, Soho Vibes",
      description:
        "Our ground-floor bar is a destination in its own right. Whether you are starting the evening with a classic Negroni, celebrating with Champagne, or winding down with a nightcap, our bartenders craft each drink with care. The wine list spans Old and New World, and our craft beer selection rotates regularly.",
      features: [
        "Handcrafted cocktail menu featuring Soho-inspired originals",
        "Extensive wine list curated by our sommelier",
        "Rotating selection of craft beers and ales",
        "Bar snacks and small plates available all evening",
        "Happy hour Monday to Friday, 4pm to 6pm",
        "Walk-ins welcome; no booking required for bar seating",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "corporate-events",
      title: "Corporate Events",
      subtitle: "Impress Your Clients & Team",
      description:
        "From working lunches and team celebrations to client entertaining and product launches, Soho Kitchen & Bar offers flexible corporate dining solutions in the heart of the West End. Our events team will handle every detail so you can focus on what matters most — your guests.",
      features: [
        "Bespoke corporate menus and drinks packages",
        "Private dining room or full restaurant buyout available",
        "AV and presentation facilities for business meetings",
        "Canapé receptions for up to 60 standing guests",
        "Dedicated events coordinator from enquiry to execution",
        "Central Soho location convenient for all of London",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Menu & Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Dining Experiences for Every Occasion
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From our seasonal a la carte to private celebrations, every experience
              at Soho Kitchen & Bar is crafted with passion and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What We Offer
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you are joining us for a relaxed weekday lunch, a special celebration
              or a quick pre-theatre bite, our team is ready to make your visit memorable.
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
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-accent font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
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
                  <Link href="/restaurant-soho/contact" className="btn-accent">
                    Book Now
                  </Link>
                </div>
                <div
                  className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center">
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
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Your Visit, Step by Step
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Book Your Table</h3>
              <p className="text-gray-600">
                Reserve online, by phone or by email. Let us know about any dietary
                requirements or special occasions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Arrive & Unwind</h3>
              <p className="text-gray-600">
                Start with a cocktail at our bar or head straight to your table. Our
                team will make you feel right at home.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Enjoy the Experience</h3>
              <p className="text-gray-600">
                Let our chef and sommelier guide you through a memorable dining
                experience with seasonal dishes and perfectly paired wines.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Come Back Soon</h3>
              <p className="text-gray-600">
                With a menu that evolves with the seasons, there is always a reason
                to return. Join our mailing list for exclusive invitations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Your Table?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether it is dinner for two or a private event for twenty, we would love
            to welcome you to Soho Kitchen & Bar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/restaurant-soho/contact" className="btn-accent">
              Make a Reservation
            </Link>
            <a href="tel:02079466640" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 020 7946 6640
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
