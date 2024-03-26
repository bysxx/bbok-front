/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        gray: {
          5: '#FCFCFC',
          10: '#F9F9F9',
          11: '#F3F5F5',
          13: '#EEEEEE',
          15: '#E0E0E0',
          20: '#C6C6C6',
          25: '#ADADAD',
          30: '#939393',
          35: '#878787',
          40: '#7A7A7A',
          45: '#6D6D6D',
          50: '#606060',
          55: '#545454',
          60: '#474747',
          65: '#3A3A3A',
          70: '#2D2D2D',
          90: '#141414',
        },
        orange: {
          1: '#FF802D',
          2: '#EEA472',
          3: '#FF944F',
          4: '#EF6106',
          5: '#FFE7D8',
          6: '#FFDFCA',
          hover: '#C25B17',
        },
        red: '#FFDFCA',
        yellow: '#FFF9E9',
        login: '#FEE500',
        green: {
          1: '#71C89E',
          2: '#459E73',
          3: '#346D52',
          4: '#C5EAD8',
        },
        success: '#3988FF',
        success2: '53BD6A',
        alert: '#EB4646',
        alerthover: '#B11C1C',
        brown: '#4F4433',
        brownModal: '#413A2F',
      },
      boxShadow: {
        modal: '0px -2px 28px 0px rgba(0, 0, 0, 0.28)',
        bottom: '0 6px 13px 0px rgba(0, 0, 0, 0.15)',
        button: '0px -9px 13px 0px #00000026',
        'friend-card-orange': '0px 7px 0px 0px #EF6106',
        'friend-card-green': '0px 7px 0px 0px #346D52',
        'locked-friend-card': '0px 7px 0px 0px #1B1B1B',
        bookmark: '0px 4px 9px rgba(0, 0, 0, 0.15)',
      },
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
