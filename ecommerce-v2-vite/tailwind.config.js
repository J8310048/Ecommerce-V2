/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./page_components/**/*.{js,ts,jsx,tsx}",
    "./global_components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      phonemin: '375px',
      phonemax: '425px',
      tabletmin: '640px',
      tabletmax: '768px',
      laptop: '1024px',
      desktop: '1280px',
    },
    fontFamily: {
      Sports: ["Sports", "sans-serif"]
    },
    extend: {
      border: {
        custom: "2px solid #001F3F" // or whatever color you prefer
      },
    },
  },
  plugins: [],
};
