import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'customSTier': '#FF7F7F',
        'customATier': '#F1AC7F',
        'customBTier': '#F4EFA4',
        'customCTier': '#62B198',
        'customDTier': '#7FBFFF',
        'customETier': '#7F7FFF',
        'customFTier': '#D183D1',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config;
