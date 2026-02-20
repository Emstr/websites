import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Painting & Decorating Services | Interior, Exterior & More",
  description:
    "Comprehensive painting and decorating services in Brixton and South London. Interior painting, exterior painting, wallpaper hanging, commercial decorating, colour consultations and period property specialists.",
  openGraph: {
    title: "Painting & Decorating Services | Brixton Decorating Services",
    description:
      "Professional painting and decorating for homes and businesses in Brixton. Dulux Select Decorator, fully insured, free estimates.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "interior-painting",
      title: "Interior Painting",
      subtitle: "Beautiful Finishes for Every Room",
      description:
        "Our interior painting service covers everything from a single feature wall to a complete property repaint. We start with thorough preparation — filling cracks, sanding surfaces, priming bare plaster and masking off areas that need protecting. We then apply premium paints from brands like Dulux, Farrow & Ball and Little Greene to achieve a smooth, lasting finish. Whether you want a contemporary matt, a classic eggshell or a high-gloss trim, we deliver results that look stunning and stand the test of time.",
      features: [
        "Comprehensive surface preparation and crack filling",
        "Walls, ceilings, skirting boards, doors and architraves",
        "Premium paints from Dulux, Farrow & Ball, Little Greene",
        "Matt, eggshell, satin and gloss finishes available",
        "Furniture and floor protection throughout",
        "Thorough clean-up on completion",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "exterior-painting",
      title: "Exterior Painting",
      subtitle: "Protection and Kerb Appeal",
      description:
        "The exterior of your property takes a battering from the British weather. Our exterior painting service restores and protects your home or commercial building with professional-grade, weather-resistant coatings. We prepare surfaces by pressure-washing masonry, sanding and scraping timber, and treating any areas of rot or decay before applying flexible, breathable paints designed to last. From front doors and window frames to entire facades and garden walls, we handle it all.",
      features: [
        "Full exterior surface preparation and pressure washing",
        "Masonry painting with breathable, weather-resistant coatings",
        "Timber window and door painting with flexible paints",
        "Fascia, soffit and barge board decoration",
        "Garden wall and fence painting or staining",
        "Scaffolding arranged where required",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "wallpaper-hanging",
      title: "Wallpaper Hanging",
      subtitle: "Precision Pattern Matching, Every Time",
      description:
        "Wallpaper can completely transform a room, but only if it is hung properly. Our decorators are experienced with all types of wallpaper — from lightweight paste-the-wall papers to heavy, traditional paste-the-back vinyls and delicate designer fabrics. We ensure every seam is invisible, every pattern is perfectly matched, and every edge is razor-sharp. We also offer wallpaper removal and wall preparation if your existing paper needs to come off first.",
      features: [
        "Expert hanging of all wallpaper types and weights",
        "Perfect pattern matching and invisible seams",
        "Feature walls and full room papering",
        "Existing wallpaper stripping and wall preparation",
        "Paste-the-wall and paste-the-back techniques",
        "Designer and specialist paper experience",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      id: "commercial-decorating",
      title: "Commercial Decorating",
      subtitle: "Minimal Disruption, Maximum Impact",
      description:
        "First impressions matter in business, and a well-decorated premises speaks volumes about your brand. We work with offices, shops, restaurants, pubs, salons and all types of commercial property across South London. We understand the need to minimise disruption, so we can work evenings, weekends and in phases to keep your business running. From a fresh coat of paint in the boardroom to a complete shop refit, our commercial team delivers on time and on budget.",
      features: [
        "Offices, retail units, restaurants and hospitality venues",
        "Evening and weekend working available",
        "Phased programmes to minimise business disruption",
        "Line marking, feature walls and branding colours",
        "Anti-graffiti and specialist coatings available",
        "Full project management from start to finish",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "colour-consultations",
      title: "Colour Consultations",
      subtitle: "Find the Perfect Palette for Your Space",
      description:
        "Choosing the right colours can be overwhelming with thousands of shades available. Our colour consultation service takes the guesswork out of it. We visit your property, assess the natural light, consider the existing furnishings and flooring, and recommend a cohesive palette that suits your taste and lifestyle. We bring sample pots and colour charts so you can see exactly how shades look in your space before committing. This service is free when you book a decorating project with us.",
      features: [
        "In-home consultation assessing light and space",
        "Expert colour advice for every room",
        "Sample pots applied directly to your walls",
        "Guidance on colour flow between rooms",
        "Knowledge of all major paint brands and ranges",
        "Free when combined with a decorating project",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: "period-property-specialists",
      title: "Period Property Specialists",
      subtitle: "Honouring the Character of Historic Homes",
      description:
        "South London is full of beautiful Victorian, Edwardian and Georgian properties, and decorating them requires a specialist approach. Our team understands the unique challenges of period homes — from dealing with lime plaster and lathe-and-plaster ceilings to matching traditional moulding profiles and using heritage colour palettes. We take care to preserve original features like cornices, dado rails, picture rails and ceiling roses, ensuring your period home looks its absolute best.",
      features: [
        "Experience with Victorian, Edwardian and Georgian properties",
        "Lime plaster and lathe-and-plaster expertise",
        "Cornice, dado rail and picture rail restoration",
        "Heritage colour palettes from Farrow & Ball and others",
        "Sympathetic preparation techniques for delicate surfaces",
        "Traditional and modern paint systems for period homes",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Professional Painting &amp; Decorating
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From a single room refresh to a complete property transformation,
              our team of experienced decorators delivers flawless results
              across Brixton and South London.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Decorating Services
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every project is carried out by our experienced team using
              premium materials and meticulous preparation. We treat your
              property as if it were our own.
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
                  <Link href="/painter-decorator-brixton/contact" className="btn-accent">
                    Get a Quote
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
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              How Every Project Works
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Free Estimate
              </h3>
              <p className="text-gray-600">
                We visit your property, discuss your requirements, and provide
                a detailed written estimate with no obligation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Preparation</h3>
              <p className="text-gray-600">
                We protect your furniture and floors, then prepare every surface
                &mdash; filling, sanding, priming and masking off as needed.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Decoration</h3>
              <p className="text-gray-600">
                Our decorators apply your chosen paints or wallpapers with
                precision, care and attention to every detail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Final Check</h3>
              <p className="text-gray-600">
                We do a thorough walk-through with you, touch up anything that
                needs it, and leave your property spotless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation estimate. We&apos;ll
            visit your property, discuss your requirements and provide a
            detailed written quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/painter-decorator-brixton/contact" className="btn-accent">
              Get a Free Quote
            </Link>
            <a href="tel:02079462270" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 020 7946 2270
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
