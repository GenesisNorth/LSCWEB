/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Poppins"],
        Protest: ["Protest Revolution"],
      },
      screens: {
        mobile: { max: "375px" }, // Target screens 375px or smaller for mobile
        desktop: "1204px", // Targets screens 375px wide or smaller
      },
    },
  },
  plugins: [],
};
