/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      ultraSm: "300px",
      foldSize: "280px",
      sm: "	640px",
      md: "	768px",
      lg: "1024px",
      xl: "1280px",
      double_xl: "1536px",
    },
    fontFamily: {
      caveat: ["Caveat", "cursive"],
      Poppins: ["Poppins", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      sans: ["ui-sans-serif", "system-ui"],
      Jost: ["Jost", "system-ui"],
    },
  },
  daisyui: {
    themes: ["cmyk"],
  },
  plugins: [require("daisyui")],
};
