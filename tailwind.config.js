module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        tablet: "33% 1fr",
        desktop: "25% 1fr 25%",
      },
      gridTemplateRows: {
        tablet: "auto 1fr",
        desktop: "auto 1fr",
      },
      colors: {
        neutral: {
          450: "rgb(139, 139, 139)",
        },
      },
    },
  },
  plugins: [],
};
