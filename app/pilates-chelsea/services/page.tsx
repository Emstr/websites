import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Classes | Reformer, Mat, Prenatal & Clinical Pilates",
  description:
    "Explore our Pilates classes including reformer, mat, prenatal, clinical, private sessions, and group classes. All levels welcome at Chelsea Pilates Studio.",
  openGraph: {
    title: "Classes | Chelsea Pilates Studio",
    description: "Full range of Pilates classes for all levels. Reformer, mat, prenatal, clinical, and private sessions in Chelsea.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "mat-pilates",
      title: "Mat Pilates",
      subtitle: "The Foundation of Movement",
      description:
        "Mat Pilates is the cornerstone of our teaching. Using your own body weight and simple props, you will develop core strength, improve flexibility, and build body awareness. Our mat classes follow the classical Pilates repertoire with modern adaptations to suit all fitness levels.",
      features: [
        "Beginner, intermediate, and advanced classes available",
        "Props included: resistance bands, magic circles, and small balls",
        "55-minute sessions with guided warm-up and cool-down",
        "Focus on breathing, alignment, and controlled movement",
        "Maximum 14 participants per class",
        "Mats and equipment provided — just bring yourself",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
    },
    {
      id: "reformer-pilates",
      title: "Reformer Pilates",
      subtitle: "Spring-Loaded Strength",
      description:
        "Our reformer classes use Balanced Body reformers to provide variable spring resistance, allowing you to work muscles through their full range of motion. The reformer adds challenge and variety to your Pilates practice and is excellent for building lean muscle and improving athletic performance.",
      features: [
        "State-of-the-art Balanced Body reformers",
        "Small classes of 10 for personalised attention",
        "All-levels and intermediate/advanced options",
        "Full-body workout targeting deep stabilising muscles",
        "Jump board sessions available for cardio integration",
        "Grip socks required (available for purchase at reception)",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "prenatal-pilates",
      title: "Prenatal Pilates",
      subtitle: "Supporting You Through Pregnancy",
      description:
        "Our prenatal classes are designed by physiotherapy-trained instructors to support you through every trimester. Pilates during pregnancy helps maintain strength, reduce back pain, prepare your body for birth, and support faster postnatal recovery. All exercises are adapted for safety and comfort.",
      features: [
        "Suitable from 12 weeks onwards (with GP clearance)",
        "Taught by instructors with specialist prenatal training",
        "Focus on pelvic floor, core stability, and breathing",
        "Modifications for every trimester",
        "Small, supportive classes of 8 maximum",
        "Postnatal return classes also available",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      id: "clinical-pilates",
      title: "Clinical Pilates",
      subtitle: "Movement as Medicine",
      description:
        "Clinical Pilates bridges the gap between physiotherapy and fitness. Our clinical sessions are led by instructors with physiotherapy backgrounds and focus on rehabilitation, pain management, and return to function. Whether you are recovering from surgery, managing a chronic condition, or working through an injury, clinical Pilates provides a structured, evidence-based approach.",
      features: [
        "Led by physiotherapy-trained Pilates instructors",
        "Individual assessment before your first session",
        "Conditions treated: back pain, post-surgical rehab, joint injuries",
        "Integration with physiotherapy and osteopathy referrals",
        "One-to-one and small group options (max 4)",
        "Progress tracking and home exercise programmes",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "private-sessions",
      title: "Private Sessions",
      subtitle: "Tailored to You",
      description:
        "Private sessions offer the most personalised Pilates experience. Your instructor creates a bespoke programme based on your body, goals, and any limitations. Whether you want to accelerate progress, work on specific objectives, or simply prefer individual attention, private sessions deliver exceptional results.",
      features: [
        "Comprehensive initial assessment and goal setting",
        "Fully bespoke programming updated each session",
        "Access to all studio equipment including reformer, Cadillac, and chair",
        "Flexible scheduling including early morning and evening slots",
        "Duet sessions available for couples or friends",
        "Ideal for pre- and post-natal clients, or those with complex needs",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      id: "group-classes",
      title: "Group Classes",
      subtitle: "Community Energy",
      description:
        "Our group classes combine the motivating energy of a class environment with the quality of instruction you would expect from a boutique studio. Classes are capped at 12 participants so your instructor can provide individual corrections and modifications throughout.",
      features: [
        "Maximum 12 participants for quality instruction",
        "Mixed ability with modifications offered throughout",
        "Over 40 classes per week across all time slots",
        "Introductory class available for complete beginners",
        "Class packs and monthly memberships available",
        "Book online up to 7 days in advance",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Classes</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Pilates Classes &amp; Sessions</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From classical mat work to dynamic reformer sessions, we offer
              Pilates for every level and every goal. Find your perfect class below.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Full Class Offering</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every class is taught by a qualified instructor who is passionate
              about helping you move better and feel stronger.
            </p>
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
                        <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/pilates-chelsea/contact" className="btn-accent">Book This Class</Link>
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
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Your Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">How It Works</h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">1</div>
              <h3 className="text-xl font-bold text-primary mb-2">Book Online</h3>
              <p className="text-gray-600">Choose your class, pick a time, and book via our website or by calling the studio.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">2</div>
              <h3 className="text-xl font-bold text-primary mb-2">Arrive Early</h3>
              <p className="text-gray-600">Come 10 minutes before your first class to complete a health form and get oriented.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">3</div>
              <h3 className="text-xl font-bold text-primary mb-2">Move &amp; Learn</h3>
              <p className="text-gray-600">Your instructor guides you through every exercise with clear cues and hands-on corrections.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">4</div>
              <h3 className="text-xl font-bold text-primary mb-2">Feel the Difference</h3>
              <p className="text-gray-600">After just a few sessions, you will notice improved posture, strength, and how you carry yourself.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your complimentary introductory session and experience the
            Chelsea Pilates difference for yourself.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pilates-chelsea/contact" className="btn-accent">Book Intro Session</Link>
            <a href="tel:02079464510" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 4510</a>
          </div>
        </div>
      </section>
    </>
  );
}
