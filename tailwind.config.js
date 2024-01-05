/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'focal-fossa': "url('/assets/fossa.png')"
      }
    },
  },
  plugins: [],
}
