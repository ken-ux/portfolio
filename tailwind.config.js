/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      display: ["SF Pro Display", "system-ui", "sans-serif"],
    },
    animation: {
      fadein: "fadein 0.4s ease-in",
    },
    keyframes: {
      fadein: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    },
  },
  plugins: [],
};
