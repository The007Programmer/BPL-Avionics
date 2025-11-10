import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#1874CC',
        'accent-light': '#2884DC',
        secondary: '#888888',
        surface: '#111111',
      },
      fontFamily: {
        satoshi: ['"Satoshi"', 'sans-serif'],
      },
      fontSize: {
        '2xl': '1.5rem',
      },
      spacing: {
        '96': '24rem',
      },
      zIndex: {
        '9999': '9999',
      },
    },
  },
  plugins: [],
}

export default config