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
      // Map CSS variables so you can use text-accent, bg-bg, etc.
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        elev: "var(--elev)",
        text: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-600": "var(--accent-600)",
        // Brand/static palette used across components you pasted
        burgundy: "#5a1b2a",
        maroon: "#7a2431",
        wine: "#8b1e3f",
        rose: "#ef476f",
        gold: "#f4d06f",
        cream: "#f8f5f1",
        ivory: "#f9fafb",
        charcoal: "#1d2129",
        // a soft default border hook (used via shadow ring util)
        default: "var(--border)",
      },
      keyframes: {
        "soft-fade": { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        "rise-in": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "soft-fade": "soft-fade .4s ease both",
        "rise-in": "rise-in .45s ease both",
      },
    },
  },
  plugins: [],
};
