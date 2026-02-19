import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Common Dental Questions Answered",
  description:
    "Frequently asked questions about dental treatments, NHS and private options, emergency care, and what to expect at Clapham Dental Practice. GDC registered dentists in SW4.",
  openGraph: {
    title: "FAQ | Clapham Dental Practice",
    description:
      "Common questions about dental care, treatments, costs, and appointments at Clapham Dental Practice. NHS and private dentists in Clapham.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "General Dental Care",
      questions: [
        {
          question: "How often should I visit the dentist?",
          answer:
            "We recommend a check-up every six months for most patients, though some may benefit from more frequent visits. Regular appointments allow us to catch problems early, when they're easier and less costly to treat. Your dentist will advise on the ideal frequency based on your oral health.",
        },
        {
          question: "What happens during a dental check-up?",
          answer:
            "During a check-up, your dentist will examine your teeth, gums, and mouth for signs of decay, gum disease, and other issues. We may take digital X-rays to check beneath the surface. We'll discuss your oral health, recommend any treatments, and give you advice on maintaining a healthy smile at home.",
        },
        {
          question: "Do you treat nervous patients?",
          answer:
            "Absolutely. We specialise in caring for anxious and nervous patients. Our team is trained in gentle techniques and takes the time to explain every step. We offer a calm, reassuring environment, and we'll always go at your pace. Many of our most nervous patients now look forward to their visits.",
        },
        {
          question: "Do you see children and families?",
          answer:
            "Yes, we welcome patients of all ages, including children. We recommend bringing children to the dentist from around age one, or when their first teeth appear. Early visits help children feel comfortable in the dental environment and allow us to monitor their development.",
        },
      ],
    },
    {
      category: "NHS & Private Treatment",
      questions: [
        {
          question: "Do you accept NHS patients?",
          answer:
            "Yes, we offer both NHS and private dental treatment. NHS dentistry covers essential treatments at set charges. For treatments not available on the NHS, such as cosmetic procedures and some advanced options, we offer competitive private fees. We'll always explain your options clearly.",
        },
        {
          question: "What is the difference between NHS and private dentistry?",
          answer:
            "NHS dentistry covers clinically necessary treatments at government-set prices, divided into three charge bands. Private dentistry offers a wider range of treatments, materials, and appointment options. For example, tooth-coloured fillings on back teeth, veneers, and teeth whitening are private treatments. We'll always discuss both options where available.",
        },
        {
          question: "How much do NHS dental treatments cost?",
          answer:
            "NHS dental charges are set by the government in three bands. Band 1 covers examinations and X-rays, Band 2 includes fillings and extractions, and Band 3 covers crowns, dentures, and bridges. Some patients are entitled to free NHS treatment — ask our reception team for details.",
        },
        {
          question: "Do you offer payment plans for private treatment?",
          answer:
            "Yes, we offer interest-free finance on selected private treatments to help spread the cost. We also accept all major credit and debit cards. Our team will discuss payment options before any treatment begins, so there are never any surprises.",
        },
      ],
    },
    {
      category: "Cosmetic Treatments",
      questions: [
        {
          question: "How long does teeth whitening last?",
          answer:
            "Professional teeth whitening results typically last between one and three years, depending on your diet and habits. Consuming tea, coffee, red wine, and tobacco can cause staining to return sooner. We provide take-home maintenance kits so you can top up your results whenever you like.",
        },
        {
          question: "Are veneers permanent?",
          answer:
            "Porcelain veneers are a long-lasting cosmetic solution, typically lasting 10-15 years or more with proper care. However, they do require a small amount of enamel to be removed from your natural teeth, so the process is not reversible. We'll discuss this thoroughly during your consultation.",
        },
        {
          question: "How long does Invisalign treatment take?",
          answer:
            "Most Invisalign treatments take between 6 and 18 months, depending on the complexity of your case. Mild alignment issues may be resolved in as little as 3-6 months. During your free consultation, we'll give you a personalised treatment timeline and show you a digital preview of your results.",
        },
        {
          question: "Is composite bonding better than veneers?",
          answer:
            "Both are excellent options, but they suit different needs. Composite bonding is more affordable, reversible, and can be completed in a single visit, making it ideal for minor chips and gaps. Veneers offer a more dramatic transformation and last longer. We'll help you choose the best option for your smile goals.",
        },
      ],
    },
    {
      category: "Dental Implants",
      questions: [
        {
          question: "Am I suitable for dental implants?",
          answer:
            "Most adults with good general health are suitable for implants. We'll assess your bone density, gum health, and medical history during a detailed consultation, which includes CT scanning. If you've experienced bone loss, we may be able to perform a bone graft to make implants possible.",
        },
        {
          question: "How long do dental implants last?",
          answer:
            "With proper care and maintenance, dental implants can last a lifetime. The implant fixture itself is made from titanium and integrates permanently with your jawbone. The crown on top may need replacing after 10-15 years due to normal wear. We offer a lifetime guarantee on our implant fixtures.",
        },
        {
          question: "Is the implant procedure painful?",
          answer:
            "The procedure is carried out under local anaesthetic, so you shouldn't feel any pain during placement. Most patients report less discomfort than they expected. Any soreness after the procedure can usually be managed with over-the-counter painkillers and typically subsides within a few days.",
        },
      ],
    },
    {
      category: "Emergency Dental Care",
      questions: [
        {
          question: "What counts as a dental emergency?",
          answer:
            "Dental emergencies include severe toothache, a knocked-out or broken tooth, a lost crown or filling, dental abscesses, uncontrolled bleeding, and facial swelling. If you're unsure whether your situation is an emergency, call us and our team will advise you.",
        },
        {
          question: "Can I get a same-day emergency appointment?",
          answer:
            "Yes, we reserve appointment slots each day for dental emergencies. Call us as early as possible on 020 7946 1234 and we'll do our best to see you the same day. If you call outside opening hours, our answerphone will provide advice and emergency contact details.",
        },
        {
          question: "What should I do if a tooth is knocked out?",
          answer:
            "Handle the tooth by the crown, not the root. If it's clean, try to place it back in the socket. If that's not possible, keep it moist in milk or saliva and get to us within 30 minutes if you can. The sooner we see you, the better the chance of saving the tooth.",
        },
      ],
    },
    {
      category: "Appointments & Practicalities",
      questions: [
        {
          question: "Do you offer evening appointments?",
          answer:
            "Yes, we're open until 8pm Monday to Thursday, making it easy to fit dental care around your work schedule. We also offer Saturday morning appointments from 9am to 2pm. Book online or call our reception team to find a time that suits you.",
        },
        {
          question: "How do I register as a new patient?",
          answer:
            "Registering is simple. You can call us on 020 7946 1234, email reception@claphamdental.co.uk, or complete the booking form on our website. We'll arrange an initial appointment that includes a thorough examination and any necessary X-rays. Please bring photo ID and any relevant medical information.",
        },
        {
          question: "Where is the practice located?",
          answer:
            "We're at 87 Clapham High Street, London SW4 7TB, just a short walk from Clapham High Street Overground station and close to Clapham Common and Clapham North tube stations. We serve patients from Clapham, Battersea, Brixton, Balham, and across South London.",
        },
        {
          question: "What is your cancellation policy?",
          answer:
            "We ask for at least 24 hours' notice if you need to cancel or reschedule an appointment. This allows us to offer the slot to another patient who may be in need. Repeated missed appointments without notice may result in a small cancellation fee.",
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
            <p className="text-xl text-gray-200 leading-relaxed">Find answers to common questions about dental treatments, NHS and private options, and what to expect at our practice.</p>
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
              <Link href="/dentist-clapham/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Contact Us</Link>
              <a href="tel:02079461234" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors inline-block">Call 020 7946 1234</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Ready to Book Your Appointment?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">New patients welcome. NHS and private options available. Evening appointments Monday to Thursday.</p>
          <Link href="/dentist-clapham/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Book Your Appointment</Link>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-600">
            <p><strong>GDC Registered:</strong> All dentists at Clapham Dental Practice are registered with the General Dental Council. The information on this page is for general guidance only. Individual circumstances may vary. Treatments are subject to clinical assessment.</p>
          </div>
        </div>
      </section>
    </>
  );
}
