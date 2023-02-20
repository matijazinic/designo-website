/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: "#E7816B",
        "brand-alt": "#FDF3F0",
      },
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
        "hero-pattern":
          "url('/designo-website/assets/home/desktop/bg-pattern-hero-home.svg')",
        "web-design-small":
          "url('/designo-website/assets/home/desktop/image-web-design-small.jpg')",
        "web-design-large":
          "url('/designo-website/assets/home/desktop/image-web-design-large.jpg')",
        "app-design":
          "url('/designo-website/assets/home/desktop/image-app-design.jpg')",
        "graphic-design":
          "url('/designo-website/assets/home/desktop/image-graphic-design.jpg')",
      },
    },
  },
  plugins: [],
};
