/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
  },



  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#47BEB9",
        
"secondary": "#372868",
        
"accent": "#05F967",
        
"neutral": "#000e14",
        
"base-100": "#FFFFFF",
        
"info": "#00f1ff",
        
"success": "#178c00",
        
"warning": "#ff9100",
        
"error": "#ff5c6e",
        },
      },
    ],
  },

  plugins: [
    require('daisyui'),

  ],
};
