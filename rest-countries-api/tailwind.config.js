module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        //dark mode element
        "dark-blue": "hsl(209, 23%, 22%)",
        //dark mode bg
        "very-dark-blue-bg": "hsl(207, 26%, 17%)",
        //light mode text
        "very-dark-blue-txt": "hsl(200, 15%, 8%)",
        //light mode input
        "dark-gray": "hsl(0, 0%, 52%)",
        //light mode bg
        "very-light-gray": "hsl(0, 0%, 98%)",
        //dark mode text & light mode element
        "white-app": "hsl(0, 0%, 100%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
