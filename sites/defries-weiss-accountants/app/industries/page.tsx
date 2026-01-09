import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Specialist accounting services for retail, professional services, property, hospitality, healthcare, and more. Industry expertise from Defries Weiss Chartered Accountants.',
};

export default function IndustriesPage() {
  const industries = [
    {
      title: 'Retail & E-commerce',
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
        </svg>
      ),
      description:
        'Specialized accounting for retail businesses, online stores, and e-commerce operations. We understand stock management, VAT complexities, and seasonal trading patterns.',
      services: [
        'Stock valuation and management',
        'E-commerce platform integration',
        'VAT and duty planning',
        'Cash flow management',
        'Multi-channel sales accounting',
      ],
    },
    {
      title: 'Professional Services',
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      description:
        'Expert services for solicitors, architects, consultants, and other professional practices. We understand partnership structures, professional indemnity, and time-based billing.',
      services: [
        'Partnership and LLP accounts',
        'Work-in-progress valuations',
        'Fee income recognition',
        'Professional indemnity considerations',
        'Practice acquisition support',
      ],
    },
    {
      title: 'Property & Construction',
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
      description:
        'Comprehensive accounting for property developers, landlords, construction firms, and contractors. We navigate CIS, project accounting, and development finance.',
      services: [
        'CIS compliance and returns',
        'Project cost accounting',
        'Property portfolio management',
        'Development finance arrangements',
        'Capital allowances claims',
      ],
    },
    {
      title: 'Hospitality & Catering',
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
        </svg>
      ),
      description:
        'Tailored services for restaurants, hotels, pubs, and catering businesses. We understand cash handling, tronc schemes, and licensing requirements.',
      services: [
        'Cash and card reconciliation',
        'Tronc scheme administration',
        'Stock and waste management',
        'Licensing and compliance',
        'Seasonal trading analysis',
      ],
    },
    {
      title: 'Healthcare & Medical',
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      ),
      description:
        'Specialist accounting for medical practitioners, dentists, pharmacies, and healthcare providers. We understand NHS contracts, practice partnerships, and medical partnerships.',
      services: [
        'GP and dental practice accounts',
        'NHS contract accounting',
        'Medical partnership agreements',
        'Practice valuations',
        'Succession planning',
      ],
    },
    {
      title: 'Technology & Digital',
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      description:
        'Modern accounting for tech startups, software companies, and digital agencies. We understand R&D tax credits, IP valuation, and SaaS revenue recognition.',
      services: [
        'R&D tax credit claims',
        'Software revenue recognition',
        'IP and intangible asset accounting',
        'Equity and option schemes',
        'Startup and scale-up support',
      ],
    },
    {
      title: 'Manufacturing & Distribution',
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      description:
        'Comprehensive services for manufacturers and distributors. We handle complex stock systems, capital allowances, and international trade accounting.',
      services: [
        'Stock and inventory accounting',
        'Cost accounting systems',
        'Capital allowances and grants',
        'Import/export compliance',
        'Supply chain finance',
      ],
    },
    {
      title: 'Charities & Non-Profits',
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      description:
        'Specialist charity accounting and compliance. We understand SORP requirements, charity law, and Gift Aid administration.',
      services: [
        'Charity SORP accounts',
        'Trustee reports',
        'Gift Aid administration',
        'Charity Commission compliance',
        'Grant accounting',
      ],
    },
    {
      title: 'Transport & Logistics',
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      description:
        'Expert services for hauliers, couriers, and logistics providers. We understand vehicle taxation, mileage claims, and operator licensing.',
      services: [
        'Fleet and vehicle accounting',
        'Fuel and mileage management',
        'Driver expenses and allowances',
        'Capital allowances on vehicles',
        'Operator compliance',
      ],
    },
    {
      title: 'Personal Service Companies',
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      description:
        'Dedicated support for contractors and freelancers operating through limited companies. We navigate IR35, dividend planning, and contractor-specific tax issues.',
      services: [
        'IR35 compliance and advice',
        'Dividend planning strategies',
        'Contractor tax returns',
        'Expense optimization',
        'Personal tax efficiency',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#276749] to-[#1e5439] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              Industry Expertise That Matters
            </h1>
            <p className="text-xl text-emerald-50 leading-relaxed">
              With nearly 50 years of experience, we've developed deep expertise across a wide
              range of industries. We understand the unique challenges and opportunities your
              sector presents.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Every industry has its own accounting complexities, tax considerations, and regulatory
              requirements. At Defries Weiss, we combine general accounting excellence with
              sector-specific knowledge to deliver tailored solutions that work for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-[#276749] to-[#1e5439] p-6 text-white">
                  <div className="mb-3">{industry.icon}</div>
                  <h3 className="text-2xl font-bold font-serif">
                    {industry.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.services.map((service, sIndex) => (
                      <li key={sIndex} className="flex items-start text-sm">
                        <svg
                          className="h-5 w-5 text-[#276749] mr-2 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1e293b] font-serif mb-8 text-center">
              Why Industry Expertise Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#276749] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1e293b] mb-2">Specialized Knowledge</h3>
                  <p className="text-gray-600">
                    We understand the unique accounting treatments, tax reliefs, and compliance
                    requirements specific to your industry.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#276749] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1e293b] mb-2">Tax Efficiency</h3>
                  <p className="text-gray-600">
                    Industry-specific tax planning opportunities and reliefs that generic
                    accountants might miss.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#276749] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1e293b] mb-2">Benchmarking</h3>
                  <p className="text-gray-600">
                    Compare your performance against industry standards and identify areas
                    for improvement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#276749] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1e293b] mb-2">Time Savings</h3>
                  <p className="text-gray-600">
                    Less time explaining your business model and industry nuances to your
                    accountant. We already understand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Don't See Your Industry Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#1e293b] font-serif mb-4">
              Don't See Your Industry Listed?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              These are just some of the industries we serve. With nearly 50 years of experience,
              we've worked with businesses across virtually every sector. Get in touch to discuss
              your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#276749] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1e5439] transition-all shadow-lg"
              >
                Book Free Consultation
              </Link>
              <a
                href="tel:02084462999"
                className="bg-white border-2 border-[#276749] text-[#276749] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Call 020 8446 2999
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#276749] to-[#1e5439] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Industry-Specific Expertise for Your Business
          </h2>
          <p className="text-xl text-emerald-50 mb-8">
            Benefit from accountants who truly understand your industry's challenges and opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#276749] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
          >
            Discuss Your Industry Needs
          </Link>
        </div>
      </section>
    </>
  );
}
