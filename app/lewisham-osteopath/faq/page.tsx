import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about osteopathic treatment at Lewisham Osteopathic Practice — what to expect, costs, how many sessions you need, and more.',
};

const faqs = [
  {
    question: 'What happens at my first appointment?',
    answer: 'Your first appointment begins with a detailed case history. Richard will ask about your current symptoms, how they started, your medical history, lifestyle, and work. This is followed by a physical examination — you may be asked to undress to your underwear so Richard can properly assess your posture and movement. Treatment usually begins at the same first appointment.',
  },
  {
    question: 'How many sessions will I need?',
    answer: 'This varies depending on the nature and duration of your problem. Acute injuries that have come on recently often respond quickly — sometimes 2–4 sessions is enough. Chronic conditions that have been present for months or years may require more treatment. Richard will give you his honest assessment after your first appointment.',
  },
  {
    question: 'Will treatment hurt?',
    answer: 'Osteopathic treatment should not be painful, though some techniques can cause mild discomfort in areas that are already inflamed or tender. Richard will always work within your comfort level. Some patients experience mild soreness for 24–48 hours after treatment — this is a normal response and usually settles quickly.',
  },
  {
    question: 'Do I need a GP referral?',
    answer: 'No. You can book directly with us — no GP referral is required. However, if you have a condition that requires investigation (such as X-rays or blood tests), Richard may recommend you see your GP alongside osteopathic treatment.',
  },
  {
    question: 'Is osteopathy covered by health insurance?',
    answer: 'Many private health insurance policies cover osteopathy. Please check with your insurer before booking if you intend to claim. You will usually need to provide receipts, and some insurers require a GP referral.',
  },
  {
    question: 'What should I wear?',
    answer: 'Wear comfortable, loose clothing. Depending on the area being treated, you may be asked to remove some clothing so Richard can properly assess and treat the area. A treatment couch and appropriate draping are provided.',
  },
  {
    question: 'Can you treat children?',
    answer: 'Yes. Osteopathy is safe and effective for patients of all ages, including children and teenagers. A parent or guardian must be present during treatment for patients under 16.',
  },
  {
    question: 'What is the difference between osteopathy and physiotherapy?',
    answer: 'Both professions treat musculoskeletal problems using hands-on techniques, but the approach differs. Osteopathy tends to take a whole-body view, considering how the structure of the entire body may be contributing to localised pain. In practice there is significant overlap and both can be highly effective.',
  },
  {
    question: 'How do I cancel or rearrange an appointment?',
    answer: 'Please give at least 24 hours\' notice if you need to cancel or rearrange. You can call us on 020 8852 5577 or email lewishamosteo@gmail.com.',
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Everything you need to know before your first appointment.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-100 pb-8 last:border-0">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h2>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-[var(--primary)] text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
            <p className="text-gray-200 mb-6">Call or email us — we&apos;re happy to help.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:02088525577" className="bg-[var(--accent)] hover:opacity-90 text-white px-6 py-3 rounded-md font-medium transition-opacity">
                020 8852 5577
              </a>
              <a href="mailto:lewishamosteo@gmail.com" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium transition-colors border border-white/30">
                lewishamosteo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
