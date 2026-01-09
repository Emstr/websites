'use client';

import { useState } from 'react';

export default function Book() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    treatment: '',
    newPatient: 'yes',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dental-light via-white to-dental-soft py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Book Your Appointment</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Complete the form below or call us directly on{' '}
              <a href="tel:02089854547" className="text-dental-teal font-semibold hover:underline">
                020 8985 4547
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 md:p-12 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-dental-teal focus:ring-0 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-dental-teal focus:ring-0 transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-dental-teal focus:ring-0 transition-colors"
                      placeholder="john.smith@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-dental-teal focus:ring-0 transition-colors"
                      placeholder="020 1234 5678"
                    />
                  </div>
                </div>

                {/* New Patient */}
                <div>
                  <label htmlFor="newPatient" className="block text-sm font-semibold text-gray-900 mb-2">
                    Are you a new patient? *
                  </label>
                  <select
                    id="newPatient"
                    name="newPatient"
                    value={formData.newPatient}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-dental-teal focus:ring-0 transition-colors"
                  >
                    <option value="yes">Yes, I'm a new patient</option>
                    <option value="no">No, I'm an existing patient</option>
                  </select>
                </div>

                {/* Treatment Type */}
                <div>
                  <label htmlFor="treatment" className="block text-sm font-semibold text-gray-900 mb-2">
                    Type of Treatment *
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-dental-teal focus:ring-0 transition-colors"
                  >
                    <option value="">Select a treatment</option>
                    <option value="checkup">Check-up & Examination</option>
                    <option value="cleaning">Scale & Polish (Hygiene)</option>
                    <option value="filling">Filling</option>
                    <option value="crown">Crown or Bridge</option>
                    <option value="root-canal">Root Canal</option>
                    <option value="extraction">Extraction</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="emergency">Emergency Appointment</option>
                    <option value="other">Other (please specify in message)</option>
                  </select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-900 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-dental-teal focus:ring-0 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-semibold text-gray-900 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-dental-teal focus:ring-0 transition-colors"
                    >
                      <option value="">Select a time</option>
                      <option value="9am">9:00 AM</option>
                      <option value="10am">10:00 AM</option>
                      <option value="11am">11:00 AM</option>
                      <option value="12pm">12:00 PM</option>
                      <option value="2pm">2:00 PM</option>
                      <option value="3pm">3:00 PM</option>
                      <option value="4pm">4:00 PM</option>
                      <option value="5pm">5:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-dental-teal focus:ring-0 transition-colors"
                    placeholder="Please let us know if you have any specific concerns or requirements..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-dental-teal to-dental-sky text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all inline-flex items-center justify-center space-x-2"
                  >
                    <span>Request Appointment</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    By submitting this form, you agree to be contacted to confirm your appointment
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-20 bg-dental-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Opening Hours</h2>
              <p className="text-xl text-gray-600">We're here when you need us</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-between p-4 bg-dental-light rounded-lg">
                  <span className="font-semibold text-gray-900">Monday - Friday</span>
                  <span className="text-dental-teal font-semibold">9:00 AM - 6:00 PM*</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-dental-sky/10 rounded-lg border-2 border-dental-sky">
                  <span className="font-semibold text-gray-900">Saturday</span>
                  <span className="text-dental-sky font-bold">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                  <span className="font-semibold text-gray-900">Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
                <div className="flex items-center justify-center p-4 bg-dental-light rounded-lg">
                  <p className="text-sm text-gray-600">* Lunch break: 1:00 PM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-dental-teal to-dental-sky rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Prefer to Book by Phone?</h2>
              <p className="text-xl mb-6 opacity-90">
                Our friendly team is ready to help you schedule your appointment
              </p>
              <a
                href="tel:02089854547"
                className="inline-flex items-center space-x-2 bg-white text-dental-teal px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-2xl">020 8985 4547</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
