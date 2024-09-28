/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundSize: {
        minIcon: ".8rem .8rem",
      },
      gridTemplateColumns: {
        "desktop-col": "repeat(auto-fill, minmax(min(60px, 100%), 1fr))",
      },
      gridTemplateRows: {
        "desktop-row": "repeat(auto-fill, minmax(min(60px, 100%), 1fr))",
      },
      width: {
        "window-size": "min(30rem, 100%)",
      },
      colors: {
        header: "#1d1d1d",
      },
    },
     keyframes: {
       fadeIn: {
         "0%": { scale: .9, opacity: 0 },
         "50%": { scale: 1.05, opacity: 0.5 },
         "100%": { scale: 1, opacity: 1 },
       },
     },
     animation: {
       fadeIn: "fadeIn 0.2s ease-in-out",
     },
  },
  plugins: [],
};
