module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './frontend/**/*.{js,ts,tsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ["Inter"],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
