/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "5xl": [
          "3rem",
          {
            lineHeight: "1.2",
          },
        ],
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/home/desktop/bg-pattern-hero-home.svg')",
        "web-design-small":
          "url('/assets/home/desktop/image-web-design-small.jpg')",
        "web-design-large":
          "url('/assets/home/desktop/image-web-design-large.jpg')",
        "app-design": "url('/assets/home/desktop/image-app-design.jpg')",
        "graphic-design":
          "url('/assets/home/desktop/image-graphic-design.jpg')",
      },
    },
  },
  plugins: [],
};
