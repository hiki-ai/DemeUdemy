/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED',
          hover: '#6D28D9',
          light: '#A78BFA',
        },
        secondary: '#A855F7',
        accent: '#F472B6',
        text: {
          DEFAULT: '#111827',
          secondary: '#4B5563',
          muted: '#9CA3AF',
        },
        background: {
          DEFAULT: '#F9FAFB',
          light: '#F3F4F6',
          dark: '#111827',
        },
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'premium': '0 20px 50px rgba(0, 0, 0, 0.05)',
        'glass': '0 8px 32px 0 rgba(124, 58, 237, 0.08)',
        'violet-glow': '0 0 20px rgba(124, 58, 237, 0.15)',
        'neon-purple': '0 0 25px rgba(124, 58, 237, 0.4), 0 0 50px rgba(124, 58, 237, 0.1)',
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
        'dark-gradient': 'linear-gradient(180deg, #111827 0%, #1F2937 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      screens: {
        'xs': '475px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
