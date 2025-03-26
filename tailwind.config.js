module.exports = {
  content: ["./frontend/src/**/*.{js,jsx,ts,tsx}"], // Scan files in src folder
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo
        secondary: "#F59E0B", // Amber
        background: "#F3F4F6", // Gray-100
        text: "#1F2937", // Gray-800
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
