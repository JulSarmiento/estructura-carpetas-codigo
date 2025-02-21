/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAUTL: "var(--color-primary)",
        light: "var(--color-primary-light)",
        dark: "var(--color-primary-dark)",
      },
      secondary: {
        DEFAUTL: "var(--color-secondary)",
        light: "var(--color-secondary-light)",
        dark: "var(--color-secondary-dark)",
      },
      complementary: {
        DEFAUTL: "var(--color-complementary)",
        light: "var(--color-complementary-light)",
        dark: "var(--color-complementary-dark)",      
      }
    },
    fontFamily: {
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [],
}

