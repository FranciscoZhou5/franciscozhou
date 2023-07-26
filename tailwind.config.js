/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--inter-font)"],
      },

      colors: {
        primary: "#6B65E4",
      },

      textColor: {
        black: "#0f172A",
        foreground: "#0f172A",
        "secundary-foreground": "#3f4555",
      },

      backgroundColor: {
        primary: "#6B65E4",

        background: "#FFFFFF",
        secundary: "#EBEBEB",
      },
    },
  },
  plugins: [],
};
