/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arbi: {
          blue:   '#1E90FF',
          green:  '#32CD32',
          yellow: '#FFD700',
          orange: '#FF8C00',
          dark:   '#1a1a2e',
          light:  '#F8F9FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
