/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rebel: {
          pink: '#ec4899',
          purple: '#7c3aed',
          black: '#000000',
          dark: '#0a0a0a',
          grey: '#1a1a1a',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
