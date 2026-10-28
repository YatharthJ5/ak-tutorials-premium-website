import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0F1F3D", deep: "#0A1730", soft: "#1B2F57" },
        paper: { DEFAULT: "#FBF8F1", dim: "#F3EEE1" },
        rule: "#DAD3C0",
        amber: { DEFAULT: "#C98A1B", light: "#E8B655", deep: "#8A5A00" },
        slate: { ink: "#4A5670" },
      },
      fontFamily: {
        display: ['"Fraunces Variable"', "Georgia", "serif"],
        sans: ['"Public Sans Variable"', "system-ui", "sans-serif"],
      },
      boxShadow: { sheet: "0 1px 0 #DAD3C0, 0 18px 40px -22px rgba(15,31,61,.45)" },
    },
  },
  plugins: [],
};
export default config;
