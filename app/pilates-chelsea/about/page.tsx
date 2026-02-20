import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Premium Pilates Studio in Chelsea",
  description: "Learn about Chelsea Pilates Studio — established in 2018, eight expert instructors, over 5,000 members. Premium Pilates on Fulham Road, Chelsea.",
  openGraph: {
    title: "About Us | Chelsea Pilates Studio",
    description: "Premium Pilates studio in Chelsea since 2018. Eight qualified instructors, state-of-the-art equipment, and a welcoming community.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Our Studio, Our Story</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A purpose-built Pilates studio in the heart of Chelsea, founded
              by two instructors who wanted to create the space they always
              wished existed.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Founded on a Passion for Movement</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chelsea Pilates Studio was founded in 2018 by instructors
                Natasha Wells and Isabelle Dunn. After years of teaching at
                large chain gyms where class sizes were too big and equipment
                was neglected, they set out to build something better.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                They found the perfect space on Fulham Road and filled it with
                Balanced Body reformers, hired instructors who shared their
                philosophy, and created an environment where every person who
                walks through the door receives genuine attention and care.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, with eight instructors, over 5,000 members, and more
                than 40 classes per week, Chelsea Pilates has become one of
                London&apos;s most respected boutique Pilates studios. The mission
                remains the same: make Pilates accessible, effective, and
                enjoyable for everyone.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">5K+</div>
                  <p className="text-gray-600 mt-2 font-medium">Members Trained</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">8</div>
                  <p className="text-gray-600 mt-2 font-medium">Expert Instructors</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">2018</div>
                  <p className="text-gray-600 mt-2 font-medium">Established</p>
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

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What Guides Us</h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Inclusivity</h3>
              <p className="text-gray-600">Pilates is for every body. We welcome all ages, fitness levels, and abilities. Our instructors adapt every class to ensure nobody feels left behind.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Quality</h3>
              <p className="text-gray-600">From our equipment to our teaching, we never cut corners. Small class sizes, qualified instructors, and premium facilities are non-negotiable.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Community</h3>
              <p className="text-gray-600">Our studio is more than a place to exercise. It is a community of people who support and encourage one another on their wellness journeys.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Evidence-Based</h3>
              <p className="text-gray-600">Our teaching is grounded in anatomy and movement science. We stay current with research and continuing education to provide the most effective instruction.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Consistency</h3>
              <p className="text-gray-600">Results come from regular practice. We make it easy to build a consistent habit with flexible scheduling, class packs, and membership options.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Progress</h3>
              <p className="text-gray-600">We celebrate every milestone. Whether you are touching your toes for the first time or mastering a challenging reformer exercise, progress is progress.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Location</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">In the Heart of Chelsea</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our studio is located on Fulham Road, easily accessible from
              South Kensington, Sloane Square, and Gloucester Road stations.
              Bicycle parking is available outside the studio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 rounded-sm text-white">
              <h3 className="text-2xl font-bold mb-6">Studio Details</h3>
              <address className="not-italic text-gray-200 mb-6">
                <strong className="text-white">89 Fulham Road</strong><br />Chelsea, London SW3 6RD
              </address>
              <div className="mb-6">
                <p className="text-accent font-semibold mb-2">Opening Hours</p>
                <p className="text-gray-200">Mon-Fri: 6:30am - 9pm<br />Sat: 8am - 6pm<br />Sun: 9am - 5pm</p>
              </div>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>South Kensington — 5 min walk</li>
                <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Sloane Square — 7 min walk</li>
                <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Gloucester Road — 8 min walk</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent">
              <h3 className="text-2xl font-bold text-primary mb-6">Facilities</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our purpose-built studio features a dedicated reformer room
                with 10 Balanced Body machines, a spacious mat studio, private
                treatment rooms, and modern changing facilities with showers
                and complimentary toiletries.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide mats, props, and towels. Just bring yourself and a
                pair of grip socks (available for purchase at reception if you
                need them).
              </p>
              <Link href="/pilates-chelsea/contact" className="btn-accent inline-block">Book a Visit</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your complimentary introductory session and see why thousands
            of Londoners choose Chelsea Pilates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pilates-chelsea/contact" className="btn-accent">Book Intro Session</Link>
            <a href="tel:02079464510" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 4510</a>
          </div>
        </div>
      </section>
    </>
  );
}
