export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'progress': 'progress 3s ease-in-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite'
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '75%' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.5))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 12px rgba(245, 158, 11, 0.8))' }
        }
      }
    },
  },
  plugins: [],
};