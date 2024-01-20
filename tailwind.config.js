/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './frontend/**/*.{js,ts,tsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          'base-100': '#f1f0ee',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          'base-100': '#0F172A',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
