import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      fontFamily: {
        sans: ['var(--font-lato)', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'serif'],
        noto: ['var(--font-noto-sans-telugu)', 'sans-serif'], // Noto Sans Telugu
        baloo: ['var(--font-baloo-tamma-2)', 'cursive'], // Baloo Tamma 2
      },
  		colors: {
        // Updated based on globals.css HSL variables - Pastel Palette
  			background: 'hsl(var(--background))', // Champagne Beige
  			foreground: 'hsl(var(--foreground))', // Near Black
  			card: {
  				DEFAULT: 'hsl(var(--card))', // White
  				foreground: 'hsl(var(--card-foreground))' // Dark grey
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))', // White
  				foreground: 'hsl(var(--popover-foreground))' // Near Black
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))', // Mint Green
  				foreground: 'hsl(var(--primary-foreground))' // Dark text on Mint
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))', // Ice Blue
  				foreground: 'hsl(var(--secondary-foreground))' // Dark text on Ice Blue
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))', // Very Light Grey
  				foreground: 'hsl(var(--muted-foreground))' // Darker Muted Grey
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))', // Powder Pink
  				foreground: 'hsl(var(--accent-foreground))' // Dark text on Pink
  			},
            lavender: { // Added Lavender
                DEFAULT: 'hsl(var(--lavender))',
                foreground: 'hsl(var(--lavender-foreground))',
            },
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))', // Slightly darker border
  			input: 'hsl(var(--input))', // Slightly off-white input background
  			ring: 'hsl(var(--ring))', // Mint Green ring
  			chart: {
  				'1': 'hsl(var(--chart-1))', // Mint Green
  				'2': 'hsl(var(--chart-2))', // Ice Blue
  				'3': 'hsl(var(--chart-3))', // Powder Pink
  				'4': 'hsl(var(--chart-4))', // Soft Lavender
  				'5': 'hsl(var(--chart-5))'  // Champagne Beige
  			},
        // Updated Sidebar colors
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))', // Champagne Beige
  				foreground: 'hsl(var(--sidebar-foreground))', // Dark grey
  				primary: 'hsl(var(--sidebar-primary))', // Mint Green
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))', // Dark text
  				accent: 'hsl(var(--sidebar-accent))', // Lighter grey accent
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))' // Mint Green ring
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)', // 0.75rem (increased)
  			md: 'calc(var(--radius) - 4px)', // 0.5rem
  			sm: 'calc(var(--radius) - 6px)' // 0.375rem
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
         'curtain-reveal': {
          from: { opacity: '0', transform: 'scaleY(0)', transformOrigin: 'top' },
          to: { opacity: '1', transform: 'scaleY(1)', transformOrigin: 'top' },
        },
        'fade-in-slow': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
         'curtain-reveal': 'curtain-reveal 0.8s ease-out forwards',
         'fade-in-slow': 'fade-in-slow 1.2s ease-in-out forwards',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
