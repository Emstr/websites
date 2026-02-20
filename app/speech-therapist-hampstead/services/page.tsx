import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Services | Speech & Language Therapy for Children & Adults", description: "Comprehensive speech and language therapy services including children's therapy, adult therapy, stammering support, voice therapy, swallowing assessment and school-based therapy.", openGraph: { title: "Our Services | Hampstead Speech Therapy", description: "Expert speech and language therapy services for children and adults from our Hampstead clinic." } };

export default function ServicesPage() {
  const services = [
    { title: "Children's Speech Therapy", desc: "We work with children from infancy through to adolescence, addressing a wide range of communication difficulties. Our paediatric therapists are experienced in speech sound disorders, language delay, developmental language disorder, autism spectrum conditions, selective mutism and childhood apraxia of speech. We use play-based approaches to keep therapy engaging and effective, and always involve parents and carers so that strategies can be practised at home.", features: ["Speech sound and phonology assessment", "Language delay and disorder therapy", "Social communication and autism support", "Selective mutism intervention", "Parent coaching and home programmes", "Liaison with nurseries and schools"] },
    { title: "Adult Speech Therapy", desc: "Communication difficulties can develop at any stage of life. We support adults recovering from stroke and brain injury, those living with progressive neurological conditions such as Parkinson's disease and motor neurone disease, and people experiencing communication changes associated with mental health conditions. Our goal is always to maximise your communication ability and confidence in everyday life.", features: ["Stroke and brain injury rehabilitation", "Parkinson's disease communication support", "Motor neurone disease management", "Aphasia therapy and support", "Cognitive communication therapy", "Communication partner training"] },
    { title: "Stammering Support", desc: "We provide specialist stammering therapy for children and adults using evidence-based approaches. For young children, we use the Lidcombe Program and Palin Parent-Child Interaction therapy. For school-age children, adolescents and adults, we draw on cognitive behavioural approaches, acceptance and commitment therapy, and fluency shaping techniques. We focus not just on fluency but on building confidence and reducing the impact of stammering on daily life.", features: ["Lidcombe Program for young children", "Palin PCI for early stammering", "Cognitive behavioural approaches for adults", "Acceptance and commitment therapy", "Fluency shaping techniques", "Confidence and self-advocacy coaching"] },
    { title: "Voice Therapy", desc: "Our voice therapists work with people experiencing hoarseness, vocal fatigue, loss of vocal range, vocal nodules, muscle tension dysphonia and functional voice disorders. We also support professional voice users including teachers, performers, lawyers and clergy who rely on their voice for their livelihood. Therapy may include vocal hygiene education, resonant voice therapy, manual techniques and breathing retraining.", features: ["Vocal nodule and polyp rehabilitation", "Muscle tension dysphonia treatment", "Professional voice user coaching", "Vocal hygiene and care education", "Breathing and relaxation techniques", "Post-surgical voice rehabilitation"] },
    { title: "Swallowing Assessment", desc: "Swallowing difficulties, known as dysphagia, can occur following stroke, head and neck surgery, progressive neurological conditions or simply as part of the ageing process. We provide comprehensive clinical assessment of swallowing safety and function, dietary texture recommendations, therapeutic exercises and compensatory strategies. We work closely with GPs, ENT consultants and dietitians to provide joined-up care.", features: ["Clinical swallowing assessment", "Dietary texture recommendations", "Swallowing exercises and strategies", "Liaison with medical professionals", "Mealtime management advice", "Carer training and education"] },
    { title: "School-Based Therapy", desc: "We visit schools across North London to deliver therapy within the school environment. This means your child does not miss additional school time travelling to appointments, and we can work collaboratively with class teachers and SENCOs to ensure strategies are embedded in the classroom. We provide individual and group therapy, staff training and detailed written reports for annual reviews and Education, Health and Care Plan assessments.", features: ["Therapy delivered in school", "Individual and group sessions", "Staff training and INSET days", "EHCP assessment reports", "Collaborative working with teachers", "Regular progress reporting"] },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Speech &amp; Language Therapy Services</h1><p className="text-xl text-gray-200 leading-relaxed">Comprehensive, evidence-based therapy for children and adults. Every programme is tailored to your individual needs and goals.</p></div></div></section>

      <section className="section-padding bg-white">
        <div className="container-width">
          {services.map((s, i) => (
            <div key={s.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i > 0 ? "mt-20 pt-20 border-t border-gray-100" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">{s.title}</h2>
                <div className="gold-line mb-6"></div>
                <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                <Link href="/speech-therapist-hampstead/contact" className="btn-accent">Book Consultation</Link>
              </div>
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="bg-gray-50 p-8 rounded-sm">
                  <h3 className="font-bold text-primary mb-4">What&apos;s Included</h3>
                  <ul className="space-y-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Process</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">How Therapy Works</h2><div className="gold-line-center mb-6"></div></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Initial Enquiry", desc: "Contact us by phone or email. We will ask some initial questions and arrange a convenient appointment time." },
              { step: "02", title: "Assessment", desc: "A thorough assessment using standardised tools and clinical observation. We take time to understand the full picture." },
              { step: "03", title: "Therapy Plan", desc: "We create a personalised therapy plan with clear goals, tailored strategies and a realistic timeline for progress." },
              { step: "04", title: "Ongoing Therapy", desc: "Regular sessions with your therapist, progress reviews and home practice activities to support progress between appointments." },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{p.step}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{p.title}</h3>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Concerned About Communication?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">You do not need a GP referral to see us. Get in touch today and we will arrange an appointment at a time that suits you.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/speech-therapist-hampstead/contact" className="btn-accent">Book Consultation</Link><a href="tel:02079464450" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 4450</a></div></div></section>
    </>
  );
}
