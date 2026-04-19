// /tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}", // Important to include your data folder
  ],
  theme: {
    extend: {
      colors: {
        'mongol-earth': '#FAF9F5', // Soft, earthy off-white
        'premium-black': '#050505', // Deep black for text/headers
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'], // Elegant header font
        sans: ['var(--font-inter)', 'sans-serif'], // Clean body font
      },
    },
  },
  plugins: [],
}
