/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: false, // 'media' or 'class',
  purge: {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      'download-red': '#F74F4F',
    },
    extend: {
      maxWidth: {
        '1/2': '50%',
      },
      fontFamily: {
        gothic: ['var(--font-gothic)'],
      },
    },
  },
  plugins: [],
}
