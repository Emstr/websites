import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Notting Hill's Premier Nail Salon",
  description:
    "Learn about Notting Hill Nail & Beauty Bar. VTCT qualified technicians, vegan-friendly products and a passion for beautiful nails in London W11.",
  openGraph: {
    title: "About Us | Notting Hill Nail & Beauty Bar",
    description: "Notting Hill's favourite nail salon. VTCT qualified, hygiene certified, vegan-friendly.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Our Story</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A passion project that became Notting Hill&apos;s most-loved nail salon. We believe beautiful nails should come without compromise.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Born From a Love of Nail Art</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Notting Hill Nail &amp; Beauty Bar was founded in 2019 by two friends who shared a simple belief: you shouldn&apos;t have to choose between gorgeous nails and ethical products. Fed up with salons that cut corners on hygiene and used harsh chemicals, they set out to create something better.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our salon on Pembridge Road quickly became a favourite with Notting Hill locals, known for our meticulous attention to detail, stunning nail art, and warm, welcoming atmosphere. Every product we use is vegan-friendly and cruelty-free, and every technician is VTCT qualified.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we&apos;re proud to be one of West London&apos;s highest-rated nail salons, with clients travelling from across the city for our signature treatments and bespoke nail art. We&apos;re still that same passion project &mdash; just with a lot more happy clients.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">5,000+</div>
                  <p className="text-gray-600 mt-2 font-medium">Happy Clients</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">5</div>
                  <p className="text-gray-600 mt-2 font-medium">Star Rating</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">6</div>
                  <p className="text-gray-600 mt-2 font-medium">Years Experience</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="stat-number">100%</div>
                  <p className="text-gray-600 mt-2 font-medium">Vegan Products</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Ethical Beauty</h3>
              <p className="text-gray-600">100% vegan-friendly, cruelty-free products. We prove that you can have stunning nails without harming animals or the planet.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Hygiene First</h3>
              <p className="text-gray-600">Hospital-grade sterilisation, single-use files and buffers, and rigorous cleaning protocols between every client. No exceptions.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Qualified Experts</h3>
              <p className="text-gray-600">All technicians hold VTCT qualifications and undergo regular advanced training to stay at the forefront of nail trends and techniques.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Nail Health</h3>
              <p className="text-gray-600">We care about the health of your natural nails as much as how they look. Our techniques and products prioritise nail wellbeing.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Creative Excellence</h3>
              <p className="text-gray-600">Nail art is our passion. Our artists continuously push boundaries, creating unique designs you won&apos;t find anywhere else.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Your Time Matters</h3>
              <p className="text-gray-600">We respect your schedule. Appointments start on time, and we never rush your treatment. Walk-ins welcome when space allows.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Location</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Find Us in Notting Hill</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our salon is located on Pembridge Road, just a short walk from Notting Hill Gate station. We serve clients from across West London including Bayswater, Ladbroke Grove, Holland Park and Kensington.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Visit?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your appointment and experience the Notting Hill Nail &amp; Beauty Bar difference for yourself.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/nail-salon-notting-hill/contact" className="btn-accent">Book Appointment</Link>
            <a href="tel:02079463678" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 3678</a>
          </div>
        </div>
      </section>
    </>
  );
}
