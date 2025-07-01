// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        fondo: "var(--fondo)",
        violeta: "var(--violeta)",
        "violeta-claro": "var(--violeta-claro)",
        lavanda: "var(--lavanda)",
        dorado: "var(--dorado)",
        blanco: "var(--blanco)",
        texto: "var(--text)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
        },
      },
    },
  },
  plugins: [],
};
