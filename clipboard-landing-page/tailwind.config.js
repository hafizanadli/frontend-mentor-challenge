module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "strong-cyan": "hsl(171, 66%, 44%)",
        "light-blue": "hsl(233, 100%, 69%)",
        "dark-grayish": "hsl(210, 10%, 33%)",
        "grayish-blue": " hsl(201, 11%, 66%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
