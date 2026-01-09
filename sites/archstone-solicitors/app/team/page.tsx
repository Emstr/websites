import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the experienced solicitors at Archstone Solicitors. Our team brings over 20 years of combined legal expertise serving East London.',
};

const teamMembers = [
  {
    name: 'Senior Partner',
    role: 'Managing Director',
    specialties: ['Immigration Law', 'Company & Commercial Law'],
    qualifications: [
      'LLB (Hons) Law',
      'Solicitor of England & Wales',
      'SRA Regulated',
      '20+ years experience',
    ],
    bio: 'With over two decades of legal practice, our senior partner leads the firm with a commitment to excellence and client satisfaction. Specializing in immigration and commercial law, they have successfully represented hundreds of clients in complex legal matters.',
  },
  {
    name: 'Head of Conveyancing',
    role: 'Property Law Specialist',
    specialties: ['Conveyancing', 'Property Law'],
    qualifications: [
      'LLB (Hons) Law',
      'Licensed Conveyancer',
      'SRA Regulated',
      '15+ years experience',
    ],
    bio: 'Leading our conveyancing department, this solicitor brings extensive experience in residential and commercial property transactions. Known for efficient service and clear communication throughout the property buying and selling process.',
  },
  {
    name: 'Family Law Solicitor',
    role: 'Family Law Specialist',
    specialties: ['Family Law', 'Divorce', 'Child Custody'],
    qualifications: [
      'LLB (Hons) Law',
      'Resolution Member',
      'SRA Regulated',
      '12+ years experience',
    ],
    bio: 'Our family law specialist provides compassionate yet robust representation in divorce, child custody, and financial settlement matters. Committed to achieving the best outcomes for families during challenging times.',
  },
  {
    name: 'Litigation Solicitor',
    role: 'Litigation & Dispute Resolution',
    specialties: ['Civil Litigation', 'Personal Injury', 'Dispute Resolution'],
    qualifications: [
      'LLB (Hons) Law',
      'Solicitor of England & Wales',
      'SRA Regulated',
      '10+ years experience',
    ],
    bio: 'Specializing in civil litigation and personal injury claims, this solicitor has a proven track record of successful outcomes in court and through alternative dispute resolution. Known for strategic thinking and tenacious advocacy.',
  },
];

export default function TeamPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Legal Team
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Meet our experienced team of solicitors dedicated to providing the highest quality legal services.
              With combined decades of experience, we bring expertise, professionalism, and commitment to every case.
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Expert Knowledge</h3>
              <p className="text-gray-600">
                All our solicitors are fully qualified, SRA regulated, and maintain continuous professional development.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Client-Focused</h3>
              <p className="text-gray-600">
                We prioritize clear communication, transparency, and personalized service for every client.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">SRA Regulated</h3>
              <p className="text-gray-600">
                Fully authorized and regulated by the Solicitors Regulation Authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-12"
              >
                <div className="lg:flex lg:gap-12">
                  {/* Profile Image Placeholder */}
                  <div className="lg:flex-shrink-0 mb-6 lg:mb-0">
                    <div className="w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto lg:mx-0">
                      <svg className="w-24 h-24 text-white/30" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold text-primary mb-1">
                        {member.name}
                      </h2>
                      <p className="text-lg text-gold font-semibold mb-3">
                        {member.role}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {member.bio}
                    </p>

                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-3">
                        Qualifications & Experience
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {member.qualifications.map((qual, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Support Team
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Behind our solicitors is a dedicated team of paralegals, legal assistants, and administrative staff
              who ensure smooth case management and excellent client service. Every member of our team is committed
              to delivering professional, efficient, and friendly support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a free consultation with one of our experienced solicitors.
            We're here to help with all your legal needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
