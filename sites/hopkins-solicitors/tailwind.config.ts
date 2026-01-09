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
        primary: '#166534',
        secondary: '#1e3a8a',
        cream: '#fefce8',
        'primary-light': '#22c55e',
        'secondary-light': '#3b82f6',
      },
    },
  },
  plugins: [],
};

export default config;
