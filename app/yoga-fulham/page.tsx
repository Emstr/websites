import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Fulham Yoga Studio | Yoga Classes in Fulham, SW6", description: "Fulham Yoga Studio offers Vinyasa Flow, Yin Yoga, Hot Yoga, Pregnancy Yoga, Private Sessions and Teacher Training. Yoga Alliance registered, all levels welcome. SW6." };

export default function HomePage() {
  const services = [
    { title: "Vinyasa Flow", desc: "A dynamic, breath-led practice linking movement and breath in a flowing sequence. Build strength, flexibility and focus.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    { title: "Yin Yoga", desc: "Slow, meditative postures held for longer durations to target deep connective tissues. Perfect for releasing tension and improving flexibility.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg> },
    { title: "Hot Yoga", desc: "Practise in our heated studio at 35-38°C. The warmth deepens stretches, promotes detoxification and leaves you feeling revitalised.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg> },
    { title: "Pregnancy Yoga", desc: "Gentle, supportive classes designed for expectant mothers. Ease discomfort, prepare your body for birth and connect with your baby.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
    { title: "Private Sessions", desc: "One-to-one or small group sessions tailored to your goals. Ideal for beginners, injury recovery or deepening your practice.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
    { title: "Teacher Training", desc: "Yoga Alliance accredited 200-hour and 300-hour teacher training programmes. Start your journey towards becoming a qualified yoga instructor.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> },
  ];

  const testimonials = [
    { name: "Sophie M.", text: "I've tried yoga studios all over London and Fulham Yoga is by far the best. The teachers are incredible, the space is beautiful and every class leaves me feeling amazing.", rating: 5 },
    { name: "James R.", text: "The hot yoga classes are brilliant. I started as a complete beginner and never once felt out of place. The instructors are so encouraging and attentive.", rating: 5 },
    { name: "Priya K.", text: "The pregnancy yoga classes were a lifeline during my third trimester. The teacher was so knowledgeable and supportive. I couldn't recommend it more highly.", rating: 5 },
  ];

  return (
    <>
      <section className="hero-gradient py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, var(--accent) 1px, transparent 1px), radial-gradient(circle at 75% 75%, var(--accent) 1px, transparent 1px)", backgroundSize: "50px 50px" }}></div></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Yoga Alliance Registered Studio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight">Find Your <span className="text-accent-gradient">Balance</span> in Fulham</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">A welcoming yoga studio for every body and every level. Vinyasa Flow, Yin, Hot Yoga, Pregnancy Yoga and more — taught by qualified, passionate instructors in the heart of SW6.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/yoga-fulham/services" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors text-center">View Our Classes</Link>
              <Link href="/yoga-fulham/contact" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors text-center">Book a Class</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Classes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Something for Every Body</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Whether you&apos;re stepping onto the mat for the first time or deepening an established practice, we have the right class for you.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-sm hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 bg-[var(--accent)]/10 rounded-full flex items-center justify-center text-[var(--accent)] mb-6 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">{service.icon}</div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/yoga-fulham/services" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Explore All Classes</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">More Than Just a Yoga Studio</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">We created Fulham Yoga Studio because we believe yoga should be accessible, inclusive and genuinely transformative. Every class is designed to meet you exactly where you are.</p>
              <div className="space-y-6">
                {[
                  { title: "Yoga Alliance Registered", desc: "All our instructors are Yoga Alliance certified with extensive training and continuing education." },
                  { title: "Qualified Instructors", desc: "Our team brings decades of combined teaching experience across a range of styles and specialisms." },
                  { title: "All Levels Welcome", desc: "From absolute beginners to advanced practitioners, every class offers modifications and progressions." },
                  { title: "Purpose-Built Studio", desc: "A beautiful, fully equipped studio with heated room, changing facilities, showers and a relaxation area." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-[var(--accent)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--primary)] mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-8 bg-white rounded-sm shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">40+</div>
                <p className="text-gray-600 mt-2 font-medium">Classes Per Week</p>
              </div>
              <div className="text-center p-8 bg-white rounded-sm shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">12</div>
                <p className="text-gray-600 mt-2 font-medium">Expert Teachers</p>
              </div>
              <div className="text-center p-8 bg-white rounded-sm shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">2,500+</div>
                <p className="text-gray-600 mt-2 font-medium">Happy Members</p>
              </div>
              <div className="text-center p-8 bg-white rounded-sm shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">4.9★</div>
                <p className="text-gray-600 mt-2 font-medium">Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">What Our Members Say</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-sm">
                <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }, (_, j) => (<svg key={j} className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="font-bold text-[var(--primary)]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Practice?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Your first class is on us. Book a free taster session and discover why thousands of Fulham residents choose our studio.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/yoga-fulham/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Book a Free Taster</Link>
            <a href="tel:02079461456" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors">Call 020 7946 1456</a>
          </div>
        </div>
      </section>
    </>
  );
}
