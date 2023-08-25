/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{html,}", "./layout/**/*.{ejs,}", "./main.js"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 576px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8C7C68",
        },
        secondary: {
          DEFAULT: "#BFAC95",
        },
        important: {
          DEFAULT: "#73451D",
        },
        danger: {
          DEFAULT: "#3D4033",
        },
        white: {
          DEFAULT: "#F2F2F2",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
