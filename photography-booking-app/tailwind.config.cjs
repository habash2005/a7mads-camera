/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        text: "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        surface: "hsl(var(--surface))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.06)",
        ring: "0 0 0 2px hsl(var(--accent) / .2)"
      },
      borderRadius: {
        xl2: "1rem",
        pill: "999px"
      }
    }
  },
  plugins: []
}
