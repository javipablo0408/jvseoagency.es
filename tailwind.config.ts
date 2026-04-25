import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        panel: "#0f0f10",
        border: "#262629",
        accent: "#7dd3fc"
      },
      boxShadow: {
        glow: "0 0 80px rgba(125, 211, 252, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
