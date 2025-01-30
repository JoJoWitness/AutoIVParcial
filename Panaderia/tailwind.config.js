/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				primary: '#d0a97b',
				secondary: '#915c3b',
				tertiary: '#c08451',
				// background: {
				// 	DEFAULT: '#FFFFFF',
				// 	100: '#CDD0CC',
				// },
					// `statsOne: {
					// 	DEFAULT: '#bb109d',
					// 	100: '#cf005d',
					// 	200: '#dc4f43',
					// 	300: '#f7924f',
					// 	400: '#ffcc73',
					// },
					// statsTwo: {
					// 	DEFAULT: '#00cadc',
					// 	100: '#49c3fb',
					// 	200: '#65a6fa',
					// 	300: '#7e80e7',
					// 	400: '#9b57cc',
					// },
					// statsThree: {
					// 	DEFAULT: '#00bf63',
					// 	100: '#00bea4',
					// 	200: '#57d0d3',
					// 	300: '#6cbbd5',
					// 	400: '#6296bf',
					// },`
				text: '#000000'
			}
		},
	},
	plugins: [],
}
