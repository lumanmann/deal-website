/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{html,}", "./layout/**/*.{ejs,}"],
  theme: {
    container:{ 
      center: true,
      padding:"12px"
    },
    extend: {
      colors: {
        newcolor: {
          DEFAULT: "red",
          "500":"blue",
        }
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
