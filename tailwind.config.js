/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        coal: '#11161c',
        panel: '#1b232c',
        brass: '#c58b45',
        steel: '#7a8794',
        forge: '#d46a32',
        text: '#e6e6e6',
        muted: '#9aa4ad',
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 34px rgba(197, 139, 69, 0.18)',
        forge: '0 0 28px rgba(212, 106, 50, 0.16)',
      },
      backgroundImage: {
        'ore-grid':
          'linear-gradient(rgba(122, 135, 148, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(122, 135, 148, 0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
