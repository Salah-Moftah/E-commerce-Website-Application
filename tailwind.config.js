/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    container: {
      padding: {
        DEFAULT: "0rem",
        sm: "1rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    colors: {
      primary: "#53c28b",
      secondary: "#bbb",
      bgDark: '#2d2d2d',
    },
  },
};
