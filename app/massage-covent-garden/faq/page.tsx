import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Common Massage Therapy Questions",
  description: "Frequently asked questions about massage therapy, booking, what to expect, and our treatments at Covent Garden Massage Therapy.",
  openGraph: { title: "FAQ | Covent Garden Massage Therapy", description: "Answers to common questions about massage therapy and booking at our Covent Garden clinic." },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Booking & Appointments",
      questions: [
        { question: "How do I book an appointment?", answer: "You can book by calling 020 7946 7740, emailing bookings@cgmassage.co.uk, or filling in the form on our contact page. We aim to confirm all bookings within a few hours. For same-day appointments, calling is usually the quickest option." },
        { question: "What is your cancellation policy?", answer: "We ask for at least 24 hours notice if you need to cancel or reschedule. Cancellations made with less than 24 hours notice, or no-shows, may be charged at 50% of the treatment price. We understand that emergencies happen and will always be reasonable." },
        { question: "Can I request a specific therapist?", answer: "Absolutely. If you have a preferred therapist, let us know when you book and we will do our best to accommodate your request. If your preferred therapist is unavailable, we will suggest an alternative with similar specialisms." },
        { question: "Do you accept walk-ins?", answer: "We do accept walk-ins when we have availability, but we recommend booking in advance to guarantee your preferred time and therapist. Our busiest times are lunchtimes and early evenings on weekdays, and Saturday mornings." },
      ],
    },
    {
      category: "Before Your Treatment",
      questions: [
        { question: "What should I wear?", answer: "Wear whatever is comfortable — you will be given privacy to undress to your comfort level before treatment. Most clients undress to their underwear for a full-body massage, but you are always covered with towels during the session. For sports massage, loose shorts and a vest top are fine." },
        { question: "Should I eat before my massage?", answer: "We recommend having a light meal at least an hour before your appointment. Arriving on a very full or completely empty stomach can make lying face-down uncomfortable. Stay well hydrated — drink plenty of water before and after your treatment." },
        { question: "Is there anything I should tell my therapist?", answer: "Yes, please let your therapist know about any medical conditions, injuries, areas of pain, allergies, or if you are pregnant. This information helps us tailor your treatment safely and effectively. Everything you share is kept confidential." },
        { question: "How early should I arrive?", answer: "We recommend arriving five minutes before your appointment time. This gives you a moment to settle in and complete a brief health consultation form if it is your first visit. Your treatment will begin at the booked time, so arriving late may mean a shorter session." },
      ],
    },
    {
      category: "During & After Treatment",
      questions: [
        { question: "Will the massage hurt?", answer: "A good massage should never be painful. Deep tissue and sports massage involve firmer pressure that can feel intense, but your therapist will always check in with you and adjust accordingly. If anything is uncomfortable, please speak up — communication is key to a good treatment." },
        { question: "How will I feel after my massage?", answer: "Most people feel deeply relaxed and a little sleepy immediately afterwards. It is common to feel mild soreness in the 24 hours following a deep tissue or sports massage — this is normal and should resolve quickly. Drink plenty of water after your treatment to help flush out toxins." },
        { question: "How often should I have a massage?", answer: "It depends on your goals. For general wellbeing and stress management, once a month is a good baseline. If you are dealing with chronic pain or a specific injury, your therapist may recommend weekly or fortnightly sessions initially. For athletes, the frequency depends on your training schedule." },
        { question: "Can massage help with my specific condition?", answer: "Massage therapy can be effective for a wide range of conditions including back pain, neck and shoulder tension, headaches, stress, anxiety, insomnia, sciatica, and sports injuries. During your consultation, your therapist will let you know honestly whether massage is appropriate for your situation." },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        { question: "How much do treatments cost?", answer: "Our prices vary by treatment type and duration. A 60-minute Swedish massage starts from a competitive rate, while specialist treatments like hot stone therapy are priced slightly higher. Contact us for our current price list — we are always transparent about costs before you book." },
        { question: "Do you offer packages or memberships?", answer: "Yes, we offer block-booking discounts when you purchase a course of treatments upfront. We also have a loyalty programme — after every ten treatments, you receive a complimentary 30-minute session. Ask us for details when you visit." },
        { question: "What payment methods do you accept?", answer: "We accept all major credit and debit cards, contactless payments, and cash. Payment is taken at the end of your treatment. Gift vouchers are also available and make a thoughtful present for someone who deserves a bit of looking after." },
      ],
    },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((cat) => cat.questions.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width"><div className="max-w-3xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about booking, treatments, and what to expect at our Covent Garden clinic.</p>
        </div></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width"><div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2>
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
        </div></div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width"><div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Still Got Questions?</h2>
          <div className="gold-line-center mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">Can&apos;t find the answer you&apos;re looking for? Give us a call or drop us an email — we&apos;re always happy to help.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/massage-covent-garden/contact" className="btn-accent">Contact Us</Link>
            <a href="tel:02079467740" className="btn-outline">Call 020 7946 7740</a>
          </div>
        </div></div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book Your Massage?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Open seven days a week in Covent Garden. Book your treatment today and feel the difference.</p>
          <Link href="/massage-covent-garden/contact" className="btn-accent">Book Your Session</Link>
        </div>
      </section>
    </>
  );
}
