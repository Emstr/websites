import Link from "next/link";

export default function HomePage() {
  const services = [
    { title: "Children's Speech Therapy", desc: "Specialist assessment and therapy for children with speech sounds, language delays, social communication difficulties and developmental disorders.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
    { title: "Adult Speech Therapy", desc: "Therapy for adults with acquired communication difficulties including stroke recovery, brain injury, progressive neurological conditions and voice disorders.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { title: "Stammering Support", desc: "Evidence-based stammering therapy for children and adults. We use proven techniques including the Lidcombe Program, Palin PCI and cognitive approaches.", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
    { title: "Voice Therapy", desc: "Expert voice therapy for hoarseness, vocal fatigue, vocal nodules, muscle tension dysphonia and professional voice users including teachers and performers.", icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" },
    { title: "Swallowing Assessment", desc: "Clinical assessment and management of swallowing difficulties in adults. We work closely with GPs, ENT consultants and dietitians to ensure comprehensive care.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { title: "School-Based Therapy", desc: "We visit schools across North London to deliver therapy within the school environment, working collaboratively with teachers and SENCOs to support your child.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  ];

  const testimonials = [
    { name: "Sarah M.", role: "Parent", text: "Our son started therapy at age four with very limited speech. Within six months, the change was remarkable. His therapist was patient, creative and genuinely caring. He now chats non-stop and we could not be more grateful." },
    { name: "James T.", role: "Adult Client", text: "I had been stammering since childhood and had almost given up on therapy. The team at Hampstead took a completely different approach that actually worked. My confidence at work has transformed and I finally feel comfortable speaking in meetings." },
    { name: "Rachel K.", role: "Parent", text: "The school-based therapy has been a game-changer for our daughter. Her therapist works closely with her teacher and the progress has been wonderful. The reports are thorough and we always feel informed and involved." },
  ];

  return (
    <>
      <section className="hero-gradient py-24 lg:py-36">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="300" r="150" stroke="currentColor" strokeWidth="1" className="text-accent" />
            <circle cx="1000" cy="200" r="100" stroke="currentColor" strokeWidth="1" className="text-accent-light" />
            <circle cx="600" cy="500" r="80" stroke="currentColor" strokeWidth="1" className="text-accent" />
          </svg>
        </div>
        <div className="container-width">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">HCPC Registered Speech &amp; Language Therapists</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight">Finding Your Voice Starts Here</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">Expert speech and language therapy for children and adults from our Hampstead clinic. Compassionate, evidence-based care from a team of six specialist therapists.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/speech-therapist-hampstead/contact" className="btn-accent">Book a Consultation</Link>
              <Link href="/speech-therapist-hampstead/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Our Speech &amp; Language Services</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">From first words to fluent conversation, we support people of all ages with a wide range of communication and swallowing difficulties.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="card-premium p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/speech-therapist-hampstead/services" className="btn-accent">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Trusted by Over 3,000 Clients Since 2014</h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">We are a team of six HCPC registered speech and language therapists with specialist expertise across children&apos;s and adult therapy. Our Hampstead clinic on Flask Walk provides a calm, welcoming environment where you can feel completely at ease.</p>
              <div className="space-y-4">
                {["HCPC registered and RCSLT members with full professional indemnity", "Specialist expertise in paediatric and adult communication disorders", "Calm, purpose-built therapy rooms on Flask Walk in the heart of Hampstead", "Flexible appointments including evenings and Saturday mornings", "School visits available across North London boroughs", "Evidence-based approaches tailored to each individual"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="card-premium p-8 text-center"><div className="stat-number">3k+</div><p className="text-gray-600 mt-2 font-medium">Clients Helped</p></div>
              <div className="card-premium p-8 text-center"><div className="stat-number">6</div><p className="text-gray-600 mt-2 font-medium">Specialist Therapists</p></div>
              <div className="card-premium p-8 text-center"><div className="stat-number">11+</div><p className="text-gray-600 mt-2 font-medium">Years Experience</p></div>
              <div className="card-premium p-8 text-center"><div className="stat-number">HCPC</div><p className="text-gray-600 mt-2 font-medium">Registered Practice</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">What Our Clients Say</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-white/10">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => (<svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div><p className="text-white font-semibold">{t.name}</p><p className="text-gray-400 text-sm">{t.role}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Take the First Step?</h2>
          <div className="gold-line-center mb-6"></div>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Book an initial consultation to discuss your concerns. We offer a warm, non-judgemental space where you can talk openly about the challenges you or your child are facing.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/speech-therapist-hampstead/contact" className="btn-accent">Book Consultation</Link>
            <a href="tel:02079464450" className="btn-outline">Call 020 7946 4450</a>
          </div>
        </div>
      </section>
    </>
  );
}
