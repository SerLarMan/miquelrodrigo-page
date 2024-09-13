/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        xs: "",
        s: "",
        m: "",
        l: "",
        xl: "",
        xxl: "",
      },
      padding: {
        xs: "",
        s: "",
        m: "",
        l: "",
        xl: "",
        xxl: "",
      },
      colors: {
        primary: {
          DEFAULT: "#000000",
          100: "#333333",
          200: "#666666",
          300: "#b3b3b3"
        },
        secondary: {
          100: "#e0d9cc",
          200: "#c2b49a",
          300: "#a38e67",
          400: "#856935",
          DEFAULT: "#674403",
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
