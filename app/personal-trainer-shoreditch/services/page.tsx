import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Personal Training, Group Classes & Nutrition Coaching",
  description: "Explore our fitness services: 1-to-1 personal training, group classes, nutrition coaching, online training, body transformation and corporate fitness. REPS registered trainers in Shoreditch.",
  openGraph: { title: "Our Services | Shoreditch Fitness Studio", description: "REPS registered personal training, group classes, nutrition coaching and more in Shoreditch, E1." },
};

export default function ServicesPage() {
  const services = [
    { id: "personal-training", title: "1-to-1 Personal Training", subtitle: "Your Goals. Your Programme. Your Results.", description: "Every 1-to-1 session is programmed specifically for you. Your trainer assesses your movement, understands your goals and designs a progressive plan that evolves as you do. Whether you want to lose weight, build muscle, improve athletic performance or simply feel better, your programme is built from scratch and adjusted every step of the way.", features: ["Initial fitness assessment and goal setting", "Fully programmed and periodised training plan", "Technique coaching and form correction", "Progress tracking with regular benchmarks", "Flexible scheduling from 6am to 9pm", "Access to our private studio and equipment"], icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
    { id: "group-classes", title: "Group Classes", subtitle: "Small Groups. Big Energy. Real Coaching.", description: "Our group classes are capped at 8 participants to ensure quality coaching and a genuine team atmosphere. Choose from HIIT, strength and conditioning, boxing fitness, yoga and more. Every class is led by a qualified trainer who coaches technique, scales movements and pushes you harder than you would push yourself.", features: ["Maximum 8 per class for quality coaching", "HIIT, strength, boxing and yoga options", "Movements scaled to all fitness levels", "Morning, lunchtime and evening sessions", "Pay-as-you-go or unlimited monthly membership", "Free trial class for new members"], icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { id: "nutrition-coaching", title: "Nutrition Coaching", subtitle: "Fuel Your Training. Transform Your Results.", description: "Training is only half the picture. Our nutrition coaching gives you a practical, sustainable approach to eating that supports your goals. No crash diets, no cutting out food groups. We create a personalised plan based on your preferences, lifestyle and training schedule, then check in regularly to keep you on track.", features: ["Personalised calorie and macro targets", "Flexible meal plan based on your preferences", "Weekly check-ins and plan adjustments", "Education on portion control and food choices", "Supplement guidance where appropriate", "Compatible with all dietary requirements"], icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg> },
    { id: "online-training", title: "Online Training", subtitle: "Expert Programming. Train Anywhere.", description: "Our online training programmes give you the same quality programming and coaching, delivered through our training app. You receive a fully structured programme with video demonstrations of every exercise, weekly check-ins with your coach and adjustments based on your feedback and progress. Ideal for those who travel, work shifts or prefer training at their own gym.", features: ["Fully structured training programme via app", "Video demonstrations of every exercise", "Weekly coach check-ins and programme updates", "Nutrition guidance included", "Train at any gym or home setup", "Monthly subscription with no lock-in"], icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { id: "body-transformation", title: "Body Transformation", subtitle: "8 or 12 Weeks. Complete Commitment. Serious Results.", description: "Our transformation programmes are designed for people who are ready to make a real change. Combining structured personal training, tailored nutrition, weekly progress photos, measurements and full accountability, these programmes deliver dramatic results for those prepared to commit. We have helped hundreds of clients achieve results they never thought possible.", features: ["Choice of 8-week or 12-week programme", "3-4 personal training sessions per week", "Full nutrition plan with weekly adjustments", "Weekly progress photos and measurements", "Body composition analysis at start and finish", "Before and after documentation"], icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    { id: "corporate-fitness", title: "Corporate Fitness", subtitle: "Invest in Your Team's Health and Performance.", description: "We work with businesses across East London to deliver tailored fitness programmes for their teams. From on-site sessions at your office to group bookings at our studio, we design programmes that boost energy, reduce stress and improve team cohesion. Corporate fitness is proven to reduce absenteeism and improve productivity.", features: ["On-site sessions at your workplace", "Group bookings at our Shoreditch studio", "Tailored programmes for your team's needs", "Flexible scheduling around work hours", "Health and wellness workshops available", "Scalable packages for teams of any size"], icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
  ];

  const process = [
    { step: "1", title: "Free Trial", description: "Book a free trial session. We assess your fitness, discuss your goals and show you how we train." },
    { step: "2", title: "Your Programme", description: "Your trainer designs a bespoke training and nutrition plan tailored to your goals and schedule." },
    { step: "3", title: "Train & Track", description: "Every session is coached, every rep is logged. We track your progress and adjust your programme as you improve." },
    { step: "4", title: "See Results", description: "Regular benchmarks, progress photos and measurements prove what consistent, expert training can achieve." },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Training Services</h1><p className="text-xl text-gray-200 leading-relaxed">From 1-to-1 personal training to group classes, nutrition coaching and corporate fitness. Every programme is designed to deliver real, measurable results.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width">
        {services.map((service, i) => (
          <div key={service.id} id={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${i > 0 ? "mt-20 pt-20 border-t border-gray-100" : ""} ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">{service.icon}</div><span className="text-accent font-semibold tracking-wider uppercase text-sm">{service.subtitle}</span></div>
              <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
              <Link href="/personal-trainer-shoreditch/contact" className="btn-accent">Get Started</Link>
            </div>
            <div className="flex-1 bg-gray-50 rounded-sm p-8">
              <h3 className="text-lg font-bold text-primary mb-6">What&apos;s Included</h3>
              <ul className="space-y-4">{service.features.map((f, fi) => (<li key={fi} className="flex items-start gap-3"><svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span className="text-gray-700">{f}</span></li>))}</ul>
            </div>
          </div>
        ))}
      </div></section>

      {/* Our Process */}
      <section className="section-padding bg-gray-50"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">How It Works</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Getting Started Is Simple</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{process.map((p, i) => (<div key={i} className="text-center"><div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{p.step}</div><h3 className="text-xl font-bold text-primary mb-3">{p.title}</h3><p className="text-gray-600">{p.description}</p></div>))}</div>
      </div></section>

      {/* CTA */}
      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Free Trial</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Experience a free trial session with one of our trainers. No commitment, no sales pitch. Just great coaching.</p><Link href="/personal-trainer-shoreditch/contact" className="btn-accent">Book Free Trial</Link></div></section>

      <section className="py-8 bg-gray-100"><div className="container-width"><div className="fca-notice"><p><strong>Professional Standards:</strong> All trainers at Shoreditch Fitness Studio are registered with the Register of Exercise Professionals (REPS) and hold a minimum Level 3 Personal Training qualification. Results may vary. Always consult your GP before beginning a new exercise programme.</p></div></div></section>
    </>
  );
}
