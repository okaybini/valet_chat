/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        'splash': 'splash 1.5s ease-in-out forwards',
      },
      keyframes: {
        splash: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '50%': { opacity: 0.5, transform: 'scale(1.2)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },

    },
  },
  plugins: [],
}

