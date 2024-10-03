import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '639px'},  
        'md': {'max': '767px'},  
        'lg': {'max': '1023px'}, 
        'xl': {'max': '1279px'}, 
        '2xl': {'max': '1535px'}, 
      },
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


