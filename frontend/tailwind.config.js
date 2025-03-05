/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1A202C",
        primary: "#D4AF37",
        accent: "#4A5568",
        text: "#FFFFFF",
        contrastRed: "#c4062f",
        contrastBlue: "#4CC9FE",
        contrastCopper: "#f5a356",
      
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      height: {
        calc: "calc(100vh - 1rem)",
      }
    },
  },
  plugins: [],
};
