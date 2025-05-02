
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				serif: ['"Times New Roman"', 'Times', 'serif'],
			},
			colors: {
				border: '#EEEEEE',
				input: '#EEEEEE',
				ring: '#000000',
				background: '#FAFAFA',
				foreground: '#000000',
				primary: {
					DEFAULT: '#000000',
					foreground: '#FAFAFA'
				},
				secondary: {
					DEFAULT: '#EEEEEE',
					foreground: '#000000'
				},
				destructive: {
					DEFAULT: '#000000',
					foreground: '#FAFAFA'
				},
				muted: {
					DEFAULT: '#EEEEEE',
					foreground: '#555555'
				},
				accent: {
					DEFAULT: '#EEEEEE',
					foreground: '#000000'
				},
				popover: {
					DEFAULT: '#FAFAFA',
					foreground: '#000000'
				},
				card: {
					DEFAULT: '#FAFAFA',
					foreground: '#000000'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'type-cursor': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				},
				'page-transition': {
					'0%': { opacity: '0', transform: 'translateY(5px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'type-cursor': 'type-cursor 0.7s infinite',
				'page-transition': 'page-transition 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
