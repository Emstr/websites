import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conditions Treated',
  description: 'Osteopathic treatment for back pain, sciatica, neck pain, sports injuries, headaches, and more at Lewisham Osteopathic Practice.',
};

const conditions = [
  {
    id: 'back-pain',
    title: 'Back Pain & Sciatica',
    description: 'Lower back pain is one of the most common reasons people seek osteopathic treatment. Whether it\'s a sudden acute episode or chronic ongoing pain, osteopathy can help by addressing the mechanical issues contributing to your symptoms.',
    detail: 'Sciatica — pain, tingling, or numbness that radiates from the lower back down the leg — is often caused by irritation or compression of the sciatic nerve. Osteopathic treatment aims to reduce this pressure through gentle manipulation, soft tissue work, and mobilisation techniques.',
  },
  {
    id: 'neck-pain',
    title: 'Neck & Shoulder Pain',
    description: 'Neck stiffness and shoulder pain are increasingly common, particularly among people who spend long hours at a desk or using screens. Tension builds up in the muscles and joints of the cervical spine, leading to restricted movement and pain.',
    detail: 'Osteopathic treatment for neck and shoulder pain typically involves soft tissue massage, gentle articulation of the joints, and advice on posture and ergonomics to prevent recurrence.',
  },
  {
    id: 'sports',
    title: 'Sports Injuries',
    description: 'Whether you\'re a competitive athlete or a weekend runner, sports injuries can be frustrating and debilitating. Richard works with patients at all levels to diagnose and treat injuries effectively.',
    detail: 'Common presentations include hamstring strains, ankle sprains, rotator cuff problems, runner\'s knee, and repetitive strain injuries. Treatment focuses on restoring full function and reducing the risk of re-injury.',
  },
  {
    id: 'headaches',
    title: 'Headaches & Migraines',
    description: 'Many headaches — including tension headaches and some migraines — have a musculoskeletal component. Tension in the neck, upper back, and shoulders can refer pain to the head.',
    detail: 'Osteopathic treatment can help by releasing muscular tension, improving joint mobility in the cervical spine, and addressing postural issues that contribute to recurring headaches.',
  },
  {
    id: 'joints',
    title: 'Hip & Knee Pain',
    description: 'Joint pain in the hips and knees can significantly affect mobility and quality of life. Osteopathy can be particularly effective for conditions like osteoarthritis, bursitis, and pain caused by gait or postural imbalances.',
    detail: 'Treatment focuses on improving joint mobility, reducing inflammation, and strengthening the surrounding musculature to better support the joint.',
  },
  {
    id: 'foot',
    title: 'Foot & Ankle Problems',
    description: 'Foot pain — including plantar fasciitis, heel pain, and ankle injuries — is often linked to issues further up the kinetic chain in the knees, hips, or lower back.',
    detail: 'Richard takes a whole-body view of foot and ankle problems, addressing contributing factors in addition to the local injury site. This approach leads to more lasting results than treating the foot in isolation.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Conditions Treated</h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Osteopathy takes a whole-body approach to musculoskeletal pain and injury. Here are some of the conditions we commonly treat.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {conditions.map((condition, index) => (
              <div key={condition.id} id={condition.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index !== 0 ? 'pt-16 border-t border-gray-100' : ''}`}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{condition.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{condition.description}</p>
                  <p className="text-gray-600 leading-relaxed">{condition.detail}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="font-semibold text-gray-900 mb-4">What to expect</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      A full case history and physical assessment at your first appointment
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      A clear explanation of what&apos;s happening and why
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Hands-on treatment at the same appointment
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Advice on exercises and lifestyle adjustments to support recovery
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <a href="tel:02088525577" className="inline-block bg-[var(--primary)] hover:bg-[var(--secondary)] text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors">
                      Book: 020 8852 5577
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
