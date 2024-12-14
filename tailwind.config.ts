import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0)" },
          "75%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        shake: "shake 4s ease-in-out infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        amatic: ['AmaticSC', 'sans-serif'],
      },
      screens: {
        xs: '300px',
      },
    },
  },
  plugins: [],
} satisfies Config;
