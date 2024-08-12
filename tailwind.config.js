/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "#000000",
      background: "#ffffff",
      primary: {
        100: "#d0d0d2",
        200: "#a2a2a5",
        300: "#737377",
        400: "#45454a",
        500: "#16161d",
        600: "#121217",
        700: "#0d0d11",
        800: "#09090c",
        900: "#040406",
      },
      secondary: {
        100: "#e1dacd",
        200: "#c2b49a",
        300: "#a48f68",
        400: "#856935",
        500: "#674403",
        600: "#523602",
        700: "#3e2902",
        800: "#291b01",
        900: "#150e01",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
