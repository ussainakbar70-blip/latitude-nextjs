import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0A1033",
          800: "#121A46",
        },
        gold: {
          DEFAULT: "#C9A34A",
          warm: "#D6B45B",
        },
        bg: "#F8F7F3",
        ink: "#111827",
        muted: "#667085",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        heroZoom: {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
        scrollDown: {
          "0%": { top: "-20px" },
          "100%": { top: "36px" },
        },
      },
      animation: {
        heroZoom: "heroZoom 16s ease-out forwards",
        scrollDown: "scrollDown 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
