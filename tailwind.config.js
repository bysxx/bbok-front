/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
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
          6: '#FFF9E9',
          hover: '#C25B17',
        },
        red: '#FFDFCA',
        yellow: '#FFF9E9',
        login: '#FEE500',
        green: '71C89E',
        success: '#3988FF',
        success2: '53BD6A',
        alert: '#EB4646',
        alerthover: '#B11C1C',
        brown: '#4F4433',
        brownModal: '#413A2F',
      },
      boxShadow: {
        bottom: '0 6px 13px 0px rgba(0, 0, 0, 0.15)',
        button: '0px -9px 13px 0px #00000026',
        'friend-card': '0px 7px 0px 0px #EF6106',
        'locked-friend-card': '0px 7px 0px 0px #1B1B1B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        'screen-footer': 'calc(100vh - 65px)',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwind-scrollbar-hide')],
  extend: {
    display: ['group-hover'],
  },
};
