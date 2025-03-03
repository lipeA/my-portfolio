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
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgPrimary: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",

        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tercery: "var(--color-tertiary)",
        quaternary: "var(--color-quaternary)",
        quinary: "var(--color-quinary)",
      },
      fontFamily: {
        primary: "var( --font-Inconsolata)",
        segundary: "var( --font-MavenPro)",
        tercery: " var( --font-Asap)",
      },
    },
  },
  plugins: [],
} satisfies Config;
