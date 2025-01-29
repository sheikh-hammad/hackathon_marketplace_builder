import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
            fontFamily: {
              inter: 'var(--font-inter)',
              helvetica: "var(--font-helvetica)",
              roboto: "var(--font-roboto)",
              openSans: "var(--font-openSans)",
              poppins: "var(--font-poppins)",
            },
            letterSpacing: {
              'custom-percentage': '0.02em',
            },
            screens: {
              '3xl': '1920px',
              '2.5xl': '1800px',
              'xs': '440px',
            },
            lineHeight: {
              '110': '1.1',
              '120': '1.2',
              '130': '1.3',
              '150': '1.5',
            },
          },
  },
  plugins: [],
} satisfies Config;
