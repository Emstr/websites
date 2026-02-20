import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Spa Questions Answered",
  description: "Frequently asked questions about treatments, booking, and visiting Mayfair Wellness Spa.",
  openGraph: { title: "FAQ | Mayfair Wellness Spa", description: "Common questions about spa treatments, booking, memberships, and what to expect." },
};

export default function FAQPage() {
  const faqs = [
    { category: "Booking & Appointments", questions: [
      { question: "How do I book a treatment?", answer: "You can book by calling 020 7946 8800, emailing reservations@mayfairwellness.co.uk, or completing the contact form on our website. We recommend booking at least 48 hours in advance, though same-day availability is sometimes possible." },
      { question: "What is your cancellation policy?", answer: "We require 24 hours notice for cancellations. Late cancellations or no-shows will be charged 50% of the treatment value. We understand that plans change, but this policy allows us to offer appointments to other guests." },
      { question: "Can I book treatments for a group?", answer: "Absolutely. We regularly host hen parties, birthday celebrations, and corporate wellness days. Contact our reservations team to discuss group packages and exclusive use of our facilities." },
      { question: "Do you sell gift vouchers?", answer: "Yes, gift vouchers are available for specific treatments or monetary values. They can be purchased online, by phone, or in person. Vouchers are valid for twelve months from the date of purchase and make a wonderful gift." },
    ]},
    { category: "Treatments & Services", questions: [
      { question: "How long are your treatments?", answer: "Treatment lengths vary from 30 minutes for express options to 120 minutes for our indulgent packages. Most massage and facial treatments are available in 60 or 90-minute durations. Your therapist will advise on the most suitable length during your consultation." },
      { question: "Can I combine multiple treatments?", answer: "Yes, we offer combination packages and you can also create your own spa day by booking multiple treatments with breaks in between. Our reservations team can help you plan the perfect sequence of treatments." },
      { question: "What products do you use?", answer: "We use premium products from Elemis, ESPA, and our own bespoke blends. All our products are cruelty-free and many are organic. If you have allergies or product preferences, please let us know when booking." },
      { question: "I am pregnant — can I have treatments?", answer: "Yes, we offer pregnancy-safe treatments including prenatal massage and gentle facials. Please inform us of your pregnancy when booking so we can ensure your therapist uses appropriate techniques and products. We recommend treatments from the second trimester onwards." },
    ]},
    { category: "Your Visit", questions: [
      { question: "What should I wear?", answer: "We provide luxury robes, slippers, and disposable underwear. You will be asked to undress to your comfort level for treatments. Your therapist will always ensure you are properly draped and comfortable throughout." },
      { question: "When should I arrive?", answer: "We recommend arriving 15 minutes before your first treatment. This allows time to change, complete a brief health form, and begin relaxing in our lounge before your session. For returning guests, 10 minutes is sufficient." },
      { question: "Do you have a relaxation area?", answer: "Yes, our relaxation lounge is available to all guests before and after treatments. Complimentary herbal teas, infused water, and light refreshments are provided. We encourage you to arrive early and stay afterwards to prolong the benefit of your treatment." },
    ]},
    { category: "Memberships & Pricing", questions: [
      { question: "What membership options do you offer?", answer: "We offer three membership tiers: Silver, Gold, and Platinum. Each includes a monthly treatment credit, discounts on additional treatments, priority booking, and thermal suite access. Contact us for current pricing and to discuss which tier suits your needs." },
      { question: "How much do treatments cost?", answer: "Treatment prices vary depending on the type and duration. Massages start from around 85 pounds for 60 minutes, facials from 75 pounds, and body wraps from 95 pounds. Couples packages and spa days are also available. Contact us for our full price list." },
      { question: "Do you accept corporate bookings?", answer: "Yes, we work with several businesses to provide corporate wellness packages, team rewards, and client entertainment experiences. We can tailor packages to your budget and requirements. Contact our reservations team for more information." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((c) => c.questions.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about visiting Mayfair Wellness Spa.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">
        {faqs.map((category, ci) => (<div key={ci} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, fi) => (<details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">Our reservations team is happy to help with any questions not covered here.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/spa-mayfair/contact" className="btn-accent">Contact Us</Link><a href="tel:02079468800" className="btn-outline">Call 020 7946 8800</a></div></div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Escape?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book your treatment today and discover Mayfair&apos;s finest wellness destination.</p><Link href="/spa-mayfair/contact" className="btn-accent">Book a Treatment</Link></div></section>
    </>
  );
}
