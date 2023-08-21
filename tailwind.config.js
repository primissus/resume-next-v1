const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/server/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
        ...colors,
        'darker-blue': '#1c1751',
        'dark-blue': '#292b79',
        'blue': '#1d8ac9',
        'purple': '#6d3194',
        'pink': '#e73396',
        'light-pink': '#f06c98',
        'lighter-pink': '#f491aa',
    },
  },
  plugins: [],
}
