// - Family: [Barlow Semi Condensed](https://fonts.google.com/specimen/Barlow+Semi+Condensed)
// - Weights: 600, 700

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      backgroundImage: (theme) => ({
        "apps-radial":
          "radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
      }),
      colors: {
        // ### Primary
        "yellow-1": "hsl(39, 89%, 49%)",
        "yellow-2": "hsl(40, 84%, 53%)",
        "blue-1": "hsl(230, 89%, 62%)",
        "blue-2": "hsl(230, 89%, 65%)",
        "red-1": "hsl(349, 71%, 52%)",
        "red-2": "hsl(349, 70%, 56%)",
        "purple-1": "hsl(261, 73%, 60%)",
        "purple-2": "hsl(261, 72%, 63%)",
        "cyan-1": "hsl(189, 59%, 53%)",
        "cyan-2": "hsl(189, 58%, 57%)",
        // ### Neutral
        "dark-text": "hsl(229, 25%, 31%)",
        "score-text": "hsl(229, 64%, 46%)",
        "header-outline": "hsl(217, 16%, 45%)",
        //screen background
        "screen-1": "hsl(214, 47%, 23%)",
        "screen-2": "hsl(237, 49%, 15%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
