/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        black: '#0a0a0a',
        white: '#f5f5f0',
        accent: '#e8e800',
      },
      boxShadow: {
        brutal: '4px 4px 0px #0a0a0a',
        'brutal-lg': '8px 8px 0px #0a0a0a',
        'brutal-xl': '12px 12px 0px #0a0a0a',
        'brutal-white': '4px 4px 0px #f5f5f0',
        'brutal-white-lg': '8px 8px 0px #f5f5f0',
      },
    },
  },
  plugins: [],
}
