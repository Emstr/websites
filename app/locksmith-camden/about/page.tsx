import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | DBS Checked Locksmiths Serving Camden",
  description: "Learn about Camden Lock & Key - DBS checked locksmiths with over 12 years of experience serving Camden and North London. 24/7 emergency service.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">About Us</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Camden&apos;s Trusted Locksmith</h1><p className="text-xl text-gray-200 leading-relaxed">DBS checked, fully insured, and committed to keeping Camden safe and secure for over 12 years.</p></div></div></section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Security You Can Count On</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Camden Lock &amp; Key was established in 2013 by a Master Locksmith who saw too many Camden residents being overcharged by locksmiths who quoted one price on the phone and charged another at the door. We built our business on the opposite approach: honest pricing, transparent service, and skilled workmanship.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">Every one of our locksmiths is DBS checked — meaning they&apos;ve undergone enhanced criminal background screening. When you&apos;re letting someone into your home, especially late at night, you deserve that assurance.</p>
              <p className="text-gray-600 leading-relaxed">Today we&apos;re one of Camden&apos;s most trusted locksmith services, handling everything from emergency lockouts to full security upgrades for homes and businesses. Our reputation is built on word-of-mouth — and we intend to keep it that way.</p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-4xl font-bold text-[var(--accent)]">12+</div><p className="text-gray-600 mt-2 font-medium">Years in Camden</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-4xl font-bold text-[var(--accent)]">8,000+</div><p className="text-gray-600 mt-2 font-medium">Lockouts Resolved</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-4xl font-bold text-[var(--accent)]">5</div><p className="text-gray-600 mt-2 font-medium">DBS Checked Team</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="text-4xl font-bold text-[var(--accent)]">4.8/5</div><p className="text-gray-600 mt-2 font-medium">Customer Rating</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Values</span><h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">What We Stand For</h2><div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Trust", d: "Every locksmith is DBS checked and carries photo ID. We verify your identity before gaining entry. Trust works both ways." },
              { t: "Honest Pricing", d: "The price we quote is the price you pay. No hidden call-out fees, no inflated emergency surcharges. Transparent pricing always." },
              { t: "Speed", d: "When you're locked out in the rain at midnight, every minute counts. Our 30-minute response means you're not waiting long." },
              { t: "Skill", d: "Non-destructive entry is an art. Our locksmiths are trained to open locks without damaging your door — protecting your property and saving you money." },
              { t: "Security", d: "We don't just get you back in — we make sure you're properly secure afterwards. We always recommend insurance-compliant locks." },
              { t: "Community", d: "We live and work in Camden. Many of our customers are repeat clients and referrals. Serving our neighbours well is personal." },
            ].map((v) => (
              <div key={v.t} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow"><h3 className="text-xl font-bold text-[var(--primary)] mb-3">{v.t}</h3><p className="text-gray-600">{v.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Area</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Serving Camden & North London</h2>
          <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Based in Camden Town, we cover all of NW1 and the surrounding areas including Kentish Town, Chalk Farm, Belsize Park, Primrose Hill, King&apos;s Cross, Hampstead, and Islington.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">DBS Checked for Your Peace of Mind</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">All our locksmiths hold enhanced DBS (Disclosure and Barring Service) certificates, formerly known as CRB checks. This means they have been thoroughly vetted and are safe to trust in your home at any time of day or night. We also carry full public liability insurance.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Locksmith You Can Trust?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Available 24/7. DBS checked. No call-out fee. Call now or request a callback.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:02079460789" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Call 020 7946 0789</a>
            <Link href="/locksmith-camden/contact" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors inline-block">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
