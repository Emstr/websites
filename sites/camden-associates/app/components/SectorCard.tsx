import Link from "next/link";

interface SectorCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export default function SectorCard({
  title,
  description,
  icon,
  href,
}: SectorCardProps) {
  return (
    <Link href={href}>
      <div className="group bg-charcoal border border-gray-dark rounded-xl p-6 hover:border-electric-blue transition-all duration-300 h-full">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gray-dark rounded-lg flex items-center justify-center text-electric-blue group-hover:bg-electric-blue group-hover:text-white transition-all duration-300 flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-electric-blue transition-colors">
              {title}
            </h3>
            <p className="text-silver text-sm leading-relaxed">{description}</p>
            <div className="mt-4 flex items-center gap-2 text-electric-blue text-sm font-medium">
              <span>Learn more</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
