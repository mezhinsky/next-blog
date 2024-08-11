import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom sans-serif font
        serif: ["Merriweather", "serif"], // Custom serif font
        mono: ["Fira Code", "monospace"], // Custom monospace font
      },
      fontSize: {
        xs: ".75rem", // 12px
        sm: ".875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px
        "7xl": "4.5rem", // 72px
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      letterSpacing: {
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
              textDecoration: "none",
            },
            h1: {
              fontSize: theme("fontSize.5xl"),
              fontWeight: theme("fontWeight.bold"),
            },
            h2: {
              fontSize: theme("fontSize.4xl"),
              fontWeight: theme("fontWeight.bold"),
            },
            h3: {
              fontSize: theme("fontSize.3xl"),
              fontWeight: theme("fontWeight.bold"),
            },
            h4: {
              fontSize: theme("fontSize.2xl"),
              fontWeight: theme("fontWeight.bold"),
            },
            h5: {
              fontSize: theme("fontSize.xl"),
              fontWeight: theme("fontWeight.bold"),
            },
            h6: {
              fontSize: theme("fontSize.lg"),
              fontWeight: theme("fontWeight.bold"),
            },
            p: {
              fontSize: theme("fontSize.base"),
              lineHeight: theme("lineHeight.relaxed"),
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.4"),
            },
            blockquote: {
              fontSize: theme("fontSize.lg"),
              fontStyle: "italic",
              borderLeftColor: theme("colors.gray.300"),
              borderLeftWidth: theme("borderWidth.4"),
              paddingLeft: theme("spacing.4"),
              color: theme("colors.gray.500"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
