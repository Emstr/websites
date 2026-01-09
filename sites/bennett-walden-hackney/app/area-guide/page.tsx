import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hackney Area Guide',
  description: 'Expert area guide to Hackney, London Fields, Clapton, Dalston, Stoke Newington, De Beauvoir Town, and Victoria Park. 30 years of local knowledge.',
};

export default function AreaGuidePage() {
  const areas = [
    {
      name: 'Hackney Central',
      postcodes: 'E8, E9',
      color: 'from-[#0f766e] to-[#0d9488]',
      description: 'The heart of the borough with excellent transport links, bustling markets, and a thriving creative scene. Hackney Central station provides quick access to the City and West End.',
      features: ['Hackney Central station', 'Hackney Empire theatre', 'Mare Street markets', 'Independent shops & cafes'],
      propertyTypes: ['Victorian terraces', 'Modern apartments', 'Period conversions', 'New builds'],
    },
    {
      name: 'London Fields',
      postcodes: 'E8',
      color: 'from-[#f97316] to-[#ea580c]',
      description: 'One of East London\'s most desirable areas. The park itself is a hub for community life, while Broadway Market offers some of London\'s best independent shops, cafes, and restaurants.',
      features: ['London Fields park & lido', 'Broadway Market', 'Regents Canal', 'Vibrant nightlife'],
      propertyTypes: ['Georgian townhouses', 'Victorian terraces', 'Converted warehouses', 'Modern apartments'],
    },
    {
      name: 'Clapton',
      postcodes: 'E5',
      color: 'from-slate-600 to-slate-700',
      description: 'An up-and-coming area with excellent value compared to neighboring London Fields. Great schools, green spaces, and a growing food and drink scene on Lower Clapton Road.',
      features: ['Clapton Pond', 'Springfield Park', 'Hackney Downs', 'Good schools'],
      propertyTypes: ['Victorian houses', 'Edwardian terraces', 'Ex-local authority', 'New developments'],
    },
    {
      name: 'Dalston',
      postcodes: 'E8, N16',
      color: 'from-[#0f766e] to-[#0d9488]',
      description: 'The cultural heart of East London with incredible diversity, world-class music venues, and amazing food from around the globe. Dalston Junction and Dalston Kingsland stations provide excellent connectivity.',
      features: ['Dalston Junction station', 'Ridley Road Market', 'Live music venues', 'Diverse food scene'],
      propertyTypes: ['Mansion blocks', 'Victorian terraces', 'Modern flats', 'Purpose-built apartments'],
    },
    {
      name: 'Stoke Newington',
      postcodes: 'N16',
      color: 'from-[#f97316] to-[#ea580c]',
      description: 'Often called "Stokey" by locals, this area has a distinct village feel with its thriving Church Street full of independent boutiques, bookshops, and cafes. Very popular with families.',
      features: ['Clissold Park', 'Church Street shops', 'Abney Park Cemetery', 'Great schools'],
      propertyTypes: ['Victorian terraces', 'Georgian houses', 'Converted flats', 'Period properties'],
    },
    {
      name: 'De Beauvoir Town',
      postcodes: 'N1',
      color: 'from-slate-600 to-slate-700',
      description: 'An elegant conservation area with beautiful Georgian and Victorian squares. Quiet residential streets with a strong sense of community, yet just minutes from vibrant Dalston.',
      features: ['Georgian squares', 'De Beauvoir Square', 'Local parks', 'Community atmosphere'],
      propertyTypes: ['Georgian townhouses', 'Victorian terraces', 'Period conversions', 'Garden flats'],
    },
    {
      name: 'Victoria Park',
      postcodes: 'E2, E9',
      color: 'from-[#0f766e] to-[#0d9488]',
      description: 'Living by London\'s most loved park. Victoria Park Village offers boutique shopping and dining, while the park itself provides a beautiful green space for recreation and events.',
      features: ['Victoria Park', 'Hertford Union Canal', 'Park Village shops', 'Weekend markets'],
      propertyTypes: ['Victorian villas', 'Mansion flats', 'Modern developments', 'Waterside apartments'],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f766e] via-[#0d9488] to-[#14b8a6] text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hackney Area Guide
            </h1>
            <p className="text-xl md:text-2xl text-teal-50 mb-8">
              30 years of local expertise. Discover why Hackney is one of London's most exciting and diverse boroughs.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Cover
            </h2>
            <p className="text-xl text-gray-600">
              Expert local knowledge across all major Hackney neighborhoods
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-[#0f766e] mb-2">E2</div>
                <p className="text-sm text-gray-600">Victoria Park<br/>Haggerston</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-[#0f766e] mb-2">E5</div>
                <p className="text-sm text-gray-600">Clapton<br/>Upper Clapton</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-[#0f766e] mb-2">E8</div>
                <p className="text-sm text-gray-600">Hackney<br/>London Fields<br/>Dalston</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-[#0f766e] mb-2">E9</div>
                <p className="text-sm text-gray-600">Hackney<br/>Victoria Park<br/>Homerton</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md md:col-start-2">
                <div className="text-3xl font-bold text-[#0f766e] mb-2">N1</div>
                <p className="text-sm text-gray-600">De Beauvoir Town<br/>Hoxton</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-[#0f766e] mb-2">N16</div>
                <p className="text-sm text-gray-600">Stoke Newington<br/>Dalston</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area Details */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {areas.map((area, index) => (
              <div key={area.name} className={`${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row gap-8 items-center`}>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="inline-block bg-slate-100 text-[#0f766e] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {area.postcodes}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{area.name}</h3>
                    <p className="text-lg text-gray-600 mb-6">{area.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {area.features.map((feature) => (
                          <div key={feature} className="flex items-center text-gray-700">
                            <svg className="w-5 h-5 text-[#0f766e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Property Types:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.propertyTypes.map((type) => (
                          <span key={type} className="bg-slate-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className={`bg-gradient-to-br ${area.color} rounded-2xl p-12 text-white h-full flex items-center justify-center min-h-[300px]`}>
                    <div className="text-center">
                      <svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <h4 className="text-2xl font-bold">{area.name}</h4>
                      <p className="text-lg mt-2 opacity-90">{area.postcodes}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Excellent Transport Links
            </h2>
            <p className="text-xl text-gray-600">
              Well-connected across Hackney and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#0f766e] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Overground</h3>
              <p className="text-gray-600 mb-4">
                Multiple stations including Dalston Junction, Hackney Central, Homerton, Hackney Wick, and London Fields.
              </p>
              <p className="text-sm text-[#0f766e] font-semibold">15 mins to Liverpool Street</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#f97316] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bus Routes</h3>
              <p className="text-gray-600 mb-4">
                Extensive bus network covering all areas. Routes to the City, West End, and connections across East London.
              </p>
              <p className="text-sm text-[#f97316] font-semibold">24-hour services available</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cycling</h3>
              <p className="text-gray-600 mb-4">
                Excellent cycling infrastructure with segregated lanes, Santander bike docks, and access to canal towpaths.
              </p>
              <p className="text-sm text-slate-700 font-semibold">20 mins cycle to the City</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hackney Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Hackney?
            </h2>
            <p className="text-xl text-gray-600">
              What makes Hackney special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Diversity</h3>
              <p className="text-gray-600">
                One of London's most diverse boroughs with incredible food, music, art, and community events from around the world.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Green Spaces</h3>
              <p className="text-gray-600">
                Victoria Park, London Fields, Clissold Park, and the Regents Canal provide beautiful outdoor spaces.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Independent Scene</h3>
              <p className="text-gray-600">
                Thriving independent shops, cafes, restaurants, and businesses. No chain-dominated high streets here.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Arts & Culture</h3>
              <p className="text-gray-600">
                World-class venues like Hackney Empire, plus countless galleries, studios, and creative spaces.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Great Schools</h3>
              <p className="text-gray-600">
                Excellent primary and secondary schools, both state and independent. Popular with families.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Property Value</h3>
              <p className="text-gray-600">
                More affordable than neighboring Islington and Tower Hamlets, yet with excellent investment potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0f766e] to-[#0d9488] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Hackney Your Home?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Let our 30 years of local expertise help you find the perfect property in the perfect Hackney neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sales"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              View Properties
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all border-2 border-white/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
