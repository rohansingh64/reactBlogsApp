/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens:{

        small_one:{raw:'(max-width:550px)'},
        small_two:{raw:'(min-width:551px) and (max-width:750px)'},
        small_three:{raw:'(min-width:751px) and (max-width:1000px)'}

      },
    },
  },
  plugins: [],
}

