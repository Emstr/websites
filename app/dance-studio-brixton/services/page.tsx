import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Classes | Street Dance, Contemporary, Ballet, Latin & More",
  description: "Full timetable of dance classes at Brixton Dance Academy. Street dance, contemporary, ballet, Latin & salsa, kids dance, and private choreography. All levels welcome.",
  openGraph: { title: "Classes | Brixton Dance Academy", description: "Dance classes for all levels in Brixton. Street, contemporary, ballet, Latin, kids and private choreography." },
};

export default function ServicesPage() {
  const services = [
    { id: "street-dance", title: "Street Dance", subtitle: "Energy, Style, Culture", description: "Our street dance programme covers the full spectrum — hip hop foundations, breaking, locking, popping, waacking, and house dance. Classes are graded by level so you are always challenged but never overwhelmed. Our instructors are active in the UK street dance scene, competing and judging at national events, and they bring that authenticity into every session.", features: ["Hip hop foundations and freestyle", "Breaking, locking, and popping techniques", "Choreography set to current and classic tracks", "Beginner, intermediate, and advanced levels", "Regular battles and showcases", "Performance opportunities throughout the year"], icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>) },
    { id: "contemporary", title: "Contemporary Dance", subtitle: "Expression Through Movement", description: "Our contemporary classes draw on release technique, Cunningham, Limon, and improvisation. You will develop technical skill alongside creative expression, exploring how movement can communicate emotion and narrative. Classes include a thorough warm-up, technical exercises, and choreographic phrases that build week on week.", features: ["Release technique and floor work", "Cunningham and Limon foundations", "Improvisation and creative tasks", "Choreographic repertoire each term", "Open to all levels — no prior training needed", "Stretch and cool-down in every session"], icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>) },
    { id: "ballet", title: "Ballet", subtitle: "Strength, Grace, Discipline", description: "Classical ballet builds a foundation that benefits every other dance style. Our classes follow a structured format — barre, centre, and allegro — and are taught by instructors with professional ballet training. Whether you are an absolute beginner curious about pliés or a returning dancer looking to refine your technique, our ballet programme will challenge and reward you.", features: ["Structured barre and centre work", "Alignment, posture, and core strength", "Port de bras and musicality training", "Beginner, improver, and intermediate levels", "Pointe preparation for advancing students", "Adult-focused classes — no prior experience needed"], icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>) },
    { id: "latin-salsa", title: "Latin & Salsa", subtitle: "Rhythm, Connection, Joy", description: "Our Latin programme covers salsa (LA and Cuban style), bachata, cha-cha-cha, and merengue. Classes are social, upbeat, and designed to get you dancing with confidence in any setting. You do not need a partner — we rotate throughout the class so everyone dances with everyone. Our monthly Latin social nights are a highlight of the Brixton events calendar.", features: ["Salsa (LA and Cuban styles)", "Bachata and cha-cha-cha", "No partner required — solo welcome", "Social dance skills and lead/follow technique", "Monthly Latin social evenings", "Beginner and improver levels"], icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>) },
    { id: "kids-dance", title: "Kids Dance", subtitle: "Fun, Confidence, Coordination", description: "Our kids programme is split into age groups: Little Movers (4-7), Junior Crew (8-11), and Teen Squad (12-16). Each class is age-appropriate, combining structured learning with creative play and games. Children develop coordination, rhythm, confidence, and teamwork in a safe, supportive environment. We perform at local community events and hold an annual showcase.", features: ["Age-grouped classes (4-7, 8-11, 12-16)", "Mix of street, creative, and commercial styles", "Builds confidence, coordination, and teamwork", "DBS-checked instructors throughout", "Annual showcase and community performances", "Holiday workshops during school breaks"], icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>) },
    { id: "private-choreography", title: "Private Choreography", subtitle: "Your Vision, Our Expertise", description: "Our private choreography service is available for individuals, couples, and groups. Whether you need a wedding first dance, audition preparation, music video choreography, or simply want to develop your skills one-on-one, your instructor will create a bespoke routine tailored entirely to your goals, ability, and style preferences.", features: ["Wedding first dance choreography", "Audition and performance preparation", "Music video and commercial work", "One-to-one or small group sessions", "Flexible scheduling including evenings and weekends", "Video recording of routines available"], icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>) },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Classes</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Dance Classes for Every Style</h1>
        <p className="text-xl text-gray-200 leading-relaxed">Six dance disciplines, over 40 classes per week, all levels from complete beginner to advanced. Find your rhythm at Brixton Dance Academy.</p>
      </div></div></section>

      <section className="section-padding bg-white"><div className="container-width">
        <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Full Programme</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 max-w-3xl mx-auto">Every class is led by a professional instructor, graded by level, and designed to be as welcoming for first-timers as it is challenging for experienced dancers.</p></div>
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-accent font-semibold mb-4">{service.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">{service.features.map((f, i) => (<li key={i} className="flex items-start gap-3"><svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span className="text-gray-700">{f}</span></li>))}</ul>
                <Link href="/dance-studio-brixton/contact" className="btn-accent">Book This Class</Link>
              </div>
              <div className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}><div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center"><div className="text-white opacity-20 scale-150">{service.icon}</div></div></div>
            </div>
          ))}
        </div>
      </div></section>

      <section className="section-padding bg-gray-50"><div className="container-width">
        <div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Your Journey</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">How to Get Started</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center"><div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">1</div><h3 className="text-xl font-bold text-primary mb-2">Choose a Class</h3><p className="text-gray-600">Browse our timetable and pick a style and level that interests you. Not sure? We will help you choose.</p></div>
          <div className="text-center"><div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">2</div><h3 className="text-xl font-bold text-primary mb-2">Book Your Spot</h3><p className="text-gray-600">Register online, by phone, or walk in. Your first class is always the cheapest — trial rates available.</p></div>
          <div className="text-center"><div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">3</div><h3 className="text-xl font-bold text-primary mb-2">Turn Up & Move</h3><p className="text-gray-600">Wear comfortable clothes and trainers. No special kit needed. Just bring water and an open mind.</p></div>
          <div className="text-center"><div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">4</div><h3 className="text-xl font-bold text-primary mb-2">Keep Dancing</h3><p className="text-gray-600">Choose a membership or pay-as-you-go. Progress through levels and join our community showcases.</p></div>
        </div>
      </div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move?</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Your first class is the hardest one to book. After that, you will wonder why you waited so long.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/dance-studio-brixton/contact" className="btn-accent">Join a Class</Link>
          <a href="tel:02079463360" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 3360</a>
        </div>
      </div></section>
    </>
  );
}
