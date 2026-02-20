import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Custom Tattoos, Cover-Ups & Fine Line Work",
  description:
    "Explore our tattoo services including custom designs, cover-ups, fine line work, colour realism, blackwork and geometric tattoos. Free consultations available.",
  openGraph: {
    title: "Services | Shoreditch Ink Studio",
    description:
      "Full range of tattoo services from our award-winning Shoreditch studio. Custom designs, cover-ups, fine line, colour realism, and blackwork.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "custom-tattoos",
      title: "Custom Tattoos",
      subtitle: "Your Vision, Our Artistry",
      description:
        "Every custom tattoo begins with a conversation. We work closely with you to understand the meaning, aesthetic, and placement of your piece. Our artists then create original artwork tailored specifically to you — no flash, no templates, just genuine one-of-a-kind designs that tell your story.",
      features: [
        "One-on-one design consultations with your chosen artist",
        "Multiple sketch revisions until you are completely happy",
        "Digital mockups showing placement and scale",
        "All styles catered for — traditional, neo-traditional, illustrative, and more",
        "Pricing based on size, detail, and session time",
        "Comprehensive aftercare guidance included",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      id: "cover-up-work",
      title: "Cover-Up Work",
      subtitle: "Transform the Unwanted",
      description:
        "Regret an old tattoo? Our cover-up specialists can transform existing ink into something you genuinely love. We assess the size, colour density, and location of your current tattoo, then design a piece that works with — not against — what is already there. The best cover-ups do not just hide; they replace.",
      features: [
        "Free assessment of your existing tattoo",
        "Honest advice on what is achievable",
        "Strategic colour and design choices for maximum coverage",
        "Option to combine with laser fading for difficult cover-ups",
        "Before and after portfolio available on request",
        "Multiple sessions available for complex projects",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      id: "fine-line-tattoos",
      title: "Fine Line Tattoos",
      subtitle: "Subtle Elegance",
      description:
        "Fine line tattooing is an art form that demands precision, patience, and a steady hand. Our fine line specialists create delicate, detailed work that ages beautifully. Whether you want a small symbolic piece or an intricate botanical illustration, fine line is the perfect choice for understated elegance.",
      features: [
        "Single-needle and fine-gauge work",
        "Botanical, floral, and script specialities",
        "Small and discreet placement options",
        "Minimal shading for a clean, modern look",
        "Ideal for first-time tattoo clients",
        "Quick healing times with proper aftercare",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: "colour-realism",
      title: "Colour Realism",
      subtitle: "Art Imitating Life",
      description:
        "Our colour realism artists create tattoos that look like photographs printed on skin. From portrait work to nature scenes and abstract colour compositions, this style demands exceptional technical skill and an understanding of how colour behaves in skin over time.",
      features: [
        "Photorealistic portraits of people and pets",
        "Nature and wildlife in vivid colour",
        "High-quality ink brands for lasting vibrancy",
        "Colour theory expertise for natural skin tones",
        "Touch-up sessions included within the first year",
        "Large-scale pieces and sleeves welcome",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "blackwork-geometric",
      title: "Blackwork & Geometric",
      subtitle: "Bold Precision",
      description:
        "Blackwork and geometric tattooing is about clean lines, bold contrast, and mathematical precision. Our artists specialise in dotwork, sacred geometry, ornamental patterns, and large-scale blackwork pieces. This style makes a powerful statement and ages exceptionally well.",
      features: [
        "Dotwork and stippling techniques",
        "Sacred geometry and mandala designs",
        "Ornamental and pattern-based work",
        "Large-scale back pieces and sleeves",
        "Tribal-inspired and neo-tribal designs",
        "Mehndi and henna-style patterns",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      id: "tattoo-consultations",
      title: "Tattoo Consultations",
      subtitle: "Start the Conversation",
      description:
        "Not sure where to begin? Book a free consultation. We will sit down with you, discuss your ideas, suggest artists whose style matches your vision, talk through placement and sizing, and give you a transparent quote. There is never any pressure to commit on the day.",
      features: [
        "Completely free with no obligation",
        "Walk-ins welcome or book ahead",
        "Review our artists portfolios in person",
        "Discuss design ideas and references",
        "Accurate pricing and time estimates",
        "Aftercare advice and preparation tips",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
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
              Tattoo Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From intimate fine line pieces to full sleeves, our five resident
              artists cover every style and technique. Explore what we offer
              and find the right artist for your next piece.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Every Style, Every Scale
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether it is your first tattoo or your fiftieth, we bring the
              same level of care, artistry, and professionalism to every piece.
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
                  <Link href="/tattoo-shoreditch/contact" className="btn-accent">
                    Book a Consultation
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
              From Idea to Ink
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Consultation</h3>
              <p className="text-gray-600">
                Pop into the studio or book online. We discuss your ideas,
                match you with the right artist, and outline timing and cost.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Design</h3>
              <p className="text-gray-600">
                Your artist creates original artwork based on your brief.
                We refine it together until it is exactly right.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Session</h3>
              <p className="text-gray-600">
                On the day, we apply the stencil, confirm placement, and begin
                tattooing. Breaks and refreshments are always available.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Aftercare</h3>
              <p className="text-gray-600">
                We provide detailed aftercare instructions and a free touch-up
                within the first year if needed. Your skin, our guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Next Piece?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a free consultation and let us bring your vision to life.
            Walk-ins are welcome but booking ahead guarantees your spot.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tattoo-shoreditch/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a href="tel:02079463210" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 020 7946 3210
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
