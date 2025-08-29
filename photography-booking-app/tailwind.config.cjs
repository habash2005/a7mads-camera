/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 18px 40px -20px rgba(0,0,0,.55)",
        ring: "0 0 0 1px var(--border)",
      },
      borderRadius: { xl2: "1rem", pill: "999px" },
      screens: { "2xl": "1440px" },
      // (optional) map CSS variables to Tailwind colors so you can use text-accent, bg-bg, etc.
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        elev: "var(--elev)",
        text: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-600": "var(--accent-600)",
      },
    },
  },
  plugins: [],
};
