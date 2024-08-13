/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d0d0d1",
          200: "#a1a1a4",
          300: "#737377",
          400: "#44444a",
          500: "#16161d",
          600: "#111117",
          700: "#0d0d11",
          800: "#08080b",
          900: "#040405",
        },
        secondary: {
          100: "#e0d9cc",
          200: "#c2b49a",
          300: "#a38e67",
          400: "#856935",
          500: "#674403",
          600: "#523602",
          700: "#3d2801",
          800: "#291b01",
          900: "#140d00",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
