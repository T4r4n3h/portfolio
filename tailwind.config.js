const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      peach: '#FEC5B9',
      tangerine:'#FE9881',
      bgdrk:'#39354D',
      eggplant:'#645E80',
      lavender:'#8A70FF',
      iris: '#DAB0F4',
      jasmine:'#E8D9F4',
      fuchsia:'#d946ef',
      rose:'#f43f5e',
      purple:'#a855f7',
      violet:'#8b5cf6',
      cyan:'#22d3ee',
      green:'#4ade80',
      
      
    },
    extend: {
     
      width: {
        '128': '32.62rem',
      },
      height: {
        '130':'33.125rem'
      }
      // rotate:{
      //   '175':'-15deg'
      // },
    },
  },
  plugins: [],
}
