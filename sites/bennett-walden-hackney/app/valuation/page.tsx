'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ValuationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    postcode: '',
    propertyType: '',
    bedrooms: '',
    valuationType: 'sales',
    availability: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex items-center justify-center bg-slate-50 py-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-xl text-gray-600 mb-6">
                We've received your valuation request. One of our expert valuers will contact you within 24 hours to arrange a convenient time.
              </p>
              <p className="text-gray-600 mb-8">
                In the meantime, feel free to browse our current properties or learn more about our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/sales"
                  className="bg-[#0f766e] hover:bg-[#0d9488] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Properties
                </Link>
                <Link
                  href="/"
                  className="bg-slate-200 hover:bg-slate-300 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f766e] to-[#0d9488] text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Free Property Valuation
            </h1>
            <p className="text-xl md:text-2xl text-teal-50 mb-8">
              Discover your property's true value. Expert valuations backed by 30 years of Hackney market knowledge.
            </p>
            <div className="flex flex-wrap gap-6 text-teal-50">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Completely free, no obligation</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Same-day response</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>30 years local expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Request Your Free Valuation</h2>
                <p className="text-gray-600 mb-8">
                  Fill in the form below and we'll get back to you within 24 hours to arrange a convenient valuation time.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f766e] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f766e] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f766e] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="propertyAddress" className="block text-sm font-semibold text-gray-700 mb-2">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      id="propertyAddress"
                      name="propertyAddress"
                      required
                      value={formData.propertyAddress}
                      onChange={handleChange}
                      placeholder="Street address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f766e] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="postcode" className="block text-sm font-semibold text-gray-700 mb-2">
                        Postcode *
                      </label>
                      <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        required
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder="E8 3NJ"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f766e] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Property Type *
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        required
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f766e] focus:border-transparent"
                      >
                        <option value="">Select type</option>
                        <option value="flat">Flat/Apartment</option>
                        <option value="house">House</option>
                        <option value="maisonette">Maisonette</option>
                        <option value="studio">Studio</option>
                        <option value="bungalow">Bungalow</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="bedrooms" className="block text-sm font-semibold text-gray-700 mb-2">
                        Number of Bedrooms *
                      </label>
                      <select
                        id="bedrooms"
                        name="bedrooms"
                        required
                        value={formData.bedrooms}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f766e] focus:border-transparent"
                      >
                        <option value="">Select bedrooms</option>
                        <option value="studio">Studio</option>
                        <option value="1">1 bedroom</option>
                        <option value="2">2 bedrooms</option>
                        <option value="3">3 bedrooms</option>
                        <option value="4">4 bedrooms</option>
                        <option value="5+">5+ bedrooms</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="valuationType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Valuation Type *
                      </label>
                      <select
                        id="valuationType"
                        name="valuationType"
                        required
                        value={formData.valuationType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f766e] focus:border-transparent"
                      >
                        <option value="sales">Sales Valuation</option>
                        <option value="rental">Rental Valuation</option>
                        <option value="both">Both</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="availability" className="block text-sm font-semibold text-gray-700 mb-2">
                      When would you like the valuation?
                    </label>
                    <input
                      type="text"
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      placeholder="e.g., Weekday mornings, Saturday afternoon"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f766e] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any additional details about your property or valuation requirements..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f766e] focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
                  >
                    Request Free Valuation
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our{' '}
                    <Link href="/privacy" className="text-[#0f766e] hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gradient-to-br from-[#0f766e] to-[#0d9488] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Quick Response</h4>
                      <p className="text-sm text-teal-50">We'll contact you within 24 hours to arrange a convenient time.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Property Visit</h4>
                      <p className="text-sm text-teal-50">An experienced valuer will visit your property at a time that suits you.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Expert Valuation</h4>
                      <p className="text-sm text-teal-50">We'll provide an accurate valuation based on current market conditions.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">No Pressure</h4>
                      <p className="text-sm text-teal-50">No obligation to proceed. We're here to help, not pressure you.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prefer to Call?</h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with one of our valuers:
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:02072577177"
                    className="flex items-center text-[#0f766e] font-semibold hover:text-[#0d9488]"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    020 7257 7177
                  </a>
                  <p className="text-sm text-gray-500">Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm</p>
                </div>
              </div>

              <div className="bg-[#f97316] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    30 years in Hackney
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Deep local knowledge
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Accurate valuations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No obligation service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
