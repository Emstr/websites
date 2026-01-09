import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#166534', // Racing green
        secondary: '#15803d', // Lighter green
        accent: '#ea580c', // Orange
        'accent-light': '#fb923c', // Lighter orange
        heritage: '#166534', // Heritage green
      },
    },
  },
  plugins: [],
};

export default config;
