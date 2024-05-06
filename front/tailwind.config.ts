import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      cerulean: "#1B4FC2",
      pampas: "#F2EEEB",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        fraunces: ["var(--font-fraunces)"],
      },
    },
  },
  plugins: [],
};
export default config;
