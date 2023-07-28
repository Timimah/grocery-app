/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9639',
        secondary: '#C0A062',
        dark: "#5E5E5E"
      },
      fontFamily: {
        sans: ['Candara', 'sans-serif'], //replace the contents with the correct font family
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}
