import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Award-Winning Tattoo Studio in Shoreditch",
  description:
    "Learn about Shoreditch Ink Studio — established in 2017, five resident artists, over 8,000 tattoos completed. Award-winning tattoo studio on Rivington Street, Shoreditch.",
  openGraph: {
    title: "About Us | Shoreditch Ink Studio",
    description:
      "Award-winning tattoo studio in Shoreditch since 2017. Five resident artists specialising in custom designs, cover-ups, and all styles.",
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
              The Studio Behind the Ink
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A collective of five artists united by a shared obsession with
              quality, creativity, and doing right by every client who walks
              through our doors.
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
                Born in Shoreditch, Built on Trust
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Shoreditch Ink Studio opened its doors on Rivington Street in
                2017. What started as a two-chair operation run by founders
                Marcus Cole and Priya Sharma has grown into one of East
                London&apos;s most respected tattoo studios.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We chose Shoreditch because it is a neighbourhood that values
                creativity, individuality, and craft. Those values are baked
                into everything we do — from the way we design to the standards
                we hold ourselves to in hygiene and customer care.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, our team of five resident artists covers every major
                style of tattooing. We have completed over 8,000 pieces and
                built a loyal client base that returns again and again. We are
                proud of every tattoo that leaves this studio.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">8K+</div>
                  <p className="text-gray-600 mt-2 font-medium">Tattoos Completed</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">5</div>
                  <p className="text-gray-600 mt-2 font-medium">Resident Artists</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">2017</div>
                  <p className="text-gray-600 mt-2 font-medium">Established</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">4.9</div>
                  <p className="text-gray-600 mt-2 font-medium">Google Rating</p>
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
              What We Stand For
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Originality</h3>
              <p className="text-gray-600">
                Every piece is designed from scratch. We do not copy flash sheets
                or replicate other artists&apos; work. Your tattoo will be
                genuinely unique to you.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Hygiene First</h3>
              <p className="text-gray-600">
                Licensed by Hackney Council with hospital-grade sterilisation
                protocols. Single-use needles, disposable equipment, and
                rigorous sanitisation between every client.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Respect</h3>
              <p className="text-gray-600">
                We respect your body, your time, and your ideas. We will never
                pressure you into a larger piece or upsell you on something
                you do not need. Honest advice, always.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Craft</h3>
              <p className="text-gray-600">
                Tattooing is a lifelong discipline. Our artists constantly
                study, practise, and refine their techniques to stay at the
                top of their game.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Patience</h3>
              <p className="text-gray-600">
                Great tattoos take time. We never rush a session or cut corners.
                If it takes an extra hour to get it perfect, that is what we
                do.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Community</h3>
              <p className="text-gray-600">
                We are part of the Shoreditch creative community. We
                collaborate with local artists, host events, and support the
                neighbourhood that supports us.
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
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              In the Heart of Shoreditch
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our studio sits on Rivington Street, one of Shoreditch&apos;s most
              iconic streets. Just a three-minute walk from Old Street station,
              we are easy to find and surrounded by the best of East London.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 rounded-sm text-white">
              <h3 className="text-2xl font-bold mb-6">Studio Details</h3>
              <address className="not-italic text-gray-200 mb-6">
                <strong className="text-white">18 Rivington Street</strong>
                <br />
                Shoreditch, London EC2A 3DU
              </address>
              <div className="mb-6">
                <p className="text-accent font-semibold mb-2">Opening Hours</p>
                <p className="text-gray-200">
                  Tuesday - Saturday: 11am - 8pm
                  <br />
                  Sunday: 12pm - 6pm
                  <br />
                  Monday: Closed
                </p>
              </div>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Old Street station — 3 min walk
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Shoreditch High Street — 5 min walk
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Liverpool Street — 8 min walk
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent">
              <h3 className="text-2xl font-bold text-primary mb-6">Walk-Ins &amp; Bookings</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We welcome walk-ins for consultations and small pieces, subject
                to availability. For larger projects and guaranteed appointment
                times, we recommend booking ahead via phone, email, or our
                contact form.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A deposit is required to secure your booking. This is deducted
                from the final price and is non-refundable if you cancel with
                less than 48 hours notice.
              </p>
              <Link
                href="/tattoo-shoreditch/contact"
                className="btn-accent inline-block"
              >
                Book Your Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Discuss Your Next Tattoo?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a free consultation and meet our artists. No pressure,
            no obligation — just honest conversation about your ideas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tattoo-shoreditch/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <a
              href="tel:02079463210"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 020 7946 3210
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
