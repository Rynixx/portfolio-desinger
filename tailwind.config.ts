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
