/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        normal: "0px 1px 10px rgba(0 ,0 ,0 , 0.05)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        "pinar-400": "pinar-400",
        "pinar-700": "pinar-700",
        arad: "Arad Regular",
        aradMedium: "Arad Medium",
        aradSemiBold: "Arad SemiBold",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
