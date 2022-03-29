module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: "25% 1fr 25%",
      },
      gridTemplateRows: {
        layout: "auto 1fr",
      },
    },
  },
  plugins: [],
};
