import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive accounting services including audit, accounts, tax planning, payroll, VAT returns, and business advice from Defries Weiss Chartered Accountants in North Finchley, London.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Audit & Assurance',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
      description:
        'Independent statutory audits for companies, charities, and other organizations. Our comprehensive audit services ensure compliance with accounting standards and regulatory requirements.',
      features: [
        'Statutory audits for companies and charities',
        'Financial statement reviews',
        'Internal audit services',
        'Compliance and regulatory reporting',
        'Risk assessment and management advice',
      ],
    },
    {
      title: 'Accounts Production',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      description:
        'Professional preparation of annual accounts for all business types. From sole traders to limited companies, we ensure accurate financial reporting that meets all statutory requirements.',
      features: [
        'Annual accounts for limited companies',
        'Partnership and LLP accounts',
        'Sole trader accounts',
        'Management accounts and reporting',
        'Companies House filings',
      ],
    },
    {
      title: 'Corporate Tax',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      description:
        'Strategic corporate tax planning and compliance services. We help minimize your tax liability while ensuring full compliance with HMRC requirements and UK tax law.',
      features: [
        'Corporation tax returns and planning',
        'Tax efficient business structuring',
        'Capital allowances and R&D tax credits',
        'Group tax planning',
        'HMRC enquiry support',
      ],
    },
    {
      title: 'Personal Tax',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      description:
        'Expert personal tax advice for individuals, directors, and high net worth individuals. From self-assessment to complex tax planning, we help you manage your personal tax affairs efficiently.',
      features: [
        'Self-assessment tax returns',
        'Income tax planning and advice',
        'Capital gains tax planning',
        'Inheritance tax planning',
        'Tax investigations and disputes',
      ],
    },
    {
      title: 'Payroll Services',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description:
        'Comprehensive payroll processing services taking the complexity out of managing employee pay. We handle all aspects of payroll administration, from RTI submissions to pension auto-enrolment.',
      features: [
        'Weekly, fortnightly, or monthly payroll processing',
        'Real Time Information (RTI) submissions',
        'Pension auto-enrolment administration',
        'Payslips and P60s',
        'PAYE, NIC, and CIS calculations',
      ],
    },
    {
      title: 'VAT Returns',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
        </svg>
      ),
      description:
        'Timely and accurate VAT return preparation and submission. We help you navigate the complexities of VAT legislation and ensure compliance with Making Tax Digital requirements.',
      features: [
        'VAT return preparation and submission',
        'Making Tax Digital (MTD) compliance',
        'VAT registration and deregistration',
        'VAT planning and advice',
        'VAT tribunal and dispute support',
      ],
    },
    {
      title: 'Business Advice',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      description:
        'Strategic business advice to help your business grow and prosper. From financial forecasting to succession planning, we provide the insight and guidance you need.',
      features: [
        'Business strategy and planning',
        'Financial forecasting and budgeting',
        'Profitability analysis',
        'Succession planning',
        'Merger and acquisition support',
      ],
    },
    {
      title: 'Business Plans',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>
      ),
      description:
        'Professional business plans for funding applications, investor presentations, or strategic planning. We create compelling plans that demonstrate viability and potential.',
      features: [
        'Bank and investor business plans',
        'Financial projections and forecasts',
        'Cash flow forecasting',
        'Feasibility studies',
        'Grant application support',
      ],
    },
    {
      title: 'Business Start-ups',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
      description:
        'Complete support for new businesses. From choosing the right business structure to initial bookkeeping setup, we help you start on the right foot.',
      features: [
        'Company formation and registration',
        'Business structure advice',
        'Tax registration (PAYE, VAT, Corporation Tax)',
        'Accounting system setup',
        'Initial business advice and mentoring',
      ],
    },
    {
      title: 'Financial Planning',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      description:
        'Long-term financial planning for business owners and high net worth individuals. We help you build and preserve wealth through strategic planning and investment advice.',
      features: [
        'Personal wealth planning',
        'Retirement planning',
        'Investment strategy',
        'Estate planning',
        'Director and shareholder planning',
      ],
    },
    {
      title: 'Insolvency',
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      ),
      description:
        'Expert guidance through financial difficulties. Whether you need restructuring advice or formal insolvency procedures, we provide compassionate, professional support.',
      features: [
        'Company voluntary arrangements (CVA)',
        'Administration procedures',
        'Liquidation services',
        'Business rescue and turnaround',
        'Director support and advice',
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
              Comprehensive Accounting Services
            </h1>
            <p className="text-xl text-emerald-50 leading-relaxed">
              From audit and accounts to tax planning and business advice, Defries Weiss provides
              the full spectrum of professional accounting services for businesses and individuals across London.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-gradient-to-br from-[#276749] to-[#1e5439] text-white p-8 rounded-2xl shadow-xl">
                    <div className="mb-4">{service.icon}</div>
                    <h2 className="text-3xl font-bold font-serif mb-4">
                      {service.title}
                    </h2>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-[#276749] mr-3 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] font-serif mb-6">
            Let's Discuss Your Requirements
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a free initial consultation to discuss how we can help your business
            with our comprehensive accounting services.
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
      </section>
    </>
  );
}
