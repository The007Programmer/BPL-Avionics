module.exports = {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {
      flexbox: true,
      grid: true,
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
    }
  }
}