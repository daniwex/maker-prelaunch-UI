/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        colorAccent: "#3EE9E5",
        dColorAccent: "#093F69"
      },
      backgroundColor: {
        bodyColor: "#080c20",
        bgcolorAccent: "#3EE9E5",
        bgdColorAccent: "#093F69"
      },
      backgroundImage: {
        hero: "url('../assets/illustration-hero-mobile.png')",
        footer : "url('../assets/bg-footer-squiggle.svg')",
        heroSquiggle: "url('../assets/bg-hero-squiggle.svg')"
      },
      height: {
        '128': '29rem',
      }
    },
  },
  plugins: [],
};

