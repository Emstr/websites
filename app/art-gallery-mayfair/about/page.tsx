import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Cork Street Gallery Since 2010",
  description:
    "The story of Mayfair Fine Art — a contemporary art gallery on Cork Street since 2010. 50+ exhibitions, 200+ artists, and a reputation for discovering emerging talent.",
  openGraph: {
    title: "About Us | Mayfair Fine Art",
    description:
      "Contemporary art gallery in the heart of London's gallery district since 2010.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Where Art Meets Ambition Since 2010</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A contemporary art gallery on Cork Street, championing emerging
              talent alongside established names in the heart of London&apos;s
              historic gallery district.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Built on Cork Street</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mayfair Fine Art was founded in 2010 with a clear ambition: to
                establish a gallery on Cork Street that combined rigorous
                curatorial standards with genuine accessibility. The founder, a
                former art historian turned dealer, believed that great
                contemporary art should not be the preserve of the ultra-wealthy
                or the connected few.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Cork Street has been the centre of London&apos;s commercial art
                world since the 1940s, when galleries like Waddington and Mayor
                made it synonymous with ambition and quality. We are proud to
                carry that torch forward. Our programme focuses on contemporary
                painting, sculpture, and mixed media — work that rewards
                sustained attention and holds its value over time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over fifteen years we have staged more than fifty exhibitions,
                represented over two hundred artists, and built a collector base
                that spans London, Europe, and the Middle East. Several artists
                who held their first solo show with us have gone on to
                representation by major international galleries — a track record
                we take enormous pride in.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">15+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years on Cork Street</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">50+</div>
                  <p className="text-gray-600 mt-2 font-medium">Exhibitions Staged</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">200+</div>
                  <p className="text-gray-600 mt-2 font-medium">Artists Represented</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">6-8</div>
                  <p className="text-gray-600 mt-2 font-medium">Shows Per Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What We Stand For</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Curatorial Rigour</h3>
              <p className="text-gray-600">Every exhibition is driven by artistic quality, not commercial convenience. We show what we believe in, full stop.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Artist Advocacy</h3>
              <p className="text-gray-600">We invest in artists&apos; careers, not just their canvases. Studio visits, catalogue essays, and introductions to collectors are part of what we do.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Collector Care</h3>
              <p className="text-gray-600">Buying art should be a pleasure, not a pressure. We guide, advise, and support — but we never push a sale.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">International Reach</h3>
              <p className="text-gray-600">We scout talent globally and our collector base spans the UK, Europe, and the Middle East. Cork Street, global perspective.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Long-term Thinking</h3>
              <p className="text-gray-600">We think in decades, not seasons. The artists we represent and the collections we build are designed to endure.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Transparency</h3>
              <p className="text-gray-600">Clear pricing, honest provenance, and straightforward advice. No hidden fees, no auction-house games. What you see is what you get.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Find Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Our Cork Street Gallery</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are at 15 Cork Street in the heart of Mayfair. Three minutes
              from Green Park station, four from Bond Street, and five from
              Piccadilly Circus.
            </p>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent max-w-2xl mx-auto">
            <address className="not-italic text-gray-700 mb-4 text-center">
              <strong className="text-primary text-lg">Mayfair Fine Art</strong><br />
              15 Cork Street<br />
              Mayfair, London W1S 3LW
            </address>
            <div className="text-center text-gray-600">
              <p className="mb-2"><strong>Opening Hours:</strong></p>
              <p>Mon-Fri: 10am - 6pm</p>
              <p>Sat: 11am - 5pm</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Visit the Gallery</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Walk in during opening hours or book a private viewing. We are
            always happy to show you what is on the walls and talk about what
            is coming next.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/art-gallery-mayfair/contact" className="btn-accent">Book a Viewing</Link>
            <a href="tel:02079462200" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 2200</a>
          </div>
        </div>
      </section>
    </>
  );
}
