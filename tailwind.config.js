const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './frontend/**/*.{js,ts,tsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ["Inter"],
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
