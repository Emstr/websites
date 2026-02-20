import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Common Gallery Questions",
  description:
    "Frequently asked questions about Mayfair Fine Art — visiting, buying art, consultancy, corporate services, framing, and investment advisory.",
  openGraph: {
    title: "FAQ | Mayfair Fine Art",
    description:
      "Answers to common questions about our Cork Street gallery and services.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Visiting the Gallery",
      questions: [
        {
          question: "Do I need an appointment to visit?",
          answer:
            "No. The gallery is open to the public during our regular hours — Monday to Friday 10am to 6pm, Saturday 11am to 5pm. You are welcome to walk in at any time. If you would like a guided tour of the current exhibition or a private viewing, we recommend booking in advance by phone or email.",
        },
        {
          question: "Is the gallery free to visit?",
          answer:
            "Yes, admission is always free. We believe art should be accessible to everyone. You are welcome to browse, ask questions, and spend as long as you like with the work. There is no obligation to buy.",
        },
        {
          question: "Is the gallery wheelchair accessible?",
          answer:
            "Our ground-floor exhibition space is fully wheelchair accessible with step-free entry from Cork Street. We have a small step at the rear entrance which we can accommodate with a portable ramp. Please let us know in advance if you have any specific access requirements and we will do our best to help.",
        },
        {
          question: "Can I take photographs in the gallery?",
          answer:
            "We welcome photography for personal use and social media. We ask that you do not use flash, as it can damage certain works. Professional or commercial photography requires advance permission — please contact us to discuss.",
        },
      ],
    },
    {
      category: "Buying Art",
      questions: [
        {
          question: "How do I buy a work from the gallery?",
          answer:
            "Simply speak to a member of the gallery team during your visit, or contact us by phone or email. We will provide full details of the work including pricing, provenance, and condition. Payment can be made by bank transfer, credit card, or in instalments for works over a certain value. We handle all paperwork and can arrange delivery and installation.",
        },
        {
          question: "Do you offer interest-free payment plans?",
          answer:
            "Yes, for works above a certain price threshold we offer interest-free instalments spread over three to six months. This allows you to acquire the piece immediately while spreading the cost. Speak to the gallery team for details specific to the work you are interested in.",
        },
        {
          question: "Can I return a work if I change my mind?",
          answer:
            "We offer a fourteen-day exchange policy for works purchased in the gallery. We want you to be confident in your acquisition, which is why we encourage you to see the work in situ before committing. Our consultancy team can arrange to bring works to your home or office for an approval viewing.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes, we work with specialist art shippers who handle international deliveries with full insurance and customs documentation. We have shipped works to collectors across Europe, the Middle East, Asia, and North America. Shipping costs depend on the size and destination — we will provide a full quote before you commit.",
        },
      ],
    },
    {
      category: "Consultancy & Corporate",
      questions: [
        {
          question: "What does art consultancy involve?",
          answer:
            "Our consultancy service begins with a conversation about your needs — the space, your aesthetic preferences, your budget, and what you want the art to achieve. We then present a curated selection of works sourced from our gallery, directly from artists, or from the secondary market. We handle everything from acquisition to framing and installation.",
        },
        {
          question: "Do you work with interior designers and architects?",
          answer:
            "Absolutely. A significant portion of our consultancy work comes through interior design and architecture practices. We understand their processes, timelines, and presentation requirements. We can provide high-resolution images, mock-ups, and material samples to support design proposals.",
        },
        {
          question: "What size of corporate project do you handle?",
          answer:
            "Everything from a single statement piece for a reception area to a multi-floor collection for a hotel or corporate headquarters. Recent projects include a boutique hotel in Soho, a law firm in the City, and a private members club in Marylebone. No project is too small or too large.",
        },
        {
          question: "Do you offer art leasing for businesses?",
          answer:
            "Yes, we offer art leasing and rotation programmes for businesses that want to refresh their spaces regularly. This is popular with creative agencies, restaurants, and serviced offices. Leasing terms are flexible and include installation, insurance guidance, and periodic rotation of works.",
        },
      ],
    },
    {
      category: "Investment & Services",
      questions: [
        {
          question: "Is art a good investment?",
          answer:
            "Art has historically performed well as an alternative asset class, but it is not without risk. The key is informed acquisition — buying quality work by artists with credible trajectories, at fair prices, with proper provenance. We advise clients on building collections that are both aesthetically rewarding and financially sound. We always recommend buying art you love first and foremost.",
        },
        {
          question: "Do you provide valuations?",
          answer:
            "We offer informal valuations for works by artists we represent or have expertise in. For formal valuations — for insurance, probate, or tax purposes — we recommend independent valuation services and can refer you to trusted specialists. We do not charge for informal assessments of works brought to the gallery.",
        },
        {
          question: "What framing services do you offer?",
          answer:
            "We work with London's leading conservation framers to provide museum-quality framing for works on paper, canvas, and photographs. All materials are archival-grade and acid-free. We also offer reframing and conservation services for existing works. Our installation team can hang and light artwork to professional standards in any setting.",
        },
      ],
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((cat) =>
      cat.questions.map((faq) => ({
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
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Everything you might want to know about visiting, buying,
              consultancy, and our gallery services.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            {faqs.map((cat, ci) => (
              <div key={ci} className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-accent"></div>
                  {cat.category}
                </h2>
                <div className="space-y-1">
                  {cat.questions.map((faq, fi) => (
                    <details key={fi} className="group bg-gray-50 rounded-sm overflow-hidden">
                      <summary className="faq-question p-6 list-none cursor-pointer">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
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

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Still Got Questions?</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              Pop into the gallery, give us a ring, or send an email. Our team
              is always happy to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/art-gallery-mayfair/contact" className="btn-accent">Contact Us</Link>
              <a href="tel:02079462200" className="btn-outline">Call 020 7946 2200</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Visit?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            We are open six days a week on Cork Street in the heart of Mayfair.
            Walk in for a browse or book a private viewing — there is always
            something new on the walls.
          </p>
          <Link href="/art-gallery-mayfair/contact" className="btn-accent">Plan Your Visit</Link>
        </div>
      </section>
    </>
  );
}
