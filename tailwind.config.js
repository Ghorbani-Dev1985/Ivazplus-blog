/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/UI/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      container: {
              center: true,
              padding: {
                DEFAULT: '1rem',
                md: '0.625rem',
              }
      },
      colors:{
        primary: {
          50: '#D3DCE9',
          100:'#B6BEDA',
          200: '#9A9CCA',
          300: '#877EBA',
          400: '#7A62AA',
          500: '#724799',
          600: '#6D2C88',
          700: '#722578',
          800: '#681F5F',
          900: '#581942',
          950: '#47132A',
          DEFAULT: "#6d2c88",
           },
           secondary: '#ee2c72',
           success: 'rgb(0 , 192 , 115)',
           warning: 'rgb(255 , 153 , 0)',
           error: 'rgb(255,71 , 87)',
       },
       fontFamily: {
        ShabnamFD: ["Shabnam-FD" , "sans-serif"],
        Shabnam: ["Shabnam" , "sans-serif"],
      },
      backgroundImage: {
        'paternBg' : 'url("/Footer/footerPatern.png")',
         'Footer': 'linear-gradient(rgb(61,61,61), rgba(30,30,30,0.83)) , url("/Footer/footerPatern.png")'
    },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    variants: {
      scrollbar: ["light"],
    },
},
  plugins: [
    nextui({
     addCommonColors: true,
     themes: {
      light: {
        screens: {
          'xs': '480px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        },
      }
     } 
  }),
],
corePlugins: {
  aspectRatio: false,
},
plugins: [
  nextui(),
  require("tailwind-scrollbar"),
  function ({ addVariant }) {
    addVariant("child", "& > *");
    addVariant("child-hover", "& > *:hover");
  },
  require('@tailwindcss/aspect-ratio'),
],
};
