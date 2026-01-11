module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html,js}",
    "./src/**/*.{html,js}",
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Soft comfort, main emotional safety
        primary: {
          DEFAULT: "#FFE1E6", // pink-100
          50: "#FFF5F7", // pink-50
          100: "#FFE1E6", // pink-100
          200: "#FFCCD5", // pink-200
          300: "#FFB3C1", // pink-300
          400: "#FF8FA3", // pink-400
          500: "#FF6B88", // pink-500
        },
        // Secondary Colors - Gentle support, breathing space
        secondary: {
          DEFAULT: "#FFF0F3", // pink-50
          50: "#FFFBFC", // pink-25
          100: "#FFF0F3", // pink-50
          200: "#FFE5EA", // pink-100
          300: "#FFD6DE", // pink-150
        },
        // Accent Colors - Tender highlights, special moments
        accent: {
          DEFAULT: "#F3E8FF", // purple-100
          50: "#FAF5FF", // purple-50
          100: "#F3E8FF", // purple-100
          200: "#E9D5FF", // purple-200
          300: "#D8B4FE", // purple-300
          400: "#C084FC", // purple-400
        },
        // Background Colors - Pure canvas, clean emotional slate
        background: {
          DEFAULT: "#FEFCFD", // neutral-50
          alt: "#FEFCFD", // neutral-50
        },
        // Surface Colors - Subtle cards, gentle content separation
        surface: {
          DEFAULT: "#F8F4F6", // warm-gray-50
          hover: "#F5F0F2", // warm-gray-100
          active: "#F0EBED", // warm-gray-150
        },
        // Text Colors - Warm readability, intimate conversation
        text: {
          primary: "#2D1B2E", // purple-900
          secondary: "#6B4C6D", // purple-700
          tertiary: "#9B7C9D", // purple-500
          disabled: "#C4B0C5", // purple-300
        },
        // Status Colors
        success: {
          DEFAULT: "#E8F5E8", // green-50
          dark: "#4CAF50", // green-500
        },
        warning: {
          DEFAULT: "#FFF4E6", // orange-50
          dark: "#FF9800", // orange-500
        },
        error: {
          DEFAULT: "#FFE8E8", // red-50
          dark: "#F44336", // red-500
        },
      },
      fontFamily: {
        headline: ['Nunito', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        cta: ['Quicksand', 'sans-serif'],
        accent: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h1': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h2': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'gentle': '0 4px 20px rgba(255, 225, 230, 0.3)',
        'deep': '0 8px 32px rgba(255, 225, 230, 0.4)',
        'soft': '0 2px 12px rgba(255, 225, 230, 0.2)',
        'inner-gentle': 'inset 0 2px 8px rgba(255, 225, 230, 0.15)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'gentle': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'reveal-up': 'revealUp 300ms ease-out forwards',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 500ms ease-out forwards',
      },
      keyframes: {
        revealUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulseGentle: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        fadeIn: {
          'from': {
            opacity: '0',
          },
          'to': {
            opacity: '1',
          },
        },
      },
      backdropBlur: {
        'gentle': '12px',
      },
    },
  },
  plugins: [],
}