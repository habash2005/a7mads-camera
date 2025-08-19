/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // your existing palette
          blush: "#FADADD",
          rose: "#F4A6A6",
          ivory: "#FFF8F0",
          charcoal: "#333333",
          gold: "#D4AF37",
  
          // burgundy / maroon system
          burgundy: "#4A0E1A",  // deep wine
          maroon:   "#6B1224",  // slightly brighter
          wine:     "#821829",
          // helpful translucent tokens
          burgundy50: "rgba(74,14,26,0.5)",
          gold10:     "rgba(212,175,55,0.10)",
        },
        boxShadow: {
          soft: "0 6px 24px rgba(74,14,26,0.12)",
        },
        fontFamily: {
          sans: ['"Poppins"', "sans-serif"],
          serif: ['"Playfair Display"', "serif"],
        },
      },
    },
    plugins: [],
  };
  