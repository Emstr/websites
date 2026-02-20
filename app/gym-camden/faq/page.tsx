import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions",
  description:
    "Common questions about memberships, classes, personal training, equipment and visiting Camden Strength & Fitness in Camden, London.",
  openGraph: {
    title: "FAQ | Camden Strength & Fitness",
    description:
      "FAQs about memberships, classes, personal training and more at Camden Strength & Fitness.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Memberships & Pricing",
      questions: [
        {
          question: "How much does membership cost?",
          answer:
            "Our standard gym membership starts at £49 per month, which gives you unlimited open gym access 7 days a week. Class memberships (unlimited classes plus open gym) are £69 per month. We also offer off-peak memberships from £35 per month for those who train between 10am and 4pm on weekdays. All memberships are rolling monthly with no minimum contract — you can cancel anytime with 30 days notice.",
        },
        {
          question: "Is there a joining fee?",
          answer:
            "No. We do not charge joining fees, admin fees or any other hidden charges. The monthly price is the total price. We believe in keeping things straightforward and transparent.",
        },
        {
          question: "Can I try before I commit?",
          answer:
            "Absolutely. We offer a free trial session to everyone, no strings attached. You can try an open gym session or join one of our group classes. We will show you round, explain the equipment and make sure you feel comfortable. There is zero pressure to sign up on the day.",
        },
        {
          question: "Do you offer student or concession rates?",
          answer:
            "Yes, we offer a 15% discount for full-time students, NHS workers and emergency services personnel with valid ID. This applies to all membership tiers. Just bring your ID when you sign up.",
        },
      ],
    },
    {
      category: "Classes & Training",
      questions: [
        {
          question: "Do I need to be fit to start?",
          answer:
            "Not at all. Every class we run is scalable — that means the coach will adjust the weights, movements and intensity to match your current fitness level. We have members who started having never set foot in a gym and members who compete at national level, and they train side by side. The only thing we ask is that you give your best effort.",
        },
        {
          question: "How do I book classes?",
          answer:
            "All classes are booked through our app, which you will get access to when you sign up. You can book up to 7 days in advance and cancel up to 2 hours before the class starts. We cap class sizes at 16 to ensure every member gets quality coaching.",
        },
        {
          question: "What should I bring to my first session?",
          answer:
            "Wear comfortable training clothes and clean indoor trainers. Bring a water bottle and a towel. If you are trying a boxing class, we have gloves and wraps you can borrow for your first session. We have showers, changing rooms and lockers available.",
        },
        {
          question: "How much does personal training cost?",
          answer:
            "Personal training sessions are priced at £55 for a single session, £200 for a block of 4 (£50 each) or £360 for a block of 8 (£45 each). All PT packages include a bespoke training programme, nutritional guidance and unlimited messaging with your coach between sessions.",
        },
      ],
    },
    {
      category: "Facilities & Equipment",
      questions: [
        {
          question: "What equipment do you have?",
          answer:
            "We are a fully equipped strength and conditioning facility. We have 6 squat racks, 3 deadlift platforms, 2 Olympic lifting platforms with Eleiko competition equipment, a full dumbbell range up to 60kg, competition benches, assault bikes, Concept2 rowers, ski ergs, heavy bags, kettlebells, resistance bands, sleds and a full range of specialist accessories. We invest heavily in our equipment because we know it matters.",
        },
        {
          question: "Do you have showers and changing rooms?",
          answer:
            "Yes. We have separate male and female changing rooms with hot showers, lockers (bring your own padlock or purchase one at reception) and hairdryers. We also have a small reception area where you can grab a protein shake or coffee before or after your session.",
        },
        {
          question: "Is there parking available?",
          answer:
            "There is no on-site parking, but there is metered parking on Chalk Farm Road and surrounding streets. The gym is best accessed by public transport — Chalk Farm tube is a 3-minute walk and Camden Town is 5 minutes away. We also have secure bike storage.",
        },
      ],
    },
    {
      category: "Olympic Lifting & Specialist Training",
      questions: [
        {
          question: "I have never done Olympic lifting — can I still join?",
          answer:
            "Absolutely. Our Olympic lifting programme has a dedicated beginners track where we teach you the movements from scratch. You will start with a PVC pipe or empty barbell and progress at your own pace. Our coaches are British Weightlifting qualified and have experience taking complete beginners to competition level.",
        },
        {
          question: "Can I train for competitions here?",
          answer:
            "Yes. Several of our members compete in powerlifting, Olympic weightlifting and boxing at regional and national level. Our coaches provide competition-specific programming, peaking protocols and support on competition day. We also host in-house lifting meets throughout the year.",
        },
        {
          question: "Do you offer programme writing without PT sessions?",
          answer:
            "Yes. We offer online programming at £30 per month, which includes a fully customised training programme delivered through our app, updated every 4 weeks based on your progress. You will also get a monthly video check-in with your coach. This is a great option if you are an experienced lifter who knows how to execute the movements but wants expert programming.",
        },
      ],
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((c) =>
      c.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: { "@type": "Answer", text: q.answer },
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
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Everything you need to know about training at Camden Strength &
              Fitness — memberships, classes, equipment and more.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, ci) => (
              <div key={ci} className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-accent"></div>
                  {category.category}
                </h2>
                <div className="space-y-1">
                  {category.questions.map((faq, fi) => (
                    <details
                      key={fi}
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
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
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
            <h2 className="text-3xl font-bold text-primary mb-4">
              Still Have Questions?
            </h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              We are always happy to chat. Give us a call, drop us an email or
              just pop in to the gym.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/gym-camden/contact" className="btn-accent">
                Contact Us
              </Link>
              <a href="tel:02079463350" className="btn-outline">
                Call 020 7946 3350
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Train?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your free trial session and experience Camden Strength for
            yourself. No contracts, no pressure — just a proper workout.
          </p>
          <Link href="/gym-camden/contact" className="btn-accent">
            Book Free Trial
          </Link>
        </div>
      </section>
    </>
  );
}
