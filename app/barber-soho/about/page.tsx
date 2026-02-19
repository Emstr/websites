import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Master Barbers Since 2015",
  description:
    "Learn about Soho Barber Co - master barbers in the heart of Soho, London since 2015. Traditional barbering meets modern style on Berwick Street, W1.",
  openGraph: {
    title: "About Us | Soho Barber Co",
    description:
      "Master barbers in Soho since 2015. Traditional craftsmanship, modern style, premium grooming.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              The Soho Barber Co Story
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A proper barbershop in the heart of Soho. No gimmicks, no nonsense &mdash;
              just skilled barbers who take genuine pride in their craft.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">
                Craftsmanship Since 2015
              </h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Soho Barber Co was founded in 2015 with a simple idea: bring proper
                barbering back to the West End. We set up shop on Berwick Street &mdash;
                right in the beating heart of Soho &mdash; and got to work.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From day one, we&apos;ve been about quality over everything else. Every
                barber in our shop is a master of the craft with years of experience.
                We don&apos;t do trainees, and we don&apos;t rush. When you sit in our chair,
                you get the full attention of someone who genuinely cares about
                getting it right.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What started as a two-chair operation has grown into one of Soho&apos;s
                most respected barbershops. We&apos;ve built our reputation the old-fashioned
                way &mdash; one great haircut at a time. Our regulars include City workers,
                creatives, locals and visitors from across London who know they&apos;ll
                always leave looking sharp.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">10+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years in Soho</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">15k+</div>
                  <p className="text-gray-600 mt-2 font-medium">Satisfied Clients</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">5</div>
                  <p className="text-gray-600 mt-2 font-medium">Master Barbers</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">5★</div>
                  <p className="text-gray-600 mt-2 font-medium">Google Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">
              What We Stand For
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Craftsmanship</h3>
              <p className="text-gray-600">
                Every cut is a craft. We don&apos;t just trim hair &mdash; we shape it with
                precision, skill and genuine attention to detail. That&apos;s the
                difference a master barber makes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Community</h3>
              <p className="text-gray-600">
                We&apos;re not just a business &mdash; we&apos;re part of Soho. Our shop is a
                meeting place where regulars catch up, newcomers are welcomed and
                everyone leaves feeling better than when they arrived.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Consistency</h3>
              <p className="text-gray-600">
                Whether it&apos;s your first visit or your hundredth, you&apos;ll get the
                same high standard every time. That&apos;s a promise, and it&apos;s why
                our clients keep coming back.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Premium Products</h3>
              <p className="text-gray-600">
                We only use top-quality products from brands we trust. No cheap
                alternatives, no cutting corners. Your hair deserves the best and
                that&apos;s what we deliver.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Respect Your Time</h3>
              <p className="text-gray-600">
                Walk-ins are welcome and we keep wait times short. If you&apos;ve
                booked, we&apos;ll be ready when you arrive. We value your time as
                much as you do.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Passion</h3>
              <p className="text-gray-600">
                Every barber in our team chose this trade because they love it.
                That passion shows in every cut, shave and style we deliver.
                It&apos;s not a job &mdash; it&apos;s what we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">
              Right in the Heart of Soho
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We&apos;re on Berwick Street, one of Soho&apos;s most iconic streets. Easy to
              reach from Oxford Circus, Tottenham Court Road and Piccadilly Circus
              tube stations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-8 lg:p-12 rounded-sm text-white max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Soho Barber Co</h3>
              </div>
            </div>
            <address className="not-italic text-gray-200 mb-6 text-lg">
              42 Berwick Street<br />
              Soho, London W1F 8SE
            </address>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                2 minutes from Oxford Circus tube
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                5 minutes from Tottenham Court Road
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Open 7 days a week
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Come See Us
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Walk in any time or book ahead to guarantee your chair. We look
            forward to having you in.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/barber-soho/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">
              Book Your Chair
            </Link>
            <a
              href="tel:02079467890"
              className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors"
            >
              Call 020 7946 7890
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
