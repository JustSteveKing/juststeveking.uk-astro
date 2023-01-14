/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'laravel-news': '#ff2d20d9',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
