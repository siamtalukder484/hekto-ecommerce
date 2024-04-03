/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-color': '#FB2E86',
        'heading-color': '#151875',
        'pera-color': '#8A8FB9',
        'price-color': '#FB2448',
        'txt-color': '#000',
        'head-bg': '#7E33E0',
        'banner-bg': '#F2F0FF',
        'footer-bg': '#EEEFFB',
        'copyright-bg': '#E7E4F8',
      },
      fontFamily: {
        'lato': "'Lato', sans-serif",
        'Josefin': "'Josefin Sans', sans-serif;",
      },
      maxWidth: {
        'container': '1170px',
      },
    },
  },
  plugins: [],
}

