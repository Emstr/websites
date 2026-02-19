import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Richard Lewey BSc (Hons) Ost has been practising osteopathy in Lewisham since 1999. GOsC registered since 2001.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About the Practice</h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Lewisham Osteopathic Practice has been treating patients in South London since 1999.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Richard Lewey BSc (Hons) Ost</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Richard has been practising osteopathy in Lewisham since 1999 — over 25 years of clinical experience treating patients with a wide range of musculoskeletal conditions. He graduated with a BSc (Hons) in Osteopathy and has been registered with the General Osteopathic Council (GOsC) since 2001.
                  </p>
                  <p>
                    His approach is thorough and patient-centred. A first appointment begins with a detailed case history — understanding not just the pain or injury itself, but the lifestyle, work, and movement patterns that may be contributing to it. Physical examination follows, before hands-on treatment begins. Richard takes care to explain what he&apos;s doing and why at every stage.
                  </p>
                  <p>
                    Richard practises at Ladywell Works alongside fellow osteopath Elliot Kennard, offering patients a wider range of appointment times across the week.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What is osteopathy?</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Osteopathy is a system of diagnosis and treatment that focuses on the musculoskeletal system — the bones, muscles, ligaments, and connective tissues of the body. It is based on the principle that the structure and function of the body are closely linked, and that problems in one area can cause symptoms in another.
                  </p>
                  <p>
                    Osteopaths use a range of hands-on techniques including soft tissue massage, joint mobilisation and manipulation, and stretching. Treatment is supported by advice on posture, exercise, and lifestyle where appropriate.
                  </p>
                  <p>
                    Osteopathy is a regulated healthcare profession in the UK. All practising osteopaths must be registered with the General Osteopathic Council (GOsC) and meet ongoing standards of proficiency and professional development.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Qualifications & Registration</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    BSc (Hons) Osteopathy
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    GOsC Registered since 2001
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Member of the Institute of Osteopathy
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    25+ years in practice (est. 1999)
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--primary)] text-white rounded-xl p-6">
                <h3 className="font-semibold mb-2">Book an appointment</h3>
                <p className="text-gray-200 text-sm mb-4">Mon–Fri 9am–7pm · Sat 9am–2pm</p>
                <a href="tel:02088525577" className="block bg-[var(--accent)] hover:opacity-90 text-white px-4 py-2.5 rounded-md text-sm font-medium text-center transition-opacity">
                  020 8852 5577
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
