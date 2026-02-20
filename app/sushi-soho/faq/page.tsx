import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Dining Questions Answered",
  description: "Frequently asked questions about dining at Soho Sushi Kitchen. Learn about reservations, the omakase menu, dietary requirements, sake pairings, private dining and more.",
  openGraph: { title: "FAQ | Soho Sushi Kitchen", description: "Common questions about reservations, our omakase menu, dietary requirements and dining at Soho Sushi Kitchen." },
};

export default function FAQPage() {
  const faqs = [
    { category: "Reservations & Visiting", questions: [
      { question: "Do I need to book in advance?", answer: "We strongly recommend booking for dinner, especially on Friday and Saturday evenings when we are usually fully booked. For lunch, we accept walk-ins at the sushi bar on a first-come basis, but we recommend booking for table seating. Omakase and private dining require at least 48 hours advance notice. You can book by phone on 020 7946 3380 or through our website." },
      { question: "What is the dress code?", answer: "There is no formal dress code, but we encourage smart casual attire. Many of our guests are coming from work, a show, or a night out in Soho, so whatever you are comfortable in is absolutely fine. We simply ask that guests respect the intimate atmosphere of the restaurant." },
      { question: "Is the restaurant accessible?", answer: "Yes, our restaurant is fully accessible at ground floor level with no steps at the entrance. We have an accessible toilet on the same level. If you have any specific accessibility requirements, please let us know when booking and we will do everything we can to accommodate you." },
      { question: "Can I bring my own wine or sake?", answer: "We do allow BYO on Monday and Tuesday evenings with a corkage fee of 15 pounds per bottle. From Wednesday to Sunday, we kindly ask that guests enjoy drinks from our carefully curated list. Our sake sommelier has selected over thirty premium sakes that pair beautifully with our food." },
    ]},
    { category: "Menu & Dietary", questions: [
      { question: "What is the omakase tasting menu?", answer: "Omakase means 'I leave it up to you' in Japanese. It is a multi-course tasting menu where Chef Takeshi selects the finest seasonal fish and produce and creates a sequence of twelve to fifteen courses just for you. Each course is a surprise, designed to showcase the natural flavour and texture of the ingredients. The omakase changes daily depending on what is available from the market. It is priced at 95 pounds per person, with an optional sake pairing for an additional 45 pounds." },
      { question: "Do you cater for vegetarians or vegans?", answer: "Yes, we offer a dedicated vegetarian tasting menu and can adapt many dishes for vegan guests. Our vegetarian menu features seasonal vegetables, mushrooms, tofu and pickles prepared with the same care and technique as our fish dishes. Please let us know about any dietary requirements when booking so we can prepare accordingly." },
      { question: "Can you accommodate allergies?", answer: "Absolutely. Please inform us of any allergies when making your reservation and remind your server when you arrive. Our kitchen handles soy, sesame, shellfish, fish, gluten and nuts. While we take every precaution, we cannot guarantee a completely allergen-free environment, but we will always do our best to accommodate your needs safely." },
      { question: "Do you serve cooked food or just raw fish?", answer: "While sushi and sashimi are our speciality, our menu also includes tempura, grilled dishes, miso soup and cooked sides. Our bento boxes include a mix of raw and cooked items. If you are not comfortable with raw fish, there is still plenty on the menu for you to enjoy." },
    ]},
    { category: "Private Dining & Events", questions: [
      { question: "How does private dining work?", answer: "Our private dining room seats up to ten guests around a single table in a beautifully designed, intimate space. Chef Takeshi creates a bespoke menu for each event, tailored to your preferences and dietary requirements. We can arrange sake pairings, wine service, floral arrangements and personalised touches. A minimum spend of 120 pounds per person applies. Please contact us at least one week in advance to discuss your requirements." },
      { question: "Can I host a birthday or celebration?", answer: "Absolutely, we love hosting celebrations. Whether it is a birthday, anniversary, engagement or any special occasion, we can tailor the experience to make it memorable. We can arrange a personalised menu, special dessert, and even a handwritten card from the chef. Our private dining room is ideal for celebrations with up to ten guests." },
      { question: "Do you offer corporate dining?", answer: "Yes, our private dining room is perfect for intimate business dinners and client entertaining. The calm, refined atmosphere is ideal for conversation, and the bespoke menu format means your guests receive a truly special experience. We can provide itemised invoices for corporate accounts." },
    ]},
    { category: "Sake & Drinks", questions: [
      { question: "I am new to sake. Can you help me choose?", answer: "Of course. Our certified sake sommelier is always happy to guide you through our list. Whether you prefer something light and crisp or rich and full-bodied, we will find the perfect sake for your palate and your food. Our sake flights of three or five tasters are a wonderful way to explore different styles. There is no such thing as a silly question when it comes to sake &mdash; we are here to help you discover something you love." },
      { question: "Do you serve other drinks besides sake?", answer: "Yes, we have a carefully chosen selection of Japanese whisky, Japanese beer (including Asahi and Kirin on draught), green tea, and soft drinks. We also offer a small but well-curated wine list, focusing on crisp whites and light reds that complement Japanese cuisine. Non-alcoholic options include yuzu lemonade and house-made Japanese iced tea." },
      { question: "What is a sake pairing?", answer: "Our sake pairing is a curated flight of sakes selected by our sommelier to complement each course of the omakase tasting menu. Each sake is chosen to enhance the specific flavours and textures of the dish it accompanies. It is priced at 45 pounds and is the best way to experience the full depth of our omakase." },
    ]},
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.flatMap((cat) => cat.questions.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1><p className="text-xl text-gray-200 leading-relaxed">Find answers to common questions about reservations, our omakase menu, dietary requirements, sake and more.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="max-w-4xl mx-auto">
        {faqs.map((category, categoryIndex) => (<div key={categoryIndex} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><div className="w-1 h-8 bg-accent"></div>{category.category}</h2><div className="space-y-1">{category.questions.map((faq, faqIndex) => (<details key={faqIndex} className="group bg-gray-50 rounded-sm overflow-hidden"><summary className="faq-question p-6 list-none cursor-pointer"><span className="flex-1 pr-4">{faq.question}</span><svg className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div></details>))}</div></div>))}
      </div></div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold text-primary mb-4">Still Have Questions?</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 mb-8">Give us a call or send us an email. Our team is always happy to help with any questions about dining with us.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/sushi-soho/contact" className="btn-accent">Contact Us</Link><a href="tel:02079463380" className="btn-outline">Call 020 7946 3380</a></div></div></div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience Soho Sushi Kitchen?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Reserve your table and discover authentic Japanese sushi in the heart of Soho. Open seven days a week.</p><Link href="/sushi-soho/contact" className="btn-accent">Reserve a Table</Link></div></section>
    </>
  );
}
