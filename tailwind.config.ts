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
        // Updated based on globals.css HSL variables
  			background: 'hsl(var(--background))', // Off-white / Very Light Greyish Beige
  			foreground: 'hsl(var(--foreground))', // Warm Grey / Dark Grey
  			card: {
  				DEFAULT: 'hsl(var(--card))', // Slightly lighter than background
  				foreground: 'hsl(var(--card-foreground))' // Slightly darker grey
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))', // Teal
  				foreground: 'hsl(var(--primary-foreground))' // Very light contrast
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))', // Maroon
  				foreground: 'hsl(var(--secondary-foreground))' // Very light contrast
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))', // Muted Grey
  				foreground: 'hsl(var(--muted-foreground))' // Darker Muted Grey
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))', // Gold
  				foreground: 'hsl(var(--accent-foreground))' // Dark contrast
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))', // Lighter Grey border
  			input: 'hsl(var(--input))', // Slightly darker Grey input
  			ring: 'hsl(var(--ring))', // Teal ring
  			chart: {
  				'1': 'hsl(var(--chart-1))', // Teal
  				'2': 'hsl(var(--chart-2))', // Maroon
  				'3': 'hsl(var(--chart-3))', // Gold
  				'4': 'hsl(var(--chart-4))', // Lighter Teal
  				'5': 'hsl(var(--chart-5))'  // Lighter Maroon
  			},
        // Updated Sidebar colors to match the new theme
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))', // Off-white variation
  				foreground: 'hsl(var(--sidebar-foreground))', // Warm Grey
  				primary: 'hsl(var(--sidebar-primary))', // Teal
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))', // Lighter grey accent
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)', // 0.5rem
  			md: 'calc(var(--radius) - 2px)', // 0.375rem
  			sm: 'calc(var(--radius) - 4px)' // 0.25rem
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
