import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       
    },
    screens:{
      Xs: "500px",
      sm: "639px",
      md: "769px",
      lg: "1025px",
      "xl-lg":"1100px",
      xl:"1350px",
  
    }
  }
  },
  plugins: [],
} satisfies Config;
