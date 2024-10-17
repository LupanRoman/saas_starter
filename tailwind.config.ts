import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './redux/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#3B4EF8',
        fillColor: '#1B1B2B',
        dimText: '#FFFFFF80',
        inProgress: '#EBEBEB',
        toTo: '#4665C9CC',
        done: '#68C73D80',
        boxColor: '#323140',
        dimBoxColor: '#FFFFFF33',
      },
    },
  },
  plugins: [],
} satisfies Config;
