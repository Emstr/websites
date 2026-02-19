import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Nail Treatment Questions Answered",
  description:
    "Frequently asked questions about nail treatments, booking, pricing and our salon in Notting Hill. Everything you need to know before your visit.",
  openGraph: {
    title: "FAQ | Notting Hill Nail & Beauty Bar",
    description: "Common questions about our nail salon, treatments, booking and pricing in Notting Hill W11.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Booking & Appointments",
      questions: [
        { question: "Do I need to book in advance?", answer: "We recommend booking in advance to guarantee your preferred time and technician, but we do accept walk-ins subject to availability. You can book online, by phone, or by email." },
        { question: "What is your cancellation policy?", answer: "We ask for at least 24 hours' notice for cancellations or rescheduling. Late cancellations or no-shows may incur a charge. We understand things come up, so please just let us know as early as possible." },
        { question: "How long do treatments take?", answer: "A standard gel manicure takes approximately 45 minutes. Gel pedicures take about 60 minutes. Acrylic extensions and nail art take 60-90 minutes depending on complexity. We'll give you an accurate time estimate when you book." },
        { question: "Can I book for a group or party?", answer: "Absolutely! We love hosting bridal parties, hen dos, birthday celebrations and girls' nights. Contact us for group booking rates and availability. We can arrange Prosecco and nibbles for your party." },
      ],
    },
    {
      category: "Treatments & Products",
      questions: [
        { question: "Are your products really vegan-friendly?", answer: "Yes, every product we use is 100% vegan and cruelty-free. We work with brands like The GelBottle, HEMA-free gel systems, and other premium vegan-friendly suppliers. We're happy to provide full ingredient lists on request." },
        { question: "What is BIAB and is it right for me?", answer: "BIAB (Builder in a Bottle) is a strengthening gel overlay that protects your natural nails while they grow underneath. It's perfect if you have weak, brittle or bitten nails, or if you want the look of gel without extensions. Your technician can assess your nails and recommend whether BIAB is right for you." },
        { question: "Will gel or acrylic damage my natural nails?", answer: "When applied and removed correctly by a qualified technician, neither gel nor acrylic should damage your natural nails. We never force removal — we soak off gently and always prioritise nail health. If you have concerns, we'll recommend the gentlest option for your nails." },
        { question: "Can I bring my own nail art design?", answer: "Absolutely! We love recreating designs from Instagram, Pinterest or anywhere else. Save your inspiration images on your phone and show them to your technician. We can also create completely bespoke designs from scratch." },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        { question: "How much do your treatments cost?", answer: "Our prices vary by treatment. Gel manicures start from around £30, gel pedicures from £40, and acrylic extensions from £45. Nail art is priced depending on complexity. We're happy to provide a full price list — just ask when you contact us." },
        { question: "What payment methods do you accept?", answer: "We accept cash, all major credit and debit cards, Apple Pay and Google Pay. We also sell gift vouchers if you'd like to treat someone special." },
        { question: "Do you offer loyalty rewards?", answer: "Yes! We have a loyalty card scheme where every 6th gel manicure is free. Ask about it at your next visit." },
      ],
    },
    {
      category: "Aftercare & Maintenance",
      questions: [
        { question: "How long will my gel manicure last?", answer: "A gel manicure typically lasts 2-3 weeks without chipping. To maximise longevity, wear gloves for cleaning, avoid using your nails as tools, and apply cuticle oil daily." },
        { question: "How do I remove gel at home?", answer: "We strongly recommend professional removal to avoid damaging your natural nails. If you can't visit us, soak cotton pads in pure acetone, wrap each nail in foil, and leave for 15-20 minutes. Never peel or force gel off." },
        { question: "How often should I get my nails done?", answer: "For gel manicures, we recommend every 2-3 weeks. For acrylic infills, every 2-3 weeks. For BIAB, every 3-4 weeks. Your technician will advise on the ideal schedule based on your nail growth." },
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
              Everything you need to know about our treatments, booking process and what to expect during your visit.
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
                  <div className="w-1 h-8 bg-accent"></div>
                  {category.category}
                </h2>
                <div className="space-y-1">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group bg-gray-50 rounded-sm overflow-hidden">
                      <summary className="faq-question p-6 list-none cursor-pointer">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
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
            <p className="text-lg text-gray-600 mb-8">We&apos;re always happy to help. Give us a call or send us a message.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/nail-salon-notting-hill/contact" className="btn-accent">Contact Us</Link>
              <a href="tel:02079463678" className="btn-outline">Call 020 7946 3678</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Treat yourself to gorgeous nails at Notting Hill&apos;s favourite nail bar.</p>
          <Link href="/nail-salon-notting-hill/contact" className="btn-accent">Book Your Appointment</Link>
        </div>
      </section>
    </>
  );
}
