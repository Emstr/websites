interface CaseStudyCardProps {
  company: string;
  location: string;
  sector: string;
  description: string;
  dealType: string;
  year: string;
}

export default function CaseStudyCard({
  company,
  location,
  sector,
  description,
  dealType,
  year,
}: CaseStudyCardProps) {
  return (
    <div className="bg-charcoal border border-gray-dark rounded-xl p-6 hover:border-electric-blue transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{company}</h3>
          <div className="flex items-center gap-4 text-sm text-silver">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {location}
            </span>
            <span className="text-gray-dark">|</span>
            <span>{sector}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full text-xs font-medium">
            {year}
          </div>
        </div>
      </div>

      <p className="text-silver text-sm leading-relaxed mb-4">{description}</p>

      <div className="flex items-center gap-2 pt-4 border-t border-gray-dark">
        <svg
          className="w-5 h-5 text-electric-blue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-white font-medium">{dealType}</span>
      </div>
    </div>
  );
}
