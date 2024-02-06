/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Oversa':['Oversa', 'sans-serif'],
        'quantico':['Quantico', 'sans-serif'],
      },
      keyFrame:{
        up:{
          "from": {
            transform: "translateY(10.75rem)",
            opacity: '0'
          },
          "to": {
            transform: "translateY(0rem)",
            opacity: '1'
          },
        },
      },  
      animation:{
        'gone-up': 'up 1.6s ease-in-out both',
        // 'go-down': 'drop 3s ease-in-out both',
      },
    },
  },
  plugins: [],
}

