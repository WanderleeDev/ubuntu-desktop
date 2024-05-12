/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        minIcon: '.8rem .8rem',
      },
      gridTemplateColumns: {
        'desktop-col': 'repeat(auto-fill, minmax(min(60px, 100%), 1fr))'
      },
      gridTemplateRows: {
        'desktop-row': 'repeat(auto-fill, minmax(min(60px, 100%), 1fr))'
      },
      width: {
        'window-size' : 'min(30rem, 100%)'
      }
    },
  },
  plugins: [
    require('@midudev/tailwind-animations')
  ],
}
