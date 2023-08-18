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
        "primary": {
          DEFAULT:"#8C7C68",
        },
        "secondary": {
          DEFAULT:"#BFAC95"
        },
        "important": {
          DEFAULT:"#73451D"
        },
        "danger": {
          DEFAULT:"#3D4033"
        },
        "white": {
          DEFAULT:"#F2F2F2"
        }
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
