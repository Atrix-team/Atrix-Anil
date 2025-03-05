/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cs_blue: "#00a2dc",
        cs_green: "#00a657",
        cs_white: "#d8d8d8",
        cs_black: "#262626",
        cs_theme_black: "#181818",
        cs_gray_text: "#888888",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".row": {
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          padding: " 0 15px",
        },
      });
    },
  ],
};
