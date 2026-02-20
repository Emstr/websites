import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What We Offer | Gastropub Dining, Craft Beer & Live Music",
  description:
    "Explore everything The Greenwich Arms has to offer: gastropub dining, award-winning Sunday roasts, 30+ craft beers, beer garden, private hire and live music.",
  openGraph: {
    title: "What We Offer | The Greenwich Arms",
    description: "Gastropub dining, craft beers, Sunday roasts, beer garden, private hire and live music in Greenwich.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "gastropub-dining",
      title: "Gastropub Dining",
      subtitle: "Pub Classics, Done Properly",
      description:
        "Our kitchen takes the best of British pub food and raises the bar. Every dish is made from scratch using locally sourced ingredients, from our hand-battered fish and chips to our slow-braised lamb shank with rosemary mash. The menu changes seasonally, but our commitment to generous portions and honest flavours never wavers.",
      features: [
        "Seasonal menu crafted fresh daily with locally sourced ingredients",
        "Elevated British pub classics alongside creative specials",
        "Vegetarian, vegan and gluten-free options always available",
        "Bar snacks and sharing boards for lighter bites",
        "Children's menu available for under-12s",
        "Lunch and dinner service seven days a week",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>),
    },
    {
      id: "sunday-roasts",
      title: "Sunday Roasts",
      subtitle: "Award-Winning, Legendary",
      description:
        "Our Sunday roast has won multiple local awards and is the reason many of our regulars first walked through the door. Slow-roasted meats, crispy roast potatoes, giant Yorkshire puddings, seasonal vegetables and proper gravy — the way a Sunday lunch should be. We also offer a nut roast for vegetarian guests that regulars rave about.",
      features: [
        "Choice of beef, lamb, chicken or pork — all free-range",
        "Award-winning nut roast for vegetarian guests",
        "All the trimmings: giant Yorkshires, roasties, seasonal veg, proper gravy",
        "Homemade desserts including sticky toffee pudding and apple crumble",
        "Children's portions available",
        "Served every Sunday from 12pm until sold out — booking essential",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
    },
    {
      id: "craft-beer",
      title: "Craft Beer Selection",
      subtitle: "30+ Beers, Always Rotating",
      description:
        "We are passionate about great beer. Our cellar stocks over 30 craft beers, ales and lagers from the finest British and international breweries. With rotating guest taps and seasonal specials, there is always something new to try. Our knowledgeable bar staff are always happy to recommend a pint or pour you a taster.",
      features: [
        "30+ craft beers, ales and lagers on tap and in bottle",
        "Rotating guest taps from independent British breweries",
        "Seasonal and limited-edition beers featured regularly",
        "Curated wine list, spirits and cocktails also available",
        "Tasting flights and beer paddles for the adventurous",
        "Knowledgeable staff happy to guide your selection",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>),
    },
    {
      id: "beer-garden",
      title: "Beer Garden",
      subtitle: "Your Greenwich Oasis",
      description:
        "Our rear beer garden is one of Greenwich's best-kept secrets. With covered seating, heaters and festoon lighting, it is a gorgeous spot year-round. Seating 60 comfortably, it is the perfect place for a lazy afternoon pint, a barbecue in summer or a cosy drink on a crisp autumn evening.",
      features: [
        "Seating for up to 60 guests across covered and open areas",
        "Heated and lit for year-round enjoyment",
        "Summer barbecues and outdoor dining events",
        "Dog-friendly with water bowls provided",
        "Available for private hire and parties",
        "Festoon lighting creates a magical evening atmosphere",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>),
    },
    {
      id: "private-hire",
      title: "Private Hire",
      subtitle: "Celebrate With Us",
      description:
        "Looking for a venue for your next celebration? The Greenwich Arms offers flexible private hire options for groups of 20 to 100. Whether it is a birthday bash, an engagement party, a leaving do or a corporate event, we will work with you to create a brilliant night with food, drink and atmosphere sorted.",
      features: [
        "Full venue hire available for up to 100 guests",
        "Partial hire options for smaller groups of 20-50",
        "Bespoke food and drinks packages to suit your budget",
        "In-house music and entertainment options",
        "Dedicated events coordinator to plan your party",
        "Beer garden available for summer celebrations",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>),
    },
    {
      id: "live-music",
      title: "Live Music",
      subtitle: "Every Weekend and Beyond",
      description:
        "Live music is part of The Greenwich Arms DNA. Every Friday and Saturday night, we host bands and artists spanning rock, blues, folk, soul and jazz. Sunday afternoons feature acoustic sessions that are the perfect soundtrack to your roast dinner. We also run a popular open mic night on the first Thursday of every month.",
      features: [
        "Live bands every Friday and Saturday night from 8pm",
        "Acoustic Sunday sessions from 2pm to 5pm",
        "Monthly open mic night on the first Thursday",
        "Local and touring artists from across the UK",
        "No cover charge — all live music is free entry",
        "Follow us on social media for the latest lineup",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>),
    },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">What We Offer</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Everything Under One Roof</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From award-winning Sunday roasts to live music and 30+ craft beers,
              discover everything that makes The Greenwich Arms special.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">More Than Just a Pub</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have been perfecting the art of the gastropub since 2008.
              Here is everything you will find when you walk through our doors.
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
                  <Link href="/pub-greenwich/contact" className="btn-accent">Get in Touch</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">How It Works</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">1</div>
              <h3 className="text-xl font-bold text-primary mb-2">Walk In or Book</h3>
              <p className="text-gray-600">Walk-ins are always welcome. For Sunday roast or large groups, we recommend booking ahead.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">2</div>
              <h3 className="text-xl font-bold text-primary mb-2">Grab a Pint</h3>
              <p className="text-gray-600">Head to the bar and choose from 30+ craft beers, cask ales, wines and spirits.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">3</div>
              <h3 className="text-xl font-bold text-primary mb-2">Settle In</h3>
              <p className="text-gray-600">Find your spot — cosy corner, beer garden or by the fire. Bring the dog if you like.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">4</div>
              <h3 className="text-xl font-bold text-primary mb-2">Enjoy</h3>
              <p className="text-gray-600">Great food, great beer, great people. That is the Greenwich Arms experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for a Pint?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a table for dinner or Sunday roast, or just pop in — walk-ins are always welcome.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pub-greenwich/contact" className="btn-accent">Book a Table</Link>
            <a href="tel:02079461180" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 1180</a>
          </div>
        </div>
      </section>
    </>
  );
}
