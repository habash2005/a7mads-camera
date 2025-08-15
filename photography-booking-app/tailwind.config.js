const { build } = require('vite');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme:{
        extend:{
            colors:{
                blush: "#FADADD",
                rose: "#F4A6A6",
                ivory: "#FFF8F0",
                charcoal: "#333333",
                gold: "#D4AF37",

            },
            fontFamily:{
                sans: ['"Poppins"', "sans-serif"],
                serif: ['"Playfair Display"', "serif"],
            },
        },
    },
    plugins: [],
}