import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} /></div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6"><div className="w-12 h-px bg-accent"></div><span className="text-accent font-semibold tracking-wider uppercase text-sm">Move, Express, Belong</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Brixton&apos;s Home for <span className="text-gold-gradient">Dance</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">Street dance, contemporary, ballet, Latin, kids classes, and private choreography. Ten professional instructors, all levels welcome, seven days a week.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/dance-studio-brixton/contact" className="btn-accent text-lg">Join a Class</Link>
              <Link href="/dance-studio-brixton/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">View Timetable</Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>All Levels Welcome</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>600+ Students</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Est. 2017</span></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10"><svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="180" stroke="#e84118" strokeWidth="2" fill="none" /><circle cx="200" cy="200" r="140" stroke="#e84118" strokeWidth="1" fill="none" /><circle cx="200" cy="200" r="100" stroke="#e84118" strokeWidth="0.5" fill="none" /></svg></div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Classes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Dance Styles for Everyone</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From high-energy street dance to elegant ballet, find the style that moves you. Beginners are always welcome.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Street Dance</h3>
              <p className="text-gray-600 mb-4">Hip hop, breaking, locking, and popping. High-energy classes set to the latest tracks, taught by instructors who live and breathe the culture.</p>
              <Link href="/dance-studio-brixton/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Contemporary</h3>
              <p className="text-gray-600 mb-4">Expressive, fluid movement that blends modern dance techniques with creative improvisation. Develop artistry, strength, and emotional storytelling.</p>
              <Link href="/dance-studio-brixton/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Ballet</h3>
              <p className="text-gray-600 mb-4">Classical ballet training from barre work to centre practice. Build core strength, flexibility, and grace — whether you are a beginner or returning dancer.</p>
              <Link href="/dance-studio-brixton/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Latin &amp; Salsa</h3>
              <p className="text-gray-600 mb-4">Vibrant salsa, bachata, and cha-cha-cha classes. Come solo or bring a partner — our social dance nights are legendary in South London.</p>
              <Link href="/dance-studio-brixton/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Kids Dance</h3>
              <p className="text-gray-600 mb-4">Fun, age-appropriate classes for children aged 4 to 16. Build confidence, coordination, and friendships through creative movement and dance games.</p>
              <Link href="/dance-studio-brixton/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
            <div className="card-premium p-8">
              <div className="service-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">Private Choreography</h3>
              <p className="text-gray-600 mb-4">One-to-one sessions for wedding first dances, performances, auditions, or personal development. Your instructor builds a routine around you.</p>
              <Link href="/dance-studio-brixton/services" className="text-accent font-semibold hover:text-accent-700 inline-flex items-center gap-2">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
          </div>
          <div className="text-center mt-12"><Link href="/dance-studio-brixton/services" className="btn-primary">View All Classes</Link></div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Brixton Dance Academy</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Where Community Meets Creativity</h2>
            <div className="gold-line mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">We built this studio because Brixton deserved a proper dance space — professional facilities, professional instructors, and an atmosphere that makes everyone feel they belong from their very first class.</p>
            <div className="space-y-6">
              <div className="flex gap-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div><div><h3 className="text-lg font-bold text-primary mb-1">10 Professional Instructors</h3><p className="text-gray-600">Trained, experienced dancers who perform, compete, and choreograph professionally. They bring genuine passion and skill to every class.</p></div></div>
              <div className="flex gap-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div><div><h3 className="text-lg font-bold text-primary mb-1">Inclusive & Welcoming</h3><p className="text-gray-600">Complete beginners train alongside advanced dancers. There is no judgement here — only encouragement. All ages, backgrounds, and abilities are welcome.</p></div></div>
              <div className="flex gap-4"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div><div><h3 className="text-lg font-bold text-primary mb-1">Purpose-Built Studios</h3><p className="text-gray-600">Two large mirrored studios with sprung floors, professional sound systems, and air conditioning. Changing rooms and a social area on site.</p></div></div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center"><div className="stat-number">8+</div><p className="text-gray-600 mt-2">Years in Brixton</p></div>
              <div className="text-center"><div className="stat-number">10</div><p className="text-gray-600 mt-2">Instructors</p></div>
              <div className="text-center"><div className="stat-number">600+</div><p className="text-gray-600 mt-2">Active Students</p></div>
              <div className="text-center"><div className="stat-number">40+</div><p className="text-gray-600 mt-2">Classes Per Week</p></div>
            </div>
          </div>
        </div></div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Testimonials</span><h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Students Say</h2><div className="gold-line-center mb-6"></div></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;I walked in as someone who&apos;d never danced in their life. Three months later I performed on stage at the Brixton Rec showcase. This place changes you.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">JA</span></div><div><p className="font-semibold text-primary">James A.</p><p className="text-sm text-gray-500">Adult Beginner, Street Dance</p></div></div></div>
            <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;My daughters absolutely love their Saturday classes. The instructors are fantastic with kids — patient, energetic, and genuinely encouraging. Both girls have grown in confidence enormously.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">NO</span></div><div><p className="font-semibold text-primary">Nkechi O.</p><p className="text-sm text-gray-500">Parent, Kids Dance</p></div></div></div>
            <div className="testimonial-card"><p className="text-gray-600 mb-6 italic">&quot;The contemporary classes here are seriously good. The instructors push you creatively whilst keeping things accessible. Best studio atmosphere in South London, hands down.&quot;</p><div className="flex items-center gap-3"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary font-bold">SC</span></div><div><p className="font-semibold text-primary">Sophie C.</p><p className="text-sm text-gray-500">Contemporary Student</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width"><div className="bg-white rounded-sm shadow-2xl p-8 lg:p-16 text-center border-t-4 border-accent">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Dance?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Your first class is the hardest one to book and the easiest one to enjoy. Come as you are — we will take care of the rest.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dance-studio-brixton/contact" className="btn-accent">Join a Class</Link>
            <a href="tel:02079463360" className="btn-outline">Call 020 7946 3360</a>
          </div>
        </div></div>
      </section>
    </>
  );
}
