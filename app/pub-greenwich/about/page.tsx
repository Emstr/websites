import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | A Greenwich Institution Since 2008",
  description:
    "Learn about The Greenwich Arms - a traditional gastropub on Nelson Road, Greenwich. Award-winning food, craft beers and community spirit since 2008.",
  openGraph: {
    title: "About Us | The Greenwich Arms",
    description: "The story behind Greenwich's favourite gastropub. Serving the community since 2008.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">A Greenwich Institution</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Since 2008, The Greenwich Arms has been the heartbeat of Nelson Road.
              Good beer, great food and a warm welcome — that is our promise.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Good Beer, Great Food Since 2008</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Greenwich Arms began life as a tired old boozer on the corner of
                Nelson Road. When we took it over in 2008, we had one simple ambition:
                to create the kind of pub we would want to drink in ourselves. That
                meant proper beer, proper food and a genuinely warm welcome for everyone
                who walked through the door.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the years, we have built something we are truly proud of. Our
                kitchen has won multiple awards for its Sunday roasts. Our cellar
                stocks over 30 craft beers from the finest British breweries. Our
                beer garden has become a Greenwich landmark. And our live music
                nights draw crowds from across south-east London every weekend.
              </p>
              <p className="text-gray-600 leading-relaxed">
                But what makes us most proud is our community. From the regulars
                who prop up the bar every evening to the families who pile in for
                Sunday lunch, the dog walkers who know we always have treats behind
                the bar, and the bands who have played their first gig on our stage
                — The Greenwich Arms belongs to all of you.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">2008</div><p className="text-gray-600 mt-2 font-medium">Established</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">30+</div><p className="text-gray-600 mt-2 font-medium">Craft Beers</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">5</div><p className="text-gray-600 mt-2 font-medium">Local Awards</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">100%</div><p className="text-gray-600 mt-2 font-medium">Dog Friendly</p></div>
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
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Quality First</h3>
              <p className="text-gray-600">Every pint poured, every plate served and every guest greeted — quality comes first at The Greenwich Arms. No shortcuts, no compromises.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Community</h3>
              <p className="text-gray-600">A pub is nothing without its people. We are proud to be at the heart of the Greenwich community, supporting local causes and welcoming all.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Welcome All</h3>
              <p className="text-gray-600">Dogs, families, solo drinkers, first-timers, lifelong regulars — everyone gets the same warm welcome. This is your local.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Local Sourcing</h3>
              <p className="text-gray-600">We source our ingredients from local farms and our beers from independent British breweries. Supporting local is in our DNA.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Live Culture</h3>
              <p className="text-gray-600">Music, quiz nights, watch parties — we believe a great pub should bring people together. There is always something happening at The Arms.</p>
            </div>
            <div className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Passion</h3>
              <p className="text-gray-600">We genuinely love what we do. From the cellar to the kitchen, every member of our team is passionate about making your visit brilliant.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Location</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">In the Heart of Greenwich</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Just minutes from the Cutty Sark, Greenwich Park and the Royal Observatory,
              we are perfectly placed for a pint after exploring one of London&apos;s most
              historic neighbourhoods.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 rounded-sm text-white">
              <h3 className="text-2xl font-bold mb-4">Find Us</h3>
              <address className="not-italic text-gray-200 mb-6">
                <strong className="text-white">The Greenwich Arms</strong><br />12 Nelson Road<br />Greenwich, London SE10 9JB
              </address>
              <div className="space-y-3 text-gray-200">
                <p><strong className="text-accent">Opening Hours:</strong></p>
                <p>Monday - Thursday: 11am - 11pm</p>
                <p>Friday - Saturday: 11am - 12am</p>
                <p>Sunday: 11am - 10:30pm</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent">
              <h3 className="text-2xl font-bold text-primary mb-4">Getting Here</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Cutty Sark DLR — 3 minute walk</li>
                <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Greenwich DLR — 5 minute walk</li>
                <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Greenwich Pier — 4 minute walk</li>
                <li className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Near Greenwich Park & the Cutty Sark</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Come and Say Hello</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a table for Sunday roast or just pop in for a pint. The kettle is always on — well, the taps are, anyway.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pub-greenwich/contact" className="btn-accent">Book a Table</Link>
            <a href="tel:02079461180" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 1180</a>
          </div>
        </div>
      </section>
    </>
  );
}
