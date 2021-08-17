module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "header-desktop-dark": "url('./assets/bg-desktop-dark.jpg')",
        "header-mobile-dark": "url('./assets/bg-mobile-dark.jpg')",
        "header-desktop-light": "url('./assets/bg-desktop-light.jpg')",
        "header-mobile-light": "url('./assets/bg-mobile-light.jpg')",
      }),
      colors: {
        // ### Primary

        brightBlue: "hsl(220, 98%, 61%)",
        checkBackground:
          "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",

        // ### Neutral

        // ### Light Theme

        veryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        lightGrayishBlue: "hsl(233, 11%, 84%)",
        // darkGrayishBlue: "hsl(236, 9%, 61%)",
        // veryDarkGrayishBlue: "hsl(235, 19%, 35%)",

        // ### Dark Theme

        veryDarkBlue: "hsl(235, 21%, 11%)",
        veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        lightGrayishBlue: "hsl(234, 39%, 85%)",
        lightGrayishBlueHover: "hsl(236, 33%, 92%)",
        darkGrayishBlue: "hsl(234, 11%, 52%)",
        veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
        // veryDarkGrayishBlue: "hsl(237, 14%, 26%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
