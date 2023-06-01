/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens:{
      'phone': {'min': '370px', 'max': '475px'},
      'tablet':{'min': '640px', 'max': '767px'},
      'laptop':'1080px',
    },
    borderRadius:{
      'none':'0',
      'sm':'0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT:'4px',
      'md':'0.375rem',
      'lg':'0.5rem',
      'full':'9999px',
      'new': '45px',
      'normal': '20px',
    },
    fontFamily:{
      'dongle': 'Varela Round, sans-serif;'
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
