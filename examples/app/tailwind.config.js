/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/react-ui-components-mudittiwari13/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

