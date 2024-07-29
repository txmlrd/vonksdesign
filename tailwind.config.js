/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.2)',
        md: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        lg: '4px 4px 6px rgba(0, 0, 0, 0.4)',
        xl: '6px 6px 8px rgba(0, 0, 0, 0.5)',
        neon: '0 0 5px rgba(255, 215, 0), 0 0 10px rgba(255, 215, 0), 0 0 15px rgba(255, 215, 0)',
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        averta: ['AvertaStd', ...fontFamily.sans],
        helvetica: ['Helvetica', 'sans-serif'],
        futura: ['Futura', 'sans-serif'],
        helveticalight: ['Helvetica Light', 'sans-serif'],
      },
      fontWeight: {
        light: 350,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      colors: {
        warna: {
          abu: '#2C2C2C',
          gold: '#EF3352',
        },
        primary: {
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          //* Background
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          //* Complement
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          //* Default
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          //* Hovered
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          //* Active
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        secondary: {
          50: '#EFF9F8',
          //* Background
          100: '#E8F4F3',
          200: '#E0F3F1',
          //* Complement
          300: '#D0EDEB',
          400: '#A2DBD7',
          //* Default
          500: '#40A69F',
          //* Hovered
          600: '#3B9993',
          //* Active
          700: '#2F7A75',
          800: '#235C58',
          900: '#173D3A',
        },
        typo: {
          DEFAULT: '#1F1F1F',
          secondary: '#707070',
          tertiary: '#999CA0',
          icons: '#999CA0',
          divider: '#EBEBEB',
          outline: '#D9D9D9',
        },
        dark: '#222222',
        light: '#F5F5F5',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            opacity: 1,
            filter: 'drop-shadow(0 0 5px #FFFFFF)',
          },
          '50%': {
            opacity: 0.8,
            filter: 'drop-shadow(0 0 10px #000000)',
          },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 15px rgba(255, 215, 0, 0.7)) drop-shadow(0 0 1px rgba(255, 255, 255, 0.9))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        bounceSlow: {
          // Define the keyframes for bounceSlow animation
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-30px)',
          },
          '60%': {
            transform: 'translateY(-15px)',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite alternate',
        shimmer: 'shimmer 1.3s linear infinite',
        bounceslow: 'bounceSlow 3s linear infinite',
        glow: 'glow 5s infinite ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-animate'),
    function ({ addUtilities }) {
      addUtilities(
        {
          '.text-shadow': {
            textShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
          },
          '.text-shadow-sm': {
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
          },
          '.text-shadow-md': {
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          },
          '.text-shadow-lg': {
            textShadow: '4px 4px 6px rgba(0, 0, 0, 0.4)',
          },
          '.text-shadow-xl': {
            textShadow: '6px 6px 8px rgba(0, 0, 0, 0.5)',
          },
          '.text-shadow-neon': {
            textShadow:
              '0 0 5px rgba(255, 215, 0), 0 0 10px rgba(255, 215, 0), 0 0 15px rgba(255, 215, 0)',
          },
        },
        ['responsive', 'hover'],
      );
    },
  ],
};
