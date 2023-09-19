/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      default:
        "-apple-system, BlinkMacSystemFont,Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    },
    colors: {
      transparent: "transparent",
      "background-light-primary": "#f5f5f5",
      "background-light-secondary": "#E5E5E5",

      "pink-light": "#FF2D55",

      "gray-light": {
        100: "#8E8E93",
        200: "#AEAEB2",
        300: "#C7C7CC",
        400: "#D1D1D6",
        500: "#E5E5EA",
        600: "#F2F2F7",
        700: "#F8F8FA",
        800: "#FCFCFD",
      },

      black: "#000000",
      "black-secondary": "#1A1A1A",
      "black-tertiary": "#3C3C43",

      white: "#FFFFFF",
      "white-secondary": "#E0E0E0",
      "white-tertiary": "#DFDEDF",

      "background-dark-primary": "#121212",
      "background-dark-secondary": "#202020",

      "pink-dark": "#FF2D55",

      "gray-dark": {
        100: "#8E8E93",
        200: "#767679",
        300: "#636366",
        400: "#48484A",
        500: "#3A3A3C",
        600: "#2C2C2E",
        700: "#1C1C1E",
        800: "#0E0E0E",
      },
    },
    fontSize: {
      xs: "0.75rem",
      "xs+": "0.8125rem",
      sm: "0.875rem",
      "sm+": "0.9375rem",
      base: "1rem",
      "base+": "1.0625rem",
      lg: "1.125rem",
      "lg+": "1.1875rem",
      xl: "1.3125rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "2.5rem",
    },
    extend: {},
  },
  plugins: [],
};
