/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        /* Core System Colors */
        background: "var(--color-background)" /* white */,
        foreground: "var(--color-foreground)" /* slate-900 */,
        border: "var(--color-border)" /* slate-200 */,
        input: "var(--color-input)" /* white */,
        ring: "var(--color-ring)" /* blue-600 */,

        /* Card & Surface Colors */
        card: {
          DEFAULT: "var(--color-card)" /* white */,
          foreground: "var(--color-card-foreground)" /* slate-900 */,
        },
        popover: {
          DEFAULT: "var(--color-popover)" /* white */,
          foreground: "var(--color-popover-foreground)" /* slate-900 */,
        },
        surface: "var(--color-surface)" /* slate-50 */,

        /* Muted Colors */
        muted: {
          DEFAULT: "var(--color-muted)" /* slate-100 */,
          foreground: "var(--color-muted-foreground)" /* slate-500 */,
        },

        /* Brand Colors */
        primary: {
          DEFAULT: "var(--color-primary)" /* blue-600 */,
          foreground: "var(--color-primary-foreground)" /* white */,
        },
        secondary: {
          DEFAULT: "var(--color-secondary)" /* slate-500 */,
          foreground: "var(--color-secondary-foreground)" /* white */,
        },

        /* Accent Colors */
        accent: {
          DEFAULT: "var(--color-accent)" /* sky-500 */,
          foreground: "var(--color-accent-foreground)" /* white */,
        },

        /* Status Colors */
        success: {
          DEFAULT: "var(--color-success)" /* emerald-500 */,
          foreground: "var(--color-success-foreground)" /* white */,
        },
        warning: {
          DEFAULT: "var(--color-warning)" /* amber-500 */,
          foreground: "var(--color-warning-foreground)" /* white */,
        },
        error: {
          DEFAULT: "var(--color-error)" /* red-500 */,
          foreground: "var(--color-error-foreground)" /* white */,
        },
        destructive: {
          DEFAULT: "var(--color-destructive)" /* red-500 */,
          foreground: "var(--color-destructive-foreground)" /* white */,
        },

        /* Text Hierarchy */
        "text-primary": "var(--color-text-primary)" /* slate-900 */,
        "text-secondary": "var(--color-text-secondary)" /* slate-600 */,

        /* Brand Specific Colors */
        "brand-primary": "var(--color-brand-primary)" /* custom-navy */,
        "brand-secondary": "var(--color-brand-secondary)" /* blue-800 */,
        "conversion-accent": "var(--color-conversion-accent)" /* blue-500 */,
        "trust-builder": "var(--color-trust-builder)" /* emerald-500 */,
        "cta-urgent": "var(--color-cta-urgent)" /* red-500 */,
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      borderRadius: {
        brand: "8px",
      },
      boxShadow: {
        brand:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "brand-lg":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        interactive:
          "0 4px 6px -1px rgba(37, 99, 235, 0.1), 0 2px 4px -1px rgba(37, 99, 235, 0.06)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        morph: "morphIcon 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
        stream: "dataStream 8s linear infinite",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        brand: "300ms",
        reveal: "600ms",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
  ],
};
