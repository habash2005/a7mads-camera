/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 18px 40px -20px rgba(0,0,0,.55)",
        ring: "0 0 0 1px var(--border)",
      },
      borderRadius: { xl2: "1rem", pill: "999px" },
      screens: { "2xl": "1440px" }
    }
  },
  plugins: [],
}
