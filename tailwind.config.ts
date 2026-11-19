import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#000000",
          charcoal: "#2D2D2D",
          cocoa: "#26211E",
        },
        surface: {
          light: "#EFEFEF",
          card: "#F9F9F9",
        },
      },
      fontFamily: {
        sans: ["'Montserrat'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
        baskervville: ["'Baskervville'", "Baskerville", "Georgia", "serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
      },
      letterSpacing: {
        widest: "0.15em",
        luxury: "0.18em",
        title: "2.4px",
      },
    },
  },
  plugins: [],
};
export default config;
