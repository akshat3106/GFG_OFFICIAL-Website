import type { Config } from "tailwindcss"

const config = {
    // darkMode: "class",
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border) / <alpha-value>)",
                input: "hsl(var(--input) / <alpha-value>)",
                ring: "hsl(var(--ring) / <alpha-value>)",
                background: "hsl(var(--background) / <alpha-value>)",
                foreground: "hsl(var(--foreground) / <alpha-value>)",
                primary: {
                    DEFAULT: "hsl(var(--primary) / <alpha-value>)",
                    foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
                    foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
                    foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted) / <alpha-value>)",
                    foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent) / <alpha-value>)",
                    foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover) / <alpha-value>)",
                    foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
                },
                card: {
                    DEFAULT: "hsl(var(--card) / <alpha-value>)",
                    foreground: "hsl(var(--card-foreground) / <alpha-value>)",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
                mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "grid-flow": {
                    "0%": { backgroundPosition: "0 0" },
                    "100%": { backgroundPosition: "40px 40px" }
                },
                "blink": {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.5" }
                },
                "marquee": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - 2rem))" }
                },
                "float": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" }
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)" },
                    "50%": { opacity: "0.8", boxShadow: "0 0 40px rgba(34, 197, 94, 0.2)" }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "grid-flow": "grid-flow 20s linear infinite",
                "blink": "blink 2s ease-in-out infinite",
                "marquee": "marquee 25s linear infinite",
                "float": "float 6s ease-in-out infinite",
                "pulse-glow": "pulse-glow 3s infinite",
            },
            boxShadow: {
                "tech": "0 2px 10px rgba(0,0,0,0.5)",
                "tech-hover": "0 5px 15px rgba(34, 197, 94, 0.3)",
                "inner-glow": "inset 0 0 20px rgba(34, 197, 94, 0.1)",
                "neon": "0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2)",
            },
            backgroundImage: {
                "tech-grid": "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
                "tech-dot": "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "hero-glow": "conic-gradient(from 180deg at 50% 50%, #22c55e33 0deg, #000000 180deg, #22c55e33 360deg)",
            },
        },
    },
    plugins: [],
} satisfies Config

export default config
