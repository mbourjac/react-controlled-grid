/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Roboto Mono"', 'monospace'],
      },
      colors: {
        'off-black': '#1d1d1d',
      },
    },
  },
  plugins: [],
};
