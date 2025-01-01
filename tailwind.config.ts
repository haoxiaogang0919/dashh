import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import scrollbar from "tailwind-scrollbar";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        'max-width': 'calc(100% - 0rem)'
      }
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: {
          DEFAULT: "hsl(var(--ring))",
          foreground: "hsl(var(--ring-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animate, scrollbar, scrollbarHide],
  safelist: [
    
    'from-blue-500',
    'to-blue-600',
    'from-green-500',
    'to-green-600',
    'from-red-500',
    'to-red-600',
    'from-orange-500',  
    'to-orange-600',
    'border-sky-500',
    'border-green-500',
    'border-red-500',
    'border-purple-500',
    'text-sky-500',
    'text-green-500',
    'text-red-500',
    'text-purple-500',
    'bg-chart-profit',
    'bg-chart-revenue',
    'bg-chart-expenses',
    'bg-chart-time',
    // ... 添加其他你在 menu.tsx 中使用的渐变色类名
  ],
} satisfies Config;

