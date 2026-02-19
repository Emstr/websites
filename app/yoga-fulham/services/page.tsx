import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Classes | Yoga Classes in Fulham, SW6", description: "Explore our full range of yoga classes: Vinyasa Flow, Yin Yoga, Hot Yoga, Pregnancy Yoga, Private Sessions and Teacher Training. All levels welcome at Fulham Yoga Studio.", openGraph: { title: "Classes | Fulham Yoga Studio", description: "Vinyasa Flow, Yin Yoga, Hot Yoga, Pregnancy Yoga, Private Sessions and Teacher Training in Fulham, SW6." } };

export default function ServicesPage() {
  const services = [
    {
      title: "Vinyasa Flow",
      desc: "Our signature Vinyasa Flow classes link breath with movement in a dynamic, energising sequence. Each class is uniquely sequenced by the teacher, so no two sessions are the same. You will build strength, improve flexibility, increase cardiovascular fitness and develop a deeper connection between body and mind.",
      features: ["Dynamic, breath-led sequences", "Builds strength and flexibility", "Improves cardiovascular fitness", "Multiple levels offered daily", "60 and 75-minute classes available"],
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    },
    {
      title: "Yin Yoga",
      desc: "Yin Yoga is a slow, meditative practice where postures are held for three to five minutes. This deep, passive approach targets connective tissues — ligaments, tendons and fascia — improving flexibility and joint mobility. It is a powerful complement to more active styles and an excellent way to manage stress and cultivate mindfulness.",
      features: ["Postures held for 3-5 minutes", "Targets deep connective tissues", "Improves flexibility and joint health", "Reduces stress and anxiety", "Ideal for all levels and recovery days"],
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>,
    },
    {
      title: "Hot Yoga",
      desc: "Practise in our purpose-built heated studio, maintained at 35-38°C with controlled humidity. The heat warms your muscles, allowing deeper stretches and greater range of motion. Hot Yoga promotes detoxification through perspiration, boosts circulation and delivers an invigorating full-body workout that leaves you feeling refreshed and revitalised.",
      features: ["Heated studio at 35-38°C", "Deeper stretches and greater flexibility", "Promotes detoxification and circulation", "Full-body strength and endurance", "Towels and water provided"],
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>,
    },
    {
      title: "Pregnancy Yoga",
      desc: "Our pregnancy yoga classes are designed to support expectant mothers throughout their journey. Taught by specialist pre- and postnatal instructors, these gentle classes focus on easing common pregnancy discomforts, building strength for labour, and connecting with your growing baby through breathwork and relaxation techniques.",
      features: ["Specialist pre/postnatal instructors", "Safe modifications for each trimester", "Breathwork and relaxation for labour", "Eases back pain and fatigue", "Supportive community of expectant mothers"],
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    },
    {
      title: "Private Sessions",
      desc: "Our private yoga sessions are fully tailored to your individual needs, whether you are new to yoga, recovering from injury, working through a specific health condition or simply prefer one-to-one attention. Sessions can be held at our studio or at your home across Fulham and the surrounding areas.",
      features: ["Fully bespoke to your needs", "One-to-one or small groups (up to 4)", "Ideal for beginners and injury recovery", "Available at studio or your home", "Flexible scheduling including evenings"],
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    },
    {
      title: "Teacher Training",
      desc: "Our Yoga Alliance accredited teacher training programmes will equip you with the knowledge, skills and confidence to teach yoga. Whether you choose the foundational 200-hour course or the advanced 300-hour programme, you will study anatomy, philosophy, sequencing, adjustments and the business of teaching — all within a supportive and inspiring environment.",
      features: ["Yoga Alliance RYS 200 and RYS 300", "Comprehensive curriculum: anatomy, philosophy, sequencing", "Experienced lead trainers", "Weekend and intensive formats", "Mentorship and post-qualification support"],
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    },
  ];

  const process = [
    { step: "01", title: "Choose Your Class", desc: "Browse our timetable and pick the class that suits your level, goals and schedule." },
    { step: "02", title: "Book Online or Call", desc: "Reserve your spot through our booking system or call 020 7946 1456. Drop-ins are welcome if space allows." },
    { step: "03", title: "Arrive and Settle In", desc: "Come 10 minutes early. We provide mats, blocks, bolsters and blankets. Changing rooms and showers are available." },
    { step: "04", title: "Practise and Grow", desc: "Let our qualified instructors guide you through a transformative session. All levels are welcome, always." },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Classes</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Yoga Classes for Every Body</h1>
            <p className="text-xl text-gray-200 leading-relaxed">From energising Vinyasa Flow to deeply restorative Yin, our diverse timetable has something for everyone. Taught by Yoga Alliance registered instructors in our purpose-built Fulham studio.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-12 items-center ${i > 0 ? "mt-20 pt-20 border-t border-gray-100" : ""} ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center text-[var(--accent)] mb-6">{service.icon}</div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-4">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <Link href="/yoga-fulham/contact" className="text-[var(--accent)] font-semibold hover:text-[var(--accent-light)] transition-colors inline-flex items-center gap-2">Book This Class <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-50 p-8 rounded-sm">
                  <h3 className="font-bold text-[var(--primary)] mb-4">What to Expect</h3>
                  <ul className="space-y-3">{service.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span className="text-gray-600">{f}</span></li>
                  ))}</ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Getting Started Is Easy</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-[var(--accent)]/20 mb-4">{p.step}</div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{p.title}</h3>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Find Your Practice</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Not sure which class is right for you? Get in touch and we&apos;ll help you find the perfect fit.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/yoga-fulham/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Book a Class</Link>
            <a href="tel:02079461456" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors">Call 020 7946 1456</a>
          </div>
        </div>
      </section>
    </>
  );
}
