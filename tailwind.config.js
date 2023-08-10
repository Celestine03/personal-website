/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "success": {
          1: "#bbf7d0",
          2: "#22c55e",
          3: "#166534",
        },
        "error": {
          1: "#fecaca",
          2: "#ef4444",
          3: "#991b1b",
        },
        "slate": {
          1: "#94a3b8",
          2: "#64748b",
          3: "#1e293b",
        },
        "gray": {
          1: "#a3a3a3",
          2: "#9ca3af",
          3: "#404040",
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  darkMode: "class",
}
