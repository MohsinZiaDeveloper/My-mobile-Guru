const defaultColors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      ...defaultColors,
      mainpurpleColor: "#5D71E1",
      customGray: "#EDEDF0",
      backgroundGreenColor: "#07844C",
      buttonBgColorGradian1: "#07844C",
      buttonBgcolorGradian2: "#080A3C",
    },
  },
  plugins: [],
};
