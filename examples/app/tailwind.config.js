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
      animation: {
        'shard-slow': 'shard 60s linear infinite',
        'shard-reverse': 'shard-reverse 60s linear infinite',
      },
      keyframes: {
        shard: {
          '0%': { transform: 'translateX(-50%) rotate(45deg)' },
          '100%': { transform: 'translateX(50%) rotate(45deg)' },
        },
        'shard-reverse': {
          '0%': { transform: 'translateX(50%) rotate(-45deg)' },
          '100%': { transform: 'translateX(-50%) rotate(-45deg)' },
        },
      },
      animation: {
        'plasma1': 'plasma 12s ease-in-out infinite',
        'plasma2': 'plasma 16s ease-in-out infinite reverse',
        'rotate-slow': 'spin 60s linear infinite',
        'rotate-very-slow': 'spin 120s linear infinite',
        'particles': 'particles 30s linear infinite',
      },
      keyframes: {
        plasma: {
          '0%,100%': { transform: 'scale(1) translate(0,0)', opacity: '0.6' },
          '50%': { transform: 'scale(1.2) translate(30px,-20px)', opacity: '0.8' },
        },
        particles: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
      animation: {
        'glow-streak': 'streak 10s linear infinite',
      },
      keyframes: {
        streak: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

