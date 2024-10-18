import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./redux/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      sm: "5px",
      md: "10px",
      lg: "20px",
      full: "9999px",
    },
    extend: {
      colors: {
        brand: "#FDA04F",
        gradientTop: "#E9BD9C",
        gradientBottom: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
