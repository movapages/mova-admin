/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alice: ["Alice", "sans-serif"],
      }
      },
  },
  plugins: [],
}

