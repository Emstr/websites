import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Common Printing & Design Questions",
  description:
    "Frequently asked questions about printing services, turnaround times, file formats, and pricing at Shoreditch Print Studio.",
  openGraph: {
    title: "FAQ | Shoreditch Print Studio",
    description:
      "Answers to common questions about our printing services, design process, turnaround, and pricing.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Ordering & Turnaround",
      questions: [
        {
          question: "How quickly can you turn around a print job?",
          answer:
            "Standard turnaround is 2-3 working days for most products. We also offer same-day turnaround on business cards, flyers, and posters if you submit print-ready files before midday. Large format and screen printing jobs typically take 3-5 working days depending on the complexity. If you have a tight deadline, call us and we will do our best to accommodate you.",
        },
        {
          question: "Is there a minimum order quantity?",
          answer:
            "For digital printing (business cards, flyers, posters) there is no minimum — we are happy to print a single copy. For screen printing, our minimum run is 25 units per design, as the setup process requires creating individual screens. Branded merchandise minimums vary by product but typically start at 25-50 units.",
        },
        {
          question: "Can I collect from your studio?",
          answer:
            "Absolutely. Our studio at 52 Curtain Road is open Monday to Friday 9am-7pm and Saturday 10am-5pm. You are welcome to collect your order in person — we will send you an email or text as soon as it is ready. We also offer delivery across London, usually next working day.",
        },
        {
          question: "Do you deliver outside London?",
          answer:
            "Yes, we ship nationwide via tracked courier. London deliveries are usually next working day. UK-wide deliveries take 1-3 working days depending on location. We will provide a tracking number once your order has been dispatched.",
        },
      ],
    },
    {
      category: "Files & Artwork",
      questions: [
        {
          question: "What file formats do you accept?",
          answer:
            "For print-ready files, we prefer high-resolution PDF (300dpi minimum, CMYK colour mode, with 3mm bleed). We also accept AI, EPS, PSD, and TIFF files. For giclée art prints, we work with TIFF or high-resolution JPEG files in Adobe RGB or sRGB colour space. If you are not sure whether your files are suitable, send them over and we will check them for free.",
        },
        {
          question: "What if I do not have print-ready artwork?",
          answer:
            "No problem at all. Our in-house design team can create artwork from scratch or prepare your existing files for print. Design fees depend on the complexity of the job, and we will always quote design costs separately so there are no surprises. We can work from rough sketches, brand guidelines, or just a verbal brief.",
        },
        {
          question: "Will I see a proof before you print?",
          answer:
            "Yes, always. We send a digital PDF proof for your approval before any job goes to press. For colour-critical work such as giclée prints or brand materials, we can also produce a physical hard proof for an additional charge. We never print without your sign-off.",
        },
        {
          question: "Can you match my brand colours exactly?",
          answer:
            "We print in CMYK as standard, which covers a wide gamut. For precise Pantone matching, our screen printing service uses Pantone-mixed inks. For digital printing, we calibrate our machines regularly and can get very close to Pantone references, though an exact match is only guaranteed with spot colour processes.",
        },
      ],
    },
    {
      category: "Products & Materials",
      questions: [
        {
          question: "What paper stocks do you offer for business cards?",
          answer:
            "We carry a wide range including 350gsm and 400gsm silk, 350gsm uncoated, 540gsm cotton, recycled kraft, and several textured options. We also offer speciality stocks like translucent, metallic, and coloured cores for edge painting. Pop into the studio to see and feel our sample book, or we can post you a swatch pack.",
        },
        {
          question: "Are your inks really eco-friendly?",
          answer:
            "Yes. We use vegetable-based inks for lithographic printing and water-based inks for screen printing wherever possible. Our digital presses use low-VOC inks. We also stock FSC-certified and recycled papers as standard options. We are committed to reducing the environmental impact of print without compromising on quality.",
        },
        {
          question: "What finishing options are available?",
          answer:
            "We offer matt and gloss lamination, spot UV varnish, foil blocking (gold, silver, copper, and custom colours), embossing, debossing, die cutting, edge painting, saddle-stitch and perfect binding, folding, scoring, and perforating. If you have something specific in mind that is not listed, ask us — we likely offer it or can source it.",
        },
        {
          question: "Can you print on materials other than paper?",
          answer:
            "Yes. Our large format department prints on vinyl, fabric, mesh, foam board, Dibond aluminium, acrylic, and corriboard. For screen printing, we print on cotton, polyester, and blended fabrics. We can also print directly onto wood and certain rigid substrates for display purposes.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "How do I get a quote?",
          answer:
            "You can request a quote through our website contact form, by emailing hello@shoreditchprint.co.uk, calling 020 7946 8830, or simply walking into our Curtain Road studio. We aim to return quotes within the hour during business hours. Quotes are always free and come with no obligation.",
        },
        {
          question: "Do you offer bulk discounts?",
          answer:
            "Yes, unit prices decrease as quantities increase across all our products. For regular clients we also offer account pricing with further discounts. If you have an ongoing print requirement, ask us about setting up a trade account.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit and debit cards, bank transfer, and cash in-studio. For new clients we typically request payment upfront. For established account clients we offer 30-day payment terms. Large projects may require a 50% deposit with the balance due on completion.",
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

      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Everything you need to know about ordering print, turnaround
              times, file requirements, and how we work.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                    <details
                      key={faqIndex}
                      className="group bg-gray-50 rounded-sm overflow-hidden"
                    >
                      <summary className="faq-question p-6 list-none cursor-pointer">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
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

      {/* Still Have Questions */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Still Got Questions?
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              Can&apos;t find what you&apos;re looking for? Give us a ring or pop into the
              studio — we&apos;re always happy to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/print-shop-shoreditch/contact" className="btn-accent">
                Contact Us
              </Link>
              <a
                href="tel:02079468830"
                className="btn-outline"
              >
                Call 020 7946 8830
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Print Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Send us your brief and get a free quote within the hour. Same-day
            turnaround available on selected products.
          </p>
          <Link href="/print-shop-shoreditch/contact" className="btn-accent">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
