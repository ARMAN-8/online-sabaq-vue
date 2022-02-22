module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('tw-elements/dist/plugin')
  ],
}
