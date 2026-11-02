/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wanderly: {
          dark: '#0A1A14',
          emerald: '#1A4F36',
          'emerald-hover': '#226244',
          'emerald-light': '#2A7250',
          'emerald-subtle': '#EAF3EF',
          gold: '#FFC857',
          'gold-hover': '#E5B44E',
          'gold-subtle': '#FFF8EB',
          offwhite: '#FAFAFA',
          softbg: '#F9FAFB',
          text: '#111827',
          muted: '#6B7280',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
        'glass-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.15)',
        'glass-hover': '0 12px 40px 0 rgba(0, 0, 0, 0.35)',
        'emerald-glow': '0 0 25px rgba(26, 79, 54, 0.4)',
        'gold-glow': '0 0 25px rgba(255, 200, 87, 0.35)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        }
      }
    },
  },
  plugins: [],
}
