/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#111827",
          "bg-secondary": "#1F2937",
          "bg-tertiary": "#374151",
          card: "#1F2937",
          border: "#374151",
          text: "#F9FAFB",
          "text-secondary": "#D1D5DB",
          "input-bg": "#1F2937",
          "input-border": "#4B5563",
          "input-focus": "#6366F1",
          hover: "#4B5563",
          "button-primary": "#4F46E5",
          "button-primary-hover": "#4338CA",
        },
      },
    },
  },
};
