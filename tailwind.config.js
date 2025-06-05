module.exports = {
  content: [
    "./src/**/*.{html,js,css}",
    "./views/**/*.html", // si tienes vistas aquí
    "./*.html", // para index.html en la raíz
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E7D32",
        secondary: "#81C784",
      },

      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
        button: "8px",
      },

      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
