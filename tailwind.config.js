/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      serif: ["Arial", "Helvetica", "sans-serif"],
      sans: ["Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans"]
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ffeb00", // Electric Yellow
          "secondary": "#0072c6", // Blue for Trust
          "accent": "#9900ff", // Purple for Future
          "neutral": "#141a29", // Dark shade, possibly for text or backgrounds
          "base-100": "#ffffff", // Base color, usually for background
          "info": "#3ABFF8", // A bright blue, good for informational alerts or icons
          "success": "#36D399", // A green, for success messages
          "warning": "#FBBD23", // A yellow, for warnings
          "error": "#F87272", // A red, for error messages
        },
      },
    ],
  },
  
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

