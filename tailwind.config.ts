import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
         PrimaryPurple: "#5F14F3",
         SecondPurple: "#8A2BE2"
      },
      backgroundImage: {
        'gradient-hover': 'linear-gradient(to right, #5F14F3, #8A2BE2)',
      },
    },
  },
  plugins: [],
};
export default config;


