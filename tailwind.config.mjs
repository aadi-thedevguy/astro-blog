/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", ...defaultTheme.fontFamily.sans],
        Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "hsl(var(--bg-primary))",
        textPrimary: "hsl(var(--text-primary))",
        textSecondary: "hsl(var(--text-secondary))",
        accent: "hsl(var(--accent))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
