'use client';

import { useState } from 'react';
import Link from 'next/link';

type ServiceType = 'business' | 'individual' | null;
type LocationType = 'office' | 'visit' | null;
type UrgencyType = 'standard' | 'urgent' | 'same-day' | null;

interface QuoteData {
  serviceType: ServiceType;
  documentCount: number;
  needsApostille: boolean;
  needsEmbassyLegalisation: boolean;
  location: LocationType;
  urgency: UrgencyType;
  email: string;
  name: string;
  phone: string;
}

const initialData: QuoteData = {
  serviceType: null,
  documentCount: 1,
  needsApostille: false,
  needsEmbassyLegalisation: false,
  location: null,
  urgency: null,
  email: '',
  name: '',
  phone: '',
};

// Pricing configuration
const PRICING = {
  baseNotarisation: 80, // Up to 20 mins
  additionalDocument: 35, // Per additional document
  apostillePerDoc: 45, // Apostille handling per document
  embassyLegalisation: 75, // Embassy legalisation handling per document
  visitFee: 60, // Travel fee for home/office visit
  urgentSurcharge: 40, // Urgent (next day) surcharge
  sameDaySurcharge: 80, // Same day surcharge
};

function calculateQuote(data: QuoteData): number {
  let total = PRICING.baseNotarisation;

  // Additional documents
  if (data.documentCount > 1) {
    total += (data.documentCount - 1) * PRICING.additionalDocument;
  }

  // Apostille
  if (data.needsApostille) {
    total += data.documentCount * PRICING.apostillePerDoc;
  }

  // Embassy legalisation
  if (data.needsEmbassyLegalisation) {
    total += data.documentCount * PRICING.embassyLegalisation;
  }

  // Visit fee
  if (data.location === 'visit') {
    total += PRICING.visitFee;
  }

  // Urgency
  if (data.urgency === 'urgent') {
    total += PRICING.urgentSurcharge;
  } else if (data.urgency === 'same-day') {
    total += PRICING.sameDaySurcharge;
  }

  return total;
}

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuoteData>(initialData);
  const [showQuote, setShowQuote] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;

  const updateData = (updates: Partial<QuoteData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setShowQuote(true);
  };

  const canProceed = (): boolean => {
    switch (step) {
      case 1:
        return data.serviceType !== null;
      case 2:
        return data.documentCount >= 1;
      case 3:
        return data.location !== null;
      case 4:
        return data.urgency !== null;
      case 5:
        return data.email.includes('@') && data.name.length > 0;
      default:
        return false;
    }
  };

  const quote = calculateQuote(data);

  if (showQuote) {
    return (
      <>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight">Your Instant Quote</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Quote Result */}
              <div className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] p-8 text-white text-center">
                <p className="text-gray-300 mb-2">Estimated Quote</p>
                <p className="text-5xl font-bold mb-2">£{quote}</p>
                <p className="text-sm text-gray-300">(No VAT)</p>
              </div>

              {/* Quote Breakdown */}
              <div className="p-8">
                <h3 className="font-semibold text-[#0a1628] mb-4">Quote Breakdown</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base notarisation fee</span>
                    <span className="font-medium">£{PRICING.baseNotarisation}</span>
                  </div>
                  {data.documentCount > 1 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Additional documents ({data.documentCount - 1} × £{PRICING.additionalDocument})
                      </span>
                      <span className="font-medium">
                        £{(data.documentCount - 1) * PRICING.additionalDocument}
                      </span>
                    </div>
                  )}
                  {data.needsApostille && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Apostille service ({data.documentCount} × £{PRICING.apostillePerDoc})
                      </span>
                      <span className="font-medium">
                        £{data.documentCount * PRICING.apostillePerDoc}
                      </span>
                    </div>
                  )}
                  {data.needsEmbassyLegalisation && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Embassy legalisation ({data.documentCount} × £{PRICING.embassyLegalisation})
                      </span>
                      <span className="font-medium">
                        £{data.documentCount * PRICING.embassyLegalisation}
                      </span>
                    </div>
                  )}
                  {data.location === 'visit' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Home/office visit</span>
                      <span className="font-medium">£{PRICING.visitFee}</span>
                    </div>
                  )}
                  {data.urgency === 'urgent' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Urgent service (next day)</span>
                      <span className="font-medium">£{PRICING.urgentSurcharge}</span>
                    </div>
                  )}
                  {data.urgency === 'same-day' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Same-day service</span>
                      <span className="font-medium">£{PRICING.sameDaySurcharge}</span>
                    </div>
                  )}
                  <div className="border-t pt-3 mt-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-[#d69e2e]">£{quote}</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-800">
                    <strong>Note:</strong> This is an estimate based on the information provided.
                    Final fees may vary depending on document complexity. Government fees for
                    apostille/legalisation are additional.
                  </p>
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-green-800 font-medium">Quote sent to {data.email}</p>
                      <p className="text-sm text-green-700 mt-1">
                        We&apos;ll be in touch shortly to confirm your requirements and arrange an appointment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="flex-1 bg-[#d69e2e] hover:bg-[#b7791f] text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href="tel:02076298800"
                    className="flex-1 border-2 border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1a365d] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Get an Instant Quote</h1>
          <p className="text-xl text-gray-300">
            Answer a few quick questions to receive an estimated quote for your notarial services.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round((step / totalSteps) * 100)}% complete</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#d69e2e] transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Step 1: Service Type */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-[#0a1628] mb-2">
                  What type of service do you need?
                </h2>
                <p className="text-gray-600 mb-6">
                  Select whether you need notarial services for business or personal purposes.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => updateData({ serviceType: 'business' })}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      data.serviceType === 'business'
                        ? 'border-[#d69e2e] bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-[#0a1628]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                      </svg>
                      <span className="font-semibold text-[#0a1628]">Business</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Corporate documents, contracts, powers of attorney, etc.
                    </p>
                  </button>
                  <button
                    onClick={() => updateData({ serviceType: 'individual' })}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      data.serviceType === 'individual'
                        ? 'border-[#d69e2e] bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-[#0a1628]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      <span className="font-semibold text-[#0a1628]">Individual</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Personal documents, passports, declarations, etc.
                    </p>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Document Details */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-[#0a1628] mb-2">
                  Tell us about your documents
                </h2>
                <p className="text-gray-600 mb-6">
                  How many documents need notarising, and do you need additional services?
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of documents
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => updateData({ documentCount: Math.max(1, data.documentCount - 1) })}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#d69e2e] transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                      </button>
                      <span className="text-3xl font-bold text-[#0a1628] w-12 text-center">
                        {data.documentCount}
                      </span>
                      <button
                        onClick={() => updateData({ documentCount: Math.min(20, data.documentCount + 1) })}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#d69e2e] transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Additional services required
                    </label>
                    <label className="flex items-start gap-3 p-4 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-gray-300 transition-colors">
                      <input
                        type="checkbox"
                        checked={data.needsApostille}
                        onChange={(e) => updateData({ needsApostille: e.target.checked })}
                        className="mt-1 w-5 h-5 text-[#d69e2e] rounded border-gray-300 focus:ring-[#d69e2e]"
                      />
                      <div>
                        <span className="font-medium text-[#0a1628]">Apostille</span>
                        <p className="text-sm text-gray-600">
                          For documents to be used in Hague Convention countries
                        </p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 p-4 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-gray-300 transition-colors">
                      <input
                        type="checkbox"
                        checked={data.needsEmbassyLegalisation}
                        onChange={(e) => updateData({ needsEmbassyLegalisation: e.target.checked })}
                        className="mt-1 w-5 h-5 text-[#d69e2e] rounded border-gray-300 focus:ring-[#d69e2e]"
                      />
                      <div>
                        <span className="font-medium text-[#0a1628]">Embassy Legalisation</span>
                        <p className="text-sm text-gray-600">
                          For documents to be used in non-Hague Convention countries
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Location */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-[#0a1628] mb-2">
                  Where would you like to meet?
                </h2>
                <p className="text-gray-600 mb-6">
                  You can visit our office in Westminster, or we can come to you.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => updateData({ location: 'office' })}
                    className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                      data.location === 'office'
                        ? 'border-[#d69e2e] bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-[#0a1628]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <span className="font-semibold text-[#0a1628]">Visit our office</span>
                      <span className="ml-auto text-sm text-green-600 font-medium">No extra charge</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      45 Piccadilly, Westminster, London W1J 0DS
                    </p>
                  </button>
                  <button
                    onClick={() => updateData({ location: 'visit' })}
                    className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                      data.location === 'visit'
                        ? 'border-[#d69e2e] bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-[#0a1628]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                      <span className="font-semibold text-[#0a1628]">Home or office visit</span>
                      <span className="ml-auto text-sm text-[#d69e2e] font-medium">+£{PRICING.visitFee}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      We&apos;ll come to your home or business in London
                    </p>
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Urgency */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-[#0a1628] mb-2">
                  How soon do you need this?
                </h2>
                <p className="text-gray-600 mb-6">
                  Select your preferred timeframe. Urgent services are subject to availability.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => updateData({ urgency: 'standard' })}
                    className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                      data.urgency === 'standard'
                        ? 'border-[#d69e2e] bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-[#0a1628]">Standard</span>
                      <span className="ml-auto text-sm text-green-600 font-medium">No extra charge</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Appointment within the next few days
                    </p>
                  </button>
                  <button
                    onClick={() => updateData({ urgency: 'urgent' })}
                    className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                      data.urgency === 'urgent'
                        ? 'border-[#d69e2e] bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-[#0a1628]">Urgent (Next Day)</span>
                      <span className="ml-auto text-sm text-[#d69e2e] font-medium">+£{PRICING.urgentSurcharge}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Appointment tomorrow (subject to availability)
                    </p>
                  </button>
                  <button
                    onClick={() => updateData({ urgency: 'same-day' })}
                    className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                      data.urgency === 'same-day'
                        ? 'border-[#d69e2e] bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-[#0a1628]">Same Day</span>
                      <span className="ml-auto text-sm text-[#d69e2e] font-medium">+£{PRICING.sameDaySurcharge}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Appointment today (subject to availability)
                    </p>
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Contact Details */}
            {step === 5 && (
              <div>
                <h2 className="text-2xl font-bold text-[#0a1628] mb-2">
                  Where should we send your quote?
                </h2>
                <p className="text-gray-600 mb-6">
                  Enter your details to receive your personalised quote.
                </p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={data.name}
                      onChange={(e) => updateData({ name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d69e2e] focus:border-transparent outline-none transition-shadow"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={data.email}
                      onChange={(e) => updateData({ email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d69e2e] focus:border-transparent outline-none transition-shadow"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={data.phone}
                      onChange={(e) => updateData({ phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d69e2e] focus:border-transparent outline-none transition-shadow"
                      placeholder="07123 456789"
                    />
                  </div>
                </div>

                {/* Running Total Preview */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Estimated total:</span>
                    <span className="text-2xl font-bold text-[#d69e2e]">£{quote}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-8 flex justify-between">
              {step > 1 ? (
                <button
                  onClick={prevStep}
                  className="px-6 py-3 text-gray-600 hover:text-[#0a1628] font-medium transition-colors"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}
              {step < totalSteps ? (
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                    canProceed()
                      ? 'bg-[#d69e2e] hover:bg-[#b7791f] text-white'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continue →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                    canProceed() && !isSubmitting
                      ? 'bg-[#d69e2e] hover:bg-[#b7791f] text-white'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? 'Calculating...' : 'Get My Quote'}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
