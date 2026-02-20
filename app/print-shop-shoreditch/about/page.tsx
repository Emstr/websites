import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Shoreditch Print & Design Studio Since 2016",
  description:
    "Learn about Shoreditch Print Studio — an independent print and design studio on Curtain Road since 2016. Eco-friendly inks, 4 in-house designers, same-day turnaround.",
  openGraph: {
    title: "About Us | Shoreditch Print Studio",
    description:
      "Independent print and design studio in the heart of Shoreditch since 2016. Eco-friendly, fast, and personal.",
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
              Print With Purpose Since 2016
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              An independent studio on Curtain Road, making brilliant print for
              Shoreditch&apos;s creative community and businesses across London.
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
                From One Press to a Full Studio
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Shoreditch Print Studio started in 2016 with a single digital
                press and a conviction that print wasn&apos;t dying — it was being
                done badly. We set up on Curtain Road to offer East London&apos;s
                startups, artists, and independent businesses a local print
                partner who actually cared about the finished product.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Within two years we&apos;d added large-format capabilities, a
                dedicated screen-printing room, and an in-house design team.
                Today we employ four full-time designers alongside our print
                technicians, handling everything from a box of business cards to
                a complete rebrand with exhibition rollout.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sustainability has been part of our DNA from day one. We were
                one of the first studios in the area to switch entirely to
                vegetable-based and water-based inks, and we only stock
                FSC-certified or recycled papers. Printing should leave a mark
                on your audience, not on the planet.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">9+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years Running</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">4</div>
                  <p className="text-gray-600 mt-2 font-medium">In-House Designers</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">10k+</div>
                  <p className="text-gray-600 mt-2 font-medium">Jobs Delivered</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">100%</div>
                  <p className="text-gray-600 mt-2 font-medium">Eco Inks</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Eco-friendly inks, FSC-certified papers, and recycled stocks as
                standard. We track our carbon footprint and offset what we
                can&apos;t eliminate.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Quality First</h3>
              <p className="text-gray-600">
                We check every job before it leaves the studio. If it doesn&apos;t
                meet our standards, we reprint it — no questions, no charge.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Speed</h3>
              <p className="text-gray-600">
                Same-day turnaround on core products. We know deadlines are
                real and we&apos;ll move mountains to hit yours.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Personal Service</h3>
              <p className="text-gray-600">
                You speak to the people who run your job, not a call centre.
                Pop in, call, or email — we&apos;re always here.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Honest Pricing</h3>
              <p className="text-gray-600">
                Clear quotes with no hidden extras. The price we quote is the
                price you pay. Bulk discounts available on larger runs.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Design Expertise</h3>
              <p className="text-gray-600">
                Four talented designers in-house. Whether you need a tweak or a
                total rebrand, our creative team delivers.
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
              Our Shoreditch Studio
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We&apos;re on Curtain Road, right in the heart of Shoreditch. A
              three-minute walk from Shoreditch High Street Overground and four
              minutes from Old Street tube. Pop in anytime during opening hours
              — no appointment needed for quotes and drop-offs.
            </p>
          </div>

          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent max-w-2xl mx-auto">
            <address className="not-italic text-gray-700 mb-4 text-center">
              <strong className="text-primary text-lg">Shoreditch Print Studio</strong>
              <br />
              52 Curtain Road
              <br />
              Shoreditch, London EC2A 3PT
            </address>
            <div className="text-center text-gray-600">
              <p className="mb-2"><strong>Opening Hours:</strong></p>
              <p>Monday - Friday: 9am - 7pm</p>
              <p>Saturday: 10am - 5pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start a Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether you have files ready to print or need design from scratch,
            we&apos;d love to hear from you. Quotes are always free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/print-shop-shoreditch/contact" className="btn-accent">
              Get a Free Quote
            </Link>
            <a
              href="tel:02079468830"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 020 7946 8830
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
