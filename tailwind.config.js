/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#323741',
          500: '#1d222d'
        },
        secondary: {
          500: '#f1d890'
        }
      },
      container: {
        center: true,
        padding: '.75rem',
      },
    },
  },
  plugins: [],
}

