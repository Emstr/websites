import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tutoring Services | GCSE, A-Level, 11+ & University Admissions",
  description:
    "Expert private tutoring services in Kensington. GCSE tutoring, A-Level support, 11+ exam preparation, university admissions guidance, primary school support and adult learning.",
  openGraph: {
    title: "Tutoring Services | Kensington Private Tutors",
    description:
      "DBS-checked Oxbridge graduate tutors offering GCSE, A-Level, 11+ prep and university admissions support in Kensington, London.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "gcse-tutoring",
      title: "GCSE Tutoring",
      subtitle: "Master Every Subject, Achieve Top Grades",
      description:
        "Our GCSE tutoring programme covers all major subjects including Maths, English, Sciences, Languages and Humanities. Each student receives a personalised study plan designed to address their specific weaknesses, reinforce strengths, and build the exam technique needed to secure grades 7-9.",
      features: [
        "All subjects covered: Maths, English, Sciences, Languages, Humanities",
        "Exam technique workshops and past paper practice",
        "Personalised revision timetables and study plans",
        "Regular progress assessments and parent updates",
        "Support for both foundation and higher tier papers",
        "Small group sessions available for cost-effective learning",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: "a-level-tutoring",
      title: "A-Level Tutoring",
      subtitle: "Secure Your Place at a Top University",
      description:
        "Our A-Level tutors are subject specialists who achieved top grades in their own A-Levels and went on to study at Oxford, Cambridge, and other leading universities. They understand exactly what examiners are looking for and how to help students reach A* standard.",
      features: [
        "Subject specialists for all major A-Level subjects",
        "Oxbridge and Russell Group application preparation",
        "Exam board-specific content and mark scheme analysis",
        "Extended essay and coursework support",
        "Mock exam practice under timed conditions",
        "Flexible scheduling around school timetables",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: "11-plus-exam-prep",
      title: "11+ Exam Prep",
      subtitle: "Your Child's Path to the Best Schools",
      description:
        "Our 11+ programme has helped hundreds of children secure places at London's most competitive independent and grammar schools. We cover verbal reasoning, non-verbal reasoning, English and Maths, with tailored preparation for specific school entrance exams.",
      features: [
        "Verbal and non-verbal reasoning training",
        "School-specific exam preparation (Westminster, St Paul's, etc.)",
        "Timed practice papers and mock exams",
        "Interview preparation and confidence building",
        "Familiarisation with different exam formats (GL, CEM, ISEB)",
        "Programmes starting from Year 3 through to exam day",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      id: "university-admissions",
      title: "University Admissions",
      subtitle: "Stand Out From the Crowd",
      description:
        "Navigating the university admissions process can be daunting. Our tutors, many of whom have sat on admissions panels, provide expert guidance on personal statements, entrance exams (BMAT, LNAT, MAT, STEP), and interview preparation for Oxbridge and medical school.",
      features: [
        "Personal statement drafting and refinement",
        "Oxbridge interview mock sessions with feedback",
        "Entrance exam preparation (BMAT, LNAT, MAT, STEP, UCAT)",
        "UCAS application strategy and guidance",
        "Medical and law school application support",
        "Portfolio preparation for creative courses",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      id: "primary-school-support",
      title: "Primary School Support",
      subtitle: "Building Strong Foundations",
      description:
        "The early years of education are critical. Our primary school tutors use engaging, age-appropriate methods to strengthen core skills in reading, writing and mathematics while nurturing curiosity and a love of learning that will last a lifetime.",
      features: [
        "Phonics, reading and comprehension development",
        "Creative writing and handwriting improvement",
        "Mathematics fundamentals and times tables mastery",
        "Science exploration and discovery-based learning",
        "SATs preparation for Year 2 and Year 6",
        "Support for children with SEN and learning differences",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "adult-learning",
      title: "Adult Learning",
      subtitle: "It's Never Too Late to Learn",
      description:
        "Whether you're returning to education, changing careers, or simply pursuing a personal interest, our adult learning programme offers flexible, supportive tutoring tailored to your schedule and goals. We help adults with everything from English and Maths GCSEs to professional qualifications.",
      features: [
        "GCSE and A-Level retakes for career advancement",
        "English language support for non-native speakers",
        "Professional qualification study support",
        "Flexible evening and weekend scheduling",
        "Online and in-person sessions available",
        "Confidence building in a supportive environment",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
              Expert Tutoring for Every Stage
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From primary school to university admissions, our DBS-checked Oxbridge
              graduates deliver personalised tutoring that produces outstanding results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Personalised Learning Programmes
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every student learns differently. That&apos;s why we create bespoke
              tutoring plans tailored to your child&apos;s unique strengths,
              challenges, and academic goals.
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
                  <Link href="/tutor-kensington/contact" className="btn-accent">
                    Book a Trial Lesson
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
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
              How It Works
            </h2>
            <div className="gold-line-center mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Free Consultation
              </h3>
              <p className="text-gray-600">
                We discuss your child&apos;s needs, learning style, and academic
                goals to understand exactly how we can help.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Tutor Matching</h3>
              <p className="text-gray-600">
                We hand-pick the ideal tutor based on subject expertise, teaching
                style, and personality fit.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Trial Lesson</h3>
              <p className="text-gray-600">
                A free trial lesson lets you and your child experience our
                tutoring first-hand with no obligation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">
                4
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Ongoing Progress</h3>
              <p className="text-gray-600">
                Regular assessments and parent updates ensure we&apos;re on track
                to achieve your child&apos;s goals.
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
            Book a free trial lesson and see the difference an expert,
            Oxbridge-educated tutor can make.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tutor-kensington/contact" className="btn-accent">
              Book Free Trial Lesson
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
