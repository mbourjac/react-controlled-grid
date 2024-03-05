/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

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
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.range-thumb': {
          width: 'var(--range-thumb-size)',
          height: 'var(--range-thumb-size)',
          border: '0.125rem solid #000',
          borderRadius: '50%',
          background: '#ffffff',
          cursor: 'pointer',
          '&:hover': {
            boxShadow: '0 0 0 0.375rem rgba(135, 135, 135, 0.2)',
          },
          '&:active': {
            boxShadow: '0 0 0 0.375rem rgba(135, 135, 135, 0.4)',
          },
        },
        '.range-track': {
          width: '100%',
          height: 'var(--range-track-height)',
          cursor: 'pointer',
        },
        '.range-thumb-focus': {
          boxShadow: '0 0 0 0.5rem rgba(135, 135, 135, 0.4)',
          '&:hover': {
            boxShadow: '0 0 0 0.5rem rgba(135, 135, 135, 0.6)',
          },
        },
      });
    }),
  ],
};
