import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Travel Booking Questions Answered",
  description: "Frequently asked questions about booking with Chelsea Travel Company. Learn about ATOL protection, payments, cancellations and our travel planning services.",
  openGraph: { title: "FAQ | Chelsea Travel Company", description: "Common questions about booking holidays with Chelsea Travel Company on King's Road, Chelsea." },
};

export default function FAQPage() {
  const faqs = [
    { category: "Booking & Protection", questions: [
      { question: "What does ABTA and ATOL protection mean for me?", answer: "ABTA (Association of British Travel Agents) and ATOL (Air Travel Organisers' Licensing) are your safety nets. If a travel company ceases trading, ATOL protection ensures you receive a refund or are brought home if you are already abroad. ABTA provides a code of conduct and a complaints resolution service. When you book with us, your money and your holiday are fully protected." },
      { question: "How do I pay for my holiday?", answer: "We typically require a deposit at the time of booking, with the balance due 10-12 weeks before departure. We accept payment by debit card, credit card and bank transfer. For holidays within 10 weeks, full payment is required at the time of booking. We provide a detailed payment schedule with your booking confirmation." },
      { question: "Can I spread the cost of my holiday?", answer: "Yes, once you have paid your initial deposit, you can make additional payments at any time before the balance due date. Many of our clients prefer to pay in instalments, and we are happy to set up a payment plan that works for you. Simply let your consultant know your preference." },
      { question: "What happens if I need to cancel my booking?", answer: "Cancellation policies vary depending on the suppliers involved in your booking. We will always explain the cancellation terms clearly before you commit. We strongly recommend taking out comprehensive travel insurance as soon as you book, which can cover cancellation costs in many circumstances." },
    ]},
    { category: "Planning Your Holiday", questions: [
      { question: "How far in advance should I book?", answer: "This depends on the type of holiday. For peak-season luxury holidays, honeymoons and ski trips, we recommend booking 6-12 months ahead to secure the best availability. Safari holidays often need 9-12 months' notice for the most popular lodges. However, we can also arrange last-minute getaways with as little as a few weeks' notice." },
      { question: "Do I need to visit your office to book?", answer: "Not at all. While we love welcoming clients to our King's Road office, we are equally happy to plan your holiday over the phone, by email or via video call. Many of our clients never visit in person and still receive the same exceptional, personalised service." },
      { question: "Can you arrange group holidays or celebrations?", answer: "Absolutely. We regularly organise group holidays, milestone birthday trips, anniversary celebrations, hen and stag trips, and family reunions. We can handle all the logistics, including group bookings, restaurant reservations and special activities, ensuring everyone has a wonderful time." },
      { question: "Do you book flights only, or do I have to book a package?", answer: "We offer complete flexibility. We can book flights only, hotels only, transfers only, or a fully packaged holiday with everything included. Most clients prefer us to handle the complete trip as it is easier and often better value, but we are happy to assist with individual elements too." },
    ]},
    { category: "During Your Trip", questions: [
      { question: "What if something goes wrong while I am abroad?", answer: "We provide a 24/7 emergency contact number with every booking. If you experience any issues during your trip, from a missed connection to a hotel problem, call us and we will work to resolve it immediately. Having a travel agent in your corner makes a real difference when things do not go to plan." },
      { question: "Do you arrange travel insurance?", answer: "We strongly recommend comprehensive travel insurance and can advise you on suitable policies. While we do not sell insurance directly, we can point you to reputable providers who offer excellent cover for the type of trip you are taking. We advise purchasing insurance as soon as you book." },
      { question: "Will I receive all my documents electronically?", answer: "Yes, we provide a comprehensive travel pack including e-tickets, hotel confirmations, transfer vouchers, and a day-by-day itinerary. Everything is sent electronically for convenience, but we can also provide printed copies if you prefer. Your pack also includes our emergency contact details and local tips." },
    ]},
    { category: "Costs & Fees", questions: [
      { question: "Do you charge a booking fee?", answer: "For most holiday bookings we do not charge a separate fee, as our service is included in the holiday price. For complex multi-destination itineraries or flight-only bookings, a small service fee may apply. We will always be transparent about any fees before you commit to booking." },
      { question: "Are your prices competitive with online booking sites?", answer: "In many cases, yes. We have access to exclusive rates, upgrades and added-value extras that are not available online. When you factor in the time you save, the expertise you receive, and the ATOL protection included, booking with us represents excellent value compared to doing it yourself." },
      { question: "Can you match a price I have found online?", answer: "If you find a like-for-like holiday at a lower price, let us know and we will do our best to match or beat it. Often we can offer added extras such as room upgrades, meal plans or airport lounge access that make our package better value overall, even if the headline price is similar." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((cat) => cat.questions.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width"><div className="max-w-3xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 leading-relaxed">Find answers to common questions about booking your holiday, ATOL protection, payments and our travel planning services.</p>
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
                    <summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
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
          <h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2>
          <div className="gold-line-center mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">We&apos;re always happy to help. Pop into our office, give us a ring, or send us an email and we&apos;ll get back to you promptly.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/travel-agent-chelsea/contact" className="btn-accent">Contact Us</Link>
            <a href="tel:02079466650" className="btn-outline">Call 020 7946 6650</a>
          </div>
        </div></div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Planning?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Your dream holiday is closer than you think. Get in touch today and let our expert consultants do the rest.</p>
          <Link href="/travel-agent-chelsea/contact" className="btn-accent">Plan Your Trip</Link>
        </div>
      </section>
    </>
  );
}
