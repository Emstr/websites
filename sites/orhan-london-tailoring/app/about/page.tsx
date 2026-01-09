import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Orhan - Master Tailor',
  description:
    'Meet Orhan - master tailor who previously worked for Vivienne Westwood and dressed Princess Diana. Founded Orhan London Tailoring in Shoreditch in 2007 with Denise. Bespoke excellence for all genders.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Orhan
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              A master tailor with a prestigious heritage, bringing decades of high-fashion experience to Shoreditch
            </p>
          </div>
        </div>
      </section>

      {/* Orhan's Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
                From Royal Courts to Shoreditch
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-cream border-l-4 border-gold p-6 rounded-r-lg">
                <p className="text-xl font-semibold text-primary mb-2">
                  "Every garment tells a story. My job is to make sure yours is told perfectly."
                </p>
                <p className="text-sm text-gold">- Orhan</p>
              </div>

              <h3 className="text-2xl font-bold text-primary mt-12 mb-4">A Prestigious Beginning</h3>
              <p className="leading-relaxed">
                Orhan's journey in the world of high fashion began in the most prestigious environment imaginable - working for the legendary <strong>Vivienne Westwood</strong>. Under her guidance, Orhan honed his craft, learning the intricate techniques and uncompromising standards that define true bespoke tailoring.
              </p>
              <p className="leading-relaxed">
                During this time, Orhan had the extraordinary honor of dressing <strong>Princess Diana</strong>, creating garments for one of the world's most iconic fashion figures. This experience taught him not just technical excellence, but the importance of understanding each client's unique personality and the occasions they're dressing for.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Founding Orhan London Tailoring</h3>
              <p className="leading-relaxed">
                In <strong>2007</strong>, Orhan and his partner Denise took the bold step of opening their own atelier in Shoreditch. They chose this vibrant, creative neighborhood deliberately - it perfectly reflects their philosophy of blending traditional craftsmanship with modern, inclusive values.
              </p>
              <p className="leading-relaxed">
                Together, Orhan and Denise have built a business that's about more than just creating beautiful clothing. It's about creating a welcoming space where everyone - regardless of gender, background, or style - can experience the luxury and confidence of perfectly tailored garments.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-12 mb-4">The Orhan Approach</h3>
              <p className="leading-relaxed">
                What sets Orhan apart is his unique combination of high-fashion credentials and genuine, down-to-earth service. While his experience includes the highest echelons of British fashion and royalty, he brings this expertise to every client with warmth and accessibility.
              </p>
              <p className="leading-relaxed">
                Every consultation is unhurried. Every measurement is precise. Every stitch is placed with decades of expertise. Whether you're commissioning a bespoke wedding dress, a three-piece suit, or bringing in a garment for alterations, you receive the same level of care and attention.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Shoreditch Creative Hub</h3>
              <p className="leading-relaxed">
                The location near Old Street Station isn't just convenient - it's symbolic. Shoreditch represents the meeting of tradition and innovation, the old and the new, the established and the emerging. It's the perfect home for a business that honors traditional craftsmanship while embracing modern, inclusive values.
              </p>
              <p className="leading-relaxed">
                Over 17 years in this location, Orhan London Tailoring has become a trusted part of the community, serving clients from across London and beyond who seek genuine craftsmanship and personal service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border-2 border-gold/20 rounded-lg p-6 text-center hover:border-gold transition-colors">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gold">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Uncompromising standards in every garment we create, from the first stitch to the final fitting.
              </p>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-6 text-center hover:border-gold transition-colors">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gold">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Inclusivity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All genders welcome. We celebrate individuality and create garments that make everyone feel confident.
              </p>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-6 text-center hover:border-gold transition-colors">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gold">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Personal Service</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We take time to understand your needs, listen to your vision, and guide you with expert advice.
              </p>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-6 text-center hover:border-gold transition-colors">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gold">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Tradition</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hand-crafted using time-honored techniques, preserving the art of traditional tailoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600">
                Key moments in our story
              </p>
            </div>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-primary font-bold border-4 border-gold/20">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="bg-gold/10 inline-block px-3 py-1 rounded-full mb-2">
                    <span className="text-gold font-semibold text-sm">Early Career</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Vivienne Westwood</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Orhan worked for the legendary fashion designer Vivienne Westwood, learning from one of Britain's most influential fashion icons and mastering the art of high-end tailoring.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-primary font-bold text-2xl border-4 border-gold/20">
                    👑
                  </div>
                </div>
                <div>
                  <div className="bg-gold/10 inline-block px-3 py-1 rounded-full mb-2">
                    <span className="text-gold font-semibold text-sm">Royal Heritage</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Dressing Princess Diana</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The extraordinary honor of creating garments for Princess Diana, one of the world's most photographed and admired fashion figures. This experience shaped Orhan's understanding of how clothing can empower and transform.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-primary font-bold text-xl border-4 border-gold/20">
                    2007
                  </div>
                </div>
                <div>
                  <div className="bg-gold/10 inline-block px-3 py-1 rounded-full mb-2">
                    <span className="text-gold font-semibold text-sm">New Beginning</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Opening in Shoreditch</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Orhan and Denise founded Orhan London Tailoring in Shoreditch, bringing high-end bespoke tailoring to East London's creative hub. A fresh approach combining traditional craftsmanship with modern values.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-primary font-bold border-4 border-gold/20">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="bg-gold/10 inline-block px-3 py-1 rounded-full mb-2">
                    <span className="text-gold font-semibold text-sm">Present Day</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">17+ Years of Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Today, Orhan London Tailoring is a trusted name in bespoke tailoring, known for exceptional craftsmanship, inclusive values, and personal service. Serving clients across London and beyond for every special occasion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The dedicated professionals behind your perfect garments
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gold/20 rounded-lg p-8 hover:border-gold transition-colors">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-gold">
                  <span className="text-gold text-4xl font-bold">O</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Orhan</h3>
                <p className="text-gold font-semibold mb-4">Master Tailor & Founder</p>
                <p className="text-gray-600 leading-relaxed">
                  With decades of experience including work for Vivienne Westwood and Princess Diana, Orhan brings unparalleled expertise to every garment. His passion for perfection and eye for detail ensure every client receives clothing that fits beautifully and lasts for years.
                </p>
              </div>
            </div>
            <div className="bg-white border-2 border-gold/20 rounded-lg p-8 hover:border-gold transition-colors">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-gold">
                  <span className="text-gold text-4xl font-bold">D</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Denise</h3>
                <p className="text-gold font-semibold mb-4">Co-Founder</p>
                <p className="text-gray-600 leading-relaxed">
                  Denise co-founded Orhan London Tailoring in 2007, bringing warmth, organization, and dedication to client service. She ensures every client feels welcome and cared for from their first consultation through to collection of their finished garment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the Orhan Difference
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Ready to experience bespoke tailoring from a master craftsman? Book a free consultation and discover why clients trust Orhan for their most important occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-primary px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-lg transform hover:scale-105"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/bespoke-suits"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors border-2 border-gold"
            >
              View Our Services
            </Link>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-gold">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:02072503569" className="text-lg hover:text-gold-light transition-colors">
                020 7250 3569
              </a>
            </div>
            <span className="hidden sm:inline text-gold/60">|</span>
            <span className="text-sm text-gray-300">25a Pitfield Street, Shoreditch N1 6HB</span>
          </div>
        </div>
      </section>
    </>
  );
}
