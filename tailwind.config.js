/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#fc7c5c',
        secondary: '#d6b183'
      }
    }
  },

  plugins: [],
}
