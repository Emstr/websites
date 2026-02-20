import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Printing, Design & Branded Merchandise",
  description:
    "Full-service printing and design studio in Shoreditch. Business cards, large format, art prints, screen printing, branded merchandise and graphic design.",
  openGraph: {
    title: "Services | Shoreditch Print Studio",
    description:
      "Premium printing and design services from our Shoreditch studio. Same-day turnaround available on selected products.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "business-cards",
      title: "Business Cards & Stationery",
      subtitle: "First Impressions, Perfected",
      description:
        "Your business card is often the first physical touchpoint someone has with your brand. We print on a curated range of luxury stocks — from 400gsm cotton to recycled kraft — with options for foil blocking, embossing, edge painting, and spot UV. We also produce full stationery suites including letterheads, compliment slips, envelopes, and notebooks.",
      features: [
        "Premium stocks from 300gsm to 700gsm",
        "Foil blocking in gold, silver, copper, and custom colours",
        "Embossing, debossing, and spot UV finishes",
        "Edge painting and die-cut shapes",
        "Matching letterheads, compliment slips, and envelopes",
        "Same-day turnaround on standard cards",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: "large-format",
      title: "Large Format Printing",
      subtitle: "Go Big, Look Sharp",
      description:
        "From A1 posters to 10-metre exhibition backdrops, our wide-format printers deliver pin-sharp output on vinyl, fabric, foam board, and more. We handle the full production chain — design, print, finishing, and installation if needed. Perfect for trade shows, shop fronts, office interiors, and events.",
      features: [
        "Posters, banners, and roller banners",
        "Exhibition stands and pop-up displays",
        "Window graphics and contour-cut vinyl",
        "Rigid board printing (foam board, Dibond, acrylic)",
        "Fabric and textile printing for soft signage",
        "Installation service available across London",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "art-prints",
      title: "Art Prints & Giclée",
      subtitle: "Gallery Quality, Studio Prices",
      description:
        "We produce museum-grade giclée prints for artists, photographers, and galleries using archival inks and fine art papers from Hahnemühle and Canson. Every print is individually colour-profiled to ensure faithful reproduction. We also offer canvas stretching, mounting, and limited edition numbering.",
      features: [
        "Hahnemühle and Canson fine art papers",
        "Archival pigment inks rated 100+ years",
        "Custom ICC colour profiling for each artwork",
        "Canvas printing and hand-stretching",
        "Limited edition numbering and certificates",
        "Print-on-demand fulfilment for online artists",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: "screen-printing",
      title: "Screen Printing",
      subtitle: "Craft Meets Colour",
      description:
        "Screen printing gives a tactile, vibrant finish that digital simply cannot replicate. Our print room handles runs from 25 to 5,000 — t-shirts, tote bags, posters, and art prints. We mix Pantone-matched inks in-house and hand-pull every run for consistent, premium results.",
      features: [
        "T-shirts, hoodies, and apparel printing",
        "Tote bags and canvas accessories",
        "Poster and art print editions",
        "Pantone colour matching",
        "Water-based and plastisol ink options",
        "Minimum order from just 25 units",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "branded-merchandise",
      title: "Branded Merchandise",
      subtitle: "Your Brand, Everywhere",
      description:
        "Build brand awareness with custom merchandise your customers and staff actually want to keep. We source and print on hundreds of product lines — from eco tote bags and enamel mugs to USB sticks and notebooks. All produced ethically with transparent supply chains.",
      features: [
        "Custom tote bags and drawstring bags",
        "Mugs, water bottles, and drinkware",
        "Pens, notebooks, and desk accessories",
        "Branded apparel and workwear",
        "Event packs and gift boxes",
        "Eco-friendly and ethically sourced options",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      subtitle: "Ideas Into Impact",
      description:
        "Our four in-house designers work across brand identity, packaging, print collateral, and digital assets. Whether you need a complete rebrand or a single flyer laid out, we deliver considered, effective design with quick turnaround. Every design is supplied print-ready and screen-optimised.",
      features: [
        "Logo design and full brand identities",
        "Packaging and label design",
        "Brochures, catalogues, and annual reports",
        "Flyers, leaflets, and promotional materials",
        "Social media graphics and digital assets",
        "Print-ready artwork preparation",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
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
              Printing & Design That Delivers
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From a stack of business cards to a full brand identity, every job
              gets the same care and attention. Eco-friendly inks, premium
              stocks, and honest pricing throughout.
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
              Six core services under one roof. Walk in with a brief, walk out
              with finished print. Or let us handle everything from concept to
              delivery.
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
                  <Link href="/print-shop-shoreditch/contact" className="btn-accent">
                    Request a Quote
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
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              How It Works
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Brief & Quote</h3>
              <p className="text-gray-600">
                Tell us what you need — in person, by email, or over the phone.
                We&apos;ll send a clear quote within the hour.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Design & Proof</h3>
              <p className="text-gray-600">
                Send us print-ready files or let our design team create the
                artwork. You approve a digital proof before we print.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Print & Finish</h3>
              <p className="text-gray-600">
                We print using eco-friendly inks on your chosen stock, then
                apply any finishing — lamination, foiling, binding, or cutting.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Collect or Deliver</h3>
              <p className="text-gray-600">
                Pick up from our Shoreditch studio or we&apos;ll deliver across
                London. Same-day dispatch on qualifying orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Got a Print Project in Mind?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Send us your brief and we&apos;ll get back to you with a quote within
            the hour. No obligation, no hard sell.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/print-shop-shoreditch/contact" className="btn-accent">
              Get a Free Quote
            </Link>
            <a href="tel:02079468830" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 020 7946 8830
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
