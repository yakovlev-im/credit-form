/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#104076',
        secondary: '#fed300'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@formkit/themes/tailwindcss')
  ],
}
