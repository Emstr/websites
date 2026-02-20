import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Treatments | Swedish, Deep Tissue, Sports Massage & More",
  description:
    "Full range of massage therapy treatments in Covent Garden. Swedish, deep tissue, sports massage, hot stone therapy, pregnancy massage and reflexology. ITEC & VTCT qualified.",
  openGraph: {
    title: "Treatments | Covent Garden Massage Therapy",
    description: "Professional massage treatments from qualified therapists in the heart of Covent Garden.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "swedish-massage",
      title: "Swedish Massage",
      subtitle: "Classic Relaxation",
      description:
        "Swedish massage is the foundation of Western massage therapy. Using a combination of long flowing strokes, kneading, and circular movements, this treatment works on the superficial muscle layers to relieve tension, improve circulation, and create a deep sense of relaxation. Ideal if you are new to massage or simply need to unwind after a demanding week.",
      features: [
        "Full-body treatment using flowing effleurage strokes",
        "Improves blood and lymphatic circulation",
        "Reduces muscular tension and stress hormones",
        "Promotes better sleep and overall wellbeing",
        "Available in 30, 60, and 90-minute sessions",
        "Organic massage oils used as standard",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>),
    },
    {
      id: "deep-tissue",
      title: "Deep Tissue Massage",
      subtitle: "Targeted Relief",
      description:
        "Deep tissue massage uses slow, deliberate strokes and sustained pressure to reach the deeper layers of muscle and fascia. This treatment is particularly effective for chronic pain, postural problems, and areas of persistent tightness. Your therapist will work with you to find the right level of pressure — firm enough to create change, never so much that you tense up.",
      features: [
        "Focused work on chronic tension and adhesions",
        "Effective for neck, shoulder, and lower back pain",
        "Breaks down scar tissue and improves mobility",
        "Trigger point therapy included where needed",
        "Post-treatment stretching advice provided",
        "Available in 60 and 90-minute sessions",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
    },
    {
      id: "sports-massage",
      title: "Sports Massage",
      subtitle: "Performance & Recovery",
      description:
        "Our sports massage therapists work with runners, cyclists, gym-goers, and professional athletes across every discipline. Treatments are tailored to your sport, training cycle, and specific concerns — whether that is pre-event preparation, post-event recovery, or ongoing maintenance to keep you performing at your best and free from injury.",
      features: [
        "Pre-event, post-event, and maintenance treatments",
        "Soft tissue release and myofascial techniques",
        "Joint mobilisation and assisted stretching",
        "Injury rehabilitation support",
        "Training and recovery advice included",
        "Available in 30, 60, and 90-minute sessions",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
    },
    {
      id: "hot-stone",
      title: "Hot Stone Therapy",
      subtitle: "Deep Warmth, Deep Calm",
      description:
        "Hot stone therapy combines the benefits of massage with the therapeutic properties of heated basalt stones. The warmth radiates through the muscles, increasing blood flow and allowing your therapist to work more deeply without the need for excessive pressure. It is one of our most popular treatments for stress relief and is deeply comforting during the colder months.",
      features: [
        "Smooth basalt stones heated to optimal temperature",
        "Stones placed on key energy points along the body",
        "Combines Swedish techniques with stone work",
        "Deeply relaxing — ideal for stress and anxiety",
        "Improves circulation and eases joint stiffness",
        "Available in 60 and 90-minute sessions",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>),
    },
    {
      id: "pregnancy-massage",
      title: "Pregnancy Massage",
      subtitle: "Nurturing Care for Mums-to-Be",
      description:
        "Our pregnancy massage therapists are specially trained to support expectant mothers through each trimester. Using adapted positioning and gentle techniques, we help relieve the common discomforts of pregnancy — back pain, swollen ankles, fatigue, and tension. This treatment is safe from the second trimester onwards and provides a precious hour of comfort and calm.",
      features: [
        "Safe, adapted positioning with supportive cushions",
        "Relieves lower back, hip, and sciatic pain",
        "Reduces swelling in feet and ankles",
        "Eases headaches and promotes better sleep",
        "Specialist pregnancy-safe oils used",
        "Available in 60-minute sessions",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>),
    },
    {
      id: "reflexology",
      title: "Reflexology",
      subtitle: "Holistic Healing Through the Feet",
      description:
        "Reflexology is a complementary therapy based on the principle that specific points on the feet correspond to organs and systems throughout the body. By applying precise pressure to these reflex points, your therapist stimulates the body&apos;s natural healing mechanisms. Clients often report improved sleep, reduced anxiety, and relief from digestive issues after regular sessions.",
      features: [
        "Detailed foot mapping and assessment",
        "Pressure applied to specific reflex points",
        "Supports the body&apos;s natural healing processes",
        "Effective for stress, anxiety, and insomnia",
        "Can complement other massage treatments",
        "Available in 30 and 60-minute sessions",
      ],
      icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>),
    },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Treatments</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Massage & Therapy Treatments</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Six specialist treatments delivered by qualified therapists in our
              peaceful Covent Garden clinic. Every session is tailored to your
              individual needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Full Treatment Menu</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every treatment begins with a consultation to understand your needs and health history. Your therapist will adapt each session to ensure you get the best possible results.</p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-accent font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/massage-covent-garden/contact" className="btn-accent">Book This Treatment</Link>
                </div>
                <div className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center">
                    <div className="text-white opacity-20 scale-150">{service.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Your Visit</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What to Expect</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">1</div>
              <h3 className="text-xl font-bold text-primary mb-2">Book</h3>
              <p className="text-gray-600">Book online, by phone, or by email. Choose your treatment, preferred time, and therapist.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">2</div>
              <h3 className="text-xl font-bold text-primary mb-2">Consultation</h3>
              <p className="text-gray-600">Your therapist reviews your health history and discusses your goals before treatment begins.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">3</div>
              <h3 className="text-xl font-bold text-primary mb-2">Treatment</h3>
              <p className="text-gray-600">Relax in our peaceful treatment rooms while your therapist delivers your tailored session.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">4</div>
              <h3 className="text-xl font-bold text-primary mb-2">Aftercare</h3>
              <p className="text-gray-600">Receive personalised aftercare advice and book your next session at a time that suits you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book Your Treatment?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Appointments available seven days a week, including evenings. Book today and feel the difference.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/massage-covent-garden/contact" className="btn-accent">Book Now</Link>
            <a href="tel:02079467740" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 7740</a>
          </div>
        </div>
      </section>
    </>
  );
}
