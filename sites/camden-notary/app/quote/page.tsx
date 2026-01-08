'use client';

import { useState } from 'react';
import Link from 'next/link';

const PRICING = {
  baseNotarisation: 85,
  additionalDocument: 40,
  apostillePerDoc: 50,
  embassyLegalisation: 85,
  visitFee: 65,
  urgentSurcharge: 45,
  sameDaySurcharge: 90,
};

type ServiceType = 'individual' | 'business' | '';
type LocationType = 'office' | 'visit' | '';
type UrgencyType = 'standard' | 'urgent' | 'sameday' | '';

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState<ServiceType>('');
  const [documentCount, setDocumentCount] = useState(1);
  const [needsApostille, setNeedsApostille] = useState(false);
  const [needsEmbassy, setNeedsEmbassy] = useState(false);
  const [location, setLocation] = useState<LocationType>('');
  const [urgency, setUrgency] = useState<UrgencyType>('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const calculateQuote = () => {
    let total = PRICING.baseNotarisation;

    // Additional documents
    if (documentCount > 1) {
      total += (documentCount - 1) * PRICING.additionalDocument;
    }

    // Apostille
    if (needsApostille) {
      total += documentCount * PRICING.apostillePerDoc;
    }

    // Embassy legalisation
    if (needsEmbassy) {
      total += documentCount * PRICING.embassyLegalisation;
    }

    // Visit fee
    if (location === 'visit') {
      total += PRICING.visitFee;
    }

    // Urgency
    if (urgency === 'urgent') {
      total += PRICING.urgentSurcharge;
    } else if (urgency === 'sameday') {
      total += PRICING.sameDaySurcharge;
    }

    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log('Quote request:', { name, email, serviceType, documentCount, needsApostille, needsEmbassy, location, urgency, quote: calculateQuote() });
    setSubmitted(true);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">What type of service do you need?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => { setServiceType('individual'); setStep(2); }}
                className={`p-6 border-2 rounded-lg text-left transition-all ${
                  serviceType === 'individual'
                    ? 'border-accent bg-accent/5'
                    : 'border-gray-200 hover:border-accent/50'
                }`}
              >
                <h3 className="text-xl font-semibold text-primary mb-2">Personal / Individual</h3>
                <p className="text-gray-600">Powers of attorney, certified copies, statutory declarations, marriage certificates, etc.</p>
              </button>
              <button
                onClick={() => { setServiceType('business'); setStep(2); }}
                className={`p-6 border-2 rounded-lg text-left transition-all ${
                  serviceType === 'business'
                    ? 'border-accent bg-accent/5'
                    : 'border-gray-200 hover:border-accent/50'
                }`}
              >
                <h3 className="text-xl font-semibold text-primary mb-2">Business / Corporate</h3>
                <p className="text-gray-600">Corporate powers of attorney, company documents, commercial mortgages, banking documentation, etc.</p>
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">How many documents need notarising?</h2>
            <div className="max-w-xs">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of documents
              </label>
              <select
                value={documentCount}
                onChange={(e) => setDocumentCount(Number(e.target.value))}
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-accent focus:ring-accent p-3 border"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>{num} document{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Do you need legalisation?</h3>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={needsApostille}
                  onChange={(e) => { setNeedsApostille(e.target.checked); if (e.target.checked) setNeedsEmbassy(false); }}
                  className="mt-1 h-5 w-5 text-accent focus:ring-accent border-gray-300 rounded"
                />
                <div>
                  <span className="font-medium text-gray-900">Apostille (FCDO)</span>
                  <p className="text-sm text-gray-500">For Hague Convention countries (USA, EU, Australia, etc.)</p>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={needsEmbassy}
                  onChange={(e) => { setNeedsEmbassy(e.target.checked); if (e.target.checked) setNeedsApostille(false); }}
                  className="mt-1 h-5 w-5 text-accent focus:ring-accent border-gray-300 rounded"
                />
                <div>
                  <span className="font-medium text-gray-900">Embassy Legalisation</span>
                  <p className="text-sm text-gray-500">For non-Hague countries (China, UAE, Saudi Arabia, etc.)</p>
                </div>
              </label>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-6 py-3 bg-accent text-white rounded-md hover:bg-amber-600 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">Where would you like to meet?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => { setLocation('office'); setStep(4); }}
                className={`p-6 border-2 rounded-lg text-left transition-all ${
                  location === 'office'
                    ? 'border-accent bg-accent/5'
                    : 'border-gray-200 hover:border-accent/50'
                }`}
              >
                <h3 className="text-xl font-semibold text-primary mb-2">At the Office</h3>
                <p className="text-gray-600">Hamilton House, near Kings Cross / Euston. No additional fee.</p>
              </button>
              <button
                onClick={() => { setLocation('visit'); setStep(4); }}
                className={`p-6 border-2 rounded-lg text-left transition-all ${
                  location === 'visit'
                    ? 'border-accent bg-accent/5'
                    : 'border-gray-200 hover:border-accent/50'
                }`}
              >
                <h3 className="text-xl font-semibold text-primary mb-2">Home / Office Visit</h3>
                <p className="text-gray-600">I can come to you in London. Visit fee applies (+£{PRICING.visitFee}).</p>
              </button>
            </div>
            <button
              onClick={() => setStep(2)}
              className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">How quickly do you need this?</h2>
            <div className="space-y-4">
              <button
                onClick={() => { setUrgency('standard'); setStep(5); }}
                className={`w-full p-6 border-2 rounded-lg text-left transition-all ${
                  urgency === 'standard'
                    ? 'border-accent bg-accent/5'
                    : 'border-gray-200 hover:border-accent/50'
                }`}
              >
                <h3 className="text-xl font-semibold text-primary mb-2">Standard</h3>
                <p className="text-gray-600">Book an appointment within the next few days. No surcharge.</p>
              </button>
              <button
                onClick={() => { setUrgency('urgent'); setStep(5); }}
                className={`w-full p-6 border-2 rounded-lg text-left transition-all ${
                  urgency === 'urgent'
                    ? 'border-accent bg-accent/5'
                    : 'border-gray-200 hover:border-accent/50'
                }`}
              >
                <h3 className="text-xl font-semibold text-primary mb-2">Urgent (Next Day)</h3>
                <p className="text-gray-600">Need it tomorrow. Urgent surcharge applies (+£{PRICING.urgentSurcharge}).</p>
              </button>
              <button
                onClick={() => { setUrgency('sameday'); setStep(5); }}
                className={`w-full p-6 border-2 rounded-lg text-left transition-all ${
                  urgency === 'sameday'
                    ? 'border-accent bg-accent/5'
                    : 'border-gray-200 hover:border-accent/50'
                }`}
              >
                <h3 className="text-xl font-semibold text-primary mb-2">Same Day</h3>
                <p className="text-gray-600">Need it today (subject to availability). Same-day surcharge applies (+£{PRICING.sameDaySurcharge}).</p>
              </button>
            </div>
            <button
              onClick={() => setStep(3)}
              className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">Get Your Quote</h2>
            <p className="text-gray-600">
              Enter your details below to receive your instant quote and information
              about booking an appointment.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-accent focus:ring-accent p-3 border"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-accent focus:ring-accent p-3 border"
                  placeholder="you@example.com"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-accent text-white rounded-md hover:bg-amber-600 transition-colors font-semibold"
                >
                  Get My Quote
                </button>
              </div>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  if (submitted) {
    const quote = calculateQuote();
    return (
      <>
        <section className="bg-primary text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Your Quote</h1>
            <p className="text-xl text-gray-200">
              Thank you, {name}! Here&apos;s your estimated quote.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="bg-accent text-white p-8 text-center">
                <p className="text-sm uppercase tracking-wide mb-2">Estimated Total</p>
                <p className="text-5xl font-bold">£{quote}</p>
                <p className="text-sm mt-2 opacity-80">No VAT charged</p>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-semibold text-primary">Quote Breakdown</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base notarisation fee</span>
                    <span className="font-medium">£{PRICING.baseNotarisation}</span>
                  </div>
                  {documentCount > 1 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Additional documents ({documentCount - 1})</span>
                      <span className="font-medium">£{(documentCount - 1) * PRICING.additionalDocument}</span>
                    </div>
                  )}
                  {needsApostille && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Apostille ({documentCount} doc{documentCount > 1 ? 's' : ''})</span>
                      <span className="font-medium">£{documentCount * PRICING.apostillePerDoc}</span>
                    </div>
                  )}
                  {needsEmbassy && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Embassy legalisation ({documentCount} doc{documentCount > 1 ? 's' : ''})</span>
                      <span className="font-medium">£{documentCount * PRICING.embassyLegalisation}</span>
                    </div>
                  )}
                  {location === 'visit' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Home/office visit</span>
                      <span className="font-medium">£{PRICING.visitFee}</span>
                    </div>
                  )}
                  {urgency === 'urgent' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Urgent surcharge</span>
                      <span className="font-medium">£{PRICING.urgentSurcharge}</span>
                    </div>
                  )}
                  {urgency === 'sameday' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Same-day surcharge</span>
                      <span className="font-medium">£{PRICING.sameDaySurcharge}</span>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4 mt-4">
                  <p className="text-sm text-gray-500">
                    This is an estimate based on the information provided. The final fee may vary
                    depending on the complexity of your documents. I&apos;ll be in touch at {email} to
                    confirm details and arrange your appointment.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center space-y-4">
              <p className="text-gray-600">
                Want to discuss your requirements or book an appointment now?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:07985405640"
                  className="inline-block bg-accent hover:bg-amber-600 text-white px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Call 07985 405640
                </a>
                <a
                  href="https://wa.me/447985405640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  WhatsApp
                </a>
              </div>
              <Link href="/" className="inline-block text-accent hover:underline mt-4">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Get an Instant Quote</h1>
          <p className="text-xl text-gray-200">
            Answer a few quick questions to get an estimated quote for your notary requirements.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    s <= step
                      ? 'bg-accent text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-accent rounded-full transition-all duration-300"
                style={{ width: `${((step - 1) / 4) * 100}%` }}
              />
            </div>
          </div>

          {renderStep()}
        </div>
      </section>
    </>
  );
}
