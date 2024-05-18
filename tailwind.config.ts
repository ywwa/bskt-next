import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "squared": `
          radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.005) 0,
            rgba(255, 255, 255, 0.005) 1px,
            transparent 1px
          ),
          linear-gradient(
            to right,
            rgba(255, 255, 255, 0.01) 1px,
            transparent 1px
          ),
          linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.01) 1px,
            transparent 1px
          )
        `,
      },
    },
  },
  plugins: [],
};
export default config;
