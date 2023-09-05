import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#FF7F7F',
        ATier: '#F1AC7F',
        BTier: '#F4EFA4',
        CTier: '#62B198',
        DTier: '#7FBFFF',
        ETier: '#7F7FFF',
        FTier: '#D183D1',
      },
    }
  },
  plugins: [],
} satisfies Config;
