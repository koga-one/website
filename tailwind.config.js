module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "800px",
      desktop: "1248px",
    },
    boxShadow: {
      sm: "0px 4px 0px 0px rgba(255, 255, 255, 1)",
    },
    colors: {
      kami: "#F4F0F0",
      gure: "#9ba4ba",
      katsu: "#181B39",
      moku: "#3A3734",
      aka: "#F43F5E",
      ki: "#EAB308",
      midori: "#59C274",
    },
    fontSize: {
      txt: "16px",
      d1: "260px",
      d2: "160px",
      d3: ["90px", { lineHeight: "102px" }],
      h1: ["66px", { lineHeight: "78px" }],
      h2: "50px",
      h3: ["38px", { lineHeight: "42px" }],
      h4: ["30px", { lineHeight: "38px" }],
      h5: "22px",
      h6: "18px",
    },
    borderRadius: {
      md: "4px",
      lg: "12px",
      full: "9999px",
      none: "0px",
    },
    fontFamily: {
      garamond: "EB Garamond, serif",
      inter: "Inter, sans-serif",
      fira: "Fira Code, monospace",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
