import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menu & Dining Experiences | Omakase, Sushi Bar & More",
  description:
    "Explore our dining experiences at Soho Sushi Kitchen. Omakase tasting menus, sushi bar dining, bento boxes, sake pairings, private dining and takeaway in the heart of Soho.",
  openGraph: {
    title: "Menu & Dining Experiences | Soho Sushi Kitchen",
    description:
      "Authentic Japanese sushi experiences in Soho. Omakase, sushi bar, bento boxes, sake pairings and private dining by our Nobu-trained head chef.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "omakase-tasting-menu",
      title: "Omakase Tasting Menu",
      subtitle: "Trust the Chef",
      description:
        "Omakase means 'I leave it up to you' and is the pinnacle of the Japanese dining experience. Our head chef curates a multi-course journey through the finest seasonal fish and produce available that day. Each course is a surprise, designed to showcase the natural flavour and texture of every ingredient at its peak. The omakase typically comprises twelve to fifteen courses including appetisers, sashimi, nigiri, a warm course and dessert. Available for lunch and dinner, it is our most immersive dining experience and the best way to appreciate Chef Takeshi's artistry.",
      features: [
        "Twelve to fifteen courses of seasonal perfection",
        "Chef's daily selection of the finest fish and produce",
        "Sashimi, nigiri, warm courses and dessert",
        "Optional premium sake pairing available",
        "Available for lunch and dinner sittings",
        "Advance booking required, 48 hours minimum",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      id: "sushi-bar-dining",
      title: "Sushi Bar Dining",
      subtitle: "A Front-Row Seat to Culinary Artistry",
      description:
        "Our eight-seat cypress wood sushi counter is the heart of the restaurant. Sit inches from our chefs and watch as they slice, shape and present each piece of sushi with practiced precision. Order from our a la carte selection of nigiri, sashimi, maki and temaki hand rolls, or let the chef guide you through a personalised selection. The sushi bar is first come, first served at lunch and available by reservation for dinner. It is an interactive, intimate experience that connects you directly to the craft of sushi-making.",
      features: [
        "Eight-seat cypress wood counter",
        "Nigiri, sashimi, maki and temaki hand rolls",
        "A la carte or chef-guided selections",
        "Watch every piece crafted before your eyes",
        "Walk-ins welcome at lunch, dinner by reservation",
        "Vegetarian and vegan options available",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      id: "bento-boxes",
      title: "Bento Boxes",
      subtitle: "A Complete Japanese Meal, Beautifully Presented",
      description:
        "Our bento boxes are a carefully composed selection of sushi, sashimi, tempura and seasonal sides presented in traditional lacquered boxes. Available for lunch and dinner, they offer a complete Japanese dining experience in one elegant package. Choose from our signature bento with a mix of nigiri and sashimi, our tempura bento featuring light, crisp vegetable and prawn tempura, or our vegetarian bento showcasing the best of seasonal produce. Each bento includes miso soup and a palate-cleansing ginger salad.",
      features: [
        "Signature, tempura and vegetarian options",
        "Traditional lacquered bento box presentation",
        "Includes miso soup and ginger salad",
        "Available for dine-in and takeaway",
        "Perfect for a quick but refined lunch",
        "Changes seasonally to reflect the best produce",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      id: "sake-pairings",
      title: "Sake Pairings",
      subtitle: "The Perfect Complement to Your Meal",
      description:
        "Sake and sushi are natural partners, and our certified sake sommelier has curated a collection of over thirty premium sakes from across Japan. We offer guided sake flights of three or five tasters, each paired with a specific course from the omakase or a particular fish from the sushi bar. Our list includes everything from bright, crisp junmai to rich, aromatic daiginjo and aged koshu. Whether you are a sake connoisseur or completely new to it, our sommelier will guide you to the perfect match for your palate.",
      features: [
        "Over thirty premium sakes from across Japan",
        "Guided flights of three or five tasters",
        "Certified sake sommelier on hand",
        "Junmai, ginjo, daiginjo and koshu styles",
        "Perfect pairings for every course",
        "Japanese whisky and beer also available",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: "private-dining",
      title: "Private Dining",
      subtitle: "An Exclusive Experience for Special Occasions",
      description:
        "Our private dining room is a serene, beautifully designed space that seats up to ten guests around a single table. It is ideal for birthday celebrations, anniversary dinners, intimate business gatherings or any occasion that calls for something truly special. Chef Takeshi creates a bespoke menu for each private dining event, tailored to your preferences and dietary requirements. We can arrange sake pairings, wine service, floral arrangements and personalised touches to make the evening unforgettable. A minimum spend applies and advance booking is essential.",
      features: [
        "Intimate room seating up to ten guests",
        "Bespoke menu created by Chef Takeshi",
        "Sake and wine pairing options",
        "Personalised touches and floral arrangements",
        "Ideal for celebrations and business dinners",
        "Advance booking essential, minimum spend applies",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      id: "takeaway-delivery",
      title: "Takeaway & Delivery",
      subtitle: "Restaurant-Quality Sushi at Home",
      description:
        "Enjoy our sushi, sashimi and bento boxes in the comfort of your own home. Our takeaway menu features the same fresh, expertly prepared dishes you would enjoy in the restaurant, packaged in sustainable containers designed to keep everything at the perfect temperature. Order by phone for collection, or through our delivery partners for delivery across Central London. We recommend ordering at least 30 minutes ahead for collection to ensure everything is freshly prepared for your arrival.",
      features: [
        "Full sushi, sashimi and bento menu available",
        "Sustainable, temperature-controlled packaging",
        "Collection from the restaurant or home delivery",
        "Delivery across Central London",
        "Order by phone or via delivery partners",
        "30 minutes advance notice for collection",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
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
              Our Menu
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Dining Experiences
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From our celebrated omakase tasting menu to casual bento lunches,
              every dish is crafted with precision by our Nobu-trained head
              chef using sustainably sourced fish.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Dining Experiences
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every dish that leaves our kitchen reflects fifteen years of
              training and an uncompromising commitment to quality. We source
              the finest seasonal ingredients and prepare them with respect
              and precision.
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
                  <Link href="/sushi-soho/contact" className="btn-accent">
                    Reserve a Table
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

      {/* Our Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              From Ocean to Plate
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Source
              </h3>
              <p className="text-gray-600">
                We work with sustainable fisheries and daily markets, receiving
                the freshest fish every morning from trusted suppliers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Select</h3>
              <p className="text-gray-600">
                Chef Takeshi personally inspects every delivery, selecting only
                fish that meets his exacting standards of freshness and quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Prepare</h3>
              <p className="text-gray-600">
                Each piece is prepared with precision using traditional Japanese
                techniques honed over fifteen years of professional training.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Serve</h3>
              <p className="text-gray-600">
                Presented at the perfect temperature, with the ideal balance of
                rice, fish and seasoning. Every piece is a moment of perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Soho Sushi Kitchen?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Reserve your table and discover authentic Japanese sushi in the
            heart of Soho. Open seven days a week for lunch and dinner.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/sushi-soho/contact" className="btn-accent">
              Reserve a Table
            </Link>
            <a href="tel:02079463380" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 020 7946 3380
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
