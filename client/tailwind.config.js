/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        'mac-btn-red': '#fe5f57',
        'mac-btn-yellow': '#febc2e',
        'mac-btn-green': '#28c840',
        'mac-text-white': '#f7f7f7',
        'mac-text-yellow': '#e7d184',
        'mac-text-blue': '#35feff',
        'mac-text-blink': '#c4c5ce',
        'mac-header': '#e3e2e4',
        'mac-body': '#5b5d7a',
      },
      fontFamily: {
        'mac-terminal': [
          // 'MonacoWeb',
          'Monaco',
          'Consolas',
          'Lucida Console',
          'monospace',
        ],
      },
      height: {
        136: '136px',
      },
      width: {
        500: '500px',
        750: '750px',
        900: '900px',
      },
    },
  },
  plugins: [],
};
