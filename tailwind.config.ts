import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(drawer|pagination|tabs|modal).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'midnight': {
          '50': '#e7f6ff',
          '100': '#d3eeff',
          '200': '#b0ddff',
          '300': '#80c4ff',
          '400': '#4f9aff',
          '500': '#276fff',
          '600': '#0342ff',
          '700': '#0042ff',
          '800': '#0036d4',
          '900': '#0b36a4',
          '950': '#030d2b',
        },
      },
    },
  },
  plugins: [heroui()],
};
export default config;
