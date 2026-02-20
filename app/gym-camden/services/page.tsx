import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Strength, HIIT, PT, Olympic Lifting & Boxing",
  description:
    "Strength training, HIIT classes, personal training, Olympic lifting, boxing fitness and nutritional coaching at Camden Strength & Fitness. View our full range of services.",
  openGraph: {
    title: "Services | Camden Strength & Fitness",
    description:
      "Expert coaching across strength training, HIIT, personal training, Olympic lifting, boxing fitness and nutritional coaching in Camden.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "strength-training",
      title: "Strength Training",
      subtitle: "Build Real Strength",
      description:
        "Our strength training programme is the backbone of everything we do. Whether you want to compete in powerlifting or simply get stronger for everyday life, our coaches will build you a structured programme around the big compound lifts — squat, bench, deadlift, overhead press — with intelligent accessory work to address your weak points.",
      features: [
        "Personalised programming based on your training history and goals",
        "Dedicated squat racks, deadlift platforms and competition benches",
        "Eleiko and Rogue barbells and calibrated plates",
        "Regular strength testing and programme adjustments",
        "Small group strength classes with coached form checks",
        "Beginner, intermediate and advanced programming tracks",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "hiit-classes",
      title: "HIIT Classes",
      subtitle: "Torch Fat, Build Endurance",
      description:
        "Our HIIT sessions are 45 minutes of carefully programmed high-intensity work designed to maximise calorie burn, improve cardiovascular fitness and build functional endurance. Every class is different — mixing barbell complexes, kettlebell work, bodyweight conditioning and assault bike intervals to keep your body adapting.",
      features: [
        "45-minute coached sessions running throughout the day",
        "Scalable workouts suitable for all fitness levels",
        "Heart rate monitoring available for optimal intensity",
        "Variety of equipment including assault bikes, rowers and ski ergs",
        "Classes capped at 16 for quality coaching",
        "Morning, lunchtime and evening time slots available",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
    },
    {
      id: "personal-training",
      title: "Personal Training",
      subtitle: "Your Coach, Your Programme",
      description:
        "One-to-one personal training with a dedicated coach who will assess your movement, understand your goals and build a programme specifically for you. Sessions are 60 minutes and include coaching on technique, programme delivery, and regular check-ins to track your progress and adjust as needed.",
      features: [
        "Initial movement screen and goal-setting consultation",
        "Bespoke programming delivered through our training app",
        "60-minute coached sessions with full attention",
        "Regular body composition and performance testing",
        "Flexible scheduling including early morning and evening slots",
        "Nutritional guidance included with all PT packages",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      id: "olympic-lifting",
      title: "Olympic Lifting",
      subtitle: "Master the Snatch & Clean and Jerk",
      description:
        "Our Olympic weightlifting programme is one of the best in London. Whether you are a complete beginner who wants to learn the lifts or an experienced competitor preparing for nationals, our coaches will refine your technique, build your strength and help you hit numbers you did not think possible.",
      features: [
        "Dedicated Olympic lifting platforms with Eleiko competition equipment",
        "Coaches with British Weightlifting qualifications",
        "Beginner, intermediate and competition-level programming",
        "Video analysis and technique breakdowns",
        "Competition preparation and peaking programmes",
        "Regular in-house competitions and lifting meets",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: "boxing-fitness",
      title: "Boxing Fitness",
      subtitle: "Hit Harder, Move Faster",
      description:
        "Our boxing fitness classes combine proper boxing technique with serious conditioning work. You will learn how to throw punches correctly, move your feet, work the pads and the bags — all while getting one of the most intense full-body workouts going. No sparring required, but technique is always taught properly.",
      features: [
        "Technique-focused pad work with qualified boxing coaches",
        "Heavy bag rounds for power and endurance",
        "Footwork and defensive movement drills",
        "Core and conditioning circuits",
        "Suitable for complete beginners through to experienced boxers",
        "Wraps and gloves available to borrow for your first session",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "nutritional-coaching",
      title: "Nutritional Coaching",
      subtitle: "Fuel Your Performance",
      description:
        "Training is only half the equation. Our nutritional coaching service gives you a sustainable, evidence-based approach to eating that supports your training and body composition goals. No meal plans you will never follow — instead, we teach you the principles and habits that create lasting change.",
      features: [
        "Initial nutrition assessment and habit audit",
        "Calorie and macronutrient targets tailored to your goals",
        "Weekly check-ins with your nutrition coach",
        "Guidance on meal prep, eating out and supplements",
        "Body composition tracking via DEXA and InBody scans",
        "Flexible dieting approach — no banned foods",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Everything You Need to Get Strong
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From barbell training to boxing, personal coaching to nutrition — we
              have built a complete training ecosystem under one roof in Camden.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Train Smarter, Get Stronger
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every service is coached by qualified professionals who walk the
              walk. No clipboard personal trainers, no generic class
              programming — just expert guidance tailored to you.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-accent font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/gym-camden/contact" className="btn-accent">
                    Book a Session
                  </Link>
                </div>
                <div
                  className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center">
                    <div className="text-white opacity-20 scale-150">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Your Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              How It Works
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Free Trial
              </h3>
              <p className="text-gray-600">
                Book a complimentary session. We will show you round, assess your
                experience level and let you try a class or open gym session.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Goal Setting</h3>
              <p className="text-gray-600">
                Sit down with a coach to discuss your goals, training history and
                any injuries. We will recommend the best membership and programme
                for you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Start Training</h3>
              <p className="text-gray-600">
                Get your programme, book your classes and start training. Your
                coach is always available for form checks and programme
                questions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Progress & Adapt</h3>
              <p className="text-gray-600">
                Regular check-ins, strength tests and programme updates to keep
                you progressing. We track your numbers so you can see how far you
                have come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a free trial session and experience the difference. No
            commitment, no sales pitch — just a proper training session.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/gym-camden/contact" className="btn-accent">
              Book Free Trial
            </Link>
            <a href="tel:02079463350" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 020 7946 3350
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
