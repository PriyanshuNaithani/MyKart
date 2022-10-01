const colors = require('tailwindcss/colors');
module.exports = {
  content: ['src/**/*.jsx'],
  theme: {
    extend: {
      width: {
        '47': '12.79rem',
        '9.5': '3.1rem'
      },
      padding: {
        '1.2': '4.104px',
        '12.5': '50px',
        '6.25': '25px',
        '1.71': '6.840px',
        '1.85': '7.387px',
        '3.5': '13.680px',
        '4.5': '18.24px',
        '7.2': '29.275px'
      },
      margin: {
        '15': '60px',
        '7.5': '30px',
        '38': '152px',
        '42': '168px',
        '1.85': '7.387px',
      }
    },
    colors: {
      primary: {
        500: 'rgb(255,81,81)',
        600: 'rgb(255,60,60)'
      },
      secondary: {
        500: 'rgb(65,81,97)'
      },
      gray: {
        50: 'rgb(221,221,221)',
        100: 'rgb(250,250,250)',
        150: 'rgb(102,102,102)',
        200: 'rgb(244,245,246)',
        800: 'rgb(65,81,97)',
        900: 'rgb(25,32,38)'
      },
      sky: {
        dim :'rgb(236,245,244)',
        light: 'rgb(180,255,253)',
        medium: 'rgb(190,231,202)',
        dark: 'rgb(120,202,182)',
        extradark: 'rgb(61,184,170)'
      },

      black: colors.black,
      white: colors.white
    }
  },
  plugins: []
};
