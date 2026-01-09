import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        advisor: {
          'deep-blue': '#1e3a8a',
          'royal-blue': '#2563eb',
          'royal-light': '#3b82f6',
          'thistle': '#9333ea',
          'thistle-light': '#a855f7',
          'thistle-pale': '#f3e8ff',
          'blue-light': '#dbeafe',
          'cream': '#fef9f3',
        },
      },
    },
  },
  plugins: [],
};

export default config;
