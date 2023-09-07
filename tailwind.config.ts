import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  safelist: [
    'bg-red-500',
    'flex', 'flex-col', 'md:flex-row-reverse','md:flex-row'
  ],
  darkMode: 'class',
  theme: {
    extend:
    {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
      fontFamily: {
        'titillium': ['Titillium Web', 'sans-serif']
      },
      backgroundImage: {
        'svg-bubble': "url('/images/bg.svg')"
       },
    },
  },
  plugins: [],
};

export default config;
