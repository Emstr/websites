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
        ocean: '#0369a1',
        'ocean-light': '#0ea5e9',
        'ocean-dark': '#075985',
        teal: '#14b8a6',
        'teal-light': '#2dd4bf',
        'teal-dark': '#0f766e',
        coral: '#fb7185',
        'coral-light': '#fda4af',
        'coral-dark': '#f43f5e',
        cream: '#faf9f6',
      },
    },
  },
  plugins: [],
};

export default config;
