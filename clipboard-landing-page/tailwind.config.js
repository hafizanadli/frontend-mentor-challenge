module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "header-pattern": "url('./assets/bg-header-desktop.png')",
      }),
      colors: {
        "strong-cyan": "hsl(171, 66%, 44%)",
        "light-blue": "hsl(233, 100%, 69%)",
        "dark-grayish": "hsl(210, 10%, 33%)",
        "grayish-blue": "hsl(201, 11%, 66%)",
      },
      boxShadow: {
        cyan: "0 20px 25px -5px hsl(171, 66%, 44%,0.01), 0 10px 10px -5px hsl(171, 66%, 44%,0.04)",
        blue: "0 20px 25px -5px hsl(233, 100%, 69%,0.01), 0 10px 10px -5px hsl(233, 100%, 69%,0.04)",
      },
    },
  },
  variants: {
    extend: {
      fill: ["hover", "focus"],
    },
  },
  plugins: [],
};
