/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Monserrat', 'system-ui']
    },
    extend: {
      colors: {
        'back-dark': '#1a1919',
        'minor-dark': '#91918e',
        'minor-light': '#6b7280',
        'light-gray': '#27272a',
        'success': '#bef264',
        'minor-success': '#27272a'
      }
    },
  },
  plugins: [],
}