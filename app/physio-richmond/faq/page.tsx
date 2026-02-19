import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Common Physiotherapy Questions Answered",
  description:
    "Frequently asked questions about physiotherapy treatments, appointments, insurance, and what to expect at Richmond Physiotherapy Clinic. HCPC registered physios in TW9.",
  openGraph: {
    title: "FAQ | Richmond Physiotherapy Clinic",
    description:
      "Common questions about physiotherapy, sports injuries, rehabilitation, and appointments at Richmond Physiotherapy Clinic.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "Do I need a GP referral to see a physiotherapist?",
          answer:
            "No, you don't need a GP referral. You can self-refer directly to us by booking an appointment online or by phone. This means you can access treatment quickly without waiting for a GP appointment. However, if you have health insurance, your insurer may require a GP referral for the claim to be covered — please check with them first.",
        },
        {
          question: "What happens at my first appointment?",
          answer:
            "Your first appointment is a 45-minute initial assessment. Your physiotherapist will take a detailed history of your condition, carry out a thorough physical examination, and discuss your goals. We'll explain what we think is happening, outline a treatment plan, and usually begin some hands-on treatment in the same session. Wear comfortable clothing that allows access to the affected area.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "This varies depending on your condition, its severity, and how long you've had it. Some patients feel significantly better after 2-3 sessions, while more complex or chronic conditions may require 6-8 or more. We'll give you an honest estimate at your first appointment and review your progress regularly.",
        },
        {
          question: "What should I wear to my appointment?",
          answer:
            "Wear comfortable, loose-fitting clothing that allows your physiotherapist to access the area being treated. For lower limb problems, shorts are ideal. For shoulder and upper body issues, a vest top or sports bra works well. We have changing facilities if needed.",
        },
      ],
    },
    {
      category: "Treatments & Conditions",
      questions: [
        {
          question: "What conditions do you treat?",
          answer:
            "We treat a wide range of musculoskeletal conditions including sports injuries, back and neck pain, sciatica, joint problems, post-surgical rehabilitation, headaches, repetitive strain injuries, arthritic conditions, and pelvic health issues. If you're unsure whether we can help with your condition, please call us and we'll advise.",
        },
        {
          question: "Does physiotherapy hurt?",
          answer:
            "Treatment should not be painful, though some techniques may cause mild discomfort, particularly when working on tight or tender areas. We always communicate with you throughout treatment and adjust our approach based on your feedback. Some patients may experience mild soreness for 24-48 hours after treatment, similar to post-exercise soreness.",
        },
        {
          question: "What is the difference between physiotherapy and massage?",
          answer:
            "Physiotherapy is a healthcare profession that uses assessment, diagnosis, and evidence-based treatment (including manual therapy, exercise, and education) to manage conditions and prevent injury. Massage therapy is one tool within physiotherapy. When you see a physiotherapist, you receive a full assessment and a comprehensive treatment plan, not just hands-on treatment.",
        },
        {
          question: "Do you offer acupuncture?",
          answer:
            "Yes, we offer Western medical acupuncture as part of our physiotherapy treatment. This is different from traditional Chinese acupuncture — it's based on anatomical and neurophysiological principles and is used to treat pain, muscle tension, and aid recovery. It's delivered by our trained physiotherapists.",
        },
      ],
    },
    {
      category: "Sports Injuries",
      questions: [
        {
          question: "When should I see a physio after an injury?",
          answer:
            "Ideally, as soon as possible. Early assessment and treatment can significantly speed up recovery and help prevent complications. For acute injuries, we can advise on immediate management (rest, ice, compression, elevation) and begin treatment once appropriate. Don't wait for the pain to become severe — early intervention gives the best outcomes.",
        },
        {
          question: "Can you help me return to sport after surgery?",
          answer:
            "Absolutely. Post-surgical rehabilitation is one of our specialities. We work with milestone-based programmes that safely progress you through each stage of recovery, from early mobilisation to sport-specific training. We liaise with your surgeon to ensure a coordinated approach to your recovery.",
        },
        {
          question: "Do you treat runners?",
          answer:
            "Yes, we see many runners with conditions including runner's knee, Achilles tendinopathy, plantar fasciitis, shin splints, and ITB syndrome. We can also carry out running biomechanics assessments to identify movement patterns that may be contributing to your injury and help prevent future problems.",
        },
      ],
    },
    {
      category: "Women's Health",
      questions: [
        {
          question: "What is women's health physiotherapy?",
          answer:
            "Women's health physiotherapy is a specialist area that addresses conditions related to the pelvic floor, pregnancy, postnatal recovery, and other issues that predominantly affect women. This includes urinary incontinence, pelvic organ prolapse, pelvic pain, diastasis recti (abdominal separation), and pregnancy-related back and pelvic girdle pain.",
        },
        {
          question: "Is women's health physio suitable during pregnancy?",
          answer:
            "Yes, physiotherapy is safe and often very helpful during pregnancy. We can treat pregnancy-related back pain, pelvic girdle pain, and help prepare your body for labour. We also provide guidance on safe exercise during pregnancy. Many women find that antenatal physiotherapy significantly improves their comfort and mobility.",
        },
        {
          question: "I'm embarrassed to discuss my pelvic floor issues. What can I expect?",
          answer:
            "We completely understand, and you're not alone — pelvic floor problems are extremely common. Our women's health physiotherapists are experienced, sensitive, and create a private, supportive environment. Everything is explained thoroughly before any assessment, and you're always in control. Many patients tell us they feel at ease from the very first appointment.",
        },
      ],
    },
    {
      category: "Appointments & Practicalities",
      questions: [
        {
          question: "What are your opening hours?",
          answer:
            "We're open Monday to Thursday 7:30am to 8:00pm, Friday 7:30am to 6:00pm, and Saturday 8:00am to 1:00pm. We're closed on Sundays. Our extended hours make it easy to fit appointments around work and other commitments.",
        },
        {
          question: "How much does physiotherapy cost?",
          answer:
            "Our initial assessment (45 minutes) and follow-up appointments (30 minutes) are competitively priced. Please contact us for our current fee schedule. We are recognised by all major health insurers including Bupa, AXA PPP, Aviva, and Vitality. We also offer block booking discounts for patients paying privately.",
        },
        {
          question: "Do you accept health insurance?",
          answer:
            "Yes, we are recognised providers for all major health insurance companies including Bupa, AXA PPP, Aviva, Vitality, and others. Please check with your insurer regarding your level of cover and whether a GP or consultant referral is required before your first appointment.",
        },
        {
          question: "Where is the clinic located?",
          answer:
            "We're at 14 Hill Street, Richmond, London TW9 1TN. We're a short walk from Richmond station, which is served by the District line, London Overground, and South Western Railway. On-street parking and nearby car parks are available.",
        },
        {
          question: "What is your cancellation policy?",
          answer:
            "We ask for at least 24 hours' notice if you need to cancel or reschedule. This allows us to offer your slot to another patient who may be waiting for treatment. Cancellations with less than 24 hours' notice may be subject to a cancellation fee.",
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

      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 font-serif">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Find answers to common questions about physiotherapy, our treatments, appointments, and what to expect at our clinic.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center gap-3 font-serif">
                  <div className="w-1 h-8 bg-[var(--accent)]"></div>
                  {category.category}
                </h2>
                <div className="space-y-1">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group bg-gray-50 rounded-sm overflow-hidden">
                      <summary className="flex items-center justify-between p-6 list-none cursor-pointer font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
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

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-4 font-serif">Still Have Questions?</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">We&apos;re here to help. If you couldn&apos;t find the answer you were looking for, please get in touch. Our friendly team will be happy to assist.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/physio-richmond/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Contact Us</Link>
              <a href="tel:02079465678" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors inline-block">Call 020 7946 5678</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Ready to Start Your Recovery?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Self-referral welcome. No GP letter needed. Early morning and evening appointments available.</p>
          <Link href="/physio-richmond/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Book Your Appointment</Link>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-600">
            <p><strong>HCPC Registered:</strong> All physiotherapists at Richmond Physiotherapy Clinic are registered with the Health and Care Professions Council. The information on this page is for general guidance only. Individual circumstances may vary. Treatments are subject to clinical assessment.</p>
          </div>
        </div>
      </section>
    </>
  );
}
