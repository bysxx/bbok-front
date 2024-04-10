import type { Config } from 'tailwindcss';

import { boxShadow, colors } from './style/theme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors,
      boxShadow,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        'screen-footer': 'calc(100vh - 65px)',
      },
      keyframes: {
        'bottom-sheet-up': {
          '0%': { transform: 'translateY(420px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'bottom-sheet-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(420px)' },
        },
        'fade-in-back-drop': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },

      animation: {
        'fade-in-back-drop': 'fade-in-back-drop 0.3s ease-in-out forwards',
        'slide-up-bottom-sheet': 'bottom-sheet-up 0.3s ease-out forwards',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwind-scrollbar-hide')],
  extend: {
    display: ['group-hover'],
  },
};
export default config;
