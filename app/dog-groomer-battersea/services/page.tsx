import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dog Grooming Services | Full Groom, Puppy Packages & Spa Treatments",
  description:
    "Complete dog grooming services in Battersea, SW11. Full grooms, puppy first grooms, breed-specific styling, de-shedding treatments, nail clipping and luxury spa packages.",
  openGraph: {
    title: "Dog Grooming Services | Battersea Dog Spa",
    description:
      "Professional dog grooming services from City & Guilds qualified groomers in Battersea. Full grooms, puppy packages and spa treatments.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "full-groom",
      title: "Full Groom",
      subtitle: "The Complete Package",
      description:
        "Our full groom is the most popular service and includes everything your dog needs to look and feel their best. We start with a thorough brush-out, followed by a warm bath using premium shampoo suited to your dog's coat type, a professional blow-dry, and a precision haircut or clip styled to breed standard or your preference.",
      features: [
        "Thorough brush-out and de-matting",
        "Warm bath with breed-appropriate shampoo",
        "Professional blow-dry and fluff",
        "Precision haircut or clip to your preferred style",
        "Nail trim, ear clean and eye wipe",
        "Finishing cologne spritz and bandana",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "puppy-first-groom",
      title: "Puppy First Groom",
      subtitle: "A Gentle Introduction",
      description:
        "Your puppy's first grooming experience sets the tone for a lifetime of salon visits. Our puppy package is designed to be a calm, positive introduction to grooming. We take everything at your puppy's pace, using plenty of treats and reassurance to build their confidence.",
      features: [
        "Gentle introduction to the grooming environment",
        "Light bath and blow-dry at puppy's pace",
        "Soft brush-out and face tidy",
        "Nail tip trim and ear check",
        "Plenty of treats and positive reinforcement",
        "Grooming advice for between visits",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      id: "breed-specific-styling",
      title: "Breed-Specific Styling",
      subtitle: "Expert Breed Knowledge",
      description:
        "Different breeds require different grooming techniques and styles. Our City & Guilds qualified groomers have extensive knowledge of breed standards and coat types, from hand-stripping terriers to scissoring poodles and everything in between.",
      features: [
        "Hand-stripping for wire-coated breeds",
        "Scissor work to breed standard",
        "Coat-specific bathing and conditioning",
        "Breed-standard or pet trims available",
        "Expert advice on coat maintenance",
        "Knowledge of over 50 breed standards",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      id: "de-shedding-treatment",
      title: "De-Shedding Treatment",
      subtitle: "Reduce Shedding by Up to 80%",
      description:
        "Our specialist de-shedding treatment is perfect for heavy shedders like Labradors, German Shepherds, Huskies and Golden Retrievers. Using professional-grade tools and products, we remove loose undercoat and dead hair to dramatically reduce shedding at home.",
      features: [
        "Professional de-shedding shampoo and conditioner",
        "Specialist de-shedding tool treatment",
        "High-velocity blow-dry to remove loose coat",
        "Up to 80% reduction in shedding",
        "Healthier, shinier coat",
        "Recommended every 6-8 weeks",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: "nail-clipping-ear-cleaning",
      title: "Nail Clipping & Ear Cleaning",
      subtitle: "Essential Maintenance",
      description:
        "Regular nail trims and ear cleaning are essential for your dog's health and comfort. Our groomers handle these quick maintenance tasks with care and confidence, perfect for popping in between full grooms.",
      features: [
        "Safe, precise nail clipping",
        "Nail filing for smooth finish",
        "Gentle ear cleaning and inspection",
        "Quick 15-20 minute appointment",
        "No appointment needed for walk-ins",
        "Health check and grooming advice included",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "spa-treatments",
      title: "Spa Treatments",
      subtitle: "Luxury Pampering",
      description:
        "Treat your dog to the ultimate pamper session with our luxury spa packages. From deep conditioning treatments for dry coats to blueberry facials for tear-stained faces, our spa services go above and beyond a standard groom.",
      features: [
        "Deep conditioning coat treatment",
        "Blueberry facial for tear stains",
        "Pawdicure with pad moisturiser",
        "Aromatherapy bath with essential oils",
        "De-stress massage",
        "Premium finishing products",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
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
              Professional Grooming Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From a quick nail trim to a full luxury spa day, we offer everything
              your dog needs to look and feel their absolute best.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tailored to Every Breed &amp; Size
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every dog is different, and so is every groom. Our City &amp; Guilds
              qualified team will discuss your dog&apos;s specific needs and tailor
              the service accordingly.
            </p>
          </div>

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
                  <Link href="/dog-groomer-battersea/contact" className="btn-accent">
                    Book This Service
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
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              What to Expect
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Consultation</h3>
              <p className="text-gray-600">
                We discuss your dog&apos;s needs, preferred style and any health
                considerations before we begin.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Bath &amp; Prep</h3>
              <p className="text-gray-600">
                A warm bath with breed-appropriate products, followed by a
                thorough brush-out and blow-dry.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Style &amp; Finish</h3>
              <p className="text-gray-600">
                Precision cutting or clipping to your chosen style, plus nail
                trim, ear clean and finishing touches.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Collection</h3>
              <p className="text-gray-600">
                We&apos;ll text you when your dog is ready. Collect your freshly
                pampered pooch and see the transformation!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Your Dog&apos;s Groom?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get in touch to arrange an appointment. We&apos;ll match your dog with
            the perfect grooming service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dog-groomer-battersea/contact" className="btn-accent">
              Book an Appointment
            </Link>
            <a href="tel:02079462567" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Call 020 7946 2567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
