import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Brixton Dance Academy Since 2017",
  description: "Learn about Brixton Dance Academy — founded in 2017, 10 professional instructors, 600+ active students, and a mission to make dance accessible to everyone in South London.",
  openGraph: { title: "About Us | Brixton Dance Academy", description: "South London's home for dance since 2017. Professional instructors, all levels, all welcome." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Built by Dancers, for Everyone</h1>
        <p className="text-xl text-gray-200 leading-relaxed">A purpose-built dance studio on Acre Lane, bringing professional-level training to Brixton since 2017.</p>
      </div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Dance Should Be for Everyone</h2>
          <div className="gold-line mb-6"></div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">Brixton Dance Academy was founded in 2017 by a group of professional dancers who were tired of seeing talent in South London go undeveloped because the right spaces simply did not exist. We took over the third floor of 6 Acre Lane, installed sprung floors and mirror walls, and opened our doors to everyone.</p>
          <p className="text-gray-600 mb-6 leading-relaxed">Within a year we had a hundred students. Within three, we had outgrown our original layout and expanded into a second studio. Today, over 600 students train with us every week across more than 40 classes, and our community continues to grow. We have produced dancers who have gone on to perform in West End shows, music videos, and at international competitions.</p>
          <p className="text-gray-600 leading-relaxed">What matters most to us is not producing elite performers — though we do — but creating a space where a nervous beginner can walk in and find the same quality of instruction, the same warmth, and the same sense of belonging as someone who has been dancing their entire life.</p>
        </div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">8+</div><p className="text-gray-600 mt-2 font-medium">Years Running</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">10</div><p className="text-gray-600 mt-2 font-medium">Instructors</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">600+</div><p className="text-gray-600 mt-2 font-medium">Active Students</p></div>
          <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">40+</div><p className="text-gray-600 mt-2 font-medium">Classes Weekly</p></div>
        </div></div>
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width">
        <div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What We Believe</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Inclusivity</h3><p className="text-gray-600">Dance is for every body. We welcome all ages, all abilities, all backgrounds. Our classes are designed so everyone can participate and progress.</p></div>
          <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Excellence</h3><p className="text-gray-600">Our instructors are working professionals who bring the highest standard of training. We believe accessible does not mean watered down.</p></div>
          <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Community</h3><p className="text-gray-600">This is more than a studio — it is a family. We host showcases, social events, and workshops that bring our students together beyond regular classes.</p></div>
          <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Passion</h3><p className="text-gray-600">Every instructor here dances because they love it. That energy is contagious and it is the reason our students keep coming back week after week.</p></div>
          <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Progression</h3><p className="text-gray-600">We offer clear pathways from beginner to advanced. Our graded system means you always know where you are and where you are heading next.</p></div>
          <div className="card-premium p-8"><div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h3 className="text-xl font-bold text-primary mb-3">Local Roots</h3><p className="text-gray-600">We are proud to be part of Brixton. We work with local schools, run community workshops, and contribute to the cultural life of South London.</p></div>
        </div>
      </div></section>

      <section className="section-padding bg-white"><div className="container-width">
        <div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Find Us</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Our Brixton Studio</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 max-w-3xl mx-auto">We are on the third floor of 6 Acre Lane, a five-minute walk from Brixton tube. Two sprung-floor studios, changing rooms, and a social area where students hang out before and after class.</p></div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent max-w-2xl mx-auto">
          <address className="not-italic text-gray-700 mb-4 text-center"><strong className="text-primary text-lg">Brixton Dance Academy</strong><br />3rd Floor, 6 Acre Lane<br />Brixton, London SW2 5SG</address>
          <div className="text-center text-gray-600"><p className="mb-2"><strong>Opening Hours:</strong></p><p>Mon-Fri: 10am - 10pm</p><p>Sat: 9am - 7pm</p><p>Sun: 10am - 5pm</p></div>
        </div>
      </div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Come and Join Us</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Whether you have danced your whole life or never taken a single class, there is a place for you at Brixton Dance Academy.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/dance-studio-brixton/contact" className="btn-accent">Join a Class</Link>
          <a href="tel:02079463360" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 3360</a>
        </div>
      </div></section>
    </>
  );
}
