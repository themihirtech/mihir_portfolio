
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          dark: "#0a0a0f",
          light: "#ffffff",
        },
        foreground: {
          dark: "#ffffff",
          light: "#0a0a0f",
        },
        primary: {
          DEFAULT: "#6B46FE",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#1A1A1A",
          foreground: "#FFFFFF",
        },
      },
      keyframes: {
        "saturn-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "ring-glow": {
          "0%": { boxShadow: "0 0 10px #6B46FE, 0 0 20px #6B46FE, 0 0 30px #6B46FE" },
          "50%": { boxShadow: "0 0 20px #6B46FE, 0 0 40px #6B46FE, 0 0 60px #6B46FE" },
          "100%": { boxShadow: "0 0 10px #6B46FE, 0 0 20px #6B46FE, 0 0 30px #6B46FE" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-20deg)" },
          "75%": { transform: "rotate(20deg)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "saturn-spin": "saturn-spin 20s linear infinite",
        "ring-glow": "ring-glow 3s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out",
        "wave": "wave 1.5s infinite",
        "scroll": "scroll 60s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
