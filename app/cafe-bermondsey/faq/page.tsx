import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Common Questions Answered",
  description: "Frequently asked questions about Bermondsey Coffee House. Menu, opening hours, private hire, catering and more.",
  openGraph: { title: "FAQ | Bermondsey Coffee House", description: "Common questions about our coffee, menu, private hire and catering services." },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Coffee & Menu",
      questions: [
        { question: "What kind of coffee do you serve?", answer: "We serve speciality-grade coffee roasted locally in South London. Our espresso-based menu includes flat whites, lattes, cappuccinos and Americanos, plus we offer V60 pour-over, AeroPress and cold brew. We rotate single-origin options seasonally." },
        { question: "Do you have dairy-free milk options?", answer: "Yes, we offer oat, soy and almond milk at no extra charge. Our oat milk is our most popular alternative and steams beautifully for latte art." },
        { question: "Is your food made on-site?", answer: "Absolutely. Our pastry chef arrives at 4am every morning to bake everything from scratch. Croissants, cakes, sourdough and all our brunch dishes are prepared fresh in our kitchen. Nothing arrives frozen or pre-made." },
        { question: "Do you cater for dietary requirements?", answer: "Yes, we have vegetarian, vegan and gluten-free options on both our food and drinks menus. Just ask our team and they'll be happy to advise on what's suitable." },
      ],
    },
    {
      category: "Visiting Us",
      questions: [
        { question: "What are your opening hours?", answer: "We're open Monday to Friday from 7am to 6pm, and Saturday to Sunday from 8am to 5pm. We're open every day of the year except Christmas Day and Boxing Day." },
        { question: "Do you take reservations for brunch?", answer: "We don't take reservations for regular visits — it's first come, first served. However, for groups of 6 or more, we recommend calling ahead so we can prepare a suitable table." },
        { question: "Is there Wi-Fi?", answer: "Yes, free Wi-Fi is available for all customers. We're a popular spot for remote workers during the week, and we have plenty of power sockets throughout the cafe." },
        { question: "Do you have outdoor seating?", answer: "Yes, we have a small outdoor terrace on Bermondsey Street with seating for about 12 people. It's lovely in the warmer months." },
      ],
    },
    {
      category: "Private Hire & Catering",
      questions: [
        { question: "Can I hire the cafe for a private event?", answer: "Yes! Our space is available for private hire in the evenings and at selected times during the week. We can accommodate up to 40 guests seated and offer full food and drink packages. Get in touch to discuss your event." },
        { question: "Do you offer catering?", answer: "We do. Our catering service covers corporate meetings, weddings, private parties and events across London. We offer mobile coffee carts, pastry platters, brunch catering and full lunch spreads." },
        { question: "How far in advance should I book private hire?", answer: "We recommend booking at least 2-3 weeks in advance for private hire, and 4-6 weeks for larger catering jobs. However, we'll always try to accommodate shorter notice requests if we can." },
      ],
    },
    {
      category: "Coffee Subscriptions",
      questions: [
        { question: "How does the subscription work?", answer: "Choose your preferred roast (light, medium or dark), your grind (whole bean, espresso, filter or cafetiere), and your frequency (weekly, fortnightly or monthly). We'll deliver fresh beans straight to your door. You can pause, change or cancel at any time." },
        { question: "Is delivery free?", answer: "Yes, all subscription deliveries within the UK are free of charge. Your beans are posted within 48 hours of roasting for maximum freshness." },
      ],
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((category) => category.questions.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about visiting, private hire, subscriptions and more.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-[var(--accent)]"></div>{category.category}</h2>
                <div className="space-y-1">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group bg-gray-50 rounded-sm overflow-hidden">
                      <summary className="flex items-center justify-between p-6 list-none cursor-pointer font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
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

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Still Got Questions?</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">Just pop in or drop us a message. We&apos;re always happy to help.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/cafe-bermondsey/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Contact Us</Link>
              <a href="tel:02079468901" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors">Call 020 7946 8901</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Great Coffee?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">We&apos;re on Bermondsey Street, open seven days a week. See you soon.</p>
          <Link href="/cafe-bermondsey/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Visit Us</Link>
        </div>
      </section>
    </>
  );
}
