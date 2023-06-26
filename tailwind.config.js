/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "50": "#191919",
        "100": "#121220",
      },
      white: {
        "50": "#A09FAF",
        "100": "#fff",
      },
      yellow: {
        "100": "#FDDC03",
      },
      blue: {
        "100": "#0125EF",
      },
    },
    fontFamily: {
      'junkdog': ["junkdog"],
      'opensans': ["'Open Sans', sans-serif;"]
    }
  },
  plugins: [],
}
