/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm':'480px',
      'md':'640px',
      'lg':'1024px',
      'xl':'1440px',
    },
    fontFamily: {
      sans: [],
      serif: ['Roboto', 'serif'],
    },
  },
  plugins: [],
}

