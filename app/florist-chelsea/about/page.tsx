import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Luxury Florist on King's Road",
  description: "The story of Chelsea Blooms. Luxury florist on King's Road, Chelsea. British Florist Association member. Sustainably sourced, hand-crafted arrangements.",
  openGraph: { title: "About Us | Chelsea Blooms", description: "Luxury floristry from our King's Road studio. Sustainably sourced, beautifully crafted." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">About Us</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">The Chelsea Blooms Story</h1><p className="text-xl text-gray-200 leading-relaxed">A passion for flowers, a commitment to sustainability and an eye for beauty. That&apos;s what drives everything we do.</p></div></div></section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Rooted in Chelsea</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Chelsea Blooms was born from a love of flowers and a desire to create something truly special. Our founder trained at one of London&apos;s leading floristry schools before opening our King&apos;s Road studio.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">From the start, we&apos;ve been committed to sourcing sustainably. We prioritise British-grown, seasonal flowers and work with ethical importers for more exotic blooms. Every arrangement we create tells a story &mdash; the story of the season, the occasion and the person it&apos;s for.</p>
              <p className="text-gray-600 leading-relaxed">Today, we serve private clients, corporate accounts and some of London&apos;s most prestigious wedding venues. Our team of talented florists bring creativity, technical skill and genuine passion to everything they make.</p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">1000+</div><p className="text-gray-600 mt-2 font-medium">Weddings Styled</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">50+</div><p className="text-gray-600 mt-2 font-medium">Corporate Clients</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">BFA</div><p className="text-gray-600 mt-2 font-medium">Accredited Member</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">4.9★</div><p className="text-gray-600 mt-2 font-medium">Google Rating</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Values</span><h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">What Guides Us</h2><div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Sustainability", desc: "We champion British flowers, reduce floral foam use and choose eco-friendly packaging. Beauty shouldn't cost the earth." },
            { title: "Artistry", desc: "Every arrangement is a piece of art. Our designers combine colour theory, texture and form to create something extraordinary." },
            { title: "Personal Service", desc: "We take time to understand your vision. Whether it's a single bouquet or a grand wedding, you get our full attention." },
            { title: "Quality", desc: "We source only the finest blooms and condition every stem by hand. No shortcuts, no compromises on freshness or quality." },
            { title: "Reliability", desc: "When we say same day, we mean it. When we commit to your wedding date, everything will be perfect. You can count on us." },
            { title: "Creativity", desc: "We push boundaries and explore new styles while respecting the timeless beauty of classic floristry. Fresh ideas, always." },
          ].map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-sm shadow-sm"><h3 className="text-xl font-bold text-[var(--primary)] mb-3">{v.title}</h3><p className="text-gray-600">{v.desc}</p></div>
          ))}
        </div>
      </div></section>

      <section className="py-16 lg:py-24 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Visit Us</span><h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Our Chelsea Studio</h2><div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div><p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">Come and see us on King&apos;s Road. Browse our displays, pick up a bouquet or sit down to discuss your wedding flowers over a cup of tea.</p>
        <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-8 rounded-sm text-white max-w-lg mx-auto"><address className="not-italic text-gray-200 text-lg mb-4">156 King&apos;s Road<br />Chelsea, London SW3 4UT</address><p className="text-gray-300 text-sm">Near Sloane Square tube (District, Circle lines)</p></div>
      </div></section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s Create Something Beautiful</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Get in touch to discuss your floral needs or visit our studio on King&apos;s Road.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/florist-chelsea/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Contact Us</Link><a href="tel:02079469012" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors">Call 020 7946 9012</a></div></div></section>
    </>
  );
}
