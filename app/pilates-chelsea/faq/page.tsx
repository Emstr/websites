import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Pilates Questions Answered",
  description: "Frequently asked questions about Pilates classes at Chelsea Pilates Studio. Booking, pricing, what to wear, and more.",
  openGraph: {
    title: "FAQ | Chelsea Pilates Studio",
    description: "Common questions about Pilates classes, booking, pricing, and what to expect at Chelsea Pilates Studio.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        { question: "Do I need any experience to start?", answer: "Absolutely not. We welcome complete beginners and offer introductory sessions designed specifically for people who have never tried Pilates before. Our instructors provide modifications throughout every class so you can work at your own level." },
        { question: "What should I wear?", answer: "Wear comfortable, form-fitting clothing that allows you to move freely. Avoid anything too baggy as it makes it harder for your instructor to check your alignment. For reformer classes, grip socks are required and can be purchased at reception for five pounds." },
        { question: "What is the difference between mat and reformer Pilates?", answer: "Mat Pilates uses your body weight and simple props for resistance. Reformer Pilates uses a spring-loaded machine that provides variable resistance, allowing you to work muscles through a fuller range of motion. Both are excellent — many members do a mix of both." },
        { question: "How often should I attend classes?", answer: "We recommend two to three sessions per week for noticeable results. However, even one session per week will benefit your body. Consistency matters more than frequency. Joseph Pilates famously said you will feel the difference in ten sessions." },
      ],
    },
    {
      category: "Booking & Membership",
      questions: [
        { question: "How do I book a class?", answer: "You can book online through our website, call us on 020 7946 4510, or email hello@chelseapilates.co.uk. Classes can be booked up to seven days in advance. We recommend booking early as popular time slots fill up quickly." },
        { question: "What membership options do you offer?", answer: "We offer single class drop-ins, class packs of 5, 10, or 20, and monthly unlimited memberships. Private sessions are priced separately. Contact us for current pricing and any introductory offers available for new members." },
        { question: "What is your cancellation policy?", answer: "We require at least 12 hours notice for cancellations. Late cancellations and no-shows will be charged the full class fee. We understand that life happens, but this policy allows us to offer your spot to someone on the waitlist." },
        { question: "Do class packs expire?", answer: "Class packs of 5 are valid for two months, packs of 10 for four months, and packs of 20 for six months from the date of purchase. Monthly memberships renew automatically and can be cancelled with 30 days notice." },
      ],
    },
    {
      category: "Health & Safety",
      questions: [
        { question: "I have a back injury — can I still do Pilates?", answer: "Pilates is widely recommended for back pain and injury rehabilitation. However, we recommend starting with a clinical Pilates session or private session so your instructor can assess your condition and create an appropriate programme. Please inform us of any injuries when booking." },
        { question: "Can I do Pilates during pregnancy?", answer: "Yes, Pilates is excellent during pregnancy and is recommended by many midwives and obstetricians. We offer dedicated prenatal classes suitable from 12 weeks onwards (with GP clearance). Our prenatal instructors hold specialist qualifications and modify all exercises for safety." },
        { question: "Are your instructors qualified?", answer: "All our instructors hold Level 3 or above Pilates qualifications and are registered with either the Pilates Foundation or the Australian Physiotherapy and Pilates Institute (APPI). Several also hold physiotherapy degrees. They undergo regular continuing professional development." },
      ],
    },
    {
      category: "Practical Information",
      questions: [
        { question: "Do you have changing facilities?", answer: "Yes, we have modern changing rooms with showers, hairdryers, and complimentary toiletries. Towels are provided. We also have a small reception area where you can relax before or after your class." },
        { question: "Is there parking nearby?", answer: "There is limited metered parking on Fulham Road and surrounding streets. We strongly recommend travelling by public transport — South Kensington station is just a five-minute walk away. Bicycle parking is available directly outside the studio." },
        { question: "Can I bring a friend?", answer: "Of course. We offer duet private sessions for two people, and you are welcome to book group classes together. If your friend is new to the studio, they can take advantage of our introductory offer for their first session." },
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
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      }))
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Everything you need to know about classes, booking, and what
              to expect at Chelsea Pilates Studio.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-accent"></div>{category.category}
                </h2>
                <div className="space-y-1">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group bg-gray-50 rounded-sm overflow-hidden">
                      <summary className="faq-question p-6 list-none cursor-pointer">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </summary>
                      <div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">We are happy to help. Drop us a message or give us a call and our team will get back to you promptly.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/pilates-chelsea/contact" className="btn-accent">Contact Us</Link>
              <a href="tel:02079464510" className="btn-outline">Call 020 7946 4510</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Try Pilates?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book your complimentary introductory session today.</p>
          <Link href="/pilates-chelsea/contact" className="btn-accent">Book Your Intro Session</Link>
        </div>
      </section>
    </>
  );
}
