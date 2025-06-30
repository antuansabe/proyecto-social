import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de documento oficial vintage
        'paper': {
          50: '#fdfcfb',
          100: '#fbf9f6',
          200: '#f8f4ec',
          300: '#f5efdf',
          400: '#f0e7d1',
          500: '#eadfc3',
          600: '#d4c5a1',
          700: '#c0ab7f',
          800: '#a6915d',
          900: '#8a763b',
        },
        'ink': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#1a1a1a',
        },
        'seal': {
          50: '#fef7f6',
          100: '#fceeed',
          200: '#f9ddda',
          300: '#f4c0ba',
          400: '#ed978c',
          500: '#e16e5f',
          600: '#cd5442',
          700: '#a94438',
          800: '#8c3d33',
          900: '#743832',
          950: '#3f1c17',
        },
        // Colores utilitarios
        'document': '#f8f4ec',
        'text-primary': '#1a1a1a',
        'text-secondary': '#4c4c4c',
        'accent': '#a94438',
        'border': '#d4c5a1',
      },
      fontFamily: {
        'mono': ['IBM Plex Mono', 'Courier Prime', 'Courier New', 'monospace'],
        'sans': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        'typewriter': ['Courier Prime', 'IBM Plex Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.6' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.7' }],
        'lg': ['1.125rem', { lineHeight: '1.7' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.4' }],
        '4xl': ['2.25rem', { lineHeight: '1.3' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderWidth: {
        '1': '1px',
        '3': '3px',
      },
      boxShadow: {
        'paper': '0 2px 8px 0 rgba(0, 0, 0, 0.08)',
        'stamp': '0 1px 3px 0 rgba(169, 68, 56, 0.1)',
        'inset-line': 'inset 0 1px 0 0 rgba(212, 197, 161, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'typewriter': 'typewriter 2s steps(40) 1s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      backgroundImage: {
        'paper-texture': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+Cjwvc3ZnPgo=')",
      },
    },
  },
  plugins: [],
};

export default config;