import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{vue,ts,tsx,js,jsx}',
    './components/**/*.{vue,ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Deep Space Palette
        space: {
          900: '#0a0f1a',
          800: '#0f1729',
          700: '#141d33',
          600: '#1a2540',
          500: '#212d4d',
        },
        // Comet Accents
        comet: {
          50: '#e6f7ff',
          100: '#b3e0ff',
          200: '#80c9ff',
          300: '#4db3ff',
          400: '#1a9cff',
          500: '#0080ff',
          600: '#0066cc',
          700: '#004d99',
          800: '#003366',
          900: '#001a33',
        },
        // Silver Gradients
        silver: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Orbital Glow
        glow: {
          cyan: '#00f5ff',
          blue: '#0066ff',
          purple: '#7c3aed',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'comet-trail': 'cometTrail 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit': 'orbit 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        cometTrail: {
          '0%, 100%': { transform: 'translateX(-100%) opacity(0)' },
          '50%': { transform: 'translateX(0) opacity(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 128, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 128, 255, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'space-gradient': 'linear-gradient(180deg, #0a0f1a 0%, #0f1729 50%, #141d33 100%)',
      },
    },
  },
  plugins: [],
}

export default config
