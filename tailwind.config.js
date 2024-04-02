/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xl: { max: '1110px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
      xsm: { max: '500px' },
    },
    extend: {
      colors: {
        'neutral-silver': '#F5F7FA',
        'neutral-d-grey': '#4D4D4D',
        'brand-primary': {
          light: '#A5D6A7',
          DEFAULT: '#4CAF4F',
        },
        'neutral-grey': '#717171',
        'neutral-l-grey': '#89939E',
        'neutral-black': '#263238',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
})
