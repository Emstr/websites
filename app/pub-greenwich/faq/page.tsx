import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions",
  description: "Frequently asked questions about The Greenwich Arms. Bookings, Sunday roast, craft beer, dog policy, private hire and more.",
  openGraph: {
    title: "FAQ | The Greenwich Arms",
    description: "Common questions about bookings, menus, craft beers and visiting The Greenwich Arms.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Bookings & Visits",
      questions: [
        { question: "Do I need to book?", answer: "Walk-ins are always welcome for drinks and bar snacks. For food, we recommend booking, especially at weekends. For Sunday roast, booking is essential as we regularly sell out. You can book online, by email or by calling 020 7946 1180." },
        { question: "Are you dog-friendly?", answer: "Absolutely! We love dogs at The Greenwich Arms. Well-behaved dogs are welcome in the bar area and beer garden (though not the main dining area during food service). We keep water bowls and dog biscuits behind the bar — just ask." },
        { question: "Do you have a dress code?", answer: "No dress code — come as you are. We are a pub, not a Mayfair restaurant. Muddy boots from Greenwich Park? No problem. Just wipe your paws on the way in." },
        { question: "Is there parking?", answer: "There is limited street parking on Nelson Road and surrounding streets. We recommend using the Cutty Sark DLR station, which is just 3 minutes walk away. The Greenwich town centre car park is also nearby." },
      ],
    },
    {
      category: "Food & Drink",
      questions: [
        { question: "When is the Sunday roast served?", answer: "Our Sunday roast is served every Sunday from 12pm until sold out — which is usually around 4pm. We strongly recommend booking as we regularly sell out. Choose from beef, lamb, chicken, pork or our popular nut roast." },
        { question: "Do you cater for dietary requirements?", answer: "Yes, we take dietary needs seriously. Our menu always includes vegetarian, vegan and gluten-free options. Please let us know about any allergies or intolerances when booking and our kitchen will accommodate you." },
        { question: "How many craft beers do you have?", answer: "We stock over 30 craft beers, ales and lagers at any time, across our taps, bottles and cans. Our guest taps rotate regularly, so there is always something new to try. Ask our bar staff for a recommendation or a taster." },
        { question: "Do you serve food all day?", answer: "Our kitchen serves lunch from 12pm to 3pm and dinner from 5:30pm to 9:30pm, Monday to Saturday. On Sundays, we serve roasts from 12pm until sold out. Bar snacks and sharing boards are available throughout the day." },
      ],
    },
    {
      category: "Private Hire & Events",
      questions: [
        { question: "Can I hire the pub for a private event?", answer: "Yes! We offer full and partial venue hire for parties, celebrations and corporate events. Full hire accommodates up to 100 guests, while partial hire is available for groups of 20-50. Contact us to discuss your requirements and get a tailored quote." },
        { question: "Is the beer garden available for private hire?", answer: "Yes, the beer garden can be hired exclusively for summer parties and events, with seating for up to 60 guests. We can arrange barbecue packages, drinks deals and even live music for garden events." },
        { question: "Do you charge for live music nights?", answer: "No — all our live music events are free entry. We host bands every Friday and Saturday night from 8pm, acoustic sessions on Sunday afternoons, and a monthly open mic night on the first Thursday." },
      ],
    },
    {
      category: "Accessibility & Facilities",
      questions: [
        { question: "Is the pub accessible?", answer: "Our ground-floor bar and main dining area are fully step-free and accessible for wheelchair users. The beer garden is also accessible. Please contact us if you have specific accessibility needs and we will do our best to accommodate you." },
        { question: "Do you have Wi-Fi?", answer: "Yes, free Wi-Fi is available throughout the pub and beer garden. Ask at the bar for the password." },
        { question: "Do you show sport?", answer: "We show selected major sporting events on our screens, including Premier League football, Six Nations rugby and major boxing events. Check our social media for upcoming fixtures or give us a call to ask." },
      ],
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((category) => category.questions.map((faq) => ({
      "@type": "Question", name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    }))),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Everything you need to know about visiting The Greenwich Arms. Can&apos;t find your answer? Give us a ring.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
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
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">Give us a call, drop us an email or just pop in. We are always happy to help.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/pub-greenwich/contact" className="btn-accent">Contact Us</Link>
              <a href="tel:02079461180" className="btn-outline">Call 020 7946 1180</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for a Visit?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a table or just pop in for a pint. Dogs and good company always welcome.</p>
          <Link href="/pub-greenwich/contact" className="btn-accent">Book a Table</Link>
        </div>
      </section>
    </>
  );
}
