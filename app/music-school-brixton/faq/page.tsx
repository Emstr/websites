import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Common Questions About Music Lessons",
  description:
    "Frequently asked questions about music lessons at Brixton School of Music. Find answers about lesson formats, pricing, instruments, exams and more.",
  openGraph: {
    title: "FAQ | Brixton School of Music",
    description:
      "Common questions about music lessons, pricing, instruments and more at Brixton School of Music.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "Do I need any musical experience to start lessons?",
          answer:
            "Not at all! Many of our students are complete beginners. Our tutors are experienced at teaching from the very first note. We will tailor your lessons to your current level, whether you have never touched an instrument or you are looking to take your playing to the next stage.",
        },
        {
          question: "What ages do you teach?",
          answer:
            "We teach students from age five upwards, with no upper age limit. We have students in their seventies who are learning for the first time. Different age groups benefit from different approaches, and our tutors are skilled at adapting their teaching style accordingly.",
        },
        {
          question: "How do I book a trial lesson?",
          answer:
            "You can book a trial lesson by calling us on 020 7946 4420, emailing info@brixtonmusic.co.uk, or using the contact form on our website. We will match you with the right tutor and find a time that suits you. Trial lessons are a great way to meet your tutor and experience a lesson before committing.",
        },
        {
          question: "Do I need to own an instrument?",
          answer:
            "No. We provide all instruments for use during your lessons at our studios. However, for making the best progress, we do recommend having an instrument to practise on at home. Your tutor can advise on what to buy at every budget level, and we can recommend reputable local music shops.",
        },
      ],
    },
    {
      category: "Lessons & Scheduling",
      questions: [
        {
          question: "How long are lessons?",
          answer:
            "Standard lessons are 30 minutes for younger or beginner students, and 45 or 60 minutes for intermediate and advanced students. Band workshops run for 90 minutes. Your tutor will recommend the best lesson length based on your age, level and goals.",
        },
        {
          question: "Can I change my lesson day or time?",
          answer:
            "Yes. We understand that schedules can change, especially with school or work commitments. We ask for at least 48 hours notice to rearrange a lesson. If your regular slot no longer works, we will do our best to find an alternative that suits you.",
        },
        {
          question: "What happens if I need to cancel a lesson?",
          answer:
            "We require at least 24 hours notice for cancellations. Lessons cancelled with less notice cannot be refunded or rescheduled, as the tutor time has been reserved for you. If your tutor needs to cancel, the lesson will always be rescheduled or credited.",
        },
        {
          question: "Do you offer online lessons?",
          answer:
            "Yes, we offer online lessons via Zoom for students who prefer to learn from home or who live outside the local area. Online lessons work particularly well for vocals, guitar, piano and music theory. We recommend in-person lessons for drums where possible.",
        },
      ],
    },
    {
      category: "Exams & Progress",
      questions: [
        {
          question: "Do you prepare students for graded exams?",
          answer:
            "Yes, we prepare students for ABRSM and Trinity graded exams in all instruments and music theory. Exam preparation is optional - some students prefer to learn without the pressure of exams, and that is absolutely fine. Our exam pass rate is 98%, with the majority of students achieving merit or distinction.",
        },
        {
          question: "How quickly will I see progress?",
          answer:
            "Most students can play a simple tune or song within their first few lessons. Meaningful progress depends on regular practice at home, typically 15-30 minutes per day for beginners. Your tutor will set achievable goals and celebrate milestones along the way.",
        },
        {
          question: "Do you hold performances or recitals?",
          answer:
            "Yes! We hold termly showcases where students can perform for friends and family in a supportive environment. Our band workshop groups also perform at these events. Performing is entirely optional but hugely rewarding for building confidence.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "How much do lessons cost?",
          answer:
            "Lesson fees vary by instrument, duration and lesson type (individual or group). Please contact us for our current price list. We offer termly payment plans and sibling discounts to make lessons as accessible as possible.",
        },
        {
          question: "Do you offer discounts for siblings?",
          answer:
            "Yes, we offer a 10% discount on lesson fees for the second sibling enrolled, and 15% for the third. We love teaching musical families and believe every child should have the opportunity to learn.",
        },
        {
          question: "How do I pay?",
          answer:
            "We accept payment by bank transfer, direct debit and card. Lessons are paid termly in advance, which secures your regular weekly slot. We can also arrange monthly payment plans if that is more convenient for your budget.",
        },
      ],
    },
    {
      category: "Our School",
      questions: [
        {
          question: "Are your tutors qualified?",
          answer:
            "All of our tutors are professional musicians with teaching qualifications. Many hold degrees from leading conservatoires such as the Royal Academy of Music and Trinity Laban. Every tutor is DBS-checked and committed to ongoing professional development.",
        },
        {
          question: "Is there parking available?",
          answer:
            "There is limited pay-and-display parking on Coldharbour Lane and surrounding streets. However, we are just a four-minute walk from Brixton Underground station (Victoria Line), so public transport is often the easiest option.",
        },
        {
          question: "Can parents stay during lessons?",
          answer:
            "Parents are welcome to sit in on lessons, particularly for younger children. We have a comfortable waiting area with Wi-Fi if you prefer to wait nearby. For older children and teenagers, we find students tend to be more relaxed and focused without a parent in the room.",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Everything you need to know about lessons at Brixton School of Music.
              Cannot find your answer? Get in touch and we will be happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-[var(--accent)]"></div>
                  {category.category}
                </h2>
                <div className="space-y-1">
                  {category.questions.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="group bg-gray-50 rounded-sm overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-6 list-none cursor-pointer font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg
                          className="w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
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
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">
              Still Got Questions?
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              We are always happy to chat. Give us a ring, send an email, or pop in
              to our studios on Coldharbour Lane. No question is too small.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/music-school-brixton/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">
                Contact Us
              </Link>
              <a
                href="tel:02079464420"
                className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors"
              >
                Call 020 7946 4420
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Musical Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a trial lesson today. All ages, all levels, all welcome.
          </p>
          <Link href="/music-school-brixton/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">
            Book Your Trial Lesson
          </Link>
        </div>
      </section>
    </>
  );
}
