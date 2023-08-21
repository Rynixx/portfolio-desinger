import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
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
