const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      peach: '#FEC5B9',
      tangerine:'#FEC5B9',
      bgdrk:'#39354D',
      eggplant:'#645E80',
      lavender:'#8A70FF',
      iris: '#DEC4F4',
      jasmine:'#E8D9F4',
      
    },
    extend: {},
  },
  plugins: [],
}
