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
      // => @media (min-width: 375px) { ... }

      phonemax: '425px',
      // => @media (min-width: 425px) { ... }

      tabletmin: '640px',
      // => @media (min-width: 640px) { ... }

      tabletmax: '768px',
      // => @media (min-width: 768px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    }, colors: {
      'rich-black' : "#071013",
      'pacific-cyan' : '#23b5d3',
      'moonstone' : '#75abbc',
      'cadet gray' : '#a2aebb',
      'platinum' : '#dfe0e2',
      'ultra violet' : '#53599a',
      'dark navy blue' : '#000435',
    },

    extend: {
      border: "border-2 border-rich-black border-solid"
    },
  },
  
  plugins: [],
};
