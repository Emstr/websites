/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#7c3aed',
        },
        blue: {
          500: '#3b82f6',
        },
      },
      backgroundImage: {
        'gradient-purple-blue': 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
      },
    },
  },
  plugins: [],
}
