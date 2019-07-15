const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      colors: {
        pink: {
          ...colors.pink,
          200: '#ff9ad8',
          400: '#FC66C2'
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwind-heropatterns')({
      // as per tailwind docs you can pass variants
      variants: [],

      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: [],

      // The foreground colors of the pattern
      colors: {
        default: '#ffc4e8',
        'blue-dark': '#000044' // also works with rgb(0,0,205)
      },

      // The foreground opacity
      opacity: {
        default: '0.4',
        '100': '1.0'
      }
    })
  ]
}