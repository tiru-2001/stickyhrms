/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#005151",
        lightGray: "#AAC0C0",
        darkTeal: "#06776A",
        black: "#000000",
        white: "#FFFFFF",
        yellow: "#FFC600",
        customGray: "#B3CBCB",
        lightBlack30: "rgba(0, 0, 0, 0.3)",
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        lg: "4px 4px 8px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      fontSize: {
        sm: "0.975rem",
        smm: "1.0rem",
        lg: "1.25rem",
        lgr: "1.30rem",
      },
      height: {
        40: "8rem",
        80: "22rem", // Adjust this as needed
      },
      width: {
        40: "8rem", // Adjust this as needed
        72: "18rem",
        80: "22rem", // Adjust this as needed
      },
      borderRadius: {
        DEFAULT: "0.375rem", // 6px
        lg: "0.75rem", // 12px
        xl: "1rem", // 16px
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-default": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-md": {
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        },
      });
    },
  ],
};
