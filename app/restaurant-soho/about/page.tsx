import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Our Story, Our Kitchen, Our Team",
  description:
    "Learn about Soho Kitchen & Bar - a modern British restaurant on Dean Street, Soho. Est. 2019, Le Cordon Bleu trained head chef, seasonal British cuisine.",
  openGraph: {
    title: "About Us | Soho Kitchen & Bar",
    description:
      "The story behind Soho Kitchen & Bar. Modern British cuisine in the heart of Soho since 2019.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Our Story, Our Kitchen
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Born from a love of British produce and Soho&apos;s irrepressible energy,
              Soho Kitchen & Bar has been a Dean Street favourite since 2019.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                Modern British, Soho Soul Since 2019
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Soho Kitchen & Bar was founded with a simple belief: that the best
                British ingredients, treated with skill and imagination, can rival
                any cuisine in the world. Our head chef, a graduate of Le Cordon
                Bleu, spent years honing their craft in London&apos;s finest kitchens
                before opening our doors on Dean Street.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                What began as a modest 40-seat restaurant has grown into one of
                Soho&apos;s most beloved dining destinations. We have expanded our
                offering to include private dining, a vibrant cocktail bar, and
                our now-legendary Sunday roasts — yet we have never lost sight of
                what makes us special: seasonal produce, bold flavours, and genuine
                hospitality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, our team of 15 passionate food professionals serves over
                200 covers each week. Whether you are a regular who knows our menu
                by heart or a first-time guest discovering us for the first time,
                you will always find a warm welcome and an exceptional plate of food.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">2019</div>
                  <p className="text-gray-600 mt-2 font-medium">Established</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">200+</div>
                  <p className="text-gray-600 mt-2 font-medium">Covers Weekly</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">15</div>
                  <p className="text-gray-600 mt-2 font-medium">Team Members</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">4</div>
                  <p className="text-gray-600 mt-2 font-medium">Seasonal Menus/Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              What Drives Us
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Seasonality</h3>
              <p className="text-gray-600">
                Our menu is dictated by the seasons. We work with trusted British
                farms and suppliers to source ingredients at their peak, ensuring
                every dish bursts with natural flavour.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Craftsmanship</h3>
              <p className="text-gray-600">
                From our Le Cordon Bleu trained head chef to our skilled bartenders,
                every member of our team takes pride in their craft and strives
                for excellence in everything they do.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Hospitality</h3>
              <p className="text-gray-600">
                We believe dining out should feel like being welcomed into
                someone&apos;s home. Warm, genuine service is at the heart of
                everything we do at Soho Kitchen & Bar.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to reducing our environmental impact. We minimise
                food waste, use sustainable suppliers, and choose eco-friendly
                packaging wherever possible.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Creativity</h3>
              <p className="text-gray-600">
                Our kitchen thrives on innovation. We constantly experiment with
                new techniques and flavour combinations, keeping our menu fresh
                and exciting while honouring British culinary traditions.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Community</h3>
              <p className="text-gray-600">
                We are proud to be part of Soho&apos;s vibrant community. We support
                local producers, employ local talent, and strive to be a positive
                presence on Dean Street and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Location
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              In the Heart of Soho
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nestled on Dean Street, we are surrounded by the energy, culture and
              history that makes Soho one of London&apos;s most exciting neighbourhoods.
              Whether you are heading to the theatre, exploring the West End or simply
              looking for a great meal, you will find us right where you need us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 rounded-sm text-white">
              <h3 className="text-2xl font-bold mb-4">Find Us</h3>
              <address className="not-italic text-gray-200 mb-6">
                <strong className="text-white">Soho Kitchen & Bar</strong>
                <br />
                34 Dean Street
                <br />
                Soho, London W1D 4PR
              </address>
              <div className="space-y-3 text-gray-200">
                <p><strong className="text-accent">Opening Hours:</strong></p>
                <p>Monday - Thursday: 12pm - 11pm</p>
                <p>Friday - Saturday: 12pm - 12am</p>
                <p>Sunday: 12pm - 10pm</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent">
              <h3 className="text-2xl font-bold text-primary mb-4">Getting Here</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Tottenham Court Road — 3 minute walk
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Leicester Square — 4 minute walk
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Piccadilly Circus — 5 minute walk
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Steps from West End theatres
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Come and See Us
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your table today and experience the best of modern British dining
            in the heart of Soho.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/restaurant-soho/contact" className="btn-accent">
              Book a Table
            </Link>
            <a
              href="tel:02079466640"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 020 7946 6640
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
