/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#020203",
        "dark-gray": "#282D30",
        "light-gray": "#FBFBFB",
        "icon-calories": "#FF00000D",
        "icon-protein": "#4AB8FF1A",
        "icon-carbs": "#F9CE2333",
        "icon-lipids": "#FD51811A",
      },
      screens: {
        lg: "1030px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        hero: "48px",
        nav: "24px",
        "card-value": "20px",
        body: "18px",
        "chart-title": "15px",
        label: "14px",
        small: "12px",
        tooltip: "7px",
      },
    },
  },
  plugins: [],
};
