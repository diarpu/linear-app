/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: '"Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif'
    },
    colors: {
      transparent: 'transparent',
      white: '#ffff',
      'white-a08': 'rgba(255, 255, 255, 0.08)',
      background: '#000212',
      grey: 'rgb(138, 143, 152)',
      'grey-dark': '#222326'
    },
    fontSize: {
      xs: '12px', // 12px
      sm: '14px', // 14px
      base: '1rem', // 16px
      md: '18px', // 18px
      xl: '20px',
      '2xl': ['22px', '1.3'], // 22px
      '7xl': ['80px', '1'] // 80px
    },
    spacing: {
      'navigation-height': 'var(--navigation-height)',
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem'
    },
    backgroundImage: {
      'primary-gradient':
        'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)'
    },
    boxShadow: {
      primary: 'rgb(80 63 205 / 50%) 0px 1px 40px'
    },
    extend: {}
  },
  plugins: []
}
