module.exports = {
  purge: [],
  darkMode: true, // or 'media' or 'class'
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
