/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // High-end Agency Palette
        kite: {
          black: "#060010",
          white: "#FAFAFA",
          accent: "#2563eb", // Subtle blue for links/actions
        },
        glass: {
          white: "rgba(255, 255, 255, 0.4)",
          border: "rgba(255, 255, 255, 0.2)",
        }
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      fontFamily: {
        // Use a clean sans-serif (Inter is default in Vite, but let's prep for custom)
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}