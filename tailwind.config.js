module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        turbo: '#EAEF00',
        charade: '#2D313D',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      backgroundImage: () => ({
        'home-desktop': 'url("assets/images/home-desktop.jpg")',
        'home-mobile': 'url("assets/images/home-mobile.jpg")',
      }),
      fontSize: {
        '8xl': '6.5rem',
        '9xl': '12.4rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
