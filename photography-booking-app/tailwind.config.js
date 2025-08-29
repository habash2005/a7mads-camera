/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        charcoal: "#111827",
        slate: "#1F2937",
        paper: "#E5E7EB",
        muted: "#9CA3AF",
        electric: "#2563EB",
        cobalt: "#1E40AF",
        bronze: "#B08968",
        border: "rgba(255,255,255,.08)"
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,.35)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: []
}
