import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shoreditch Fitness Studio | Personal Training in Shoreditch, E1",
  description: "REPS registered personal trainers in Shoreditch, East London. 1-to-1 personal training, group classes, nutrition coaching and body transformation programmes. Book your free trial today.",
  openGraph: { title: "Shoreditch Fitness Studio | Personal Training in Shoreditch", description: "REPS registered personal trainers delivering results-driven fitness in Shoreditch, E1." },
};

export default function HomePage() {
  const services = [
    { title: "1-to-1 Personal Training", description: "Bespoke training sessions designed around your goals, fitness level and schedule. Your trainer programmes every session, tracks your progress and keeps you accountable.", icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
    { title: "Group Classes", description: "High-energy small group sessions including HIIT, strength and conditioning, boxing fitness and yoga. Maximum 8 per class for quality coaching and a great atmosphere.", icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { title: "Nutrition Coaching", description: "Evidence-based nutrition plans tailored to your training goals. No fad diets, just practical guidance that fits your lifestyle, with regular check-ins and adjustments.", icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg> },
    { title: "Online Training", description: "Flexible training programmes with video demonstrations, weekly check-ins and full app access. Perfect if you travel, work irregular hours or prefer training at your own gym.", icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { title: "Body Transformation", description: "Intensive 8 or 12-week programmes combining structured training, personalised nutrition, weekly progress tracking and full accountability. Serious results for committed clients.", icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    { title: "Corporate Fitness", description: "On-site or studio-based fitness programmes for businesses. Boost team morale, reduce absenteeism and invest in your employees' health with tailored corporate packages.", icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
  ];

  const testimonials = [
    { name: "James R.", location: "Shoreditch", text: "I have trained at a lot of gyms across London and nothing comes close to the coaching here. My trainer understood my goals from day one and the results have been incredible. Down 12kg in 16 weeks and stronger than I have ever been." },
    { name: "Sophie T.", location: "Hoxton", text: "The group classes are brilliant. Small enough that the trainers actually correct your form and push you, but with a great energy that makes you want to come back. I genuinely look forward to every session." },
    { name: "David K.", location: "Hackney", text: "I signed up for the 12-week transformation programme after years of stop-start gym memberships. The structured approach, nutrition coaching and weekly check-ins made all the difference. Best investment I have made in my health." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">REPS Registered Personal Trainers</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight">Train Smarter. <span className="text-gold-gradient">Get Results.</span></h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">Expert personal training in the heart of Shoreditch. Whether you want to lose weight, build strength, improve fitness or transform your body, our REPS registered trainers will get you there.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/personal-trainer-shoreditch/contact" className="btn-accent text-center">Book Free Trial Session</Link>
              <Link href="/personal-trainer-shoreditch/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-center">View Our Services</Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-gray-300">
              <span className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>REPS Registered</span>
              <span className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Level 3 Qualified</span>
              <span className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>First Aid Trained</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Our Training Services</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">From 1-to-1 personal training to group classes and corporate fitness, we have the right programme for every goal and every schedule.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="card-premium p-8 group hover:border-accent/20 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/personal-trainer-shoreditch/services" className="btn-accent">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Train With Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">More Than Just a Gym</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">We are not a big-box gym where you swipe in and figure it out yourself. Every session at Shoreditch Fitness is coached, programmed and tracked. Our trainers are REPS registered, Level 3 qualified and genuinely passionate about helping you hit your goals.</p>
              <p className="text-gray-600 mb-8 leading-relaxed">Whether you are a complete beginner or an experienced athlete, we meet you where you are and take you where you want to be. Our studio is equipped with premium strength, conditioning and functional training equipment in a private, focused environment.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><p className="text-gray-700"><strong>Qualified Coaches:</strong> All trainers are REPS registered with a minimum Level 3 Personal Training qualification.</p></div>
                <div className="flex items-start gap-3"><svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><p className="text-gray-700"><strong>Private Studio:</strong> No crowds, no waiting for equipment. Train in a focused environment designed for results.</p></div>
                <div className="flex items-start gap-3"><svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><p className="text-gray-700"><strong>Progress Tracking:</strong> Every session logged, every rep counted. We track your results so you can see exactly how far you have come.</p></div>
                <div className="flex items-start gap-3"><svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><p className="text-gray-700"><strong>Flexible Hours:</strong> Open from 6am on weekdays. Early morning, lunchtime and evening sessions available.</p></div>
              </div>
            </div>
            <div className="bg-primary/5 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">500+</div><p className="text-gray-600 mt-2 font-medium">Clients Trained</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">4.9/5</div><p className="text-gray-600 mt-2 font-medium">Google Rating</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">7</div><p className="text-gray-600 mt-2 font-medium">Expert Trainers</p></div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">6am</div><p className="text-gray-600 mt-2 font-medium">Earliest Session</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Client Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What Our Clients Say</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="card-premium p-8">
                <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, si) => (<svg key={si} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-gray-100 pt-4"><p className="font-bold text-primary">{t.name}</p><p className="text-sm text-gray-500">{t.location}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Training?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a free trial session and find out what results-driven personal training feels like. No commitment, no pressure.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/personal-trainer-shoreditch/contact" className="btn-accent">Book Free Trial</Link>
            <a href="tel:02079466789" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 6789</a>
          </div>
        </div>
      </section>

      {/* Trust Notice */}
      <section className="py-8 bg-gray-100">
        <div className="container-width">
          <div className="fca-notice">
            <p><strong>Professional Standards:</strong> All trainers at Shoreditch Fitness Studio are registered with the Register of Exercise Professionals (REPS) and hold a minimum Level 3 Personal Training qualification. Always consult your GP before beginning a new exercise programme if you have any pre-existing medical conditions.</p>
          </div>
        </div>
      </section>
    </>
  );
}
