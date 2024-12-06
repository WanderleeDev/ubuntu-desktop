/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundSize: {
        minIcon: ".8rem .8rem",
      },
      width: {
        "window-size": "min(30rem, 100%)",
      },
    },
  },
  plugins: [],
};
