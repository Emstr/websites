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
        photo: {
          black: '#000000',
          white: '#ffffff',
          red: '#ef4444',
          gray: {
            900: '#111111',
            800: '#1a1a1a',
            700: '#2a2a2a',
            500: '#666666',
            300: '#999999',
            100: '#f5f5f5',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
