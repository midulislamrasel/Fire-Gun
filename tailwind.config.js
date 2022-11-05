/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#30c98e",
        
"secondary": "#b8d341",
        
"accent": "#e59b95",
        
"neutral": "#1B141F",
        
"base-100": "#FAF8FB",
        
"info": "#496ED4",
        
"success": "#66E1B6",
        
"warning": "#F4B14E",
        
"error": "#FA6697",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
