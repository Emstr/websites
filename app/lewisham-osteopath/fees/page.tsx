import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fees',
  description: 'Clear, transparent pricing for osteopathic treatment at Lewisham Osteopathic Practice. £60 per appointment. No hidden costs.',
};

export default function FeesPage() {
  return (
    <>
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fees</h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Straightforward pricing with no hidden costs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">

            <div className="bg-gray-50 rounded-2xl p-8 mb-8 text-center border border-gray-100">
              <div className="text-6xl font-bold text-[var(--primary)] mb-2">£60</div>
              <div className="text-xl text-gray-700 font-medium mb-2">Per appointment</div>
              <p className="text-gray-500">Initial consultations and follow-up appointments are the same price.</p>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-[var(--accent)] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Initial consultation included</h3>
                  <p className="text-gray-600 text-sm mt-1">Your first appointment includes a full case history, physical assessment, and treatment — all for the same £60 fee.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-[var(--accent)] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Payment</h3>
                  <p className="text-gray-600 text-sm mt-1">Cash, cheque, or bank transfer accepted. Payment is taken at the time of your appointment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-[var(--accent)] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Private health insurance</h3>
                  <p className="text-gray-600 text-sm mt-1">Many private health insurance policies cover osteopathy. Please check with your insurer before booking if you intend to claim.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-[var(--accent)] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Cancellations</h3>
                  <p className="text-gray-600 text-sm mt-1">We ask for 24 hours&apos; notice if you need to cancel or rearrange your appointment.</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--primary)] text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Ready to book?</h2>
              <p className="text-gray-200 mb-6">Call us or send an email to arrange your appointment.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:02088525577" className="bg-[var(--accent)] hover:opacity-90 text-white px-6 py-3 rounded-md font-medium transition-opacity">
                  020 8852 5577
                </a>
                <a href="mailto:lewishamosteo@gmail.com" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium transition-colors border border-white/30">
                  Send an email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
