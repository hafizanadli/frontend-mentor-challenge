module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "strong-cyan": "hsl(172, 67%, 45%)",
      "very-dark-cyan": "hsl(183, 100%, 15%)",
      "dark-grayish-cyan-1": "hsl(186, 14%, 43%)",
      "dark-grayish-cyan-2": "hsl(184, 14%, 56%)",
      "light-grayish-cyan-1": "hsl(185, 41%, 84%)",
      "light-grayish-cyan-2": "hsl(189, 41%, 97%)",
      "pastel-red": "#FF6961",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
