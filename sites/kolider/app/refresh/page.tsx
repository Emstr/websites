'use client'

import { useState } from 'react'
import Link from 'next/link'

type FormData = {
  currentWebsite: string
  hasWebsite: boolean
  likes: string[]
  likesOther: string
  dislikes: string[]
  dislikesOther: string
  changes: string[]
  changesOther: string
  businessName: string
  industry: string
  location: string
  contactName: string
  email: string
  phone: string
  preferredContact: string
}

export default function RefreshWebsite() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 6

  const [formData, setFormData] = useState<FormData>({
    currentWebsite: '',
    hasWebsite: true,
    likes: [],
    likesOther: '',
    dislikes: [],
    dislikesOther: '',
    changes: [],
    changesOther: '',
    businessName: '',
    industry: '',
    location: '',
    contactName: '',
    email: '',
    phone: '',
    preferredContact: 'email',
  })

  const handleNext = () => {
    setCurrentStep(currentStep + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCheckboxChange = (field: keyof FormData, value: string) => {
    const currentValues = formData[field] as string[]
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value]
    setFormData({ ...formData, [field]: newValues })
  }

  const handleSubmit = () => {
    // Here you would send the data to your backend
    console.log('Form submitted:', formData)
    setCurrentStep(7) // Success step
  }

  // Success Screen
  if (currentStep === 7) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center space-y-8 bg-white p-12 rounded-2xl shadow-2xl">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-purple-blue bg-clip-text text-transparent">
              Thanks! We've got everything we need.
            </h1>
            <p className="text-xl text-gray-600">
              We'll review your responses and get back to you within 24 hours with a custom proposal
              for your website refresh.
            </p>
            <div className="pt-6">
              <Link href="/" className="btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Bar */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="section-container py-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm font-semibold text-purple-600">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-purple-blue h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Step 1: Current Website */}
            {currentStep === 1 && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    What's your current website?
                  </h2>
                  <p className="text-xl text-gray-600">
                    Let's start by seeing what you're working with
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="website" className="block text-lg font-semibold mb-3">
                      Website URL
                    </label>
                    <input
                      type="url"
                      id="website"
                      value={formData.currentWebsite}
                      onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                      className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">or</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setFormData({ ...formData, hasWebsite: false, currentWebsite: '' })
                      handleNext()
                    }}
                    className="w-full px-6 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-colors"
                  >
                    I don't have a website yet
                  </button>
                </div>

                <div className="flex justify-end pt-6">
                  <button
                    onClick={handleNext}
                    disabled={!formData.currentWebsite && formData.hasWebsite}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: What They Like */}
            {currentStep === 2 && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    What do you LIKE about your current {formData.hasWebsite ? 'website' : 'brand'}?
                  </h2>
                  <p className="text-xl text-gray-600">
                    We want to keep the good stuff! Select all that apply.
                  </p>
                </div>

                <div className="space-y-4">
                  {['Logo', 'Colors', 'Layout', 'Content', 'Images', 'Nothing really'].map((item) => (
                    <label
                      key={item}
                      className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-purple-600 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.likes.includes(item)}
                        onChange={() => handleCheckboxChange('likes', item)}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-600"
                      />
                      <span className="ml-4 text-lg">{item}</span>
                    </label>
                  ))}
                </div>

                <div>
                  <label htmlFor="likes-other" className="block text-lg font-semibold mb-3">
                    Anything else you'd like to mention?
                  </label>
                  <textarea
                    id="likes-other"
                    value={formData.likesOther}
                    onChange={(e) => setFormData({ ...formData, likesOther: e.target.value })}
                    rows={4}
                    className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Tell us more..."
                  />
                </div>

                <div className="flex justify-between pt-6">
                  <button onClick={handleBack} className="btn-secondary">
                    ← Back
                  </button>
                  <button onClick={handleNext} className="btn-primary">
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: What They Don't Like */}
            {currentStep === 3 && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    What DON'T you like about it?
                  </h2>
                  <p className="text-xl text-gray-600">
                    Be honest! This helps us understand what needs to change.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'Looks outdated',
                    'Hard to update',
                    'Not mobile-friendly',
                    'Too slow',
                    'Poor SEO',
                    "Doesn't represent my business well"
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-purple-600 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.dislikes.includes(item)}
                        onChange={() => handleCheckboxChange('dislikes', item)}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-600"
                      />
                      <span className="ml-4 text-lg">{item}</span>
                    </label>
                  ))}
                </div>

                <div>
                  <label htmlFor="dislikes-other" className="block text-lg font-semibold mb-3">
                    Any other pain points?
                  </label>
                  <textarea
                    id="dislikes-other"
                    value={formData.dislikesOther}
                    onChange={(e) => setFormData({ ...formData, dislikesOther: e.target.value })}
                    rows={4}
                    className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Tell us what's frustrating you..."
                  />
                </div>

                <div className="flex justify-between pt-6">
                  <button onClick={handleBack} className="btn-secondary">
                    ← Back
                  </button>
                  <button onClick={handleNext} className="btn-primary">
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: What They Want to Change */}
            {currentStep === 4 && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    What would you like to change or add?
                  </h2>
                  <p className="text-xl text-gray-600">
                    Dream big! What's your ideal website like?
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'Modern design',
                    'Better mobile experience',
                    'Online booking system',
                    'Contact forms',
                    'Better photos',
                    'SEO improvement',
                    'Faster loading'
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-purple-600 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.changes.includes(item)}
                        onChange={() => handleCheckboxChange('changes', item)}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-600"
                      />
                      <span className="ml-4 text-lg">{item}</span>
                    </label>
                  ))}
                </div>

                <div>
                  <label htmlFor="changes-other" className="block text-lg font-semibold mb-3">
                    Any specific features or wishes?
                  </label>
                  <textarea
                    id="changes-other"
                    value={formData.changesOther}
                    onChange={(e) => setFormData({ ...formData, changesOther: e.target.value })}
                    rows={4}
                    className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Describe your dream website..."
                  />
                </div>

                <div className="flex justify-between pt-6">
                  <button onClick={handleBack} className="btn-secondary">
                    ← Back
                  </button>
                  <button onClick={handleNext} className="btn-primary">
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Business Info */}
            {currentStep === 5 && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Tell us about your business
                  </h2>
                  <p className="text-xl text-gray-600">
                    This helps us create something perfect for your industry
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="business-name" className="block text-lg font-semibold mb-3">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="business-name"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="ABC Services Ltd"
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-lg font-semibold mb-3">
                      Industry / Business Type *
                    </label>
                    <input
                      type="text"
                      id="industry"
                      required
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="e.g., Dental Practice, Solicitor, Garage"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-lg font-semibold mb-3">
                      Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="e.g., London, Manchester"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <button onClick={handleBack} className="btn-secondary">
                    ← Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!formData.businessName || !formData.industry || !formData.location}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 6: Contact Details */}
            {currentStep === 6 && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    How can we reach you?
                  </h2>
                  <p className="text-xl text-gray-600">
                    We'll use this to send you a custom proposal
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-lg font-semibold mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-lg font-semibold mb-3">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="020 1234 5678"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold mb-3">
                      Preferred Contact Method
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-purple-600 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="contact-method"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                          className="w-5 h-5 text-purple-600 focus:ring-purple-600"
                        />
                        <span className="ml-4 text-lg">Email</span>
                      </label>
                      <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-purple-600 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="contact-method"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                          className="w-5 h-5 text-purple-600 focus:ring-purple-600"
                        />
                        <span className="ml-4 text-lg">Phone</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <button onClick={handleBack} className="btn-secondary">
                    ← Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!formData.contactName || !formData.email}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
