/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* chocolate-brown-20 */
        input: 'var(--color-input)', /* cream-50 */
        ring: 'var(--color-ring)', /* croissant-gold */
        background: 'var(--color-background)', /* cream-50 */
        foreground: 'var(--color-foreground)', /* dark-chocolate */
        primary: {
          DEFAULT: 'var(--color-primary)', /* croissant-gold */
          foreground: 'var(--color-primary-foreground)', /* dark-chocolate */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* chocolate-brown */
          foreground: 'var(--color-secondary-foreground)', /* cream-50 */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* burnt-sienna */
          foreground: 'var(--color-destructive-foreground)', /* cream-50 */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* warm-gray-50 */
          foreground: 'var(--color-muted-foreground)', /* medium-brown */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* buttery-highlight */
          foreground: 'var(--color-accent-foreground)', /* dark-chocolate */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* cream-50 */
          foreground: 'var(--color-popover-foreground)', /* dark-chocolate */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* warm-gray-50 */
          foreground: 'var(--color-card-foreground)', /* dark-chocolate */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* herb-green */
          foreground: 'var(--color-success-foreground)', /* cream-50 */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* croissant-gold */
          foreground: 'var(--color-warning-foreground)', /* dark-chocolate */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* burnt-sienna */
          foreground: 'var(--color-error-foreground)', /* cream-50 */
        },
        'french-blue': {
          DEFAULT: 'var(--color-french-blue)', /* french-blue */
          foreground: 'var(--color-french-blue-foreground)', /* cream-50 */
        },
        'french-red': {
          DEFAULT: 'var(--color-french-red)', /* french-red */
          foreground: 'var(--color-french-red-foreground)', /* cream-50 */
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Dancing Script', 'cursive'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      spacing: {
        'xs': 'var(--spacing-xs)', /* 8px */
        'sm': 'var(--spacing-sm)', /* 12px */
        'md': 'var(--spacing-md)', /* 18px */
        'lg': 'var(--spacing-lg)', /* 24px */
        'xl': 'var(--spacing-xl)', /* 36px */
        '2xl': 'var(--spacing-2xl)', /* 54px */
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'warm': 'var(--shadow-warm)',
        'warm-lg': 'var(--shadow-warm-lg)',
        'chocolate': 'var(--shadow-chocolate)',
      },
      animation: {
        'delivery-pulse': 'delivery-pulse 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'warm': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}