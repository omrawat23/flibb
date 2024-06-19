import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'montserrat-alternates': ['"Montserrat Alternates"', 'sans-serif'],
      },
      
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        slideDownTogether: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(100%)' }, // Adjust this value to suit your design
        },
        slideUpTogether: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-100%)' }, // Adjust this value to suit your design
        },
        slideDownUp: {
          '0%, 100%': { transform: ' translateY(0%)' },
          '50%': { transform: 'translateY(200px)' }, // Adjust the percentage to suit your design
        },
        slideUpDown: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-200px)' }, // Adjust the percentage to suit your design
        },
        bubble: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-20px)', opacity: '0' },
        },
        pulseCheckout: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        flashing: {
          '0%, 100%': { opacity: '0.2' },
          '20%': { opacity: "1" },
        },
      },
      animation: {
        slideDownTogether: 'slideDownTogether 2s ease-in-out infinite',
        slideUpTogether: 'slideUpTogether 2s ease-in-out infinite',
        slideDownUp: 'slideDownUp 4s ease-in-out infinite',
        slideUpDown: 'slideUpDown 4s ease-in-out infinite',
        bubble: 'bubble 1s ease-in-out forwards',
        pulseCheckout: 'pulseCheckout 1s ease-in-out',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'fade-in': 'fade-in 0.5s linear forwards',
        flashing: 'flashing 1.4s infinite linear',
       
      
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config