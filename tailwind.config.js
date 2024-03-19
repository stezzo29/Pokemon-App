/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#394BA1',
        customGreen: '#9FFA9D',
      }
    },
  },
  plugins: [],
}

