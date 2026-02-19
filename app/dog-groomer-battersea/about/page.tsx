import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | City & Guilds Qualified Dog Groomers",
  description:
    "Learn about Battersea Dog Spa - City & Guilds qualified, fully insured dog groomers in Battersea, SW11. Passionate about dogs and dedicated to expert grooming care.",
  openGraph: {
    title: "About Us | Battersea Dog Spa",
    description:
      "City & Guilds qualified dog groomers in Battersea. Passionate professionals dedicated to making every dog look and feel their best.",
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
              Passionate About Dogs Since Day One
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              We&apos;re a team of dedicated, qualified dog groomers who believe every
              dog deserves to look and feel amazing.
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
                From Dog Lovers to Battersea&apos;s Trusted Groomers
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Battersea Dog Spa was founded by a lifelong dog lover who saw a gap
                in the market for a grooming salon that truly puts dogs first. After
                completing City &amp; Guilds qualifications and training under some of
                the UK&apos;s top groomers, we opened our doors on Battersea Park Road
                with one simple mission: to provide exceptional grooming in a calm,
                stress-free environment.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                What started as a one-person operation has grown into a thriving
                salon with a team of qualified groomers, each bringing their own
                specialisms and passion for dogs. We&apos;ve groomed thousands of dogs
                over the years, from tiny Chihuahuas to giant Great Danes, and we
                love every single one.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we&apos;re proud to be Kennel Club listed and one of the
                highest-rated grooming salons in South West London. Our reputation
                is built on skill, patience and genuine love for what we do.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">10+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years Experience</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">5,000+</div>
                  <p className="text-gray-600 mt-2 font-medium">Dogs Groomed</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">50+</div>
                  <p className="text-gray-600 mt-2 font-medium">Breeds We Know</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">5★</div>
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
              What Makes Us Different
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Dog-First Approach</h3>
              <p className="text-gray-600">
                Your dog&apos;s comfort and wellbeing always come first. We never rush
                a groom and always work at a pace your dog is comfortable with.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Qualified Professionals</h3>
              <p className="text-gray-600">
                Every groomer on our team holds City &amp; Guilds qualifications and
                undergoes continuous professional development.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Premium Products</h3>
              <p className="text-gray-600">
                We use only the finest grooming products, carefully chosen for
                each coat type. Gentle, effective, and kind to sensitive skin.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Transparency</h3>
              <p className="text-gray-600">
                No hidden charges, no surprises. We discuss the groom plan and
                pricing before we start so you know exactly what to expect.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">One Dog at a Time</h3>
              <p className="text-gray-600">
                We dedicate our full attention to each dog. No cages, no waiting
                around &mdash; just one-to-one care from start to finish.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Heart of Battersea</h3>
              <p className="text-gray-600">
                Conveniently located on Battersea Park Road with easy access from
                Battersea Park, Clapham Junction and Wandsworth.
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
              Our Salon
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              Visit Us in Battersea
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our purpose-built grooming salon on Battersea Park Road is designed
              with your dog&apos;s comfort in mind. Clean, bright and welcoming &mdash;
              exactly how a grooming salon should be.
            </p>
          </div>

          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="text-accent font-semibold text-sm">Our Salon</span>
                <h3 className="text-2xl font-bold text-primary">Battersea, SW11</h3>
              </div>
            </div>
            <address className="not-italic text-gray-700 mb-4">
              42 Battersea Park Road
              <br />
              Battersea, London SW11 4JP
            </address>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                5 minutes from Battersea Park station
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free parking available nearby
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Purpose-built grooming salon
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Meet Our Team?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your dog&apos;s first appointment and experience the Battersea Dog
            Spa difference for yourself.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dog-groomer-battersea/contact" className="btn-accent">
              Book an Appointment
            </Link>
            <a
              href="tel:02079462567"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Call 020 7946 2567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
