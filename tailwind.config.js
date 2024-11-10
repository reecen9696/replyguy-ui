/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // Define custom font sizes for H1
        "h1-lg": ["50px", "1.2"], // 50px font size with line-height 1.2 on large screens
        "h1-sm": ["40px", "1.2"], // 40px font size with line-height 1.2 on small screens

        // Define custom font sizes for H3
        "h3-lg": ["40px", "1.2"], // 60px font size with line-height 1.2 on large screens
        "h3-sm": ["30px", "1.2"], // 30px font size with line-height 1.2 on small screens
        "body-sm": ["14px", "1.2"], // 40px font size with line-height 1.2 on small screens
        "body-lg": ["16px", "1.2"], // 40px font size with line-height 1.2 on small screens
        "button-lg": ["16px", "1.2"], // 40px font size with line-height 1.2 on small screens
        //Time
        "time-lg": ["14px", "1.2"], // 40px font size with line-height 1.2 on small screens
      },
    },
  },
  plugins: [],
};
