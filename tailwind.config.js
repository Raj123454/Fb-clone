/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      boxShadow:{
        '4xl': '0 0px 14px rgba(0, 0, 0, .1), 0 4px 18px rgba(0, 0, 0, .1)'
      },
      'colors':{
        default: '#42B72A',
        light: '#F0F2F5'
      },
      fontFamily:{
        fbFont:['SFProDisplay-Regular, Helvetica, Arial, sans-serif']
      }
    },
  },
  plugins: [],
}

