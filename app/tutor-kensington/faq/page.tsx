import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Common Tutoring Questions Answered",
  description:
    "Frequently asked questions about private tutoring in Kensington. Learn about our tutors, pricing, subjects, and how we help students achieve outstanding results.",
  openGraph: {
    title: "FAQ | Kensington Private Tutors",
    description:
      "Common questions about our private tutoring service, DBS-checked tutors, pricing and how we work with families in Kensington.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "About Our Tutors",
      questions: [
        {
          question: "What qualifications do your tutors have?",
          answer:
            "All our tutors are graduates of Oxford, Cambridge, or other Russell Group universities with at least a 2:1 degree in their subject area. Many hold postgraduate qualifications and teaching certifications. Every tutor undergoes a rigorous selection process including subject testing, a teaching demonstration, and an interview.",
        },
        {
          question: "Are all tutors DBS checked?",
          answer:
            "Absolutely. Every tutor undergoes an enhanced DBS (Disclosure and Barring Service) check before they can work with any students. We also verify references and conduct face-to-face interviews. Your child's safety is our highest priority.",
        },
        {
          question: "How do you match tutors with students?",
          answer:
            "We consider several factors: subject expertise, teaching style, personality, and the student's specific needs and learning preferences. We arrange a free trial lesson so you can be sure the match is right before committing. If the fit isn't perfect, we'll find an alternative tutor at no cost.",
        },
      ],
    },
    {
      category: "Lessons & Scheduling",
      questions: [
        {
          question: "Where do lessons take place?",
          answer:
            "Lessons can take place at our Kensington office, at the student's home anywhere in London, or online via our secure virtual classroom platform. Many families use a combination depending on what suits their schedule each week.",
        },
        {
          question: "How long are tutoring sessions?",
          answer:
            "Standard sessions are 60 minutes, though we also offer 90-minute and 2-hour sessions for older students or those preparing for exams. For younger children (primary school), we recommend 45-60 minute sessions to maintain focus and engagement.",
        },
        {
          question: "Can I reschedule or cancel a lesson?",
          answer:
            "Yes. We ask for at least 24 hours' notice for rescheduling or cancellation. Lessons cancelled with less than 24 hours' notice may be charged in full. We understand that things come up, so we're always happy to be flexible where possible.",
        },
        {
          question: "Do you offer tutoring during school holidays?",
          answer:
            "Yes, we offer intensive holiday revision programmes as well as regular sessions throughout school holidays. Many families find that holiday tutoring is the ideal time to consolidate learning or get ahead before the new term.",
        },
      ],
    },
    {
      category: "Subjects & Exam Preparation",
      questions: [
        {
          question: "What subjects do you offer tutoring in?",
          answer:
            "We cover all major subjects at every level, including Maths, English, Sciences (Biology, Chemistry, Physics), Languages (French, Spanish, German, Latin, Mandarin), Humanities (History, Geography, Economics, Politics), and more. If you need a subject not listed, please ask — we can usually help.",
        },
        {
          question: "Do you prepare students for specific school entrance exams?",
          answer:
            "Yes, we have extensive experience preparing students for 11+, 13+, and 16+ entrance exams for London's top schools including Westminster, St Paul's, City of London, Latymer Upper, and many more. Our tutors are familiar with each school's specific exam format and requirements.",
        },
        {
          question: "Can you help with Oxbridge applications?",
          answer:
            "Absolutely. Many of our tutors are Oxbridge graduates who can provide insider guidance on personal statements, entrance exams (such as MAT, STEP, BMAT, LNAT, and TSA), and interview preparation. We have an excellent track record of successful Oxbridge placements.",
        },
      ],
    },
    {
      category: "Pricing & Packages",
      questions: [
        {
          question: "How much does tutoring cost?",
          answer:
            "Our rates depend on the level of tutoring required, ranging from primary school to university admissions. We're happy to provide a detailed quote after your free consultation. We offer competitive rates for Kensington and the option to purchase lesson packages at a discounted rate.",
        },
        {
          question: "Is the trial lesson really free?",
          answer:
            "Yes, completely free with no obligation. The trial lesson allows you and your child to meet the tutor, experience our teaching approach, and decide if it's the right fit. There's absolutely no pressure to continue.",
        },
        {
          question: "Do you offer sibling discounts?",
          answer:
            "Yes, we offer a 10% discount on the second sibling and 15% on any additional siblings when booked with us simultaneously. We also offer discounted rates for booking lesson packages in advance.",
        },
      ],
    },
    {
      category: "Progress & Results",
      questions: [
        {
          question: "How do you track my child's progress?",
          answer:
            "After each lesson, tutors complete a session report noting topics covered, areas of strength, and areas for improvement. We conduct regular assessments and provide termly progress reports to parents. We're always available to discuss your child's progress by phone or email.",
        },
        {
          question: "What results can I expect?",
          answer:
            "98% of our students improve by at least one grade. However, every student is different, and we set realistic, achievable targets based on your child's starting point. Our tutors focus not just on grades, but on building confidence, independent learning skills, and a genuine love of the subject.",
        },
      ],
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((category) =>
      category.questions.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Everything you need to know about our private tutoring services,
              our tutors, and how we help students achieve outstanding results.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-accent"></div>
                  {category.category}
                </h2>
                <div className="space-y-1">
                  {category.questions.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="group bg-gray-50 rounded-sm overflow-hidden"
                    >
                      <summary className="faq-question p-6 list-none cursor-pointer">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Still Have Questions?
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re happy to help. Get in touch and we&apos;ll answer any
              questions you have about our tutoring services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/tutor-kensington/contact" className="btn-accent">
                Contact Us
              </Link>
              <a href="tel:02079462567" className="btn-outline">
                Call 020 7946 2567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Your Free Trial Lesson?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the Kensington Private Tutors difference with a free,
            no-obligation trial lesson matched to your child&apos;s needs.
          </p>
          <Link href="/tutor-kensington/contact" className="btn-accent">
            Book Your Free Trial
          </Link>
        </div>
      </section>
    </>
  );
}
