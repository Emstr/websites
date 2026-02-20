import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Serious Training Since 2019",
  description:
    "Learn about Camden Strength & Fitness - a proper training facility built by lifters, for lifters. 6 expert coaches, premium equipment and a community that pushes you further.",
  openGraph: {
    title: "About Us | Camden Strength & Fitness",
    description:
      "A proper training facility in Camden built by lifters, for lifters. Open since 2019.",
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
              Built by Lifters, for Lifters
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              We opened Camden Strength in 2019 because Camden deserved a proper
              training facility. No gimmicks, no nonsense — just serious coaching,
              premium equipment and a community that actually cares.
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
                From Garage Gym to Camden Institution
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Camden Strength & Fitness started the way most good gyms do — with
                frustration. Our founders were tired of overcrowded chain gyms with
                substandard equipment, cookie-cutter classes and personal trainers
                who had never actually trained hard themselves.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                So in 2019, they took over a disused warehouse unit on Chalk Farm
                Road and filled it with the equipment they actually wanted to
                train on. Eleiko bars, competition racks, heavy bags, assault
                bikes — the lot. They hired coaches who competed themselves and
                understood what real training looks like.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Word spread fast. What began as a small strength-focused facility
                has grown into one of Camden&apos;s most respected gyms, with over
                1,200 active members and a reputation for producing genuine
                results. We have added HIIT, boxing and nutrition coaching along
                the way, but our core belief has never changed: train hard, train
                smart, and surround yourself with people who push you to be
                better.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">2019</div>
                  <p className="text-gray-600 mt-2 font-medium">Founded</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">1.2k+</div>
                  <p className="text-gray-600 mt-2 font-medium">Active Members</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">6</div>
                  <p className="text-gray-600 mt-2 font-medium">Expert Coaches</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">40+</div>
                  <p className="text-gray-600 mt-2 font-medium">Weekly Classes</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Intensity</h3>
              <p className="text-gray-600">
                We believe in training with purpose and effort. Every session should
                move you closer to your goals. We do not do half measures and
                neither should you.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Expertise</h3>
              <p className="text-gray-600">
                Every coach on our team holds recognised qualifications and has
                genuine training experience. We hire people who live and breathe
                fitness, not just those who studied it.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Community</h3>
              <p className="text-gray-600">
                The best gym in the world is useless if the culture is wrong. We
                have built a welcoming, ego-free environment where everyone from
                beginners to competitors trains side by side.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Accountability</h3>
              <p className="text-gray-600">
                We track your progress, check your form and call you out when you
                are not giving your best. That is what real coaching looks like —
                honest, direct and always in your corner.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Evidence-Based</h3>
              <p className="text-gray-600">
                No fads, no broscience. Our programming and nutritional guidance is
                grounded in sports science and practical experience. We do what
                works, not what is trendy.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Consistency</h3>
              <p className="text-gray-600">
                Results come from showing up. We make it easy with extended hours,
                flexible memberships and a space that makes you actually want to
                train — seven days a week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Location
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Right in the Heart of Camden
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are on Chalk Farm Road, a few minutes&apos; walk from Chalk Farm
              tube and Camden Town station. Easy to get to before work, at lunch
              or in the evening.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 rounded-sm text-white">
              <h3 className="text-2xl font-bold mb-4">Find Us</h3>
              <address className="not-italic text-gray-200 mb-6">
                <strong className="text-white">Camden Strength & Fitness</strong>
                <br />
                Unit 3, 56 Chalk Farm Road
                <br />
                Camden, London NW1 8AN
              </address>
              <div className="space-y-3 text-gray-200">
                <p><strong className="text-accent">Opening Hours:</strong></p>
                <p>Mon-Fri: 5am - 10pm</p>
                <p>Sat: 7am - 8pm</p>
                <p>Sun: 8am - 6pm</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent">
              <h3 className="text-2xl font-bold text-primary mb-4">Getting Here</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Chalk Farm tube — 3 minute walk
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Camden Town tube — 5 minute walk
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Kentish Town tube — 8 minute walk
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Secure bike storage available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Come and See for Yourself
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a free trial session. We will show you round, let you train and
            you can decide if Camden Strength is the right fit for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/gym-camden/contact" className="btn-accent">
              Book Free Trial
            </Link>
            <a
              href="tel:02079463350"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 020 7946 3350
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
