import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Interior Design Questions Answered",
  description:
    "Frequently asked questions about interior design services, our process, costs and timelines. Islington Interiors, N1.",
  openGraph: {
    title: "FAQ | Islington Interiors",
    description:
      "Answers to common questions about our interior design services, process, fees and working with a professional designer.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "Do I need an interior designer?",
          answer:
            "If you are renovating, redecorating, or simply feel that your space is not working as well as it could, a designer can save you time, money and stress. We bring expertise in spatial planning, colour, materials and project management that helps you avoid costly mistakes and achieve a result you would struggle to reach on your own.",
        },
        {
          question: "What happens at the initial consultation?",
          answer:
            "We meet at your property (or at our studio if you prefer) to discuss your project. We will walk through your space, talk about how you use it, what you like and dislike, any practical requirements, and your budget and timeline. This meeting is free and there is no obligation to proceed.",
        },
        {
          question: "Do you only work in Islington?",
          answer:
            "While our studio is in Islington, we work across London and occasionally beyond. We have completed projects in areas including Hackney, Bloomsbury, Clerkenwell, Hampstead, Notting Hill, Richmond, and the City. If you are outside London, please get in touch and we will let you know if we can help.",
        },
        {
          question: "How far in advance should I book?",
          answer:
            "We recommend getting in touch as early as possible, ideally two to three months before you want to start work. For larger projects or kitchen and bathroom renovations, six months lead time is advisable. That said, we always try to accommodate urgent requests where we can.",
        },
      ],
    },
    {
      category: "Our Process",
      questions: [
        {
          question: "What does your design process look like?",
          answer:
            "We follow a structured four-stage process: consultation (understanding your brief), concept (mood boards, layouts and material palettes), delivery (sourcing, trade coordination and project management), and styling (the finishing touches that bring it all together). You are involved at every stage and nothing proceeds without your approval.",
        },
        {
          question: "Will I see designs before anything is ordered or built?",
          answer:
            "Absolutely. We present detailed concept boards, floor plans and, where appropriate, 3D visualisations for your review and approval. We refine the scheme together until you are completely happy before we place a single order or brief a single tradesperson.",
        },
        {
          question: "Do you manage the builders and tradespeople?",
          answer:
            "Yes, for full design projects we coordinate all trades including builders, plumbers, electricians, painters, joiners and tilers. We have a trusted network of contractors we have worked with for years, and we manage the programme, quality and snagging on your behalf.",
        },
        {
          question: "Can I be involved in the design decisions?",
          answer:
            "Of course. This is your home and your project. Some clients like to be closely involved in every choice, while others prefer to give us a brief and see the finished result. We are happy to work whichever way suits you best.",
        },
      ],
    },
    {
      category: "Fees & Budget",
      questions: [
        {
          question: "How much does interior design cost?",
          answer:
            "Our fees depend on the scope and complexity of the project. Colour consultations start from around five hundred pounds. A full room design typically starts from two thousand pounds. Whole home projects are priced based on the number of rooms and the level of service required. We always provide a detailed quote before any work begins.",
        },
        {
          question: "Is the initial consultation free?",
          answer:
            "Yes, your first consultation is complimentary and without obligation. It gives us both an opportunity to discuss your project and see if we are the right fit for each other.",
        },
        {
          question: "Do you work within a set budget?",
          answer:
            "Yes, we always work to an agreed budget. We will discuss your budget at the outset and design within it. We are experienced at maximising impact within a given spend, and we will always tell you where to invest and where to save.",
        },
        {
          question: "Are there any hidden costs?",
          answer:
            "No. We provide a clear fee proposal upfront that covers our design fees. Furniture, materials and trade costs are quoted separately so you know exactly what everything will cost. There are no surprises at the end of a project.",
        },
      ],
    },
    {
      category: "Practical Questions",
      questions: [
        {
          question: "How long does a typical project take?",
          answer:
            "A colour consultation can be completed in a single visit. A room redesign typically takes four to six weeks from concept to completion. A full home design project usually takes three to six months depending on the scope and any building work involved. We will give you a realistic timeline at the outset.",
        },
        {
          question: "Can I stay in my home during the work?",
          answer:
            "For most projects, yes. We plan the work to minimise disruption and can phase it room by room if needed. For major renovations involving kitchens or bathrooms, there may be short periods where certain rooms are out of use, but we will always plan around your needs.",
        },
        {
          question: "Do you source all the furniture and materials?",
          answer:
            "Yes, we handle all procurement as part of our design service. We source from a wide network of suppliers, many of whom offer trade discounts that we pass on to you. We manage delivery schedules and inspect everything on arrival to ensure quality.",
        },
        {
          question: "What if I already have furniture I want to keep?",
          answer:
            "We are very happy to work with existing pieces. Many clients have furniture, artwork or heirlooms they love, and we design around these to create a cohesive scheme. Sometimes a room just needs new context for existing pieces to shine.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 leading-relaxed">Thinking about hiring an interior designer? Here are answers to the questions we hear most often. If yours is not listed, please do not hesitate to ask.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center gap-3">
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

      {/* Still Have Questions */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Still Have Questions?</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">Every project is unique, so if you have a question we have not covered here, please get in touch. We are always happy to chat.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/interior-designer-islington/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Contact Us</Link>
              <a href="tel:02079466670" className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--primary)] hover:text-white transition-colors">Call 020 7946 6670</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a complimentary consultation at our Islington studio. We would love to hear about your project and explore the possibilities together.</p>
          <Link href="/interior-designer-islington/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors text-lg inline-block">Book Your Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
