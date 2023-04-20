/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      "base-100": "#2A303C"
    },
  },
  plugins: [require("daisyui")],
}