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
        'product-bg': '#F6F7FB',
        'about-bg' : '#F6F5FF',
        'about_img_bg' : '#2B3CAB',
        'features-bg' : '#FF9100',
      },
      fontFamily: {
        lato: "'Lato', sans-serif",
        Josefin: "'Josefin Sans', sans-serif;",
      },
      maxWidth: {
        container: '1170px',
      },
      boxShadow: {
        'product-shadow': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
        'fe,atures-shadow': '0px 0px 10px 0px rgba(0,0,0,0.1)',
        'blogPost-shadoe': " 0px 1px 17px 0px rgba(0,0,0,0.55)",
       
      },
      translate: {
        topMiddle: '-50%',
        leftMiddle: '-50%'
      }
    },
  },
  plugins: [],
}

