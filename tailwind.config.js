/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'bounce': 'bounce 2s infinite',
        'pulse-scan': 'pulse 2s infinite',
      }
    },
  },
  plugins: [],
}
